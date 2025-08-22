#!/bin/zsh
set -e

ports=(3000 3001 3002 3003 3004 3005 3006 3007 3008 3009 3010)
for p in ${ports[@]}; do
  lsof -ti :$p -sTCP:LISTEN | xargs -n1 kill -9 2>/dev/null || true
done
pkill -f "next dev" 2>/dev/null || true
pkill -f "next start" 2>/dev/null || true
echo "Killed listeners on ${ports[@]}"


