import React from 'react';
import faker from 'faker';

 {/*Profile, Year Joined, Memo, and Frinds */}
const Profile  = (props) => {
    return(
       
<div className="ui card">
  <div className="image">
    <img src={props.avatar} style={{height:'60px', width: '60px'}}/>
  </div>
  <div className="content">
    <a className="header">{props.firstName}  {props.lastName}</a>
    <div className="meta">
      <span className="date">{props.joined}</span>
    </div>
    <div className="description">
     {props.description}
    </div>
  </div>
  <div className="extra content">
    <a>
    <div className="online">Online <br /></div>
      <i className="user icon"></i>
      {props.number_friends} Friends
    </a>
  </div>


</div>



    );
};

export default Profile;