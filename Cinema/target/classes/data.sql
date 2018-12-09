insert into user (user_name, password, enabled, role) values ('admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ADMIN');
insert into user (user_name,  enabled, role) values ('guest', true, 'GUEST');
insert into user (user_name,  password, enabled, role) values ('user1', '$2a$10$8VTK71JiOs1XHGbkc4SyMug17zOFhFg5qgBikxsOklPtNFN2mBcSm', true, 'USER'); 
insert into user (user_name,  password, enabled, role) values ('user2', '$2a$10$/D8sPKC/AlxDWcgEMD0SS.v9gW3hbCevJFh6ZGNmIFX67AQP4eJ2C', true, 'USER'); 

insert into movie (title, director, plot, date_of_registration, duration_in_min) values('Peppermint: A bosszu angyala', 'Pierre Morel', 'elskadjfaslfjkeaesflj',  CURRENT_TIMESTAMP(), 101);
insert into movie (title, director, plot, date_of_registration, duration_in_min) values('Kereses', 'Aneesh Chaganty', 'elskadjfaslfjkeaesflj',  CURRENT_TIMESTAMP(), 102);


insert into room (room_name, number_of_rows, number_of_columns, available_places) values('16', 8, 10, 79);
insert into room (room_name, number_of_rows, number_of_columns, available_places) values('20', 5, 8, 20);

insert into screening (movie_title, room_name, start_time, movie_duration_in_min, room_id) values ('Peppermint: A bosszu angyala', '20', CURRENT_TIMESTAMP(), 101, 2);

insert into chair (user_id, room_name, movie_title, row_number, column_number, customer_name, customer_email, ticket_type) values(2, '20', 'Peppermint: A bosszu angyala', 3, 4, 'Kiss Zoltan', 'zoltan.kiss@gmail.com', 'STUDENT');
insert into chair (user_id, room_name, movie_title, row_number, column_number, customer_name, customer_email, ticket_type) values(2, '20', 'Peppermint: A bosszu angyala', 3, 5, 'Kiss Zoltan', 'zoltan.kiss@gmail.com', 'ADULT');

insert into movie_chairs (movies_id, chairs_id) values(2, 1);
insert into movie_chairs (movies_id, chairs_id) values(2, 2);
