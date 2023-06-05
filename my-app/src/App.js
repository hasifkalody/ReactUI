import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import RegistrationPage from './Pages/RegistrationPage'
import LoginPage from './Pages/LoginPage'
import Reset from './Pages/ResetPasswordPage'
import NewPassword from './Pages/NewPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/handlePasswordPage" element={<Reset />} />
        <Route path="/NewPassword" element={<NewPassword />} />
      </Routes>
  </Router>
  );
}

export default App;
