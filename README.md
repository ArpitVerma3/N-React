# Parcel & Parcel Cache — Quick Reference

## What is Parcel
- Parcel is a zero-configuration web application bundler that supports JS/TS, CSS, assets, and more.
- Features: fast builds with automatic parallelization, built‑in dev server with HMR, and pluginable transformers/optimizers.

## Install
- Local (recommended):
    - npm: `npm install --save-dev parcel`
    - yarn: `yarn add --dev parcel`
- Run dev server: `npx parcel src/index.html`
- Build: `npx parcel build src/index.html`

## Parcel Cache — overview
- Parcel stores intermediate build artifacts (compilation results, transformed assets, dependency graphs) in a cache to speed up subsequent runs.
- Benefits: much faster incremental builds and rebuilds, reduced CPU work.
- Pitfalls: cache can become stale after major upgrades, corrupted installs, or manual dependency changes — may cause unexpected errors.

## Where the cache lives
- Default: a `.parcel-cache` directory at the project root.
- You can remove or relocate this directory if needed.

## Common cache operations
- Clear cache (CLI):
    - `npx parcel cache clear`  (Parcel 2+)
- Disable cache for a run:
    - `npx parcel build --no-cache`
- Manual removal:
    - `rm -rf .parcel-cache` (macOS / Linux)
    - `rmdir /s /q .parcel-cache` (Windows PowerShell/CMD)

## CI / Shared environments
- To speed CI, persist `.parcel-cache` between jobs/steps using the runner's cache mechanism.
- If builds are unstable in CI, consider clearing the cache as part of the pipeline or use `--no-cache` for reproducible clean builds.

## Troubleshooting tips
- If you get unexpected errors after upgrades or dependency changes:
    1. Stop the dev server.
    2. Clear the cache: `npx parcel cache clear` or remove `.parcel-cache`.
    3. Reinstall node_modules if necessary: `rm -rf node_modules && npm install`.
- For persistent or reproducible problems, pin Parcel to a specific version in package.json.

## Best practices
- Keep `.parcel-cache` out of version control (add to `.gitignore`).
- Cache in CI for speed; use cache keys that include dependency lockfile checksums to avoid stale caches.
- Use `--no-cache` for one-off clean production builds if you need absolute reproducibility.

If you want, I can add a sample GitHub Actions cache snippet or a short set of npm scripts for common tasks.