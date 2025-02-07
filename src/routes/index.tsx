import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Solutions = lazy(() => import('../pages/Solutions'));
const CaseStudies = lazy(() => import('../pages/CaseStudies'));
const Contact = lazy(() => import('../pages/Contact'));
const Careers = lazy(() => import('../pages/Careers'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Suspense>
  );
}