import logo from './logo.svg';
// import './App.css';
import { makeStyles } from '@material-ui/styles';

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
  }
});

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
      </header>
    </div>
  );
}

export default App;
