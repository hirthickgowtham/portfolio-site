import styles from "./title.module.css"
import { reference } from "../conent/content.js"
import About_me from "../About_me_component/About_me_component.js";
import Project from "../Project_component/project_component.js";
import Tech from "../Tech_component/tech_component.js";
import {tech} from "../conent/content.js"
import Contact from "../contact_component/contact_component.js";
import {motion ,useScroll,useAnimation,useInView} from "framer-motion"
import { useEffect, useRef } from "react";

// this continer both name title and cover of website
export default function Title_cover({children}){

    // const {scrollYProgress} =  useScroll(); 

    const view = useRef(null)
    const content = useInView(view)
    const aimation = useAnimation()

    useEffect(()=>{
        console.log("hello")
        aimation.start("ends")
    },[content,aimation])
   
console.log(children)
    return (
        
        <>
        <div className={styles.over_cover}>
        <div className={styles.cover}>

            <div className={styles.title}>
                <motion.div 
                initial={{opacity:0,x:-100,zIndex:-1}}
                whileInView ={{opacity:1,x:0,zIndex:1}}
                end = {{opacity:0,x:-100,zIndex:-1}}
                transition={{
                    duration:1,
                    delay:.2
                }}
                className={styles.name}>
                    <h1>Hirthick Gowtham G</h1>
                </motion.div>


                <motion.div
                initial={{opacity:0,x:-100,zIndex:-1}}
                whileInView ={{opacity:1,x:0,zIndex:0}}
                end = {{opacity:0,x:-100,zIndex:-1}}
                transition={{
                    duration:1,
                    delay:.2
                }}
                 className={styles.passion}>
                   <h2> Full Stack developer</h2>
                </motion.div>


                <motion.div
                initial={{opacity:0,x:-100,zIndex:-1}}
                whileInView ={{opacity:1,x:0,zIndex:0}}
                end = {{opacity:0,x:-100,zIndex:-1}}
                transition={{
                    duration:1,
                    delay:.2
                }}
                 className={styles.description}>
                    <p>I am actively seeking internships in MERN stack development and am also open to freelance opportunities.
                </p>
                </motion.div>

                <motion.div
                initial={{opacity:0,x:-100,zIndex:-1}}
                whileInView ={{opacity:1,x:0,zIndex:0}}
                end = {{opacity:0,x:-100,zIndex:-1}}
                transition={{
                    duration:1,
                    delay:.2
                }}
                 className={styles.links}>

                    {reference.map((item,index) =>  <a href={item.link} target="_blank"><li className={styles.reference} key = {index}> <img src={`${process.env.PUBLIC_URL}${item.image}`}  /> {item.title}</li></a>)}
                 
                    
                
                </motion.div>
                <About_me/>
                <Project/>
                <Tech title="Tech Stack" item={tech[0]}/>
                <Tech title="Tools" item={tech[1]}/>
            </div>
        </div>
                <Contact/>
        </div>
        </>
    );
}