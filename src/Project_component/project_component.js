import styl from "./project.module.css"
import { project } from "../conent/content.js"
import Project_showcase from "./project_item.js";
import {motion } from "framer-motion";
export default function Project(){


    
    return(<>
        <div id ="project" className="title_cover">
            <motion.div

            initial = {{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            end={{opacity:0,y:50}}
            transition={{
                duration:1,
                delay:.3
            }}

            className={styl.line}></motion.div>

            <motion.div 

              initial = {{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              end={{opacity:0,y:50}}
              transition={{
                  duration:1,
                  delay:.3
              }}
              
            className={styl.main_title}>
                <h2 className={styl.name_holder}>Project</h2>
            </motion.div>
        </div>
        
        
        {project.map((item,index)=> 
            <Project_showcase item={item}/>
        )}
        
        

        </>
    );
}