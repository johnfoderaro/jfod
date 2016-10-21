---
title: GitHub Collaborative Process Overview
description: Everyone is new to Git and GitHub and has to learn somewhere. Check out this guide on GitHub collaboration. Fork it!
headline: GitHub Collaborative Process Overview
date: 2015/11/01
collection: blog
layout: post.hbt
---

After using Git for several months to manage this site's version control and deployment (via a Git hook), I realized I was probably taking advantage of about a fraction of what Git offers. Additionally, I always sort of brushed aside the idea of using GitHub as a home for the Digital Shore repository.

In fact, my time with GitHub has been rather limited to only my time at NBC Universal where I entered issues for NBC News while working as an SEO Specialist. Not until this past month have I really begun to wrap my head around Git, GitHub, and the overall collaborative process. I documented my steps and created a 10 step workflow. And of course, it's a GitHub repository!


**[johnfoderaro/gitflow](https://github.com/johnfoderaro/gitflow){: target="_blank"}**

----

## GitFlow

GitFlow is a general overview consisting of a 10 step approach to collaborating on projects with Git and GitHub on Mac OS X via SSH with the Terminal. This approach is not the end all be all, but is one that I have found to be useful and easy to understand for the very small amount of projects I have worked on (thus far) within GitHub.

## 1. Follow the Organization or Person

- Star and Watch the repository
- Become a member of the organization (when applicable)
- Follow other GitHub users related to the project

Starring and watching an organization or following a person will help make it easier to stay up to date on what's going on with repositories belonging to that organization or person. It is especially important to receive notification to learn about merges from pull requests, as these merges and pull requests may or may not impact your own work and contributions to that person or organization's repository.

To watch and star a repository, click these respective icons on the top right of that particular repository when viewing it on GitHub.

#### Official Documentation
- [GitHub: Watching Repositories](https://help.github.com/articles/watching-repositories/)
- [GitHub: About Notifications](https://help.github.com/articles/about-notifications/)
- [GitHub: Managing Notifications](https://help.github.com/articles/managing-notifications/)

## 2. Fork the Repository

- Forking a repository copies it to your GitHub account
- This allows you to contribute to it without impacting the original source

To fork a repository, click the fork icon on the top right of the source repository. Once the repository is forked, it is now copied to your account where you can work on it independent of the original source repository, or upstream repository. This is a useful practice as it keeps the original upstream repository clean, ready for deployment/production.

#### Official Documentation
- [GitHub: Working with Forks](https://help.github.com/articles/working-with-forks/)    
- [GitHub: About Forks](https://help.github.com/articles/about-forks/)

## 3. Clone the Repository

- Cloning a repository brings it down to your local machine
- Cloning a repository is done via the Command Line or the GitHub App

Repositories on GitHub exist as *remote* repositories. To begin contributing to a repository, whether it's been forked or not, it should first become a *local* repository. Cloning a repository is done via the `git clone` command using Terminal.

Once you have a repository that you want to clone to your local machine, you'll need to use either the HTTPS or SSH URL to get started. This URL can be found on the right side of the forked repository on GitHub. For example, the SSH URL to clone this very repository is: **git@github.com:johnfoderaro/gitflow.git**

For the sake of an example, let's say you forked this repository to your own GitHub account. To clone this newly forked repository to your machine, open Terminal, navigate to your desired directory, and enter the following command:

`git clone git@github.com:johnfoderaro/gitflow.git`

Once completed, the repository is now available on your machine.

#### Official Documentation  
- [GitHub: Cloning a Repository](https://help.github.com/articles/cloning-a-repository/)

## 4. Add an 'Upstream' Remote

- Adding an Upstream Remote keeps forked repositories synced
- This lets you stay synced with the original source, or "upstream repository"
- The Origin Remote is added by default when a repository is cloned from GitHub

After cloning a repository, particularly a forked repository, it's important to add an additional `git remote` to stay synced with the original source, or **upstream repository**.

To add the upstream remote that essentially points to the upstream repository, open Terminal, navigate to your cloned directory from step 3, and enter the following command along with the upstream repository's URL (either HTTPS or SSH, found on GitHub):

`git remote add upstream git@github.com:<name>/<repo>.git`

To check which remotes exist within your repository, enter the following command:

`git remote`

To learn more about individual remotes, enter the following command (replacing `<remote-name>` with the name of the remote in question):

`git remote show <remote-name>`

#### Official Documentation
- [GitHub: Configuring a Remote for a Fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

## 5. Create a Branch

- Branches exist in parallel to the main development line
- Branches are useful for development, new features, and experimenting

It's considered a best practice to keep the master branch clean and ready for deployment/production. Even the forked repository's master branch should still mirror the upstream repositories master branch. Therefore, whenever contributing to a repository, it's recommended to create a branch. Branches can correspond to issues or specific areas of development, or anything really. It's also considered a best practice to keep branches relatively small for the sake of code review and collaboration during pull requests and merging.

A branch can be created directly in GitHub (the remote repository) prior to cloning the repository or locally on your machine (the local repository).

### Option A: Create a Branch on GitHub

- Select the "Branch" dropdown menu on the top left
- Enter the name of your new branch
- Press enter to create that branch

Once the branch is created, cloning the repository to begin work is most likely the next course of action. To switch to this branch from the master, once the repository is cloned, enter the following command in Terminal once the repository is cloned locally -- replacing "branch-name" with the actual branch name:

`git checkout -b <branch-name>`

You will now be working within that branch.

### Option B: Create a Branch Locally

- Open Terminal and navigate to the local repository
- Enter the following command: `git checkout -b <branch-name>`
- `<branch-name>` represents the name of your new branch

Once the branch is checked out, you'll be working within this branch.

#### Official Documentation
- [GitHub: About Branches](https://help.github.com/articles/about-branches/)

## 6. Add and Commit Changes

- Adding changes "stages" whatever you were working on
- Committing the changes adds them to HEAD of the local repository

Once it's time to add your changes that you have been working on within your branch to a repository, whether or not it's a forked repository, the changes within your branch will need to be added and committed to the local repository HEAD. The HEAD file is a symbolic reference to the branch you’re currently on. This is generally completed with two steps, **adding** and **committing**.

To add and commit your work, open Terminal and ensure your current directory is the repository you're working on.

### A. Git Add
There are several methods to `git add` and each have their own unique purpose. For a full list, check out the Git documentation link below. Otherwise, the most common commands are listed below:

- `git add <pathspec>`
  - Stages just a specific path of new/modified file(s)
- `git add .`
  - Stages all new/modified files, without deleted files
- `git add -u`
  - Stages all modified/deleted files, without new files
- `git add -A`
  - Stages **everything**

Once files have been added or staged, the next step is to commit.

### B. Git Commit
Much like `git add`, `git commit` has a few unique commands with their own purposes. For a full list, check out the Git documentation link below. Otherwise, the most common method is to include a message with your commit:

- `git commit -m "<commit message>"`
  - Allows you to add a message to your commit
  - Add your unique message within the quotation marks

### C. Adding and Committing in One Command
Want to cut out a step? There's a way to add and commit in one single command. Below are some of the more command methods of combining your add and commit into one command:

- `git commit -a`
  - Commits while also adding files that have been modified/deleted
- `git commit -am "<commit message>"`
  - Same as above, but with a commit message

### Closing GitHub Issues with Commit Messages

Issues can also be closed out via a `git commit` by using specific keywords within the commit message, such as "resolved" or "fixed".

#### Official Documentation
- [Git: The HEAD](https://git-scm.com/book/tr/v2/Git-Internals-Git-References#The-HEAD)
- [Git: Git Add](https://git-scm.com/docs/git-add)
- [Git: Git Commit](https://git-scm.com/docs/git-commit)
- [GitHub: Closing Issues via Commit Messages](https://help.github.com/articles/closing-issues-via-commit-messages/)


## 7. Push to the Remote Repository
- Pushing a commit begins the process of adding your changes to the remote repository
- When collaborating, you'll be generally pushing to your forked repository
- Be sure to keep master clean, work in and then push to a branch that isn't master

Once changes have been added and committed, it's time to **push** those changes to the remote repository. The `git push` command takes two arguments, the remote name and the branch name you're pushing. Remember, remotes are tied to a remote repository location.

Assuming you're pushing commits from a branch that you have been working on, within a forked repository, and you're actively within that branch and not master (check with the command `git status`), enter the following command in Terminal:

`git push origin <branch-name>`

Replace `<branch name>` with the name of your active branch.

Once the push to your forked repository on a branch that is not master is completed, a **pull request** will occur on GitHub. This is where the collaboration begins!

#### Official Documentation
- [Git: Git Push](https://git-scm.com/docs/git-push)
- [GitHub: Pushing to a Remote](https://help.github.com/articles/pushing-to-a-remote/)

## 8. Pull Requests and Merges
- Pull requests need to be initiated
- Pull requests can occur once you push your new branch
- Pull requests begin the collaborative process of changes/additions to a repository

Once your branch changes have been added, committed, and then pushed to the remote repository, the pull request process begins. The idea behind a pull request is to alert others about the changes that have been pushed to the remote repository on GitHub. The end goal is to discuss these changes, collaborate, and ultimately decide if this branch should then be merged into the master branch of the source repository. Remember, a key component to all of this is keeping the master branch clean and ready for production/deployment.

For example, if you pushed your branch from step 7, and then log in to GitHub, you'll notice in your fork that there is now a big green button to "compare & pull request". Click that button to then begin the collaboration process.

When opening a pull request, you'll have the option to include a title to the request along with a comment. Once you enter a title and an optional comment, select **create pull request**.

From here, the discussion is open and the person or organization managing the repository can either close your pull request or ultimately merge the pull request with the master branch.

#### Official Documentation
- [GitHub: Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/)
- [GitHub: Syncing a Fork](https://help.github.com/articles/using-pull-requests/)

## 9. Keeping a Forked Repository Synced
- Keeping forked repository synced is important
- Working from an out of sync forked repository can result in issues

Once a pull request is merged with the master branch, you'll want to update the forked version of the repository so that it stays in sync with the upstream repository. If you're out of sync with the upstream repository, GitHub will tell you on your forked repository, right near the top where a Pull Request can be initiated.

Also, I've been finding it good practice to keep the forked remote repository up to date with any other branches or items that I have been working on locally (stuff that wasn't necessarily merged with upstream master) as I often times find myself working from two different machines.

To stay synced with the upstream repository and to make it easier to move between machines, you'll want to switch back to Terminal and then use the following commands:

1. `git checkout master`
  - Switches over to the master branch
2. `git fetch upstream`
  - Fetches changes to the upstream repository
3. `git merge upstream/master`
  - Merges the upstream master with the forked master
4. `git add .`
  - Adds the upstream master branch that was fetched
5. `git commit -m "<message>"`
  - Commit the additions
6. `git push origin master`
  - Push the newly synced master branch to your remote forked repository

Your remote forked repository should now be 100% synced **1)** the upstream master branch and **2)** with whatever you've been doing on the local repository.

#### Official Documentation
- [GitHub: Syncing a Fork](https://help.github.com/articles/syncing-a-fork/)

## 10. Rinse and Repeat

At this point, you should now have a basic understand of a general workflow with Git and GitHub -- focusing on how to fork, clone, push and pull repositories. This general process will soon become second nature and you may even find ways to enhance it or simplify it further, depending upon your individual needs. If so, feel free to fork this repository, and create a pull request!

The next step is to layer in additional features that GitHub offers for collaboration, such as Issues, Milestones, and a Wiki, all of which assist in creating a social, open source development environment.

Keep coding, my friends!
