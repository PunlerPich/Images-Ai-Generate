#Project Structure
frontend: Contains the React.js application code.
backend: Contains the Django back end code.

## Backend
- **api**: Your main Django app where the API functionality is implemented.
- **corsheaders**: Django app for handling Cross-Origin Resource Sharing (CORS).
#### Middleware
- **corsheaders.middleware.CorsMiddleware**: Enables Cross-Origin Resource Sharing.
- **django.contrib.auth.middleware.AuthenticationMiddleware**: Handles user authentication.
### Instructions for Running the Backend

1. Navigate to the `backend` directory
2. Run the Django development server:
    python manage.py runserver
3. Access the API at `http://127.0.0.1:8000/`.

### Frontend

- **React.js**: The JavaScript library used for building the user interface.
- **@nextui-org/react**: A UI library for React.
- **axios**: A promise-based HTTP client for making requests to the backend.
- **framer-motion**: A library for creating animations in React.
- **micro-cors**: A lightweight CORS handler for microservices.
- **next-themes**: A utility for managing themes in Next.js applications.
- **react**: The core React library.
- **react-dom**: The entry point for DOM-specific methods and objects in React.
- **react-router-dom**: A routing library for React applications.
- **use-dark-mode**: A React hook for managing dark mode.

### Development Dependencies

- **@types/react**: TypeScript type definitions for React.
- **@types/react-dom**: TypeScript type definitions for ReactDOM.
- **@typescript-eslint/eslint-plugin**: TypeScript support for ESLint.
- **@typescript-eslint/parser**: TypeScript parser for ESLint.
- **@vitejs/plugin-react-swc**: Vite plugin for using React with SWC.
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
- **eslint**: A pluggable and configurable linter for JavaScript and TypeScript.
- **eslint-plugin-react-hooks**: ESLint plugin for React hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Fast Refresh.
- **postcss**: A tool for transforming styles with JavaScript plugins.
- **tailwindcss**: A utility-first CSS framework.
- **typescript**: A superset of JavaScript with static types.
- **vite**: A fast build tool for modern web development.
