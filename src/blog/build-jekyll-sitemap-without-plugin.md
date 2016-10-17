---
title: Build a Jekyll Sitemap Without Any Plugins
description: Find out how you can build a Jekyll XML sitemap without any additional plugins or Gems.
headline: Build a Jekyll Sitemap Without Any Plugins
date: December 01, 2015
collection: blog
layout: post.hbt
---

<p class="lead">What good is a website without a little SEO love?</p>

As you may have guessed, the same SEO best practices and principles still apply to your lightning-fast Jekyll site. In fact, it's actually incredibly easy to create an XML sitemap, one that **doesn't rely on any sort of additional Ruby Gem or Jekyll plugin**.

Many GitHub Pages users probably remember being unable to use the most well known Jekyll sitemap generator, [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap){: target=" blank"}. Luckily, GitHub has a list of approved Jekyll plugins, with "jekyll-sitemap" being one of them.

Why even bother using a solution that isn't the de facto Jekyll sitemap plugin?

## Because There's an Easier Way with More Control
You built a Jekyll site because you want full control over what goes in and, subsequently once the site is generated, what comes out. It only makes perfect sense to craft your very own XML sitemap that suites your site's individual needs.

Below is the code from my simplistic `sitemap.xml` file, which lives in the root Jekyll directory, followed by an explanation around what's going on and ways to expand upon this setup:

{% highlight html %}
{% raw %}
---
sitemap: false
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% for post in site.posts %}
  <url>
    <loc>{{ site.url }}{{ post.url }}</loc>
    <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
  </url>
  {% endfor %}
  {% for page in site.pages %}
  {% if page.sitemap != false %}
  <url>
    <loc>{{ site.url }}{{ page.url }}</loc>
    <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
  </url>
  {% endif %}
  {% endfor %}
</urlset>
{% endraw %}
{% endhighlight %}

## Front Matter & the 'Sitemap' Variable
Every page in Jekyll, whether it's HTML, Markdown, or Textile (or XML in this case!), requires a snippet of YAML front matter. Even if there isn't any YAML variables to declare, two lines of three dashes at the top of the document is required.

In my example above, I have a variable titled `sitemap` that I have acting as a Boolean value -- falsy in particular. I added this variable to employ a little simplistic logic around which pages should and should not be included when the sitemap is generated. For all of the pages that I do not wish to have included in the sitemap (like the atom.xml feed, the sitemap itself, the 404 error page, or shallow content pages like "thank you" pages, etc.), I add this variable to the YAML front matter and set it to false.

This same concept and general use of the YAML front matter can apply to even more creative logic around what should and should not be generated in your sitemap. This concept can become incredibly useful around image sitemaps, video sitemaps and even news sitemaps, where there is a larger set a requirements to adhere to.

## Liquid 'For Loop' & 'Conditional Statements'
Upon first glance, the example above has the general look and feel of a basic XML sitemap, containing the XML version and `<urlset>` information at the top, followed by a listing of URLs. What does look different is the inclusion of Liquid Template Tags, which you're more than likely already familiar with if you're reading up on plugin-less XML sitemaps for Jekyll.

### Sitemap 'For Loops'
The first block of Liquid is a **for loop**, looping through each `post` that exists within `sites.posts`. For every post, Jekyll then outputs the code between the `{% raw %}{% for post in site.posts %}{% endraw %}` and `{% raw %}{% endfor %}{% endraw %}` tags. This should look very familiar as it's the same loop used within the Jekyll boilerplate which lists posts on the home page.

For `<loc>` and `<lastmod>`, some additional Liquid is used to list the site's URL (for example, "http://digitalshore.io/") followed by the post URL (using this post as an example, "build-jekyll-sitemap-without-plugin/"), for every item in the loop, by using `{% raw %}{{ site.url }}{{ post.url }}{% endraw %}`.

The last for loop is very similar to the first one, but it instead loops through each `page` that exists in `site.pages`, which is essentially every page that exists outside of a `_post` folder. Just like above, Jekyll then outputs the code between `{% raw %}{% for post in site.pages %}{% endraw %}` and `{% raw %}{% endfor %}{% endraw %}` tags.

Similar to the first block above, there are more Liquid tags to assist in handling `<loc>` and `<lastmod>` within this code block. Only, this time with `{% raw %}{{ site.url }}{{ page.url }}{% endraw %}` for `<loc>`, so that the `page` URL is used, not the `post` URL.

### Sitemap 'Conditional Statements'
Remember the YAML front matter variable, `sitemap`, from above? This is finally put to use within a **conditional statement** that's nested within the second for loop.

This **if statement**, `{% raw %}{% if page.sitemap != false %}{% endraw %}`, essentially says, if any of the pages within `site.pages` **is not equal to `sitemap: false`** (or, conversely *is* equal to `sitemap: true`), then do something.

In this case, the "do something" aspect is to output correctly formatted XML for the URL `<loc>` and `<lastmod>`, while excluding any Jekyll pages that have a `sitemap: false` variable.

## Last Mod... What About Priority & Change Frequency?
In my experience, Google mostly ignores the `<lastmod>` data. It's just unreliable data. So with that being said, I built out the above XML sitemap logic to just throw in the current site time, which is whatever the most recent Jekyll build time is. I also set it to adhere to the XML data/time schema, using the following Liquid tag `{% raw %}{{ site.time | date_to_xmlschema }}{% endraw %}`.

Even if Google [ignores](https://www.seroundtable.com/google-lastmod-xml-sitemap-20579.html) `<lastmod>` and [doesn't really care](https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html) about `<changefreq>` or `<priority>` (the last two which were purposely excluded from my sitemap), you still do not want Google flagging your sitemap with errors and warnings, so proper date and time formatting is a must.

## Next Steps

Submit it to Google! If you do not have a Google Search Console account, where you submit sitemaps and monitor your website for crawl errors, then, we'll, *you're doing it wrong!* Seriously, get an account up and running [here](https://www.google.com/webmasters/tools){: target="_blank"}, and add your site. Follow the necessary steps to get verified and submit your sitemap.

If you already have an account, submit your new Jekyll sitemap. And while you're at it, click the "fetch as Google" item under "Crawl". Then, fetch, render, and submit this bad boy to Google! It never hurts to fetch, render, and submit to Google every so often, especially after large site changes or additions (such as a new sitemap).

Happy ranking!
