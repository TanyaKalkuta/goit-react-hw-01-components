import React from 'react';
import Profile from './Component/Profile/Profile';
import users from './json/user.json';
import Statistics from './Component/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';

console.log(users);
console.log(statisticalData);

const App = () => {
  return (
      <div>
          <Profile
          avatar={users.avatar}
          name={users.name}
          tag= {users.tag}
          location={users.location}          
          followers={users.stats.followers}
          views={users.stats.views}
          likes={users.stats.likes}        
          />

          <Statistics
          title="Upload stats"
          stats={statisticalData}
          />;
      </div>
      
  );
};

export default App;
