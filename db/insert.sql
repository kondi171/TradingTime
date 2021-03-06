INSERT INTO `account`(`firstName`, `lastName`, `login`, `password`, `email`, `telephone`, `city`, `street`, `house`, `apartment`, `postalCode`, `pesel`, `personalId`, `bankAccount`, `birthDate`) VALUES ('Bogdan','Ryjec','ryjecc31','Qaz@12345','bogdan.ryjec87@gemail.com','696707821','Zbąszynek','Górna','54B','-','10-241','91328719023','CFE23123','23143544521000000064252357','1991-05-01');
INSERT INTO `account`(`firstName`, `lastName`, `login`, `password`, `email`, `telephone`, `city`, `street`, `house`, `apartment`, `postalCode`, `pesel`, `personalId`, `bankAccount`,`birthDate`) VALUES ('Bruno','Beton','b_beton','Qaz@12345','beton_b998@gemail.com','885112354','Kielce','Szczecińska','2','6/3','13-324','89022157921','DDX47152','86392480323679541925375494','1989-02-21');
INSERT INTO `account`(`firstName`, `lastName`, `login`, `password`, `email`, `telephone`, `city`, `street`, `house`, `apartment`, `postalCode`, `pesel`, `personalId`, `bankAccount`,`birthDate`) VALUES ('Radosław','Kowal','r_kowal','Qaz@12345','r_kowal@wp.pl','231554978','Gdańsk','Bursztynowa','54','-','56-457','96103077845','ADS86152','10993073199760346336182155','1996-10-30');

INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('ALE','Allegro', '/images/actions/allegro-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('GNB','GETINOBLE', '/images/actions/getinoble-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('TPE','Tauron Polska Energia', '/images/actions/tauron-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('PGE','PGE Polska Grupa Energetyczna', '/images/actions/pge-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('SEN','Serinus Energy', '/images/actions/serinus-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('BML','Biomed-Lublin', '/images/actions/biomed-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('JSW','Jastrzębska Spółka Węglowa', '/images/actions/jsw-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('PGN','PGNiG', '/images/actions/pgn-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('PZU','PZU', '/images/actions/pzu-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('OPL','Orange Polska', '/images/actions/orange-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('URS','Ursus', '/images/actions/ursus-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('PKO','PKO', '/images/actions/pko-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('TRK','Trakcja SA', '/images/actions/trakcja-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('CIG','CI Games', '/images/actions/cig-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('CLE','Coal Energy', '/images/actions/coal-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('CDR','CD Projekt', '/images/actions/cdpsa-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('ZWC','Browar w Żywcu', '/images/actions/zywiec-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('DNP','Dino Polska', '/images/actions/dino-favicon.png');
INSERT INTO `actions`(`symbol`, `actionName`, `image`) VALUES ('PUE','ZPUE', '/images/actions/zpue-favicon.png');


INSERT INTO `wallets`(`accountBalance`, `isReal`) VALUES (8633.43,false);
INSERT INTO `wallets`(`accountBalance`, `isReal`) VALUES (230,true);

INSERT INTO `wallets`(`accountBalance`, `isReal`) VALUES (2045,false);
INSERT INTO `wallets`(`accountBalance`, `isReal`) VALUES (0,true);

INSERT INTO `wallets`(`accountBalance`, `isReal`) VALUES (9542.11,false);
INSERT INTO `wallets`(`accountBalance`, `isReal`) VALUES (1254.44,true);


INSERT INTO `user_settings`( `twoFactorAuthentication`, `simulationMode`, `emailNotifications`, `wallpaper`, `theme`, `avatar`,`isAdmin`) VALUES (false,true,true,1,1,1,true);
INSERT INTO `user_settings`( `twoFactorAuthentication`, `simulationMode`, `emailNotifications`, `wallpaper`, `theme`, `avatar`,`isAdmin`) VALUES (true,false,false,2,2,3,false);
INSERT INTO `user_settings`( `twoFactorAuthentication`, `simulationMode`, `emailNotifications`, `wallpaper`, `theme`, `avatar`,`isAdmin`) VALUES (false,false,false,3,2,1,false);

INSERT INTO `users`(`id_virtual_wallet`, `id_wallet`, `id_account`, `id_user_settings`, `all_information_provided`) VALUES (1,2,1,1,1);
INSERT INTO `users`(`id_virtual_wallet`, `id_wallet`, `id_account`, `id_user_settings`, `all_information_provided`) VALUES (3,4,2,2,1);
INSERT INTO `users`(`id_virtual_wallet`, `id_wallet`, `id_account`, `id_user_settings`, `all_information_provided`) VALUES (5,6,3,3,1);


INSERT INTO `stock`(`id_wallet`, `id_action`, `amount`) VALUES (1,1,10);
INSERT INTO `stock`(`id_wallet`, `id_action`, `amount`) VALUES (1,16,5);
INSERT INTO `stock`(`id_wallet`, `id_action`, `amount`) VALUES (1,3,3);
INSERT INTO `stock`(`id_wallet`, `id_action`, `amount`) VALUES (1,6,9);
INSERT INTO `stock`(`id_wallet`, `id_action`, `amount`) VALUES (2,6,3);
INSERT INTO `stock`(`id_wallet`, `id_action`, `amount`) VALUES (3,1,30);

### Allegro ###

INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-12',71,73.69,'1377603');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-13',73.99,72.68,'1297777');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-14',72.6,73.49,'762177');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-15',73,72.99,'549774');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-16',73,73.6,'822218');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-19',73.87,72.9,'1217846');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-20',72.26,73.9,'936733');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-21',73.8,73.15,'1044873');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-22',72.73,73.71,'721542');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-23',73.46,73.15,'323216');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-26',73.14,72.9,'626559');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-27',72.72,71.35,'644794');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-28',70.91,68.84,'1876598');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-29',68.59,67.75,'1290815');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-7-30',67.42,66.1,'1757923');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-2',66.25,66.1,'788318');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-3',66.28,67.12,'1159433');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-4',67,66.53,'662849');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-5',67.63,64.19,'2268288');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-6',64.5,63.87,'1859196');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-9',63.75,64.15,'923115');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-10',64.15,62.88,'1176235');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-11',63,62.19,'896542');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-12',62.1,62.5,'1051563');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-13',62.6,63.81,'842149');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-16',63.86,62,'792614');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-17',62.3,63.37,'1027652');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-18',63.42,64.19,'627757');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-19',64.38,65.01,'875960');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-20',65,65,'371254');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-23',65.1,65,'318720');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-24',65.2,65.65,'623158');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-25',65.65,67.45,'792214');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-26',67.5,67.85,'625375');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-27',68.25,67.5,'628515');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-30',67.5,69.25,'537827');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-8-31',69.38,71.01,'1377589');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-1',71,72.75,'1029314');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-2',72.7,71.35,'767552');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-3',71.02,69.25,'693674');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-6',68.92,70.65,'349274');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-7',70.4,68.38,'983360');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-8',68.3,66.88,'743911');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-9',66.61,64.88,'1124457');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-10',65,63.46,'1113796');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-13',63.61,63.45,'1096609');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-14',63.35,62.1,'1446049');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-15',62,62.3,'1623982');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-16',62.58,62.72,'1115320');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-17',63,64.25,'2784270');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-20',63.8,62.37,'980931');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-21',62.38,62.42,'1258552');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-22',63.17,62.02,'1237773');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-23',62.46,61.9,'1352873');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-24',61.8,59.64,'1224358');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-27',59.6,59.83,'1724518');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-28',59.53,58.41,'1786841');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-29',58.2,58.47,'1306420');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-9-30',59.1,57.85,'2041887');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-1',57.9,58.09,'1337982');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-4',57.9,56.9,'2176919');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-5',56.9,56.59,'2031084');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-6',57.1,55.5,'1312088');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-7',55.51,55.15,'1892994');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-8',55.8,58.79,'2758928');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-11',59,58.25,'1430284');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-12',57.1,54.5,'6633579');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-13',55,51.5,'8838503');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-14',51.88,50.98,'5409374');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-15',51.15,50.69,'3801772');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-18',50.71,50.8,'1898081');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-19',50.76,49.295,'3355915');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-20',49.05,49.3,'2023318');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-21',49.3,49.48,'2404902');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-22',49.6,50.35,'2007962');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-25',50.16,48.67,'1885046');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-26',48.925,46.87,'3643519');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-27',46.8,47.36,'4366924');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-28',47.36,45.95,'2208812');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-10-29',45.96,45.12,'2509683');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-2',45.5,44.16,'3853429');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-3',44.175,43.5,'2048406');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-4',43.97,44.5,'2878602');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-5',48.5,49.25,'9797926');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-8',49.8,47.695,'2804676');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-9',48,42.34,'7836602');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-10',42.315,42.3,'3731965');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-12',43,40.8,'5470764');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-15',41,41.7,'2555880');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-16',41.95,44.03,'2363926');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-17',44.195,42.71,'2886986');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-18',42.98,44.965,'4245181');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-19',45,45.4,'4209067');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-22',45.5,43.085,'2686352');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-23',43,43.25,'1765184');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-24',43.56,40.37,'3535366');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-25',40.745,40.35,'2132181');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-26',39.5,42,'6245426');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-29',42.63,40.94,'2754685');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-11-30',40.52,39.995,'3999630');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-1',40.08,38.48,'4141382');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-2',38.245,36.385,'5334331');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-3',36.5,36.545,'3618424');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-6',36.54,34.725,'6275085');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-7',35,37.265,'4647059');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-8',37.65,37.975,'2491227');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-9',37.94,39.16,'4258328');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-10',38.845,38,'1593265');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-13',38.1,38,'1981626');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-14',38.435,36.485,'2410495');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-15',36.5,34.77,'2755413');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-16',35.3,37.25,'3077300');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-17',36.79,37.915,'4946422');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-20',37.5,39.225,'2128895');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-21',39.5,39.375,'1850335');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-22',39.5,41.35,'2043342');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-23',41.61,38.78,'3061858');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-27',38.78,40.4,'1682120');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-28',40.18,39.77,'1556840');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (1,'2021-12-29',39.77,39.8,'817664');



