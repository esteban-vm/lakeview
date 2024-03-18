import type { ImageProps } from 'next/image'
import Image from 'next/image'
import styles from './Header.styles'

const slideProps: Omit<ImageProps, 'src' | 'alt'> = {
  fill: true,
  quality: 100,
  sizes: '100vw',
}

const headerTitle = 'Lakeview header'

export default function Header() {
  return (
    <header className={styles.wrapper} aria-labelledby={headerTitle} id='header'>
      <div className={styles.overlay} />
      <Image alt='Slide 1' src='/images/header-image-1.jpg' className={styles.slide1} {...slideProps} />
      <Image alt='Slide 2' src='/images/header-image-2.jpg' className={styles.slide2} {...slideProps} />
      <Image alt='Slide 3' src='/images/header-image-3.jpg' className={styles.slide3} {...slideProps} />
      <Image alt='Slide 4' src='/images/header-image-4.jpg' className={styles.slide4} {...slideProps} />
      <div className={styles.content}>
        <Image
          alt='Lakeview logo'
          src='/images/lakeview-logo.png'
          quality={100}
          width={216}
          height={216}
          className={styles.logo}
        />
        <h1 className={styles.heading} id={headerTitle}>
          A Great Lifestyle
        </h1>
        <h2 className={styles.subheading}>In a Spectacular Setting</h2>
      </div>
    </header>
  )
}
