import React,{useState,useEffect} from 'react'
import "./yourProfile.css"

const YourProfile = () => {


const [primaryContact,setPrimaryContact] = useState()
const [secondaryContact,setSecondaryContact] = useState()
const [editYourEmail,setEditYourEmail] = useState("")

    // EDit Details
const [editYourDetails,setEditYourDetails] = useState(false);

const [showYourDetails,setShowYourDetails] = useState(true)

const handleEditDetails = () => {
    setEditYourDetails(!editYourDetails)
    setShowYourDetails(!showYourDetails)
}



// State to store data from json
const [yourData,setYourData]=useState([]);
  
// Fetch Data..
const getYourData = () => {
  fetch('yourProfile.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
        setYourData(myJson)
    });
}
useEffect(()=>{
    getYourData()
},[])

const handleEditYourData = () => {
    setYourData( prev =>[{
        "primaryContact":primaryContact,
        "secondaryContact":secondaryContact,
        "emailId":editYourEmail
    }])
    setShowYourDetails(true);
    setEditYourDetails(false)
}


  return (
    <div className='yourProfile'>
        <div className="yourProfile-container">
       <div className="yourProfileHeaderAndEdit">
            <div className="yourProfileHeader">
                <h1>Your Profile</h1>
            </div>
            <div className="yourProfileEditBtn">
                <h2 onClick={() => handleEditDetails()}>Edit</h2>
            </div>
       </div>

    {/* --------------Company Image and Name------------------- */}
       <div className="yourImgAndName">
        <div className="yourImg">

            <div className="yourImgEdit">
            {
                showYourDetails ? ""
                : <img src="./images/Edit.svg" alt="" /> 
            }
            </div>
            
        </div>

        <div className="yourProfileName">
            <h3>Rakesh Kumar</h3>
        </div>
       </div>




    {/* ---------------Company Contact Details-------------------- */}

    {
        yourData.map((item) => (
            <div className="yourContact-container" style={showYourDetails ? {display:"flex",flexDirection:"column"} : {display:"none"}}>
            <div className="yourContactHeader">
                <h3>Contact Details</h3>
            </div>
    
            <div className="yourContactDetailsContainer">
    
                <div className="yourContactContainer">
                    <h4>Primary Contact Details</h4>
                    <p>{item.primaryContact}</p>
                </div>
    
                <div className="yourContactContainer">
                    <h4>Secondary Contact Details</h4>
                    <p>{item.secondaryContact}</p>
                </div>
    
                <div className="yourContactContainer">
                    <h4>Email Address</h4>
                    <p>{item.emailId}</p>
                </div>
    
            </div>
        </div>
        ))
    }



    {/* ---------------Reset Password Link------------------- */}
    <div className="yourResetPassword" style={showYourDetails ? {display:"flex"} : {display:"none"}}>
        <h3>Reset Password</h3>
    </div>

    </div>


{/* -------------------Edit Your Details---------------------- */}
<div className="editYourDetails" style={editYourDetails ? {display:"flex",flexDirection:"column"} : {display:"none"}}>
        <div className="addyourContact">
            <div className="addyourContactHeader">
            <h3>Contact Details</h3>
            </div>

            <div className="addyourAddressLocation">
                <div className="addyourLocation">
                <label htmlFor="">Primary Contact Number<span style={{color:"red"}}>*</span></label>
                <input type="text" placeholder='Number' onChange={e=> setPrimaryContact(e.target.value)}/>
                </div>

                <div className="addyourLocation">
                <label htmlFor="">Secondary Contact Number<span style={{color:"red"}}>*</span></label>
                <input type="text" placeholder='Number'  onChange={e=> setSecondaryContact(e.target.value)}/>
                </div>

                <div className="addyourLocation">
                <label htmlFor="">Email Address<span style={{color:"red"}}>*</span></label>
                <input type="text" placeholder='Email'  onChange={e=> setEditYourEmail(e.target.value)}/>
                </div>
            </div>
        </div>

        {/* ------------Save And Cancel Buttons--------------- */}

        <div className="addyourBtns">
        <button className='SaveBtn' onClick={() => handleEditYourData()}>Save</button>
        <button className='CancelBtn' >Cancel</button>
        </div>

</div>

    </div>
  )
}

export default YourProfile