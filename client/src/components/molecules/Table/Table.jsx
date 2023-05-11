import React from 'react';
import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableDataCell,
  StyledAvatar,
  StyledUserName,
  StyledActions,
  StyledUpdateButton,
  StyledDeleteButton,
} from './styles';
import { useUsers } from '../../../contexts/users-context';

const Table = () => {
  const { users, editUser, deleteUser } = useUsers();

  return (
      <StyledTable>
        <StyledTableHead>
          <tr>
            <th>Name & Surname</th>
            <th>Email</th>
            <th>Date From</th>
            <th>Date To</th>
            <th />
          </tr>
        </StyledTableHead>
        <StyledTableBody>
          {users.map(({
            id, name, surname, email, dateFrom, dateTo,
          }) => (
            <tr key={id}>
              <td>
                <StyledTableDataCell>
                  <StyledAvatar><p>{name[0].toUpperCase()}</p></StyledAvatar>
                  <StyledUserName>
                    <p>{name}</p>
                    <p>{surname}</p>
                  </StyledUserName>
                </StyledTableDataCell>
              </td>
              <td>{email}</td>
              <td>{dateFrom}</td>
              <td>{dateTo}</td>
              <td>
                <StyledActions>
                  <StyledUpdateButton onClick={() => editUser(id)} />
                  <StyledDeleteButton onClick={() => deleteUser(id)} />
                </StyledActions>
              </td>
            </tr>
          ))}

        </StyledTableBody>
      </StyledTable>
  );
};

export default Table;
