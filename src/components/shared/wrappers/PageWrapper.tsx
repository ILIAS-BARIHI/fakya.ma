// PageWrapper.tsx
'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Footer from '@/components/layout/footers/Footer';
import Header from '@/components/layout/headers/Header';
import main from '@/libs/main';
import CartContextProvider from '@/providers/CartContext';
import FooterContexProvider from '@/providers/FooterContext';
import HeaderContex from '@/providers/HeaderContex';
import ProductContext from '@/providers/ProductContext';
import WishlistContextProvider from '@/providers/WshlistContext';
import Preloader from '../others/Preloader';

type PageWrapperProps = {
  children: ReactNode;
  headerStyle?: any;
  headerSize?: any;
  headerTopStyle?: any;
  isNotHeaderTop?: any;
  headerTopBg?: any;
  isHeaderRight?: any;
  isStickyOnMobile?: any;
  isTextWhite?: any;
  navBg?: any;
  isNotHeaderRight?: any;
  isHeaderSupport?: any;
  isNavbarAppointmentBtn?: any;
  isNotTransparent?: any;
  footerBg?: any;
  isCommingSoon?: any;
};

const PageWrapper = ({
  children,
  headerStyle,
  headerSize,
  headerTopStyle,
  isNotHeaderTop,
  headerTopBg,
  isHeaderRight,
  isStickyOnMobile,
  isTextWhite,
  navBg,
  isNotHeaderRight,
  isHeaderSupport,
  isNavbarAppointmentBtn,
  isNotTransparent,
  footerBg,
  isCommingSoon,
}: PageWrapperProps) => {
  useEffect(() => {
    main();
  }, []);

  return (
    <div className="body-wrapper">
      {isCommingSoon
        ? (
            children
          )
        : (
            <CartContextProvider>
              <WishlistContextProvider>
                <HeaderContex
                  value={{
                    headerStyle,
                    headerSize,
                    headerTopStyle,
                    isNotHeaderTop,
                    headerTopBg,
                    isTextWhite,
                    isStickyOnMobile,
                    navBg,
                    isHeaderRight,
                    isNotHeaderRight,
                    isHeaderSupport,
                    isNavbarAppointmentBtn,
                    isNotTransparent,
                  }}
                >
                  <Header />
                </HeaderContex>

                <ProductContext>{children}</ProductContext>
              </WishlistContextProvider>

              <FooterContexProvider value={{ footerBg }}>
                <Footer />
              </FooterContexProvider>
            </CartContextProvider>
          )}

      <Preloader />
    </div>
  );
};

export default PageWrapper;
