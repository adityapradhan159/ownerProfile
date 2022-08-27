import React,{useState,useEffect} from 'react'
import "./branchDetails.css"

const BranchDetails = () => {



  // Button Disabled
  const [isBtnDisabled,setISBtnDisabled] = useState(false)

  const [showAccordianContent,setShowAccordianContent] = useState(0)

  const toggleTab = (index) => {
    setShowAccordianContent(index);
    console.log(index)
  };


    // show Add Branch Form

    const [showAddBranchForm,setShowAddBranchForm] = useState(false)

    const handleShowAddBranchForm = () => {
      setShowAddBranchForm(!showAddBranchForm)
      setISBtnDisabled(true)

      const branchDetailsAddBtn = document.getElementById("branchDetailsAddBtn");
      branchDetailsAddBtn.style.backgroundColor="#9C9C9E"
    }


// State to store data from json
const [branchData,setBranchData]=useState([]);
  
// Fetch Data..
const getBranchData = () => {
  fetch('branchDetails.json'
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
      setBranchData(myJson)
    });
}
useEffect(()=>{
  getBranchData()
},[])

const [addingBranchName,setAddingBranchName] = useState("")
const handleAddBranchName =(e) => {
  const addingBranch = e.target.value;
  setAddingBranchName(addingBranch)
}

const [addingBranchHead,setAddingBranchHead] = useState("")
const handleAddBranchHead =(e) => {
  const branchHead = e.target.value;
  setAddingBranchHead(branchHead)
}

const [addingBranchRegion,setAddingBranchRegion] = useState("")
const handleAddBranchRegion =(e) => {
  const region = e.target.value
  setAddingBranchRegion(region)
}

const [addingBranchStatus,setAddingBranchStatus] = useState("")
const handleAddBranchStatus =(e) => {
  const branchStatus = e.target.value
  setAddingBranchStatus(branchStatus)
}


const [addingBranchOffice,setAddingBranchOffice] = useState("")
const handleAddBranchOffice =(e) => {
  const headOfficeAddress = e.target.value
  setAddingBranchOffice(headOfficeAddress)
}

const [addingBranchPincode,setAddingBranchPincode] = useState("")
const handleAddBranchPincode =(e) => {
  const pincode = e.target.value
  setAddingBranchPincode(pincode)
}

const [addingBranchCity,setAddingBranchCity] = useState("")
const handleAddBranchCity =(e) => {
  const city = e.target.value
  setAddingBranchCity(city)
}

const [addingBranchState,setAddingBranchState] = useState("")
const handleAddBranchState =(e) => {
  const state = e.target.value
  setAddingBranchState(state)
}

const [addingBranchCountry,setAddingBranchCountry] = useState("")
const handleAddBranchCountry =(e) => {
  const country = e.target.value
  setAddingBranchCountry(country)
}

const [addingBranchPContact,setAddingBranchPContact] = useState("")
const handleAddBranchPrimContact =(e) => {
  const pContact = e.target.value
  setAddingBranchPContact(pContact)
}


const [addingBranchSContact,setAddingBranchSContact] = useState("")
const handleAddBranchSecondContact =(e) => {
  const sContact = e.target.value
  setAddingBranchSContact(sContact)
}

const [addingBranchEmail,setAddingBranchEmail] = useState("")
const handleAddBranchEmail =(e) => {
  const email = e.target.value
  setAddingBranchEmail(email)
}


const handleBranchDetailsSave = (e) => {
  setISBtnDisabled(false)
  setShowAddBranchForm(false);
  const branchDetailsAddBtn = document.getElementById("branchDetailsAddBtn");
  branchDetailsAddBtn.style.backgroundColor="#041342"

  const newBranchObject = {
    "branchName":addingBranchName,
    "branchHead":addingBranchHead,
    "region":addingBranchRegion,
    "branchStatus":addingBranchStatus,
    "headOfficeAddress":addingBranchOffice,
    "pincode":addingBranchPincode,
    "city":addingBranchCity,
    "state":addingBranchState,
    "country":addingBranchCountry,
    "primaryContact":addingBranchPContact,
    "secondaryContact":addingBranchSContact,
    "emailId":addingBranchEmail,
    "onlineStatus":"Online",
  };
 
  setBranchData( prev => [...prev,newBranchObject])
 
} 
console.log(branchData)

