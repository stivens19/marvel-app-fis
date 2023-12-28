import React from "react";
import { DetailsList, DetailsListItem, DetailSubtitle } from "../styles/styles";

const DetailsComponent = ({title,data}) => {
  return (
    <>
      <DetailSubtitle>{title}</DetailSubtitle>
      <DetailsList>
        {
          data?.map((item,i)=>(
            <DetailsListItem key={`${item.name}-${i}`}>
              {item.name}
            </DetailsListItem>
          ))
        }
        
      </DetailsList>
    </>
  );
};

export default DetailsComponent;
