import styles from "./contact.module.css"
import { contact } from "../conent/content";
import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion"



export default function Contact(){
    console.log(contact);
    const [arrowChange,setArrowChange] = useState(false)
    const resume_arrow = useRef()
    const down_arrow = "ri-arrow-right-line" ;
    const up_arrow = "ri-arrow-right-up-line"

    useEffect(()=>{
            const val = resume_arrow.current;
            val.addEventListener('mouseover',()=>{
                setArrowChange(true)
            })

            val.addEventListener("mouseleave",()=>{
                setArrowChange(false)
            })
    },[])
    return(

        <div id = "contact"className={styles.covers}>
                <div className={styles.resume_continer}>
                    
                        <motion.div 
                        initial = {{opacity:0,x:-100}}
                        whileInView={{opacity:1,x:0}}
                        end={{opacity:0,x:-200}}
                        transition={{
                            duration:.5,
                           delay:.1,
                           ease:"easeInOut"
                        }}
                        className={styles.resume_button}>
                            <li className={styles.button}  ref={resume_arrow}>Resume <i class={arrowChange?up_arrow:down_arrow} ></i></li>
                        </motion.div>
                        <motion.div
                        initial = {{opacity:0,x:-200}}
                        whileInView={{opacity:1,x:0}}
                        end={{opacity:0,x:-200}}
                        transition={{
                            duration:.5,
                           delay:.1,
                           ease:"easeInOut"
                        }}
                         className={styles.contact_link}>
                            {contact?.map((item,index) => <a href={item.link} target="_blank"><li className={styles.icon} key={index}><img src={item.icon}  /></li></a>)}
                        </motion.div>
                </div>

                <div className={styles.copy_right}>
                   <a href="mailto:gowthamhirthick@gmail.com" target="_blank"> <motion.li
                    initial = {{opacity:0,x:-200}}
                    whileInView={{opacity:1,x:0}}
                    end={{opacity:0,x:-200}}
                    transition={{
                        duration:.5,
                       delay:.1,
                       ease:"easeInOut"
                    }}
                     className={styles.mail}><img src="/portfolio-site/images/mail.png" />gowthamhirthick@gmail.com</motion.li></a>
                    <motion.p
                    initial = {{opacity:0,x:-200}}
                    whileInView={{opacity:1,x:0}}
                    end={{opacity:0,x:-200}}
                    transition={{
                        duration:.5,
                       delay:.1,
                       ease:"easeInOut"
                    }}
                     className={styles.copy}>© 2024 | Hirthick Gowtham G</motion.p>
                </div>
        </div>

    
    );
}