import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const milestones = [
  {
    year: '2023',
    title: 'Discovered Python',
    description:
      'Started my programming journey with Python. Fell in love with its readability, simplicity, and the sheer power it offers for automation and scripting.',
    tags: ['Python', 'Basics', 'Scripting'],
    color: '#3b82f6',
    side: 'left',
  },
  {
    year: '2024',
    title: 'Dived into Backend Development',
    description:
      'Learned FastAPI and built my first REST API from scratch. Discovered the world of HTTP, routing, middleware, and API design patterns.',
    tags: ['FastAPI', 'REST API', 'HTTP'],
    color: '#10b981',
    side: 'right',
  },
  {
    year: '2025',
    title: 'Mastered Docker & Databases',
    description:
      'Containerised my applications with Docker Compose, integrated PostgreSQL, and learned how production environments really work.',
    tags: ['Docker', 'PostgreSQL', 'DevOps'],
    color: '#06b6d4',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Explored AI & Automation',
    description:
      'Built a Telegram bot using Python and started exploring AI tools and APIs. Started combining Python with modern AI tools for real-world projects.',
    tags: ['AI', 'Telegram', 'Automation'],
    color: '#8b5cf6',
    side: 'right',
  },
  {
    year: '2025',
    title: 'Azubi at STEP-G Team',
    description:
      'Joined STEP-G as an Azubi (apprentice), working on real projects in a professional team environment. Applying backend skills in a real-world company setting.',
    tags: ['Azubi', 'STEP-G', 'Professional'],
    color: '#6366f1',
    side: 'left',
  },
  {
    year: '2026',
    title: 'Python & Data Science Course',
    description:
      'Enrolled in a structured Python and Data Science course, deepening knowledge in data analysis, pandas, NumPy, and machine learning fundamentals.',
    tags: ['Data Science', 'pandas', 'NumPy', 'ML'],
    color: '#f59e0b',
    side: 'right',
  },
]

function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const isLeft = item.side === 'left'

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start mb-10 last:mb-0">
      {/* Left content */}
      <div className={isLeft ? 'col-start-1' : 'col-start-1 hidden md:block'}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="glass-card p-5 rounded-2xl md:text-right hover:border-primary/30 transition-all duration-300"
            style={{ borderColor: `${item.color}30` }}
          >
            <span className="font-mono text-xs text-textMuted/60 block mb-1">{item.year}</span>
            <h3 className="text-lg font-bold text-textPrimary mb-2">{item.title}</h3>
            <p className="text-textMuted text-sm leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-xs font-mono"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}35`,
                    color: item.color,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div className="col-start-2 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-5 h-5 rounded-full z-10 relative flex-shrink-0"
          style={{
            background: 'radial-gradient(circle, #a78bfa, #6366f1)',
            boxShadow: '0 0 14px rgba(99,102,241,0.7)',
          }}
        />
      </div>

      {/* Right content */}
      <div className={!isLeft ? 'col-start-3' : 'col-start-3 hidden md:block'}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="glass-card p-5 rounded-2xl hover:border-primary/30 transition-all duration-300"
            style={{ borderColor: `${item.color}30` }}
          >
            <span className="font-mono text-xs text-textMuted/60 block mb-1">{item.year}</span>
            <h3 className="text-lg font-bold text-textPrimary mb-2">{item.title}</h3>
            <p className="text-textMuted text-sm leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-xs font-mono"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}35`,
                    color: item.color,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
        {/* Mobile: show left items on right column too */}
        {isLeft && (
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="glass-card p-5 rounded-2xl hover:border-primary/30 transition-all duration-300"
              style={{ borderColor: `${item.color}30` }}
            >
              <span className="font-mono text-xs text-textMuted/60 block mb-1">{item.year}</span>
              <h3 className="text-lg font-bold text-textPrimary mb-2">{item.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs font-mono"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}35`,
                      color: item.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      {/* Background orb */}
      <div
        className="orb w-80 h-80 bottom-20 left-10"
        style={{ background: 'rgba(99,102,241,0.1)', filter: 'blur(100px)' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">My Path</span>
          <h2 className="section-title mt-2">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-textMuted mt-3 max-w-xl mx-auto">
            A timeline of key milestones on my path to becoming a developer.
          </p>
          <div className="w-16 h-1 bg-primary-gradient rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Vertical line */}
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, rgba(99,102,241,0.6), rgba(139,92,246,0.6), rgba(99,102,241,0.1))',
            }}
          />

          {milestones.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
