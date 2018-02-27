import { graphql, requestSubscription } from 'react-relay';
import environment from '../Environment';

const newMessageSubscription = graphql`
  subscription NewMessageSubscription {
    countSeconds(upTo: 5)
  }
`;

// const newMessageSubscription = graphql`
//   subscription NewMessageSubscription {
//     post {
//         id
//     }
//   }
// `;

export default () => {
  const subscriptionConfig = {
    subscription: newMessageSubscription,
    variables: {'upTo' : 5},
    onCompleted: () => console.log('completed'),
    updater: proxyStore => {
      console.log('subscription successful')
    },
    onNext: () => console.log('next'),
    onError: error => console.log('An error ocurred', error),
  };

  requestSubscription(environment, subscriptionConfig);
};
