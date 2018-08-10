#!/bin/sh

set -e

find "$(dirname "${0}")/../" \
  \( \
  -name '*.js' \
  -o -name '*.json' \
  -o -name '*.md' \
  \) \
  -not -path '*/node_modules/*' \
  -not -path '*/build/*' \
  -not -path '*/sfnt2woff-zopfli/*' \
  -print0 | \
  xargs --null "$(npm bin)/prettier" --write
