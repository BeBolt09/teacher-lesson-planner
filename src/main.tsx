import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-m3xxv6waisu1zswn.us.auth0.com"
        clientId="ndOQW72PW6byotU7YQn2fiHHB2JApRdf"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);



