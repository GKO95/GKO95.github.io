---
layout: docs
category: 소프트웨어
title: Git
slug: ko.Git
order: null
---
# GIT: BASIC

Git is one of the version-control system (VCS) which is used for managing source code changes. There are various Git hosting service such as GitHub, GitLab and it has become very popular upon developer and programmer for managing a project. It is important to understand the concept behind the Git and know how to utilize it.

## Version Control

Version control system can vary by local or centralized VCS whether the version database is stored in local computer or network server. While Local VCS are subject to mismanagement of source code such as writing and copying the source code to and from wrong directory, Centralized VCS are more controllable with management by server administrator.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Git\vcs_local.png" width=50%><img src=".\.images\Git\vcs_centralized.png" width=50%></div>
<center style="font-weight:bold">Figure #. Local (left) and Centralized (right) VCS.</center>

However, both VCS are prone to the database itself; corrupted database or server shutdown could lead to loss of all the source code programmers have been working on.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Git\vcs_distributed.png" width=100%></div>
<center style="font-weight:bold">Figure #. Distributed VSC.</center>

To resolve this matter, Distributed Version-Control System is introduced. Not only does the server holds the database, but the source code is also distributed to the clients working on the project. Git is one of the example that implements this VCS, and its distribution of the source code is called "clone".

## Git

Git is one of the Distributed VCS but do have some difference with other version-control system:

* **Local Operation Available**

Once the Git repository is distributed on the client's computer, client do not need to access the network for more information; version history, changes, and more are already included in the local cloned Git, aka. local repository. Thus, programmer can commit changes locally and upload once the network connection is established.

* **Integrity**

Before storing the project on the network, the repository is checksummed to 40-character hexadecimal string based on the file contents and directory structure using SHA-1 hash. When uploaded and stored, the same checksum is referred to check for file validation (such as missing file and corruption check). Therefore, every change must be notified to Git or won't be able to store on the server-side. In database, Git stores everything not by its name but by hash value of its contents. 

* **Data Adds Only**

While other VCS can lose and mess up the changes by committing undoable and erasing the data in any way, Git can only add data (i.e., changes) in snapshot. This allows programmer to experiment the repository without severely screwing up the Git.

There are other properties the Git has and will be introduced on the following subsections:

### Snapshot

Git implements snapshot which is a state of the system at a particular point in time, coined as an analogy to that in photography. The act of storing the system is similar to system backup, but each has its own advantage and disadvantage.

Traditional backup has a drawback of taking long time to complete for a large data and may have data corruption due to data write from multi-tasking or multi-user system while on backup process. Restricting write access can avoid this encounter but is unsuitable for the system with high-availability as the system needs to be stopped (called downtime) for backup.

Snapshot does not need downtime to create backup: creating a read-only copy of the data at frozen point of time is not interfered by writing data from other applications. Additionally, if snapshot noticed unchanged data compared to its previous snapshot, that data is call by reference (yes, calling address of the data) from the previous copy instead. This can reduce the amount of time and space to create and store the snapshot. However, snapshot is dependency-sensitive and broken pointer reference can lead to failure of rollback.

Back to the topic, general VCS applies update on the files that has difference with previous version. This can save time and bandwidth significantly compare to storing the whole source code. The updated file is called delta file, while the symbol delta $\Delta$ denotes "change" in mathematic (thus, called delta-base version control).

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Git\whatisgit_VCS.png" width=100%></div>
<center style="font-weight:bold">Figure #. Delta-base version control.</center>

Git, on the other hand, uses a stream of snapshot: unchanged files are not stored again but is called by reference from the previous snapshot copy.  

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Git\whatisgit_Git.png" width=100%></div>
<center style="font-weight:bold">Figure #. Snapshot version control.</center>

This does not mean snapshot is far better than delta update and vice versa. Each has its own benefits and drawback, and Git just happens to choose the snapshot technique for version-control.

### Three States

As the most important underlying concept, Git processes file in three different states: modified, staged, and committed.

* **Modified**: file that *has* changed but not committed to the Git repository yet.
* **Staged**: modified file buffered just before committed to the next snapshot for management.
* **Committed**: file that managed to safely stored in the Git repository server database.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Git\git_areas.png" width=100%></div>
<center style="font-weight:bold">Figure #. Git file state process.</center>

This means Git project management can be divided into mainly three sections:

* **Working Directory**: local repository on client's computer distributed by the Git.
* **Staging Area**: (aka. index) a file where staged file is stored for next commitment for snapshot.
* **Git Directory**: a server repository stored by Git, and this database will be re-distributed to clients.

### Tracked & Untracked

Previous section introduced three states of the file: modified, staged, and committed. When committed, the changes are implemented to the repository and thus become "unmodified". Keeping this in mind can help understand the conceptual difference on what tracked and untracked file is.

Tracked files are the files that is being tracked by the Git via snapshot. The file that has a snapshot means it is original and not made anew; unmodified, modified and staged files are all tracked because their histories are being tracked by the snapshot.

