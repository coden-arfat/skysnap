import './App.css'
import { getCoords,getWeatherData } from './services/weatherAPI'
const App = () => {
  (async () => {
  const data = await getWeatherData(40.7128, -74.006, "celsius");
  console.log(data);
})();

  return (
    <div>
      <h1>Sky Snap</h1>
      <p>This is working!</p>
      {console.log(getCoords("Dhaka"))}
    </div>
  );
};

export default App;


