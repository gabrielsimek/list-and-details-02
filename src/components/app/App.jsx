import React from 'react';
import HeyArnoldCharacters from '../../containers/HeyArnoldCharacters';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CharacterDetailPage from '../characters/CharacterDetailPage';

export default function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact={true}
          render={routerProps => (
            <HeyArnoldCharacters {...routerProps} />
          )}
        />
        <Route path="/character/:id" exact={true}
          render={routerProps => (
            <CharacterDetailPage {...routerProps} />
          )}
        />
        

        <Redirect to="/" />

      </Switch>
    </Router>
  );
}
