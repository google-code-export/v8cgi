# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_SQLite'>proper version of this page</a>.</b></font> #
# SQLite module #

Defined in file `sqlite.so` or `sqlite.dll`.

Classes: **SQLite**.

  * `var db = new SQLite()` - creates new sqlite instance
  * `db.queryCount` - number of executed queries
  * `db.open(filename)` - opens/creates a database
  * `db.close()` - closes database file
  * `db.changes()` - returns number of rows affected by a query
  * `db.insertId()` - returns ID of last inserted row

  * `var r = db.query(query)` - executes a query
  * `r.numRows()` - returns number of rows in query result
  * `r.numFields()` - returns number of fields in query result
  * `r.fetchNames()` - returns an array with field names
  * `r.fetchArrays()` - returns query results as an array of arrays
  * `r.fetchObjects()` - returns query results as an array of hashes