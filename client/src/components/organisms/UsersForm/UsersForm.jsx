import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input/Input';
import Form from '../../molecules/Form';
import { ReactComponent as IconUser } from '../../../icons/user.svg';
import { ReactComponent as IconUserEmail } from '../../../icons/userEmail.svg';
import { StyledInputs, StyledButtonContainer } from './styles';
import { useUsers } from '../../../contexts/users-context';

const DATE_FORMAT = 'YYYY-MM';
const now = dayjs();
const nowAfterMoth = now.add(1, 'month');

const UserForm = () => {
  const { editableUser, createNewUser, updateUser } = useUsers();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [dateFrom, setDateFrom] = useState(now);
  const [dateTo, setDateTo] = useState(nowAfterMoth);

  const handleDateFromChange = (event) => {
    const dateFromStr = event.target.value;
    const newDateFrom = dayjs(dateFromStr);
    setDateFrom(newDateFrom);

    const monthDiff = dateTo.diff(newDateFrom, 'month');
    if (monthDiff <= 0) {
      setDateTo(newDateFrom.add(1, 'month'));
    }
  };

  const handleDateToChange = (event) => {
    const dateToStr = event.target.value;
    const newDateTo = dayjs(dateToStr);
    setDateTo(newDateTo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      surname,
      email,
      dateFrom: dateFrom.format(DATE_FORMAT),
      dateTo: dateTo.format(DATE_FORMAT),
    };
    if (editableUser) {
      updateUser(formData)
    } else {
      createNewUser(formData)
    }
  };

  useEffect(() => {
    if (editableUser !== null) {
      setName(editableUser.name)
      setSurname(editableUser.surname)
      setEmail(editableUser.email)
      setDateFrom(dayjs(editableUser.dateFrom))
      setDateTo(dayjs(editableUser.dateTo))
    } else {
      setName('')
      setSurname('')
      setEmail('')
      setDateFrom(now)
      setDateTo(nowAfterMoth)
    }
  }, [editableUser]);

  return (
    <Form action={handleSubmit}>
      <StyledInputs>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          label="Name"
          placeholder="Enter name"
          icon={IconUser}
        />
        <Input
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          type="text"
          label="Surname"
          placeholder="Enter surname"
          icon={IconUser}
        />
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          label="Email"
          placeholder="Enter email address"
          icon={IconUserEmail}
        />
        <Input
          type="month"
          label="Date from:"
          value={dateFrom.format(DATE_FORMAT)}
          onChange={handleDateFromChange}
          min={now.format(DATE_FORMAT)}
        />
        <Input
          type="month"
          label="Date to:"
          value={dateTo.format(DATE_FORMAT)}
          onChange={handleDateToChange}
          min={dateFrom.add(1, 'month').format(DATE_FORMAT)}
        />
      </StyledInputs>
      <StyledButtonContainer>
        <Button type="submit" icon={<i className="fa-solid fa-plus"></i>}>{editableUser ? 'Update' : 'Create'}</Button>
      </StyledButtonContainer>
    </Form>
  );
};

export default UserForm;
