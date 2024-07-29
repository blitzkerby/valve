#!/bin/bash
cd "$(dirname "$0")"

while true; do
    git add .
    git commit -m "Auto commit"
    git push origin main
    sleep 1000
done