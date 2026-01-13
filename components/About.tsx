import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
               <img src="https://picsum.photos/800/800?grayscale" alt="Portrait" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              À propos de <span className="text-indigo-400">moi</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Bonjour ! Je suis un développeur passionné par la création d'interfaces utilisateur modernes et interactives. Mon parcours m'a permis de maîtriser les fondamentaux du web ainsi que les frameworks les plus récents.
              </p>
              <p>
                Actuellement à la recherche d'une <strong className="text-white">alternance de 12 à 24 mois</strong>, je souhaite mettre mes compétences au service d'une équipe dynamique tout en continuant d'apprendre.
              </p>
              <p>
                Mon approche combine rigueur technique et sensibilité créative. J'aime transformer des problèmes complexes en solutions simples et élégantes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-indigo-400">2+</h3>
                <p className="text-sm text-gray-400">Années d'expérience (Projets/Études)</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400">10+</h3>
                <p className="text-sm text-gray-400">Projets complétés</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;