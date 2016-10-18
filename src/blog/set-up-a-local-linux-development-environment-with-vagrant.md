---
title: Set Up a Local Linux Environment with Vagrant
description: Learn how to leverage Vagrant for all of your VirtualBox local development and engineering needs
headline: Set Up a Local Linux Environment with Vagrant
#date: May 12, 2016
date: 5/12/16
collection: blog
layout: post.hbt
---

As developers and engineers, we often aim for minimalism and modularity. This holds true with the very code that we write and utilize to create our work. However, minimalism and modularity can often times be overlooked when it comes to our local development machines. Over time, all of the different programs, dependencies and tools needed to complete our job can quickly grow in size and spiral into disrepair; conflicting versions of the same tools or programs and never-ending OS updates can become real chores to circumvent when it comes time for simply completing our work -- going against the very two principles we ought to strive for at all times.

In this post, I offer a top to bottom introduction into the world of virtual machines and how they can vastly improve your development workflow while alleviating most of the concerns listed above. Through the use of virtual machines, you'll open up avenues for exploring new technologies and techniques with little-to-no risk to your development machine -- all while adhering to a minimalist and modular school of thought.

## Why Use Virtual Machines?

This is a question that I've grappled with for several months now. And it's a wonderful question, indeed. To begin formulating an answer, I decided I ought to take an inventory of everything installed on my Mac:

- Xcode (weighing in at roughly 10 GB once installed)
- Xcode command line tools
- Git (OS X version; usually behind and outdated)
- Ruby (OS X version; usually behind and outdated)
- Several Ruby Gems
- Apache (OS X version; behind, outdated, and configured differently)
- PHP (OS X version; usually behind and outdated)
- Node.js
- NPM and Several Globally Installed Modules
- Heroku Toolbelt
- Redis and possibly any other database I may need

