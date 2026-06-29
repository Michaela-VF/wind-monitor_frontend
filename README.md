# 🌬️ Wind Monitor Frontend

This app is the frontend counterpart for the `Wind Monitor` application, built with React, JS and Vite .
This application provides the user interface (UI) and communicates with the Wind Monitor Rails API to retrieve and display wind monitoring data.
Built with explicit comments so it can be understood by a junior and/or unfamiliar with React developer.

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- CSS

---

## 🏗️ Architecture

```text
Browser
    │
    ▼
React (Vite)
    │ HTTP Requests
    ▼
Wind Monitor Rails API
    │
    ▼
PostgreSQL
```

The frontend sends HTTP requests to the Rails API, which handles business logic and returns JSON data for the application to display.

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
├── pages/
├── services/
├── App.jsx
└── main.jsx
```

> TBC: the structure above.

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🔗 Backend API

This frontend requires the Wind Monitor Rails API to be running locally.

By default, API requests are sent to:

```text
http://localhost:3000
```

Ensure the backend server is running before using the application.

---

## ✨ Features

Current functionality includes:

## ✨ Features

Current functionality includes:

- View and manage wind turbines
- Monitor live turbine readings, including wind speed and power output
- Display alerts for abnormal operating conditions
- Visualise turbine performance through an interactive dashboard

---

## 📄 License
    MIT