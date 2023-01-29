import React from "react";

export default function Card(props) {

  console.log(props);

  let badge
  if (props.item.openSpots === 0) {
    badge = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badge = "ONLINE"
  } else if (props.item.location) {
    badge = props.item.location
  }

  return (
    <section>
      <div className="card">
        {badge && <div className="card--badge">{badge}</div>}
        <img src={`../src/assets/${props.item.coverImg}`} alt="" className="card--image" />
        <div className="card--stats">
          <img src="../src/assets/star.png" alt="" className="card--star" />
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}).</span>
          <span className="gray"> {props.item.country}</span>
        </div>

      </div>
      <p>{props.item.title}</p>
      <p><span className="bold">From ${props.item.price}</span>/person</p>
    </section >
  )
}