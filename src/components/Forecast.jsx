export const Forecast =({forecast,unit})=>{
    if(!forecast) return
const tempSymbol= unit=== 'celsius' ? '°C' : '°F';
    return(
<div className="grid grid-cols-2 gap-4">
      {forecast.map((day, idx) => (
        <div key={idx} className="rounded-lg shadow-md bg-black dark:bg-gray-800 p-3 rounded shadow text-center text-white">
          <p className="font-medium">{day.date}</p>
          <img src={day.icon} alt={day.condition} className="mx-auto w-12 h-12" />
          <p className="text-sm capitalize">{day.condition}</p>
          <p>
            {day.max}{tempSymbol} / {day.min}{tempSymbol}
          </p>
        </div>
      ))}
    </div>
  );

}