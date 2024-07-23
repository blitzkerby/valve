@echo off
cd /d "%~dp0"
:loop
git add -A
git commit -m "Auto commit"
git push origin main
timeout /t 1000
goto loop
