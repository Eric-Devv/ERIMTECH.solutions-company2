import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';

export default function Careers() {
  const jobs = [
    
    {
      title: 'UI/UX Designer',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description: 'Join our design team to create beautiful and intuitive user experiences for our clients.',
      requirements: [
        'Bachelor degree in Design or related field',
        '3+ years of experience in UI/UX design',
        'Strong portfolio showcasing web and mobile designs',
        'Proficiency in design tools (Figma, Adobe XD)'
      ]
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Looking for a DevOps Engineer to help streamline our development and deployment processes.',
      requirements: [
        'Bachelor degree in Computer Science or related field',
        '3+ years of DevOps experience',
        'Experience with CI/CD pipelines',
        'Knowledge of containerization and orchestration'
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
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology in Africa.
            </p>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-6 lg:mb-0">
                    <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-neon-cyan" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-neon-cyan" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-pink text-white rounded-lg hover:opacity-90 transition-opacity">
                    Apply Now
                  </button>
                </div>

                <div className="mt-6">
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <h3 className="text-lg font-semibold mb-3">Requirements:</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Join Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Why Join ERIMTECH?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: 'Career Growth',
                  description: 'Opportunities for professional development and advancement'
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: 'Work-Life Balance',
                  description: 'Flexible working hours and remote work options'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Great Culture',
                  description: 'Collaborative and innovative work environment'
                }
              ].map((benefit) => (
                <div key={benefit.title} className="glass-panel p-6 rounded-xl text-center">
                  <div className="text-neon-cyan mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}