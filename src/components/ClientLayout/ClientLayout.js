"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import AppointmentPopup from '../popup/AppointmentPopup';

/**
 * Site-wide client shell. Renders the global Navbar, Footer and the fixed
 * bottom-right action buttons around every page's content, so new pages get
 * them automatically. Lives outside the root layout because it needs "use client".
 */
export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // The knee-pain landing page leans on its in-page lead forms, so we hide the
  // generic "Book" CTAs (Navbar button + floating calendar button) there.
  const hideBookCta = pathname === '/knee-pain';

  return (
    <>
      <Navbar hideBookCta={hideBookCta} />
      {children}
      <Footer />
      <FloatingButtons />
      <AppointmentPopup />
    </>
  );
}
