import { graphql, requestSubscription } from 'react-relay';
import environment from '../Environment';

const newMessageSubscription = graphql`
  subscription NewMessageSubscription {
    posts {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default () => {
  const subscriptionConfig = {
    subscription: newMessageSubscription,
    variables: {},
    updater: proxyStore => {
      console.log('subscription successful')
    },
    onError: error => console.log('An error ocurred', error),
  };

  requestSubscription(environment, subscriptionConfig);
};
