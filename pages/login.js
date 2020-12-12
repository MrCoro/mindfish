import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function MainPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mindfish</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navigation}>
          <a>MindFish</a>
          <ul>
            <li><Link href="/"><a>Beranda</a></Link></li>
            <li><Link href="/stok"><a>Stok</a></Link></li>
            <li><Link href="/member"><a>Member</a></Link></li>
            <li><Link href="/sertifikasi"><a>Sertifikasi</a></Link></li>
            <li><Link href="/login"><a>Login</a></Link></li>
          </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login
        </h1>

        <div className={styles.login}>  
            <form>
                <h3>Username</h3>
                <input type="text" name="username" id="name"/>
                <h3>Password</h3>
                <input type="text" name="password" id="password"/>
                <br />
                <input type="submit" value="submit" style={{margin: 20}}/> 

            </form>
        </div>
      </main>

      <footer className={styles.footer}>
       Mindfish
      </footer>
    </div>
  )
}
