import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
    <span className={styles.span}>Soy Pagina principal</span>
    <div className={styles.redirect}>

    <Link className={styles.a} href={'/about'}>About Page</Link>
    <Link className={styles.a} href={'/pricing'}>Pricing Page</Link>
    <Link className={styles.a}href={'/contact'}>Contact Page</Link>
    </div>
    </main>
  );
}
