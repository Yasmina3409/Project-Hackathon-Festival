import {Outlet} from 'react-router-dom'
import {Footer} from '../molecules/footer'
import Header from '../organisms/header'

export function MainLayout() {
   return (
      <section
         className={'flex flex-col items-center justify-between selection:bg-primary selection:text-primary-content'}>
         <Header />
         <Outlet />
         <Footer />
      </section>
   )
}
