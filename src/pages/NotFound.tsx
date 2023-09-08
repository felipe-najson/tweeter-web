import {  Link } from '@nextui-org/react'
import Logo from '../assets/tweeter-logo.svg'


export default function NotFound() {
  return (
    <div className="flex flex-row gap-10 h-96 items-center ">
        <img src={Logo} alt="Tweeter logo" className="w-64 h-64 "/>
        <div className='flex flex-col gap-3'>
            <h1 className="text-5xl text-primary font-extrabold">404 Page not found</h1>
            <h4 className="text-2xl font-bold max-w-sm">Oops... It looks that you missed the route</h4>
            <Link href='/' color='primary' className='mt-2 w-fit'>Return home</Link>
        </div>
    </div>
  )
}
