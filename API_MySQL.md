# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_MySQL'>proper version of this page</a>.</b></font> #
# MySQL module #

Defined in file `mysql.so` or `mysql.dll` or `mysql.dylib`.

Classes: **MySQL**.

  * `var db = new MySQL()` - creates new mysql instance
  * `db.queryCount` - number of executed queries
  * `db.connect(host, user, password, db)` - connects to database
  * `db.close()` - closes connection to server
  * `db.affectedRows()` - returns number of rows affected by a query
  * `db.insertId()` - returns ID of last inserted row
  * `db.escape(str)` - escapes a string so it can be used in a query

  * `var r = db.query(query)` - executes a query
  * `var r = db.nextResult()` - retrieves next result from a multi-result set
  * `r.numRows()` - returns number of rows in query result
  * `r.numFields()` - returns number of fields in query result
  * `r.fetchNames()` - returns an array with field names
  * `r.fetchArrays()` - returns query results as an array of arrays
  * `r.fetchObjects()` - returns query results as an array of hashes
  * `r.close()` - closes the result and deallocates its memory