import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <h1>My Burger Page</h1>
      <Link href="/burgers" legacyBehavior>
        <a>For all Burgers click here</a>
      </Link>
    </div>
  );
}
