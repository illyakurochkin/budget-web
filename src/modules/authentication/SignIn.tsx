import React, {useCallback, useState} from 'react';
import {Button} from '../../components/button';
import {useAuthentication} from '../../hooks/use-authentication';

export const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useAuthentication();

  const handleSignIn = useCallback(async () => {
    setLoading(true);
    try {
      await signIn();
    } catch (error: any) {
        console.log(error)
      // if (error.code === 4001) alert
      setLoading(false);
    }
  }, [signIn]);

  return (
    <div>
      <div className="text-2xl pb-8">Welcome to <b className="text-3xl underline underline-offset-8">BUDGET</b> !</div>

      <Button
        variant='primary'
        effects
        loading={loading}
        onClick={handleSignIn}
      >
        Sign In with <span className='underline underline-offset-2 font-[900]'>Metamask</span>
      </Button>
    </div>
  );
};
