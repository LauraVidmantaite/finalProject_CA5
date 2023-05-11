import React from 'react';
import UserCard from '../UserCard';
import { StyledCardsContainer } from './styles';
import { useUsers } from '../../../contexts/users-context';

const UsersCards = () => {
  const { users } = useUsers();
  return (
    <StyledCardsContainer>
      {users.map((props, index) => <UserCard key={props.id} {...props} isOdd={index % 2 !== 0} />)}
    </StyledCardsContainer>
  );
};

export default UsersCards;
