import logo from './logo.svg';
// import './App.css';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

//document
import { Form } from './components/document/eventHandling';
import { Toggle } from './components/document/eventHandling';

import { LoginControl } from './components/document/conditionalRender';
import { WarningBanner } from './components/document/conditionalRender';
import { Mailbox } from './components/document/conditionalRender';

import { NumberList } from './components/document/listAndKey';
import { Blog } from './components/document/listAndKey';

import { NameForm } from './components/document/form';

import { Calculator } from './components/document/stateLiftUp';

const useStyles = makeStyles({
  //camelCase
  app: {
    textAlign: 'center'
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  appLink: {
    color: '#61dafb'
  },
  appLogo: {
    animation: '$App-logo-spin infinite 20s linear',
    height: '40vmin',
    pointeEvents: 'none'
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  },
  smallSpace: {
    display: 'block',
    width: '40vmin',
    margin: '20px auto'
  }
});

//datas
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
const numbers = [1, 2, 3, 4, 5];
const messages = ['React', 'Re: React', 'Re:Re: React'];

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <header className={classes.AppHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form space={classes.smallSpace}/>
        <Toggle space={classes.smallSpace}/>
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <WarningBanner warn={false} />
        <NumberList numbers={numbers} space={classes.smallSpace} />
        <Blog posts={posts} space={classes.smallSpace} />
        <NameForm space={classes.smallSpace}/>
        <Calculator space={classes.smallSpace}/>
      </header>
    </div>
  );
}

export default App;
