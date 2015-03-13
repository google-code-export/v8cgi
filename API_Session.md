# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Session'>proper version of this page</a>.</b></font> #
# Session module #

Defined in file `session.js`.

Classes: **Session**. Load this library only **after** `http`!

  * `session = new Session(request, response)` - creates or resumes a session. This is done automatically.
  * `session.set(name, value)` - adds a `name`-`value` pair to session
  * `session.get(name)` - retrieves a session variable
  * `session.clear()` - clears all session data
  * `session.save()` - dumps session data to disk; this is done automatically on script exit
  * `session.getId()` - returns current session id
  * `session.setId(id)` - sets a new session id. If `id` is not specified, random one is generated.

### Example ###

try to use open new tab and open the page to test your session.
```
include('session') ; // load the library manually, do not insert it on v8cgi.conf
var action = request.get['action'] ;
var name = session.get('name') ;
switch(action) {
  case 'logout':     // when ?action=logout
    session.clear() ;
    response.write(' you have logged out! <a href="?">back to main</a>') ;
    break;
  case 'login':      // when ?action=login&name=username
    session.set('name',request.get['name']) ;
    name = session.get('name') ;
  default:
    if( name == null ) { // when there is no session
      response.write(' <form>') ;
      response.write(' <input type="text" name="name" value="">') ;
      response.write(' <input type="submit" name="action" value="login">') ;
      response.write(' </form>') ;
    } else {             // when there is session
      response.write(' Hi, '+name) ;
      //response.write(' session.getId() : '+session.getId()) ;
      response.write(' <a href="?page=this">this</a>') ;
      response.write(' <a href="?page=that">that</a>') ;
      response.write(' <a href="?action=logout">logout</a>') ;    
    }    
    break;
}
```