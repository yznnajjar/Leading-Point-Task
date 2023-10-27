// AppRoutes.tsx
import { lazy } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
// Components
import AppLayout from 'components/Layout';

// Pages Route
const Dashboard = lazy(() => import('pages/Dashboard'));




function AppRoutes() {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="/Dashboard" element={<Dashboard />} />
                </Route>
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </AppLayout>
    );
}

export default AppRoutes;
