import React, { Component } from "react";
import { Grid, Search, Dropdown } from "semantic-ui-react";
import InboxData from './InboxData'

class Inbox extends Component {
  render() {

    const selectOptions = [ 
      { 
        key: 1, 
        value: 'opt_1', 
        text: 'Option 1' 
      },
      { 
        key: 2, 
        value: 'opt_2', 
        text: 'Option 2'
      },
    ]

    return (
      <div>
        <div>My Inbox</div>
        <br />
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Search />
              </Grid.Column>
              <Grid.Column width={8}>
                <Dropdown placeholder="Select Friend" fluid selection options={selectOptions} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <InboxData />
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <center>See all</center>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Inbox;
