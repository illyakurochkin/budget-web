import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String'];
};

export type BlockEntity = {
  __typename?: 'BlockEntity';
  amount: Scalars['Float'];
  amountInUSD: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  source: SourceEntity;
  sourceId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ChartInput = {
  sourceId?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<ChartType>;
};

export enum ChartType {
  AmountInUsd = 'AMOUNT_IN_USD',
  Dominance = 'DOMINANCE'
}

export type CreateBlockInput = {
  amount: Scalars['Float'];
  currency: Scalars['String'];
  sourceId: Scalars['ID'];
};

export type CreateSourceInput = {
  name: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type HistoryItem = {
  __typename?: 'HistoryItem';
  date: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlock: BlockEntity;
  createSource: SourceEntity;
  debug_createTestData: Scalars['Boolean'];
  deleteBlock: Scalars['ID'];
  deleteSource: Scalars['ID'];
  signIn: AuthPayload;
  updateSource: SourceEntity;
};


export type MutationCreateBlockArgs = {
  input: CreateBlockInput;
};


export type MutationCreateSourceArgs = {
  input: CreateSourceInput;
};


export type MutationDebug_CreateTestDataArgs = {
  userId: Scalars['ID'];
};


export type MutationDeleteBlockArgs = {
  blockId: Scalars['ID'];
};


export type MutationDeleteSourceArgs = {
  sourceId: Scalars['ID'];
};


export type MutationSignInArgs = {
  message: Scalars['String'];
};


export type MutationUpdateSourceArgs = {
  input: UpdateSourceInput;
  sourceId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  debug_getAllBlocks: Array<BlockEntity>;
  debug_getAllSources: Array<SourceEntity>;
  getBlocks: Array<BlockEntity>;
  getChart: Array<HistoryItem>;
  getSources: Array<SourceEntity>;
  getSummary: Summary;
};


export type QueryGetBlocksArgs = {
  sourceId: Scalars['ID'];
};


export type QueryGetChartArgs = {
  input?: InputMaybe<ChartInput>;
};


export type QueryGetSourcesArgs = {
  date?: InputMaybe<Scalars['DateTime']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetSummaryArgs = {
  currency?: InputMaybe<Scalars['String']>;
};

export type SourceEntity = {
  __typename?: 'SourceEntity';
  amount: Scalars['Float'];
  amountInUSD: Scalars['Float'];
  blocks: Array<BlockEntity>;
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  date: Scalars['DateTime'];
  dominance: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order?: Maybe<Scalars['Float']>;
  tags: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['ID'];
};

export type Summary = {
  __typename?: 'Summary';
  amount: Scalars['Float'];
  amountInUSD: Scalars['Float'];
  currency: Scalars['String'];
};

export type UpdateSourceInput = {
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type SourceFragment = { __typename?: 'SourceEntity', id: string, name: string, amount: number, tags: Array<string>, currency: string, dominance: number, amountInUSD: number, date: any };

export type BlockFragment = { __typename?: 'BlockEntity', id: string, date: any, amount: number, amountInUSD: number, createdAt: any, currency: string, sourceId: string, updatedAt: any };

export type GetSourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSourcesQuery = { __typename?: 'Query', sources: Array<{ __typename?: 'SourceEntity', id: string, name: string, amount: number, tags: Array<string>, currency: string, dominance: number, amountInUSD: number, date: any }> };

export type GetChatQueryVariables = Exact<{
  input: ChartInput;
}>;


export type GetChatQuery = { __typename?: 'Query', chart: Array<{ __typename?: 'HistoryItem', date: any, value: number }> };

export type SignInMutationVariables = Exact<{
  message: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthPayload', accessToken: string } };

export type DeleteSourceMutationVariables = Exact<{
  sourceId: Scalars['ID'];
}>;


export type DeleteSourceMutation = { __typename?: 'Mutation', deleteSource: string };

export type EditSourceMutationVariables = Exact<{
  sourceId: Scalars['ID'];
  input: UpdateSourceInput;
}>;


export type EditSourceMutation = { __typename?: 'Mutation', updateSource: { __typename?: 'SourceEntity', id: string, name: string, amount: number, tags: Array<string>, currency: string, dominance: number, amountInUSD: number, date: any } };

export type RefreshSourceMutationVariables = Exact<{
  input: CreateBlockInput;
}>;


export type RefreshSourceMutation = { __typename?: 'Mutation', createBlock: { __typename?: 'BlockEntity', id: string, date: any, amount: number, amountInUSD: number, createdAt: any, currency: string, sourceId: string, updatedAt: any } };

export const SourceFragmentDoc = gql`
    fragment Source on SourceEntity {
  id
  name
  amount
  tags
  currency
  dominance
  amountInUSD
  date
}
    `;
export const BlockFragmentDoc = gql`
    fragment Block on BlockEntity {
  id
  date
  amount
  amountInUSD
  createdAt
  currency
  sourceId
  updatedAt
}
    `;
export const GetSourcesDocument = gql`
    query GetSources {
  sources: getSources {
    ...Source
  }
}
    ${SourceFragmentDoc}`;

/**
 * __useGetSourcesQuery__
 *
 * To run a query within a React component, call `useGetSourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSourcesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSourcesQuery(baseOptions?: Apollo.QueryHookOptions<GetSourcesQuery, GetSourcesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSourcesQuery, GetSourcesQueryVariables>(GetSourcesDocument, options);
      }
export function useGetSourcesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSourcesQuery, GetSourcesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSourcesQuery, GetSourcesQueryVariables>(GetSourcesDocument, options);
        }
export type GetSourcesQueryHookResult = ReturnType<typeof useGetSourcesQuery>;
export type GetSourcesLazyQueryHookResult = ReturnType<typeof useGetSourcesLazyQuery>;
export type GetSourcesQueryResult = Apollo.QueryResult<GetSourcesQuery, GetSourcesQueryVariables>;
export const GetChatDocument = gql`
    query GetChat($input: ChartInput!) {
  chart: getChart(input: $input) {
    date
    value
  }
}
    `;

/**
 * __useGetChatQuery__
 *
 * To run a query within a React component, call `useGetChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetChatQuery(baseOptions: Apollo.QueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, options);
      }
export function useGetChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, options);
        }
export type GetChatQueryHookResult = ReturnType<typeof useGetChatQuery>;
export type GetChatLazyQueryHookResult = ReturnType<typeof useGetChatLazyQuery>;
export type GetChatQueryResult = Apollo.QueryResult<GetChatQuery, GetChatQueryVariables>;
export const SignInDocument = gql`
    mutation SignIn($message: String!) {
  signIn(message: $message) {
    accessToken
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const DeleteSourceDocument = gql`
    mutation DeleteSource($sourceId: ID!) {
  deleteSource(sourceId: $sourceId)
}
    `;
export type DeleteSourceMutationFn = Apollo.MutationFunction<DeleteSourceMutation, DeleteSourceMutationVariables>;

/**
 * __useDeleteSourceMutation__
 *
 * To run a mutation, you first call `useDeleteSourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSourceMutation, { data, loading, error }] = useDeleteSourceMutation({
 *   variables: {
 *      sourceId: // value for 'sourceId'
 *   },
 * });
 */
export function useDeleteSourceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSourceMutation, DeleteSourceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSourceMutation, DeleteSourceMutationVariables>(DeleteSourceDocument, options);
      }
export type DeleteSourceMutationHookResult = ReturnType<typeof useDeleteSourceMutation>;
export type DeleteSourceMutationResult = Apollo.MutationResult<DeleteSourceMutation>;
export type DeleteSourceMutationOptions = Apollo.BaseMutationOptions<DeleteSourceMutation, DeleteSourceMutationVariables>;
export const EditSourceDocument = gql`
    mutation EditSource($sourceId: ID!, $input: UpdateSourceInput!) {
  updateSource(sourceId: $sourceId, input: $input) {
    ...Source
  }
}
    ${SourceFragmentDoc}`;
export type EditSourceMutationFn = Apollo.MutationFunction<EditSourceMutation, EditSourceMutationVariables>;

/**
 * __useEditSourceMutation__
 *
 * To run a mutation, you first call `useEditSourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSourceMutation, { data, loading, error }] = useEditSourceMutation({
 *   variables: {
 *      sourceId: // value for 'sourceId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditSourceMutation(baseOptions?: Apollo.MutationHookOptions<EditSourceMutation, EditSourceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSourceMutation, EditSourceMutationVariables>(EditSourceDocument, options);
      }
export type EditSourceMutationHookResult = ReturnType<typeof useEditSourceMutation>;
export type EditSourceMutationResult = Apollo.MutationResult<EditSourceMutation>;
export type EditSourceMutationOptions = Apollo.BaseMutationOptions<EditSourceMutation, EditSourceMutationVariables>;
export const RefreshSourceDocument = gql`
    mutation RefreshSource($input: CreateBlockInput!) {
  createBlock(input: $input) {
    ...Block
  }
}
    ${BlockFragmentDoc}`;
export type RefreshSourceMutationFn = Apollo.MutationFunction<RefreshSourceMutation, RefreshSourceMutationVariables>;

/**
 * __useRefreshSourceMutation__
 *
 * To run a mutation, you first call `useRefreshSourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshSourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshSourceMutation, { data, loading, error }] = useRefreshSourceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshSourceMutation(baseOptions?: Apollo.MutationHookOptions<RefreshSourceMutation, RefreshSourceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshSourceMutation, RefreshSourceMutationVariables>(RefreshSourceDocument, options);
      }
export type RefreshSourceMutationHookResult = ReturnType<typeof useRefreshSourceMutation>;
export type RefreshSourceMutationResult = Apollo.MutationResult<RefreshSourceMutation>;
export type RefreshSourceMutationOptions = Apollo.BaseMutationOptions<RefreshSourceMutation, RefreshSourceMutationVariables>;