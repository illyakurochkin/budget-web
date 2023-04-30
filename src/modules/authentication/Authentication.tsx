import React from 'react';
import {ethereum} from '../../libs/ethereum';
import {NotInstalled} from './NotInstalled';
import {SignIn} from './SignIn';

export const Authentication = () => (
  ethereum.isInstalled
    ? <SignIn/>
    : <NotInstalled/>
);
