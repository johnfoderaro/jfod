---
title: Is Jekyll Better Than Joomla! and WordPress?
description: Ditch your CMS and embrace modern front-end web development technologies by using Jekyll, Grunt, Bower and more.
headline: Is Jekyll Better Than Joomla! and WordPress?
date: June 14, 2016
collection: blog
layout: post.hbt
---

I’ll admit, right out of the gate, that this article is completely biased. I developed this website with Jekyll and I did it in direct defiance of the typical "you need to use a Content Management System to build a website” school of thought.

My first experience in real web development began several years ago with Joomla!. Over the years, I've come to the conclusion that traditional CMSs aren't the silver-bullets they're touted to be. Instead, they're loaded with bloated code, plagued with security holes, and -- most importantly -- keep your website confined to the limitations of that particular system or framework. The result? More time is spent configuring and customizing the CMS, hacking the core code to bits, than actually building and developing something *amazing*.

Thankfully static site generators like Jekyll are helping in banishing CMSs like Joomla! back, back to 2005 from whence they came!

## You Probably Don't Even Need a CMS

If you have to ask whether or not you need a CMS, the answer is probably no. Most organizations that require a CMS (in the traditional sense) tend to meet the following criteria:

- Regularly publish new, serialized content
- Have several members who need constant access to the content

Now, before going any further and planting both of my feet firmly upon my soapbox, I do want to point out that I've worked on several large news websites that meet these two criteria (some with over 1,000,000 pages in existence). For these organizations, a CMS is absolutely necessary. Organizations like these tend to use custom Drupal environments that really limited any CMS work to simply adding and publishing content. Actual development and even simple styling beyond using predefined in-line HTML tags had all existed outside of the CMS entirely. The CMS was simply a portal for editors to add and publish their content and nothing more.

My argument is actually aimed at the small to medium sized sites that take the CMS route to only end up completely frustrated. These smaller organizations attempt to have the CMS handle all of their development needs AND their content publishing needs. If your daily activities do not meet the criteria above, then you probably do not need a traditional CMS.

As mind blowing as it may sound, there are countless alternatives to Joomla!, WordPress and Drupal. For many small to medium sized websites, the issues that come with traditional CMSs greatly outweigh any of the perceived benefits (or, in many cases, these same issues outweigh the actual benefits, too).

With a static site generator that can transform plain text into websites and blogs -- why even bother with traditional CMSs anymore?

## The Perceived "Gain" from a CMS: The Backend

The perceived gain most organizations believe a CMS offers is the almighty administration area or "backend" where users can sign in. Without being able to venture to **example.com/administrator** to do ***anything*** website related is completely foolish and downright primitive, right? Clearly the only way to build, manage, and maintain a website is only if you can sign into it via the web.

Once you're in the backend, most of the typical workflows involve adding text, images, and other media via a WYSIWYG editor and then publishing it for the world to see. Other times, depending upon the CMS in question, there is the ability to edit HTML, CSS, JavaScript and even PHP directly through the backend itself. Nearly all traditional CMSs require some sort of template, plugins and other features to bring it all together. All of the content is then stored in a database, typically MySQL, and is queried and connected via PHP code to serve up an HTML document upon request.

All said and done, there are several moving pieces, all of which created by third parties that aren't in-house and aren't part of your direct team. What could possibly go wrong?

A better system has to exist.

## The Actual "Gain" from a CMS: An Unwieldy Hairy Beast

What do you actually gain when you use a CMS like WordPress, Joomla! or Drupal? A unwieldy hairy beast, followed by a poison pill to swallow as a front-end web developer. You know immediately that there will be a ton of concessions to the default behavior of that hairy beast -- no matter how maddening and completely ridiculous that default behavior may be (Joomla! hidden menus for URL construction, anyone?).

Most CMSs become a massive roadblock to circumvent, whether its during the launch of a new site or whenever a new and exciting feature is thought up by the powers that be. Implementing most things on your CMS requires significant hoop-jumping if you're looking to do anything outside of the box. That's because there is never a perfect template to work with, there are constant battles with security risks, and there is never ending extension updates and patches to keep up with. And, with the CMS itself, it's a nightmare and a half to architect anything without compromise, generally because the CMS cannot do X without limiting Y, or the CMS cannot complete A to produce C, because of the issue with B.

In addition, let's not gloss over the ultimate compromise (or sacrifice, really) that's made when choosing this perceived silver-bullet: a horrible experience for the content creators and an even worse experience for the web developers. Both parties lose in this scenario. You get an overly complicated system for the teammates who are suppose to excel at writing and content creation. Then, on the flip side, your web developers get a watered down system that they have to battle with each day, hacking it to hell and back to get new features added and created.

