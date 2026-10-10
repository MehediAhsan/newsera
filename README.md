# NewsEra

## Overview
The News Website is a modern, full-featured news platform built with **Next.js**, **Tailwind CSS**, and **MongoDB**. Designed for performance and scalability, it provides an engaging user experience with real-time news updates, a user-friendly dashboard, and secure authentication. The platform leverages **server-side rendering (SSR)** for fast content delivery and a **responsive UI** for seamless browsing across all devices.

## Features
- **Dynamic News Display** – Showcases the latest news articles with images and descriptions.
- **Responsive Design** – Works seamlessly across all devices (desktop, tablet, mobile).
- **Smooth Animations** – Hover effects and transition animations for better user engagement.
- **Optimized Performance** – Fast loading times with Next.js image optimization.
- **Scrollable News Section** – Allows users to scroll through multiple news articles easily.
- **Dashboard** –  A dedicated dashboard for managing news articles, including adding, editing, and deleting content.
- **Analytics & Insights** –  View traffic statistics and engagement metrics for articles.
- **Authentication with Cookies** –  Secure user authentication using cookies for session management.
- **Data Fetching with React Query** –  Stores news articles, user accounts, and analytics data efficiently.
- **MongoDB Database** –  Optimizes API requests, handles caching, and improves loading states for a better user experience.

## Tech Stack
- **Next.js** – React-based framework for server-side rendering and performance optimization.
- **Tailwind CSS** – Utility-first CSS framework for easy styling and responsiveness.
- **Unsplash API (Optional)** – High-quality images for news articles.
- **JWT & Cookies** – Secure authentication and authorization using JSON Web Tokens (JWT) stored in cookies.
- **MongoDB & Mongoose** – NoSQL database for efficient data storage and retrieval.

## Installation
Follow these steps to set up the project on your local machine:

### 1. Clone the Repository
```sh
git clone https://github.com/MehediAhsan/newsera
cd newsera
```

### 2. Install Dependencies
```sh
npm install  # or yarn install
```

### 3. Set Up MongoDB Database
- Create a MongoDB database using **MongoDB Atlas** or a local instance.
- Add your **MongoDB connection string** to a `.env.local` file:
```sh
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/newsDB?retryWrites=true&w=majority
```

### 4. Configure the Newsroom Assistant (Optional)
- Add an OpenAI API key to `.env.local` to enable AI-generated answers:
```sh
OPENAI_API_KEY=your_openai_api_key
```
- Without an available OpenAI key or provider quota, the assistant still searches NewsEra's published stories and labels its answers as newsroom-content-only.

### 5. Start the Development Server
```sh
npm run dev  # or yarn dev
```

The website will be available at `http://localhost:3000/`.

## Deployment
To deploy the website, you can use **Vercel**:
```sh
vercel
```
Or build it manually:
```sh
npm run build
npm start
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes.
4. Push to the branch and create a Pull Request.

## License
This project is licensed under the **MIT License**.

---
🚀 Happy Coding! If you like this project, give it a ⭐ on GitHub!