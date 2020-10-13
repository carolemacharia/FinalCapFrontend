import React, { useState, useContext } from 'react';
import { Redirect,Link } from 'react-router-dom';
import AppContext from './AppContext';
import './App.css';
import Jumbotron from './Jumbotron';
import Card from './Card';  

import SearchButton from './SearchButton'; 


const MainScreen = () => {



  return (
    <div className="screen">  

      <center>  
      <Jumbotron 
        title="Missing People Database" 
        lead="We care about them, because they are worth it."
        description="We are a national resource centre dedicated to reunite missing people with their loved ones by facilitating information sharing, reporting and searches for missing individuals.Please use the search button to search through the names in the database."
        btnLabel="Search"
      >
        <SearchButton btnLabel="Search"/>
      </Jumbotron>
      </center>
      
      {/* {
        !globalState.loggedIn &&
        <div className="container">
        <p>You need to be logged in</p>
        </div>
      } */}

      
      {
        // globalState.loggedIn &&
        <div className="container" 
        style={{"display": "flex", "justify-content": "space-between"}}>

          <Card title="Ann Justin" text="Missing since Dec 2019"  cardImage="https://images.unsplash.com/photo-1600073140937-05bd28e75fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
          <Card title="Benjamin Mkappa" text="Missing since March 2020"  cardImage="https://images.unsplash.com/photo-1584772988869-dccc362700a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
          <Card title="Zeina Idriss" text="Missing since October 2018"  cardImage="https://images.unsplash.com/photo-1600259766745-55ef412a4268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
          
        
        </div>

        


      }
<br></br>

    {


<div className="container" 
        style={{"display": "flex", "justify-content": "space-between"}}>

          <Card title="MaryAnne Doe" text="Missing since Dec 2019" cardImage="https://images.unsplash.com/photo-1599608783061-02e1eabf9320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
          <Card title="Roberto Cornaro" text="Missing since March 1998"  cardImage="https://images.unsplash.com/photo-1599925002649-4604a96aa3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
          <Card title="Andrew Torres" text="Missing since October 2018"  cardImage="https://images.unsplash.com/photo-1600704613492-edaa3f8cbd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
          
        
        </div>

    }

    </div>
  );
}

export default MainScreen;
