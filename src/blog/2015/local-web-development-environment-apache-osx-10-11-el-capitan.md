---
title: How to Set up Apache in OS X 10.11 El Capitan
description: How to set up a local web development environment in OS X 10.11 El Capitan with Apache, Apache Virtual Hosts, PHP, and custom host names per project.
headline: How to Set up Apache in OS X 10.11 El Capitan
date: 2015/08/01
collection: blog
layout: post.hbt
---

<p class="message">Updated 10/03/15: This guide has been updated to reflect the official release of OS X 10.11 El Capitan.</p>

Back in July, Apple finally released the public beta of Mac OS X 10.11 El Capitan. Since I'm not an iOS developer, OS X developer, nor do I want to spend $99 a year to gain early access to betas and other perks, I had to patiently wait for the Public Beta ever since El Capitan's announcement and introduction during the WWDC 2015 keynote.

Now that the wait is finally over for common folk such as myself, who aren't members of that posh Apple Developer program and its absurd $99 annual fee, I finally have the chance to investigate any changes to the bundled Apache web server. With a fresh upgrade to the OS X 10.11 on my secondary machine (a modest 13" 2011 MacBook Air, corner dents and all), I fire up Terminal and Atom and... quickly find out that my local web development environment is out of whack and riddled with errors.

## Apache No Longer Works after Yosemite to El Capitan Upgrade

