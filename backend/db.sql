create DATABASE pizza_shop;


USE pizza_shop;


--USER
CREATE TABLE user(
    id INTEGER PRIMARY KEY auto_increment,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(100),
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Pizza
CREATE TABLE pizza(
    id INTEGER PRIMARY KEY auto_increment,
    name VARCHAR(50),
    details VARCHAR(1024),
    price FLOAT,
    image VARCHAR(100),
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT into pizza(name, details, price, image) VALUE
('Peppy Paneer', 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 459, 'peppy_paneer.png'),
('Farmhouse', 'Delightful combination of onion, capsicum, tomato & grilled mushroom', 459, 'farmhouse.webp' ),
('Smoked Chicken Gourmet-Pizza', 'Gourmet non-veg delight with bocconcini, juicy chicken, olives, bellpeppers & basil pesto.',629, 'SmokedChicken.webp');


--order
CREATE TABLE orderMaster(
    id INTEGER PRIMARY KEY auto_increment,
    userId INTEGER,
    totalAmount FLOAT,
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


--order details
CREATE TABLE orderDetails(
    id INTEGER PRIMARY KEY auto_increment,
    orderId INTEGER,
    pizzaId INTEGER,
    quantity INTEGER,
    totalAmount FLOAT,
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);