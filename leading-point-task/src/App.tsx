import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
// Components
import LoadingOverLay from 'components/LoadingOverLay';
// Routers
import AppRoutes from 'routes/AppRoutes';


function App() {
  return (
      <BrowserRouter>
      <Suspense fallback={<LoadingOverLay />}>
        <main id="content-root" className='h-screen' style={{ border: "2px solid purple" }}>
          <AppRoutes />
        </main>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
