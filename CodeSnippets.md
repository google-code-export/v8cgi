# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/CodeSnippets'>proper version of this page</a>.</b></font> #
# Code Snippets #

This page shows some simple Javascript code examples to be used with v8cgi.

## HTTP ##

### Create webpages with v8cgi (cgi/fcgi/apache module) ###
```
require("http");
response.write("<html><head><title>Test page</title></head><body><h1>Hi!</h1></body></html>");
```

### Handle uploaded file(s) ###
```
for (var file in request.files) {
  var items = request.files[file];
  if (!(items instanceof Array)) { items = [items]; }
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    var str = JSON.stringify(item);
    response.write("request.files[" + file + "]: " + str + "\n");
  }
}
```

## SQLite ##

### In-memory table + error handling ###
```
var SQLite = require("sqlite").SQLite;
try {
  var db = new SQLite().open(":memory:");
} catch(e) {
  system.stdout("[sqlite error] "+e);
}

db.query("create table test (one varchar(10), two integer primary key)");
db.query("insert into test (one, two) values ('a', 1)");
db.query("insert into test (one) values ('b')");

var result = db.query("select two from test");
var str = JSON.stringify(result.fetchObjects());
system.stdout(str);
```

## Sockets ##

### Client ###
Client opens a socket and send some serialized object there. Then recieves answer form server.

```
var Socket = require('socket').Socket;

var family = Socket.PF_INET;
var type = Socket.SOCK_STREAM;
var proto = Socket.IPPROTO_TCP;
var address = "127.0.0.1";
var port = 44001;

function send( data ){
   try {
       var sock = new Socket( family, type, proto );

       sock.connect( address, port );
       sock.send( data );

       system.stdout( "II Sending " + data + "\n");

       var data = sock.receive( 4 * 1024 );

       if (data)
           system.stdout( "II Recieved response: " + data.toString("utf-8") + "\n");
   }
   catch (e){
       system.stdout( "EE " + e + "\n");
   }
   finally{
       sock.close();
   }
}

send( JSON.stringify({
       'sender': "sample-client",
       'body':   "Hello, world of sockets!",
       'close': false
   }));

send( JSON.stringify({
       'sender': "sample-client",
       'body':   "Server should exit.",
       'close': true
   }));

```

### Server ###
Server binds to port and waits for connecntion. Then handle it ( JSON.parse() ). And finaly decide to die or not to by checking the parsed object `close` property. If it is not going to die the server awaits new connection.

```
var Socket = require('socket').Socket;

function handle( clientConnection ) {
   var data = null;
   try {
       // recieve up to 4 kilobytes
       data = clientConnection.receive( 4 * 1024 );
       clientConnection.send( "OK" );
   }
   catch( e ) {
       system.stdout( "EE " + e + "\n" );
   }
   finally {
       clientConnection.close();
       return data;
   }
}

var family = Socket.PF_INET;
var type = Socket.SOCK_STREAM;
var proto = Socket.IPPROTO_TCP;
var address = "127.0.0.1";
var port = 44001;

try {
   var sock = new Socket( family, type, proto );
   sock.bind( address, port );
   sock.listen();

   var end = false;

   do {
       var response = handle( sock.accept() );
       system.stdout( "II Raw: " + response + "\n" );

       if ( !response )
           continue;

       response = JSON.parse( response.toString("utf-8") );

       system.stdout( "II Client [" + response.sender
                       + "] sended [" + response.body + "]\n");

       end = response.close;
   } while( !end );
}
catch( e ) {
   system.stdout( "EE " + e + "\n" );
}
finally{
   sock.close();
}
system.stdout( "II Exit." );
```

### Outputs ###
Client output would be:
```
$ ./socket-client.js
II Sending {"sender":"sample-client","body":"Hello, world of sockets!","close":false}
II Recieved response: OK
II Sending {"sender":"sample-client","body":"Server should exit.","close":true}
II Recieved response: OK
```

Server output would be:
```
$ ./socket-server.js
II Raw: {"sender":"sample-client","body":"Hello, world of sockets!","close":false}
II Client [sample-client] sended [Hello, world of sockets!]
II Raw: {"sender":"sample-client","body":"Server should exit.","close":true}
II Client [sample-client] sended [Server should exit.]
II Exit.
```