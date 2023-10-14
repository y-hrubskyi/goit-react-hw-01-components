import { FriendItem } from 'components/FriendsList/FriendsItem/FriendsItem';
import css from './FriendsList.module.css';

export function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
