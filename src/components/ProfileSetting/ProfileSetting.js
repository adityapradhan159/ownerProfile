import React,{useState} from 'react'
import BranchDetails from '../BranchDetails/BranchDetails';
import CompanyProfile from '../CompanyProfile/CompanyProfile';
import Managers from '../Managers/Managers';
import YourProfile from '../YourProfile/YourProfile';
import "./profileSetting.css"

const ProfileSetting = () => {

    // Toggle tabs
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  };

 

  return (
    <div className='ProfileSetting'>
        <div className="profileHeader">
            <h1>Profile Settings</h1>
        </div>

        <div className="profileSettingTabsContainer">

            {/* ---------------Profile Setting Tabs------------------ */}
            <div className="profileSettingTabs">

                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                <div className="profileIcon">
                    <img src="./images/Company.svg" alt="" />
                </div>
                Company Profile 
                </button>

                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                <div className="profileIcon">
                    <img src="./images/IdentityCard.svg" alt="" />
                </div>
                Your Profile
                </button>

                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                <div className="profileIcon">
                    <img src="./images/Bank.svg" alt="" />
                </div>
                Branches
                </button>

                <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                <div className="profileIcon">
                    <img src="./images/Office.svg" alt="" />
                </div>
                Manage Managers
                </button>

            </div>

            {/* ----------------------Profile Setting Tabs Content----------------------------- */}

            <div className="ProfileTabContent"  >

            {/* ----------------Company Profile----------------- */}
                <div className={toggleState === 1 ? "profileContent  active-profileContent" : "profileContent"}> 
                    <CompanyProfile/>                       
                </div>

            {/* ----------------Your Profile----------------- */}
                <div className={toggleState === 2 ? "profileContent  active-profileContent" : "profileContent"}>
                    <YourProfile/>
                </div>

            {/* ----------------Branches----------------- */}
                <div className={toggleState === 3 ? "profileContent  active-profileContent" : "profileContent"}>
                    <BranchDetails/>
                </div>

            {/* ----------------Manage Managers----------------- */}
                <div className={toggleState === 4 ? "profileContent  active-profileContent" : "profileContent"}>
               <Managers/>
                </div>
            </div>



        </div>
    </div>
  )
}

export default ProfileSetting