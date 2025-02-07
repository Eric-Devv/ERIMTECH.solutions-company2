import { motion } from 'framer-motion';
import { Award, Users, Building, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Users />, value: '500+', label: 'Clients Served' },
    { icon: <Award />, value: '50+', label: 'Awards Won' },
    { icon: <Building />, value: '10+', label: 'Years Experience' },
    { icon: <Target />, value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">About ERIMTECH</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology solutions provider in Kenya, dedicated to delivering innovative solutions that drive digital transformation.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-xl text-center"
              >
                <div className="text-neon-cyan mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2  text-gray-300 gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h2>
              <p className="text-gray-300">
                To be the leading technology solutions provider in Africa, driving digital transformation and innovation across industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h2>
              <p className="text-gray-300">
                To deliver cutting-edge technology solutions that empower businesses to thrive in the digital age while maintaining the highest standards of quality and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}