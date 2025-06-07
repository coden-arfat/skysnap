import "./App.css";
import { useState, useEffect } from "react";
import { Spinner } from "./components/UnitToggle";
import { getCoords, getWeatherData } from "./services/weatherAPI";
import { WeatherCard } from "./components/WeatherCard";
import { SearchByCity } from "./components/SearchBar";
import { Forecast } from "./components/Forecast";
import { DarkModeToggle } from "./components/DarkModeToggle";
const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState("Fahrenhit");
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [isLooding, setIsLooding]=useState(true)
  const getDataByLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const data = await getWeatherData(latitude, longitude);
          if (data) {
            setWeather(data.current_weather);
            setForecast(data.forecast);
            setCity("Your Location")
            setIsLooding(false)
          } else {
            setCity("Dhaka")
            setIsLooding(false)
            getWeatherByCity("Dhaka");


          }
        } catch (err) {
          console.error("Error fetching data by location:", err);
          setError("Failed to get weather data from location.");
        }
      },
      (err) => {
        console.error("Geolocation error:", err);
        setError("Geolocation not allowed or failed.");
        getWeatherByCity("Dhaka");
        setIsLooding(false)
      }
    );
  };

  const getWeatherByCity = async (city) => {
    const data = await getCoords(city);
    if (!data) {
      setError("City not found");
      return;
    }
    const {latitude, longitude}= data
    
    try {
      const data = await getWeatherData(latitude, longitude);
      setIsLooding(false)
      setWeather(data.current_weather);
      setForecast(data.forecast);
      setCity(city)
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data");
      console.error(err);
    }
  };

  useEffect(() => {
    getDataByLocation();
    

  }, [unit]);
   useEffect(() => {
    // Always show the spinner for 5 seconds
    const timer = setTimeout(() => {
      setIsLooding(false)
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-0 min-h-screen min-w-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Sky Snap</h1>
              <div className="flex gap-2">
                {/* <UnitToggle unit={unit} setUnit={setUnit} /> */}
                <DarkModeToggle />
              </div>
            </div>
      <SearchByCity onSearch={getWeatherByCity} />
      
     {isLooding ? <Spinner/>: 
     <> <h1 className="text-center mt-5 mb-0 text-5xl font-semibold text-blue-600">Weather For {city}</h1>
      
      <WeatherCard weather={weather} />
    <h1 className="text-center mb-10 text-5xl font-semibold text-blue-600">Forecast For {city}</h1>
      <Forecast forecast={forecast} unit={unit} /></>
      
     }
   </div>
   </div>
  );
};

export default App;
