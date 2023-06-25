import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import MainPage from './pages/Main/MainPage';
import PartMainPage from './pages/Part/PartMainPage';
import PartVotePage from './pages/Part/PartVotePage';
import PartResultPage from './pages/Part/PartResultPage';
import DemoMainPage from './pages/Demo/DemoMainPage';
import DemoVotePage from './pages/Demo/DemoVotePage';
import DemoResultPage from './pages/Demo/DemoResultPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/" element={<MainPage />} />

          <Route path="/part" element={<PartMainPage />} />
          <Route path="/part/vote" element={<PartVotePage />} />
          <Route path="/part/result" element={<PartResultPage />} />

          <Route path="/demo" element={<DemoMainPage />} />
          <Route path="/demo/vote" element={<DemoVotePage />} />
          <Route path="/demo/result" element={<DemoResultPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
