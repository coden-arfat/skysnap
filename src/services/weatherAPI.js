export const getCoords = async (city) => {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch coordinates: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return null; // City not found
    }

    // Return just latitude and longitude, or full result if you prefer
    const { latitude, longitude } = data.results[0];
    return { latitude, longitude };

  } catch (error) {
    console.error('Error in getCoords:', error);
    return ;
  }
};

export const getWeatherData = async (latitude, longitude, unit) => {
  try {
    const temperature_unit = unit === "celsius" ? "celsius" : "fahrenheit";

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&temperature_unit=${temperature_unit}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();

    const weather = data.current_weather;

    const weatherCodes = {
      0: "Clear",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Drizzle",
      61: "Rain",
      71: "Snow",
      80: "Showers",
      95: "Thunderstorm",
      99: "Hail",
    };

    const current_weather = {
      temperature: weather.temperature,
      condition: weatherCodes[weather.weathercode] || "Unknown",
      icon: `icon/${weather.weathercode}.png`,
      feelsLike: weather.temperature, 
      windSpeed: weather.windspeed,
      humidity: 70, // Static for now, API doesn't provide it here
      pressure: 1013, // Static for now, API doesn't provide it here
      time: new Date(weather.time).toLocaleTimeString(),
    };

    const forecast = data.daily.time.map((date, i) => ({
      date,
      max: data.daily.temperature_2m_max[i],
      min: data.daily.temperature_2m_min[i],
      condition: weatherCodes[data.daily.weathercode[i]] || "Unknown",
      icon: `/icons/${data.daily.weathercode[i]}.png`,
    }));

    return {
      city: `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`,
      current_weather,
      forecast,
    };
  } catch (error) {
    console.error("getWeatherData error:", error);
    return null;
  }
};
