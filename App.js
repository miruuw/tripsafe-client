import { NavigationContainer } from '@react-navigation/native';
import LoginProvider from './context/LoginProvider';
import RouteApp from './navigation/RouteApp';
import BottomTab from './navigation/BottomTab';

export default function App() {

  return (
    <LoginProvider>
      <NavigationContainer>
        <RouteApp/>
      </NavigationContainer>
    </LoginProvider>
//     <NavigationContainer>
// <BottomTab/>
//     </NavigationContainer>
    
  )

}

