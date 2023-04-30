import React, {useState} from 'react';
import {SourceFragment, SourceFragmentDoc, useGetSourcesQuery} from '../../graphql/generated';
import {Spinner} from '@cloudscape-design/components';
import {Card} from '../../components/card/Card';
import {SourceItem} from './SourceItem';
import {CurrencyMode} from './interface';
import {classes} from '../../libs/classes';
import {SourceActionModal} from './SourceItem/SourceActionModal';
import {useSourceAction} from './SourceItem/hooks/use-source-action';
import {useSelectedSource} from './SourceItem/hooks/use-selected-source';

interface SourceProps {
  className?: string,
}

export const Sources = ({className}: SourceProps) => {
  const {data, loading, error} = useGetSourcesQuery();

  console.log('data', data);
  console.log('error', error);
  console.log('loading', loading);

  const renderSources = () =>
    (data?.sources ?? [])
      .map((source) => <SourceItem key={source.id} source={source} currencyMode={CurrencyMode.Dollar} />);

  return (
    <Card className={classes('flex flex-col', className)}>
      <div className="text-2xl p-2 md:p-4">Sources</div>
      {/*<div>*/}
      {/*  <div className="flex flex-row items-center justify-between underline underline-offset-2 pb-2">*/}
      {/*    <div>Name</div>*/}
      {/*    <div>Amount</div>*/}
      {/*  </div>*/}
      {/*</div>*/}



      {loading ? (
        <div className='h-full flex justify-center items-center pt-4 pb-6'>
          <Spinner size='large' />
        </div>
      ) : (
        <div className='flex-1 overflow-y-scroll'>
          {renderSources()}
          <SourceActionModal />
        </div>
      )}
    </Card>
  );
};
