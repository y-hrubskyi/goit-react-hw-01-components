// import { UserInfo } from 'components/Profile/UserInfo/UserInfo';
// import { UserStats } from 'components/Profile/UserStats/UserStats';
import css from './Profile.module.css';

export function Profile({ username, tag, location, avatar, stats }) {
  const statsEntries = Object.entries(stats);
  const statsList = statsEntries.map(([statType, quantity]) => (
    <li key={statType} className={css.statsItem}>
      <span className={css.label}>{statType}</span>
      <span className={css.quantity}>{quantity}</span>
    </li>
  ));

  return (
    <div className={css.profileWrapper}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={username + ' avatar'}
          className={css.avatar}
          width="150"
        />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>{statsList}</ul>
    </div>
  );
}
