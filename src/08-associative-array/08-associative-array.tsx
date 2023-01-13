import React from 'react';

export type UserType = {
    [key: string]: { id: number, name: string }
}
const AssociativeArray = () => {
    const users: UserType = {
        '101': {id: 101, name: 'Dima'},
        '1543': {id: 1543, name: 'Nina'},
        '54443': {id: 54443, name: 'Ilya'},
        '1': {id: 1, name: 'Sasha'},
    }
    const user = {id: 32, name: 'Vova'}
    console.log(users)
    return (
        <div>
            {users['1'].id}
            {users[user.id] = user} //add new user with key like id
        </div>
    );
};

export default AssociativeArray;
