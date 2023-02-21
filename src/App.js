import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard.component';
import Header from './components/header/header.component';
import { ConfigProvider } from 'antd';


const App = () => {
  return (
    <>
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#5F2EE5',
      },
    }}

    >
      <Header />
      <Dashboard />
     </ConfigProvider>
    </>
  );
};
export default App;