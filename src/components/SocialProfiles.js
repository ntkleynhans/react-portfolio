import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
  const { link, image } = props.socialProfile;
  return (
    <span style={{ width: 75, margin: 10}} >
      <a href={link}><img src={image} alt="social-profile" style={{width:48, height: 48}}/></a>
    </span>
  )
}

const SocialProfiles = () => (
  <div>
    <h2>Social Profiles</h2>
    {
      SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
      ))
    }
  </div>
)

export default SocialProfiles;