There is a better solution.

## Jekyll as a Viable Alternative

Thankfully static site generators have gained more exposure over the past few years due to communities like GitHub and the like. Jekyll is one of the more well known static site generators, responsible for powering GitHub Pages as well as a lot of content on the Healthcare.gov site (no, Jekyll was not the reason for that site having crumby performance when it launched -- you can thank Oracle for that).

What I love most about Jekyll is that it does not confine you into a box like Joomla! or WordPress. There's no nasty PHP spaghetti code to navigate or heavy weight databases tying up server resources. What you get is static content that can be served up effortlessly with minimal resources, and most importantly free range to build what ever you want. You can literally build whatever you want with Jekyll and it just works. And it works very, very well.

You can define everything with Jekyll. Want to ensure pages have social markup for Twitter Cards and Facebook Open Graph tags? Write some meta data in your YAML Front Matter at the top of each HTML or Markdown page -- then just reference that meta data within the head of each page via an include template. Want to implement a canonical tag strategy for your blog pagination where duplicate content on an intro page can become an SEO risk? Again - YAML Front Matter to the rescue. Need to throw in some clever if/else if/then statements so you're not loading a jQuery form validation plugin on pages that do not contain a submission form? The Liquid Template system has got your back.

Some of this may sound confusing or foreign at first, but it's actually very easy to learn -- easier than PHP if you're hitting road blocks with the traditional CMSs.

![Jekyll Directory Example](/img/posts/digital-shore-source.png){: .img-responsive .center-block }
The entire DigitalShore.io source code open within Atom (Source: Digital Shore)
{: .post-caption}

## The Benefits of Jekyll

Technically speaking, it can be argued that Jekyll in of itself is a Content Management System, as it does provide a structure and hierarchy to all of your Markdown, HTML, CSS and JavaScript files within your project. But, without getting into the semantics of what a CMS is, here is a list of the benefits you gain while using Jekyll:

- Develop Locally
- Pure Speed and Ease of Use
- No Compromise Front-End Web Development
- Write in Plain HTML & Markdown (No WYSIWYG Madness)
- Zero Server-Side Prerequisites such as PHP or MySQL
- "Include" Files to Keep Site-wide Edits Simple
- The Ability to Layer Jekyll into Advanced Workflows

### Develop Locally

One of my favorite aspects about Jekyll is being able to develop a site locally on my machine with very little fuss. Since Jekyll is a Ruby Gem, it can be installed directly onto a Mac or PC requiring just a few prerequisites. Once the Gem is installed and you navigate to your preferred directory for your project via the command line, you can simply run `jekyll new (project name)`. Jekyll then builds out its folder structure within that directory and you're able to begin adding content via HTML or Markdown, as well as your relevant CSS and JavaScript files.

As you work on adding and editing files, Jekyll compiles a static version of your project within the `_sites` folder of your project directory. Want to see how your site is coming along as you're actively working on coding HTML, CSS or JavaScript? Check out http://localhost:4000

### Pure Speed and Ease of Use

