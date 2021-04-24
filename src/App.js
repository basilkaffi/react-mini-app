import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <ListPage {...props} />} />
          <Route path="/:user" render={(props) => <DetailPage {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
