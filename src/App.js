import React from 'react';
import logo from './logo.svg';
import './App.css';

let deferredPrompt = window;

function installToHomeScreen(e) {
  localStorage.setItem("shouldShowInstall", false);
   // Show the install prompt
   deferredPrompt.prompt("install?");
   // Wait for the user to respond to the prompt
   deferredPrompt.userChoice.then((choiceResult) => {
     if (choiceResult.outcome === 'accepted') {
       console.log('User accepted the install prompt');
     } else {
       console.log('User dismissed the install prompt');
     }
   });
}

window.addEventListener('appinstalled', (evt) => {
  // Log install to analytics
  console.log('INSTALL: Success');
});

function App() {
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log(e, "intra");
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    localStorage.setItem("shouldShowInstall", true);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={installToHomeScreen}>Add to home screen</button>
      </header>
    </div>
  );
}

export default App;
