import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Github, Linkedin, Mail, CheckCircle } from 'lucide-react'

const socials = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'ashorop6787@gmail.com',
    href: 'mailto:ashorop6787@gmail.com',
    color: '#6366f1',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'AndreiShorop',
    href: 'https://github.com/AndreiShorop',
    color: '#94a3b8',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'Add your LinkedIn',
    href: 'https://linkedin.com',
    color: '#3b82f6',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build mailto link
    const mailtoLink = `mailto:ashorop6787@gmail.com?subject=${encodeURIComponent(
      form.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailtoLink
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-28 px-6 relative">
      {/* Background orb */}
      <div
        className="orb w-96 h-96 top-0 left-1/2 -translate-x-1/2"
        style={{ background: 'rgba(99,102,241,0.08)', filter: 'blur(120px)' }}
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
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Let's connect</span>
          <h2 className="section-title mt-2">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-textMuted mt-3 max-w-xl mx-auto">
            Open for internship opportunities, Azubi positions, or just a friendly chat about tech.
          </p>
          <div className="w-16 h-1 bg-primary-gradient rounded-full mx-auto mt-4" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — socials + info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass-card-strong p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-textPrimary mb-2">Let's work together</h3>
              <p className="text-textMuted text-sm leading-relaxed mb-8">
                Whether you have an exciting project, an internship opening, or just want to say hello —
                my inbox is always open. I'll do my best to reply within 24 hours.
              </p>

              <div className="space-y-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: `${s.color}20`,
                        border: `1px solid ${s.color}40`,
                        color: s.color,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-xs text-textMuted font-mono">{s.label}</p>
                      <p className="text-textPrimary text-sm font-medium group-hover:text-accent transition-colors duration-200">
                        {s.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-textPrimary font-semibold text-sm">Available for opportunities</p>
                <p className="text-textMuted text-xs mt-0.5">
                  Actively looking for Azubi positions &amp; internships
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card-strong p-8 rounded-2xl space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-textMuted mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-textMuted mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-textMuted mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Azubi Position"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-textMuted mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Andrii, I came across your portfolio and..."
                  required
                  className="form-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} className="text-green-300" />
                    <span>Opening email client...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-textMuted/40 text-xs font-mono">
                // Opens your default email client
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
