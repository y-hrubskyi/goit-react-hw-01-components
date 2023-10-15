import {
  Avatar,
  Description,
  Label,
  Location,
  ProfileWrapper,
  Quantity,
  StatsItem,
  StatsList,
  Tag,
  Username,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  const statsEntries = Object.entries(stats);
  const statsList = statsEntries.map(([statType, quantity]) => (
    <StatsItem key={statType}>
      <Label>{statType}</Label>
      <Quantity>{quantity}</Quantity>
    </StatsItem>
  ));

  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt={username + ' avatar'} width="150" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>{statsList}</StatsList>
    </ProfileWrapper>
  );
}
