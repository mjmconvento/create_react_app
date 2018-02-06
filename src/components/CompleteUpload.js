import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../Environment'
import { Accordion, Icon, Table, Grid, Image, Search, Dropdown, Modal, Header, Button, Form } from 'semantic-ui-react'
import logo1 from './complete_upload/images/logo1.jpg'
import logo2 from './complete_upload/images/logo2.jpeg'
import './complete_upload/css/style.css'
import UploadFileMutation from '../mutations/UploadFileMutation'


class CompleteUpload extends React.Component {
    
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(
            this
        );
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this._uploadFile(this.fileInput.files[0]);
    }


    render() {

        const { activeIndex } = this.state
        
        return (
            <div>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={10}>
                        <Accordion>
                            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                <Icon name='dropdown' />
                                Full service client 01 lists
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>

                                <Table celled padded>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={2}>
                                                            <Image src={logo1} size='small' />
                                                        </Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <div>Texas Nursing Home</div>
                                                            <div className='last-activity'>Last Activity: 01/01/2018</div>
                                                            <div>
                                                                <Icon name='upload' color='blue' />

                                                                <Modal trigger={<u><a href='#'>Upload report</a></u>}>
                                                                    <Modal.Header>Upload Report - Texas Nursing Home</Modal.Header>
                                                                    <Modal.Content image>
                                                                        <Image wrapped size='medium' src='' />
                                                                        <Modal.Description>

                                                                        <Form.Field>
                                                                            <label>
                                                                                Upload file:
                                                                                <input
                                                                                    type="file"
                                                                                    ref={input => {
                                                                                        this.fileInput = input;
                                                                                    }}
                                                                                />
                                                                            </label>
                                                                            <br />
                                                                            <Button content='Click Here' onClick={this.handleSubmit} />
                                                                        </Form.Field>


                                                                        </Modal.Description>
                                                                    </Modal.Content>
                                                                </Modal>

                                                                
                                                            </div>
                                                        </Grid.Column>
                                                        <Grid.Column width={2}>
                                                            <Icon name='folder open' size='big' color='grey' />
                                                            <Icon name='comments' size='big' color='blue' />
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>

                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={2}>
                                                            <Image src={logo2} size='small' />
                                                        </Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <div>Medical company</div>
                                                            <div className='last-activity'>Last Activity: 01/01/2018</div>
                                                            <div>
                                                                <Icon name='upload' color='blue' />
                                                                <u>Upload report</u>
                                                            </div>
                                                        </Grid.Column>
                                                        <Grid.Column width={2}>
                                                            <Icon name='folder open' size='big' color='grey' />
                                                            <Icon name='comments' size='big' color='blue' />
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                            </Table.Cell>

                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <div>Branx Hospital</div>
                                                <div>Last Activity: 10/01/2017</div>
                                                <div><Icon name='upload'/>Upload report</div>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>

                            </Accordion.Content>

                            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                                <Icon name='dropdown' />
                                Full service client 02 lists
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <p>
                                    There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
                                    {' '}dog that they find to be compatible with their own lifestyle and desires from a companion.
                                </p>
                            </Accordion.Content>

                            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                                <Icon name='dropdown' />
                                Full service client 03 lists
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <p>
                                    Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
                                </p>
                                <p>
                                    A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
                                    {' '}assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your
                                    {' '}dog from a shelter, helps give a good home to a dog who may not find one so readily.
                                </p>
                            </Accordion.Content>
                        </Accordion>

                        </Grid.Column>


                        <Grid.Column width={6}>
                            <div>My Inbox</div>
                            <div>


                                <Grid celled>
                                    <Grid.Row>
                                        <Grid.Column width={8}>
                                            <Search/> 
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <Dropdown placeholder='Select Friend' fluid selection />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>



                                <Table celled>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={1}>
                                                            <Icon name='file text outline'/>
                                                        </Grid.Column>
                                                        <Grid.Column width={15}>
                                                            <u>11-16-2017</u>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={1}></Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <strong>Full service client 01</strong> submitted new file for <u>Texas Nursing Home</u>
                                                        </Grid.Column>
                                                        <Grid.Column width={3}><strong>...</strong></Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Table.Cell>
                                        </Table.Row>


                                        <Table.Row>
                                            <Table.Cell>
                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={1}>
                                                            <Icon name='reply'/>
                                                        </Grid.Column>
                                                        <Grid.Column width={15}>
                                                            <u>11-12-2017</u>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={1}></Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <strong>Full service client 01</strong> replied on your comment for <u>Texas Nursing Home</u>
                                                        </Grid.Column>
                                                        <Grid.Column width={3}><strong>...</strong></Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={1}>
                                                            <Icon name='reply'/>
                                                        </Grid.Column>
                                                        <Grid.Column width={15}>
                                                            <u>11-11-2017</u>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={1}></Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <strong>Full service client 01</strong> replied on your comment for <u>Texas Nursing Home</u>
                                                        </Grid.Column>
                                                        <Grid.Column width={3}><strong>...</strong></Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Table.Cell>
                                        </Table.Row>


                                        <Table.Row>
                                            <Table.Cell>
                                                See all
                                            </Table.Cell>
                                        </Table.Row>

                                    </Table.Body>
                                </Table>
                                 
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

    _uploadFile = (file) => {
        // const {description, imageUrl} = this.state
        UploadFileMutation(file, () => console.log('Mutation Completed'))
    }

}

export default CompleteUpload