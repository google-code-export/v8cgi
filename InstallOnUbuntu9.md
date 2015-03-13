# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/InstallOnUbuntu9'>proper version of this page</a>.</b></font> #

# Introduction #

Please note that I have actually built this step-by-step.  This should work on pretty much any clean installation of Ubuntu 9.10 (32-bit), but I wouldn't want to guarantee it.  When I did my build it was actually onto a VirtualBox vdi hard-disk.  When installing the OS it's easiest to go ahead and let it do a LAMP installation, otherwise you'll have to install apache2 before going further with these instructions.  I also like to install OpenSSH at that time, although it's not completely necessary.


# Build v8 and v8cgi #

Install dependencies:

```
sudo apt-get install build-essential libmysqlclient15-dev libgd2-xpm-dev apache2-threaded-dev libsqlite3-dev libpq-dev libxerces-c-dev scons
```

Get the source files:
```
cd /tmp
wget http://v8cgi.googlecode.com/files/v8cgi-0.7.0-src.tar.gz
tar -xvzf v8cgi-0.7.0-src.tar.gz
```
(Alternatively you could also use svn.  In that case, I believe you would need to install the subversion client ahead of time as well.)

**Note:**  The following line is probably not the correct (most secure) way to do this, so if anyone knows the right way, please let me know and I'll update.  Also, be sure to change the permissions back on your /opt directory when your finished.

Make /opt writeable:
```
chmod a+w /opt
```

Put everything in it's proper place to do your build:
```
mv v8cgi-0.7.0-src /opt/v8
cd /opt/v8
mv ./V8 ./v8
```

At this point, you will need to patch the scons file for the v8 build.  See

[Thread on Build Problem with v8](http://code.google.com/p/v8/issues/detail?id=413&q=dereferencing%20pointer&colspec=ID%20Type%20Status%20Priority%20Owner%20Summary%20HW%20OS%20Area%20Stars)

If you are not in /opt/v8/v8 at this point then `cd /opt/v8/v8`

Build v8 and copy the output to the correct path:
```
export GCC_VERSION=44
scons library=shared
sudo cp libv8.so /usr/lib/libv8.so
```

Build v8cgi and again copy some of the output:
```
cd ../v8cgi
scons module=1 gd=1 mysql=1 pgsql=1 sqlite=1 dom=1
sudo cp v8cgi.conf.posix /etc/v8cgi.conf
```

Use your favorite editor to change the v8cgi.conf file.  I prefer `sudo nano /etc/v8cgi.conf`.  The only changed line should be:
```
require.paths = ['/opt/v8/v8cgi/lib'];
```

# Configure Apache #

Now edit v8cgi.load inside your apache directory structure.  'sudo nano /etc/apache2/mods-available/v8cgi.load'.  Again, the only line should be:
```
LoadModule v8cgi_module /opt/v8/v8cgi/mod_v8cgi.so
```

Add the apache handler for the server-side javascript files.  `sudo nano /etc/apache2/mods-available/v8cgi.conf`.  Only one line:
```
AddHandler v8cgi-script .sjs .ssjs .jst
```

Enable the new v8cgi module with `sudo a2enmod v8cgi`

There are now two ways you can make .sjs scripts available for consumption:

First way:
```
sudo nano /etc/apache2/sites-enabled/000-default
```

Change </var/www> to look like this:
```
<Directory /var/www>
    Options Indexes All Multiviews
    AllowOverride All
    Order allow,deny
    allow from all
    DirectoryIndex index.sjs
</Directory>
```
To view the examples that come with v8cgi, be sure to copy them all over to /var/www.

Alternately, create a file /etc/apache2/sites-enabled/v8cgi that looks like so:
```
<VirtualHost *:80>
        ServerName v8cgi
        ServerAdmin webmaster@localhost
        DocumentRoot /opt/v8/v8cgi/example/htdocs

        <Directory /opt/v8/v8cgi/example/htdocs>
                Options Indexes All Multiviews
                AllowOverride All
                Order allow,deny
                allow from all
                DirectoryIndex index.sjs
        </Directory>

        ErrorLog /var/log/apache2/v8cgi_error.log

        # Possible values include: debug, info, notice, warn, error, crit,
        # alert, emerg.
        LogLevel warn

        CustomLog /var/log/apache2/v8cgi_access.log combined
        ServerSignature On

</VirtualHost>
```

**Important** if you changed permissions on /opt above, be sure to change them back:
```
sudo chmod go-w /opt
```

Edit the index.sjs to use response.write() instead of printbr()
You need to do this because printbr() is not recognized by v8cgi (is this deprecated code?).

Restart apache with `/etc/init.d/apache2 restart` and you should be good to go!

[Here's a link to the vm I built](http://www.zshare.net/download/68363030e5a67b6f/)

Username: user

Password: user

**Please note that this vm is not fit for production, just for development!!  If you expose this machine to the world without hardening its security first you will be sorry.**

The vm includes a LAMP installation, openSSH server, v8, v8cgi, and subversion