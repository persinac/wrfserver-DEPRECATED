# TypeORM Short Guide

## Official Doc Guide
https://github.com/typeorm/typeorm/tree/master/docs

## Basic Usage
 - Migrations are located in src/migrations
 - Migration config is located in ormconfig.json
 - Make sure all dependencies are installed
    - If things still aren't working, install globally
 - We run it with `npm run ...`

## Crash Course Commands
1. `npm run typeorm migration:create -- -n <migration_name>`
    - Creates empty migration file in src/migrations that you will need to populate with own queries
    - Ideal for manual CRUD operations
2. `npm run typeorm migration:generate -- -n <migration_name>`
    - Creates migration file in src/migrations based off of entity changes found in src/entity/*.ts
3. `npm run typeorm migration:run`
    - Runs any migration that is not in the migrations db table
4. `npm run typeorm migration:revert`
    - Reverts the most recent migration that is in the migrations table
    
## Helpful Links
 * https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#create-a-new-migration
 * https://github.com/typeorm/typeorm/blob/master/docs/migrations.md
 * Windows was throwing a shit-fit, so here's an issue that shed some light and also linked another issue that helped resolve my issue:
    * https://github.com/typeorm/typeorm/issues/1675