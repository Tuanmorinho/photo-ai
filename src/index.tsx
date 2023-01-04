import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/global.css';
import WebFont from 'webfontloader';
import AppWrapper from './App';

WebFont.load({
  google: {
    families: ['Montserrat']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<AppWrapper />} />
    </Routes>
  </BrowserRouter>
);
