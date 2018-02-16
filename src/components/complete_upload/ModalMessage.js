import React, { Component } from "react";
import {
  Icon,
  Modal,
  Button,
  TextArea,
  Form,
  Comment
} from "semantic-ui-react";
import avatar1 from "./images/avatar1.png";
import avatar3 from "./images/avatar3.png";

class ModalMessage extends Component {
  render() {
    return (
      <Modal
        trigger={
          <Icon name="comments" className="pointer" size="big" color="blue" />
        }

        closeIcon={true}
      >
        <Modal.Header>Texas Nursing Home</Modal.Header>
        <Modal.Content>
          <Comment.Group size="large">
            <Comment>
              <Comment.Avatar src={avatar1} />
              <Comment.Content>
                <Comment.Author as="a">Elliot Fu</Comment.Author>
                <Comment.Metadata>
                  <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>
                  <p>The new file seems fine. Will process it later</p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
              <Comment.Group size="large">
                <Comment>
                  <Comment.Avatar src={avatar3} />
                  <Comment.Content>
                    <Comment.Author as="a">Jenny Hess</Comment.Author>
                    <Comment.Metadata>
                      <div>4 days ago</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      Ok, let me know once you're done with the processing.
                      Thanks!
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Comment>

            <Comment>
              <Comment.Avatar src={avatar1} />
              <Comment.Content>
                <Comment.Author as="a">Elliot Fu</Comment.Author>
                <Comment.Metadata>
                  <div>Yesterday at 12:30AM</div>
                </Comment.Metadata>
                <Comment.Text>Ok, I'm done.</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>

          <Form>
            <TextArea rows="2" placeholder="..." />
            <Button
              positive
              content="Reply"
              size="small"
              className="pull-right"
              style={{ marginTop: "10px", marginBottom: "20px" }}
            />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalMessage;
