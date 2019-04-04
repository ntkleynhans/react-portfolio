import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;
    return (
      <div style={{ display: 'inline-block', width: 100, margin: 10}} >
        <a href={link}><img src={image} alt="social-profile" style={{width:48, height: 48}}/></a>
      </div>
    )
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Social Profiles</h2>
        {
          SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
            return(
              <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
            )
          })
        }
      </div>
      )
  }
}

export default SocialProfiles;
