import css from './FriendsItem.module.css';

export function FriendItem({ name, avatar, isOnline }) {
  const color = isOnline ? 'green' : 'red';
  return (
    <li className={css.friendsItem}>
      <span className={css.status} style={{ backgroundColor: color }}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}
