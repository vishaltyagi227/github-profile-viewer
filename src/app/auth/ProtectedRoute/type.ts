import { RouteProps } from 'react-router-dom';

interface IProtectedRoute extends RouteProps {
  isLogged: boolean;
}

export default IProtectedRoute;
