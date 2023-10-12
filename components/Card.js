import React from 'react'
export default function Card(props){
    return (
        <section>
            <img src={props.imageUrl} alt="imageUrl" />
            <div className="card--element">
                <div className="card--location">
                <img src = "../images/pin.jpg" className = "card--pin"/>
                <h4>{props.location}</h4>
                <a href={props.googleMapsUrl} className="card--map" target="_blank">
                    view on google map
                </a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </section>
    )
}