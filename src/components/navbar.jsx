import React from 'react';
import Octicon, { Zap } from '@githubprimer/octicons-react';

export default () => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <span style={{color: '#f5f500'}}>
        <Octicon width={32} height={32} verticalAlign='middle' icon={Zap}/>
      </span>
      Flashcards
    </a>
  </nav>
);
