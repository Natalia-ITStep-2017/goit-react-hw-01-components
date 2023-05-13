import user from './user.json';
import Profile from "./user"; 

import data from './stat.json';
import Statistics from "./stat"; 

import friends from './friends.json';
import FriendList from "./friends"; 

import transactions from './transactions.json';
import TransactionHistory from "./transactions"; 


 const App = () => {
  return  ( <div>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    /> 
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>)
  
}
export default App

