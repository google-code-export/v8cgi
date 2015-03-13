# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Query'>proper version of this page</a>.</b></font> #
# SQL Query module #

Defined in file `query.js`.

Classes: **Query**, **Table**.

  * `Query.SELECT`, `Query.INSERT`, `Query.UPDATE`, `Query.DELETE` - constants
  * `Query.addRelation(table1, field1, table2, field2)` - creates a relation between to tables, will be used in JOIN statements
  * `Query.findRelation(table1, table2, [field])` - finds a relation between `table1` and `table2` which optionally uses `field`
  * `Query.setDB(database)` - attaches an instance of `MySQL` to Query builder

  * `var q = new Query(type)` - creates new query with a given type constant
  * `q.table(name, [jointype], [joinfield])` - adds a table with given `name` to query; `jointype` is a join prefix string (e.g. "LEFT" etc.), `joinfield` forces a concrete relation which uses given field
  * `q.join()` - alias for `q.table()`
  * `q.field(fieldDefinition)` - adds a field to query. If only one argument is specified, it gets qualified. If multiple arguments are specified, printf()-like expansion takes place. Allowed formatting sequences:
    * **`%f`** - field name (field or table.field)
    * **`%s`** - string value (will get escaped and qualified)
    * **`%n`** - number value (parseFloat() and qualified)
  * `q.value(value, [noescape])` - adds value to INSERT or UPDATE query. The value will be escaped unless `noescape` is set to `true`
  * `q.where(conditionDefinition)` - WHERE clause, expanded as in `.field()`
  * `q.having(conditionDefinition)` - HAVING clause, expanded as in `.field()`
  * `q.order(fieldDefinition)` - ORDER clause, expanded as in `.field()`
  * `q.group(fieldName)` - GROUP clause
  * `q.limit(count)` - LIMIT clause
  * `q.offset(count)` - OFFSET clause
  * `q.toString()` - creates an SQL string
  * `q.execute()` - executes a query

  * `var t = new Table(name)` - db table with a given `name`
  * `t.select(field, field, ...)` - returns a pre-made SELECT query
  * `t.insert({name:value, name:value, ...})` - returns a pre-made INSERT query
  * `t.update({name:value, name:value, ...})` - returns a pre-made UPDATE query
  * `t.delete()` - returns a pre-made DELETE query
  * `t.remove()` - alias for `t.delete()`

## Examples ##

There are two basic (and equivalent) approaches to query creation - using `Query()` and using `Table()`. Some setup can be useful for both of these; say we have two tables (`users` and `articles`), linked together by the fact that `users.id = articles.is_user`:

```
var mysql = new MySQL().connect(HOST, USER, PASSWORD, DB);
Query.setDB(mysql);
Query.addRelation("users", "id", "articles", "id_user")
```

We can now start creating queries - instances of the `Query` class.

```
var q = new Query(Query.SELECT)
          .field("*")
          .table("users")
          .toString();
/* result: SELECT * FROM `users` AS `users` */
```

Note that when you add one table multiple times into a query, it will get automatically aliased with ordinal numbering. So, a query with 3 tables `users` will have `users`, `users#2` and `users#3`. Some more advanced example:

```
var q = new Query(Query.SELECT)
          .field("id")
          .field("UNIX_TIMESTAMP(%f) AS %f", "ts", "unix_ts")
          .table("articles")
          .where("%f > 10", "id")
          .toString();
/* result: SELECT `id`, UNIX_TIMESTAMP(`ts`) AS `unix_ts` FROM `articles` AS `articles` WHERE `id` > 10 */
```

Time to join our two tables to create a complex query:

```
var q = new Query(Query.SELECT)
        .field("%f AS %f", "articles.name", "article_name")
        .field("%f AS %f", "users.name", "user_name")
        .table("articles")
        .join("users", "LEFT")
        .order("%f ASC", "user_name")
        .limit(10)
        .toString();
/* result:
    SELECT `articles`.`name` AS `article_name`, `users`.`name` AS `user_name`
    FROM `articles` AS `articles` 
    LEFT JOIN `users` AS `users` ON `articles`.`id_user` = `users`.`id` 
    ORDER BY `user_name` ASC 
    LIMIT 10 
*/
```

To simplify some stuff, we may also use the `Table()` class:

```
var users = new Table("users");
```

User-listing query can now be written as:

```
var q = users.select("*").limit(5).toString(); 
/* result: SELECT * FROM `users` AS `users` LIMIT 5 */
```

`Table()`-based queries are well suited for INSERT/UPDATE scenarios:

```
var q = users.insert({"name":"John", "mail":"john@doe.com"}).toString();
/* result: INSERT INTO `users` (`name`, `mail`) VALUES ('John', 'john@doe.com') */

var q = users.update({"name":"Eric"})
          .where("%f LIKE %s", "name", "%a%")
          .toString();
/* result: UPDATE `users` SET `name`='Eric' WHERE `name` LIKE '%a%'  */
```