"use client";
import useData from "@/services/hooks/contextHooks/useData";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const { logOut, user, getToken } = useData();

  useEffect(() => {
    if (getToken() === null || getToken() === undefined) {
      // If token is not present, navigate to "/login" page
    }
  }, [getToken]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <h1 style={{ backgroundColor: "#FFF" }}>LoremLogo</h1>
        </Link>
        <ul className={styles.navs}>
          <Link className={styles.links} href="/">
            Home
          </Link>
          <Link className={styles.links} href="/products">
            Products
          </Link>
          {getToken() ? (
            <button onClick={logOut} className={styles.logout_button}>
              logout
            </button>
          ) : (
            <Link className={styles.links} href="/login">
              Login
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
