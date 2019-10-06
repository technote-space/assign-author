# Assign Author

[![Build Status](https://github.com/technote-space/assign-author/workflows/Build/badge.svg)](https://github.com/technote-space/assign-author/actions)
[![codecov](https://codecov.io/gh/technote-space/assign-author/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/assign-author)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/assign-author/badge)](https://www.codefactor.io/repository/github/technote-space/assign-author)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/assign-author/blob/master/LICENSE)

*Read this in other languages: [English](README.md), [日本語](README.ja.md).*

`GitHub Action` to assign author to issue or PR.  

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Screenshot](#screenshot)
- [Installation](#installation)
- [Action event details](#action-event-details)
  - [Target events](#target-events)
- [GitHub Actions using this Action](#github-actions-using-this-action)
- [Author](#author)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Screenshot
![GitHub Action](https://raw.githubusercontent.com/technote-space/assign-author/images/screenshot.gif)

## Installation
1. Setup workflow  
   e.g. `.github/workflows/pull_request.yml`
   ```yaml
   on:
     pull_request:
       types: [opened]
   name: Pull Request
   jobs:
     assignAuthor:
       name: Assign author to PR
       runs-on: ubuntu-latest
       steps:
         - name: Assign author to PR
           uses: technote-space/assign-author@v1
           with:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```
   e.g. `.github/workflows/issues.yml`
   ```yaml
   on:
     issues:
       types: [opened]
   name: Issues
   jobs:
     assignAuthor:
       name: Assign author to issue
       runs-on: ubuntu-latest
       steps:
         - name: Assign author to issue
           uses: technote-space/assign-author@v1
           with:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```

## Action event details
### Target events
| eventName | action |
|:---:|:---:|
|pull_request|opened|
|pull_request|rerequested|
|issues|opened|
|issues|rerequested|

## GitHub Actions using this Action
- [Release GitHub Actions](https://github.com/technote-space/release-github-actions)
  - [issue_opened.yml](https://github.com/technote-space/release-github-actions/blob/master/.github/workflows/issue_opened.yml)
  - [pr_opened.yml](https://github.com/technote-space/release-github-actions/blob/master/.github/workflows/pr_opened.yml)
- [Auto card labeler](https://github.com/technote-space/auto-card-labeler)
  - [issue_opened.yml](https://github.com/technote-space/auto-card-labeler/blob/master/.github/workflows/issue_opened.yml)
  - [pr_opened.yml](https://github.com/technote-space/auto-card-labeler/blob/master/.github/workflows/pr_opened.yml)
- [Assign Author](https://github.com/technote-space/assign-author)
  - [issue_opened.yml](https://github.com/technote-space/assign-author/blob/master/.github/workflows/issue_opened.yml)
  - [pr_opened.yml](https://github.com/technote-space/assign-author/blob/master/.github/workflows/pr_opened.yml)
- [TOC Generator](https://github.com/technote-space/toc-generator)
  - [issue_opened.yml](https://github.com/technote-space/toc-generator/blob/master/.github/workflows/issue_opened.yml)
  - [pr_opened.yml](https://github.com/technote-space/toc-generator/blob/master/.github/workflows/pr_opened.yml)
- [Package Version Check Action](https://github.com/technote-space/package-version-check-action)
  - [issue_opened.yml](https://github.com/technote-space/package-version-check-action/blob/master/.github/workflows/issue_opened.yml)
  - [pr_opened.yml](https://github.com/technote-space/package-version-check-action/blob/master/.github/workflows/pr_opened.yml)

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
