import React, { Component } from 'react'
import Post from './Post'
import {
	createFragmentContainer,
	graphql
} from 'react-relay'

class PostList extends Component {
	render() {
		return (
			<div>
				{this.props.post.allPosts.edges.map(({post}) =>
					<Post key={post.id} post={post} /> 
				)}
			</div>
		)
	}
}

// export default createFragmentContainer(PostList, graphql`
// 	fragment PostList_post on Query {
// 		allPosts(last: 100) @connection(key: "PostList_allPosts", filters: []) {
// 			edges {
// 				node {
// 					...Post_post
// 				}
// 			}
// 		}
// 	}
// `)


// class PostList extends Component {
// 	render() {
// 		const postsToRender = [{
// 			id: '1',
// 			description: 'sample 1',
// 			imageUrl: 'http://image1'
// 		}, {
// 			id: '2',
// 			description: 'sample 2',
// 			imageUrl: 'http://image2'			
// 		}]

// 		return (
// 			<div>
// 				{postsToRender.map(post => (
// 					<Post key={post.id} post={post}  />
// 				))}
// 			</div>
// 		)
// 	}
// }

export default PostList