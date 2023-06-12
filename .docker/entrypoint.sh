#!/bin/env bash
set -e

PATH=/app/node_modules/.bin:$PATH

if [ $# -eq 0 ]; then
  cd /app/
  npm ci && npm run build
  npm run --workspace=backend migration:run
  npm start

else
  exec $@

fi
