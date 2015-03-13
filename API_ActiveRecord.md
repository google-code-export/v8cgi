# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_ActiveRecord'>proper version of this page</a>.</b></font> #
# ActiveRecord.js module #

Defined in file `active_record.js`.

More info on [activerecordjs.org](http://www.activerecordjs.org/record.html).

A new adapter has been added to support v8cgi's MySql module: ActiveRecord.Adapters.v8cgiMySQL

Classes: **ActiveRecord**.

  * `ActiveRecord.connect(adapter, {user: 'myUsername', pass: 'myPass', name: 'dbName'})` - adapter should be ActiveRecord.Adapters.v8cgiMySQL
  * `ActiveRecord.create(tableName, oAttributes[, methods])` - creates a model


### Code example ###
```

var ActiveRecord = require('active_record').ActiveRecord;

ActiveRecord.connect(ActiveRecord.Adapters.v8cgiMySQL, {
	user: 'root', 
	pass: 'root', 
	name: 'testdb'
});


var User = ActiveRecord.create('users',{
    username: '',
    password: '',
    post_count: 0,
    profile: {
        type: 'TEXT',
        value: ''
    }
},{
    getProfileWordCount: function(){
        return this.get('profile').split(/\s+/).length;
    }
});

var jessica = User.create({
    username: 'Jessica',
    password: 'rabbit'
});

/*
jessica.username // 'Jessica'  
jessica.get('username'); // 'Jessica'  
jessica.username = 'new username';  
jessica.get('username'); // 'Jessica'  
jessica.set('username','new username');  
jessica.get('username'); // 'new username'
*/

User.findByUsername('Jessica');  
User.findAllByPassword(''); //finds all with blank passwords

```