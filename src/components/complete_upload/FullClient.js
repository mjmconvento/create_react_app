import React, { Component } from "react";
import {
  Accordion,
  Icon,
  Table,
  Grid,
  Image,
} from "semantic-ui-react";
import logo2 from "./images/logo2.jpeg";
import ModalUpload from "./ModalUpload";

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

    const data = [
      {
        id: 1,
        index: 0,
        title: "Full service client 01 lists",
        data_table_content: [
          {
            id: 1,
            client_name: 'Texas Nursing Home',
            last_activity: '01/01/2018'
          },
          {
            id: 2,
            client_name: 'Medical company',
            last_activity: '01/01/2018'
          },
          {
            id: 3,
            client_name: 'Branx Hospital',
            last_activity: '10/01/2017'
          }
        ]
      },
      {
        id: 2,
        index: 1,
        title: "Full service client 02 lists",
        data_table_content: [
          {
            id: 1,
            client_name: 'Texas Nursing Home',
            last_activity: '01/01/2018'
          },
          {
            id: 2,
            client_name: 'Medical company',
            last_activity: '01/01/2018'
          },
          {
            id: 3,
            client_name: 'Branx Hospital',
            last_activity: '10/01/2017'
          }
        ]
      },
      {
        id: 3,
        index: 2,
        title: "Full service client 03 lists",
        data_table_content: [
          {
            id: 1,
            client_name: 'Texas Nursing Home',
            last_activity: '01/01/2018'
          },
          {
            id: 2,
            client_name: 'Medical company',
            last_activity: '01/01/2018'
          },
          {
            id: 3,
            client_name: 'Branx Hospital',
            last_activity: '10/01/2017'
          }
        ]
      },
    ];

    return (
      <Accordion>
        {data.map(data_node => (
          <div key={data_node.id}>
            <Accordion.Title
              active={activeIndex === data_node.index}
              index={data_node.index}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Full service client 01 lists
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
                              <Image src={logo2} size="small" />
                            </Grid.Column>
                            <Grid.Column width={11}>
                              <div>{data_content.client_name}</div>
                              <div className="last-activity">
                                Last Activity: {data_content.last_activity}
                              </div>
                              <div>
                                <Icon name="upload" color="blue" />
                                <ModalUpload />
                              </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                              <Icon name="folder open" size="big" color="grey" />
                              <Icon name="comments" size="big" color="blue" />
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
