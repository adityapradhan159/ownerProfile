import React,{useState} from 'react'
import "./branchDetailsAccordian.css"

const BranchDetailsAccordian = ({item,checked}) => {


const [showAccordianContent,setShowAccordianContent] = useState(false)

const toggleTab = () => {
    setShowAccordianContent(!showAccordianContent);
};

  return (
   <>
    <div className="brachAccordianHeader" onClick={() => toggleTab()}>

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
        {
          showAccordianContent ?  <img src="./images/branchDropDown.svg" alt="" />
          : <img src="./images/accordianArrowDown.svg" alt="" />
        }
       
      </div>
    </div>
    </div>

    </div>
    {/* -------------------Branch Accordian Content------------------ */}
    
    {
        showAccordianContent && <div className="branchAccordianContent" >

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
            <div className="isBranchStatusCheckBox">
                <div className="isBranchStatusHeader">
                  <label htmlFor="">Status<span style={{color:"red"}}>*</span></label>
                </div>
                    <div className="BranchactiveCheckBox">
                      <input type="checkbox" disabled={true}  defaultChecked={item.branchStatus == true ? checked : ""}/>
                      <p>Active</p>
                    </div>
    
                    <div className="BranchinactiveCheckBox">
                      <input type="checkbox" disabled={true}  defaultChecked={item.branchStatus == false ? checked : ""}/>
                      <p>Inactive</p>
                    </div>
                  </div>
            </div>
    
        </div>
        </div>
    
        {/* -------------Branch Address---------------------- */}
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
    }
    </>
  )
}

export default BranchDetailsAccordian