---
title: Install Jekyll on OS X El Capitan 10.11
description: Learn how to effortlessly install Jekyll on OS X 10.11 El Capitan. Jump start your next project with the Jekyll boilerplate and these useful Jekyll commands.
headline: Install Jekyll on OS X El Capitan 10.11
date: 2015/12/20
collection: blog
layout: post.hbt
---

If you're interested in static site generators and had just recently discovered Jekyll, then you're probably really curious about what's required to get up and running on your Mac -- with minimal fuss, of course. And since the Jekyll documentation can be a bit overwhelming to someone new to the concept of a static site generator, this easy to understand guide has been built to help ease things a bit. It'll walk you through the steps necessary to install Jekyll on Mac OS X 10.11 El Capitan followed by some helpful tips to jump-start your next project!

## Jekyll Installation

### Prerequisites  

- Ruby
- Xcode
- Xcode CLI

#### Ruby

Jekyll 3 requires Ruby 2 or higher. Since this tutorial will leverage the system Ruby, this requirement is already taken care of.

It should be noted that this method has its own set of pro's and con's compared to installing Ruby with a package manager (such as Homebrew) and leaving the system version as-is. But, this topic can be saved for a different tutorial -- for the sake of ease and simplicity, this tutorial will use the system Ruby.

#### Xcode

Xcode is a requirement as it provides necessary dependencies for the Jekyll Ruby Gem to run correctly. It's very easy to get Xcode as it's readily available in the Mac App Store. Once you download and install this application, be sure to open it and agree to the terms and conditions before proceeding.

#### Xcode Command Line Tools

Once Xcode has been installed, and you've opened the app once to accept the terms and conditions, run the following command in Terminal (you shouldn't need `sudo` for this):

`xcode-select --install`

A message will appear in Terminal stating: "install requested for command line developer tools". Immediately, a pop up window will appear where you can then click "install". The installation should be finished in about 1-2 minutes.

### Installing Jekyll

Considering the recent security changes with OS X El Capitan, the use of `sudo` to install Jekyll is more than likely a requirement at this point, especially while using the system version of Ruby. To install Jekyll, enter the following command:

`sudo gem install jekyll`

