import React from 'react';
import Profile from './Component/Profile/Profile';
import users from './json/user.json';
import Statistics from './Component/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import FriendList from './Component/FriendList/FriendList';
import transactions from './json/transactions.json';
import TransactionHistory from './Component/TransactionHistory/TransactionHistory';

console.log(users);
console.log(statisticalData);
console.log(transactions);

const App = () => {
  return (
      <div>
          <Profile
          avatar={users.avatar}
          name={users.name}
          tag= {users.tag}
          location={users.location}
          stats={users.stats}          
          />

          <Statistics 
          title="Upload stats"
          stats={ statisticalData }
          />

          <FriendList
          friends={friends}
          />

          <TransactionHistory
          items={transactions}
          />
      </div>
      
  );
};

export default App;
