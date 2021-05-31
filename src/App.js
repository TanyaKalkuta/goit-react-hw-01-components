import React from 'react';
import Profile from './components/Profile/Profile';
import users from './json/user.json';

console.log(users);

const App = () => {
  return (
      <div>
          <Profile
          avatar={users.avatar}
          name={users.name}
          tag= {users.tag}
          location={users.location}          
          followers={users.followers}
          views={users.views}
          likes={users.likes}        
          />
          
    </div>
  );
};

export default App;
