import React from "react";
import css from './card.css';

function Card(props) {
    console.log(props);
    return(
        <div className="card-container">
            <img src={props.data.avatar_url} />
            <h3 className="username">{props.data.login}</h3>
            <div className="information-container">
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
                <p>Profile: {props.data.html_url}</p>
                <p>Bio: {props.data.bio}</p>
                <p>Name: {props.data.name}</p>
            </div>
        </div>
    );
}

export default Card