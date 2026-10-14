import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import PageLoader from '../ui/PageLoader';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </Suspense>
      </main>

      <Footer />

      {/* Spacer so the fixed mobile action bar never covers footer content */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      <FloatingActions />
    </div>
  );
}
