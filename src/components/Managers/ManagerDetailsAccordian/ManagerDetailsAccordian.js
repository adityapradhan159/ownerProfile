import React,{useState} from 'react';
import "./managerDetailsAccordian.css"

const ManagerDetailsAccordian = ({item,checked}) => {

    
const [showManagerContent,setShowManagerContent] = useState(false)

const toggleTab = () => {
    setShowManagerContent(!showManagerContent);
};


return (
    <>    
    <div className="managerAccordianHeader" onClick={() => toggleTab()}>
  
    <div className="managerAccordianHeaderContainer">
      {/* ----------manager Name and Status----------- */}
      <div className="managerNameAndStatus">
          <h2>{item.managerName}</h2>
          <div className="managerStatus" style={item.onlineStatus == "Online" ? {backgroundColor:"#218D1F"} : {backgroundColor:"#BB0606"} }>
            <p>{item.onlineStatus}</p>
          </div>
          <p className='isAdminpara' style={item.isAdmin == true ? {display:"flex",margin:"0px 0px 0px 5px"} : {display:"none",margin:"0px 0px 0px 5px"}}><em>(Admin)</em></p>
      </div>

      {/* ------------manager Action Tools------------- */}
      <div className="managerActionTools">
        <div className="managerDetailsEdit">
          <img src="./images/branchEdit.svg" alt="" />
        </div>

        <div className="managerDetailsDelete">
          <img src="./images/branchDelete.svg" alt="" />
        </div>

        <div className="managerDetailsdropArrow" id='managerDetailsdropArrow'>
        {
          showManagerContent ?  <img src="./images/branchDropDown.svg" alt="" />
          : <img src="./images/accordianArrowDown.svg" alt="" />
        }
        </div>
      </div>
      </div>

      </div>
      {/* -------------------manager Accordian Content------------------ */}

      {
        showManagerContent && <div className= "managerAccordianContent">
      
            {/* ---------------manager Head And Status----------------- */}  
            <div className="managerHead-container">
    
    
            <div className="managerHeadDetailsContainer">
    
                <div className="managerHeadContainer">
                    <h4>Branch</h4>
                    <p>{item.branchName}</p>
                </div>
    
                <div className="managerHeadContainer">
                    <h4>Region</h4>
                    <p>{item.region}</p>
                </div>
    
                <div className="managerAdharAndStatus">
    
                  {/* -----------------------is Admin Chec--------------- */}
                   <div className="isAdminCheck">
    
                    <div className="isAdminHeader">
                      <label htmlFor="">is Admin</label>
                    </div>
    
                    <div className="isAdminCheckBox">
                      <div className="yesCheckBox">
                        <input type="checkbox" defaultChecked={ item.isAdmin == true ? checked : ""}/>
                        <p>Yes</p>
                      </div>
    
                      <div className="noCheckBox">
                        <input type="checkbox" defaultChecked={ item.isAdmin == false ? checked : ""}/>
                        <p>No</p>
                      </div>
                    </div>
                                      
                   </div>
    
                  {/* ----------------Status Check--------------------- */}
                  
                  <div className="isStatusCheck">
    
                    <div className="isStatusHeader">
                      <label  htmlFor="">Status</label>
                    </div>
    
                    <div className="isStatusCheckBox">
                      <div className="activeCheckBox">
                        <input type="checkbox" defaultChecked={item.branchStatus == true ? checked : ""}/>
                        <p>Active</p>
                      </div>
    
                      <div className="inactiveCheckBox">
                        <input type="checkbox" defaultChecked={item.branchStatus == false ? checked : ""}/>
                        <p>Inactive</p>
                      </div>
                    </div>
                   
                   </div>

                </div>
    
            </div>
            </div>
    
            
            {/* ---------------manager Contact Details----------------- */}
    
            <div className="managerContact-container">
            <div className="managerContactHeader">
            <h3>Contact Details</h3>
            </div>
    
            <div className="managerContactDetailsContainer">
    
            <div className="managerContactContainer">
                <h4>Primary Contact Details</h4>
                <p>{item.primaryContact}</p>
            </div>
    
            <div className="managerContactContainer">
                <h4>Secondary Contact Details</h4>
                <p>{item.secondaryContact}</p>
            </div>
    
            <div className="managerContactEmailContainer">
                <h4>Email Address</h4>
                <p>{item.emailId}</p>
            </div>
    
            </div>
    
            {/* ----------------Adhar Proof--------------------- */}
            <div className="adharisAdminDiv">
            <div className="adharContainer">
                <h4>Adhar Proof</h4>
                <p>{item.adharProof}</p>
                <div className="documentImage">
                    <div className="documentImg1"></div>
                    <div className="documentImg2"></div>
                </div>
            </div>
    
            <div className="adharContainer">
                <div className="documentViewDownload">
                    <div className="viewIcon">
                        <img src="./images/viewIcon.svg" alt="" />
                    </div>
                    <div className="downloadIcon">
                        <img src="./images/downloadIcon.svg" alt="" />
                    </div>
               </div>
            </div>
    
            <div className="adharContainer">
                {/* <h4>is Admin</h4>
                <div className="adminCheckBoxContainer">
                <div className="adminCheckBox1">
                    <input type="checkbox" defaultChecked={ item.isAdmin == "true" ? checked : ""}/>
                    <p>Yes</p>
                </div>
                <div className="adminCheckBox2">
                    <input type="checkbox" defaultChecked={ item.isAdmin == "false" ? checked : ""}/>
                    <p>No</p>
                </div>
                </div> */}
            </div>
            </div>
            </div>
    
    
            {/* ---------------Reset Password Link------------------- */}
            <div className="managerResetPassword">
            <h3>Reset Password</h3>
            </div>
    
            </div>
        }

    </>
  )
}

export default ManagerDetailsAccordian