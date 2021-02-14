import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes.js";
import { AuthProvider } from "./contexts/authContext";
import { LeadsProvider } from "./contexts/leadsContext";
import AuthRoute from "./components/authRoute";
import { CCsProvider } from "./contexts/ccsContext.js";

function App() {
  return (
    <AuthProvider>
      <LeadsProvider>
        <CCsProvider>
          <Router>
            <Switch>
              {routes.map((route) => (
                <AuthRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                />
              ))}
            </Switch>
          </Router>
        </CCsProvider>
      </LeadsProvider>
    </AuthProvider>
  );
}

export default App;
