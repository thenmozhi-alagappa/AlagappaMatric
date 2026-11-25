#!/usr/bin/env bash
# Builds the site for GitHub Pages and publishes it to the "gh-pages" branch.
# Usage (from the project folder, in Git Bash):  npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."

REPO_URL="$(git remote get-url origin)"
NAME="$(basename -s .git "$REPO_URL")"

# MSYS_NO_PATHCONV stops Git Bash on Windows from turning "/Name/" into a Windows path.
MSYS_NO_PATHCONV=1 BASE_PATH="/$NAME/" npx vite build
touch dist/.nojekyll

cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy site $(date '+%Y-%m-%d %H:%M')"
git push -q -f "$REPO_URL" gh-pages
rm -rf .git
echo "Published: https://$(git -C .. remote get-url origin | sed -E 's#.*github.com[/:]([^/]+)/.*#\1#').github.io/$NAME/"
