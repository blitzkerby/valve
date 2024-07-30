@echo off
cd /d "%~dp0"
:loop
git add -A
git commit -m "Auto commit"
git pull origin main --rebase
git push origin main
timeout /t 1000
goto loop
