TEST YAML SYNC

# jdilig-me
my personal website


# Branching Strategy

This project follows a straightforward branching strategy to manage development, staging, and production environments.

## Branches

- **main:** 
  - Represents the production-ready state of the project. Only stable, tested code should be merged here.

- **stage:** 
  - Used for QA and pre-production testing. Code here should be nearly production-ready but might include experimental features or configurations.

- **develop:** 
  - The primary branch for active development. Features and bug fixes are merged here before moving to `stage`.

## Branch Naming Conventions

- **Feature Branches:** `feature/[branch-name]`
  - For new features or enhancements. Example: `feature/new-login-system`.

- **Bugfix Branches:** `bugfix/[branch-name]`
  - For fixing bugs in the `develop` branch. Example: `bugfix/fix-login-issue`.

- **Hotfix Branches:** `hotfix/[branch-name]`
  - For urgent fixes that need to be applied directly to `main`. Example: `hotfix/urgent-login-bug`.

- **Release Branches:** `release/[YYYY-MM-DD-HHMM]`
  - Created from `develop` when preparing for a release. Named with the date and time of creation. Example: `release/2024-01-01-1430`.

## Branch Usage

- **feature:** 
  - Used for developing new features or significant changes. These branches are typically created from `develop` and merged back into `develop`.

- **bugfix:** 
  - For fixing bugs found in the `develop` branch. These should be small, focused changes.

- **hotfix:** 
  - For critical fixes that need immediate deployment to production (`main`). After fixing, merge into `main` and then into `develop` to ensure the fix propagates.

- **release:** 
  - When features are ready for release, a release branch is created from `develop`. Here, final testing and minor adjustments are made before merging into `stage` and then `main`.

## Workflow

1. **Develop Features:** 
   - Create feature branches from `develop`. Work, commit, and push changes.

2. **Fix Bugs:** 
   - For bugs found during development, create bugfix branches from `develop`.

3. **Prepare for Release:** 
   - When ready, create a release branch from `develop`, finalize features, and merge into `stage`.

4. **QA and Pre-Production:** 
   - Use `stage` for final testing. If all good, merge into `main`.

5. **Urgent Fixes:** 
   - If something critical needs fixing in production, create a hotfix branch from `main`.

This strategy ensures a clear path from development to production, maintaining stability in production while allowing flexibility in development.
