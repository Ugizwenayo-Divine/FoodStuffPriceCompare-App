[![Maintainability](https://api.codeclimate.com/v1/badges/714724c412ba78f2949b/maintainability)](https://codeclimate.com/github/Ugizwenayo-Divine/FoodStuffPriceCompare-App/maintainability)  [![Coverage Status](https://coveralls.io/repos/github/Ugizwenayo-Divine/FoodStuffPriceCompare-App/badge.svg)](https://coveralls.io/github/Ugizwenayo-Divine/FoodStuffPriceCompare-App)  [![Build Status](https://travis-ci.com/Ugizwenayo-Divine/FoodStuffPriceCompare-App.svg?branch=develop)](https://travis-ci.com/Ugizwenayo-Divine/FoodStuffPriceCompare-App)  [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
# FoodStuffPriceCompare-App
It will help farmers, customers for foodstuff to access prices on markets and compare them before taking an action
## Deployment
The application is hosted on Heroku, it can be accessed on [FoodStuffPriceCompare App](https://foodstuffpricecompare-app.herokuapp.com/) 

## Sequelize and Sequelize-cli

Sequelize is being used as ORM. To get you started, we will configure sequelize using .sequelizerc file.

The .sequelizerc file will in turn be used by sequelize-cli to setup the the sequelize folder structure.
`sequelize init`

### 1. Configure environment variables

The following are example environment variables needed:

#### Database

* DEV_DB_USERNAME
* DEV_DB_PASSWORD
* DEV_DB_NAME
* DEV_DB_HOSTNAME
* DEV_DB_PORT

#### General

* NODE_ENV=development

### 2. Creating first Model (and Migration)

We will use `npm sequelize-cli model:generate` command to generate a new model. This command requires two options:

* `--name`, Name of the model
* `--attributes`, List of model attributes

Let's create a model named User.

`$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

This above will do following:

* Create a model file `user.js` in `src/database/models` folder
* Create a migration file with name like `XXXXXXXXXXXXXX-create-user.js` in `src/database/migrations` folder

According to [the docs](https://sequelize.org/v5/manual/migrations.html), sequelize will only use Model files, it's the table representation. On the other hand, the migration files are used to create our app’s table using the models that we created. the models contain the design for our application tables.

### 3. Running Migrations

Until this step, we haven't inserted anything into the database. We have just created required model and migration files for our first model User. Now to actually create that table in database you need to run `db:migrate` command. You have first of all make sure you have database created, otherwise create the database with the name you gave it in environment variable file by running:

`$ npx sequelize-cli db:create`

create tables by:

`$ npx sequelize-cli db:migrate`

This command will execute these steps:

* Will ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database
* Start looking for any migration files which haven't run yet. This is possible by checking `SequelizeMeta table`. In this case it will run `XXXXXXXXXXXXXX-create-user.js` migration, which we created in last step.
* Creates a table called `Users` with all columns as specified in its migration file.

### 4. Undoing Migrations

Now our table has been created and saved in database. With migration you can revert to old state by just running a command.

You can use `db:migrate:undo`, this command will revert most recent migration.

`$ npx sequelize-cli db:migrate:undo`

You can revert back to initial state by undoing all migrations with `db:migrate:undo:all` command. You can also revert back to a specific migration by passing its name in `--to` option.

`$ npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-user.js`

Refer to the [sequelize](https://sequelize.org/v5/) and [sequelize-cli](https://github.com/sequelize/cli/tree/master/docs) docs for more information.