Issues and errors were expected of course as there was a decent amount of configuring done to Apache in Yosemite to set up a local web development environment to begin with. Chances were that these settings would be overwritten when upgrading. I also had a strong suspicion that we would be getting a slightly updated version of Apache with El Capitan (currently version 2.4.16 vs. Yosemite's 2.4.10).

To get things running smoothly again, I started to go through my usual Apache checklist and then realized that this process would serve as an awesome guide to help other Mac users leverage the bundled Apache web server for their local web development needs.

## What is the Aim of this Guide?

We're going to set up a local web development environment using the bundled Apache web server that comes with OS X El Capitan. This guide will help you set up a Document Root within your Home directory, enable and configure name-based Apache Virtual Hosts, and also get the local PHP up and running for web development.

The benefit of developing websites and web applications locally on your Mac is the ability to make use of some awesome development tools without any risk to your production environment. Having a local development environment that also offers a web server makes mimicking real world scenarios much more realistic, while also allowing you to experiment with your code without having to worry about it being live on the web, out in the wild (no more fussing with "hiding" sites on the web).

#### During this guide you'll be working through the following items:

1. Spending some quality time in Terminal
2. Creating a Sites directory and two project directories
3. Configuring Apache to serve files from the Sites directory
4. Configuring Virtual Hosts for each project directory
5. Editing the Host file to use our Name-based Virtual Hosts
6. Testing out our local PHP using a simple function

## 1. Quality Time in Terminal

To get Apache up and running in El Capitan, you're going to have to spend some time in Terminal. Some commands listed throughout this guide will make use of `sudo`. Please be advised that using `sudo` and not understanding what you're doing can result in catastrophic repercussions. **Proceed with caution as I take zero responsibility of what happens to your system!**

If my forewarning wasn't enough to invoke fear in you, just wait until you see the message that appears in OS X when using `sudo` for the first time!

Let's go ahead and open Terminal. It's located at:

**Applications > Utilities > Terminal.app**

![El Capitan Terminal Example](/img/posts/el-capitan-apache-terminal-example.png)
I'm a fan of the Homebrew Terminal profile (Source: Digital Shore)
{: .post-caption }

**Step 1 offers you a brief introduction into Terminal and how commands will be represented throughout this guide.**

### 1.1. The Usefulness of Terminal
Warnings aside, Terminal is actually an incredibly useful application. From simple tasks such as creating new files and directories to running complex applications and commands, Terminal gives you direct access to the Console, and thus, to your entire system as a whole. With it you can input commands and see the output of the previous command all in one place.

Throughout this guide you'll be working in Terminal exclusively. Once you get familiar with it, Terminal is not nearly as intimidating as it may initially seem. After dealing with it for a bit and getting your feet wet, understanding the basics of a "Unix-like" or "nix" environment (such as OS X), you'll undoubtedly end up working on all of your future web development projects with a minimum of 3 or 4 Terminal tabs or windows open at any given moment.

### 1.2 Terminal and this guide

- During this guide each line of a Terminal command will begin with `$`, indicating a separate line or command. Do not include `$` when entering commands.
- For the sake of clarity, most commands will include an absolute path or at the very least, the `~` shortcut for Home. Otherwise, context will be provided within each step where an absolute path isn't defined.
- This guide will offer as much detail about Terminal as possible, but it should be noted that this is not an all inclusive Terminal guide. Some basic, working knowledge of Terminal (or any command line interface) is expected. I did want to make it a point though to provide some extra information about the commands that are used and why they're being used, as many tutorials gloss over these items.

## 2. Creating Sites and Project Directories

One of the best changes to my personal web development work flow has been developing sites locally on my Mac. Doing this has gotten me more comfortable with the "Unix-like" command line interface but most importantly, has eliminated time wasted fiddling around with Content Management Systems, FTPs, CPanels, Remote Desktop Protocols... you name it. Whatever it was that took a long time or that was mundane and repetitive, has been completely removed from my current work flow.

In addition to eliminating all of the noise form my work flow, I've also found that adding the traditional OS X "Sites" directory back to my Home directory has been one of the best approaches in keeping local projects organized while also leveraging the bundled Apache web server. This dedicated directory serves as a place to keep all other website and web application directories, as well as the Document Root for Apache.

**Step 2 will guide you through creating the Sites directory within your Home directory, creating two project directories within the Sites directory, and creating an `index.html` file within each project directory.**

### 2.1 Create a Sites Directory in your Home Directory

Let's move our attention to your Terminal window. You should be within your Home directory by default, but in case you aren't for some reason, you can use `~` as a shortcut to the home directory within the command. Enter the following command to create a directory titled "Sites" within your Home directory:

{% highlight shell %}
$ mkdir ~/Sites/
{% endhighlight %}

If you open up Finder, you should now see a directory in your Home directory titled `Sites`. It will also have the familiar icon from OS X of yore. Aahhh, nostalgia. Why did Apple decide to remove this sites directory anyhow? The world may never know.

### 2.2 Create Two Project Directories within the Sites Directory

Next, let's add two project directories within Sites. First, navigate to the Sites directory within Terminal:

{% highlight shell %}
$ cd sites
{% endhighlight %}

Enter the following command to create the two project directories within Sites:

{% highlight shell %}
$  mkdir example1 && mkdir example2
{% endhighlight %}

### 2.3 Add a Test File to One of the Project directories

Now add the test `index.html` file to **example1**. This test file will give Apache something to serve later on in this guide. You should still be in the Sites directory:

{% highlight shell %}
$  touch example1/index.html
{% endhighlight %}

The `touch` command is essentially the equivalent of opening or creating a file. In this scenario, since `index.html` does not already exist, `touch` creates the file.

### 2.4 Let's do the Typical "Hello, World!"

You can write HTML right in Terminal using nano -- a command line text editor for "Unix-like" systems that comes bundled with OS X. Let's go into the **example1** directory and open our `index.html` file using nano:

{% highlight shell %}
$ nano example1/index.html
{% endhighlight %}

Something basic will suffice:

{% highlight html %}
<h1>Hello, World!</h1>
<p>This is the <strong>example1.dev</strong> site</p>
<p>Visit <a href="http://example2.dev">Example2</a>.</p>
{% endhighlight %}

To save the file in nano, press **Ctrl-X**, followed by **Y**, then **Enter**. This basically says, close the file, and yes -- "save as" the current file name then press enter (or conversely, to not "save as", press N, hit enter and nano will close).

What about an `index.html` file for **example2**? You can use Terminal to copy the existing one and then edit it with nano:

{% highlight shell %}
$  cp example1/index.html example2/index.html && nano example2/index.html
{% endhighlight %}

You should now see the same contents of the `example1/index.html` file, but take note that the filename at the top of nano now represents `example2/index.html`. Update the contents of `example2/index.html` file:

{% highlight html %}
<h1>Hello, World!</h1>
<p>This is the <strong>example2.dev</strong> site</p>
<p>Visit <a href="http://example1.dev">Example1</a>.</p>
{% endhighlight %}

Now that the directories have been created and test files are in place it's time to configure Apache.

## 3. Configure Apache in OS X El Capitan

With the Sites directory back in its rightful home (aptly, the "Home" directory), it's time to configure Apache to treat this directory as its Document Root. In order to do so, you'll be editing several Apache configuration files.

Note that with these changes, you'll be instructing Apache to look at a different Document Root, having localhost result in a 403 Forbidden Error. This is ok though, as the User Document Root (soon to be the Sites directory) will work without any issues.

**Step 3 will guide you through configuring Apache and enabling the required modules to have the newly created Sites directory serve as the Document Root.**

### 3.1 Create a Config File in "Users"

The first file to edit is actually one that needs to be created. To do so, flip back over to Terminal, and enter the following command to navigate to where you need to be:

{% highlight shell %}
$  cd /etc/apache2/users
{% endhighlight %}

This now brings you to the Apache directory within the `Users` sub directory. This is where you need to create a configuration file that references your "account name" both within the file itself and with the actual file name.

In OS X, your account name is the name of your Home directory. If you aren't sure what your account name is, type the following into Terminal and press enter:

{% highlight shell %}
$  whoami
{% endhighlight %}

![El Capitan Terminal Who Am I](/img/posts/el-capitan-apache-who-am-i.png)
Who am I? (Source: Digital Shore)
{: .post-caption }

Terminal will then return your account name, similar to my example from above. My account name is "John" so I would then create `John.conf`. This step is very important as using my example of `accountname.conf` will not work! Now, within the **/etc/apache2/users** directory, let's use nano again:

{% highlight shell %}
$  sudo nano accountname.conf
{% endhighlight %}

You may notice, if this is the first time using `sudo` on your machine, that the warning message I mentioned earlier appears! No worries, though. If you follow this guide precisely, there shouldn't be any issues.

With nano open, enter the following and save it, being sure to replace `accountname` with your actual account name:

{% highlight apache %}
<Directory "/Users/accountname/Sites/">
   AllowOverride All
   Options Indexes MultiViews FollowSymLinks
   Require all granted
</Directory>
{% endhighlight %}

You'll need to ensure this file has the correct permissions for Apache to access it. Type the following into Terminal and press enter (again, replacing `accountname` with your actual account name):

{% highlight shell %}
$  sudo chmod 644 accountname.conf
{% endhighlight %}

These numbers give the **Owner** read/write, **Group** read, and **Other** read permissions.

### 3.2 Enable Modules in httpd.conf

**Note -- if you're here because Upgrading from Yosemite to El Capitan broke your local site directory, then you probably just need to turn these Apache modules back "on" as the upgrade toggles them "off". Most, if not all of your other settings and configurations *should* be in tact.**

With the `accountname.conf` configuration file in place with proper permissions, the next step is to turn on or enable several modules within the `httpd.conf` file. Before jumping in, let's create a backup of this very important configuration file so you can revert back in case anything breaks.

Navigate out of the Apache `User` directory:

{% highlight shell %}
$  cd ..
{% endhighlight %}

You should now be in `/etc/apache2/`. Enter the following into Terminal

{% highlight shell %}
$  sudo cp httpd.conf httpd.conf.bak
{% endhighlight %}

This command is saying, with root permission, copy the `httpd.conf` file and save it as `httpd.conf.bak`.

By this point you've probably noticed that Terminal will not necessarily tell you if a command is successful. There are two ways around this. One is to include the flag `-v` within our command, which means "verbose". It will output whatever is happening. The other is to list all files within a directory using the `ls` command with the flag `-l`. This flag essentially says: present a list of files and directories in "long format" from this directory, including permissions, owner, size, modification size, etc.

Since I purposely did not include the `-v` flag in the command above (in an effort to demonstrate how Terminal does not tell us what happens with certain commands), go ahead and use the latter -- a new command of `ls -l`:

{% highlight shell %}
$  ls -l
{% endhighlight %}

If things went off without a hitch, you should see the newly created `httpd.conf.bak` file.

![El Capitan Apache httpd backup](/img/posts/el-capitan-apache-httpd-backup.png)
The command "ls -l" comes in handy (Source: Digital Shore)
{: .post-caption }

Now that there's a backup, it's time to dig into the `httpd.conf` file:

{% highlight shell %}
$  sudo nano httpd.conf
{% endhighlight %}

Within the `httpd.conf` file you're going to edit several lines by uncommenting or removing the `#` symbol. Removing this symbol essentially "turns on" each module, as the code is no longer commented out.

Below is a list of the lines that'll need uncommenting. Nano offers a search capability which will make finding these modules and other lines of code much easier. Press **Ctrl-W** and search for each of the lines below. Once you find the specified line, remove the `#` symbol at the beginning of the line to enable that particular module and/or feature.

Search for and uncomment these lines:

{% highlight apache %}
LoadModule authz_host_module libexec/apache2/mod_authz_host.so
LoadModule authz_core_module libexec/apache2/mod_authz_core.so
LoadModule userdir_module libexec/apache2/mod_userdir.so
LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so
LoadModule rewrite_module libexec/apache2/mod_rewrite.so
LoadModule php5_module libexec/apache2/libphp5.so
Include /private/etc/apache2/extra/httpd-userdir.conf
Include /private/etc/apache2/extra/httpd-vhosts.conf
{% endhighlight %}

Your file within nano should look similar to this:

![El Capitan httpd.conf modules enabled](/img/posts/el-capitan-apache-httpd-example.png)
A snapshot of httpd.conf with some modules enabled (Source: Digital Shore)
{: .post-caption }

***Note: I added the PHP5 Module and Mod_Rewrite module to my list above because I personally find both handy to have on my dev machines. If you do not plan to work with PHP or test out any URL rewrites, keep these two items commented out.***

Once you uncomment the above lines to enable these modules and features, save and close the `httpd.conf` file.

### 3.3 Edit httpd-userdir.conf

Now that the `httpd.conf` file has the correct modules and directives uncommented, you need to take a look at the `httpd-userdir.conf` file next. To get there, enter the following into Terminal:

{% highlight shell %}
$  cd /etc/apache2/extra
{% endhighlight %}

Again, I like to make a backup of this file just in case something goes awry:

{% highlight shell %}
$  sudo cp httpd-userdir.conf httpd-userdir.conf.bak
{% endhighlight %}

Once the backup is made, you only need to uncomment the following line, removing `#`:

{% highlight apache %}
Include /private/etc/apache2/users/*.conf
{% endhighlight %}

### 3.4 Restart Apache

Now it's time to restart Apache to see if everything worked! Enter the following into Terminal to restart Apache in OS X:

{% highlight shell %}
sudo apachectl restart
{% endhighlight %}

To see if you're in business with the `Sites` directory, open your web browser and visit the following URL, replacing accountname with your actual account name. For example, I would navigate to:

**http://localhost/~John/**

If all goes as planned, you should see the file directory of your Sites directory! Here is an example of what I see on my machine after following the above steps:

![Local Site Apache on OS X 10.11 El Capitan](/img/posts/el-capitan-sites-folder-local-host.png)
It Works! (Source: Digital Shore)
{: .post-caption }

## 4. Configure the Virtual Host File

Apache's Virtual Host basically allows for more than one website on a single machine. Virtual Hosts can be either IP based or name based. For our purposes, you're going to edit the Virtual Host file so that it is name based -- with each Virtual Host directive reflecting the names of the project directories within the Sites directory.

**Step 4 essentially connects the dots between the new Document Root directory you created in Step 2 (the Sites directory in Home) and the modules and settings you enabled and configured in Step 3.**

### 4.1 Create a Backup of httpd-vhosts.conf

As with the past two configuration files, I like to make a backup of the default `httpd-vhosts.conf` file before going any further. To get to where `httpd-vhosts.conf` is located:

{% highlight shell %}
$ cd /etc/apache2/extra
{% endhighlight %}

Create a backup:

{% highlight shell %}
sudo cp httpd-vhosts.conf httpd-vhosts.conf.bak
{% endhighlight %}

### 4.2 Enter Virtual Host Directives per Project

Next up is entering directives within the Virtual Host file for each project. Before jumping in, here are some interesting aspects of the Virtual Host file.

First, you can stop using the dreaded `.htaccess`! Using a Virtual Host file with directives for each site grants you he ability to bypass `.htaccess` completely. This is especially great for a production environment because it'll negate the performance penalty that `.htaccess` typically incurs. When `.htaccess` is in use, Apache ends up looking in each directory for a `.htaccess` file to use, all the way to the upper most directory within the Document Root. Not that great for performance, especially on a server hosting multiple sites.

Second, you can enter unique directives, like parsing PHP in HTML documents and even rewrite and redirect rules, directly inside of each site's directive blocks within the Virtual Host file.

Now that these two interesting facts are out of the way, it's time to start configuring the Virtual Host file. Flip back over to Terminal and open `httpd-vhosts.conf` with nano. You should still be within the `extra` directory after making that backup of `httpd-vhosts.conf`:

{% highlight html %}
sudo nano httpd-vhosts.conf
{% endhighlight %}

By default, Apache provides some examples of how to setup a Virtual Host file. Personally, I like to wipe out all of the contents and start fresh, others prefer to comment everything and leave it for reference. Either preference is totally acceptable.

![El Capitan Apache default Virtual Host file](/img/posts/el-capitan-apache-default-vhost.png)
The default Virtual Host serves as a template (Source: Digital Shore)
{: .post-caption }

If you're planning on doing anything PHP related (and if you've enabled the Apache PHP module from step 3), enter the following at the top of your `httpd-vhosts.conf` file:

{% highlight apache %}
<FilesMatch ".+\.html$">
   SetHandler application/x-httpd-php
</FilesMatch>
{% endhighlight %}

This directive enables Apache to parse PHP code it finds within HTML documents.

Now it's time to add directives that will tell Apache where to find the files for the two example directories created in step 2. I added a few redirect examples here too:

{% highlight apache %}
<VirtualHost *:80>
    ServerName example1.dev
    ServerAlias www.example1.dev
    DocumentRoot "/Users/accountname/Sites/example1"
    ErrorLog "/private/var/log/apache2/example1-error_log"
    CustomLog "/private/var/log/apache2/example1-access_log" common
   <Directory "/Users/accountname/Sites/example1">
      RewriteEngine On
      Options -Indexes
      #WWW to HTTP
      RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
      RewriteRule ^ http://%1%{REQUEST_URI} [R=301,L]
      #Remove Index.html
      RewriteCond %{THE_REQUEST} ^GET\ .*/index\.html
      RewriteRule ^(.*)index\.html$ /$1 [R=301,L]
   </Directory>
</VirtualHost>
<VirtualHost *:80>
    ServerName example2.dev
    ServerAlias www.example2.dev
    DocumentRoot "/Users/accountname/Sites/example2"
    ErrorLog "/private/var/log/apache2/example2-error_log"
    CustomLog "/private/var/log/apache2/example2-access_log" common
   <Directory "/Users/accountname/Sites/example2">
      RewriteEngine On
      Options -Indexes
      #WWW to HTTP
      RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
      RewriteRule ^ http://%1%{REQUEST_URI} [R=301,L]
      #Remove Index.html
      RewriteCond %{THE_REQUEST} ^GET\ .*/index\.html
      RewriteRule ^(.*)index\.html$ /$1 [R=301,L]
   </Directory>
</VirtualHost>
{% endhighlight %}

Be sure to replace "accountname" with your actual account name.

Your finished Virtual Host file should look similar to this:

![El Capitan Apache default Virtual Host file](/img/posts/el-capitan-apache-vhost.png)
Apache Virtual Host after configuration (Source: Digital Shore)
{: .post-caption }

## 5. Create Unique, Local, Development URLs

To really get the most out of using the local Apache web server in OS X El Capitan, you'll more than likely will want to have each project or directory behave like its own site, as if it were on a remote production web server.

**Step 5 is where one of the coolest parts of this guide comes in -- and also the part that finally ties everything together -- editing your computer's Host file to include the hostname of your projects that were referenced in the `httpd-vhosts.conf` file from step 4.**

There is only one file to open and edit:

{% highlight shell %}
$ sudo nano /etc/hosts
{% endhighlight %}

**Do not delete anything from this file and tread with extreme caution.** Any faults to the default items here can cause unexpected consequences to your system (as denoted by the by the message provided in this file). The default file looks like this:

{% highlight html %}
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting. Do not change this entry.
##
127.0.0.1        localhost
255.255.255.255  broadcasthost
::1              localhost
{% endhighlight %}

Go ahead and add our local sites to the **bottom** of this file:

{% highlight html %}
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting. Do not change this entry.
##
127.0.0.1        localhost
255.255.255.255  broadcasthost
::1              localhost
127.0.0.1        http://www.example1.dev www.example1.dev http://example1.dev example1.dev
127.0.0.1        http://www.example2.dev www.example2.dev http://example2.dev example2.dev
{% endhighlight %}

Save and close. The last step here is to restart Apache:

{% highlight shell %}
sudo apachectl restart
{% endhighlight %}

Once Apache has restarted, go ahead and open your web browser and visit the following sites:

- **http://example1.dev**
- **http://example2.dev**

If you followed the guide correctly, you should be greeted by your "Hello, World!" `index.html` files:

![El Capitan Apache Hello World](/img/posts/el-capitan-apache-hello-world.png)
Hello... world? (Source: Digital Shore)
{: .post-caption }

## 6. Test Local PHP Using a Simple Function

Finally, this last step is a bit of an "extra step" that isn't necessarily required but is something that I personally find useful to have in my dev environment. Remember that snippet of code you added to the top of our Virtual Host file from step 4? That directive tells Apache to render PHP code that it finds within HTML documents.

**Step 6 tests out the local PHP to ensure it's operational. If you followed the optional PHP items in steps 3 and 4, go ahead and complete step 6.**

There's some really cool and sophisticated stuff that can be done with PHP, as well as some simple, yet taken for granted items, such as generating the current year automatically as a copyright in the site's footer. Go ahead and revisit the **example1** site add a "copyright year" to **http://example1.dev**:

{% highlight shell %}
sudo nano ~/sites/example1/index.html
{% endhighlight %}

Add the following line below our second paragraph:

{% highlight php %}
<p>Copyright &copy; <?php echo date("Y"); ?>.</p>
{% endhighlight %}

Visit **http://example1.dev** and take a look:

![El Capitan Apache PHP date time error](/img/posts/el-capitan-apache-php-date-time-warning.png)
PHP is yelling at us for our lack of a specified timezone (Source: Digital Shore)
{: .post-caption }

Oh no! What in the world is going on here? It looks like PHP is yelling at us for not setting a time.

That's because you need to create and configure the `php.ini` file. To do so, navigate to the following in Terminal:

{% highlight shell %}
$ cd /etc/
{% endhighlight %}

Next, copy the existing `php.ini.default` file as `php.ini` and then open the newly created `php.ini` with nano:

{% highlight shell %}
$ sudo cp php.ini.default php.ini && sudo nano php.ini
{% endhighlight %}

You'll need to set the timezone to get that PHP error message to go away. To do so, search with nano using **Ctrl-W** and enter `date.timezone`. Once you find it, enter `UTC` after `=`.

![El Capitan Apache PHP date time fix](/img/posts/el-capitan-apache-php-ini-time.png)
Timezone is now set to UTC (Source: Digital Shore)
{: .post-caption }

Restart Apache one more time:

{% highlight shell %}
$ sudo apachectl restart
{% endhighlight %}

Refresh **http://example1.dev** in your web browser. Much better now:

![El Capitan Apache PHP copyright year](/img/posts/el-capitan-apache-php-year-copyright.png)
No more PHP warnings! (Source: Digital Shore)
{: .post-caption }

## Pat Yourself on the Back

If you followed along and made it to this portion of the guide, feel free to give yourself a pat on the back, because you're done!

With a local web server configured on your Mac, the Sites directory from your Home directory acting as your web root, and the ability to add as many "dev URLs" as you want, your work flow has been ***dramatically*** enhanced. Having sites served up locally by Apache is great for developing right on your machine. Layer in Git for version control and to push commits out to a remote server and you'll never fool around with another FTP or CPanel ever again. Guaranteed.

With an amazing setup like this, maybe it's time to look into Jekyll and ditch your CMS. Because, who wants to be stuck in 2005 meddling around with a clunky user interface and an archaic WYSIWYG editor? If you want to learn more about using Jekyll, read about [why Jekyll should replace your CMS](/jekyll-better-choice-than-joomla-wordpress/).

Or, now that you're no stranger to the command line, why not check out how to [set up a local Linux environment with Vagrant](/set-up-a-local-linux-development-environment-with-vagrant/)? You can easily leverage virtual machines to run and manage Apache without any risk to editing key system files on your Mac!
