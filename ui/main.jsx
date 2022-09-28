import React, { Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Spinner } from '@chakra-ui/react';

import '../api/tasks/tasks.methods';
import { Routes } from './Routes';

/**
 * This is the client-side entry point
 */
Meteor.startup(() => {
  document.documentElement.setAttribute('lang', 'en');
  const rootElement = document.getElementById('react-target');
  render(
    //Suspense:  This feature is not yet available for server-side rendering. Suspense support will be added in a later release.
    // Show a spinner while the page is loading
    <Suspense fallback={<Spinner />}>
      
      <Routes />
    </Suspense>,
    rootElement
  );
});
