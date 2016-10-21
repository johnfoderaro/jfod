---
title: The New Digital Shore
description: Ending the year with a bang! Check out the new layout and what's in store for the tail end of 2015 and into early 2016.
headline: The New Digital Shore
date: 2015/11/30
collection: blog
layout: post.hbt
---

Wow, after nearly two months of not writing any posts, I managed to get *two* out along with a site overhaul! I guess this means a long holiday weekend is all I need to get work done.

## Many Changes

For a few months now I've been toying around with the idea of adopting the Bootstrap 4 Alpha (crazy, I know) and SASS for Digital Shore. After messing around with both on and off over the summer, I came to the conclusion that I need to drop Bootstrap completely for this site. It's just way too much for a site like this. I also came to that conclusion right around the time Jekyll 3 came out. So I decided, why not just rebuild the entire thing from the ground up?

### Jekyll 3

With [Jekyll 3.0](https://jekyllrb.com/news/2015/10/26/jekyll-3-0-released/), a handful of welcomed and much needed changes and updates were ushered in. It turns out that the one I am most enamored with currently -- native SASS support -- had already existed since Jekyll 2.0!

Once I updated my dev machine to the latest version of Jekyll, I discovered a few quirks, so I realized that the complete rebuild I was thinking of was 100% in order. I began piggybacking off of the Jekyll boiler-plate setup and reading through documentation to get things up to speed... when I stumbled upon the best thing to happen to me yet in the world of Jekyll, Poole by [@MDO](https://twitter.com/mdo).

### Poole

Poole is Dr. Jekyll's butler in *The Strange Case of Dr. Jekyll and Mr. Hyde*, but outside of the novella, [Poole](https://github.com/poole/poole) is an amazing framework/foundation for Jekyll sites. It provides a very clear framework to build upon and takes care of the mundane items like the general layout and responsive design.

Digital Shore now uses a customized version of the Poole framework, which then borrowed a handful of elements from one of the official Poole themes, Lanyon.

### Lanyon

[Lanyon](https://github.com/poole/lanyon) is one of the two official themes for Poole. I borrowed a few elements from it such as the slide-out navigation, type face, and the general header concept. My one critique of the Lanyon theme isn't so much about the theme itself, but the source code. It only provides compiled CSS, not original SASS files, so that was a sort of turn off for me.

### Content

Another focus for Digital Shore throughout the tail end of 2015 and into 2016, is a renewed drive to build out quality content. I recall reading an insightful post from a blog in a similar niche as Digital Shore, and the author flat out stated that he had spent a ton of time tinkering with images, JavaScript effects, colors, layouts, type face... the list goes on. That author had eventually concluded that all of these items pale in comparison to offering quality content that offers visitors value. Without getting onto my SEO soap box, it is very true that content is king. This concept is the renewed theme for Digital Shore.

### GitHub

In addition to the changes above, the biggest change (for me at least), is that the entire repository for this site now lives at GitHub. Feel free to check the site out to get a feel for how Jekyll is used to produce Digital Shore:


## Upcoming Projects

Before the end of the year, I hope to have a public repository up and running for a **Jekyll Affiliate Marketing App Template**. Hopefully with a much more alluring title, too.

The idea is to continue working with Jekyll and Poole, but to then provide a method to layer in the [eBay partner network](https://www.ebaypartnernetwork.ebay.com/files/hub/en-US/index.html) API for affiliate marketing purposes. I'm not too certain if many affiliate marketers are ready to drop WordPress in favor of Jekyll, but I figured what the hell, I'll put this project out there. Maybe it'll help garner some WordPress dissenters in the process :)

With this project, the only item that sort of goes against the spirit of Jekyll is that eBay API portion is written in and handled by PHP, so some Jekyll-ers may frown at the fact that PHP files and code has to infest their clean and simple set up. However, all of the heavy lifting is complete at this point, so I hope to have something ready soon. More to come on that front.

Cheers!
