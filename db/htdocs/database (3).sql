
CREATE TABLE  account(
id_account  INT AUTO_INCREMENT PRIMARY KEY,
firstName VARCHAR (30), 
lastName VARCHAR (30),
login VARCHAR (30),
password VARCHAR (100),  
email VARCHAR (120),
telephone VARCHAR (9),
city VARCHAR (30),
street VARCHAR (30),
house VARCHAR (6),
apartment VARCHAR (6),
postalCode VARCHAR (6),
pesel VARCHAR (11),
personalId VARCHAR (8),
bankAccount VARCHAR (26),
birthDate  DATE   
);


CREATE TABLE  user_settings(
id_user_settings INT AUTO_INCREMENT PRIMARY KEY,
twoFactorAuthentication BOOLEAN ,
simulationMode BOOLEAN, 
emailNotifications BOOLEAN ,
wallpaper INT,
theme INT,
avatar INT,
isAdmin BOOLEAN
);

CREATE TABLE  wallets(
id_wallet INT AUTO_INCREMENT PRIMARY KEY,
accountBalance DOUBLE ,
isReal  BOOLEAN 
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
actionName VARCHAR (30) ,
image VARCHAR (90)
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
actionDate DATETIME,
value DOUBLE,
volume VARCHAR (50),
FOREIGN KEY (id_action) REFERENCES actions(id_action)
);

CREATE TABLE close_actions_history(
id_close_action_history INT AUTO_INCREMENT PRIMARY KEY,
id_action INT,
closeActionDate DATE ,
openValue DOUBLE,
closeValue DOUBLE,
volume VARCHAR (50),
FOREIGN KEY (id_action) REFERENCES actions(id_action)
);

CREATE TABLE favourite_actions(
id_favourite_action INT AUTO_INCREMENT PRIMARY KEY,
id_user INT,
id_action INT,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);