### CDR ###

INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-12',190.2,201.85,'1032701');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-13',202.5,203.45,'417145');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-14',203,195.94,'329109');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-15',195.98,194.92,'400152');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-16',194.94,194.14,'279128');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-19',193.6,186.3,'508610');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-20',186.86,187.6,'399604');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-21',188,184.48,'415891');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-22',187.3,186.04,'254135');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-23',187.5,186.28,'219461');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-26',188.9,184,'338742');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-27',184.42,183.22,'317100');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-28',183.22,183.78,'669129');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-29',186,184,'540016');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-7-30',182.66,184.74,'307103');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-2',183.48,175,'828778');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-3',177,175.52,'411366');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-4',175.52,175.1,'244126');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-5',175.88,178.24,'290573');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-6',178.3,174.12,'181795');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-9',175,172,'230117');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-10',172.6,166.16,'527025');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-11',166.2,167.36,'226485');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-12',167,166.86,'175533');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-13',167.6,168.9,'197493');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-16',168.9,165,'279203');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-17',165.5,171.02,'396754');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-18',170.14,166.6,'214894');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-19',167.08,168.3,'192913');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-20',168.28,165.74,'412701');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-23',166.16,165.22,'191400');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-24',166.22,165.78,'178932');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-25',165.72,165.58,'229919');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-26',164.98,168.04,'460051');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-27',168.22,167.78,'205621');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-30',167.88,167.62,'440313');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-8-31',167.78,169.32,'718032');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-1',171,170.36,'438621');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-2',180,189.98,'1619048');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-3',189.98,187.02,'426207');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-6',187.34,188,'298438');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-7',186.9,185,'424729');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-8',185,178.5,'466063');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-9',177.9,180.68,'325655');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-10',180.7,181.42,'307768');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-13',182.26,187.94,'489358');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-14',189,188.78,'427519');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-15',187.4,190.86,'350844');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-16',191,196.36,'597918');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-17',197,195,'1079275');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-20',192.12,184.42,'384305');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-21',184.2,184.8,'367099');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-22',186.2,190.1,'443804');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-23',191,193,'256997');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-24',192.74,184.02,'363197');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-27',185.4,181.18,'295818');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-28',180.3,183.82,'230900');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-29',184,184.1,'137603');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-9-30',186.1,191.8,'364149');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-1',190.5,189.54,'433807');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-4',188.12,184.1,'423246');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-5',184,194,'516587');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-6',192.7,193.14,'375756');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-7',190,194.1,'494755');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-8',193.88,194.86,'253153');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-11',194.76,195.2,'272269');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-12',195.16,203.9,'618027');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-13',203.05,208.85,'402533');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-14',208.8,200,'577646');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-15',200.8,188.12,'963877');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-18',188.8,189.06,'334339');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-19',189.1,197.48,'303807');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-20',197,193.6,'209050');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-21',183.42,181,'1260413');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-22',181,184.28,'289500');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-25',185.5,187.2,'222791');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-26',187.26,182,'215290');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-27',181.82,178.02,'348705');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-28',178.98,172.82,'370009');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-10-29',174.1,173.88,'383668');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-2',176.2,173.42,'323189');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-3',173.82,173.6,'406803');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-4',174.02,181.1,'281405');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-5',182,178.82,'206708');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-8',178.82,179,'85696');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-9',178.4,181.7,'194948');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-10',182.26,180.74,'148479');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-12',182.5,184.8,'305790');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-15',184.72,183.32,'257870');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-16',184,183,'247348');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-17',184.5,179.94,'198916');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-18',179.92,181.34,'181267');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-19',180,189,'463903');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-22',189,194.48,'604454');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-23',194,201,'959888');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-24',199.88,186.54,'556521');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-25',189,187.08,'194865');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-26',185,185.52,'553810');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-29',187,191.52,'538882');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-11-30',180,184.5,'975100');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-1',183.54,185,'450969');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-2',182.5,180,'361135');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-3',181.58,181.46,'621878');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-6',182.1,184,'278651');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-7',184.9,185.58,'364939');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-8',185.4,186.2,'249958');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-9',184,180.14,'319071');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-10',179.78,178.54,'147386');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-13',178.66,182.62,'266656');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-14',182.62,172.92,'447537');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-15',173.2,179,'370788');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-16',183.5,183.96,'464350');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-17',182.72,188.96,'752662');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-20',184.24,193.04,'408734');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-21',191,191.36,'220562');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-22',191.4,197.84,'334359');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-23',197.84,194.58,'224342');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-27',191.18,195.28,'301036');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-28',194,190.5,'260010');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (16,'2021-12-29',189.5,190.12,'162686');



