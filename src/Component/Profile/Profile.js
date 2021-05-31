import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ avatar, name, tag, location, followers, views, likes}) => (
  <div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        class="avatar"
        width ='140'
      />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{ followers }</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>  
);

Profile.defaultProps = {
    url: "https://st.depositphotos.com/1781556/1326/i/600/depositphotos_13267901-stock-photo-cloud-icon-with-loading-text.jpg",
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;