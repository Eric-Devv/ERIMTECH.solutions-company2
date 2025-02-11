import { motion } from 'framer-motion';
import { Code, Shield, Globe, Cpu, Database, Cloud, ArrowRight, Palette } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, including web and mobile applications, enterprise software, and API integrations.',
      features: [
        'Custom Application Development',
        'Mobile App Development',
        'API Integration',
        'Legacy System Modernization'
      ]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Graphics and UI Design',
      description: 'Comprehensive design solutions to project your brand and ensure business continuity through identity.',
      features: [
        'Logo Design',
        'Poster Design',
        'Business cards Design',
        'UI&UX Design'
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Solutions',
      description: 'Modern web applications and e-commerce platforms that drive business growth and enhance user experience.',
      features: [
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps',
        'Web Optimization'
      ]
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
            <h1 className="text-4xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
            </p>
          </motion.div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-panel p-8 rounded-xl"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-neon-cyan mb-6">{solution.icon}</div>
                    <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <button className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors">
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  <div className="glass-panel p-6 rounded-xl bg-dark/50">
                    <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}