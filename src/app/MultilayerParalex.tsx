'use client'
import React, { useRef } from 'react'
import bg from '@/app/assets/bg.jpg'
import bg_remove from '@/app/assets/bg-remove.png'
import { motion,useScroll, useTransform } from 'framer-motion'
const MultilayerParalex:React.FC=()=>{
    const ref=useRef<HTMLDivElement|null>(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const backgroundY=useTransform(scrollYProgress,[0,1],["0%","100%"])
    const textY=useTransform(scrollYProgress,[0,1],["0%","200%"])


  return (
  <main>
    <section>
<div ref={ref} className='h-96 md:h-screen  w-full overflow-hidden grid place-items-center relative' >
    <motion.h1 style={{y:textY}} className='text-white font-bold text-2xl md:text-9xl z-50'>WELCOME TO MULTIVERSE</motion.h1>
    <motion.div
     style={{
        backgroundImage: `url('${bg.src}')`,
      backgroundPosition:'bottom',
      backgroundSize:'cover',
      y:backgroundY


      }}
      className='absolute z-0 inset-0 '
    >

    </motion.div>

    <div
     style={{
        backgroundImage: `url('${bg_remove.src}')`,
        backgroundPosition:'bottom',
      backgroundSize:'cover',
    
      }}
      className='absolute z-20 inset-0 '
    >

    </div>

</div>
    </section>
    <section>
<div className='bg-black h-screen w-full'>

</div>

    </section>
  </main>
  )
}
export default MultilayerParalex
