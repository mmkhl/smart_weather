import { setData } from "./storage-service";

export const fetchWeatherInfo = async (city) =>{
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a17114ee18259a7163698db2d14f5fa&lang=en`;
  const response = await fetch(urlApi)

  const result = await response.json();
  if(result.err) return null;
  else {
    setData(result);
  }





  return result;
}