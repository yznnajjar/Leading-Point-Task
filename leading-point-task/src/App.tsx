import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { useAppSelector } from './store/hooks';


function App() {
  const theme = useAppSelector((state) => state.util.theme);

  useEffect(() => {
    theme === 'light' ?
      document.documentElement.classList.remove('dark')
      :
      document.documentElement.classList.add('dark');

  }, [theme]);

  return (
    <div className="max-w-[1920px] h-screen m-auto animate-fade-in-up">
      <BrowserRouter>
        {/* <Suspense fallback={<SplashPage />}>
          <Routes>
            <Route path="/" element={<PrivateOutlet />}>
              <Route path="" element={<Dashboard />} />

            </Route>
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense> */}
      </BrowserRouter>
    </div>
  )
}

export default App
