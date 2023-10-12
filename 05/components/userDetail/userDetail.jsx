import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FetchModel from '../../lib/fetchModelData';

const UserDetail = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        FetchModel(`/user/${userId}`)
            .then((response) => setUser(response.data))
            .catch((error) => console.error(error));
    }, [userId]);

    return (
        <div>
            <h2>User Detail</h2>
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>Location: {user.location}</p>
            <p>Occupation: {user.occupation}</p>
            <Link to={`/photos/${userId}`}>View Photos</Link>
        </div>
    );
};

export default UserDetail;
