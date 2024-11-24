import React, { useContext } from "react";
import { ContextData } from "./UserContext";
import { BsCalendarDate, BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import InputCity from "./InputCity";
import styles from "./DisplayWeather.module.css";
import { MdWaves } from "react-icons/md";

const DisplayWeather = () => {
  const { weatherData, dataError } = useContext(ContextData);

  if (!weatherData) {
    return <h4>weatherData NOT FOund</h4>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputcontainer}>
        <InputCity></InputCity>
      </div>
      <div className={styles.main_container}>
        {dataError || !weatherData ? (
          <h4 className={styles.message}>
            City not found or data is not available
          </h4>
        ) : (
          <div className={styles.sub_container}>
            {weatherData.icons && weatherData.icons && (
              <div>
                <div className={styles.image}>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.icons}@2x.png`}
                    alt={weatherData.condition}
                    className={styles.imagee}
                  />
                </div>

                <h4>{weatherData.condition}</h4>
              </div>
            )}
            <div className={styles.name_temp}>
              {" "}
              <p className={styles.temp}>
                {Math.floor(weatherData.temperature)}°C
              </p>
              <h2>{weatherData.name}</h2>
            </div>

            <div className={styles.icon_container}>
              <p>
                <MdWaves className={styles.logo} />
                {weatherData.humidity}%
              </p>{" "}
              <p>
                <BsWind className={styles.logo} /> {weatherData.windspeed} m/s{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayWeather;
