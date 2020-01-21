import React from 'react';
import '@automattic/calypso-color-schemes';
import {Button, Ribbon} from '@automattic/components';

function App() {
  return (
    <div style={{padding: '1em'}}>
      <Ribbon>Its alive!</Ribbon>
      <Button primary onClick={() => alert('Thank you for taking action!')}>Take action now!</Button>
    </div>
  );
}

export default App;
