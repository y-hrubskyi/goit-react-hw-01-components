import { UserInfo } from 'components/Profile/UserInfo/UserInfo';
import { UserStats } from 'components/Profile/UserStats/UserStats';
import css from './Profile.module.css';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <UserInfo name={username} tag={tag} location={location} avatar={avatar} />
      <UserStats stats={stats} />
    </div>
  );
}
