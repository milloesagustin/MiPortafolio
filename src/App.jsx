import { ConfigProvider } from 'antd';
import { PortfolioPage } from './pages/PortfolioPage';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
        },
      }}
    >
      <PortfolioPage />
    </ConfigProvider>
  );
};

export default App;