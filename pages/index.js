import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import CountryDash from '@/components/CountryDash'

export default function Home() {
  return (
    <div className=''>
      <CountryDash></CountryDash>
    </div>
  )
}
