import React, { Component } from 'react';
import { Accordion, Icon, Table, Grid, Image } from 'semantic-ui-react';
import green_status from './images/green.png';
import yellow_status from './images/yellow.png';
import ModalUpload from './ModalUpload';
import ModalMessage from './ModalMessage';
import ModalClientUpload from './ModalClientUpload';
import './css/sv_admin.css';

class FullClient extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const data = require("./data/full_service_clients_data");

    return (
      <Accordion styled className="full-width" id="client_accordion">
        {data.map(data_node => (
          <div key={data_node.id}>
            <Accordion.Title
              active={activeIndex === data_node.index}
              index={data_node.index}
              onClick={this.handleClick}
              className="accordion-title"
            >
              <Icon name="dropdown" />
              <strong>{data_node.title}</strong>
            </Accordion.Title>

            <Accordion.Content active={activeIndex === data_node.index}>
              <Table celled padded>
                <Table.Body>
                  {data_node.data_table_content.map(data_content => (
                    <Table.Row key={data_content.id}>
                      <Table.Cell>
                        <Grid>
                          <Grid.Row>
                            <Grid.Column width={2}>
                              {data_content.status === "yellow_status" ? (
                                <Image
                                  className="status-image"
                                  src={yellow_status}
                                />
                              ) : (
                                <Image
                                  className="status-image"
                                  src={green_status}
                                />
                              )}
                            </Grid.Column>
                            <Grid.Column width={11}>
                              <div>
                                <strong>{data_content.client_name}</strong>
                              </div>
                              <div className="last-activity">
                                Last Activity: {data_content.last_activity}
                              </div>
                              <div>
                                <Icon name="upload" color="blue" />
                                <ModalUpload />
                              </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                              <ModalClientUpload />
                              <ModalMessage />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Accordion.Content>
          </div>
        ))}
      </Accordion>
    );
  }
}

export default FullClient;
