import React, { useState, useContext } from 'react';
import AppContext from './AppContext';
import { Redirect } from 'react-router-dom';
import Jumbotron from './Jumbotron';

const ContactScreen = () => {

    let firstNameField;
    let lastNameField;
    let phoneField;
    let emailField;
    let informationField;
    let termsConditionsCheck;
    let submitButton;

    return (
        <div className="screen" >
          
<Jumbotron

title='If you have any information or tips that might aid in a police investigation, please fill in the form below.'>
  <div className="container" 
    style={
        {
            marginTop: "5em", 
            maxWidth: "35em"
        }
    }>
  <label>First Name *</label>
    <input ref={(comp)=>firstNameField = comp} className="field form-control" name="firstName" 
    type="text" />

    <label>Last Name *</label>
    <input ref={(comp)=>lastNameField=comp} className="field form-control" name="lastName" type="text" />

    <label>Phone Number *</label>
    <input ref={(comp)=>phoneField = comp} className="field form-control" name="Number" type="number" />

    <label>Email *</label>
    <input ref={(comp)=>emailField = comp} className="field form-control" name="email" type="email" />

    <label>Information *</label>
    <input ref={(comp)=>informationField=comp} className="field form-control" name="information" type="text" />

    <br></br>
    <br></br>

    <label>Do you agree to the terms &amp; conditions? *&nbsp;</label>
                    <input ref={(comp)=>termsConditionsCheck = comp} className="checkbox" name="termsConditions" 
                    type="checkbox" /> Yes

    <br></br>
    <br></br>

    <button 
                    
      className="btn btn-primary"
      style={
          {
              padding: "10px", 
              fontSize: "16px"
          }
      }>
          Submit
      </button>

    </div>
    
      </Jumbotron>



      <div className="container" 
        style={
          {
              marginTop: "5em", 
              maxWidth: "100em"
          }
        }>
          <h3><u>Address:</u></h3>
          <h5>Downtown Dubai</h5> 
          <h6>Al-Sultan Street
          <br></br>
              Melody Plaza
          <br></br>
          </h6>

          <br></br>

          <h3><u>Contact:</u></h3>
          <h6>Phone: 0097143178187
          <br></br>
              Mobile:0097155443678
          <br></br>
              Email:info@mpd.org
          <br></br>
          </h6>


      </div>



        
        </div>
    )
}



export default ContactScreen;
