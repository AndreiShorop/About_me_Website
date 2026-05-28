import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { Github, Linkedin, ArrowDown, Mail } from 'lucide-react'

const floatingOrbs = [
  { size: 500, top: '-10%', left: '-15%', color: 'rgba(99,102,241,0.18)', delay: 0, duration: 12 },
  { size: 400, top: '50%', right: '-10%', color: 'rgba(139,92,246,0.14)', delay: 2, duration: 15 },
  { size: 300, bottom: '10%', left: '30%', color: 'rgba(34,211,238,0.1)', delay: 4, duration: 10 },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 4,
  size: 1 + Math.random() * 2,
}))

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg"
    >
      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4"
        >
          <span className="text-textPrimary">Andrii </span>
          <span className="gradient-text text-shadow-glow">Shorop</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono font-medium text-textMuted mb-6 h-10 flex items-center justify-center gap-2"
        >
          <span className="text-primary">&gt;&nbsp;</span>
          <Typewriter
            options={{
              strings: [
                'Junior Python Developer',
                'Azubi / Apprentice',
                'Backend Enthusiast',
                'FastAPI &amp; Docker Explorer',
                'Always Learning 🚀',
              ],
              autoStart: true,
              loop: true,
              delay: 55,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        {/* Short intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-textMuted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building clean, efficient backend systems. Currently on a
          journey through Python, FastAPI, Docker, and modern APIs — turning ideas
          into working software, one commit at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="btn-outline flex items-center gap-2"
          >
            <Mail size={18} />
            Contact Me
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/AndreiShorop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-textMuted border border-white/10 hover:border-white/25 hover:text-textPrimary hover:bg-white/5 transition-all duration-300 font-semibold"
          >
            <Github size={18} />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-textMuted border border-white/10 hover:border-blue-400/40 hover:text-blue-400 hover:bg-blue-400/5 transition-all duration-300 font-semibold"
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-2 text-textMuted/50"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
