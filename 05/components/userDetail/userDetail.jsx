import React from 'react';
import {
  Typography
} from '@mui/material';
import './userDetail.css';


/**
 * Define UserDetail, a React component of project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          user: null,
      };
  }

  componentDidMount() {
      const userID = this.props.match.params.userId;
      const user = this.props.match.params.userId;
      this.setState({ user });
  }


  render() {
    const { user } = this.state;
    return (
        <div>
            <Typography variant={"h4"}>
                User Details
            </Typography>
            <Typography variant={"body1"}>
                Name: {user.first_name} {user.last_name}
                Location: {user.location}
                Description: {user.description}
                Occupation: {user.occupation}
            </Typography>
        </div>
    );
  }
}

export default UserDetail;
