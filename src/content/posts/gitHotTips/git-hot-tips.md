---
title: 🔥 Git Hot Tips
slug: git-hot-tips
author: Wes Bos
image: ss-2016-03-10-at-9.09.24-AM.png
category:
  - Workflow + Tooling
date: 2016-03-10T09:10:14
id: 3727
---

![Image](./wes-git-tips.png)

Don't you just love little tips that make you say "How did I not know that?!"?

Small incremental improvements are the way that you inch towards mastery of a topic. Every day I learn little things about web development that as a whole make me much better at my job.

This is a list of git tips — you may know a few of them but I bet there are a few nuggets that will help you improve your workflow 1, 5 or 10%.

A big thanks to everyone who <a href="https://twitter.com/wesbos/status/707384498372136960">shared their tips on twitter</a>.

<h2>`git add -p`</h2>

Rather than `git add everything or individual files, this -p will allow you to step through each change, or hunk`, and decide if you'd like to commit it. This is really handy if you have made two different changes to the same file and want to commit them separately.

<h2>`git log -5 --pretty --oneline`</h2>

View your last 5 latest commits each on their own line.

<a href="https://twitter.com/luclemo/status/707385039856791552">🍟 @luclemo</a>

<h2>`git shortlog -sn`</h2>

Quickly get a list of contributors and see how many commits each person has.

<a href="https://twitter.com/csswizardry/status/707573651449757696">👏 @csswizardry</a>

<h2>`git log --all --graph --decorate --oneline --simplify-by-decoration`</h2>

This one is the best - you need to see what it does visually:

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><a href="https://twitter.com/wesbos">@wesbos</a> Pretty branch status in your CLI ➜ git log --all --graph --decorate --oneline --simplify-by-decoration <a href="https://t.co/6gtVmvLVXC">pic.twitter.com/6gtVmvLVXC</a>— Tommy Hodgins (@innovati) <a href="https://twitter.com/innovati/status/707385937219743744">March 9, 2016</a></blockquote>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

You'll never remember this one so put it in your ~/.gitconfig file under `[alias]`

```bash
wow = log --all --graph --decorate --oneline --simplify-by-decoration

```

<a href="https://twitter.com/innovati/status/707385937219743744">😮 @innovati</a> and <a href="https://twitter.com/winstonswchow/status/707385447383769090">🙌 @winstonswchow</a>

<h2>`git checkout pr/123`</h2>

Quickly check out a remote for pull request review. You'll need to <a href="https://gist.github.com/piscisaureus/3342247">set it up like this</a>.

<a href="https://twitter.com/linclark/status/707386094896087040">🤘 @linclark</a>

## `git diff --shortstat "@{0 day ago}"`

See how many lines of code you have written today.

<a href="https://twitter.com/innovati/status/707386314530930689">💃 @innovati</a>

<h2>`git checkout -`</h2>

It's like the jump button on your TV remote - jump back to to your last branch.

💆 @everyone

<h2>`git reset --soft HEAD~3`</h2>

A soft reset will keep your changes but allow you to "uncommit" something.

Instead of doing a squash, Dan prefers to dial back HEAD any number of commits and then add & commit everything into a single commit.

<a href="https://twitter.com/dan_abramov/status/707532388809756672">🇷🇺 @dan_abramov</a>

<h2>`git reflog`</h2>

David says it best — "Don't worry, it's probably saved somewhere". Git reflog allows you to see every step you have made with git allowing you to retract and reinstate your steps.

<a href="https://twitter.com/davidnormo/status/707538222813941760">😱 @davidnormo</a>

<h2>`git stash, then git stash pop`</h2>

Stash let's you squirrel away unstaged changes, do some work, and then apply those changes back on.

`git stash will stash those changes and put them into your list — I like to think of this as an array of changes. Now to get them back you can git stash apply but what Sam is suggesting here is that you use git stash pop` instead which will also bring back your changes, but it removes them from your stash "array".
ok
<a href="https://twitter.com/sambreed/status/707406334774222848">🏍 @sambreed</a>

<h2>`git log -S puppy`</h2>

Search the commit history for the word puppy and display matching commits.

<a href="https://twitter.com/chrisrockwell/status/707427601153966080">🚀 @chrisrockwell</a>

<h2>`git latest = for-each-ref --count=30 --sort=-committerdate refs/heads/ --format='%(`refname:short)'</h2>

Allows you to view your latest branchces - this is helpful for when your branch names are based on bug IDs that you have a hard time remembering.

<a href="https://twitter.com/wesbos/status/692012780598112256">🔥 @wesbos</a>

<h2>`git config --global help.autocorrect -1`</h2>

Mistype or misspell a git command? Immediately re-run the correct command. You can use `-1 to 1000` to wait a full second before the command is re-run.

<a href="https://twitter.com/wesbos/status/701864888818208768">🔥 @wesbos</a>

<h2>`git commit --amend`</h2>

Great for squashing staged files into your last commit.

<a href="https://twitter.com/carlosperez/status/707566143305752576">🐙 @carlosperez</a>

<h2>`git cherry-pick [hash]`</h2>

As long as the commit has been fetched somewhere, you can cherry pick that code in your own branch without having to merge the entire thing.

<a href="https://twitter.com/jonalvarezz/status/707398488825466881">🐳 @jonalvarezz</a>

<h2>`git remote update --prune`</h2>

Remove local branches that have been deleted from your remote (like GitHub). You can always run `git remote prune origin --dry-run` to see what will be deleted before going all in.

<a href="https://twitter.com/mourawaldson/status/707795546317197312">🍉 @mourawaldson</a>

<h2>`git rebase -i HEAD~4`</h2>

Interactive rebase allows you to pick and choose which commits you can pick, squash, reword, edit, or fixup

<a href="https://twitter.com/Stephn_R/status/707387775100784641">😎 @Stephn_R</a>

<h2>`More?`</h2>

Post yours in the comment below!