### PZU ###

INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-12',33.916,33.623,'1478600');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-13',33.623,33.852,'2021754');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-14',33.989,34.401,'1843183');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-15',34.419,34.438,'2214158');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-16',34.401,34.456,'1342039');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-19',34.365,33.505,'1812220');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-20',33.505,33.358,'1196979');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-21',33.486,34.337,'2747902');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-22',34.355,33.715,'1189968');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-23',33.852,33.779,'949335');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-26',33.871,33.752,'1315924');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-27',33.587,33.761,'1040345');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-28',33.852,34.346,'2668898');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-29',34.346,34.31,'1096079');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-7-30',34.099,34.401,'1558349');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-2',34.484,34.392,'1070458');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-3',34.493,34.127,'1460641');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-4',34.246,35.014,'1914025');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-5',35.124,35.042,'1240617');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-6',35.051,34.941,'888883');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-9',35.032,35.042,'939553');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-10',35.133,35.499,'1468419');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-11',35.499,36.011,'2499371');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-12',36.048,36.487,'2088964');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-13',36.487,36.542,'1470417');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-16',36.423,36.387,'1277975');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-17',36.551,36.624,'1449405');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-18',36.725,37.146,'2121350');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-19',36.917,36.579,'1604183');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-20',36.579,36.487,'552668');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-23',36.597,36.789,'970571');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-24',36.844,36.771,'935009');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-25',36.771,36.826,'754082');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-26',37.027,36.643,'1311473');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-27',36.707,37.054,'1548907');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-30',37.146,37.054,'1372253');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-8-31',37.054,37.146,'2701690');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-1',37.146,37.228,'1903288');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-2',37.237,37.283,'1994293');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-3',37.311,37.393,'1527234');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-6',37.402,38.107,'1911424');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-7',38.107,37.878,'2142485');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-8',37.887,37.677,'2419106');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-9',37.603,37.457,'2309113');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-10',37.512,37.256,'3122821');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-13',37.237,37.64,'3588086');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-14',38,38.49,'3499071');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-15',38.5,37.99,'2822285');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-16',37.91,38.07,'2735974');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-17',38.1,37.72,'3818341');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-20',37.5,36.35,'2637435');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-21',36.3,36.63,'2131922');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-22',36.92,37.22,'1413601');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-23',37.49,37.01,'1754444');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-24',37.04,36.63,'1831435');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-27',36.8,36.65,'1416321');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-28',36.6,36.13,'1368093');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-29',36.1,36.42,'1106452');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-9-30',36.62,36.5,'2975445');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-1',36.32,36.92,'1863607');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-4',37,37.2,'2733349');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-5',37.4,37.51,'1637492');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-6',37.51,37.61,'2821780');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-7',37.87,38.48,'4810808');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-8',38.45,39,'3324561');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-11',39,39.7,'3031319');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-12',39.5,40.05,'5198418');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-13',40.05,40.05,'7178828');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-14',40.05,40.4,'4799951');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-15',40.46,39.65,'2694267');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-18',39.87,40.2,'2305530');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-19',40.2,40.04,'1144154');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-20',39.97,39.55,'1706295');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-21',39.53,39.7,'2069335');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-22',39.65,39.08,'768243');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-25',39.03,39.38,'1253469');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-26',39.47,40.24,'2105362');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-27',40.01,39.52,'1300795');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-28',39.5,39.6,'1311926');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-10-29',39.4,39.9,'1823122');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-2',39.9,40.75,'3669602');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-3',40.85,39.9,'1647375');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-4',40.05,40.92,'1921826');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-5',40.62,40.55,'1109781');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-8',40.55,40.57,'1092213');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-9',40.57,40.32,'2310336');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-10',40.25,39.55,'2262078');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-12',39.8,39.7,'1847438');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-15',39.83,39.9,'2075334');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-16',39.83,39.63,'2390305');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-17',39.63,39.4,'2475501');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-18',39.4,37.55,'4900871');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-19',37.55,35.88,'4483992');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-22',35.89,35.5,'2501239');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-23',35.41,36.01,'3160937');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-24',36.48,35.6,'1745474');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-25',35.72,35.76,'923332');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-26',35.1,34.96,'5379573');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-29',35,35.2,'2250207');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-11-30',35.01,35.76,'3233818');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-1',36.05,36.38,'2303114');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-2',36.38,37.01,'2412230');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-3',37.15,36.68,'2365808');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-6',36.68,36.65,'1063561');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-7',36.88,37.56,'3175601');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-8',37.6,37.09,'2285572');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-9',37,37.08,'1627067');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-10',37.06,36.79,'579358');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-13',36.7,36.89,'1267627');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-14',36.89,36.81,'1784057');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-15',36.79,35.81,'2092491');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-16',36.02,35.7,'2275194');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-17',35.5,35.71,'4521420');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-20',35.4,35.12,'1374921');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-21',35.14,34.82,'1099150');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-22',34.9,34.8,'1540052');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-23',34.9,34.98,'1212934');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-27',35,34.85,'818503');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-28',34.85,35.61,'1712800');
INSERT INTO `close_actions_history`(`id_action`, `closeActionDate`, `openValue`, `closeValue`, `volume`) VALUES (9,'2021-12-29',35.61,35.57,'1047456');





