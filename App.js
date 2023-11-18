import { NavigationContainer } from '@react-navigation/native';
import LoginProvider from './context/LoginProvider';
import RouteApp from './navigation/RouteApp';
import BottomTab from './navigation/BottomTab';
import UserProvider from './context/UserProvider';

export default function App() {

  return (
    <LoginProvider>
      <UserProvider>
        <NavigationContainer>
          <RouteApp />
        </NavigationContainer>
      </UserProvider>
    </LoginProvider>

  )

}

