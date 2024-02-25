import React from 'react'
import "./Widgets.css";
import { FiberManualRecord, Info } from '@mui/icons-material';

function Widgets() {
  const newsArticle =(heading,subtitle)=>{
    return(
    <div className="widgets__article">
    <div className="widgets__articleLeft">
    <FiberManualRecord/>
    </div>
    <div className="widgets__articleRight">
    <h4>{heading}</h4>
    <p>{subtitle}</p>

    </div>
    </div>);
  };
  return (
    <div className='widgets'>
    <div className="widgets__header">
    <h2>LinkedIn News</h2>
    <Info/>
    </div>
      {newsArticle("PAPA React ","top NEWS")}
      {newsArticle("PAPA React ","top NEWS")}
      {newsArticle("PAPA React ","top NEWS")}
      {newsArticle("PAPA React ","top NEWS")}
    </div>
  );
}

export default Widgets
