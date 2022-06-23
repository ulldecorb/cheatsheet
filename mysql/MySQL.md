# MySQL speedrun cheatSheet
## Terminal Basic Commands
### show databases
```bash
show databases;
```   
### Create databases
```bash
create databases newdbname;
```
### Create table
```bash
create table newdbname(
id INT(11) NOT NULL AUTO_INCREMENT,
username VARCHAR(60) NOT NULL,
surname VARCHAR(60) NOT NULL,
adress VARCHAR(60),
PRIMARY KEY (id)
);   
```
### show table structure   
'''bash
describe newdbname
'''   
### Create data
```bash
INSERT INTO newdbname (username, surname, adress)
VALUES ('John', 'Doe', 'NoWhere');
```
### Read data 
#### All data
```bash
SELECT * FROM newdbname;
```
#### Selected data
```bash
SELECT username, surname FROM newbdname;

SELECT * FROM newdbname WHERE id = 1;   
SELECT * FROM newdbname WHERE username = 'John';
SELECT * FROM newdbname LIMIT 1;
```

### Update data
```bash
UPDATE newdbname SET username = 'John', adress = 'NoWhere 66'
WHERE id = 1;
```

### Delete data
```bash
DELETE FROM newdbname WHERE id = 1;
```
### Add data field
```bash
ALTER TABLE newdbname ADD email VARCHAR(30);
```
### Remove data field
````bash
ALTER TABLE newdbname DROP COLUMN email
```
