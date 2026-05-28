import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    icon: '🐍',
    name: 'Python',
    level: 80,
    description: 'Core language — scripting, OOP, data structures',
    color: '#3b82f6',
    tags: ['OOP', 'Scripting', 'Automation'],
  },
  {
    icon: '⚡',
    name: 'FastAPI',
    level: 70,
    description: 'Modern async REST API framework',
    color: '#10b981',
    tags: ['REST', 'Async', 'Pydantic'],
  },
  {
    icon: '🐳',
    name: 'Docker',
    level: 65,
    description: 'Containerisation & Docker Compose',
    color: '#06b6d4',
    tags: ['Containers', 'Compose', 'DevOps'],
  },
  {
    icon: '🐙',
    name: 'Git',
    level: 75,
    description: 'Version control, branching, collaboration',
    color: '#f97316',
    tags: ['GitHub', 'Branching', 'PRs'],
  },
  {
    icon: '🗄️',
    name: 'SQL',
    level: 65,
    description: 'Relational queries, JOINs, indexing',
    color: '#6366f1',
    tags: ['Queries', 'JOINs', 'Schema'],
  },
  {
    icon: '🐘',
    name: 'PostgreSQL',
    level: 60,
    description: 'Production-grade relational database',
    color: '#8b5cf6',
    tags: ['RDBMS', 'Transactions', 'psycopg2'],
  },
  {
    icon: '🐧',
    name: 'Linux',
    level: 70,
    description: 'CLI, shell scripting, file system navigation',
    color: '#f59e0b',
    tags: ['Bash', 'CLI', 'Systemd'],
  },
  {
    icon: '🌐',
    name: 'REST API',
    level: 75,
    description: 'Design, consume, and document REST APIs',
    color: '#ec4899',
    tags: ['HTTP', 'JSON', 'OpenAPI'],
  },
  {
    icon: '🎨',
    name: 'HTML / CSS',
    level: 65,
    description: 'Markup, styling, and responsive layouts',
    color: '#e11d48',
    tags: ['Semantic', 'Flexbox', 'Responsive'],
  },
  {
    icon: '☕',
    name: 'Java',
    level: 35,
    description: 'Basics — OOP concepts and syntax',
    color: '#78716c',
    tags: ['Basic OOP', 'Syntax'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Background orb */}
      <div
        className="orb w-80 h-80 top-20 left-0"
        style={{ background: 'rgba(139,92,246,0.12)', filter: 'blur(90px)' }}
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
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Tech Stack</span>
          <h2 className="section-title mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-textMuted mt-3 max-w-xl mx-auto">
            Technologies I work with daily — constantly expanding my toolkit.
          </p>
          <div className="w-16 h-1 bg-primary-gradient rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              className="glass-card p-5 rounded-2xl cursor-default group hover:border-primary/30 transition-all duration-300 flex flex-col gap-3"
              style={{
                '--skill-color': skill.color,
              }}
            >
              {/* Icon + name */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{skill.icon}</span>
                <div>
                  <p className="font-bold text-textPrimary text-sm leading-tight">{skill.name}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: skill.color }}
                />
              </div>

              {/* Description */}
              <p className="text-textMuted text-xs leading-relaxed">{skill.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs font-mono"
                    style={{
                      background: `${skill.color}15`,
                      border: `1px solid ${skill.color}35`,
                      color: skill.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-textMuted/60 text-sm font-mono mt-10"
        >
          // and growing every single day...
        </motion.p>
      </div>
    </section>
  )
}
