import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Globe, Cpu, Database, Cloud, Palette } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphics & UI Design',
      description: 'Showcase your brand with a mordern adn futuristic designs from our experts'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Solutions',
      description: 'Modern web applications and e-commerce platforms'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Secure and efficient cloud computing solutions'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Innovative Solutions</span>
              <br />
              for a Digital Future
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leading technology solutions provider in Kenya, delivering cutting-edge services to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-pink text-white rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-neon-cyan text-white rounded-full font-medium hover:bg-neon-cyan/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-xl hover:border-neon-cyan transition-colors group"
              >
                <div className="text-neon-cyan mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}