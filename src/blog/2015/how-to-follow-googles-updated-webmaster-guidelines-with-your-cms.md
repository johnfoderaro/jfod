---
title: Can Your CMS Meet Google's Updated Guidelines
description: Blocking CSS and JS in robots.txt is a big no-no with Google's October 2014 Webmaster Update.
headline: Can Your CMS Meet Google's Updated Guidelines?
date: 2015/01/01
collection: blog
layout: post.hbt
---

The rumors of Google being able to crawl JavaScript is starting to become more of a reality as of late. Back in October 2014, [Google updated their technical Webmaster Guidelines](http://googlewebmastercentral.blogspot.com/2014/10/updating-our-technical-webmaster.html){:target="_blank"} explaining how their crawler will begin rendering pages like a modern web browser - crawling, downloading, and parsing images, CSS, and JavaScript.

These new guidelines recommend that Googlebot should be allowed access to all code and images used on-page. Not complying with these latest guidelines can result in some serious ranking issues as outlined by Google:

>Disallowing crawling of Javascript or CSS files in your site’s robots.txt directly harms how well our algorithms render and index your content and can result in suboptimal rankings.

This is a large shift for many web masters and SEOs for two reasons. First, many Content Management Systems come pre-configured to disallow these very files Google now tells us that we need to allow. Second, disallowing JS and CSS was typically a best practice as Googlebot would often crawl and index content that ultimately resulted in causing more problems (4xx and 5xx server errors from links within JS files, etc.).

I view this latest Google Webmaster Guideline change as part of our usual routine as SEOs because the industry is constantly changing and evolving. With that said, it's critical to comply with these types of changes as soon as possible.

If you’re running a static website, then you should have little to worry about. Making the appropriate changes to your robots.txt file should be very straight forward as there aren't any "moving pieces" to really worry about. Also, there is probably way less directories and file paths to comb through.

If you’re running a CMS, then you're most likely aware of the abundance of directories on your server that shouldn’t be exposed to search engine bots and shouldn’t be indexed in the search engine results pages either, such as different template styles, plugins and add-ons, administrative pages, and other sections that open up vulnerability to attack.

This is where allowing images, JS, and CSS becomes tricky if you're not confident in your robots.txt knowledge or if you have a CMS that has a multitude of directories and folders.

Where to begin?

## Review Your Existing Robots.txt File

First, let's review the current robots.txt file to see what we're working with. Below is an example of a standard robots.txt file from Joomla!, a very common CMS:

{% highlight html %}
User-agent: *
Disallow: /administrator/
Disallow: /cache/
Disallow: /cli/
Disallow: /components/
Disallow: /images/
Disallow: /includes/
Disallow: /installation/
Disallow: /language/
Disallow: /libraries/
Disallow: /logs/
Disallow: /media/
Disallow: /modules/
Disallow: /plugins/
Disallow: /templates/
Disallow: /tmp/
{% endhighlight %}

Here we see that a number of directories are disallowed, and for good reason too. Before we start making any changes to this file, lets gain an understanding of what to look for in the source code, as many of the files that need to be allowed most likely live in these directories.

To comply with Google's latest technical Webmaster Guidelines, we need to ensure all image, CSS, and JS files are crawlable. Once we identify what we need to allow within robots.txt, we can revisit this very same file.

## Identify Directories To Allow

View source on your website and take a look within the ``<head> </head>`` to find references to assets that Googlebot should be allowed to crawl. Some sites even place JavaScript files toward the bottom, before the closing ``</body>`` tag. Take note of these directories as many are probably already listed within the default robots.txt file. Below are some examples of what you may find:

{% highlight html lineos %}
<script src="/media/system/js/core.js" type="text/javascript"></script>
<link rel="stylesheet" href="/media/com_finder/css/finder.css" type="text/css" />
{% endhighlight %}

In this example we have ``.js`` and ``.css`` files in different directories that Googlebot needs access to. How do we ensure we're only allowing access to files that we need to allow? Instead of allowing the entire directory or removing the disallow entries completely, we can leverage wildcards.

## Allow Certain File Extensions with Wildcards

**Caution: Tread *very* lightly when dealing with robots.txt. If incorrect rules make their way onto a a production site, you run the risk of damaging your rankings!**

While this post won't be diving into various robots.txt rules and methods, it does assume that you have a working knowledge of what robots.txt is and what it can do for your site. And also that you have a working knowledge of how if handled incorrectly, robots.txt can damage your site's organic search performance.

Thankfully, files in robots.txt can just as easily be allowed with equally as simple rules. For our example from above, we'll want to look for a common denominator within each file's directory to keep our rules short, simple, and clean. Here we see that ``/media/`` is a common denominator, letting us keep our rules grouped together. Now, lets use wildcard entries to put our rules in place so we don't open access to the entire folder or directory.

### Wildcard Entries

A wildcard uses an asterisk -- ``*`` -- followed by what you want to have as an exception to a rule, whether it be a particular file or folder. Using our example, we want to allow certain assets -- particularly file extensions ending with ``.css`` and ``.js``. To allow these assets, lets add the following allow rules **above** their respective disallow rules, simply adding the wildcard entry after the trailing slash:

{% highlight html %}
Allow: /media/*.css
Allow: /media/*.js
Disallow: /media/
{% endhighlight %}

Lets continue to review the other ``.css``, ``.js``, and images files specified throughout our example site's source code to ensure we're giving Googlebot full access to everything it wants to see.

After fully reviewing the source code on our example site for images, CSS, and JS to allow, our robots.txt file has morphed into this:

{% highlight html %}
User-agent: *
Disallow: /administrator/
Disallow: /cache/
Disallow: /cli/
Disallow: /components/
Allow: /images/*.png
Allow: /images/*.jpg
Allow: /images/*.jpeg
Allow: /images/*.gif
Disallow: /images/
Disallow: /includes/
Disallow: /installation/
Disallow: /language/
Disallow: /libraries/
Disallow: /logs/
Allow: /media/*.css
Allow: /media/*.js
Disallow: /media/
Allow: /modules/*.png
Allow: /modules/*.jpg
Allow: /modules/*.jpeg
Allow: /modules/*.gif
Allow: /modules/*.css
Allow: /modules/*.js
Disallow: /modules/
Allow: /plugins/*.js
Disallow: /plugins/
Allow: /templates/*.css
Disallow: /templates/
Disallow: /tmp/
{% endhighlight %}

It's great that we have these new rules in place, ready to commit and deploy. But do they work?

## Test with Google Webmaster Tools

This is where the **robots.txt Tester** within Google Webmaster Tools steps in. This tool received a nice update right around the time of the technical Webmaster Tools Guideline update. To reach this tool within Webmaster Tools:

1. Sign In
2. Select Your Site
3. Left Column Menu, Select 'Crawl'
4. Select 'robots.txt Tester'

Here you will be presented with a text-area that contains the contents of your existing robots.txt file. This field is editable which is great for testing purposes. If you have a test environment that you can deploy to, do so and test using this tool. If you do not, then you can leverage this tool for testing purposes before committing any changes.

Below the robots.txt text areas you'll find a field where you can enter a file to test for Googlebot crawlability. Since we're testing one of our example files, let's see how well our new rules worked out by entering:

{% highlight html %}
http://www.example.com/media/com_finder/css/finder.css
{% endhighlight %}

<img src="/img/posts/robots-txt-tester.png" class="img-responsive" alt="robots.txt testing tool">

Success! Googlebot is able to successfully crawl this ``.css`` file from our example without any issue and without us exposing any file other than ones ending with the ``.css`` extension. This very same principle can apply to all files and assets we want to allow Googlebot to crawl, such as ``.css`` files and image files like ``.jpeg``, ``.jpg``, ``.gif``, and ``.png``, so be sure to follow these guidelines and test appropriately before any code is committed or deployed.

## Think About Future CSS & JS Concatenation

Now that you've mastered allowing and disallowing certain areas of your site through robots.txt to comply with Google's most recent technical Webmaster Guideline update, you may want to consider following some of their strongly suggested actions as these tend to foreshadow what's coming down the pipeline.

Google strongly recommends concatenating all other CSS and JS assets. There are two schools of thoughts on keeping separate files and for good reason too -- one believes separate files help streamline development while the other believes one file is best for load times and search engines.

Time will tell which practice becomes best.
