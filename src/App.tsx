import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Shield, FileText, Search, Settings, LogOut } from 'lucide-react';
import AppRoutes from './routes';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;