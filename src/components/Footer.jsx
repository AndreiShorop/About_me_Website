import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/AndreiShorop', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:ashorop6787@gmail.com', label: 'Email' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-primary/10 py-12 px-6">
      {/* Subtle top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-64"
        style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">Andrii Shorop</span>
            </div>
            <p className="text-textMuted text-xs font-mono">Junior Python Developer / Azubi</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-textMuted text-sm hover:text-textPrimary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 glass-card rounded-xl flex items-center justify-center text-textMuted hover:text-accent hover:border-primary/40 transition-all duration-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-textMuted/40 text-xs font-mono">
          <span>© {new Date().getFullYear()} Andrii Shorop. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with <Heart size={11} className="text-primary" /> using React &amp; Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}
