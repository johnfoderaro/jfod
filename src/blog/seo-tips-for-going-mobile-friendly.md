---
title: 5 SEO Tips for Going Mobile-Friendly
description: Google's mobile-friendly ranking algorithm drops April 21, 2015. Is your site ready? Check out these 5 SEO tips for becoming mobile compliant.
headline: 5 SEO Tips for Going Mobile-Friendly
date: April 04, 2015
collection: blog
layout: post.hbt
---

We've all heard the news -- for several months now to be exact. Google is making a major shift with its ranking algorithm. Sites that currently rank in the mobile search engine results pages on Google that ***do not*** offer a mobile-friendly user experience will suffer a loss in rankings come Tuesday, April 21st, 2015. The rationale behind this? Sites that are not mobile-friendly have little to no business ranking in the mobile SERPs!

On February 26, 2015, [Google issued a post on their Webmaster Central Blog](http://googlewebmastercentral.blogspot.com/2015/02/finding-more-mobile-friendly-search.html){:target="_blank"} clearly stating what will happen, when it will happen, and what the consequences will be if webmasters are not compliant. Luckily, Big G gave webmasters and SEO's plenty of warning on this algorithm update -- something that generally never happens (any official word from Google tends to happen during or *after* the algorithm update).

If you haven't even read or heard about their blog post, you're nearly two months behind the curve. Shame on you, you're doing it wrong. If you have seen their post and you've been busy re-building your site to be mobile-friendly, then you absolutely have to read about these five SEO tips for going mobile-friendly.

## Check for Mobile-Friendliness

Good Guy Google is making things really easy for webmasters, SEO's, developers -- basically anyone touching a website -- to ensure that it meet's their criteria for "mobile-friendliness" by releasing their own testing tool. The [Mobile-Friendly Test](https://www.google.com/webmasters/tools/mobile-friendly/){:target="_blank"} checks your site and basically says "Yes, you're mobile friendly, here is some information about it" or "No, you need to work on your site some more. It's shit".

If you passed this test, then you're headed in the right direction. If you didn't pass the test, you have a ton of work ahead of you -- with just days left at this point.

Thankfully, the Mobile-Friendly Test is an easy to use and easy to understand tool. It actually provides some decent information and points webmasters into the right direction as far as next steps are concerned -- with a little screen grab of how Google sees your site as well as some nuggets of information around mobile-friendly design and the value of Google Webmaster Tools. Speaking of Google Webmaster Tools, this little screen grab of how Google sees a website now looks all too familiar.

## Fetch Your Site with Google Webmaster Tools

The Mobile Friendly Test does a great job in giving you some quick data, but Google Webmaster Tools offers even more. In the past, fetching your site as Goolgebot returned about 100KB of an HTML document. In plain HTML. Hardly anything worth clapping and cheering about, as it was pretty plain and simple. Now, Googlebot crawls CSS and images, rendering pages like a modern web browser. This means that Google is looking to have the same experience for both humans and Googlebot (meaning, no more hiding elements with CSS or trying to game the system you black hat SEO's!)

What's nice about Webmaster Tools over the simplified Mobile-Friendly Test tool is that Webmaster Tools shows you the "Fetch" with is the HTTP response in HTML (as well as CSS and JS -- essentially the source of your page that's being fetched), as well as the "Rendering" in two versions. One for Googlebot and one in which Google perceives how visitors would see the page. In addition to these items, both sections offer valuable data around time it took to download the page for Googlebot, which [resources are blocked via robots.txt](/seo/2015/01/02/how-to-follow-googles-updated-webmaster-guidelines-with-your-cms/)

## Deliver the Best User Experience per Device

This almost goes without saying, but how Googlebot sees and renders your page or site simply gets you a seat at the table. Passing Google's mobile-friendly test is a start, but having a truly easy to navigate site with a slick user experience, working seamlessly across all devices, should be the end goal.

A site that passes Google's simple test may very well not have a fully optimized user experience on mobile versus the desktop. When this happens, visitors are more inclined to click the back button. Clicking the back button results in a bounce. Doing this in a shorter period of time (between arriving on page and clicking the back button) is even worse. And as we know -- bounce rate is incorporated into Google's ranking algorithm. So, to be safe on this one, make sure you're thoroughly testing your overall layout and design across multiple devices, ensuring it's fully mobile-friendly.

## Signal Your Site's Configuration

You've tested your site, you've checked Googel Webmaster Tools and you've (hopefully) committed to creating sites that offer the best possible UX. Now you're wondering -- what's possibly next? Well, the next step is to ensure that you're sending the correct signal to Google about your mobile-friendly site. Mobile-friendly sites currently come in three flavors:

- Responsive
- Dynamic
- Separate URLs

### Responsive

Responsive sites tend to offer the best experience all around for users, webmasters, and search engine bots. The reason is, it's the same site that uses different styling to offer the best user experience on any device. There's no canonical tags, redirects, duplicate versions of the same site out there in the wild, and generally speaking, it requires less development time. When thinking responsive, the [easy to use Bootstrap framework](/development/2015/03/16/how-to-use-bootstrap-grid-system/) instantly comes to mind.

If your site is built upon a responsive framework, ensure that the correct viewport meta tag is added to the `<head>` of your site:

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1.0">
{% endhighlight %}

With that added (and of course the site itself actually being 100% responsive) you're all set!

### Dynamic

Sites that rely on a dynamic setup serve different content to different devices, depending upon the user agent requesting the page. This means, if a desktop browser is requesting **www.example.com**, the desktop version is served. However, if the server detects that a mobile browser is making a request, then the mobile version is server.

To ensure that the right content is served the the correct user agent, make sure you take advantage of the Vary HTTP header. Below is an example:

{% highlight html %}
GET /page-1 HTTP/1.1
Host: www.example.com
(...rest of HTTP request headers...)

HTTP/1.1 200 OK
Content-Type: text/html
Vary: User-Agent
Content-Length: 5710
(... rest of HTTP response headers...)
{% endhighlight %}

At times, user agents can be mis-detected, resulting in the wrong version being served up. This is especially true for tablets where the smart phone version is served and isn't quite optimized for a near desktop-quality resolution that most modern tablets offer.

### Separate URLs

Separate URLs consist of serving up an entirely different version of the site depending upon the user agent. On a desktop, a user would be served **www.example.com** whereas on a mobile device, **m.example.com** would be served instead. From an SEO perspective, there is a ton of inherent risk with running two sites with the same content. In order to avoid a duplicate content issue, the "separate URL" setup relies exclusively on `rel="canonical` and `rel="alternative"` tags to send the correct message to search engines.

The separate URL setup works by having the desktop version specify the identical mobile version of the same content in a `rel="alternative"` tag. Then, that same mobile page specifies the desktop version as the `rel="canonical"` Other than this most critical canonical tag, which helps prevent any duplicate content issues, there are several methods where additional HTML annotation can assist in identifying mobile and desktop versions of the same site through listing out recommended screen size to adding annotations in sitemaps.

## Review Your Data!

Your usage data is an invaluable resource as it can tell countless stories about your success and shortcomings. Reviewing data in your analytics platform, such as Google Analytics, should be something done daily (sometimes multiple times a day).

With the mobile-friendly Google algorithm update just around the corner, it makes perfect sense to set a benchmark for existing or previous mobile traffic. This can apply to webmasters and SEO's in nearly any situation. Meaning, if you have a mobile-friendly site that already that passes Google's tests, you'll want to compare some before and after data to ensure you didn't take a hit during this update. This is where setting a benchmark comes in handy.

If you're an SEO or webmaster in a larger company that's slow to react to this type of change, and you need ammunition to build your business case on allocating resources to go mobile-friendly, then presenting the potential drop off in traffic to appropriate business units and executives may help. Again, setting a benchmark is critical.

## Final Thoughts

No matter how you look at it, mobile is here to stay. Every website worth visiting in 2015 should offer a passable mobile experience. If it doesn't, then it has no place at all ranking in the mobile SERPs. If you've followed the tips above and have gotten your site up to speed on mobile, then there is little to worry about from an SEO perspective. Hopefully your mobile-friendly choice is *Responsive*, as it seems to be the best.
