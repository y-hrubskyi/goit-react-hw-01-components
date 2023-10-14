import css from './UserInfo.module.css';

export function UserInfo({ name, tag, location, avatar }) {
  return (
    <div className={css.description}>
      <img
        src={avatar}
        alt={name + ' avatar'}
        className={css.avatar}
        width="150"
      />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
}
