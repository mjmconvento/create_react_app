// import { SubscriptionClient } from 'subscriptions-transport-ws';

const { Environment, Network, RecordSource, Store } = require("relay-runtime");

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const request = {
    method: "POST",
    headers: {}
  };

  // console.log(operation);
  // console.log(variables);
  if (uploadables) {
    if (!window.FormData) {
      throw new Error("Uploading files without `FormData` not supported.");
    }

    const formData = new FormData();
    formData.append("query", operation.text);
    formData.append("variables", JSON.stringify(variables));

    Object.keys(uploadables).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        formData.append(key, uploadables[key]);
      }
    });

    request.body = formData;
  } else {
    request.headers["Content-Type"] = "application/json";
    request.body = JSON.stringify({
      query: operation.text,
      variables
    });
  }

  // console.log(request);

  // return fetch("http://127.0.0.1:5000/graphql", request).then(response => {
  //   return response.json();
  // });

  // return fetch('http://127.0.0.1:5000/graphql', {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //     'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         query: operation.text,
  //         variables,
  //     }),
  // }).then(response => {
  //     console.log(operation.text);
  //     console.log(variables);
  //     return response.json()
  // })
}

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text;

  const subscriptionClient = new SubscriptionClient(
    'wss://subscriptions.us-west-2.graph.cool/v1/cj5zkeqs96v0u01047kxj21wg',
    { reconnect: true },
  );
  subscriptionClient.subscribe({ query, variables }, (error, result) => {
    observer.onNext({ data: result });
  });
};

const network = Network.create(fetchQuery, setupSubscription);

const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store
});
