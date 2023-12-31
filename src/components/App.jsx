import user from 'data/user.json'
import data from 'data/data.json'
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'

import { Profile } from './Profile/Profile';
import { StatisticsList } from './StatiscticsList/StatisticsList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistoryBoard } from './TransactionHistory/TransactionHistoryBoard';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data}/>
      <FriendList friends= {friends}/>
      <TransactionHistoryBoard items={transactions}/>
    </>
  );
};
