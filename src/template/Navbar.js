import React from "react";
import { Image, Icon, Grid } from "semantic-ui-react";
import profile_logo from "./images/man.png";

class Topbar extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row style={{ marginTop: "10px" }}>
          <Grid.Column width={8}>
            <Image
              src={profile_logo}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <div style={{ color: "white", marginLeft: "-15px" }}>
              <br />
              Welcome<br />
              <strong>SV Admin</strong>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          style={{ marginTop: "20px", color: "white" }}
          className="pointer"
        >
          <Grid.Column width={3}>
            <Icon name="file text outline" size="large" />
          </Grid.Column>
          <Grid.Column width={13}>My Client List</Grid.Column>
        </Grid.Row>

        <Grid.Row
          style={{ marginTop: "10px", color: "white" }}
          className="pointer"
        >
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
