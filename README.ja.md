# Assign Author

[![CI Status](https://github.com/technote-space/assign-author/workflows/CI/badge.svg)](https://github.com/technote-space/assign-author/actions)
[![codecov](https://codecov.io/gh/technote-space/assign-author/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/assign-author)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/assign-author/badge)](https://www.codefactor.io/repository/github/technote-space/assign-author)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/assign-author/blob/master/LICENSE)

*Read this in other languages: [English](README.md), [日本語](README.ja.md).*

Issue や Pull Request に Author をアサインする GitHub Action です。

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [スクリーンショット](#%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88)
- [インストール](#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
- [Action イベント詳細](#action-%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E8%A9%B3%E7%B4%B0)
  - [対象イベント](#%E5%AF%BE%E8%B1%A1%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88)
- [このアクションを使用しているアクションの例](#%E3%81%93%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E4%BE%8B)
- [Author](#author)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## スクリーンショット
![GitHub Action](https://raw.githubusercontent.com/technote-space/assign-author/images/screenshot.gif)

## インストール
1. workflow を設定  
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

## Action イベント詳細
### 対象イベント
| eventName | action |
|:---:|:---:|
|pull_request|opened|
|pull_request|rerequested|
|issues|opened|
|issues|rerequested|

## このアクションを使用しているアクションの例
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
