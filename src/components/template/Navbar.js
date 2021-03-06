import React from 'react';
import { Image, Icon, Grid } from 'semantic-ui-react';
import profile_logo from './images/man.png';
import './css/navbar.css';


class Topbar extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row style={{ marginTop: "10px" }}>
          <Grid.Column width={8}>
            <Image
              src={profile_logo}
              className="profile-logo"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <div className="profile-logo-text">
              <br />
              Welcome<br />
              <strong>SV Admin</strong>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="pointer first-nav">
          <Grid.Column width={3}>
            <Icon name="file text outline" size="large" />
          </Grid.Column>
          <Grid.Column width={13} className="white-text">My Client List</Grid.Column>
        </Grid.Row>

        <Grid.Row className="pointer nav">
          <Grid.Column width={3}>
            <Icon name="bar chart" size="large" />
          </Grid.Column>
          <Grid.Column width={13}>My Reports</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Topbar;
