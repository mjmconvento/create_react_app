import React from "react";
import Inbox from "./Inbox";
import FullClient from "./complete_upload/FullClient";
import { Grid } from "semantic-ui-react";
import "./complete_upload/css/style.css";

class CompleteUpload extends React.Component {
  render() {
    return (
      <div>
        <Grid celled stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={10}>
              <h1>Streamline Verify</h1>
              <FullClient />
            </Grid.Column>
            <Grid.Column width={6}>
              <Inbox />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default CompleteUpload;