If for whatever reason you run into issues, check out this area of the [Jekyll documentation](http://jekyllrb.com/docs/troubleshooting/) on how you can get up and running.

### Upgrading Jekyll

Already have an older version of Jekyll and just need to upgrade? Upgrading Jekyll is just as easy as installing it. To upgrade Jekyll on Mac OS X 10.11 El Capitan, enter the following command:

`sudo gem update jekyll`

## Getting Started with the Jekyll Boilerplate

Once you have Jekyll successfully installed or upgraded, one of the best methods to get started is by using the default **Jekyll boilerplate**. This concept is useful as it introduces you to the file structure for your Jekyll projects and also provides you a scaffold to work with. It's a great way to begin to learning your way around Jekyll.

To begin, open Terminal and navigate to your desired parent directory for your Jekyll project. Once there, enter the following command, swapping out `<project-name>` with the desired name of your project:

`jekyll new <project-name>`

Once completed, you should have a project directory that looks very similar to like this (for the sake of this tutorial, my project is named `jekyll-test`):

![how to install jekyll osx 10.11 el capitan](/img/posts/jekyll-boilerplate.png)
All Jekyll "system directories" begin with an underscore (Source: DigitalShore.io)
{: .post-caption }

But before going any further, let's flip over to the Terminal again, and look at a few useful Jekyll commands for building and serving the site locally -- one of Jekyll's coolest features!

## Useful Jekyll Commands

There are a few "main" Jekyll commands available, of which where several flags can be added to customize things a bit. Below are some of the more common commands used to build and serve Jekyll sites. To run any of these commands, just navigate to a project directory that contains a `_config.yml` file (you'll have this file by default if you followed the boilerplate method from above).

### Build Jekyll Once

If you're looking to just build your Jekyll site one-time, the following command has got your back:

`jekyll build`

This command instructs Jekyll to build out whatever exists within the project directory, placing a "finished product" within a newly added sub directory titled `_site`. The contents of the `_site` sub directory is the compiled static version of your site.

Essentially, you'll have this:

`/project-name/_site/`

Where all of the "source" files living within `/project-name/` are complied by Jekyll.

You can edit the destination and even the name of the destination directory within the `_config.yml`. For the sake of simplicity, this tutorial will stick to the default Jekyll convention and will utilize the `_site` sub directory. The above `/project-name/` and `_site` principle also applies to the other Jekyll build and serve methods discussed below.

It should be noted that this command will not *watch* for file changes and does not *serve* the site locally. Without going off on too far of a tangent, it can appear that this command doesn't sound very helpful, however, it can be very useful for certain scenarios. For example, on this very same site, the humble `jekyll build` command is actually what's used in tandem with a Grunt file to build the site after any file changes. Grunt handles the "watching" for Jekyll, and several other tasks, while [Apache serves the site locally on my Mac](/local-web-development-environment-apache-osx-10-11-el-capitan/).

### Build Jekyll and Watch for Changes


There's an additional flag that can be added to the regular build command that can *watch* for changes within the project directory. This is useful, as not only does it watch for changes (any time there is a new file or a file is modified within the project directory), but it will also build the site -- outputting a finished, production ready product -- into your `_site` sub directory, until the command is cancelled. To run this command, enter the following into Terminal:

`jekyll build -w`

However, this command does not offer any sort of method to *serve files locally*. For that functionality, you'll need to look at the `jekyll serve` command.

### Build, Serve, and Watch Jekyll

The following command will hit all of the items above, but will also serve the contents of the `_site` sub directory locally on your machine. Meaning, this command takes care of building, watching, and serving your Jekyll project:

`jekyll serve`

Jekyll makes use of port 4000 on localhost by default. To view your project locally, open your web browser and navigate to the following address:

**http://localhost:4000**

### View Your Jekyll Site Throughout Your Local Network

You can access your Jekyll site locally at **http://localhost:4000**, but when you enter that address into your phone, tablet, or other device on your local network, you cannot access the site for testing, designing, and development purposes! How can you circumvent this hurdle? Well, with the use of this special flag to view your Jekyll site on any device on your local network:

`jekyll serve --host=0.0.0.0`

#### Viewing Locally on the Machine Running Jekyll

To continue to view your site on your very same machine that is serving Jekyll, port 4000 on localhost is still the way to go:

**http://localhost:4000**

#### Viewing from Other Devices on the Local Network

However, visiting your locally served Jekyll site from another device on your network will require you to access the computer running the Jekyll server. To do this, you'll need to hit that machine's internal or local IP address. The local IP address can be found using one of two methods:

1. On Mac OS X 10.11 El Capitan, this can be found directly in System Preferences under Network -- for me, I found that my local IP address is currently **192.168.156**.

2. Or, you can uncover your local IP address via the Terminal with the following command:

    `ifconfig | grep inet`

    Look on the fifth line, after `inet` and you'll see something similar to this: **192.168.1.156**.

Regardless of finding your IP address in System Preferences or via Terminal, you should ultimately be visiting an address similar to the one below, after appending port 4000 to the end -- `:4000`:

**http://192.168.1.156:4000**

Take note that local IP addresses are typically dynamic by default. Unless you've set something up differently on your network, the last few digits of your address can change time to time as devices come online and go offline. Simply something to keep in mind.

### Several Methods to Choose From

And while there are several methods to build, watch, and serve your Jekyll site, it should be noted that one consistency exists across all of the methods touched upon above:

**Jekyll wipes the `_site` sub directory upon each build.**

## Next Steps

Now that installation and getting started with Jekyll has been covered, the next step would be to begin coding! The Jekyll boilerplate is incredibly useful and offers a great foundation to begin building upon. However, if you're looking for something with a bit more style and general base layouts taken care of, check out Mark Otto's [Poole framework](https://github.com/poole/poole){:target="_blank"}. It offers a really great foundation that covers many of the style basics right out of the gate.

Otherwise, the great thing about Jekyll is that there's really no limitations or restrictions, so feel free to experiment, check out the community, and see what others are doing on GitHub.
