import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../../redux/actions/charactersActions";
import { Link } from "react-router-dom";
import FooterPagination from "../Pagination/FooterPagination";

const ProductComponent = () => {
  
  const characters = useSelector((state) => state.allCharacters.characters);
  const dispatch = useDispatch();
  const [page,setPage]= useState(1);

  //-----------Fetching Data Using API and Storing it to Redux------------\\

  const fetchCharacters = async () => {
    const response = await axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setCharacters(response.data.results));
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);


  const renderList = characters.map((character) => {
    const { id, name, image,gender } = character;
    let metaName = name.split(" ").join("-")
    
    return (
        <div className="four wide column" key={id}>
          <Link to={`/profile/${id}-${metaName}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="content">
                  <div className="header">{name}</div>
                  <div>{gender}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
    );
  });
  return <>
  <div className="ui grid container">
    {renderList}
    <FooterPagination page={page} setPage={setPage}/>
  </div>
    </>;
};

export default ProductComponent;
