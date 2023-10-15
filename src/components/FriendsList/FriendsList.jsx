import { FriendItem } from 'components/FriendsList/FriendsItem/FriendsItem';
import { FriendsListWrapper } from './FriendsList.styled';

export function FriendsList({ friends }) {
  return (
    <FriendsListWrapper>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsListWrapper>
  );
}
