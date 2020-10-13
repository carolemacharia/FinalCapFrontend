import React from 'react';

const ContactScreen = () => {
    return (
        <div className="screen" >
          
<br></br>
          If you have any information/tips that might aid in police investigation, please fill in the form below.<br></br>
        <br></br>
<form className="formstyle" >
  <label>
    Name: 
    <br></br> <input type="text" name="name" /> <br>
    </br> <br>
    </br>

    Email: 
    <br></br> <input type="text" name="name" /> <br></br> <br></br>
    Comment:
    <br></br><input type="text" name="name"  style={{height: "100px"}} 

 />
  </label>
  <br></br>
  <input type="submit" value="Submit" />
</form>





{/* <div className ="Address" >
<h5>Physical Address</h5>
<h6>Downtown Dubai</h6> 
Al-Sultan Street<br></br>
Melody Plaza<br></br>
        
</div>
<div >
<h5>Physical Address</h5>
<h6>Downtown Dubai</h6> 
Al-Sultan Street<br></br>
Melody Plaza<br></br>

</div> */}


        
        </div>
    )
}



export default ContactScreen;
