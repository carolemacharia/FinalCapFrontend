import React, { useState, useContext } from 'react';
import AppContext from './AppContext';
import { Redirect } from 'react-router-dom';


const ReportScreen = () => {

    

   

    const [globalState, setGlobalState] = useContext(AppContext);
  

    const [state, setState] = useState(
        {
            errors: [],
            preloader: false,
            success: false
        }
    )

    // All the reported person's data will go here
    const formData = new FormData();

    // Declare (not define) variables for React
    let firstNameField;
    let lastNameField;
    let ageField;
    let descriptionField;
    let locationField;
    let photoField;
    let dateField;
    let termsConditionsCheck;
    let submitButton;


    const attachFile = (event) => {
        // create a an array for files
        const files = Array.from(event.target.files);

        // append the files (e.g, image) to the FormData
        files.forEach( (file, index)=> {
            formData.append(index, file);
        });
    }

    const reportPerson = () => {

        let errorMessages = [];

        // Step 4
        if(firstNameField.value.length === 0) {
            errorMessages.push("Please enter a first name!");
        }
        if(lastNameField.value.length === 0) {
            errorMessages.push("Please enter a last name!");
        }
        if(ageField.value.length === 0) {
            errorMessages.push("Please enter the missing person's age");
        }
        if(descriptionField.value.length === 0) {
            errorMessages.push("Please enter a short description of the missing person");
        }

        if(locationField.value.length === 0) {
            errorMessages.push("Please enter a location where the missing person was last seen!");
        }
        if(dateField.value.length === 0) {
            errorMessages.push("Please enter the date the missing person was last seen!");
        }

        // Step 5
        if(termsConditionsCheck.checked === false) {
            errorMessages.push("Please accept terms & conditions!");
        }

        if(errorMessages.length > 0) {
            setState(
                {
                    ...state,
                    errors: errorMessages
                }
            )
        } else {

            // Turn on preloader
            setState(
                {
                    ...state,
                    errors: [],
                    preloader: true
                }
            )

            // Complete the formData
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('age', ageField.value);
            formData.append('description', descriptionField.value);
            formData.append('location', locationField.value);
            formData.append('date', dateField.value);


            // fetch function
            fetch('http://localhost:3001/person',{
                method: 'POST',
                //headers: {"Content-Type": "multipart/form-data"},
                body: formData
            })
            // Convert the JSON string to an object
            .then(
                (response) => response.json()
            )

            // If Promise was successful
            .then(
                (response) => {
                    console.log(response);
                    
                    // Turn off preloader and reveal success message
                    setState(
                        {
                            ...state,
                            errors: [],
                            preloader: false,
                            success: true
                        }
                    )
                }
            )

            // If Promise was not fulfilled
            .catch(
                (e) => {
                    console.log({e: e})
                    // Turn off preloader and reveal error message
                    setState(
                        {
                            ...state,
                            preloader: false,
                            errors: ['Something went wrong. Please try again.']
                        }
                    )
                }
            )
        }
    }


    if(state.success) {
        return (
            <Redirect to="/" />
        )
    }
    
        else{return (
            <div>
                

                <div className="container" 
                    style={
                        {
                            marginTop: "5em", 
                            maxWidth: "40em"
                        }
                    }>

                    <h1>Report a Missing Person</h1>
                    <br/>

                    { state.errors.length > 0 &&
                    <div className="error-message">
                        <ol>
                        { 
                            state.errors.map(
                                (error) => <li>{error}</li>
                            ) 
                        }
                        </ol>
                    </div>
                    }

                    { state.preloader &&
                        <div className="preloader">Loading...</div>
                    }

                    { state.success &&
                        <div className="alert alert-success">Successfully Reported</div>
                    }

                    <label>Enter the missing person's firstname *</label>
                    <input ref={(comp)=>firstNameField = comp} className="field form-control" name="firstName" 
                    type="text" />

                    <label>Enter the missing person's  lastname *</label>
                    <input ref={(comp)=>lastNameField=comp} className="field form-control" name="lastName" type="text" />

                    <label>Enter the missing person's age *</label>
                    <input ref={(comp)=>ageField = comp} className="field form-control" name="age" type="number" />

                    <label>Enter a short description of the missing person *</label>
                    <input ref={(comp)=>descriptionField = comp} className="field form-control" name="text" type="text" />

                    <label>Enter last known location *</label>
                    <input ref={(comp)=>locationField = comp} className="field form-control" name="" type="text" />

                    <label>Enter last seen date *</label>
                    <input ref={(comp)=>dateField = comp} className="field form-control" name="" type="date" />

                    <br/><br/>

                    <label>Upload the missing person's profile picture</label>
                    <input ref={ (comp)=>photoField = comp } 
                    onChange={attachFile}
                    className="field form-control" id="photo" 
                    name="file" type="file" multiple="multiple"
                    />

                    <br/><br/>

                    <label>Do you agree to the terms &amp; conditions? *&nbsp;</label>
                    <input ref={(comp)=>termsConditionsCheck = comp} className="checkbox" name="termsConditions" 
                    type="checkbox" /> Yes

                    <br/><br/>

                    <button 
                    ref={(comp)=>submitButton = comp}
                    className="btn btn-primary"
                    onClick={reportPerson}
                    style={
                        {
                            padding: "10px", 
                            fontSize: "16px"
                        }
                    }>
                        Report
                    </button>
                </div>


            </div>
        )
    
}
}

export default ReportScreen;