Untracked files are the files that cannot be tracked by Git since it does not have a snapshot to keep track of it: in other word, untracked file is a newly made that was never in the Git repository before.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Git\git_lifecycle.png" width=100%></div>
<center style="font-weight:bold">Figure #. The lifecycle of the status of repository files.</center>

To track the untracked files, it needs to be committed and included in the Git history. This creates a snapshot that has record to track the previously untracked file, thus becoming a tracked file.





unstaged changes: changes not yet added to stage

staged changes: changes added to stage





clone (SVN: checkout)









## HEAD

SVN: Trunk

## Branch

SVN: Branch



# GIT: MANUAL



## Configuration

To use the Git, it must be configured first by entering the name and email address. This is just to clarify who is responsible for the commits on Git and where to contact the user.

```makefile
$ git config --global user.name "<user_name>"
$ git config --global user.email "<email_address>"
```

There are three options available for configuration: 

* `--local`: set name and email address specifically for that certain repository.
* `--global`: configuration set is global across all repositories committed under that specific user.
* `--system`: configuration set is system-wide, no matter what user is log in to.

## **Repository**

### Initialization

To create repository for Git, go to the directory you would like to set it as the root and type

```makefile
$ cd repo
$ git init
```

```
Initialized empty Git repository in C:/path/to/directory/repo/.git/
```

### Clone

To import the repository, either from the server or local, go to the directory you would like to set it as the root of the cloned repository and type

```makefile
$ git clone
```

### Fork



## Status Check

To check the current repository status, such as checking for the state of files, enter the command:

```makefile
$ git status
On branch master
nothing to commit (working directory clean)
```

Current repository does not have any modified, or staged file now. However, this command can tell more on actual implementation, often to check the file state. It helps understand how the Git works.

Upon making changes the `git status` command will tell what has been changed:

```makefile
$ git status
On branch master
Changes not staged for commit:
	(use "git add <file>..." to update what will be committed)
	(use "git restore <file>..." to discard changes in working directory)
		modified:	README.md
```

The Git knows the `README.md` has been changed but is not yet committed to the repository.

## Contribution

As discussed before, Git consist of three states on making contribution: modified, staged, and committed. This chapter provides instruction with actual examples for easier and better understanding on how Git contribution is done.

### Staged Changes

Modified or untracked files may be subject to present on the next version, or could be a complete garbage only to test some code that will definitely not be implemented. Until staged, these changes are called "unstaged changes".

Add modified or untracked files to the staged area (aka. index), meaning accepting what-seems-to-be significant changes as staged files should use `git add` command:

```makefile
$ git add README.md
$ git status
On branch master
Changes to be committed:
	(use "git reset HEAD <file>..." to unstage)
		modified:	README.md
```

To add all files in the working directory, either place asterisk `*` or period `.` after the command:

* Asterisk (`git add *`): stage every unmodified and untracked files, excluding the hidden files.
* Period (`git add .`): stage every unmodified and untracked files, including the hidden files.

However, just because the first changes made on the file has been added does not mean the later changes will be added automatically to the staged area.

```makefile
# Former modification.
$ git add README.md
$ git status
On branch master
Changes to be committed:
	(use "git reset HEAD <file>..." to unstage)
		modified:	README.md

# Latter modification.
$ git status
On branch master
Changes to be committed:
	(use "git reset HEAD <file>..." to unstage)
		modified:	README.md
	
Changes not staged for commit:
	(use "git add <file>..." to update what will be committed)
	(use "git checkout -- <file>..." to discard changes in working directory)
		modified:	README.md
```

The former and latter changes are deemed separate and require another `git add` command to stage the latter modification.

To revert the change file back from staged area to working directory:

```makefile
$ git reset
```

### Commit Changes

To commit the staged files to the working repository, that is, to actually apply the changes to the currently working repository use `git commit` command:

```makefile
$ git add A.md
$ git add B.md
$ git commit -m "Committed A and B"
1 files changed, 1 insertions(+), 1 deletions(-)
```

This commits file `A.md` and `B.md` altogether with a single commit. The option `-m` represents comment to add upon committing. No comment will abort the commit.

Checking the status of Git, there will be no staged file waiting to be committed.

```makefile
$ git status
On branch master
nothing to commit (working directory clean)
```

### Push Changes

Commit command contributes to the current working directory, but that only refers to the client's local repository if cloned from the server repository like GitHub. To commit the changes to the server-side of the repository, use the `git push` command.

```makefile
$ git push
```

## **Update**

Remember the final contribution was made using the push change with `git push` command? The "push" meant committing the changes from the cloned to the server-side repository. In opposite, "pull" can be its vice versa which take server-side repository and implement it to the cloned repository.

```makefile
$ git pull
```

This is equivalent to the following command:

```makefile
$ git fetch
$ git merge
```

### Fetch & Merge
