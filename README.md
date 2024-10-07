# Frontend of Next.js Product Search and Authentication Application 

This project is a Next.js web application that allows users to search for products, view them in a paginated manner, and authenticate using login/signup functionalities. The application uses JWT for token-based authentication and integrates Tailwind CSS for styling.

## Features

- **User Authentication**: 
  - Login and Signup pages with token-based authentication.
  - Users data are managed using a global context.(useContext)

- **Product Search**: 
  - Search functionality to filter products based on the product name.
  - Paginated product display with next and previous controls.
  - Product details including title, image, and price.

- **Tailwind CSS Integration**: 
    - Tailwind Css for responsive frontend

## Technologies Used

- **Next.js**: React-based framework for building fast and scalable web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Context API**: Manage global state for authentication tokens.
- **Fetch API**: Fetch product and user data from external APIs.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v12.x or later).
- **npm**: Comes with Node.js, required to install dependencies.

### Installation

1. **Download the zip folder of Repository**
    - Download the zip folder 
    - Extract the folder
    - Open terminal inside root folder

2. **Install dependencies**:
    ```bash
    npm install
    ```


3. **Run the development server**:
    ```bash
    npm run dev
    ```
    Navigate to `http://localhost:3000` in your browser to see the application.

### File Structure

```
├── app
│   ├── api
│   ├── login
│   ├── signup
│   ├── styles
│   │   └── globals.css     # Global styles
│   ├── utils
│   │   └── authContext.js  # Handles authentication state management
│   ├── layout.js           # Main layout with meta information
│   └── page.js            # Main page with product search and pagination
├── public
│   └── logo.png            # Logo for the application
├── README.md                # Project documentation
└── package.json             # Project dependencies and scripts
```

## Usage

### Authentication

- **Login**: Users can log in using their credentials. A JWT token will be generated and stored in the context.
- **Signup**: Users can create a new account and log in with the new credentials.

### Product Search and Pagination

- **Search Products**: Use the search bar to filter products by name.
- **Pagination**: Products are displayed 8 per page, with pagination controls to navigate between pages.
