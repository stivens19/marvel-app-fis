import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailDescription, DetailTitle, Grid,GridDetailItem  } from "../styles/styles";
import marvelContext from './../context/marvelContext';
import DetailsComponent from './../components/DetailsComponent';
import LoadersGrid from "../loaders/LoadersGrid";


const Details = () => {
  const params = useParams();
  const {getCharacter,character,loading} = useContext(marvelContext);
  useEffect(() => {
    getCharacter(params.characterId);
    //eslint-disable-next-line
  }, []);
  return (
    <>
     {
      loading ? <LoadersGrid /> :
        <Grid>
          <GridDetailItem>
            <DetailTitle>{character?.name}</DetailTitle>
            <DetailDescription>{character?.description}</DetailDescription>
            <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt={character?.name} />
            <DetailsComponent title="Series" data={character?.series?.items} />
          </GridDetailItem>
          <GridDetailItem>
            <DetailsComponent title="Comics" data={character?.comics?.items} />
            <DetailsComponent title="Stories" data={character?.stories?.items} />
          </GridDetailItem>
        </Grid>
      }
    </>
  )
};

export default Details;
