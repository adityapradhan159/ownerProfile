import React,{useState,useEffect} from 'react'
import ManagerDetailsAccordian from './ManagerDetailsAccordian/ManagerDetailsAccordian';
import "./managers.css"

const Managers = () => {

const [checked,setChecked] = useState(true)

// const selectOnlyThis = (id) => {
//   var myCheckbox = document.getElementsByName("myCheckbox");
//   Array.prototype.forEach.call(myCheckbox,function(el){
//   	setChecked(false)
//   });
//  setChecked(true)
// }


const [isBtnDisabled,setISBtnDisabled] = useState(false);

// show Add Branch Form

const [showAddManagerForm,setShowAddManagerForm] = useState(false)

const handleShowAddManagerForm = () => {
  setShowAddManagerForm(!showAddManagerForm)
  setISBtnDisabled(true)

  const managerDetailsAddBtn = document.getElementById("managerDetailsAddBtn");
  managerDetailsAddBtn.style.backgroundColor="#9C9C9E"
}


const [addingManagerName,setAddingManagerName] = useState("")
const [addingBranchName,setAddingBranchName] = useState("")
const [addingManagerRegion,setAddingManagerRegion] = useState("")
const [addingManagerPContact,setAddingManagerPContact] = useState("")
const [addingManagerSContact,setAddingManagerSContact] = useState("")
const [addingManagerEmail,setAddingManagerEmail] = useState("")

const [IsAdminYes, setIsAdminYes] = useState(false)

const[isStatusActive,setStatusActive] = useState("")

const [idNumber,setIdNumber] = useState()

const [documentSelected,setDocumemntSelected] = useState()



// State to store data from json
const [managerData,setManagerData]=useState([]);
  
// Fetch Data..
const getManagerData = () => {
  fetch('managerDetails.json'
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
        setManagerData(myJson)
    });
}
useEffect(()=>{
  getManagerData()
},[])


const handleManagerDetailsSave = () => {
  setISBtnDisabled(false)
  setShowAddManagerForm(false);
  const managerDetailsAddBtn = document.getElementById("managerDetailsAddBtn");
  managerDetailsAddBtn.style.backgroundColor="#041342"

  if(IsAdminYes == checked){
    setIsAdminYes(true)
  }
  else{
    setIsAdminYes(false)
  }


  if(isStatusActive == checked){
    setStatusActive(true)
  }
  else{
    setStatusActive(false)
  }

  const newBranchObject = {
    "managerName":addingManagerName,
    "branchName":addingBranchName,
    "region":addingManagerRegion,
    "branchStatus":isStatusActive,
    "primaryContact":addingManagerPContact,
    "secondaryContact":addingManagerSContact,
    "emailId":addingManagerEmail,
    "onlineStatus":"Online",
    "isAdmin":IsAdminYes,
    "adharProof":idNumber,
    "document":documentSelected,
  };
 
  setManagerData( prev => [...prev,newBranchObject])
} 


const handleManagerDetailsCancel = () => {
  setISBtnDisabled(false)
  setShowAddManagerForm(false);
  const managerDetailsAddBtn = document.getElementById("managerDetailsAddBtn");
  managerDetailsAddBtn.style.backgroundColor="#041342"
} 



