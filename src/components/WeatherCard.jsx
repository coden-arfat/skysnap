
export const WeatherCard=({weather})=> {
  // const weather = {
  //   temperature: 27,
  //   condition: "Hot",
  //   icon: "icon.png",
  //   feelsLike: 46,
  //   windSpeed: 56,
  //   humidity: 70,
  //   pressure: 1013,
  //   time: new Date().toLocaleTimeString(),
  // };
  if(!weather) return

  return (

<div className="mt-0 pt-0 grid place-items-center min-h-screen bg-black-100">
  <div className="bg-black pt-0 rounded-lg shadow-md w-100">
    
    <div className="max-w-sm w-full bg-black rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4 font-sans">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img src={weather.icon} alt="weather icon" className="w-16 h-16" />
        <div>
          <h2 className="text-2xl font-semibold">{weather.condition}</h2>
          <p className="text-gray-500 text-sm text-white">{weather.time}</p>
        </div>
      </div>

      {/* Temperature */}
      <div className="text-5xl font-bold text-blue-600">{weather.temperature}°F</div>
      <div className="text-gray-600 text-white" >Feels like {weather.feelsLike}°F</div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 w-full mt-4 text-sm text-gray-700">
        <div className="bg-gray-100 p-3 rounded-xl text-center">
          <p className="font-semibold">Wind</p>
          <p>{weather.windSpeed} km/h</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-xl text-center">
          <p className="font-semibold">Humidity</p>
          <p>{weather.humidity}%</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-xl text-center">
          <p className="font-semibold">Pressure</p>
          <p>{weather.pressure} hPa</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-xl text-center">
          <p className="font-semibold">Condition</p>
          <p>{weather.condition}</p>
        </div>
      </div>
    </div>

  </div>
</div>

    
  );
};

