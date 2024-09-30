'use client'
import {motion,useScroll,useTransform,useMotionTemplate} from 'framer-motion'
import Image from 'next/image'
import im1 from '@/app/assets/spaceship-next-generation-robotic-spaceship-leaving-the-earth-futuristic-robot-satellite-technology-space-exploration-space-travel-outer-space-spacecraft-futuristic-science-fiction-ai-generated-free-photo.jpeg'
import { useRef } from 'react'
const  SmoothScrollLenis:React.FC=()=> {
  const SECTION_HEIGHT=1500
  const {scrollY}= useScroll()
  const ref= useRef<HTMLDivElement|null>(null)

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start end","end start"]
  })
  const opacity= useTransform(scrollY,[SECTION_HEIGHT,SECTION_HEIGHT + 500],[1,0])
  const backgroundSize = useTransform(scrollY,[0,SECTION_HEIGHT+500],["170%","100%"])
  const clip1= useTransform(scrollY,[0,SECTION_HEIGHT],[25,0])
  const clip2=useTransform(scrollY,[0,SECTION_HEIGHT],[75,100])
  const clipPath=useMotionTemplate `polygon(${clip1}% ${clip1}%,${clip2}% ${clip1}%,${clip2}% ${clip2}%,${clip1}% ${clip2}%)`

  const opacity2=useTransform(scrollYProgress,[0.75,1],[1,0])


  return (
    <div className="bg-zinc-950 z-50">
        <section className='bg-zinc-950'>
<div  className="relative w-full" style={{height:`calc(${SECTION_HEIGHT}px + 100vh)`}}>
  <motion.div className="sticky top-0 h-screen w-full grid place-items-center"
  style={{
    opacity,
    clipPath,
    backgroundSize,
    backgroundImage:"url(https://www.pixelstalk.net/wp-content/uploads/image11/A-beautiful-galaxy-with-a-glowing-core-surrounded-by-star-filled-arms-4K-wallpaper.jpg)",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",



  }}
  >
   <h2 className='text-2xl md:text-6xl lg:text-8xl font-semibold text-white text-center px-4'>
              Galaxy Milk Way
            </h2>  </motion.div>
{/* <div className='relative z-20 mx-auto px-8'>
  <motion.div 
  style={{opacity:opacity2}}
  >
  <Image src={im1}  alt='sun' className=' absolute left-0 w-44 md:w-96' />

  </motion.div>
  <motion.div 
  style={{opacity:opacity2}}
  >
  <Image src={im1}  alt='sun' className=' absolute right-40 w-44 md:w-96 ' />

  </motion.div>
</div> */}
            <div className='absolute bg-gradient-to-b from-zinc-950/0 to-zinc-950 h-96 right-0 bottom-0 left-0 '>

            </div>

</div>
        </section>
     <section>
      <div className="h-screen">

      </div>
     </section>
    </div>
  )
}

export default SmoothScrollLenis