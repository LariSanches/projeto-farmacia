import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import footer from "./Footer.css"

function Footer() {



  return (
    <>
       <div className='bg-blue-300 font-bold text-black flex justify-center py-4'>
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>React Pharma | Copyright: </p>
          <p className='text-lg mb-3'>Acesse nossas redes sociais</p>

          <div className='flex gap-2'>
            <LinkedinLogo size={48} weight='bold' />
            <InstagramLogo size={48} weight='bold' />
            <FacebookLogo size={48} weight='bold' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer