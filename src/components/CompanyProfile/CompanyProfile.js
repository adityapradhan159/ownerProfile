import React,{useState,useEffect} from 'react'
import "./companyProfile.css"

const CompanyProfile = () => {

// State to store data from json
const [companyData,setCompanyData]=useState([]);
  
// Fetch Data..
const getCompanyData = () => {
  fetch('companyProfile.json'
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
      setCompanyData(myJson)
    });
}
useEffect(()=>{
  getCompanyData()
},[])



// EDit Details
const [editCompanyDetails,setEditCompanyDetails] = useState(false);

const [showCompanyDetails,setShowCompanyDetails] = useState(true)

const handleEditDetails = () => {
    setEditCompanyDetails(!editCompanyDetails)
    setShowCompanyDetails(!showCompanyDetails)
}


const [compHeadOffice,setCompHeadOffice] = useState("");
const [compPincode,setCompPincode] = useState();
const [compCity,setCompCity] = useState("");
const [compState,setCompState] = useState("");
const [compCountry,setCompCountry] = useState("");
const [compPrimContact,setCompPrimaryContact] = useState();
const [compSecContact,setCompSecContact] = useState();
const [comEmail,setCompEmail] = useState("");


const handleSaveCompData = () => {
  setCompanyData( prev =>[{
    "headOffice":compHeadOffice,
    "pincode":compPincode,
    "city":compCity,
    "state":compState,
    "country":compCountry,
    "primaryContact":compPrimContact,
    "secondaryContact":compSecContact,
    "emailId":comEmail
}])
setShowCompanyDetails(true);
setEditCompanyDetails(false)
}


  return (
    <div className="companyProfile">
    <div className="companyProfile-container">
       <div className="companyProfileHeaderAndEdit">
            <div className="companyProfileHeader">
                <h1>Company Profile</h1>
            </div>
            <div className="companyProfileEditBtn">
                <h2 onClick={() => handleEditDetails()}>Edit</h2>
            </div>
       </div>

    {/* --------------Company Image and Name------------------- */}
       <div className="companyImgAndName">
        <div className="companyImg">

            <div className="companyImgEdit">
              {
                showCompanyDetails ? ""
                : <img src="./images/Edit.svg" alt="" /> 
              }
              
            </div>
            
        </div>

        <div className="companyProfileName">
            <h3>ABC Truck Company</h3>
        </div>
       </div>


       {
          companyData.map((item) => (
            <>
            <div className="companyAddress-container" style={showCompanyDetails ? {display:"flex"} : {display:"none"}}>
            <div className="companyAddressHeader">
                <h3>Address Details</h3>
            </div>
    
            <div className="companyOfficeAndPin">
                <div className="companyOffice">
                    <h4>Head Office Address</h4>
                    <p>{item.headOffice}</p>
                </div>
    
                <div className="OfficePin">
                    <h4>Pincode</h4>
                    <p>{item.pincode}</p>
                </div>
    
            </div>
    
    
            <div className="OfficeLocation">
                <div className="city">
                    <h4>City</h4>
                    <p>{item.city}</p>
                </div>
                <div className="city">
                    <h4>State</h4>
                    <p>{item.state}</p>
                </div>
                <div className="city">
                    <h4>Country</h4>
                    <p>{item.country}</p>
                </div>
            </div>
    
        </div>
    
    
        {/* ---------------Company Contact Details-------------------- */}
    
        <div className="companyContact-container" style={showCompanyDetails ? {display:"flex"} : {display:"none"}}>
            <div className="companyContactHeader">
                <h3>Contact Details</h3>
            </div>
    
            <div className="companyContactDetailsContainer">
    
                <div className="companyContactContainer">
                    <h4>Primary Contact Details</h4>
                    <p>{item.primaryContact}</p>
                </div>
    
                <div className="companyContactContainer">
                    <h4>Secondary Contact Details</h4>
                    <p>{item.secondaryContact}</p>
                </div>
    
                <div className="companyContactContainer">
                    <h4>Email Address</h4>
                    <p>{item.emailId}</p>
                </div>
    
            </div>
        </div>
        </>
          ))

       }

    {/* ----------------Company Address Details------------------- */}


    {/* ---------------Reset Password Link------------------- */}
    <div className="companyResetPassword" style={showCompanyDetails ? {display:"flex"} : {display:"none"}}>
        <h3>Reset Password</h3>
    </div>

    </div>


    <div className="addcompanyAddressContainer" style={editCompanyDetails ? {display:"flex",flexDirection:"column"} : {display:"none"}}>
                <div className="addCompanyAddressHeader">
                  <h3>Address Details</h3>
                </div>
                <div className="addHeadOfficePincode">
                  <div className="addCompanyHeadOffice">
                    <label htmlFor="">Head Office Address<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Name' onChange={(e) => setCompHeadOffice(e.target.value)}/>
                  </div>

                  <div className="addCompanyPincode">
                  <label htmlFor="">Pincode<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Name' onChange={(e) => setCompPincode(e.target.value)}/>
                  </div>
                </div>



                <div className="addCompanyAddressLocation">
                  <div className="addCompanyLocation">
                    <label htmlFor="">City<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='City' onChange={(e) => setCompCity(e.target.value)}/>
                  </div>

                  <div className="addCompanyLocation">
                    <label htmlFor="">State<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='State' onChange={(e) => setCompState(e.target.value)}/>
                  </div>

                  <div className="addCompanyLocation">
                    <label htmlFor="">Country<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Country' onChange={(e) => setCompCountry(e.target.value)}/>
                  </div>
                </div>


                {/* ---------------Add Branch Contact Details------------------ */}
                <div className="addBranchContact">
                  <div className="addbranchContactHeader">
                  <h3>Contact Details</h3>
                  </div>

                  <div className="addCompanyAddressLocation">
                  <div className="addCompanyContact">
                    <label htmlFor="">Primary Contact Number<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Number' onChange={(e) => setCompPrimaryContact(e.target.value)}/>
                  </div>

                  <div className="addCompanyContact">
                    <label htmlFor="">Secondary Contact Number<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Number' onChange={(e) => setCompSecContact(e.target.value)}/>
                  </div>

                  <div className="addCompanyContact">
                    <label htmlFor="">Email Address<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Email' onChange={(e) => setCompEmail(e.target.value)} />
                  </div>
                </div>
                </div>

              {/* ------------Save And Cancel Buttons--------------- */}

              <div className="addBranchBtns">
                <button className='SaveBtn' onClick={() => handleSaveCompData()}>Save</button>
                <button className='CancelBtn' >Cancel</button>
              </div>

              </div>  
    </div>
  )
}

export default CompanyProfile