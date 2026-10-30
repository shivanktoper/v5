@echo off
setlocal enabledelayedexpansion

:: Navigate to this script's directory (FusionFood root)
cd /d "%~dp0"

:: Prevent Wrangler from defaulting to C:\Windows\System32 or system directories
if not defined USERPROFILE set "USERPROFILE=%HOMEDRIVE%%HOMEPATH%"
if not defined WRANGLER_HOME set "WRANGLER_HOME=%USERPROFILE%"

echo ==========================================================
echo   Fusion Food Family Lab - Cloudflare Pages Deploy
echo   Target Project: fusionfood
echo   Working Dir:    %CD%
echo   Wrangler Home:  %WRANGLER_HOME%
echo ==========================================================
echo.

:: Execute Wrangler Pages Deployment via npx.cmd
call npx.cmd wrangler pages deploy . --project-name fusionfood %*

if %errorlevel% equ 0 (
    echo.
    echo ==========================================================
    echo   SUCCESS: Deployed to Cloudflare Pages!
    echo   URL: https://fusionfood.pages.dev
    echo ==========================================================
) else (
    echo.
    echo [ERROR] Deployment failed with exit code %errorlevel%.
)

pause
