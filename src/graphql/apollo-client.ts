import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {envVariables} from '../libs/env-variables';
import {useAccessTokenState} from '../hooks/use-authentication';
import {isJwtExpired} from 'jwt-check-expiration';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: envVariables.BACKEND_URL,
})


const authLink = setContext((_, { headers }) => {
  const {accessToken} = useAccessTokenState.getState();
  return {
    headers: {
      ...headers,
      Authorization: accessToken ? `${accessToken}` : "",
    }
  }
});

const refreshLink = new ApolloLink((operation, forward) => {
  const {accessToken} = useAccessTokenState.getState();

  if (accessToken && isJwtExpired(accessToken)) {
    // TODO: implement refresh link
    //return fromPromise(appAuthService.refreshTokenFromApi()).flatMap(() => forward(operation));
  }

  return forward(operation);
});

//
// const authLink = new ApolloLink((operation, forward) => {
//   // console.log('authLink', authLink);
//   // const {accessToken} = useAccessTokenState.getState();
//   // console.log('accessToken', accessToken);
//   // if (!accessToken) {
//   //   return forward(operation);
//   // }
//   //
//   // operation.setContext(({ headers }: { headers: Record<string, any> }) => ({
//   //   headers: {
//   //     ...headers,
//   //     authorization: `Bearer ${accessToken}`,
//   //   },
//   // }));
//
//   return forward(operation);
// });
//
// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
//   },
//   from([httpLink]),
// );


export const apolloClient = new ApolloClient({
  uri: envVariables.BACKEND_URL,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})
