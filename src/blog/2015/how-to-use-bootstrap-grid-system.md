---
title: How to Use the Bootstrap Grid System Like a Boss
description: Learn how to use the Bootstrap grid system. Create beautiful mobile-frist designs using these easy simple examples.
headline: How to Use the Bootstrap Grid System Like a Boss
date: 2015/03/15
collection: blog
layout: post.hbt
---

Bootstrap 3.3.4, the most current version as of writing this post, is built upon the infamous "grid system" that you may have heard of during your travels on the Internet. This responsive, fluid grid system is what makes Bootstrap so powerful. It's an awesome tool for building beautiful, mobile-first websites.

To create some really amazing designs across all devices, you'll need to learn how to use the Bootstrap grid system like a boss. But first, let's check out why Bootstrap is so special in the first place.

## A Brief Overview of the Bootstrap Grid System

I first want to begin with a quick recap of the grid system, trying my best to not just regurgitate the [Bootstrap grid system documentation](http://getbootstrap.com/css/#grid){:target="_blank"} word for word. In short, the grid system is fully responsive depending upon the viewport. Predefined media queries that create appropriate breakpoints and column classes allow for a genuine mobile-first grid system, requiring little-to-no reconfiguration out of the box. What's more interesting is that there is the ability to control both the column width itself and the column behavior depending upon the device, thanks to these four class prefixes:

`.col-xs-*` **Mobile**  
`.col-sm-*` **Tablet**  
`.col-md-*` **Desktop**  
`.col-lg-*` **Desktop**  

For extra small devices use `.col-xs-*`. This is the default column class for Bootstrap and is intended for phones and a viewport width of less than 768px.

For small devices use `.col-sm-*`.This is the class for small devices, such as a tablet, with a viewport width of 768px or greater.

For medium devices use `.col-md-*`. This class is for medium devices, such as a desktop, with a viewport width of 992px or greater.

For large devices use `.col-lg-*`. This class is for large devices, such as a desktop, with a viewport width of 1200px or greater.

The gird system works by having `.rows` of columns placed within a `.container` or `.container-fluid`. Content lives within columns, with columns being the only immediate children of rows. The grid scales up to 12 columns wide, so creating four equal columns in one row would result in using the following code:

{% highlight html %}
<div class="row">
   <div class="col-md-3">
      <p>Content Here</p>
   </div>
   <div class="col-md-3">
      <p>Content Here</p>
   </div>
   <div class="col-md-3">
      <p>Content Here</p>
   </div>
   <div class="col-md-3">
      <p>Content Here</p>
   </div>
</div>
{% endhighlight %}

**Code in Action:**

<div class="row text-center">
   <div class="col-md-3">
      <p class="thumbnail">Content Here</p>
   </div>
   <div class="col-md-3">
      <p class="thumbnail">Content Here</p>
   </div>
   <div class="col-md-3">
      <p class="thumbnail">Content Here</p>
   </div>
   <div class="col-md-3">
      <p class="thumbnail">Content Here</p>
   </div>
</div>

The above example is the general principle behind the Bootstrap grid system and is also what [makes Bootstrap very popular](/development/2015/01/31/bootstrap-pros-cons/). There are no limitations on how you can arrange your grid. Feel free to have 12 columns all equal width or offset your columns accordingly to accommodate body copy and a right rail for menus and other calls to action.

Now that we've recapped the general idea behind the Bootstrap grid system, let's take a deeper dive into some more advanced examples.

Time to leverage the Bootstrap grid system like a boss!

## Some Examples (Remember: Mobile First!)

This should go without saying, but you'll want to design your website in a way that offers the best user experience regardless of the device it's viewed on. To make that possible  you'll need to incorporate more than one column class when developing most Bootstrap grids. In particular, you'll find that there will nearly always be a need to use some combination of `.col-xs-*`, `.col-sm-*`, `.col-md-*`, and `.col-lg-*` for the elements that exist within a column. Using a combination of these classes gives you more control over how things render on, say, an iPhone vs a 27" iMac -- devices that offer two radically different user experiences.

To use the Bootstrap grid system like a boss, and create truly responsive user experiences, you'll be required to think mobile-first. Below are some simple code examples along with examples that can be tested by resizing this browser window if you're on a desktop.

The first example keeps things pretty standard as far as layout is considered. Whereas the second example uses the mobile-frst approach and gives us a new and exciting layout depending upon device type. The third example takes things even further using a combination of different device type sizes and even incorporates `col-*-offset-*` -- a related class that helps offset columns from left to right.

### Example 1: A One Size Fits all Approach

To keep your website boring and simple you can just stick to using `.col-md-*` for everything and when it gets down to **small** and **extra small**, items simply stack upon one another:

{% highlight html %}
<div class="row">
   <div class="col-md-3">
      <p>Item 1</p>
   </div>
   <div class="col-md-3">
      <p>Item 2</p>
   </div>
   <div class="col-md-3">
      <p>Item 3</p>
   </div>
   <div class="col-md-3">
      <p>Item 4</p>
   </div>
</div>
{% endhighlight %}

**Code in Action:**

<div class="row text-center">
   <div class="col-md-3">
      <p class="thumbnail">Item 1</p>
   </div>
   <div class="col-md-3">
      <p class="thumbnail">Item 2</p>
   </div>
   <div class="col-md-3">
      <p class="thumbnail">Item 3</p>
   </div>
   <div class="col-md-3">
      <p class="thumbnail">Item 4</p>
   </div>
</div>

Resize your browser window width to see the above example in action. Take note that once your window width (or viewport) is narrow enough, Items 1 through 4 all stack upon one another. What if you didn't want this type of behavior where everything just stacks on smaller screen sizes (991px or less)?

### Example 2: Break Free and Get Creative!

Take note of the code below and how there is both `.col-xs-*` and `.col-md-*` in the same `<div>`. This means we are declaring a certain column usage depending upon the device. Items 1 through 4 will appear in a row on a device **medium** and above (each item has a 3 column space it uses for **medium**), but items 1 through 4 will appear in two rows by two columns on **extra small** devices (each item has a column space of 6 that it uses for **extra small**):

{% highlight html %}
<div class="row">
   <div class="col-xs-6 col-md-3">
      <p>Item 1</p>
   </div>
   <div class="col-xs-6 col-md-3">
      <p>Item 2</p>
   </div>
   <div class="col-xs-6 col-md-3">
      <p>Item 3</p>
   </div>
   <div class="col-xs-6 col-md-3">
      <p>Item 4</p>
   </div>
</div>
{% endhighlight %}

**Code in Action:**

<div class="row text-center">
   <div class="col-xs-6 col-md-3">
      <p class="thumbnail">Item 1</p>
   </div>
   <div class="col-xs-6 col-md-3">
      <p class="thumbnail">Item 2</p>
   </div>
   <div class="col-xs-6 col-md-3">
      <p class="thumbnail">Item 3</p>
   </div>
   <div class="col-xs-6 col-md-3">
      <p class="thumbnail">Item 4</p>
   </div>
</div>

For this to work best and as expected, you must work and implement code with a mobile-first perspective! Note how **extra small** comes before **medium**. If you're viewing this example on an **extra small** device, you should see a 2x2 grid of Item's 1 through 4. If you're on a desktop, you should see a row of Items 1 through 4. Resizing your browser window to a smaller width will show the responsive design in action -- displaying what the **extra small** layout looks like.

### Example 3: Behold the Fluidity of The Grid System

What if you have some content placed in columns that require a very specific layout for user experience purposes? That’s where using a combination of different column classes, column offsets, and additional rows comes into play!

{% highlight html %}
<div class="row">
   <div class="col-xs-12 col-sm-6 col-lg-8">
      <p>Title</p>
   </div>
   <div class="col-xs-6 col-xs-offset-3 col-sm-offset-0 col-lg-4">
      <p>Call to Action</p>
   </div>
</div>
<div class="row">
   <div class="col-xs-12 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
      <p>Body</p>
   </div>
</div>
<div class="row">
   <div class="col-xs-6 col-sm-offset-3 col-lg-8 col-lg-offset-2">
      <p>Item 2</p>
   </div>
   <div class="col-xs-6 col-sm-12">
      <p>Item 3</p>
   </div>
</div>
{% endhighlight %}

**Code in Action:**

<div class="row text-center">
   <div class="col-xs-12 col-sm-6 col-lg-8">
      <p class="thumbnail">Title</p>
   </div>
   <div class="col-xs-6 col-xs-offset-3 col-sm-offset-0 col-lg-4">
      <p class="thumbnail">Call to Action</p>
   </div>
</div>
<div class="row text-center">
   <div class="col-xs-12 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
      <p class="thumbnail">Body</p>
   </div>
</div>
<div class="row text-center">
   <div class="col-xs-6 col-sm-offset-3 col-lg-8 col-lg-offset-2">
      <p class="thumbnail">Item 2</p>
   </div>
   <div class="col-xs-6 col-sm-12">
      <p class="thumbnail">Item 3</p>
   </div>
</div>

Resize the browser window if you’re on a desktop to see the responsive design in action. Take note on how the layout changes as the width narrows.

The example above offers a unique view for most device types. Note how the same principle of **mobile-frist** still applies here. Remember, we must work our way from smallest to largest when declaring styles at all times with the Bootstrap grid system.

Also introduced in this example is the column offset class: `col-*-offset-*`. This class helps offset columns when they do not span an entire width of 12 -- very useful for re-aligning content.

Use this example as a building block for experimenting with and creating more fluid grid layouts with your website.

## Now You're the Boss

Hopefully these tips and examples have inspired you to take charge of your website's implementation of the Bootstrap grid system. There is little reason for a site to compromise the user experience due to the use of just one column class.

**Always Check Your Work**

Now that you're the boss you'll have to be in charge of checking your own work, too! Aside from regularly consulting the official [Bootstrap documentation](http://getbootstrap.com/css/#grid){:target="_blank"}, there is also the HTML linter tool -- [Bootlint](http://blog.getbootstrap.com/2014/09/23/bootlint/){:target="_blank"}. Read, read and re-read all the documentation and don't be shy of poking under the hood of other sites that make use of the Bootstrap framework to see how they're implementing the Bootstrap grid system.
