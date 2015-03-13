# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/InstallationUbuntu'>proper version of this page</a>.</b></font> #

# <font color='red'><b>Some of this <a href='http://code.google.com/p/v8cgi/wiki/InstallationUbuntu'>might</a> be obsolete</b></font> #

# v8cgi on Ubuntu (Jaunty) #

NOTE: replace ~/src with path to where you checkout and build v8 and v8cgi!

NOTE: If you don't like to use vi to edit files, use gedit instead.

**prerequisites:**
```
sudo apt-get install mysqlclient15-dev libgd2-xpm-dev apache-threaded-dev
```

**build (replace ~/src with path to where you compile these):**
```
mkdir ~/src
cd ~/src
svn checkout v8 (see actual command at google code)
svn checkout v8cgi (see actual command at google code)
chdir v8
scons arch=x64 library=shared
```

OR if not x64 OS:

```
scons library=shared
sudo libv8.so /usr/lib/libv8.so
cd ../v8cgi
scons module=1 gd=1 mysql=1
sudo cp v8cgi.config.posix /etc/v8cgi.config
```

**configure /etc/v8cgi.config**
```
sudo vi /etc/v8cgi.config
require.paths = ['~/src/v8cgi/lib'];
```

**configure apache module:**
```
sudo vi /etc/apache2/mods-available/v8cgi.load
* The only line in the file should be:
LoadModule v8cgi_module ~/src/v8cgi/mod_v8cgi.so
--
sudo vi /etc/apache2/mods-available/v8cgi.conf
* The only line in the file should be:
AddHandler v8cgi-script .sjs .jst
```

**enable the mod:**
```
sudo a2enmod v8cgi
```

**create/edit virtual host file:**
```
sudo vi /etc/apache2/sites-available/v8cgi
```

This configuration should work, remember to replace ~/src with where you built v8 and v8cgi

```
<VirtualHost *:80>
        ServerName v8cgi
        ServerAdmin webmaster@localhost
        DocumentRoot ~/src/v8cgi/htdocs

        <Directory ~src/v8cgi/htdocs>
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

**enable the site:**
```
sudo a2ensite v8cgi
```

**configure v8cgi hostname:**
```
sudo vi /etc/hosts
```
**the first line in mine looks like this:
```
127.0.0.1       localhost freewill v8cgi
```**

**restart apache:**
```
sudo /etc/init.d/apache2 restart
```

**Check it out:**
point browser at
http://v8cgi/