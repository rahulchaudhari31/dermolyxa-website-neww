import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, useEffect } from 'react';

// Layout
import Layout from './components/layout/Layout';

// Pages (lazy-loaded; Suspense fallback lives in Layout)
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const InstitutePage = lazy(() => import('./pages/InstitutePage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const ClinicPage = lazy(() => import('./pages/ClinicPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const FacultyPage = lazy(() => import('./pages/FacultyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/institute"      element={<InstitutePage />} />
          <Route path="/courses"        element={<CoursesPage />} />
          <Route path="/admissions"     element={<AdmissionsPage />} />
          <Route path="/clinic"         element={<ClinicPage />} />
          <Route path="/products"       element={<ProductsPage />} />
          <Route path="/faculty"        element={<FacultyPage />} />
          <Route path="/blog"           element={<BlogPage />} />
          <Route path="/blog/:slug"     element={<BlogPostPage />} />
          <Route path="/contact"        element={<ContactPage />} />
          <Route path="/faq"            element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms"          element={<TermsPage />} />
          <Route path="/refund-policy"  element={<RefundPolicyPage />} />
          <Route path="/disclaimer"     element={<DisclaimerPage />} />
          <Route path="*"               element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
