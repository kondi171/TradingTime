
CREATE TABLE  account(
id_account  INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR (30), 
last_name VARCHAR (30),
login VARCHAR (30),
password VARCHAR (100),  
mail VARCHAR (120),
phone VARCHAR (9),
city VARCHAR (30),
street VARCHAR (30),
house_number VARCHAR (6),
flat_number VARCHAR (6),
postal_code VARCHAR (6),
pesel VARCHAR (11),
personal_id_number VARCHAR (8),
bank_account VARCHAR (26),
date_of_birth   DATE
);


CREATE TABLE  user_settings(
id_user_settings INT AUTO_INCREMENT PRIMARY KEY,
2FA BOOLEAN ,
simulation BOOLEAN, 
email_notifications BOOLEAN ,
wallpaper INT,
theme INT,
avatar INT,
is_admin BOOLEAN
);

CREATE TABLE  wallets(
id_wallet INT AUTO_INCREMENT PRIMARY KEY,
account_balence DOUBLE ,
is_real  BOOLEAN 
);

CREATE TABLE  users(
id_user INT AUTO_INCREMENT PRIMARY KEY,
id_virtual_wallet INT,
id_wallet INT, 
id_account INT, 
id_user_settings INT,
all_information_provided BOOLEAN,
FOREIGN KEY (id_virtual_wallet) REFERENCES wallets (id_wallet),
FOREIGN KEY (id_wallet) REFERENCES wallets (id_wallet),
FOREIGN KEY (id_account) REFERENCES account (id_account),
FOREIGN KEY (id_user_settings) REFERENCES user_settings (id_user_settings)
);


CREATE TABLE actions(
id_action INT AUTO_INCREMENT PRIMARY KEY,
symbol VARCHAR (30) ,
name VARCHAR (30) 
);

CREATE TABLE  history(
id_history INT AUTO_INCREMENT PRIMARY KEY,
id_wallet INT, 
id_action INT, 
transfer_amount DOUBLE,
FOREIGN KEY (id_wallet) REFERENCES wallets(id_wallet),
FOREIGN KEY (id_action) REFERENCES actions(id_action)
);

CREATE TABLE stock(
id_stock INT AUTO_INCREMENT PRIMARY KEY,
id_wallet INT, 
id_action INT, 
amount INT ,
FOREIGN KEY (id_wallet) REFERENCES wallets(id_wallet),
FOREIGN KEY (id_action) REFERENCES actions(id_action)
);


CREATE TABLE today_actions_history(
id_action_history INT AUTO_INCREMENT PRIMARY KEY,
id_action INT,
action_date DATETIME,
exchange DOUBLE,
volume VARCHAR (50),
FOREIGN KEY (id_action) REFERENCES actions(id_action)
);

CREATE TABLE close_actions_history(
id_close_action_history INT AUTO_INCREMENT PRIMARY KEY,
id_action INT,
close_action_date DATE ,
open_value DOUBLE,
close_value DOUBLE,
volume VARCHAR (50),
FOREIGN KEY (id_action) REFERENCES actions(id_action)
);

CREATE TABLE favourite_actions(
id_favourite_action INT AUTO_INCREMENT PRIMARY KEY,
id_user INT,
id_action INT,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);