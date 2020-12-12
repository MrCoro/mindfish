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

        <div className={styles.title}>
          <Image  src='/KJA.jpg'  
                  alt="Picture of the author"
                  width={480}
                  height={270}
          ></Image>
          <div className={styles.bannerCard}>
            <h2>Mindfish</h2>
            <h4>Membawa Kebermanfaatan Bagi Pembudidaya</h4>
            <h4>Untuk Rakyat dan Bangsa</h4>
          </div>
          
        </div>
        

        <div className={styles.grid}>
          <a className={styles.card}>
            <Image  src='/stats.svg'  
                    alt="Status Function"
                    width={100}
                    height={100}
            ></Image>
            <h3>Profit Jangka Panjang</h3>
          </a>
          <a className={styles.card}>
            <Image  src='/safe.svg'  
                    alt="Status Function"
                    width={100}
                    height={100}
            ></Image>
            <h3>Aman Terpercaya</h3>
          </a>
          <a className={styles.card}>
            <Image  src='/clock.svg'  
                    alt="Status Function"
                    width={100}
                    height={100}
            ></Image>
            <h3>Mudah dan Cepat</h3>
          </a>
          <a className={styles.card}>
            <Image  src='/support.svg'  
                    alt="Status Function"
                    width={100}
                    height={100}
            ></Image>
            <h3>Pelayanan Bersahabat</h3>
          </a>
        </div>

        <div className={styles.grid}>
          <a className={styles.card}>
            <Image  src='/member.svg'  
                    alt="Status Function"
                    width={100}
                    height={100}
            ></Image>
            <h3>8 Member</h3>
            <p>Jumlah member yang terdaftar dan aktif berbudidaya ikan</p>
          </a>

          <a className={styles.card}>
            <Image  src='/location.svg'  
                    alt="Status Function"
                    width={100}
                    height={100}
            ></Image>
            <h3>4 Kabupaten</h3>
            <p>Layanan tersedia di berbagai kabupaten yang ada di jawa barat</p>
          </a>
          <a className={styles.card}>
            <Image  src='/money.svg'  
                    alt="Status Function"
                    width={100}
                    height={100}
            ></Image>
            <h3>Rp. 20.000.000 profit</h3>
            <p>Jumlah profit yang telah dihasilkan dari budidaya ikan member</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
       Mindfish
      </footer>
    </div>
  )
}
