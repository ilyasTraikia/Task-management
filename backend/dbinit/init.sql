CREATE USER 'appuser'@'%' IDENTIFIED BY 'apppassword';
GRANT ALL PRIVILEGES ON *.* TO 'appuser'@'%';
FLUSH PRIVILEGES;



CREATE DATABASE IF NOT EXISTS task;
USE task;


DROP TABLE IF EXISTS category;

CREATE TABLE `category` ( `id` int(11) NOT NULL, `category_name` varchar(250) NOT NULL );
ALTER TABLE `category` ADD PRIMARY KEY (`id`);
INSERT INTO `category` (`id`, `category_name`) VALUES (1, 'toDo'), (2, 'inProgress'), (3, 'Done');



DROP TABLE IF EXISTS tasks;

CREATE TABLE `tasks` ( `id` int(11) NOT NULL, `title` varchar(250) NOT NULL, `heading` varchar(250) NOT NULL, `content` text NOT NULL, `tagColor` varchar(250) NOT NULL, `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `category` int(11) NOT NULL );
ALTER TABLE `tasks` ADD PRIMARY KEY (`id`), ADD KEY `category` (`category`);
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
INSERT INTO `tasks` (`id`, `title`, `heading`, `content`, `tagColor`, `created_at`, `category`) VALUES (1, 'DESIGN SYSTEM', 'Hero selection', 'Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.', '#f50000', '2023-01-09 00:00:00', 2), (2, 'TYPOGRAPHY', 'Typography change', 'Modify typography and styling of text placed on 6 screens of the website design. Prepare a documentation.', '#00ff62', '2023-01-09 00:00:00', 1), (3, 'DEVELOPMENT', 'Fix bugs in the CSS code', 'Fix small bugs that are essential to prepare for the next release that will happen this quarter.', '#002aff', '2023-01-09 00:00:00', 3), (80, 'DEVELOPMENT', 'Implement design screens', 'Our designers created 6 screens for a website that needs to be implemented by our dev team.', '#e00b0b', '2023-01-09 00:00:00', 3);




