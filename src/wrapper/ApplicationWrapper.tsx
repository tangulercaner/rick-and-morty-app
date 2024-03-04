import React from 'react';
import NetworkService from './NetworkService';
import Router from '../navigation/Router';
import AsyncStorageService from './AsyncStorageService';

function ApplicationWrapper(): React.JSX.Element {
  return (
    <>
      <Router />
      <NetworkService />
      <AsyncStorageService />
    </>
  );
}

export default ApplicationWrapper;
