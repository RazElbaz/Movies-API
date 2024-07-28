# Movie API

This API allows you to manage a collection of movies, providing functionality to add, edit, delete, and retrieve movie data. The backend is built with Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Project Structure](#project-structure)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RazElbaz/Movies-API.git
   cd movie-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB credentials:
   ```env
   MONGO_USERNAME=your_username
   MONGO_PASSWORD=your_password
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

## Usage

Once the server is running, you can interact with the API using an HTTP client like Postman or curl.

## Endpoints

### Add a Movie

- **URL:** `/api/movies`
- **Method:** `POST`
- **Body Parameters:**
  - `movie_name` (String) - required
  - `info` (String) - required
  - `rating` (Number) - required (1-10)
  - `description` (String) - optional
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "status": "success",
      "message": "Movie added successfully!"
    }
    ```

### Get All Movies

- **URL:** `/api/movies`
- **Method:** `GET`
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "status": "success",
      "data": [...]
    }
    ```

### Get a Single Movie

- **URL:** `/api/movies/:movie_id`
- **Method:** `GET`
- **URL Parameters:**
  - `movie_id` (String) - required
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "status": "success",
      "data": {...}
    }
    ```

### Edit a Movie

- **URL:** `/api/movies`
- **Method:** `PATCH`
- **Body Parameters:**
  - `movie_id` (String) - required
  - `movie_name` (String) - optional
  - `info` (String) - optional
  - `rating` (Number) - optional
  - `description` (String) - optional
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "status": "success",
      "message": "Movie updated successfully!"
    }
    ```

### Delete a Movie

- **URL:** `/api/movies/:movie_id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `movie_id` (String) - required
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "status": "success",
      "message": "Movie deleted successfully!"
    }
    ```

## Error Handling

Errors are handled by a custom middleware defined in `handlers/errorHandler.js`. If an error occurs, the server responds with a status code `400` and a JSON object containing the error message.

```json
{
  "status": "failed",
  "error": "Error message"
}
```

## Project Structure

```
├── controllers
│   ├── addMovie.js
│   ├── deleteMovie.js
│   ├── editMovie.js
│   ├── getAllMovies.js
│   └── getSingleMovie.js
├── handlers
│   └── errorHandler.js
├── models
│   └── movies.model.js
├── app.js
├── package.json
└── .env
```

- **controllers/**: Contains the logic for handling different API endpoints.
- **handlers/**: Contains custom middleware for error handling.
- **models/**: Contains the Mongoose schema and model for movies.
- **app.js**: Entry point of the application. Configures the Express app and connects to MongoDB.

## License

This project is licensed under the MIT License.