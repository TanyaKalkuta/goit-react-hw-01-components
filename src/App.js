import React from 'react';
import Profile from './Component/Profile/Profile';
import users from './json/user.json';
import Statistics from './Component/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import FriendList from './Component/FriendList/FriendList';
import transactions from './json/transactions.json';
import TransactionHistory from './Component/TransactionHistory/TransactionHistory';
import Panel from './Component/Panel/Panel';
import Container from './Component/Container/Container';

console.log(users);
console.log(statisticalData);
console.log(transactions);

const App = () => {
  return (
    <Container>
      <Panel>
        <Profile
          avatar={users.avatar}
          name={users.name}
          tag= {users.tag}
          location={users.location}
          stats={users.stats}          
      />
      </Panel>
          
      <Panel>
         <Statistics 
          title="Upload stats"
          stats={ statisticalData }
          />
      </Panel>

         
      <Panel>
        <FriendList
          friends={friends} />
      </Panel>
         
      <Panel>
        <TransactionHistory
          items={transactions}
          />
      </Panel>
          
      </Container>
      
  );
};

export default App;
