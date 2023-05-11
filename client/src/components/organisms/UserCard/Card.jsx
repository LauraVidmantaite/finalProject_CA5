import React from "react";
import {
    StyledCard,
    StyledUserContent,
    StyledUserAvatar,
    StyledUserInfo,
    StyledUserName,
    StyledUserEmail,
    StyledCardInfo,
    StyledMembershipData,
    StyledLabel,
    StyledDates,
    StyledActions,
    StyledUpdateButton,
    StyledDeleteButton
} from './styles';
import { useUsers } from "../../../contexts/users-context";

const Card = ({
    id,
    name,
    surname,
    email,
    dateFrom,
    dateTo,
    isOdd
}) => {
    const { editUser, deleteUser } = useUsers()

    return (
        <StyledCard isOdd={isOdd}>
            <StyledUserContent>
                <StyledUserAvatar isOdd={isOdd}><p>{name[0].toUpperCase()}</p></StyledUserAvatar>
                <StyledUserInfo>
                    <StyledUserName>{`${name} ${surname}`}</StyledUserName>
                    <StyledUserEmail>{email}</StyledUserEmail>
                </StyledUserInfo>
            </StyledUserContent>
            <StyledCardInfo>
                <StyledMembershipData>
                    <StyledLabel>Membership duration:</StyledLabel>
                    <StyledDates>
                        <p>{dateFrom}</p>
                        <p>{dateTo}</p>
                    </StyledDates>
                </StyledMembershipData>
                <StyledActions>
                    <StyledUpdateButton onClick={() => editUser(id)} />
                    <StyledDeleteButton onClick={() => deleteUser(id)} />
                </StyledActions>
            </StyledCardInfo>
        </StyledCard>
    );
};

export default Card;
