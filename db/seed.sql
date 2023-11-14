\c thread_db_dev;

INSERT INTO users (user_name, user_password, manager)
VALUES
('rolling_stones', 'abc1234', false),
('david_bowie', 'asdf1234', false),
('manager', 'password', true);

INSERT INTO posts (user_name, time_stamp, thread_message, profile_pic, message_pic)
VALUES 
('manager', '1699215839', 'Hello World!', '', '');
