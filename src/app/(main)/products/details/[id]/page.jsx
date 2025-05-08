import Link from "next/link";
import styles from "./page.module.css";
import AddTOCart from "@/components/AddToCart/AddTOCart";

async function Page({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <main>
      <h5 className={styles.details}>Product Details</h5>

      <p className={styles.descript}>{product.description}</p>

      <div className={styles.meta}>
        <p><strong>price:</strong> {product.price} $</p>
        <p><strong>rate:</strong> ⭐ {product.rating.rate} ({product.rating.count} total)</p>
      </div>

      <div className={styles.idText}>ID: {params.id}</div>


     <Link href="/products">
        <button className={styles.backButton}>Back to products</button>
      </Link>
 
    <AddTOCart product={product}/>
      
      
    </main>
  );
}

export default Page;