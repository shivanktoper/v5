@echo off
setlocal enabledelayedexpansion

:: Navigate to this script's directory (FusionFood root)
cd /d "%~dp0"

:: Prevent Wrangler from defaulting to C:\Windows\System32 or system directories
if not defined USERPROFILE set "USERPROFILE=%HOMEDRIVE%%HOMEPATH%"
if not defined WRANGLER_HOME set "WRANGLER_HOME=%USERPROFILE%"

echo ==========================================================
echo   Fusion Food Family Lab - Local Pages Dev Server
echo   Working Dir:   %CD%
echo   Wrangler Home: %WRANGLER_HOME%
echo ==========================================================
echo.

call npx.cmd wrangler pages dev . --d1=DB=af600698-1afa-4b2f-8684-82bdf975b554 %*
