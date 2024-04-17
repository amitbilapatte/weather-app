"use client";

import { useState } from "react";

const Details = [
  {
    cityname: "Mumbai",
    lat: -33,
    long: 151,
    citycodename: "MUM",
    temperature: 22,
    cityicon: "./weather/sunny.gif",
    humidity: 65,
    weather: "Sunny",
    bg: "bg-blue-200",
    highestTemperature: 30,
    lowestTemperature: 18,
    building: "./building/mumbai-building.png",
  },
  {
    cityname: "New York",
    lat: 40,
    long: 74,
    citycodename: "NYC",
    temperature: 20,
    cityicon: "./weather/clear.gif",
    humidity: 70,
    weather: "Cloudy",
    bg: "bg-blue-300",
    highestTemperature: 25,
    lowestTemperature: 15,
    building: "./building/ny-building.png",
  },
  {
    cityname: "London",
    lat: 51,
    long: 10,
    citycodename: "LDN",
    temperature: 15,
    cityicon: "./weather/rainy.gif",
    humidity: 80,
    weather: "Rain",
    bg: "bg-pink-400",
    highestTemperature: 20,
    lowestTemperature: 10,
    building: "./building/london-building.png",
  },
  {
    cityname: "Tokyo",
    lat: 35,
    long: 13,
    citycodename: "TYO",
    temperature: 25,
    cityicon: "./weather/clear.gif",
    humidity: 60,
    weather: "Clear",
    bg: "bg-yellow-200",
    highestTemperature: 30,
    lowestTemperature: 20,
    building: "./building/tokyo-building.png",
  },
  {
    cityname: "Paris",
    lat: 48,
    long: 23,
    citycodename: "PAR",
    temperature: 18,
    cityicon: "./weather/stormy.webp",
    humidity: 75,
    weather: "Partly Cloudy",
    bg: "bg-red-400",
    highestTemperature: 22,
    lowestTemperature: 12,
    building: "./building/paris-building.png",
  },
];

export default function Page() {
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  const selectedData = Details.filter((data) => data.cityname === selectedCity);

  return (
    <main className="flex h-8 min-h-screen flex-col items-center justify-center bg-slate-400 p-6 hover:h-full">
      <div
        className="flex h-52 w-52 flex-col items-center justify-center  rounded-xl bg-white p-6"
        style={{
          backgroundImage: `url('${selectedData[0].cityicon}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url('${selectedData[0].building}')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
          className="flex flex-col items-center"
        >
          <label className="rounded-lg bg-slate-800 bg-opacity-40 p-1 text-white">
            {selectedData[0].cityname + ", " + selectedData[0].citycodename}
          </label>
          <div
            className="text-yellow-20 text-black-50 z-10 flex text-fuchsia-50 "
            // style={{
            //   backgroundImage: `url('${selectedData[0].building}')`,
            //   backgroundSize: 'contain',
            //   backgroundRepeat: 'no-repeat',
            //   backgroundPosition: 'bottom',
            // }}
            // try code commits reversing/ removing
          >
            <label className="z-0 mt-[-3rem] text-[9rem]">{selectedData[0].temperature}</label>
            <label className="text-[2rem]">{"\u00B0"}</label>
          </div>
          <label className="z-10 mt-[-1.5rem] bg-slate-800 bg-opacity-40 from-orange-200 px-2 text-yellow-50">
            {"H: " + selectedData[0].highestTemperature + "\u00B0 L: " + selectedData[0].lowestTemperature + "\u00B0"}
          </label>
        </div>
      </div>
      <div className="m-5 flex max-w-[12rem] flex-wrap gap-3">
        {Details.map((citydetails) => (
          <button
            onClick={() => setSelectedCity(citydetails.cityname)}
            key={citydetails.citycodename}
            className={`delay-10 border-r-2 pr-2  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2 
            ${selectedCity === citydetails.cityname ? "border-b-2 border-r-2 border-black bg-gray-300" : ""} `}
          >
            {citydetails.cityname}
          </button>
        ))}
      </div>
    </main>
  );
}
