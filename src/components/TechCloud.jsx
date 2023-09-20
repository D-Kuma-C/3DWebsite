import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from '../styles';

const data = technologies.map(technology => technology.name);

const TechCloud = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have worked with so far</p>
                <h2 className={styles.sectionHeadText}>My Skills</h2>
            </motion.div>
            <div className="flex justify-center">
                <TagCloud
                    options={{ radius: 500, maxSpeed: "fast", useItemInlineStyles: true }}
                >
                    {data}
                </TagCloud>
            </div>
        </>
    )
}

export default SectionWrapper(TechCloud);