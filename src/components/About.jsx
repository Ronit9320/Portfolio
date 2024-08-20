import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" options={{
          max: 45,
          scale: 1,
          speed: 450
        }} >
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center ">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] max-w-[3xl] leading-[30px]">
        I am a passionate and dedicated web developer with a strong foundation in both front-end and back-end technologies. My enthusiasm for game development drives me to explore innovative ways to merge web development with interactive design, creating engaging and immersive user experiences. Whether building dynamic websites or developing interactive games, I am committed to pushing the boundaries of what's possible in the digital space. I thrive on challenges, continually learning, and growing to craft solutions that captivate and inspire users.
      </motion.p>
      
      <div className="mt-20 flex flex-wrap justify-between gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")