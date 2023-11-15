\c thread_db_dev;

INSERT INTO users (user_name, user_password, manager)
VALUES
('rolling_stones', 'abc1234', false),
('david_bowie', 'asdf1234', false),
('manager', 'password', true);

INSERT INTO posts (user_name, time_stamp, thread_message, profile_pic, message_pic)
VALUES 
('Atsiklidis', 1700325839, 'I am the first to ever post on the POSTR app. Firsts','https://avatars.githubusercontent.com/u/129804495?v=4', ''),
('SungY', 1700315839, 'Hi, I am the second ever to post on POSTR! WOOT WOOT!', 'https://avatars.githubusercontent.com/u/10932336?v=4', ''),
('NaturePhotographer', 1697425839, 'Capturing the beauty of nature through my lens. #Photography', 'https://avatars.githubusercontent.com/u/43210987?v=4', 'https://example.com/naturephotographer_pic.jpg'),
('CoffeeEnthusiast', 1697335839, 'Exploring local coffee shops and their unique blends. ☕ #CoffeeLover', 'https://avatars.githubusercontent.com/u/32109876?v=4', 'https://example.com/coffeeenthusiast_pic.jpg'),
('TravelExplorer', 1697245839, 'Embarking on a journey to discover hidden gems around the world. 🌏 #Travel', 'https://avatars.githubusercontent.com/u/21098765?v=4', 'https://example.com/travelexplorer_pic.jpg'),
('TechInnovator', 1697155839, 'Working on groundbreaking innovations in the tech world. 🚀 #TechInnovation', 'https://avatars.githubusercontent.com/u/10987654?v=4', 'https://example.com/techinnovator_pic.jpg'),
('FoodieAdventures', 1697065839, 'Exploring diverse cuisines and flavors. A culinary adventure! 🍜 #Foodie', 'https://avatars.githubusercontent.com/u/98765432?v=4', 'https://example.com/foodieadventures_pic.jpg'),
('FitnessJunkie', 1696975839, 'Pushing my limits in every workout. No pain, no gain! 💪 #Fitness', 'https://avatars.githubusercontent.com/u/87654321?v=4', 'https://example.com/fitnessjunkie_pic.jpg'),
('BookLoverReviews', 1696885839, 'Reviewing the latest books and sharing recommendations. 📖 #BookReview', 'https://avatars.githubusercontent.com/u/76543210?v=4', 'https://example.com/bookloverreviews_pic.jpg'),
('ArtisticSoul', 1696795839, 'Expressing my soul through art. Every stroke tells a story. 🎨 #Art', 'https://avatars.githubusercontent.com/u/65432109?v=4', 'https://example.com/artisticsoul_pic.jpg'),
('MusicHarmony', 1696705839, 'Creating harmonies and melodies that resonate with the heart. 🎶 #Music', 'https://avatars.githubusercontent.com/u/54321098?v=4', 'https://example.com/musicharmony_pic.jpg'),
('DIYCraftsman', 1696615839, 'Crafting unique DIY projects. Handmade with love! ✂️ #DIYCrafts', 'https://avatars.githubusercontent.com/u/43210987?v=4', 'https://example.com/diycraftsman_pic.jpg'),
('MotivationalVibes', 1696525839, 'Spreading positive vibes and motivation. You can achieve anything! 💫 #Motivation', 'https://avatars.githubusercontent.com/u/32109876?v=4', 'https://example.com/motivationalvibes_pic.jpg'),
('FashionForward', 1696435839, 'Setting fashion trends and embracing unique styles. 👗 #FashionForward', 'https://avatars.githubusercontent.com/u/21098765?v=4', 'https://example.com/fashionforward_pic.jpg'),
('GamerRealm', 1696345839, 'Immersing myself in the gaming realm. Victory awaits! 🎮 #Gamer', 'https://avatars.githubusercontent.com/u/10987654?v=4', 'https://example.com/gamerrealm_pic.jpg');