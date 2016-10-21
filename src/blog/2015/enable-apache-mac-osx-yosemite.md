---
title: Enable Apache in Mac OS X 10.10 Yosemite
description: Looking to enable Apache 2.4 in Mac OS X Yosemite? Check out our comprehensive guide and set up your local dev environment.
headline: Enable Apache in Mac OS X 10.10 Yosemite
date: 2015/02/24
collection: blog
layout: post.hbt
---

Some Mac users may recall having a folder within their home directory titled "Sites" for as long as they can remember using OS X. Unfortunately the Sites folder disappeared (along with the web sharing toggle in the System Preferences pane) beginning with OS X 10.8 Mountain Lion . Thankfully these changes did not necessarily mean Apache went by the wayside too.

# Enter Apache 2.4 for Mac OS X
While the past three versions of Mac OS X all seem to push aside the pre-packaged Apache software and standard web sharing capabilities in favor of OS X Server application, you can rest assured that these features are actually still available to you with minimal configuration!

Mac OS X Yosemite 10.10 ships with Apache 2.4 already installed.

## Enabling and Configuring Apache in Mac OS X

I've found that the preloaded version of Apache that's included with OS X tends to require less setup and fiddling around as compared to a separately installed version via Homebrew or some other package manager.

Also, I like to keep things simple. If it's preloaded and available for use, I'll use it. Otherwise, there can be conflicts with having two version of Apache on one box, such as changing and modifying your `$PATH`, and there will most likely be some unforeseen issues when it comes time to update to OS X 10.11. Since most folks use Apache locally for a dev environment, the preloaded version should work just fine.

## Enabling Apache

Since the Web Sharing area within System Preferences is no more, Apache needs to be enabled via **Terminal** (located at **/Applications/Utilities/Terminal.app**).

There are a few different commands for Apache listed below that will come in handy:

**Start Apache** `$ sudo apachectl start`

**Stop Apache** `$ sudo apachectl stop`

**Restart Apache** `$ sudo apachectl restart`

**Check Apache Version** `$ https -v`

Before going forward, let's make sure Apache is running using the appropriate commands from above. Open your web browser and navigate to **http://localhost**. If you see the message **It works!** - then, you guessed it, Apache works!

Our next task is adding the local Sites folder back to the Users folder.

## Adding the "Sites" Folder

Without the Sites folder, the only web root available in Mac OS X Yosemite 10.10 is at `/Library/WebServer/Documents/`. Many users, myself included, find it easier to deal with the traditional user level web root.

Adding the folder is incredibly straight forward. Just simply use Finder to create a new folder within your Users directory. Title this new folder **Sites**. You'll notice that the new folder instantly gains the Safari style icon of yore! How exciting?

To get `~/Sites` up and running with Apache, follow the steps below:

Launch **Terminal** and create a **"username.conf"** configuration file within the Apache2 Users directory, replacing "username" with your actual user name on your Mac (case sensative):

```
$ sudo nano /etc/apache2/users/username.conf
```
Add the following into this file, replacing "username" yet again:

```
<Directory "/Users/username/Sites/">  
   AllowOverride All  
   Options Indexes MultiViews FollowSymLinks  
   Require all granted  
</Directory>
```
Next, let's enable a few modules within the **httpd.conf** configuration file. This file stores a variety of functions for the server. Each function is a line within this file and can be enabled or disabled.

##Have Apache Serve Content from the Sites Folder

To begin turning on some modules to get the "Sites" web root functional, lets open the file:

```
$ sudo nano /etc/apache2/httpd.conf
```

To enable these Apache modules, simply remove the `#` which uncomments and enables them (some may be enabled already):

```
LoadModule authz_core_module libexec/apache2/mod_authz_core.so
LoadModule authz_host_module libexec/apache2/mod_authz_host.so
LoadModule userdir_module libexec/apache2/mod_userdir.so
Include /private/etc/apache2/extra/httpd-userdir.conf
```

Now we need edit another configuration file that tells Apache to look at the User.conf file we created earlier. To make this happen, open the following file via Terminal:

```
$ sudo nano /etc/apache2/extra/httpd-userdir.conf
```

Enable the following function by uncommenting it:

```
Include /private/etc/apache2/users/*.conf
```

With all of our changes to the `httpd.conf file` and the `httpd-userdir.conf` file, we need to restart Apache for these changes to take effect. To restart Apache 2.4 in OS X Yosemite 10.10, enter the following command into **Terminal**:

```
$ sudo apachectl restart
```

## Making Sure it All Works

Check to see if everything worked by navigating to **http://localhost/~username/** with user name being the user name on your machine (and also the user name you used in the earlier steps of this guide!). If it worked, you should see a directory tree with folders that exist within your user directory. If you get an error when you visit the above address, you probably did not enter your actual user name in the earlier steps.

Now you have a local version of Apache, ready for all of your web development needs!
