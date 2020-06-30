import { useRouter } from 'next/router'
import BlogLayout from './../layout/blogLayout'
import '../assets/css/index.scss'
import menu from '../static/menu.json'
import javascript from './javascript'
import clearNameRouter from '../helpers/clearNameRouter'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log
  if (router.pathname === '/') return <Component {...pageProps} />
  let dataMenu
  if (!menu.data[clearNameRouter(router.pathname)]){
     dataMenu = []
  }else{
    dataMenu = menu.data[clearNameRouter(router.pathname)]
  }
  
  return (<BlogLayout menu={dataMenu}>
          <Component {...pageProps} />
        </BlogLayout>)
  
}