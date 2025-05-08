"use client";
import styles from "./SignOut.module.css";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();
  const handleSignOut = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };
  return <button onClick={handleSignOut} className={styles.button}>Sign Out</button>
};

export default SignOut;