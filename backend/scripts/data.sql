INSERT INTO `category` (`id`, `category_name`) VALUES (1, 'toDo'), (2, 'inProgress'), (3, 'Done');

INSERT INTO `tasks` (`id`, `title`, `heading`, `content`, `tagColor`, `created_at`, `category`) VALUES (1, 'DESIGN SYSTEM', 'Hero selection', 'Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.', '#f50000', '2023-01-09 00:00:00', 2), (2, 'TYPOGRAPHY', 'Typography change', 'Modify typography and styling of text placed on 6 screens of the website design. Prepare a documentation.', '#00ff62', '2023-01-09 00:00:00', 1), (3, 'DEVELOPMENT', 'Fix bugs in the CSS code', 'Fix small bugs that are essential to prepare for the next release that will happen this quarter.', '#002aff', '2023-01-09 00:00:00', 3), (80, 'DEVELOPMENT', 'Implement design screens', 'Our designers created 6 screens for a website that needs to be implemented by our dev team.', '#e00b0b', '2023-01-09 00:00:00', 3);