 import React, { Component } from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'

import environment from '../Environment'
import PostList from './PostList'
import { withRouter, Link } from 'react-router-dom'

const PostListPageQuery = graphql`
    query PostListPageQuery {
        allPosts {
            edges {
                node {
                    id
                    description
                    imageUrl
                }
            }
        }
    }
`

class PostListPage extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={PostListPageQuery}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        console.log(props)
                        return (
                            <div>
                                {props.allPosts.edges.map(({node}) =>
                                    <div key={node.id}>
                                        {node.id} - {node.imageUrl} - {node.description}
                                    </div>
                                )}
                                <Link to="/create">Create new post</Link>
                            </div>
                        )
                    }

                    return <div>Loading</div>
                }}
            />
        )
    }
}

export default PostListPage 