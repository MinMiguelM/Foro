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

INSERT INTO TOPIC(ID,CONTENT,DATE,POINTS,TITLE,APPROVED,ID_FORUM,ID_USER,USERID,USERNAME,FORUMID) VALUES (1,'The Gman spoke in a peculiar way, but seeing the tech in action 13 years ago was very impressive. To me, at least!In the same year we had Vampire Bloodlines.',CURRENT_DATE,1337,'A recent history of facial animation',1,2,4,4,'user1',2)
INSERT INTO TOPIC(ID,CONTENT,DATE,POINTS,TITLE,APPROVED,ID_FORUM,ID_USER,USERID,USERNAME,FORUMID) VALUES (2,'This is our first update video for the Skyblivion project in 2017 but it’s a BIG one. Watch it here: <a href="https://www.youtube.com/watch?v=aJUfQK18cRg&feature=youtu.be">https://www.youtube.com/watch?v=aJUfQK18cRg&feature=youtu.be</a>',CURRENT_DATE,5438,'Skyblivion - a massive mod that brings Oblivion into the Skyrim engine',1,2,6,6,'user3',2)
INSERT INTO TOPIC(ID,CONTENT,DATE,POINTS,TITLE,APPROVED,ID_FORUM,ID_USER,USERID,USERNAME,FORUMID) VALUES (3,'Hi Reddit, 6 years ago (2011), I decided to make a dramatic life decision. I went to Chiba, Japan to do the full 4 years of college to get my Bachelors degree.',CURRENT_DATE,7643,'IamA Dropped everything and started a new life in Japan - Now I''m a partnered Twitch streamer who hosts events like Tokyo Game Show.',1,1,6,6,'user3',1)

INSERT INTO COMMENT(ID, APPROVED, CONTENT, DATE, POINTS, ID_TOPIC, ID_USER,IDPARENT, PARENT,USERID,USERNAME) VALUES (1, 1, 'Nice!', CURRENT_DATE, 3254, 2, 5,NULL, NULL,5,'user2')
INSERT INTO COMMENT(ID, APPROVED, CONTENT, DATE, POINTS, ID_TOPIC, ID_USER,IDPARENT, PARENT,USERID,USERNAME) VALUES (2, 1, 'Agreed', CURRENT_DATE, 206, 2, 4,   1, 1,4,'user1')
INSERT INTO COMMENT(ID, APPROVED, CONTENT, DATE, POINTS, ID_TOPIC, ID_USER,IDPARENT, PARENT,USERID,USERNAME) VALUES (3, 0, 'Chyado, do you find that being a handsome american in Japan is advantageous? I assume it would be with your large beautiful eyes and other ahem American gifts. Any advice for someone who wants to visit Japan?', CURRENT_DATE, 648, 3, 6,NULL, NULL,6,'user3')
INSERT INTO COMMENT(ID, APPROVED, CONTENT, DATE, POINTS, ID_TOPIC, ID_USER,IDPARENT, PARENT,USERID,USERNAME) VALUES (4, 1, 'I don''t think so.', CURRENT_DATE, -33, 2, 6,1, 1,6,'user3')

update SEQUENCE set SEQ_COUNT=1000