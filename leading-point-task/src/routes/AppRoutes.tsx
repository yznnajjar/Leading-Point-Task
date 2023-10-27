// AppRoutes.tsx
import { lazy } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
// Components
import AppLayout from 'components/Layout';

// Pages Route
const Dashboard = lazy(() => import('pages/Dashboard'));
const Projects = lazy(() => import('pages/Projects/Projects'));




function AppRoutes() {
    return (
        <AppLayout>
            <Routes>
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="projects" element={<Projects />} />

                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </AppLayout>
    );
}

export default AppRoutes;
