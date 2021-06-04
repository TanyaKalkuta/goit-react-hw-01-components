import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.friend_list}>
        {friends.map(({ id, avatar, name, isOnline }) => {
            const status = isOnline ? styles.status_isOnline : styles.status_isOffline;
            return (
                <li key={id} className={styles.item}>
                    <span className={status}>{isOnline}</span>
                    <img className={styles.avatar} src={avatar} alt="" width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            )
        })}
  </ul>
    
)



FriendList.propTypes = {
     friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }))
};

export default FriendList;