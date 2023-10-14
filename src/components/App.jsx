// components
import { Profile } from 'components/Profile/Profile';
import { Statictics } from 'components/Statictics/Statictics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

// styles
import css from './App.module.css';

// data
import user from 'data/user.json';
import statistics from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statictics title="Upload Stats" statistics={statistics} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
