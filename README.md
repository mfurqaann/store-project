# Next.js Project with FakeStoreAPI Integration

This is a simple e-commerce application built using [Next.js](https://nextjs.org/) and the [FakeStoreAPI](https://fakestoreapi.com/). The app fetches product data from FakeStoreAPI and displays it in a clean and user-friendly interface.

## Features

- Fetch product data from the FakeStoreAPI.
- Display a list of products with their images, titles, descriptions, and prices.
- Add products to the cart.
- Implement user login functionality.
- Responsive design for mobile and desktop views.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **FakeStoreAPI**: A free API to fetch mock e-commerce product data.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs with a focus on responsiveness and flexibility.

## Setup and Installation

To get started with this project, follow these steps:

### 1. Clone the repository:

```bash
https://github.com/mfurqaann/store-project.git
```
### 2. Install dependencies:

Navigate into the project directory and install the required dependencies.

```bash
cd store-project
npm install
```

### 3. Run the development server:

Start the development server with the following command:

```bash
npm run dev
```
The application will be accessible at http://localhost:3000.

## API Endpoints

The application interacts with the following FakeStoreAPI endpoints to fetch product data:

- **GET** `/products`: Fetches a list of all products.
- **GET** `/products/{id}`: Fetches a single product by its ID.
- **POST** `/auth/login`: Authenticates a user and returns a token for further requests.
- **GET** `/products/category/${category}`: Fetches a list of products belonging to a specific category.

For more information about the API, visit [FakeStoreAPI](https://fakestoreapi.com/).
