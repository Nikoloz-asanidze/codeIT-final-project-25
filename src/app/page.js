"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleLoginChange = () => setLogin(!login);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login) {
      try {
        const res = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: "m38rmF$", 
          }),
        });

        const data = await res.json();
        if (data.token) {
          // ინახავს მომხმარებლის მონაცემები localStorage-ში
          localStorage.setItem("user", JSON.stringify({ username, token: data.token }));
          router.replace("/products");
        } else {
          alert("Login failed.");
        }
      } catch (error) {
        console.error("Login error:", error.message);
      }
    } else {
      try {
        const res = await fetch("https://fakestoreapi.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            username: username,
            password: password,
          }),
        });

        const data = await res.json();
        if (data.id) {
          // ინახავს მომხმარებლის მონაცემები localStorage-ში
          localStorage.setItem("user", JSON.stringify({
            username: username,
            email: email,
            password: password
          }));
          router.replace("/products");
        } else {
          alert("Registration failed.");
        }
      } catch (error) {
        console.error("Register error:", error.message);
      }
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        {login ? (
          <>
            <h3 className={styles.signin}>Sign In</h3>
            <p className={styles.desc}>Please sign in to access the market.</p>

            <input
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="username"
              required
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="password"
              required
            />

            <button className={styles.button} type="submit">Sign In</button>

            <button
              type="button"
              onClick={handleLoginChange}
                className={styles.notRegistered}
            >
              Don't have an account? Sign up
            </button>
          </>
        ) : (
          <>
            <h3 className={styles.signin}>Sign Up</h3>
            <p>Please register to access the market</p>

            <input
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="username"
              required
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="email"
              required
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="password"
              required
            />

            <button className={styles.button} type="submit">Register</button>

            <button
              type="button"
              onClick={handleLoginChange}
              className={styles.notRegistered}
            >
              Already have an account? Sign in
            </button>
          </>
        )}
      </form>
    </main>
  );
}
