import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink } from 'lucide-react'
import plannerLogo from '../../icons/planner_icon.png'

const projects = [
  {
    image: plannerLogo,
    gradient: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'rgba(16,185,129,0.25)',
    glowColor: 'rgba(16,185,129,0.15)',
    title: 'FastAPI Planner App',
    description:
      'A full-featured task management REST API built with FastAPI, PostgreSQL, and Docker. Supports user authentication via JWT, CRUD operations, and is fully containerised.',
    techs: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT'],
    github: 'https://github.com/AndreiShorop',
    live: 'https://planner-421q.onrender.com/',
    status: 'Completed',
    statusColor: 'text-green-400',
  },
  {
    emoji: '🤖',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'rgba(59,130,246,0.25)',
    glowColor: 'rgba(59,130,246,0.15)',
    title: 'Telegram Bot',
    description:
      'A Python-powered Telegram bot with custom commands, inline keyboards, and webhook support. Automates repetitive tasks and can query external APIs in real time.',
    techs: ['Python', 'python-telegram-bot', 'REST API', 'Webhooks'],
    github: 'https://github.com/AndreiShorop',
    status: 'Completed',
    statusColor: 'text-blue-400',
  },
  {
    emoji: '💰',
    gradient: 'from-violet-500/20 to-purple-500/10',
    borderColor: 'rgba(139,92,246,0.25)',
    glowColor: 'rgba(139,92,246,0.15)',
    title: 'Budget Tracker App',
    description:
      'A personal finance tracker REST API built with FastAPI and Docker. Tracks income and expenses, categorises transactions, and serves summary reports via a clean JSON API.',
    techs: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/AndreiShorop/budget_tracker',
    status: 'Completed',
    statusColor: 'text-green-400',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Background orb */}
      <div
        className="orb w-96 h-96 top-10 right-0"
        style={{ background: 'rgba(99,102,241,0.1)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">What I've built</span>
          <h2 className="section-title mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-textMuted mt-3 max-w-xl mx-auto">
            Real-world projects that showcase my skills and problem-solving approach.
          </p>
          <div className="w-16 h-1 bg-primary-gradient rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Project cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-default flex flex-col transition-all duration-300"
              style={{
                borderColor: project.borderColor,
              }}
            >
              {/* Card header */}
              <div
                className={`relative h-36 flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: project.glowColor }}
                />
                {/* Subtle grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 h-16 w-16 object-contain select-none"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                ) : (
                  <motion.span
                    className="text-6xl relative z-10 select-none"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {project.emoji}
                  </motion.span>
                )}
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`glass-card px-3 py-1 rounded-full text-xs font-mono ${project.statusColor}`}>
                    ● {project.status}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-textMuted text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techs.map((t) => (
                    <span key={t} className="skill-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-primary text-sm px-5 py-2.5"
                  >
                    <Github size={15} />
                    GitHub
                  </motion.a>
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn-outline text-sm px-5 py-2.5"
                    >
                      <ExternalLink size={15} />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AndreiShorop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-textMuted hover:text-accent transition-colors duration-300 font-mono text-sm"
          >
            <Github size={16} />
            More projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
