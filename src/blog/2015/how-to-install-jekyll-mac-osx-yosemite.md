---
title: How to Install Jekyll on Mac OS X 10.10 Yosemite
description: Want to learn how to install Jekyll on Mac OS X 10.10 Yosemite? Check out our easy to follow guide!
headline: How to Install Jekyll on Mac OS X 10.10 Yosemite
date: 2015/03/22
collection: blog
layout: post.hbt
---

After much frustration dealing with Joomla! and Wordpress over the past several years, battling constant plugin issues, security risks, and the overall bloat of a Content Management System, I decided to switch how I develop websites. Eventually I stumbled upon Jekyll and my web development world has never been the same since.

## What is Jekyll?

Jekyll is a static site generator that essentially takes plain text files and transforms them into a functional website. Markdown is used for the typical content pages, and Liquid for template pages. According to the Jekyll Documentation:

>Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server.

**Using Jekyll over Joomla! or Wordpress offers several advantages:**

### Speed
Since there isn’t a database involved and more likely zero server side interpretations on how to render a page dynamically (speaking strictly about a vanilla Jekyll installation), the site is *lightning* fast. Web servers can handle static files with ease as serving up HTML, CSS, and JavaScript to a web browser is an incredibly basic task. No PHP interpreting and database queries going on behind the scenes either.

### Size
A Jekyll site will have a much smaller footprint as compared to a typical CMS. There aren't any hacked up, bloated templates. No need for databases and a database server like MySQL or endless PHP files to connect all the dots.   This means you won’t need to worry about your server or VPN having a lot of ram and CPU headroom, because the requirements are way less demanding. That makes choosing a simple VPN service like [Digital Ocean’s basic Droplet](https://www.digitalocean.com/?refcode=45842cbd061c) a very smart choice.

### Ease
Jekyll may seem intimidating at first with having to use the command line, learning the layout, learning about other tools like NPM, Bower, Grunt, and using Git to deploy changes, but, it actually turns out to be incredibly easy once you iron out your own personal workflow. The learning curve can be steep depending upon your knowledge, but its such an awesome journey to take. Additionally, you’re not locked down to what a CMS can or cannot offer. This means, your website literally has limitless possibilities!

The most important advantage of abandoning your CMS is that you get your feet wet learning a ***ton*** of new methods and new technologies that literally put you in **complete control**.

## Prerequisites for this Guide:

- Mac OS X Yosemite 10.10  
- Xcode: Available from the Mac App Store  
- Ruby: This guide references the pre-installed version)  
- Basic Knowledge of Terminal  

This introductory guide is intended to get you up and running with a basic Jekyll installation.

### Mac OSX 10.10 Yosemite

This guide is based upon using Mac OS X 10.10 Yosemite. If you’re on Mavericks or Mountain Lion, pull the trigger and upgrade already. The new design is worth any upgrade pains you may face. Also - this guide is based upon setting up Jekyll on Yosemite.

### Xcode

Xcode is needed for some of the dependencies that Jekyll relies on. It’s best to install this first so there aren’t any issues when attempting to install the Jekyll Ruby Gem. To get Xcode, simple make your way to the Mac App Store. Once it’s installed, open Xcode to agree to the terms and conditions. Once that's done, there is one additional item needed, the Xcode Command-Line Tools. You can download this additional Xcode component through Preferences -> Downloads -> Components. Or you can get it through Terminal (more on Terminal below) with the following command:

```bash
xcode-select —install
```

### Ruby

For the purpose of this guide, we’ll be using the system version of Ruby that ships with Yosemite. This means I won’t be covering using Homebrew, RVM, and managing different Ruby installations. Personally, I find it easier to just use what the OS already has when dealing with Jekyll as Jekyll 2.5.3 (latest version as of writing this guide) only requires a Ruby version of 1.9.3 or higher.

If you’re using Ruby for other projects, then using RVM and updating to the latest version of Ruby and leaving the system version alone would be ideal. Since we are just dealing with Jekyll, the version that ships with Yosemite is perfectly fine and allows us to get up and running with ease. As we’re dealing with the system version of Ruby, be careful with what Gems you install and how you manage using the default OS X version of Ruby.

Yosemite ships with Ruby 2.0.0 and RubyGems version 2.0.14. Gems are installed to:

```bash
/Library/Ruby/Gems/2.0.0/cache/
```

With Ruby already included with Yosemite, there isn’t really anything necessary to configure for this guide.

### Terminal

To install and use Jekyll, you’ll need to be comfortable with using Terminal on your Mac. The good news is that it’s already installed on your Mac!

Terminal is a program that offers a command line interface with a Unix shell. In the case of Mac OS X, the Unix shell used with Terminal is [bash](http://en.wikipedia.org/wiki/Bash_(Unix_shell)).

Please be advised that any misuse of the `sudo` command can result in ***serious*** problems if you do not know what you are doing. User discretion is advised!

Ok, now that the doom and gloom part of using Terminal is out of the way, you’ll actually find that completing tasks using the Terminal is actually pretty fun. It’s also a great way to brush up on your bash command line skills!

## Install Jekyll

To install Jekyll, open up your Terminal and enter the following command:

```bash
sudo gem install jekyll
```

You'll see that several other Gems install to complete the Jekyll installation. Once done, you're all set -- just one command needed to install Jekyll on Mac OS X 10.10 Yosemite. Pretty easy, right?

If you receive any errors, be sure that you've installed the Xcode Command-Line Tools. If there are still issues, check out the official Jekyll documentation.

## What’s Next?

Now that you’re all set with getting Jekyll up and running, you’re probably scratching your head thinking: what the hell is next?

Well, we're busy working on a part-two to this guide, diving into how to use Jekyll. In the meantime, here are some other very useful resources to help you on your Jekyll journey:

- The official [Jekyll Documentation](http://jekyllrb.com/docs/home/)
- This very helpful [Jekyll Tutorial](https://www.andrewmunsell.com/tutorials/jekyll-by-example)
