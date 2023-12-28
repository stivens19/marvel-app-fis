import React, { useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import marvelContext from '../context/marvelContext';
import { Grid, GridItem, GridItemTitle, GritImage } from '../styles/styles'
import LoadersGrid from './../loaders/LoadersGrid';

const Home = () => {
  const {characters,loading,getCharacters} = useContext(marvelContext);
  useEffect(() => {
      getCharacters();
      //eslint-disable-next-line
  }, []);
  const navigate=useNavigate();
  const handleNavigate=id=>navigate(`/details/${id}`);
  return (
    <Grid>
      { 
        loading ? <LoadersGrid /> :
        characters.map((character) => (
          <GridItem key={character.id} onClick={()=>handleNavigate(character.id)}>
            <GridItemTitle>{character.name}</GridItemTitle>
            <GritImage src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          </GridItem>
        ))
      }
    </Grid>
  )
}

export default Home