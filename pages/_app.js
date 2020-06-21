import { useRouter } from 'next/router'
import BlogLayout from './../layout/blogLayout'
import '../assets/css/index.scss'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(pageProps)
  if (router.pathname === '/') return <Component {...pageProps} />
  return (<BlogLayout>
          <Component {...pageProps} />
        </BlogLayout>)
  
}