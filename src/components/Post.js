import React, { Component } from 'react'
import {
	createFragmentContainer,
	graphql
} from 'react-relay'

class Post extends Component {
	render() {
		return (
			<div>
				Post
			</div>
		)
	}
}


// export default createFragmentContainer(Post, graphql`
// 	fragment Post_post on Post {
// 		id
// 		description
// 		imageUrl
// 	}
// `)

export default Post 