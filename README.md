# Product Entry CRUD API for E-commerce

This repository contains a CRUD (Create, Read, Update, Delete) API for managing product entries in an e-commerce application. The API is built using Node.js, Express, and MongoDB.

## Table of Contents
- [Overview](#overview)
- [API Endpoints](#api-endpoints)
  - [Get All Products](#get-all-products)
  - [Get Product by ID](#get-product-by-id)
  - [Create a New Product](#create-a-new-product)
  - [Update a Product](#update-a-product)
  - [Delete a Product](#delete-a-product)
- [Request Examples (Postman)](#request-examples-postman)
- [Response Format](#response-format)
- [Running the API](#running-the-api)
- [Contributing](#contributing)
- [License](#license)

## Overview

The API allows users to perform CRUD operations on product entries. Each product can have multiple variations (designs) with dynamic specifications and attributes.

## API Endpoints

### Get All Products

- **Endpoint**: `/products`
- **Method**: `GET`
- **Description**: Fetch all products from the database.

### Get Product by ID

- **Endpoint**: `/products/:id`
- **Method**: `GET`
- **Description**: Fetch a specific product by its unique ID.

### Create a New Product

- **Endpoint**: `/products`
- **Method**: `POST`
- **Description**: Create a new product entry.
- **Request Body**: JSON format with product details.

### Update a Product

- **Endpoint**: `/products/:id`
- **Method**: `PUT`
- **Description**: Update an existing product by its ID.
- **Request Body**: JSON format with updated product details.

### Delete a Product

- **Endpoint**: `/products/:id`
- **Method**: `DELETE`
- **Description**: Delete a product by its ID.

## Request Examples (Postman)

### Create a New Product

- **Method**: `POST`
- **URL**: `http://localhost:3000/products`
- **Body**: JSON format with product details.
  ```json
  {
    // ... (your product details here)
  }

### Response Format
The API responds will be in JSON format. 



# Running the API

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the server: `npm run serve`

Make sure to have MongoDB installed and running.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

Owner @ayushhh321
