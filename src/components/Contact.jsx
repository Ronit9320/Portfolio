import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-xol-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <span><h2 className={styles.sectionHeadText}>Contact.</h2><p>shahronit16@gmail.com</p></span>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")