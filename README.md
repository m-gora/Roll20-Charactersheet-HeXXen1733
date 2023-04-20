![Build](https://github.com/m-gora/Roll20-Charactersheet-HeXXen1733/actions/workflows/main.yml/badge.svg?branch=master)


# HeXXen 1733 Roll20 Charactersheet
This is the source code for the Roll20 Charactersheet for the tabletop RPG HeXXen 1733.

The source code is based on pugjs templates and can be found in src/templates.
This sheet uses worker scripts written in javascript and can be found in src/js.

## Dev Setup
To start developing on this sheet clone this repository and change to the working directory. Afterwards run `yarn install`.

You can run `yarn watch` to automatically build the project whenever you save a change.

## Build Release

`yarn build` will create the distribution, that is then merged with the Roll20 Github repository.

## Continuous Integration
This project uses Github Actions for continuous integration.
Changes on master will automatically update the files on the [roll20-charactersheets](https://github.com/m-gora/roll2-charactersheets) fork.
The pull request will then be performed by me manually for approval by roll20.
