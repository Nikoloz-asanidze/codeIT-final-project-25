"use client";
 import React, { useEffect, useState } from "react";
 import styles from "./page.module.css";
 import Image from "next/image";
 
 function page() {
   const [cartProducts, setCartProducts] = useState([]);
 
   const getProductsFromStorage = async () => {
     const products = await JSON.parse(localStorage.getItem("products"));
     setCartProducts(products);
   };
 
   useEffect(() => {
     getProductsFromStorage();
   }, []);
 
   const handleAddOne = async (product) => {
     const products = await JSON.parse(localStorage.getItem("products"));
     const index = products.findIndex((item) => item.product.id === product.id);
     products[index].count++;
 
     setCartProducts(products);
     localStorage.setItem("products", JSON.stringify([...products]));
   };
 
   const handleRemoveOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    products[index].count--;

    setCartProducts(products);
    localStorage.setItem("products", JSON.stringify([...products]));
   };
 
   return (
     <div className={styles.container}>
            {cartProducts?.map((prod) => (
              console.log(prod),
         <div key={prod.id} className={styles.itemWrapper}>
           <Image
             src={prod.product.image}
             width={70}
             height={70}
             alt={prod.product.title}
           />
           <div>
             <h4> {prod.product.title}</h4>
             <br />
             <p>{prod.count} ცალი</p>
           </div>
           <div className={styles.buttonWrapper}>
             <button onClick={() => handleAddOne(prod.product)} className={styles.Button}>add 1</button>
             <button onClick={() => handleRemoveOne(prod.product)} className={styles.Button}>remove 1</button>
           </div>
         </div>
       ))}
     </div>
   );
 };
 
  export default page;