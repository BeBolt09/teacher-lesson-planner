// import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-m3xxv6waisu1zswn.us.auth0.com"
        clientId="vwfrUgGXNlfgiVgMUyvxISJOPd87nj2I"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);