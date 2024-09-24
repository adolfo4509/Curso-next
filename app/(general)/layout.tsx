import { Navbar } from '@/components/navbar/Navbar';
import React from 'react'
import styles from './layout.module.css'
const GeneralLayout = ({children}:{children: React.ReactNode;}) => {
  return (
    <>
    <Navbar />
    <main className={styles.containerpadre}>
           { children }
    </main>
  </>
  )
}

export default GeneralLayout
