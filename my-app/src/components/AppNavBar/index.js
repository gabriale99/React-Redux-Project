import React from 'react';
import { Drawer, /*Button,*/ List, Divider, ListItem, ListItemIcon, ListItemText, Icons } from '../';

const MailIcon = Icons.Mail;
const InboxIcon = Icons.MoveToInbox;

function AppNavBar() {

  function createList() {
    return (
      <div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

  }

  return (
    <div>
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
      >

      </Drawer>
    </div>
  );
}


export default AppNavBar;