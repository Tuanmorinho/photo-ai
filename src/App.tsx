import { Missing } from '@/components/common';
import { EmptyLayout, MainLayout } from '@/components/layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>

      </Route>
      <Route path='/login' element={<EmptyLayout />}>
        
      </Route>
      <Route path='*' element={<Missing/>} />
    </Routes>
  );
}

export default App;