INSERT INTO `favourite_actions`(`id_user`, `id_action`) VALUES (1,1);
INSERT INTO `favourite_actions`(`id_user`, `id_action`) VALUES (1,16);
INSERT INTO `favourite_actions`(`id_user`, `id_action`) VALUES (1,15);
INSERT INTO `favourite_actions`(`id_user`, `id_action`) VALUES (2,13);
INSERT INTO `favourite_actions`(`id_user`, `id_action`) VALUES (2,9);
INSERT INTO `favourite_actions`(`id_user`, `id_action`) VALUES (3,3);




INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (1,'2021-07-12 14:00','42.00',3000);
INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (2,'2021-07-12 14:00','22.00',213);
INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (3,'2021-07-12 14:00','2.80',41);
INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (3,'2021-07-12 15:00','3.00',32);
INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (2,'2021-07-12 15:00','25.00',124);
INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (1,'2021-07-12 15:00','44.32',2809);
INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (2,'2021-07-12 16:00','26.41',198);
INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (3,'2021-07-12 16:00','1.99',77);
INSERT INTO `today_actions_history`(`id_action`, `actionDate`, `value`, `volume`) VALUES (1,'2021-07-12 17:00','41.83',3120);


SELECT * FROM today_actions_history tt INNER JOIN (SELECT id_action, MAX(actionDate) AS MaxDateTime FROM today_actions_history GROUP BY id_action) groupedtt ON tt.id_action = groupedtt.id_action AND tt.actionDate = groupedtt.MaxDateTime

SELECT tt.id_action, tt.value, actions.symbol, actions.image, tt.volume, tt.actionDate FROM actions, today_actions_history tt INNER JOIN (SELECT id_action, MAX(actionDate) AS MaxDateTime FROM today_actions_history GROUP BY id_action) groupedtt ON tt.id_action = groupedtt.id_action AND tt.actionDate = groupedtt.MaxDateTime WHERE tt.id_action = actions.id_action



######


SELECT
	tah.id_action, 
    tah.value, 
    actions.symbol, 
    actions.image, 
    tah.volume, 
    tah.actionDate, 
    cah.closeValue, 
    cah.openValue, 
    cah.closeActionDate    
FROM 
    today_actions_history tah
    
INNER JOIN actions ON tah.id_action = actions.id_action

INNER JOIN close_actions_history cah ON tah.id_action = cah.id_action

INNER JOIN (SELECT id_action, MAX(actionDate) AS MaxDateTime FROM today_actions_history GROUP BY id_action) groupedtah ON tah.id_action = groupedtah.id_action AND tah.actionDate = groupedtah.MaxDateTime 

INNER JOIN (SELECT id_action, MAX(closeActionDate) AS MaxDateTime FROM close_actions_history GROUP BY id_action) groupedcah ON cah.id_action = groupedcah.id_action AND cah.closeActionDate = groupedcah.MaxDateTime