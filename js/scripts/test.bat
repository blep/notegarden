@echo off

REM Windows script for running unit tests
REM You have to run server and capture some browser first
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Karma (=Testacular) (npm install -g karma)

set BASE_DIR=%~dp0
karma start "%BASE_DIR%\..\config\testacular.conf.js" %*
