import React from 'react';
import {
  Divider,
  List,
  ListItem, ListItemButton,
  ListItemText,
  Typography,
}
  from '@mui/material';
import './userList.css';

/**
 * Define UserList, a React component of project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: window.models.userListModel()
    };
  }

    render() {
        return (
            <div>
                <Typography variant="body1">
                    This is the user list, which takes up 3/12 of the window.
                    You can use Lists and Dividers to display your users like so:
                </Typography>
                <List component="users">
                    {this.state.users.map(user => (
                        <div key={user._id}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${user.first_name} ${user.last_name}`} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </div>
        );
    }
}

export default UserList;
