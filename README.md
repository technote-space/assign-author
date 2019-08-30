# Assign Author

[![Build Status](https://github.com/technote-space/assign-author/workflows/Build/badge.svg)](https://github.com/technote-space/assign-author/actions)
[![Coverage Status](https://coveralls.io/repos/github/technote-space/assign-author/badge.svg?branch=master)](https://coveralls.io/github/technote-space/assign-author?branch=master)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/assign-author/badge)](https://www.codefactor.io/repository/github/technote-space/assign-author)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/assign-author/blob/master/LICENSE)

GitHub actions to assign author to issue or PR.  

<!-- START doctoc -->
<!-- END doctoc -->

## Screenshot
![GitHub Action](https://raw.githubusercontent.com/technote-space/assign-author/images/screenshot.gif)

## Installation
1. Setup workflow  
   e.g. `.github/workflows/pull_request.yml`
   ```yaml
   on: pull_request
   name: Pull Request
   jobs:
     assignAuthor:
       name: Assign author to PR
       runs-on: ubuntu-latest
       steps:
         - name: Assign author to PR
           if: github.event.action == 'opened'
           uses: technote-space/assign-author@v1
           with:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```
   e.g. `.github/workflows/issues.yml`
   ```yaml
   on: issues
   name: Issues
   jobs:
     assignAuthor:
       name: Assign author to issue
       runs-on: ubuntu-latest
       steps:
         - name: Assign author to issue
           if: github.event.action == 'opened'
           uses: technote-space/assign-author@v1
           with:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```

## Action event details
### Target events
- pull_request: opened
- issues: opened

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
