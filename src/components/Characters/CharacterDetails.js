import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedCharacter} from "../../redux/actions/charactersActions";
import {useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";

const CharacterDetails = () => {
  
  //------------Showing Character Details and Last Visited List is Updating-------------\\

  const[visited,setVisited]=useState("");
  const { characterId } = useParams();
  let history = useHistory();

  //-------------------Getting Data From Redux--------------------\\

  let character = useSelector((state) => state.character);
  let characters = useSelector((state) => state.allCharacters.characters);
  const { image, name, species, location, gender, type } = character;

  //------Adding ViewedAt to keep Track about the time so that we can filter the last 10 Visited Character--------\\

  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let current_time = `${hours}:${minutes}:${seconds}`;

  const dispatch = useDispatch();
  const fetchCharacterDetail = () => {
  
    characters.map((info)=>{if(info.id==characterId)
      {
        dispatch(selectedCharacter(info))
        setVisited(info)
        let Items = [];
        Items = Object.assign({},info,{viewedAt:{current_time}})
        window.localStorage.setItem(characterId,JSON.stringify(Items));
      }})
  };

  useEffect(() => {
    if (characterId && characterId !== "") fetchCharacterDetail(characterId);
  }, [characterId]);

  return (
    <>
    <Helmet>
      <title>{`${name}'s Info`}</title>
    </Helmet>
    <div style={{marginLeft:350}} className="ui grid container">
      {Object.keys(character).length === 0 ? (
        <div>...Loading</div>
      ) : (
        
        <div style={{marginLeft:"15%",marginTop:"5%"}}  className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">INFO: </div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>Name: {name}</h1>
                <h3>gender: {gender}</h3>
                <h3>Type: {(type=="")? "No Type Match Found!" : type}</h3>
                <h4>
                species: {species}
                </h4>
                <h4>
                location: {location.name}
                </h4>
                <h2 onClick={()=>{history.push('/')}}>
                  <a className="ui teal tag label"> Back to Home</a>
                </h2>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CharacterDetails;
