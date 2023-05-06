import React from "react";
import { GiSpeaker } from "react-icons/gi";
import "./Phonetic.css";

export default function Phonetic(props) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
           <GiSpeaker  className="speaker"/>
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
}