const handleBranchDetailsCancel = () => {
  setISBtnDisabled(false)
  setShowAddBranchForm(false)
  const branchDetailsAddBtn = document.getElementById("branchDetailsAddBtn");
  branchDetailsAddBtn.style.backgroundColor="#041342"
}

const [showAccordian,setshowAccordian] = useState(true)

  return (
    <div className='branchDetails'>
        <div className="branchDetails-container">

          {/* -------------Branch Details Header and Add Branch Button---------------- */}
          <div className="branchDetailsAndAddBtn">
              <div className="branchDetailsHeader">
                  <h1>Branch</h1>
              </div>
              <button disabled={isBtnDisabled} className="branchDetailsAddBtn" id='branchDetailsAddBtn' onClick={() => handleShowAddBranchForm()}>
                  <h2>Add Branch</h2>
                  <div className="addBranchImg">
                    <img src="./images/addBranch.svg" alt="" />
                  </div>
              </button>
        </div>

        {/* -----------------------Branch Search Filter Options----------------------- */}
        <div className="branchFilter">
            <div className="branchSearchInp">
              <label htmlFor="">Branch</label>
              <input type="text" placeholder='Search'/>
            </div>


            <div className="branchStateInp">
              <label htmlFor="">State</label>
              <input type="text" placeholder='State'/>
            </div>

            <div className="branchCityInp">
              <label htmlFor="">City</label>
              <input type="text" placeholder='City'/>
            </div>

            <div className="branchStatusInp">
              <label htmlFor="">Status</label>
              <input type="text" placeholder='Status' required/>
            </div>
        </div>


        {/* -----------------------Branch Accordian-------------------- */}

        <div className="branchAccordianContainer">

        {/* -----------------Add Branch Details------------------ */}

        <div className="addBranchDetalsForm" style={showAddBranchForm ? {display:"flex"} : {display:"none"}}>
          {
            <>
           <div className="brachAccordianHeader">

           <div className="branchAccordianHeaderContainer" onClick={() => setshowAccordian(!showAccordian)}>
          
            <div className="branchNameAndStatus">
                <h2>Branch Details</h2>
            </div>

            {/* ------------Branch Action Tools------------- */}
            <div className="branchActionTools">
              <div className="branchDetailsdropArrow" id='branchDetailsdropArrow'>
                <img src="./images/branchDropDown.svg" alt="" />
              </div>
            </div>
           </div>

           </div>

          {/*-------------Accordian Add Branch Contents----------------- */}
            {
              showAccordian &&  <div className="addBranchContent">
              <div className="addbranchDetailsContainer">
              {/* ------Add Branch Name---------- */}
                <div className="addBranchName">
                  <label htmlFor="">Branch Name<span style={{color:"red"}}>*</span></label>
                  <input type="text" placeholder='Name' onChange={e=>handleAddBranchName(e)}/>
                </div>

              {/* -------------Branch Head Region and Status----------- */}
                <div className="addBranchHeadRegionStatus">
                  <div className="addBranchHead">
                    <label htmlFor="">Branch Head<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Name' onChange={e=>handleAddBranchHead(e)}/>
                  </div>

                  <div className="addBranchHead">
                    <label htmlFor="">Region<span style={{color:"red"}}>*</span></label>
                    <input className='regionInp' type="text" placeholder='Region' onChange={e=>handleAddBranchRegion(e)}/>
                  </div>

                  <div className="addBranchHead">
                    {/* <label htmlFor="">Status<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Status' onChange={e=>handleAddBranchStatus(e)}/> */}
                  </div>
                </div>
              </div>


              {/* -------------Branch Address Details------------------- */}

              <div className="addBranchAddressContainer" >
                <div className="branchAddressHeader">
                  <h3>Branch Address</h3>
                </div>
                <div className="addHeadOfficePincode">
                  <div className="addHeadOffice">
                    <label htmlFor="">Head Office Address<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Name' onChange={e=>handleAddBranchOffice(e)}/>
                  </div>

                  <div className="addBranchPincode">
                  <label htmlFor="">Pincode<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Name' onChange={e=>handleAddBranchPincode(e)}/>
                  </div>
                </div>

                <div className="addBranchAddressLocation">
                  <div className="addBranchLocation">
                    <label htmlFor="">City<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='City' onChange={e=>handleAddBranchCity(e)}/>
                  </div>

                  <div className="addBranchLocation">
                    <label htmlFor="">State<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='State' onChange={e=>handleAddBranchState(e)}/>
                  </div>

                  <div className="addBranchLocation">
                    <label htmlFor="">Country<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Country' onChange={e=>handleAddBranchCountry(e)}/>
                  </div>
                </div>


                {/* ---------------Add Branch Contact Details------------------ */}
                <div className="addBranchContact">
                  <div className="addbranchContactHeader">
                  <h3>Contact Details</h3>
                  </div>

                  <div className="addBranchContactDetailsContainer">
                  <div className="addBranchContacts">
                    <label htmlFor="">Primary Contact Details<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Number' onChange={e=>handleAddBranchPrimContact(e)}/>
                  </div>

                  <div className="addBranchContacts">
                    <label htmlFor="">Secondary Contact Details<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Number' onChange={e=>handleAddBranchSecondContact(e)}/>
                  </div>

                  <div className="addBranchContacts">
                    <label htmlFor="">Email Address<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Email' onChange={e=>handleAddBranchEmail(e)}/>
                  </div>
                </div>
                </div>

              {/* ------------Save And Cancel Buttons--------------- */}

              <div className="addBranchBtns">
                <button className='SaveBtn' onClick={() => handleBranchDetailsSave()}>Save</button>
                <button className='CancelBtn' onClick={() => handleBranchDetailsCancel()}>Cancel</button>
              </div>

              </div>  

          </div>
            }

        </>

          }
        </div>

        {
          branchData.map((item,i) => (
            <>

          <div key={i} className={showAccordianContent === (item.id) ? "brachAccordianHeader active-tabs" : "brachAccordianHeader"} onClick={() => toggleTab(item.id)}>

            <div className="branchAccordianHeaderContainer">
            {/* ----------Branch Name and Status----------- */}
            <div className="branchNameAndStatus">
                <h2>{item.branchName}</h2>
                <div className="branchStatus" style={item.onlineStatus == "Online" ? {backgroundColor:"#218D1F"} : {backgroundColor:"#BB0606"} }>
                  <p>{item.onlineStatus}</p>
                </div>
            </div>

            {/* ------------Branch Action Tools------------- */}
            <div className="branchActionTools">
              <div className="branchDetailsEdit">
                <img src="./images/branchEdit.svg" alt="" />
              </div>

              <div className="branchDetailsDelete">
                <img src="./images/branchDelete.svg" alt="" />
              </div>

              <div className="branchDetailsdropArrow" id='branchDetailsdropArrow'>
                <img src="./images/branchDropDown.svg" alt="" />
              </div>
            </div>
            </div>

            </div>
            {/* -------------------Branch Accordian Content------------------ */}
            <div className={showAccordianContent === (item.id) ? "branchAccordianContent  active-branchAccordianContent" : "branchAccordianContent"} >

            {/* ---------------Branch Head And Status----------------- */}  
            <div className="branchHead-container">


            <div className="branchHeadDetailsContainer">

                <div className="branchHeadContainer">
                    <h4>Branch Head</h4>
                    <p>{item.branchHead}</p>
                </div>

                <div className="branchHeadContainer">
                    <h4>Region</h4>
                    <p>{item.region}</p>
                </div>

                <div className="branchHeadContainer">
                    {/* <h4>Status</h4>
                    <p style={{color:"#44BBA5"}}>{item.branchStatus}</p> */}
                </div>

            </div>
            </div>

            <div className="branchAddress-container">
            <div className="branchAddressHeader">
            <h3>Branch Address</h3>
            </div>

            <div className="branchOfficeAndPin">
            <div className="branchOffice">
                <h4>Head Office Address</h4>
                <p>{item.headOfficeAddress}</p>
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

            {/* ---------------Branch Contact Details----------------- */}

            <div className="branchContact-container">
            <div className="branchContactHeader">
            <h3>Contact Details</h3>
            </div>

            <div className="branchContactDetailsContainer">

            <div className="branchContactContainer">
                <h4>Primary Contact Details</h4>
                <p>{item.primaryContact}</p>
            </div>

            <div className="branchContactContainer">
                <h4>Secondary Contact Details</h4>
                <p>{item.secondaryContact}</p>
            </div>

            <div className="branchContactContainer">
                <h4>Email Address</h4>
                <p>{item.emailId}</p>
            </div>

            </div>
            </div>


            {/* ---------------Reset Password Link------------------- */}
            <div className="branchResetPassword">
            <h3>Reset Password</h3>
            </div>

            </div>
            </div>

            </>
          ))
        }

  
        </div>
        </div>
    </div>
  )
}

export default BranchDetails