At quick glance, you can see how unmanageable the above can grow over time, especially with Apple's annual OS X release cadence. Let's also not forget that OS X in of itself is an [interesting distribution of Unix](https://en.wikipedia.org/wiki/OS_X#History) and things are not always as they seem while digging in under the hood. Programs, languages and tools behave slightly different here than compared to their traditional Linux counterparts, which runs you the risk of inadvertently wreaking havoc across your entire system.

Surely there has got to be a better solution to make all of this much more manageable, modular, and safer.

## Homebrew... maybe?

But Homebrew can help with the above dilemma — you may say. However, I’ve toyed with Homebrew in the past, and frankly it leaves a lot to be desired (although I do admit I’m a sucker for the beer theme -- with kegs and casks, and also the beer mug emojis -- they're all a nice touch).

Emojis aside, this native OS X package manager attempt is still going to become a real hassle when it comes time for OS X 10.12, as this generally means either reinstalling everything managed by Homebrew due to a wipe and fresh install of the OS or spending time tracking down why things broke due to an OS upgrade, *and then* reinstalling everything. Sounds like Homebrew is out.


Once I had realized Homebrew wouldn't mesh well with my overall quest for minimalism and modularity, and after several days of additional research, I decided that I need to just take the plunge and test out a "virtual-machine-development-workflow" for myself. With that notion, my outlook shifted from simply using the bundled OS X programs, languages, tools, and utilities, to entertaining the idea of Homebrew, to eschewing *both* in favor of a proper Linux environment.

## Getting Started with VirtualBox

I begin my journey with VirtualBox, working my way through a rather manual process that involves downloading the Ubuntu Server 14.04 LTS disc image and navigating through cryptic Ubuntu installation prompts.

After about 10 minutes-worth of downloads and installation prompts, I'm up and running with a copy of Ubuntu Linux on my Mac. Now if I want to create another VM, all I will need to do is repeat this process. Every. Single. Time.

### Wait, this Process *Totally Sucks*!

Wait a second, time out. This process really sucks! Sure, it's sort of modular. Kind of minimalistic. But if I want to create another virtual machine, I will just have to sit through this entire process again. And again. *And again*. 😱

I have two gripes with the above. First, it's not very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). And second, in this current day and age of instant gratification, who in the world wants to sit through a cryptic Linux installation screen, over a virtual machine, *every* time we want to create a new Linux environment? Where is my auto-magic solution that just sets up as many Linux virtual machines for me as I want?

Well, just like a drifting vagabond, that’s where [Vagrant](https://www.vagrantup.com) comes shambling in.

## Enter Vagrant

>Vagrant is a tool for building complete development environments. With an easy-to-use workflow and focus on automation, Vagrant lowers development environment setup time, increases development/production parity, and makes the "works on my machine" excuse a relic of the past.

The basic idea around Vagrant is to create a directory on your local machine that serves as a "home" for a special `Vagrantfile` (this particular file has no extension). The `Vagrantfile` is all Ruby and accepts a number of parameters to help configure and provision your Vagrantbox for some fast, on-the-fly, instant gratification we're all accustomed to here in the 21st century.

It's worth noting that Vagrant deals directly with VirtualBox but works with other VMs. However, I'll more than likely stick with VirtualBox as it's free. And free is generally good in my book.

## Starting Over with VirtualBox and Vagrant

After realizing exactly how manual, tedious, and just plain time-consuming the VirtualBox only approach can become, I set out to spend some time learning the details of Vagrant and how it can greatly assist in the overall virtual machine creation, provisioning, and managing process.

I decided that my first stab at creating a Vagrant managed virtual machine would be to create one that mirrors my current production environment for this very website.

Below is the general process that I've adopted after learning the ropes and working through some trial and error. Follow these steps, editing any necessary information specific to your individual needs, and you'll be up and running with Vagrant in about 10 minutes or less!

1. Install VirtualBox
2. Install Vagrant
3. Create a local directory for Vagrant
4. Create a `Vagrantfile` in your newly created directory
5. `vagrant up` and provisioning your virtual machine

**Note: the steps below are outlined as if the sample `Vagrantfile` included in this post is used in its entirety -- meaning all file paths and constants referenced in that file will also be referenced throughout the instructions. Please substitute as needed.**

### 1. Install VirtualBox

To grab the latest version of VirtualBox, head on over to the [download page](https://www.virtualbox.org/wiki/Downloads) and select the version appropriate for your operating system. Download and install, following the prompts as you would any other program. And while my article focuses mainly on my experiences with this workflow on OS X, the same principles and concepts should apply to Windows. Once installed, let's move our attention to Vagrant.

**Note: as of writing, VirtualBox 5.0.20 was installed.**

### 2. Install Vagrant

Now that VirtualBox is installed, let's focus on getting Vagrant installed to your machine. Head over to the [download page](https://www.vagrantup.com/downloads.html) and grab the version appropriate for your operating system. Much like above, download and install, following the prompts as you would any other program.

**Note: as of writing, Vagrant 1.8.1 was installed.**

### 3. Create a Local Directory for Vagrant

This step comes down to personal preference as to where you want to keep and manage your `Vagrantfile`, as well as offering you some creative options around how and where you want to sync files and folders between your host and guest machines.

Personally, I find that keeping directories for each Vagrant instance within my local Home directory is an easy to remember and easy to manage experience.

For example, I've created a directory with the same name used in the `VM_NAME` constant found in the sample `Vagrantfile` titled "digitalshore-vm" within my Home directory (more on this in step 4). I then added the `Vagrantfile` specific to this VM within that directory for provisioning.

Basically, I executed the following commands in Terminal:

{% highlight shell %}
cd ~/ && mkdir digitalshore-vm
cd digitalshore-vm && touch Vagrantfile
{% endhighlight %}

The first command changes to my Home directory and then creates the "digitalshore-vm" directory within Home. The second command changes to the newly created directory and then creates the `Vagrantfile` within that new directory.

### 4. Create a `Vagrantfile` in Your Newly Created Directory

By following along with the instructions from step 3, you should now have a unique directory and `Vagrantfile` for your virtual machine within your Home directory on your Mac. For example, I now have `~/digitalshore-vm` and `~/digitalshore-vm/Vagrantfile`.

Now it's time to review my sample `Vagrantfile` and make appropriate edits.

#### Sample Vagrantfile

The next step is to add some instructions within your `Vagrantfile` for Vagrant to execute during the virtual machine provisioning process. To help expedite this process, and set a handful of the typical default items, below is a sample `Vagrantfile` that will get you set up with an environment that practically mirrors that of my production server for this Jekyll blog.

This `Vagrantfile` will handle the following items for you:

1. Setting several constants around Linux OS, directories, users, and networking between host/guest machines

2. Provisioning a virtual machine through VirtualBox, with 1 CPU, 512MB of memory, and 40GB of storage space

3. Installing Apache2, Git, Ruby2.3 and Ruby2.3 dev package (both via Brightbox), Jekyll and Jekyll Paginate as root.

**Sample:**

{% highlight ruby %}
# encoding: utf-8
# -*- mode: ruby -*-
# vi: set ft=ruby :

# Box / OS
VAGRANT_BOX = 'ubuntu/trusty64'

# Memorable name for your VM
VM_NAME     = 'digitalshore-vm'

# VM User - 'vagrant' by default
VM_USER     = 'vagrant'

# Username on your Mac
MAC_USER    = 'John'

# Host folder to sync
HOST_PATH   = '/Users/' + MAC_USER + '/' + VM_NAME

# Where to sync to on Guest - 'vagrant' is the default user name
GUEST_PATH  = '/home/' + VM_USER + '/' + VM_NAME

# # VM Port - uncomment this to use NAT instead of DHCP
# VM_PORT   = 8080


Vagrant.configure(2) do |config|

  # Vagrant box from Hashicorp
  config.vm.box = VAGRANT_BOX

  # Actual machine name
  config.vm.hostname = VM_NAME

  # Set VM name in Virtualbox
  config.vm.provider "virtualbox" do |v|
    v.name = VM_NAME
    v.memory = 512
  end

  #DHCP -- comment this out if planning on using NAT instead
  config.vm.network "private_network", type: "dhcp"

  # # Port forwarding -- uncomment this to use NAT instead of DHCP
  # config.vm.network "forwarded_port", guest: 80, host: VM_PORT

  # Sync folder
  config.vm.synced_folder HOST_PATH, GUEST_PATH

  # Disable default Vagrant folder, we'll use a unique path per project
  config.vm.synced_folder '.', '/home/' + VM_USER + '', disabled: true

  # Install Apache, Git, Ruby 2.3.x, and Jekyll Gems
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y apache2
    apt-get install -y git
    apt-add-repository ppa:brightbox/ruby-ng
    apt-get update
    apt-get install -y ruby2.3
    apt-get install -y ruby2.3-dev
    gem install jekyll
    gem install jekyll-paginate
  SHELL

end
{% endhighlight %}

Now that you have reviewed this sample `Vagrantfile`, there are two paths you can choose to continue:

#### A. Fine Tune The Above Sample for Your Needs

Make any appropriate edits that you may need (such as editing file paths, user name, VM name, etc.) and paste the contents into your local `Vagrantfile`. Once you're done, continue to step 5.

#### B. Use a Default `Vagrantfile` Instead

If you dislike the above sample and want to opt for the default `Vagrantfile` provided by Vagrant, you can simply remove the file we had created in step 3 and create a new file that contains the bare minimum to provision a virtual machine with Vagrant:

{% highlight shell %}
cd ~/digitalshore-vm
rm -r Vagrantfile
vagrant init
{% endhighlight %}

### 5. `vagrant up` and Provisioning your Virtual Machine

With your `Vagrantfile` in place, it's time to provision your virtual machine!

Open Terminal and enter the following commands:

{% highlight shell %}
cd ~/digitalshore-vm
vagrant up
{% endhighlight %}

During this process Vagrant will download `ubuntu/trusty64` directly from [Hashicorp's Atlas](https://atlas.hashicorp.com/hashicorp/boxes/precise64) and then provision the virtual machine as specified in your `Vagrantfile`. Depending upon your Internet connection and computer speed, the entire process should take around 3 to 5 minutes to complete. Once the virtual machine is provisioned, you can log into your virtual machine with the following command:

{% highlight shell %}
vagrant ssh
{% endhighlight %}

This command will take care of connecting you directly to your VM via SSH. It handles the username and password -- which, by default, are both vagrant/vagrant.

**This command becomes the basic/de facto means for accessing your VM!**

### Turning Your Virtual Machine On and Off

Sometimes we need to turn on, turn off, pause, or destroy our Vagrant managed virtual machines, especially after rebooting or testing out new features, etc.

**To turn your VM on, navigate to the directory with your `Vagrantfile`:**
{% highlight shell %}
vagrant up
{% endhighlight %}

**To pause your VM, navigate to the directory with your `Vagrantfile`:**
{% highlight shell %}
vagrant suspend
{% endhighlight %}

**To turn your VM off, navigate to the directory with your `Vagrantfile`:**
{% highlight shell %}
vagrant halt
{% endhighlight %}

**To destroy your VM, navigate to the directory with your `Vagrantfile`:**
{% highlight shell %}
vagrant destroy
{% endhighlight %}

These are just a few of the immediate basic commands you'll want to learn while using Vagrant. For a much more in-depth manual, check out the [docs from Vagrant](https://www.vagrantup.com/docs/cli/).

## Next Steps

You've done it! Now that you’re able to effortlessly create VMs using Vagrant and you can easily SSH right into your very own virtual machine running Ubuntu 14.04, the sky is the limit! Go ahead and use this VM just as you would any other Linux virtual machine through a provider such as [Digital Ocean](https://m.do.co/c/45842cbd061c) or others that offer VPS services.

Best of all, you’re now able to create as many VM's as your system is capable of running -— opening the flood gates for growth and exploration with your newly adopted modular and minimal approach!

*Keep coding!* 😎🍺
