# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_FS'>proper version of this page</a>.</b></font> #
# Filesystem module #

Defined in file `fs.so` or `fs.dll` or `fs.dylib`.

Classes: **File**, **Directory**.

  * `var f = new File(fileName)` - creates new file instance
  * `f.open(mode)` - opens the file with a given mode
  * `f.close()` - closes the file
  * `f.read([count])` - reads `count` (or all) bytes from file; returns a Buffer
  * `f.readLine([count])` - reads a line from file up to `count` bytes. If `count` is not specified, reads up to 65535 bytes. When no data is available, returns null.
  * `f.write(data)` - writes `data` to the file (string or Buffer)
  * `f.writeLine(data)` - writes `data` followed by a line break to the file
  * `f.rewind()` - rewinds internal pointer to the beginning of file
  * `f.remove()` - deletes the file
  * `f.stat()` - returns object with several stat properties
  * `f.toString()` - returns file name
  * `f.exists()` - tests whether the file exists
  * `f.move(newName)` - renames file to `newName`
  * `f.copy(newName)` - copies file to `newName`, returns copied file object
  * `f.isFile()` - tests whether the path is really a file
  * `f.isEOF()` - tests whether the End-Of-File has been encountered
  * `var f2 = f.copy(newName)` - copies file to `newName` and returns instance of new file
  * `f.flush()` - flushes any file changes to disk

  * `var d = new Directory(dirName)` - creates new directory instance
  * `d.create()` - creates new directory
  * `d.listFiles()` - returns an array with names of files contained in the directory
  * `d.listDirectories()` - returns an array with names of directories contained in the directory
  * `d.toString()` - returns directory name
  * `d.exists()` - tests whether the directory exists
  * `d.remove()` - deletes the directory
  * `d.isDirectory()` - tests whether the path is really a directory
  * `d.stat()` - returns object with several stat properties