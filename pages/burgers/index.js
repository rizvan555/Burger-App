import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Burgers.module.css';
import Image from 'next/image';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();
  return {
    props: {
      burgers: data,
    },
  };
};

function Burgers({ burgers }) {
  return (
    <>
      <h1>All Burgers</h1>
      {burgers &&
        burgers.map((burger) => {
          return (
            <Link
              href={`/burgers/ ${burger.id}`}
              key={burger.id}
              legacyBehavior
            >
              <a className={styles.burgerCard}>
                <div className={styles.imageContainer}>
                  <Image
                     src={`${burger.image}`}
                    alt={`${burger.name}`}
                    width={500}
                    height={500}
                    layout="responsive"
                   
                  />
                </div>
                <div>
                  <h2>{burger.name}</h2>
                  <p>{burger.desc}</p>
                </div>
              </a>
            </Link>
          );
        })}
    </>
  );
}

export default Burgers;