Jekyll compiles the static version of your site after each time you save a document when the `jekyll build -w` command is running. This means when you're ready to deploy, your site is 100% ready to be served right then and there. There aren't any requests being routed through your server involving database queries or PHP code execution. The site, once compiled, is pure HTML, CSS and JavaScript (unless of course you did include some server-side actions like PHP code execution, which you very well could if you want to -- but it isn't necessary in order to get Jekyll up and running).

Your site as pure HTML, CSS and JavaScript will load instantly, requiring less resources from your hosting service. This means you can easily get away with running a modest service such as Digital Ocean's Virtual Private Server that offers [SSD performance starting at $5 a month](https://www.digitalocean.com/?refcode=45842cbd061c). Simply fire up and configure a web server running Apache or Ngnix and you're golden.

### No Compromise Front-End Web Development

When using traditional CMS, simple things like adding a field that dictates the content within a social media markup tag in the `<head>` requires significant hoop-jumping, hacking, or a third party plugin -- somethings all three. With Jekyll, you can clearly and easily define these types of elements. If you want to ensure certain pages have a unique title for Facebook Open Graph, then go ahead and create this logic using the YAML Front Matter.

There are literally zero limitations or compromises that need to be made when building a site using Jekyll. You have absolute control over every single thing.

### Write in Plain HTML & Markdown (No WYSIWYG Madness)

Nearly every What You See Is What You Get (WYSIWYG) editor has the intention of providing an easy user experience all around. Unfortunately this is not the case, as many editors often produce HTML riddled with formatting errors, extraneous in-line tags, and basically just plain hideous HTML as far as modern day web standards are concerned.

With Jekyll, you're working directly with plain text in it's purest form. Open your text editor of choice and begin typing. Format your documents in your preferred extension (HTML, CSS, JS, or even MD for Markdown) and let Jekyll compile and spit out the final result within the `_site` folder of your project directory. The Markdown to HTML transition is next to perfect as compared to "plain text" being entered into a WYSIWYG.

### Zero Server-Side Prerequisites such as PHP or MySQL

All you need is a web server that can respond with serving up your HTML, CSS and JavaScript. These are tasks that Apache and Ngnix do very well. Especially when there aren't other resources like PHP or MySQL running in the background. Mainly because these two programs aren't required with Jekyll.

The only requirements are setting up and configuring your web server and domain (Virtual Host files with Apache, A Records pointing to your server's IP, etc.). Once the server is functional, you just need to place the contents of your `_site` folder within your web root folder.

That's it.

### "Include" Files to Keep Site-wide Edits Simple

Pure static sites can be an issue when it comes down to updating something simple, like a navigation item, and you need to literally edit every single file on a site. Luckily Jekyll solves for this problem. Using the Liquid Template system and YAML Front Matter, you can tie together Markdown and HTML content once the site is compiled. The best example of this feature in action is creating one file that represents the "Header" portion of your site. In this document you'll probably include HTML from the very top starting with `<!DOCTYPE html>` all the way to your navigation and opening `<body>` tag. The purpose of doing this is having one file that can be re-used again and again across each page on the site. When a change comes involving adding or removing a navigation item, you're editing one file and not several.

### The Ability to Layer Jekyll into Advanced Workflows
Jekyll fits many front-end workflows rather effortlessly, as its semantic structure allows for all compiled "final product" files to appear within the `_site` folder within your project directory.

Several projects of mine have the latest Bootstrap and Font Awesome source code living within the parent directory of each project. Using Grunt, the most up to date CSS and JS is compiled and sent to their respective folders within a folder titled `dist`. Inside of the `dist` folder is Jekyll and all of its folders (these folders generally begin with an underscore). From here, I can also run Grunt to look for and compile any LESS changes into one CSS file when I work on the style of the site, and Jekyll to look for and compile the final "production-ready" version of the site every time *any* file changes and is saved within `dist` folder -- spitting the end result into the `_site` folder.

Adding Git to the top level project folder makes version control a breeze. Once I am satisfied with my work and what's been created, I can simply use a Git remote to push the project to my VPS. Once the project hits the VPS, a Git Hook runs Jekyll and tells it to place the production version of the site (the contents of the `_site` folder) directly into my web server's document root, ready for the world to see.

The entire process of compiling and deploying the site to production only takes about **5 or 6 seconds**.

## How to Integrate Jekyll with Your Team

Web developers will become enamored with Jekyll as will content creators after a brief crash course in Markdown. Jekyll offers the best of both worlds for your team. Your web developers gain unfettered access and ability to do what they do best - develop amazing things. Your content creators get to throw the towel in on battling WYSIWYG editors and clunky backends and instead produce their work directly in Markdown. The end result is harmony across the board.

Layer in Git for version control and the ability to merge branches and you're now treating your website as if it's an incremental, version controlled piece of software.

## The Modern Web Developer's Allegory of the CMS

For me, abandoning Joomla! has been comparable to Plato's Allegory of the Cave. Building websites using a CMS like Joomla! has been similar to simply seeing shadows projected on the wall as false representations of reality. To me, all that was inferred as being real was that of hacking templates and working through a convoluted backend to actually produce or develop anything. These were my realities.

Once I escaped the cave and began exploring web development without a CMS, I realized that everything Joomla! offered had been absolutely false. Of course, with my eyes soaking up the sun for the first time, there was some residual, albeit temporary blindness -- namely, learning curves and time spent figuring out new systems like Linux, Apache, and Jekyll. However, upon returning into the cave to rescue my peers and to show them the true reality, they seem to only interpret my temporary blindness as a firm reason to *not* step foot outside.

I eagerly await the day for [static site generators](/how-to-install-jekyll-mac-os-x-el-capitan/) to become the norm and for the hairy beasts we call "traditional CMSs" to become ancient relics only read about on Wikipedia.
