# 🌤️ SkySnap - Weather Forecast App

SkySnap is a sleek and responsive weather application built with **React** and **Tailwind CSS**. It uses the free [Open-Meteo API](https://open-meteo.com/) (no API key required) to fetch current weather data and a 7-day forecast based on the user’s location or search query.


## 📸 Features

- 🌍 **Location-based Weather**: Automatically detects your location using geolocation.
- 🔍 **City Search**: Search weather by any city name.
- 🌡️ **Temperature Units**: Toggle between Celsius and Fahrenheit.
- 🌙 **Dark Mode**: Switch between light and dark themes.
- 📆 **7-Day Forecast**: View upcoming weather conditions.
- ⚡ **No API Key Required**: Uses Open-Meteo's public API.
- 💾 **Local Storage**: Saves user preferences (unit & theme).

---

## 📁 Folder Structure

```
SkySnap/
├── public/
│   └── icons/                    # Weather icon images by weather code
├── src/
│   ├── components/               # Reusable React components
│   │   ├── DarkModeToggle.jsx
│   │   ├── Forecast.jsx
│   │   ├── SearchBar.jsx
│   │   ├── UnitToggle.jsx
│   │   └── WeatherCard.jsx
│   ├── services/                 # API service logic
│   │   └── weatherAPI.js
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Tailwind CSS & custom styles
│   └── index.jsx                 # Entry point
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/coden-arfat/skysnap.git
cd skysnap
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Your app should now be running at [http://localhost:5173](http://localhost:5173) or [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Tech Stack

- **React** – JavaScript library for building user interfaces
- **Tailwind CSS** – Utility-first CSS framework
- **Vite** – Fast frontend build tool
- **Open-Meteo API** – Weather API (no API key needed)

---

## 🔒 Notes

- Weather icons are stored in `public/icons/` and mapped via Open-Meteo's weather codes.
- User preferences for temperature unit and dark mode are saved in `localStorage`.

---

## 🖼️ Preview

 ![SkySnap Preview](./screencapture)
---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

- [Open-Meteo API](https://open-meteo.com/)
- [Heroicons](https://heroicons.com/) or any custom icon sets used


