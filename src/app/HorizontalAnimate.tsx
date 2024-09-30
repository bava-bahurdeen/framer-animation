'use client'
import {useScroll,motion,useTransform} from 'framer-motion'
import { useRef } from 'react'
interface CardType{
    id:number,
    value:string
}
export const CardData:CardType[]=[
    {
        id:1,
        value:'card-1'

    },
    {
        id:2,
        value:'card-1'

    },
    {
        id:3,
        value:'card-1'

    },
    {
        id:4,
        value:'card-1'

    },
    {
        id:5,
        value:'card-1'

    },
    {
        id:6,
        value:'card-1'

    },
    {
        id:7,
        value:'card-1'

    },
    {
        id:8,
        value:'card-1'

    }
]
const HorizontalAnimate:React.FC=()=>{
    return(
        <div className="bg-neutral-800">
            <div className="flex h-48 items-center justify-center ">
                <span>ScrollUp</span>
            </div>
            <ScrollCarousal/>
            <div className="flex h-48 items-center justify-center">
                <span>ScrollDown</span>
            </div>

        </div>
    )
}

export const ScrollCarousal=()=>{
    const divref=useRef<HTMLDivElement|null>(null)
    const {scrollYProgress}=useScroll({
        target:divref
    })
    const x =useTransform(scrollYProgress,[0,1],['1%','-65%'])
    return(
        <section className="relative h-[300vh] bg-neutral-900" ref={divref}>
            <div className="sticky top-0 flex overflow-hidden h-screen items-center">
            <motion.ul  style={{x}} className="flex gap-24  items-center justify-center ">
                {CardData.map(({id,value})=>{
                    return(
                        <li key={id} className="bg-purple-600 p-2 px-4 w-96 h-96 rounded-md">
{value}
                        </li>
                    )
                })}
            </motion.ul>
            </div>

        </section>
    )
}
export default HorizontalAnimate