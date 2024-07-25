import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClientProvider } from './context/ClientContext';
import IndexPage from './pages/IndexPage';
import ClientApp from './components/ClientApp';
import { ROUTES } from './types/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.INDEX} element={<IndexPage />} />
        <Route 
          path="/:clientId/*" 
          element={
            <ClientProvider>
              <ClientApp />
            </ClientProvider>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;