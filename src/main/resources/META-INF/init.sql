INSERT INTO ROLE(ID,NAME) VALUES (1, 'ADMIN')
INSERT INTO ROLE(ID,NAME) VALUES (2, 'MOD')
INSERT INTO ROLE(ID,NAME) VALUES (3, 'USER')

INSERT INTO USERS(ID,PASSWORD,USERNAME,ROLE) VALUES (1, 'Passw0rd#', 'admin', 1)
INSERT INTO USERS(ID,PASSWORD,USERNAME,ROLE) VALUES (2, 'Passw0rd#', 'mod1', 2)
INSERT INTO USERS(ID,PASSWORD,USERNAME,ROLE) VALUES (3, 'Passw0rd#', 'mod2', 2)
INSERT INTO USERS(ID,PASSWORD,USERNAME,ROLE) VALUES (4, 'Passw0rd#', 'user1', 3)
INSERT INTO USERS(ID,PASSWORD,USERNAME,ROLE) VALUES (5, 'Passw0rd#', 'user2', 3)
INSERT INTO USERS(ID,PASSWORD,USERNAME,ROLE) VALUES (6, 'Passw0rd#', 'user3', 3)

INSERT INTO FORUM(ID,MODERATE,TITLE) VALUES(1, 1, 'IAmA')
INSERT INTO FORUM(ID,MODERATE,TITLE) VALUES(2, 0, 'Gaming')
INSERT INTO FORUM(ID,MODERATE,TITLE) VALUES(3, 0, 'Music')
INSERT INTO FORUM(ID,MODERATE,TITLE) VALUES(4, 0, 'Aww')
INSERT INTO FORUM(ID,MODERATE,TITLE) VALUES(5, 0, 'Funny')
INSERT INTO FORUM(ID,MODERATE,TITLE) VALUES(6, 0, 'Television')

INSERT INTO TOPIC(ID,CONTENT,DATE,POINTS,TITLE,ID_FORUM,ID_USER) VALUES (1,'The Gman spoke in a peculiar way, but seeing the tech in action 13 years ago was very impressive. To me, at least!In the same year we had Vampire Bloodlines.',CURRENT_DATE,1337,'A recent history of facial animation',2,4)
INSERT INTO TOPIC(ID,CONTENT,DATE,POINTS,TITLE,ID_FORUM,ID_USER) VALUES (2,'This is our first update video for the Skyblivion project in 2017 but it’s a BIG one. Watch it here: https://www.youtube.com/watch?v=aJUfQK18cRg&feature=youtu.be',CURRENT_DATE,5438,'Skyblivion - a massive mod that brings Oblivion into the Skyrim engine',2,6)

update SEQUENCE set SEQ_COUNT=1000