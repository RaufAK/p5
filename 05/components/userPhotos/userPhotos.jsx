import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchModel from '../../lib/fetchModelData';

const UserPhotos = () => {
    const { userId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        FetchModel(`/photosOfUser/${userId}`)
            .then((response) => setPhotos(response.data))
            .catch((error) => console.error(error));
    }, [userId]);

    return (
        <div>
            <h2>User Photos</h2>
            {photos.map((photo) => (
                <div key={photo._id}>
                    <img src={`images/${photo.file_name}`} alt={`Photo by ${userId}`} />
                    <p>Date: {photo.date_time}</p>
                    <h3>Comments:</h3>
                    {photo.comments.map((comment) => (
                        <div key={comment._id}>
                            <p>Date: {comment.date_time}</p>
                            <p>
                                User: <Link to={`/users/${comment.user._id}`}>{comment.user.first_name}</Link>
                            </p>
                            <p>Comment: {comment.comment}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default UserPhotos;
