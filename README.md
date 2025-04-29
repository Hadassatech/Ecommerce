# Ecommerce Apis - NestJS

This repository hosts the source code for a feature-rich eCommerce application built with NestJS. It includes user authentication, product management, order processing, and role-based access control. The application uses JWT for authentication, Bcrypt for password hashing, Mysql for database, TypeORM, Nest Access Control.


## Features

- User and Admin roles
- JWT Authentication
- Password Hashing with Bcrypt
- CRUD Operations for Products, Categories, and Orders
- Login/Signup/Logout/Status
- Swagger API Documentation
- Role-Based Access Control
- Admin: Can create, edit, delete products and categories, and manage orders.
- User: Can browse products, add to cart, and place orders.
- Authenticated APIs for secured access
- REST APIs for interaction with the application
- Database: MySQL with TypeORM

## API Documentation
You can access the full API documentation via Swagger at the root URL of the deployed application:

## Relationships
- User to Cart: One-to-One relationship (A user can have one cart).
- Cart to CartItem: One-to-Many relationship (One cart can contain multiple cart items).
- Category to Product: One-to-Many relationship (One category can contain multiple products).
- Product to CartItem: One-to-Many relationship (One product can be added to multiple cart items).

## Summary of Entities and Their Relationships
- User
  - One cart

- Cart
  - One user
  - Many cart items

- Category
  - Many products

- Product
  - Many cart items
  - One category

- CartItem
  - One cart
  - One product






## Run Locally

Clone the project

```bash
    git clone 
```
Go to the project directory

```bash
    cd Ecommerce-Apis-Nestjs
```
Install dependencies

```bash
    npm install
```

Setup Environment Vaiables

```Make .env file and store environment Variables
DB_HOST=mysql
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=123456
DB_TYPE=mysql
DB_DATABASE=ecommerce_db
DB_NAME=ecommerce_db
JWT_SECRET=secret123
JWT_EXPIRES_IN=10m


 ```

Start the server

```bash
    docker compose up -d --build
```

## Tech Stack
* [Nestjs](https://nestjs.com/)
* [TypeORM](https://typeorm.io/)
* [MySQL](https://www.mysql.com/)
* [JWT Authentication](https://jwt.io/introduction)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Swagger for API Documentation](https://swagger.io/)

## Deployment

The application is deployed on Render.

