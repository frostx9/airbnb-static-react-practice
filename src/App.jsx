import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Card from "../component/Card";
import data from "./data";


export default function App() {

  console.log(data);

  const arr = data.map((e) => {
    return <Card

      key={e.id} // For Unique
      item={e}  // Give Entire item Object
      {...e} // Or we can us spread

    />
  })

  return (

    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {arr}
      </section>
    </div>
  )
}