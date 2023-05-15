import user from './users/user.json';
import Profile from "./users/user";

import data from './stat/stat.json';
import Statistics from "./stat/stat";

import friends from './friends/friends.json';
import FriendList from "./friends/friends";

import transactions from './transactions/transactions.json';
import TransactionHistory from "./transactions/transactions";


const App = () => {
  return (<div>
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

