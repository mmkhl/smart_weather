export const getData = (value) => {
  return localStorage.getItem(`${value}`) ;
};


export const setData = (weather) => {
  localStorage.setItem("weather", JSON.stringify(weather));
};