import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'


const mutation = graphql`
    mutation UploadFileMutation ($file: Upload)  {
        uploadFile(file: $file) {
            ok
        }
    }
`;


export default function UploadFileMutation(file, onCompleted, onError) {
    const variables = {
        input: file,
    };

    let uploadables;

    if (file) {
        uploadables = {
            file,
        };
    }

    // console.log(uploadables);
    // console.log(file);
    commitMutation(environment, {
        mutation,
        variables,
        uploadables,
        onCompleted: (response) => {
                console.log(response)
                // console.log(variables)
                // console.log(mutation)

                // callback()

            },
        onError: err => console.error(err),
    });
}

