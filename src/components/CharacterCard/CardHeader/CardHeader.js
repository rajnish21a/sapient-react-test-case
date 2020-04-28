import React from "react";
import classes from "./CardHeader.module.css";
import Aux from "../../../hoc/Auxiliary/Auxi";

const cardHeader = (props)=>{
  return (
  <Aux>
        <div data="card header" className={classes.CharacterCard__ImgWrapper}>
          <div className={classes.Card_image}>
            <img src={props.cardHeaderCharacter.image} alt={props.cardHeaderCharacter.name}/>
          </div>
          <div className={classes.CharacterCard__Title}>
            <h2 className={classes.CharacterCard__Name}>{props.cardHeaderCharacter.name}</h2>
            <p className={classes.CharacterCard__Description}>ID:{props.cardHeaderCharacter.id+" Created On:"+props.cardHeaderCharacter.created} </p>
          </div>
        </div>
  </Aux>
  )
}

export default cardHeader;