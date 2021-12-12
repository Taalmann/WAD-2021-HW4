# WAD-2021-HW4

## Database info

Database's name is hw4
Password: postgresql
Dump file: hw4.sql

To create db on local computer, one has to copy hw4.sql to it and then run: 

CREATE DATABASE hw4;
(PostgreSQL put this dump file into his bin folder, so, may be, it will search from there for that.)

To dump the source database to a file, one has to run in terminal (needs to have admin rights for that):

    $ postgres -d sourcedb -f sourcedb.sql 

Or one can run (ie copy-paste the code) in pgAdmin Query editor 1) create_db.sql 2)create_table.sql 3) insert_data.sql

## Launching node server

    $ npm install
    $ nodemon app

    (
        installations also needed before launching $ nodemon app:

        check if Node is installed: $ node -v (should return version nr if installed)
        PostgreSQL needs to be downloaded and installed
        
        $ npm install express
        $ npm install lodash
        $ npm install pg
        $ npm install cors
        $ npm install -g nodemon
    )

view on localhost:3000
