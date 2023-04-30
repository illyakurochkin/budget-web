/// <reference types="react-scripts" />

declare global {
  interface Process {
    process: {
      env: {
        REACT_APP_TEST: string,
        REACT_APP_AUTHORIZATION_MESSAGE: string,
      }
    }
  }
}

declare module 'jwt-check-expiration' {
  export function isJwtExpired(token: string): boolean;
}