const [showaddAccordian,setshowAddAccordian] = useState(true)


  return (
    <div className='managerDetails'>
        <div className="managerDetails-container">

          {/* -------------manager Details Header and Add manager Button---------------- */}
          <div className="managerDetailsAndAddBtn">
              <div className="managerDetailsHeader">
                  <h1>Managers</h1>

              </div>
              <button disabled={isBtnDisabled} className="managerDetailsAddBtn" id='managerDetailsAddBtn' onClick={() => handleShowAddManagerForm()}>
                  <h2>Add Manager</h2>
                  <div className="addmanagerImg">
                    <img src="./images/addManagerIcon.svg" alt="" />
                  </div>
              </button>
        </div>

        {/* -----------------------manager Search Filter Options----------------------- */}
        <div className="managerFilter">
            <div className="managerSearchInp">
              <label htmlFor="">Name</label>
              <input type="text" placeholder='Search'/>
            </div>


            <div className="managerStateInp">
              <label htmlFor="">State</label>
              <input type="text" placeholder='State'/>
            </div>

            <div className="managerCityInp">
              <label htmlFor="">City</label>
              <input type="text" placeholder='City'/>
            </div>

            <div className="managerStatusInp">
              <label htmlFor="">Status</label>
              <input type="text" placeholder='Status'/>
            </div>
        </div>


        {/* -----------------------manager Accordian-------------------- */}

        <div className="managerAccordianContainer">

        {/* --------------------------Add Manager------------------- */}

        <div className="addmanagerDetalsForm" style={showAddManagerForm ? {display:"flex"} : {display:"none"}}>
          {
            <>
           <div className="managerAccordianHeader" onClick={() => setshowAddAccordian(!showaddAccordian)}>

           <div className="managerAccordianHeaderContainer">
          
            <div className="managerNameAndStatus">
                <h2>Manager Details</h2>
            </div>

            {/* ------------manager Action Tools------------- */}
            <div className="managerActionTools">
              <div className="managerDetailsdropArrow" id='managerDetailsdropArrow'>
                <img src="./images/branchDropDown.svg" alt="" />
              </div>
            </div>
           </div>

           </div>

          {/*-------------Accordian Add manager Contents----------------- */}

            {
              showaddAccordian &&   <div className="addmanagerContent">
                
              <div className="addmanagerDetailsContainer">
              {/* ------Add manager Name---------- */}
                <div className="addmanagerName">
                  <label htmlFor="">Name<span style={{color:"red"}}>*</span></label>
                  <input type="text" placeholder='Name' onChange={(e) => setAddingManagerName(e.target.value)}/>
                </div>

              {/* -------------manager Head Region and Status----------- */}
                <div className="addmanagerHeadRegionStatus">
                  <div className="addmanagerHead">
                    <label htmlFor="">Branch<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Name' onChange={(e) => setAddingBranchName(e.target.value)}/>
                  </div>

                  <div className="addmanagerHead">
                    <label htmlFor="">Region<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Region' onChange={(e) => setAddingManagerRegion(e.target.value)}/>
                  </div>

                  <div className="addmanagerHead2">

                  {/* -----------------------is Admin Check--------------- */}
                    <div className="isAdminCheck">

                      <div className="isAdminHeader">
                        <label htmlFor="">is Admin<span style={{color:"red"}}>*</span></label>
                      </div>

                      <div className="isAdminCheckBox">
                        <div className="yesCheckBox">
                          <input type="checkbox"  onChange={(e) => setIsAdminYes(e.target.checked)}/>
                          <p>Yes</p>
                        </div>

                        <div className="noCheckBox">
                          <input type="checkbox" />
                          <p>No</p>
                        </div>
                      </div>
                                        
                    </div>

                    {/* ----------------Status Check--------------------- */}

                    <div className="isStatusCheck">

                      <div className="isStatusHeader">
                        <label  htmlFor="">Status<span style={{color:"red"}}>*</span></label>
                      </div>

                      <div className="isStatusCheckBox">
                        <div className="activeCheckBox">
                          <input type="checkbox" onChange={(e) => isStatusActive(e.target.checked)}/>
                          <p>Active</p>
                        </div>

                        <div className="inactiveCheckBox">
                          <input type="checkbox"/>
                          <p>Inactive</p>
                        </div>
                      </div>
                    
                    </div>


                    </div>
                  </div>
                </div>
              
                {/* ---------------Add manager Contact Details------------------ */}

                <div className="addmanagerContact">
                  <div className="addmanagerContactHeader">
                  <h3>Contact Details</h3>
                  </div>

                  <div className="addmanagerContactDetailsContainer">
                  <div className="addmanagerContacts">
                    <label htmlFor="">Primary Contact Details<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Number' onChange={(e) => setAddingManagerPContact(e.target.value)}/>
                  </div>

                  <div className="addmanagerContacts">
                    <label htmlFor="">Secondary Contact Details<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Number'  onChange={(e) => setAddingManagerSContact(e.target.value)}/>
                  </div>

                  <div className="addmanagerContacts2">
                    <label htmlFor="">Email Address<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Email'  onChange={(e) => setAddingManagerEmail(e.target.value)}/>
                  </div>
                </div>
                </div>
              
              {/* -----------------Add Id Proofs------------------------- */}
              
              <div className="addmanagerContact">
                  <div className="addmanagerContactHeader">
                  <h3>ID Proof</h3>
                  </div>

                  <div className="addmanagerContactDetailsContainer">
                  <div className="addmanagerContacts">
                    <label htmlFor="">Proof Type<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Proof' />
                  </div>

                  <div className="addmanagerContacts">
                    <label htmlFor="">ID Number<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Number' onChange={(e) => setIdNumber(e.target.value)}/>
                  </div>

                  <div className="addmanagerContacts2">
                    {/* <label htmlFor="">Email Address<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder='Email'  onChange={(e) => setAddingManagerEmail(e.target.value)}/> */}
                  </div>
                </div>
                </div>



                {/* ----------------Add Documents------------------------- */}
                <div className="managerDocumentsAndIsAdmin">
                  <div className="addManagerDocument">
                    <label htmlFor="">Upload Document<span style={{color:"red"}}>*</span></label>
                    <input type="file" onChange={(e) => setDocumemntSelected(e.target.files[0])}/>
                  </div>

                    <div className="addIsAdmin">
                      {/* <label>is Admin</label>
                      <div className="addadminCheckBoxContainer">
                      <div className="addadminCheckBox1">
                          <input type="checkbox" defaultChecked={true}/>
                          <p>Yes</p>
                      </div>
                      <div className="addadminCheckBox2">
                          <input type="checkbox" />
                          <p>No</p>
                      </div>
                      </div> */}
                    </div>
                </div>

              {/* ------------Save And Cancel Buttons--------------- */}

              <div className="addmanagerBtns">
                <button className='SaveBtn' onClick={() => handleManagerDetailsSave()}>Save</button>
                <button className='CancelBtn' onClick={() => handleManagerDetailsCancel()}>Cancel</button>
              </div>

          </div>
            }
        </>

      }
      </div>

        {
          managerData.map((item) => (
          <>
            <ManagerDetailsAccordian item={item} checked={checked} key={item.id}/>
          </>
          ))
        }

  
        </div>
        </div>
    </div>
  )
}

export default Managers