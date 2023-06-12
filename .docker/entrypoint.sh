#!/bin/env bash
set -e

PATH=/app/node_modules/.bin:$PATH

if [ $# -eq 0 ]; then
  cd /app/
  npm ci && npm run build
  npm run db:migrate
  npm start

else
  exec $@

fi
