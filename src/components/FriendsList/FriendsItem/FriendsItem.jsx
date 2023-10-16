import { Avatar, FriendsListItem, Name, Status } from './FriendsItem.styled';

export function FriendItem({ name, avatar, isOnline }) {
  return (
    <FriendsListItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name + ' avatar'} width="48" />
      <Name>{name}</Name>
    </FriendsListItem>
  );
}
