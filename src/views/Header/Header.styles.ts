import clsx from 'clsx'

const styles = {
  wrapper: clsx('relative h-screen [&>img]:select-none [&>img]:object-cover'),
  overlay: clsx('absolute left-0 top-0 z-10 size-full bg-gradient-to-br from-primary-light/50 to-primary-dark/50'),
  slide1: clsx('animate-fade1'),
  slide2: clsx('animate-fade2'),
  slide3: clsx('animate-fade3'),
  slide4: clsx('animate-fade4'),
  content: clsx(
    'absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col',
    'max-w-2xl items-center justify-center gap-5 text-center text-white'
  ),
  logo: clsx('h-[30rem] w-auto select-none border border-white contrast-150'),
  heading: clsx('block text-9xl uppercase tracking-[0.2rem]'),
  subheading: clsx('block font-satisfy text-5xl'),
}

export default styles
