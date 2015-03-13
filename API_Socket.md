# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Socket'>proper version of this page</a>.</b></font> #
# Socket module #

Defined in file `socket.so` or `socket.dll` or `socket.dylib`.

Classes: **Socket**.

  * Constants:
    * Socket.PF\_INET
    * Socket.PF\_INET6
    * Socket.PF\_UNIX
    * Socket.SOCK\_STREAM
    * Socket.SOCK\_DGRAM
    * Socket.SOCK\_RAW
    * Socket.IPPROTO\_TCP
    * Socket.IPPROTO\_UDP
    * Socket.SO\_REUSEADDR
    * Socket.SO\_BROADCAST
    * Socket.SO\_KEEPALIVE
    * Socket.SO\_ERROR
    * Socket.TCP\_NODELAY

  * `Socket.getProtoByName()` - convert protocol name to number
  * `Socket.getAddrInfo(name, [family])` - convert hostname to address
  * `Socket.getNameInfo(addr, family)` - convert address to cname
  * `Socket.getHostName()` - return current hostname
  * `Socket.select(arrOfReadSockets, arrOfWriteSockets, arrOfExceptSockets, timeout)` - perform a `select()` call; timeout is specified in msec

  * `var sock = new Socket(family, type, proto)` - create new socket
  * `sock.setBlocking(true/false)` - changes blocking mode
  * `sock.connect(address, [port])` - connect to target `address`. Returns `true` or `false` or `false` (operation would block a non-blocking socket).
  * `sock.bind(address, [port])` - bind to target `address`
  * `sock.listen([backlog])` - listen for incoming connections
  * `var sock2 = sock.accept()` - accept a new connection
  * `sock.send(data, [address], [port])` - send `data` to socket; data = string or Buffer. Strings will be serialized to UTF-8. Returns `true` or `false` or `false` (operation would block a non-blocking socket).
  * `sock.receive(num)` - retrieve max `num` bytes from socket. Returns an instance of Buffer or `false` (operation would block a non-blocking socket).
  * `sock.getPeerName()` - returns array with peer address components
  * `sock.getOption(name, [length])` - returns a value of `SO_*` option
  * `sock.setOption(name, value)` - sets a `value` of `SO_*` option
  * `sock.close()` - close a socket