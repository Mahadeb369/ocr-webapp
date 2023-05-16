import { Route, Routes } from 'react-router';
import { RoutesConfig } from '../../app/config/routes';
import { Home } from './home';
import { BrowseHistory } from './browseHistoryItemList';

export const Ocr = () => {
  return (
    <Routes>
      <Route index element={<Home></Home>} />
      <Route path={RoutesConfig.history} element={<BrowseHistory />} />
    </Routes>
  );
};
