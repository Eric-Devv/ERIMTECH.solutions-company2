import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Digital Transformation for Leading Bank',
      category: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Implemented a comprehensive digital banking solution that transformed customer experience and operational efficiency.'
    },
    {
      title: 'E-commerce Platform Development',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Built a scalable e-commerce platform that increased online sales by 300% within the first year.'
    },
    {
      title: 'Healthcare Management System',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Developed an integrated healthcare management system that improved patient care and operational efficiency.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how we've helped businesses transform and succeed in the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-neon-cyan mb-2">{study.category}</div>
                  <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  <button className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors">
                    Read More <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}