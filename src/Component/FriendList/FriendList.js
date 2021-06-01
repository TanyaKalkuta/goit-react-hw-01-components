import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} class="item">
                <span class="status">{isOnline}</span>
                <img class="avatar" src={avatar} alt="" width="48" />
                <p class="name">{name}</p>
            </li>
        ))}
  </ul>

    
    
)

// FriendList.defaultProps = {
//     url: "https://st.depositphotos.com/1781556/1326/i/600/depositphotos_13267901-stock-photo-cloud-icon-with-loading-text.jpg",
// }

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};

export default FriendList;