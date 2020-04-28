
import React from "react";
import classes from "./CardInfo.module.css";
import Aux from "../../../hoc/Auxiliary/Auxi";

const charProperties = [ 'status', 'species', 'gender', 'origin'];

const cardInfo = (props)=>{
  let characterProperty = charProperties.map((characterInfo,idx)=>{
  return (<div key={idx} className={classes.CharacterCard__TextWrapper}><span>{characterInfo.toUpperCase()}</span><p>{characterInfo!=='origin'?props.cardInfoCharacter[characterInfo]:props.cardInfoCharacter[characterInfo].name}</p></div>)
  })
  return (
  <Aux>
      <div data="card info" className={classes.CharacterCard__InfoWrapper}>
      {characterProperty}
  <div className={classes.CharacterCard__TextWrapper1}><span>LAST LOCATION</span><p>{props.cardInfoCharacter.location.name}</p></div>
      </div>
  </Aux>
  )
}

export default cardInfo;