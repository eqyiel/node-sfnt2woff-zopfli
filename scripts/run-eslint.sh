#!/bin/sh

set -e

find "$(dirname "${0}")/../" \
  -name '*.js' \
  -not -path '*/node_modules/*' \
  -not -path '*/build/*' \
  -print0 | \
  xargs --null "$(npm bin)/eslint" \
        --config "$(dirname "${0}")/../.eslintrc.json" \
        --fix
