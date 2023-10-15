import { Avatar, FriendsListItem, Name, Status } from './FriendsItem.styled';

export function FriendItem({ name, avatar, isOnline }) {
  const color = isOnline ? 'green' : 'red';
  return (
    <FriendsListItem>
      <Status style={{ backgroundColor: color }}></Status>
      <Avatar src={avatar} alt={name + ' avatar'} width="48" />
      <Name>{name}</Name>
    </FriendsListItem>
  );
}
