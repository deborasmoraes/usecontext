
import Routes from './src/components/Routes'
import AuthProvider from './src/Contexts/AuthContext'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>

    </NavigationContainer>
  )
}