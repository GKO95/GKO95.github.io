---
layout: docs
category: 소프트웨어
title: Git
slug: ko.Git
order: null
---
# Git: 소개
> *참조: [Pro Git, 2nd Edition](https://git-scm.com/book/)*

[Git](https://git-scm.com/)은 버전 관리 시스템 중 하나로 프로젝트 소스 코드를 관리하는데 매우 유용한 소프트웨어이다. 인터넷에는 다양한 온라인 Git 호스팅 서비스들이 존재하며 대표적으로 [GitHub](https://github.com/) 및 [GitLab](https://gitlab.com/)가 존재한다. 본 장은 버전 관리의 기초적인 개념 및 의의, 그리고 Git의 활용에 대하여 소개한다.

## 스냅샷
[스냅샷](https://ko.wikipedia.org/wiki/스냅샷_(기억_장치))(snapshot)은 정지된 시간(frozen time)에서의 시스템 상태를 의미한다. 본 문서는 소스 코드 버전 관리를 논하고 있으므로, 여기서 언급된 시스템은 작업공간 혹은 프로젝트를 가리킨다. 스냅샷을 저장하는 것은 해당 시스템을 백업하는 작업과 유사하지만, 두 방식은 각각의 장단점을 갖는다.

* [백업](https://ko.wikipedia.org/wiki/백업)(backup)
    : 과정이 너무 오래 걸리고, 백업 진행 과정에서 멀티태스킹 및 다중 사용자의 이용으로 데이터 write에 의한 손상된 데이터를 백업할 수 있는 위험이 있다. Write 접근 권한을 제한하므로써 방지할 수 있는 문제이지만 빈번히 사용되는 시스템의 경우에는 백업을 위해 시스템을 일시적으로 중단(일명 downtime)되어야 한다.

전통적인 시스템 백업(backup)은 과정이 너무 오래 걸리고, 백업 진행 과정에서 멀티태스킹 및 다중 사용자의 이용으로 데이터 write에 의한 손상된 데이터를 백업할 수 있는 위험이 있다. Write 접근 권한을 제한하므로써 방지할 수 있는 문제이지만 빈번히 사용되는 시스템의 경우에는 백업을 위해 시스템을 일시적으로 중단(일명 downtime)되어야 한다.

Traditional backup has a drawback of taking long time to complete for a large data and may have data corruption due to data write from multi-tasking or multi-user system while on backup process. Restricting write access can avoid this encounter but is unsuitable for the system with high-availability as the system needs to be stopped (called downtime) for backup.

스냅샷은 downtime이 필요하지 않다. 특정 시간에서의 읽기 전용 복사본을 생성하는 것은 타 어플리케이션의 데이터 write로 인한 간섭을 받지 않는다. 만일 이전 스냅샷에 비해 변경사항이 없을 시에는 이전 복사본을 그대로 참조하기만 한다. 이는 스냅샷을 생성하고 저장하는 시간을 대폭 줄일 수 있다. 하지만 스냅샷은 이전 스냅샷으로부터 크게 의존하며, 만일 손상된 포인터가 있으면 이전 데이터 복원이 불가하다.

Snapshot does not need downtime to create backup: creating a read-only copy of the data at frozen point of time is not interfered by writing data from other applications. Additionally, if snapshot noticed unchanged data compared to its previous snapshot, that data is call by reference (yes, calling address of the data) from the previous copy instead. This can reduce the amount of time and space to create and store the snapshot. However, snapshot is dependency-sensitive and broken pointer reference can lead to failure of rollback.

Back to the topic, general VCS applies update on the files that has difference with previous version. This can save time and bandwidth significantly compare to storing the whole source code. The updated file is called delta file, while the symbol delta $\Delta$ denotes "change" in mathematic (thus, called delta-base version control).

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Git\whatisgit_VCS.png" width=100%></div>
<center style="font-weight:bold">Figure #. Delta-base version control.</center>

Git, on the other hand, uses a stream of snapshot: unchanged files are not stored again but is called by reference from the previous snapshot copy.  

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Git\whatisgit_Git.png" width=100%></div>
<center style="font-weight:bold">Figure #. Snapshot version control.</center>

This does not mean snapshot is far better than delta update and vice versa. Each has its own benefits and drawback, and Git just happens to choose the snapshot technique for version-control.



## 버전 관리
[버전 관리](https://ko.wikipedia.org/wiki/버전_관리)(version control)는 파일의 변화를 기록하는 시스템으로 언제든지 원하는 버전으로 되돌아갈 수 있도록 한다.   소스 코드 뿐만 아니라 파일 혹은 프로젝트 전체를 이전 상태로 되돌릴 수도 있다. 이러한 특성 덕분에 진행되고 있는 프로젝트에 문제 혹은 결함이 발생할 때 버전 관리를 통해 stable 했던 상태로 복원이 가능하다. 문서를 작성하거나 게임을 할 때 저장하는 것과 마찬가지로, 버전 관리는 프로젝트의 현 상태를 저장하여 나중에 불러올 수 있는 기능이다.

### 로컬 버전 관리
가장 간단한 형태의 버전 관리 시스템으로 파일 변경사항 기록들은 프로젝트를 작업하는 로컬 장치에 저장되어 있다. 단, 변경사항 기록 데이터가 손상되면 프로젝트 버전 이동이 불가능하다.

![로컬 버전 관리 시스템 (LVCS)](/images/docs/git/vcs_local.png)

### 중앙 버전 관리
여러 사용자가 협업하여 프로젝트를 진행해야 할 경우, 파일 변경사항 기록을 서버 측에서 관리한다. CVCS는 여러 장점을 갖는데, 그 예시로 효율적인 관리와 사용자들 간 어떠한 작업을 진행하고 있는지 확인할 수 있는 점 등이 있다. 그러나 서버가 다운되면 작업을 진행하지 못하며, 데이터베이스가 손상되면 프로젝트 작업을 전부 잃게 되는 치명적인 단점을 지닌다.

![중앙 버전 관리 시스템 (CVCS)](/images/docs/git/vcs_centralized.png)

### 분산 버전 관리

To resolve this matter, Distributed Version-Control System is introduced. Not only does the server holds the database, but the source code is also distributed to the clients working on the project. Git is one of the example that implements this VCS, and its distribution of the source code is called "clone".

![분산 버전 관리 시스템 (DVCS)](/images/docs/git/vcs_distributed.png)


## Git

Git is one of the Distributed VCS but do have some difference with other version-control system:

* **Local Operation Available**

Once the Git repository is distributed on the client's computer, client do not need to access the network for more information; version history, changes, and more are already included in the local cloned Git, aka. local repository. Thus, programmer can commit changes locally and upload once the network connection is established.

* **Integrity**

Before storing the project on the network, the repository is checksummed to 40-character hexadecimal string based on the file contents and directory structure using SHA-1 hash. When uploaded and stored, the same checksum is referred to check for file validation (such as missing file and corruption check). Therefore, every change must be notified to Git or won't be able to store on the server-side. In database, Git stores everything not by its name but by hash value of its contents. 

* **Data Adds Only**

While other VCS can lose and mess up the changes by committing undoable and erasing the data in any way, Git can only add data (i.e., changes) in snapshot. This allows programmer to experiment the repository without severely screwing up the Git.

There are other properties the Git has and will be introduced on the following subsections:

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

```bash
git config --global user.name "<user_name>"
git config --global user.email "<email_address>"
```

There are three options available for configuration: 

* `--local`: set name and email address specifically for that certain repository.
* `--global`: configuration set is global across all repositories committed under that specific user.
* `--system`: configuration set is system-wide, no matter what user is log in to.

## **Repository**

### Initialization

To create repository for Git, go to the directory you would like to set it as the root and type

```bash
cd repo
git init
```

```
Initialized empty Git repository in C:/path/to/directory/repo/.git/
```

### Clone

To import the repository, either from the server or local, go to the directory you would like to set it as the root of the cloned repository and type

```bash
git clone
```

### Fork



## Status Check

To check the current repository status, such as checking for the state of files, enter the command:

```bash
$ git status
On branch master
nothing to commit (working directory clean)
```

Current repository does not have any modified, or staged file now. However, this command can tell more on actual implementation, often to check the file state. It helps understand how the Git works.

Upon making changes the `git status` command will tell what has been changed:

```bash
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

```bash
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

```bash
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

```bash
$ git reset
```

### Commit Changes

To commit the staged files to the working repository, that is, to actually apply the changes to the currently working repository use `git commit` command:

```bash
$ git add A.md
$ git add B.md
$ git commit -m "Committed A and B"
1 files changed, 1 insertions(+), 1 deletions(-)
```

This commits file `A.md` and `B.md` altogether with a single commit. The option `-m` represents comment to add upon committing. No comment will abort the commit.

Checking the status of Git, there will be no staged file waiting to be committed.

```bash
$ git status
On branch master
nothing to commit (working directory clean)
```

### Push Changes

Commit command contributes to the current working directory, but that only refers to the client's local repository if cloned from the server repository like GitHub. To commit the changes to the server-side of the repository, use the `git push` command.

```bash
$ git push
```

## **Update**

Remember the final contribution was made using the push change with `git push` command? The "push" meant committing the changes from the cloned to the server-side repository. In opposite, "pull" can be its vice versa which take server-side repository and implement it to the cloned repository.

```bash
$ git pull
```

This is equivalent to the following command:

```bash
$ git fetch
$ git merge
```

### Fetch & Merge
