import Resize from "../Custom_hook/window_resize_hook"
import styles from "./tech.module.css"
import {motion} from "framer-motion"



export default  function Tech({title,item}){

    const windowSize = Resize()


    

    return(
        <>
         <div className="title_cover">
            <motion.div 

            initial = {{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            end={{opacity:0,y:50}}
            transition={{
                duration:1,
                delay:.1
            }}
         
            className={styles.line}></motion.div>

            <motion.div

            initial = {{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            end={{opacity:0,y:50}}
            transition={{
                duration:1,
                delay:.1
            }}
         
             className={styles.main_title}>
                <h2>{title}</h2>
            </motion.div>
        </div>

        <div className={styles.tech_cover}>
            <div className={styles.tech_continer}>
                
                {item.map(item=>
                <motion.div
                initial = {{opacity:0,x:-90}}
                        whileInView={{opacity:1,x:0}}
                        end={{opacity:0,x:-90}}
                        transition={{
                            duration:.5,
                           delay:.1,
                           ease:"easeInOut"
                        }}
                     
                 className={styles.icon_holder}>
                    <img className={styles.img}src={item.icon} alt={item.name} />
                    <p className={styles.icon_name}>{item.name}</p>
                </motion.div>
                )}
                
                
            </div>

        </div>




        </>
    )
}