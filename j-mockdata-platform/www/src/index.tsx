import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
} from "react-router-dom";
import routes from './routers'

import reportWebVitals from './reportWebVitals';

import axios from './api'

const AxiosContext = React.createContext(axios)

ReactDOM.render(
  <React.StrictMode>
      <AxiosContext.Provider value={axios}>
          <AxiosContext.Consumer>
              {axios => (
                  <Router>
                      <Switch>
                          {
                              routes.map((route, index) => (
                                  <Route
                                      path={route.path}
                                      key={index}
                                      render={props=>(
                                          <route.component
                                              {...props}
                                              axios={axios}
                                          />  
                                      )}
                                  />        
                              )) 
                          }  
                      </Switch>
                  </Router>
              )}
          </AxiosContext.Consumer>
      </AxiosContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
