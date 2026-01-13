import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Mes Compétences</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une stack technique polyvalente centrée sur l'écosystème JavaScript/TypeScript moderne.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <skillGroup.icon className="text-indigo-400" size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
              
              <ul className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;