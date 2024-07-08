import { useState } from "react";
import { getCurrentWeather } from "../../services/api";
import { weatherData, City } from "../../types/server";
import styled from "./weather.module.css";
import wind from "../../images/wind.png";
import humidity from "../../images/humidity.png";
import pressure from "../../images/pressure.png";
import rain from "../../images/rain.png";
import sun from "../../images/sun.png";


const cities = [
  { id: 1, name: "شهرها", lat: "", lon: "" },
  { id: 2, name: "تهران", lat: "35.7219", lon: "51.3347" },
  { id: 3, name: "اهواز", lat: "31.3183", lon: "48.6706" },
  { id: 4, name: "یزد", lat: "31.8974", lon: "54.3568" },
  { id: 5, name: "ساری", lat: "36.56332", lon: "53.06009"},
  { id: 6, name: "تبریز", lat: "38.052417", lon: "46.311493"},
  { id: 7, name: "زنجان", lat: "36.667317", lon: "48.484411"},
  { id: 8, name: "ارومیه", lat: "37.545666", lon: "45.068472"},
  { id: 9, name: "کرمان", lat: "30.291089", lon: "57.066735"},
  { id: 10, name: "شیراز", lat: "29.59973", lon: "52.527523"},
  { id: 11, name: "اصفهان", lat: "32.667125", lon: "51.6568"},
  { id: 12, name: "مشهد", lat: "36.292991", lon: "59.610244"},
  { id: 13, name: "اردبیل", lat: "38.250044", lon: "48.296489"},
  { id: 14, name: "سنندج", lat: "35.310643", lon: "47.005372"},
  { id: 15, name: "تبریز", lat: "38.067555", lon: "46.297804"},
  { id: 16, name: "زاهدان", lat: "29.487425", lon: "60.851536"},
  { id: 17, name: "شهرکرد", lat: "32.324856", lon: "50.84935"},
  { id: 18, name: "یاسوج", lat: "30.665085", lon: "51.579393"},
  { id: 19, name: "بندرعباس", lat: "27.178912", lon: "56.277789"},
  { id: 20, name: "سمنان", lat: "35.582501", lon: "53.387055"},







];

function Weather() {
  const [weatherData, setWetherData] = useState<weatherData>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selectedLocation: City = JSON.parse(value);

    getCurrentWeather({
      lat: selectedLocation.lat,
      lon: selectedLocation.lon,
    }).then((result) => {
      setWetherData(result);
    });
  };

  return (
    <div className={styled.container}>
      <div className={styled.div1}>
        <p>از فهرست زیر شهر مورد نظر خود را انتخاب کنید :</p>
        <select onChange={handleChange}>
          {cities.map((item) => (
            <option key={item.id} value={JSON.stringify(item)}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styled.div2}>
        <img src={sun} />
        <h3 className={styled.i1}>دما : {weatherData?.main.temp}</h3>
        <img src={pressure} />
        <h3 className={styled.i2}>فشار هوا : {weatherData?.main.pressure}</h3>
        <img src={humidity} />
        <h3 className={styled.i3}>رطوبت : {weatherData?.main.humidity}</h3>
        <img src={rain} />
        <h3 className={styled.i4}>وضعیت ابرها : {weatherData?.clouds.all}</h3>
        <img src={wind} />
        <h3 className={styled.i5}>سرعت باد : {weatherData?.wind.speed}</h3>
      </div>
    </div>
  );
}

export default Weather;
