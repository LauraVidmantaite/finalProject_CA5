import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import UsersService from '../services/UsersService';

const UsersContext = createContext({
  users: [],
});

const ROW_COUNT = 5;

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [editableUser, setEditbaleUser] = useState(null);
  const [usersModalOpen, setUsersModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(users.length / ROW_COUNT);

  useEffect(() => {
    UsersService.getAll().then(setUsers);
  }, []);

  const deleteUser = (userId) => {
    UsersService.remove(userId)
      .then(() => UsersService.getAll())
      .then(setUsers);
  }

  const createNewUser = (formData) => {
    UsersService.create(formData)
      .then(() => UsersService.getAll())
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
        setUsersModalOpen(false);
      });
  }

  const updateUser = (formData) => {
    UsersService.update(formData, editableUser.id)
      .then(() => UsersService.getAll())
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
        setUsersModalOpen(false);
      });
  }

  return (
    <UsersContext.Provider value={{
      users: pageCount > 1
        ? users.slice((page - 1) * ROW_COUNT, page * ROW_COUNT)
        : users,
      editableUser,
      page,
      pageCount,
      setPage,

      usersModalOpen,
      closeUsersModal: () => setUsersModalOpen(false),

      editUser: (userId) => {
        setEditbaleUser(users.find(x => x.id === userId));
        setUsersModalOpen(true);
      },

      createUser: () => {
        setEditbaleUser(null);
        setUsersModalOpen(true);
      },

      createNewUser,
      updateUser,
      deleteUser,
    }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);

export default UsersContext;
