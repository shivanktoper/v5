@echo off
setlocal enabledelayedexpansion

:: Navigate to this script's directory (FusionFood root)
cd /d "%~dp0"

:: Prevent Wrangler from defaulting to C:\Windows\System32 or system directories
if not defined USERPROFILE set "USERPROFILE=%HOMEDRIVE%%HOMEPATH%"
if not defined WRANGLER_HOME set "WRANGLER_HOME=%USERPROFILE%"

echo ==========================================================
echo   Fusion Food Family Lab - Cloudflare D1 Schema Sync
echo   Database:      foodfusionweb
echo   Schema File:   schema.sql
echo   Working Dir:   %CD%
echo   Wrangler Home: %WRANGLER_HOME%
echo ==========================================================
echo.

echo Executing schema.sql on remote Cloudflare D1 database...
call npx.cmd wrangler d1 execute foodfusionweb --remote --file=schema.sql

if %errorlevel% equ 0 (
    echo.
    echo ==========================================================
    echo   SUCCESS: Cloudflare D1 Database Schema Synchronized!
    echo ==========================================================
) else (
    echo.
    echo [ERROR] D1 execution failed with exit code %errorlevel%.
)

pause
