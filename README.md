# Assign Author

[![CI Status](https://github.com/technote-space/assign-author/workflows/CI/badge.svg)](https://github.com/technote-space/assign-author/actions)
[![codecov](https://codecov.io/gh/technote-space/assign-author/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/assign-author)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/assign-author/badge)](https://www.codefactor.io/repository/github/technote-space/assign-author)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/assign-author/blob/master/LICENSE)

*Read this in other languages: [English](README.md), [日本語](README.ja.md).*

`GitHub Actions` to assign author to issue or PR.   

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [Screenshot](#screenshot)
- [Installation](#installation)
- [Action event details](#action-event-details)
  - [Target events](#target-events)
- [Example repositories using this Action](#example-repositories-using-this-action)
- [Author](#author)

</details>
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
   ```

## Action event details
### Target events
| eventName | action |
|:---:|:---:|
|pull_request, pull_request_target|opened, reopened|
|issues|opened, reopened|

## Example repositories using this Action
- [Release GitHub Actions](https://github.com/technote-space/release-github-actions)
  - [issue-opened.yml](https://github.com/technote-space/release-github-actions/blob/master/.github/workflows/issue-opened.yml)
  - [pr-opened.yml](https://github.com/technote-space/release-github-actions/blob/master/.github/workflows/pr-opened.yml)
- [Auto card labeler](https://github.com/technote-space/auto-card-labeler)
  - [issue-opened.yml](https://github.com/technote-space/auto-card-labeler/blob/master/.github/workflows/issue-opened.yml)
  - [pr-opened.yml](https://github.com/technote-space/auto-card-labeler/blob/master/.github/workflows/pr-opened.yml)
- [Assign Author](https://github.com/technote-space/assign-author)
  - [issue-opened.yml](https://github.com/technote-space/assign-author/blob/master/.github/workflows/issue-opened.yml)
  - [pr-opened.yml](https://github.com/technote-space/assign-author/blob/master/.github/workflows/pr-opened.yml)
- [TOC Generator](https://github.com/technote-space/toc-generator)
  - [issue-opened.yml](https://github.com/technote-space/toc-generator/blob/master/.github/workflows/issue-opened.yml)
  - [pr-opened.yml](https://github.com/technote-space/toc-generator/blob/master/.github/workflows/pr-opened.yml)
- [Package Version Check Action](https://github.com/technote-space/package-version-check-action)
  - [issue-opened.yml](https://github.com/technote-space/package-version-check-action/blob/master/.github/workflows/issue-opened.yml)
  - [pr-opened.yml](https://github.com/technote-space/package-version-check-action/blob/master/.github/workflows/pr-opened.yml)
- [Get Diff Action](https://github.com/technote-space/get-diff-action)
  - [issue-opened.yml](https://github.com/technote-space/get-diff-action/blob/master/.github/workflows/issue-opened.yml)
  - [pr-opened.yml](https://github.com/technote-space/get-diff-action/blob/master/.github/workflows/pr-opened.yml)
- [Create Project Card Action](https://github.com/technote-space/create-project-card-action)
  - [issue-opened.yml](https://github.com/technote-space/create-project-card-action/blob/master/.github/workflows/issue-opened.yml)
  - [pr-opened.yml](https://github.com/technote-space/create-project-card-action/blob/master/.github/workflows/pr-opened.yml)
- [Get git comment action](https://github.com/technote-space/get-git-comment-action)
  - [issue-opened.yml](https://github.com/technote-space/get-git-comment-action/blob/master/.github/workflows/issue-opened.yml)
  - [pr-opened.yml](https://github.com/technote-space/get-git-comment-action/blob/master/.github/workflows/pr-opened.yml)

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
