import { useEffect, useRef, useState } from "react";
import Resize from "../Custom_hook/window_resize_hook";
import styles from "./nav_bar.module.css"
import {motion,useScroll,AnimatePresence,useInView,useAnimation} from "framer-motion"


export default function Nav_Bar(){

    const {scrollYProgress} = useScroll();

    const {width} = Resize()
    
    const [change,setchange] = useState(false)

    const refs = useRef(null)
    const ani = useInView(refs)
    const content = useAnimation()

    useEffect(()=>{
        if(ani){
            content.start("finish")
        }
    },[ani])



    return(
        <>
        {(width > 900)?
             <motion.div 
             variants={{
                start:{x:-100},
                end:{x:[0,35,0]}
             }}
             initial = "start"
             whileInView= "end"
             transition={{
                duration: 1,
                delay:.1
             }}
             className={styles.nav_bar}>
            
             <motion.div 
             variants={{
                start:{opacity:0,x:40},
                end:{opacity:1,x:0}
             }}
             initial = "start"
             whileInView= "end"
             transition={{
                duration: 1.5,
                delay:.1
             }}
             className={styles.logo}>
             </motion.div>
 
             <motion.div ref= {refs}
             variants={{
                start:{opacity:0,x:60},
                finish:{opacity:1,x:0}
             }}
             initial = "start"
             animate = {content}
             transition={{
                duration: 1.5,
                delay:.1
             }}
             className={styles.option}>
                <a href="#about"><li className={styles.short_cut}>About</li></a> 
                <a href="#project"><li className={styles.short_cut}>Project</li></a> 
                <a href="#contact"><li className={styles.short_cut}>Contact</li></a> 
             </motion.div>
 
 
         </motion.div>
         :<>
         <motion.div
         variants={{
            start:{x:-200},
            end:{x:[0,35,0]}
         }}
         initial = "start"
         whileInView= "end"
         transition={{
            duration: 1,
            delay:.1
         }}
         className={styles.nav_bar}>
            
         <motion.div
         variants={{
            start:{opacity:0,x:40},
            end:{opacity:1,x:0}
         }}
         initial = "start"
         whileInView= "end"
         transition={{
            duration: 1.5,
            delay:.1
         }}
         className={styles.logo}>
         </motion.div>

         <motion.div
          variants={{
            start:{opacity:0,x:40},
            end:{opacity:1,x:0}
         }}
         initial = "start"
         whileInView= "end"
         transition={{
            duration: 1.5,
            delay:.1
         }}
          className={styles.option}>

         <i class={change?"ri-close-fill":"ri-menu-3-line" }onClick={()=>setchange(!change)}></i>
         </motion.div>


     </motion.div>
        <AnimatePresence>
            {change && <motion.div className={styles.menu}
            variants={{
                "start":{opacity:0,y:-100},
                "end":{opacity:1,y:0},
                "restart":{opacity:0,y:-100}
            }}
            initial = "start"
            animate = "end"
            exit = "restart" 
            transition={{
                duration:1.5
            }}
            >
               <a href="#about"><li className={styles.short}>About</li></a> 
               <a href="#project"> <li className={styles.short}>Project</li></a> 
               <a href="#contact"><li className={styles.short}>Contact</li></a>  
            </motion.div>}
        </AnimatePresence>
             </>
        }
        
       
          
        
        </>
    )
}