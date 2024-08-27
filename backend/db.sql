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
('Peppy Paneer', 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 459, 'pizza1.jpg'),
('Farmhouse', 'Delightful combination of onion, capsicum, tomato & grilled mushroom', 459, 'pizza2.jpg' ),
('Veggie Paradise', 'The awesome foursome! Golden corn, black olives, capsicum, red paprika',629, 'pizza3.jpg'),
('Blazing Onion & Paprika', 'Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Dominos cheesy base.', 329, 'pizza4.avif'),
('Paneer Spice Supreme', 'Loaded with Paneer, Red Paprika, Olives and Jalapeno; The Best a No Onion No Garlic Pizza can get!', 549, 'pizza5.jpg'),
('Cheese n Corn', 'A delectable combination of sweet & juicy golden corn', 379, 'pizza6.jpg'),
('Chicken Pepperoni', 'A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese', 599, 'pizza7.jpeg'),
('Indi Tandoori Paneer', 'It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo', 549, 'pizza8.jpg'),
('Mexican Green Wave', 'Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno', 459, 'pizza9.jpg' );


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