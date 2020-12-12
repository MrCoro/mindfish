import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

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
          Jadwal Sertifikasi 
        </h1>

        <div className={styles.member_grid}>
          <a className={styles.member_card}>
            <h3>Sertifikasi Ikan Guppy</h3>
            <p>Minggu, 27 Desember 2021</p>
            
          </a>

          <a className={styles.member_card}>
            <h3>Sertifikasi Ikan Betta</h3>
            <p>Minggu, 3 Januari 2021</p>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
       Mindfish
      </footer>
    </div>
  )
}
