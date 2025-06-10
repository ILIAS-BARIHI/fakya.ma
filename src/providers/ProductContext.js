'use client';

import { createContext, use, useState } from 'react';
import CartStatusModal from '@/components/shared/modals/CartStatusModal';
import ProductDetailsQuick from '@/components/shared/modals/ProductDetailsQuick';
import WishlistStatusModal from '@/components/shared/modals/WishlistStatusModal';
import getAllProducts from '@/libs/getAllProducts';

const productContext = createContext(null);

const ProductContext = ({ children }) => {
  const products = getAllProducts();
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  return (
    <productContext.Provider value={{ currentProduct, setCurrentProduct }}>
      {children}
      <ProductDetailsQuick product={currentProduct} />
      <CartStatusModal product={currentProduct} />
      <WishlistStatusModal product={currentProduct} />
    </productContext.Provider>
  );
};

// ✅ Corrigé ici
export const useProductContext = () => {
  return use(productContext);
};

export default ProductContext;
