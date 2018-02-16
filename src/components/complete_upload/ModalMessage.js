import React, { Component } from "react";
import {
  Icon,
  Grid,
  Modal,
  Button,
  Image,
  Dropdown,
  TextArea,
  Form
} from "semantic-ui-react";
import profile_pic from "./images/profile_pic.png";

class ModalMessage extends Component {
  render() {
    const selectOptions = [
      {
        key: 1,
        value: "opt_1",
        text: "By Date"
      }
    ];

    return (
      <Modal
        trigger={
          <Icon name="comments" className="pointer" size="big" color="blue" />
        }
      >
        <Modal.Header>Texas Nursing Home</Modal.Header>
        <Modal.Content>
          <Form>
            <h3>Comments</h3>
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column width={2}>
                  <div className="margin-modal-label pull-right">
                    <strong>Sort By</strong>
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Dropdown
                    placeholder="-- Select --"
                    fluid
                    selection
                    options={selectOptions}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row
                style={{
                  backgroundColor: "gray",
                  marginLeft: "5%",
                  marginRight: "5%",
                  height: "60px"
                }}
              >
                <Grid.Column width={2}>
                  <Icon
                    name="mail"
                    size="huge"
                    style={{ fontSize: "50px", lineHeight: ".65" }}
                  />
                </Grid.Column>
                <Grid.Column
                  width={3}
                  style={{
                    textDecoration: "underline",
                    fontSize: "20px",
                    paddingTop: "2px",
                    color: "#00008B"
                  }}
                >
                  Eric Cartman
                </Grid.Column>
                <Grid.Column
                  width={3}
                  style={{ fontSize: "14px", paddingTop: "8px" }}
                >
                  2 hours ago
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                <Grid.Column width={16}>
                  The new file seems fine. Will Process it later
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                <Grid.Column width={2} />
                <Grid.Column width={14} style={{ paddingTop: "10px" }}>
                  <div>New reply</div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row
                style={{
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  marginTop: "-20px"
                }}
              >
                <Grid.Column width={2}>
                  <Image src={profile_pic} className="profile-pic" />
                </Grid.Column>
                <Grid.Column width={14}>
                  <TextArea
                    className="reply-box"
                    placeholder="Type your comment here"
                    rows={3}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ paddingRight: "5%" }}>
                <Grid.Column width={13} />
                <Grid.Column width={3}>
                  <div className="pull-right">
                    <Button content="Post reply" positive />
                  </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row
                style={{
                  backgroundColor: "gray",
                  marginLeft: "15%",
                  marginRight: "5%",
                  height: "60px",
                  marginTop: "50px"
                }}
              >
                <Grid.Column width={2}>
                  <Icon
                    name="mail"
                    size="huge"
                    style={{ fontSize: "50px", lineHeight: ".65" }}
                  />
                </Grid.Column>
                <Grid.Column
                  width={3}
                  style={{
                    textDecoration: "underline",
                    fontSize: "20px",
                    paddingTop: "2px",
                    color: "#00008B"
                  }}
                >
                  Stan Marsh
                </Grid.Column>
                <Grid.Column
                  width={3}
                  style={{ fontSize: "14px", paddingTop: "8px" }}
                >
                  1 hour ago
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={{ marginLeft: "15%", marginRight: "5%" }}>
                <Grid.Column width={16}>
                  Ok, let me know once you're done with the processing. Thanks
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={{ marginRight: "5%", marginBottom: "50px" }}>
                <Grid.Column width={16}>
                  <Button
                    content="Reply"
                    className="pull-right"
                    size="tiny"
                    positive
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalMessage;
