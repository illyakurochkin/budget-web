import React from 'react';
import {useAuthentication} from './hooks/use-authentication';
import {Authentication} from './modules/authentication';
import {SummaryGraph} from './modules/summary-graph';
import {Header} from './modules/header';
import {Sources} from './modules/sources';

function App() {
  const {isSignedIn} = useAuthentication();

  if(!isSignedIn) {
    return <Authentication />
  }

  return (
    <div>
      <Header className='pb-10'/>
      <div className='flex flex-col gap-y-14'>
        <div className='flex flex-col md:flex-row gap-14 '>
          <Sources className='max-h-[400px] md:max-h-[600px] md:flex-1' />
          <SummaryGraph className='md:flex-1' />
        </div>
        <SummaryGraph className='w-full'/>
      </div>
    </div>
  );
}

export default App;
