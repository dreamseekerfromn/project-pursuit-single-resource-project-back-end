DROP DATABASE IF EXISTS thread_db_dev;
CREATE DATABASE thread_db_dev;

\c thread_db_dev;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(40) NOT NULL,
    user_password VARCHAR(40) NOT NULL,
    manager BOOLEAN
);

CREATE TABLE forums (
    thread_id SERIAL PRIMARY KEY,
    user_name TEXT REFERENCES users (user_name) ON DELETE CASCADE,
    time_stamp TEXT NOT NULL,
    thread_message TEXT NOT NULL,
    profile_pic TEXT,
    message_pic TEXT,
);
