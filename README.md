# Strapi application

A quick description of your strapi application


# Edit Permissions 

https://admin.dongamers.epitomecoders.com/admin/plugins/users-permissions/roles



Incoming Server: dash.herosite.pro 
IMAP Port: 143 POP3 Port: 110
Outgoing Server: dash.herosite.pro 
SMTP Port: 587

## For Dynamic commands
set global innodb_large_prefix = ON;
Query OK, 0 rows affected (0.00 sec)

set global innodb_file_per_table = ON;
Query OK, 0 rows affected (0.00 sec)

set global innodb_file_format = Barracuda;
Query OK, 0 rows affected (0.00 sec)

SET GLOBAL innodb_default_row_format = 'DYNAMIC';


## Innodb settings to bypass error of max size 737
innodb-file-format=barracuda
innodb-file-per-table=ON
innodb-large-prefix=ON
## Above 3 didnot work so i added below
innodb_default_row_format = 'DYNAMIC'
