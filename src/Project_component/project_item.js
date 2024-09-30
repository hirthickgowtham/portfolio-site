import { useEffect, useRef, useState } from "react";
import styles from "./project_Item.module.css"
import {motion,useAnimation} from "framer-motion";


export default function Project_showcase({item:{title,Stack,description,image,links,live}}){

    console.log(image)
    const anima = useAnimation()
    
    useEffect(()=>{
        const call = async()=>{

            while(true){
                await anima.start("start")
                await anima.start("finish")
            }}
        call();
    },[anima])

       


    
    return(
        <>
        <motion.div
        
        initial = {{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              exit={{opacity:0,y:50}}
              transition={{
                  duration:1,
                  delay:.1
              }}

        className={styles.project_continer}>

            <motion.div

            initial = {{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            exit={{opacity:0,y:50}}
            transition={{
                duration:1,
                delay:.1
            }}

             className={styles.project_showcase}
             style={{backgroundImage:`url(${process.env.PUBLIC_URL}${image})`,backgroundSize:'cover'}}
             >

            </motion.div>

            <div className={styles.description_continer}>
                <motion.div 

                initial = {{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                exit={{opacity:0,y:50}}
                transition={{
                    duration:1,
                    delay:.1
                }}

                className={styles.project_title}>
                        <h2>{title}</h2>

                        <motion.h3
                        variants={{
                            start:{opacity:0},
                            finish:{opacity:1}
                            }}
                        animate = {anima}
                        transition={{
                            duration:1
                        }}>{live}</motion.h3>


                </motion.div>
                <div className={styles.project_stack}>

                    {Stack.map((item,index)=> <motion.li
                    initial = {{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    exit={{opacity:0,y:50}}
                    transition={{
                        duration:1,
                        delay:.1
                    }}
                     className={styles.stack_showcase} key={index}>{item}</motion.li>
                    )}

                </div>

                <motion.div

                initial = {{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                exit={{opacity:0,y:50}}
                transition={{
                    duration:1,
                    delay:.1
                }}

                 className={styles.description}>
                    <p>{description}</p>
                </motion.div>
                <div className={styles.links_continer}>
                        {links.map((item,index)=>
                        <a href={item.link} style={{textDecoration:"none",width:"100%"}} target="_blank"> <motion.li
                        initial = {{opacity:0,y:50}}
                        whileInView={{opacity:1,y:0}}
                        exit={{opacity:0,y:50}}
                        transition={{
                            duration:1,
                            delay:.1
                        }}
                         className={styles.visiting_link}  key={index}>{item.name}</motion.li>
                         </a>
                         )}
                </div>

            </div>
        </motion.div>

</>
    );
}
