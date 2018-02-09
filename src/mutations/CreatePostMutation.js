import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation CreatePostMutation($description: String, $imageUrl: String) {
    createPost(description: $description, imageUrl: $imageUrl) {
      ok
    }
  }
`;

export default function CreatePostMutation(description, imageUrl, callback) {
  const variables = {
    description,
    imageUrl
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      console.log(response, environment);
      console.log(variables);
      console.log(mutation);

      // callback()
    },
    onError: err => console.error(err)
  });
}
