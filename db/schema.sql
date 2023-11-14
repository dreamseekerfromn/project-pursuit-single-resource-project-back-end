DROP DATABASE IF EXISTS thread_db_dev;
CREATE DATABASE thread_db_dev;

\c thread_db_dev;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(40) UNIQUE NOT NULL,
    user_password VARCHAR(40) NOT NULL,
    manager BOOLEAN
);

CREATE TABLE posts (
    thread_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) ON DELETE CASCADE,
    user_name TEXT NOT NULL,
    time_stamp TEXT NOT NULL,
    thread_message TEXT NOT NULL,
    profile_pic TEXT,
    message_pic TEXT
);

CREATE TABLE replies (
    reply_id SERIAL PRIMARY KEY,
    thread_id INTEGER REFERENCES forums (thread_id) ON DELETE CASCADE,
    reply_user TEXT NOT NULL,
    reply_message TEXT NOT NULL,
    reply_timestamp TEXT
);

CREATE TABLE reply_pw (
    reply_id INTEGER REFERENCES replies (reply_id) ON DELETE CASCADE,
    pw_id SERIAL PRIMARY KEY,
    reply_pw TEXT NOT NULL
);
