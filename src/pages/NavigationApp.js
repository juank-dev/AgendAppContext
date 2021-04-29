import {
  Fragment,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Splash } from "./Splash";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { Schedule } from "./Schedule";
import { CreateTask } from "./CreateTask";
import { TaskDetail } from "./TaskDetail";
import { Menu } from "../components/Menu";
import { PageWrapperMenu } from "../globalStyles";
import { Topbar } from "../components/Topbar";
import { TitlePageProvider } from "../contexts/TitleContext";

const AuthenticatedUser = ({ children }) => {
  const { pathname } = useLocation();
  //const contextTitle = useContext('');
  useEffect(() => {
    console.log("pathname", pathname);
  }, [pathname]);

  return (
    <Fragment>
      <TitlePageProvider>
        <Topbar></Topbar>
        <PageWrapperMenu>{children}</PageWrapperMenu>
        <Menu pathname={pathname} />
      </TitlePageProvider>
    </Fragment>
  );
};

const NotAuthenticatedUser = ({ children }) => {
  return children;
};

export const NavigationApp = () => {
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAuth(true);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Router>
      {!auth && (
        <NotAuthenticatedUser>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="*" component={NotFound} />
          </Switch>
        </NotAuthenticatedUser>
      )}

      {auth && (
        <AuthenticatedUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/create" component={CreateTask} />
            <Route path="/detail/:id" component={TaskDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </AuthenticatedUser>
      )}
    </Router>
  );
};
