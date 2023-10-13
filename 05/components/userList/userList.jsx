import React, { useEffect, useState } from 'react';
import FetchModel from '../../lib/fetchModelData';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        FetchModel('/user/list')
            .then((response) => setUsers(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{`${user.first_name} ${user.last_name}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
