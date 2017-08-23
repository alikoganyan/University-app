#!/bin/sh

# If you would like to do some extra provisioning you may
# add any commands you wish to this file and they will
# be run after the Homestead machine is provisioned.

# Switch to project directory
cd Code/*;

# Install npm modules and compile sources
npm i && npm run dev;

# Create tables and populate database
php artisan migrate;
php artisan db:seed;
