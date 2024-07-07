CREATE DATABASE IF NOT EXISTS task;
USE task;


DROP TABLE IF EXISTS category;

CREATE TABLE `category` ( `id` int(11) NOT NULL, `category_name` varchar(250) NOT NULL );
ALTER TABLE `category` ADD PRIMARY KEY (`id`);



DROP TABLE IF EXISTS tasks;

CREATE TABLE `tasks` ( `id` int(11) NOT NULL, `title` varchar(250) NOT NULL, `heading` varchar(250) NOT NULL, `content` text NOT NULL, `tagColor` varchar(250) NOT NULL, `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `category` int(11) NOT NULL );
ALTER TABLE `tasks` ADD PRIMARY KEY (`id`), ADD KEY `category` (`category`);
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;