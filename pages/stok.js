import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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
          Stok Ikan
        </h1>

        <div className={styles.stock_grid}>
          <a className={styles.stock_card}>
            <Image  src='/multicolor.png'  
                    alt="Status Function"
                    width={200}
                    height={180}
            ></Image>
            <h3>Betta Multicolor</h3>
            <p>Rp 120.000/ekor</p>
          </a>
          <a className={styles.stock_card}>
            <Image  src='/bluerim.jpg'  
                    alt="Status Function"
                    width={200}
                    height={180}
            ></Image>
            <h3>Betta Bluerim</h3>
            <p>Rp 80.000/ekor</p>
          </a>
          <a className={styles.stock_card}>
            <Image  src='/santa.jpg'  
                    alt="Status Function"
                    width={200}
                    height={180}
            ></Image>
            <h3>Ikan Santa Claus</h3>
            <p>Rp 5.000/ekor</p>
          </a>
          <a className={styles.stock_card}>
            <Image  src='/guppy.jpg'  
                    alt="Status Function"
                    width={200}
                    height={180}
            ></Image>
            <h3>Guppy</h3>
            <p>Rp 5.000/ekor</p>
          </a>
        </div>

        
      </main>

      <footer className={styles.footer}>
       Mindfish
      </footer>
    </div>
  )
}
