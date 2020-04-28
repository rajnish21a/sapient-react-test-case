import React from "react";
import classes from "./CharacterCard.module.css";
import CardHeader from "./CardHeader/CardHeader";
import CardInfo from "./CardInfo/CardInfo";


const characterCard = (props)=>{

  return (
    <article className={classes.CharacterCard__Wrapper}>
      <CardHeader cardHeaderCharacter={props.character}/>
      <CardInfo cardInfoCharacter={props.character}/>
    </article>
  );
}

export default characterCard;