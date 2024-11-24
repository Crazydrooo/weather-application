import { createContext, useEffect, useState } from "react";
export const ContextData = createContext();
const UserContext = ({ children }) => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState([]);
  const [dataError, setDataError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const apiKey = import.meta.env.VITE_APP_ID;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const respones = await fetch(url);
        const data = await respones.json();
        console.log("This Is The Data", data);
        setDataError(false);
        setWeatherData({
          name: data.name,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
          date: data.dt,
          time: data.timezone,
          icons: data.weather[0].icon,
          condition: data.weather[0].main,
        });
      } catch (error) {
        setDataError(true);
        console.log("This is Error", error);
      }
    }
    getData();
  }, [city]);
  return (
    <div>
      <ContextData.Provider value={{ weatherData, setCity, dataError }}>
        {children}
      </ContextData.Provider>
    </div>
  );
};

export default UserContext;
