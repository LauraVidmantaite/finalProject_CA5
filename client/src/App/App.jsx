import React from 'react';
import { useUsers } from '../contexts/users-context';
import useIsDesktopSize from '../hooks/useIsDesktopSize';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/atoms/Button';
import AddButton from '../components/atoms/AddButton/AddButton';
import Modal from '../components/molecules/Modal';
import UsersForm from '../components/organisms/UsersForm/UsersForm';
import UsersTable from '../components/organisms/UsersTable';
import UsersCards from '../components/organisms/UsersCards';
import {
  StyledBody,
  StyledContainer,
  StyledHeadingContainer,
  StyledHeadingContent,
  StyledHeading,
  StyledCopy,
  StyledPagination
} from './styles';

const App = () => {
  const isDesktopSize = useIsDesktopSize();
  const { usersModalOpen, createUser, editableUser, closeUsersModal, pageCount, setPage, page } = useUsers();

  return (
    <>
      <StyledBody>
        <Header />
        <StyledContainer>
          <StyledHeadingContainer>
            <StyledHeadingContent>
              <StyledHeading>Clients</StyledHeading>
              <StyledCopy>View your clients’ information, update and delete accounts when necessary.</StyledCopy>
            </StyledHeadingContent>
            {isDesktopSize && (
              <Button
                icon={<i className="fa-solid fa-plus" />}
                action={createUser}
              >
                Add Client
              </Button>
            )}
          </StyledHeadingContainer>
          {isDesktopSize ? (<UsersTable />) : (<UsersCards />)}
          <StyledPagination>
            {Array.from(new Array(pageCount)).map((x, i) => i + 1).map(p => (
              <Button
                key={p}
                action={() => setPage(p)}
                secondary='secondary'
                disabled={p != page}
              >
                {p}
              </Button>
            ))}
          </StyledPagination>
        </StyledContainer>
        {!isDesktopSize && (<AddButton action={createUser} />)}
        <Footer />
      </StyledBody>
      <Modal
        onClose={closeUsersModal}
        title={editableUser ? 'Update Client Info' : 'Create New Account'}
        isOpen={usersModalOpen}
      >
        <UsersForm />
      </Modal>
    </>
  );
};

export default App;
