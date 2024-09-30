import styles from "./About_me.module.css";
import {motion } from "framer-motion";
import cookie from "js-cookie";


export default function About_me(){

    cookie.set('cookie', 'hello', { expires: 7 });
    return(
        <>
        <motion.div
        initial = {{opacity:0,y:70}}
        whileInView={{opacity:1,y:0}}
        exit={{opacity:0,y:70}}
        transition={{
            duration:1,
            delay:.3
        }}
        id="about"
         className={styles.About_me_cover}>
            <motion.div 
            initial = {{opacity:0,y:70}}
            whileInView={{opacity:1,y:0}}
            exit={{opacity:0,y:70}}
            transition={{
                duration:1,
                delay:.3
            }}
            className={styles.my_description}>
                <div className={styles.title}>
                    <h2>About Me</h2>
                </div>
                <div className={styles.description}>
                    <p>
                    I am Hirthick Gowtham, passionate about understanding how websites work. I pursued full-stack development to gain knowledge of website functionality and practical experience in building full-stack applications. Additionally, I am keep on exploring Blockchain technology and to get deeper understand about Blockchain by learning Cryptography and Networking concepts.                    </p>
                </div>
            </motion.div>
            <motion.div
            initial = {{opacity:0,y:70}}
            whileInView={{opacity:1,y:0}}
            exit={{opacity:0,y:70}}
            transition={{
                duration:1,
                delay:.3
            }}
             className={styles.my_picture}>
                
                <div className={styles.picture_continer}
                style={{backgroundImage:`url(/portfolio-site/images/profil.jpg)`,backgroundSize:"cover"}}
                >

                </div>

            </motion.div>
        </motion.div>
        </>
    );

}