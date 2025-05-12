"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";


function Page() {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsFromStorage = async () => {
    const products = await JSON.parse(localStorage.getItem("products"));
    if (products) {
      setCartProducts(products);
    } else {
      setCartProducts([]); 
    }
  };

  useEffect(() => {
    getProductsFromStorage();
  }, []);

  const handleAddOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    
    if (index !== -1) {
      products[index].count++;
      setCartProducts([...products]); 
      localStorage.setItem("products", JSON.stringify([...products])); 
    }
  };

  const handleRemoveOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);

    if (index !== -1) {
      if (products[index].count > 1) {
        products[index].count--;
      } else {
        products.splice(index, 1);
      }

      setCartProducts([...products]);
      localStorage.setItem("products", JSON.stringify([...products]));
    }
  };


  const getTotalPrice = () => {
    return cartProducts.reduce((total, prod) => {
      return total + prod.product.price * prod.count;
    }, 0);
  };

  return (
    <div className={styles.container}>
      {cartProducts?.map((prod) => (
        <div key={prod.product.id} className={styles.itemWrapper}>
          <Image
            src={prod.product.image}
            width={70}
            height={70}
            alt={prod.product.title}
          />
          <div>
            <h4 className={styles.title}>{prod.product.title}</h4> 
            <p>{prod.count} ცალი</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button 
              onClick={() => handleAddOne(prod.product)} 
              className={styles.Button}>
              + 
            </button>

            <span className={styles.countDisplay}>{prod.count}</span>

            <button 
              onClick={() => handleRemoveOne(prod.product)} 
              className={styles.Button}>
              - 
            </button>
          </div>
          <div className={styles.price}>
            <p>Total: ${prod.product.price * prod.count}</p> 
          </div>
        </div>
      ))}

    
      <div className={styles.totalPrice}>
        <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Page;
