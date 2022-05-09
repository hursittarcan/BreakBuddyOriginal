<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <h1>👋 Welcome to BreakBuddy!</h1>
</div>

This is the repo for the [breakbuddy.be](https://google.com) website. The purpose of BreakBuddy is to advise a holiday destination to users all over the world (completely free and open-source). 

<hr style="margin-top: 3em; margin-bottom: 3em;">

## Table of contents

- [How to contribute](#how-to-contribute)

## How to contribute

This project follows the [all-contributors](https://allcontributors.org/docs/en/overview) specification. Contributions of any kind are welcome! <3

### 1. Submit an issue

- Create a [new issue](https://github.com/HUrsitTarcan/BreakBuddy/issues/new/choose).
- Comment on the issue (if you'd like to be assigned to it) - that way our team can assign the issue to you.

### 2. Fork the repository (repo)

- If you're not sure how, here's how to [fork a repo](https://help.github.com/en/articles/fork-a-repo).

If this is your first time forking our repo, this is all you need to do for this step:

```sh
$ git clone git@github.com:[your_github_profile]/BreakBuddy.git
```
If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.

To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

```sh
$ git remote add upstream https://github.com/HursitTarcan/BreakBuddy
```

To [sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

```sh
$ git checkout main
$ git fetch upstream
$ git merge upstream/main
```
### 3. Make awesome changes!

1. Create new branch for your changes

```sh
$ git checkout -b new_branch_name
```

2. Start developing!

```sh
$ Add features, fix bugs, etc... 
```

3. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)).

```sh
$ git commit -m "brief description of changes [Fixes #1234]"
```

4. Push to your GitHub account

```sh
$ git push origin
```

### 4. Submit your PR

- After your changes are committed to your GitHub fork, submit a pull request (PR) to the `main` branch of the `HursitTarcan/BreakBuddy` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
  - ex. `Updates out of date content [Fixes #1234]`
- _Confirm your preview deploy looks & functions as expected_

### 5. Wait for a review

- Our team will review your PR
- Acceptable PRs will be approved & merged into the `main` branch
