import {useCallback} from 'react';
import {useSignInMutation} from '../graphql/generated';
import {ethereum} from '../libs/ethereum';
import {envVariables} from '../libs/env-variables';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {useApolloClient} from '@apollo/client';

type AccessTokenState = {
  accessToken: string | null,
  setAccessToken: (accessToken: string) => void,
  resetAccessToken: () => void,
}

export const useAccessTokenState = create<AccessTokenState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      setAccessToken: (accessToken: string) => set({accessToken}),
      resetAccessToken: () => set({accessToken: null}),
    }),
    {
      name: 'access-token',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuthentication = () => {
  const { accessToken, setAccessToken, resetAccessToken } = useAccessTokenState();
  const apolloClient = useApolloClient();

  const isSignedIn = Boolean(accessToken);
  const [mutate] = useSignInMutation();

  const signIn = useCallback(async () => {
    const message = await ethereum.signMessage(envVariables.AUTHORIZATION_MESSAGE);

    await mutate({
      variables: {message},
      onCompleted: (data) => {
        console.log('data', data);
        setAccessToken(data.signIn.accessToken);
      },
      onError: (error) => {
        console.log('error', error);
      }
    });
  }, [setAccessToken, mutate]);

  const logout = useCallback(async () => {
    resetAccessToken();
    await apolloClient.resetStore();
  }, [resetAccessToken, apolloClient]);

  return {
    logout,
    isSignedIn,
    accessToken,
    signIn,
  };
};
