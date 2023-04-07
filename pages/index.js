import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import { Image as NextImage } from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat Burgers | My Burger Page</title>
        <meta name="title" content="Fat Burgers" />
      </Head>
      <div>
        <h1 className={`${styles.title} font-effect-fire-animation`}>
          My Burger Page
        </h1>
        <div className={styles.mainImage}>
          <Image
            src="/fatburger.png"
            alt="fetBurger"
            width={400}
            height={300}
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet ratione temporibus aperiam
          harum alias officiis assumenda officia quibusdam deleniti eos
          cupiditate dolore doloribus!
        </p>
        <Link href="/burgers" legacyBehavior>
          <a className={styles.btn}>For all Burgers click here</a>
        </Link>
      </div>
    </>
  );
}
