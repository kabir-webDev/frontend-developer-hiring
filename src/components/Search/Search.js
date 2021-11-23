import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {Helmet} from "react-helmet";

const Search = () => {

  //--------------------Last Visited List From Local Storage-------------------\\

  // let localData = localStorage.getItem("LastVisited");
  // console.log("Search: ",JSON.parse(localData));

  //--------------------Rendering Card List of 20 Characters-------------------\\

  const character = useSelector((state) => state.searchCharacters.searchCharacters);
  const renderList = character.map((product) => {
    const { id, name, image } = product;
    let metaName = name.split(" ").join("-")

    return (
      <div key={id}>
      <Helmet>
        <title>Search Character</title>
        <meta name="description" content="Helmet application" />
    </Helmet>

      <div className="four wide column" key={id}>
        <Link to={`/profile/${id}-${metaName}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      </div>
    );
  });
  return <>{(character.length>0)?<div className="ui grid container">{renderList}</div>:<h1 style={{marginTop:150,textAlign:"center",fontWeight:800, color:"#ED2A00"}}>No Character Match Found</h1>}</>;
};

export default Search;
