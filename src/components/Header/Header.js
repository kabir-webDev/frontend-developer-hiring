import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchCharacters } from "../../redux/actions/charactersActions";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

  //-------------------Material-UI Style Section--------------------\\

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: '30%',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  
  //-------------------Search Section Implementation--------------------\\

  const characters = useSelector((state) => state.allCharacters.characters);
  let history = useHistory();
  const dispatch = useDispatch();
  const [search,setSearch] = useState("");

  const handleSearch = () =>{
    setSearch("")
    history.push(`/search?q=${search}`);
    dispatch(searchCharacters(searchCharacter));
  }

  //-------------------Filtering out Based on Searched Keyword--------------------\\

  const searchCharacter = characters.filter((val)=>{
    if(val.name.toLowerCase().includes(search.toLowerCase())){
      return val
    }
  });


const handleSubmit=(e)=> {
    setSearch("")
  e.preventDefault();
    history.push(`/search?q=${search}`);
    dispatch(searchCharacters(searchCharacter));
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div style={{marginLeft:"30%"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            onClick={()=>{history.push('/')}}
            style={{cursor:"pointer"}}
          >
            RICK and MORTY
          </Typography>
          <Search>
          <form onSubmit={handleSubmit}>
            <StyledInputBase
              defaultValue={search}
              placeholder="Search…"
              onChange={(e)=>{
                setSearch(e.target.value);
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </form>
          </Search>
            <Button onClick={handleSearch} variant="contained" style={{backgroundColor: '#FFFFFF', color: '#1976D2'}}>Search</Button>
        </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
};

export default Header;
