import React from 'react';
import { FaRobot, FaMusic, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const features = [
    { icon: <FaRobot size={50} color="cyan" />, title: 'Smart AI', description: 'Automated moderation with intelligent learning.' },
    { icon: <FaMusic size={50} color="cyan" />, title: 'Music & Fun', description: 'Enjoy music, memes, and mini-games.' },
    { icon: <FaCogs size={50} color="cyan" />, title: 'Custom Commands', description: 'Create unique commands to fit your server.' },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="container text-center py-5">
      <h2 className="section-title">Why Choose AI Bot?</h2>
      <div className="row mt-4" ref={ref}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="col-12 col-md-4 d-flex justify-content-center mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: window.innerWidth < 768 ? index * 0.3 : 0,
            }}
          >
            <motion.div
              className="feature-card d-flex flex-column align-items-center text-center"
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {feature.icon}
              <h3 className="mt-3 text-xl font-semibold">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
