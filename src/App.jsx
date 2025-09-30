import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiZap, FiCheck, FiX } from 'react-icons/fi'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import profileImage from './assets/SAN_6567.jpg'
import landingImage from './assets/Captura de tela 2025-09-29 202033.png'
import './App.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const stagger = {
  show: { transition: { staggerChildren: 0.12 } }
}

// Dados dos projetos
const projects = [
  {
    id: 1,
    title: "E-commerce React",
    description: "Plataforma de e-commerce completa com carrinho de compras, pagamentos e painel administrativo.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://exemplo-ecommerce.com",
    githubUrl: "https://github.com/Diego Zandonadi/ecommerce"
  },
  {
    id: 2,
    title: "App Mobile Flutter",
    description: "Aplicativo mobile para delivery de comida com geolocalização e notificações push.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    technologies: ["Flutter", "Firebase", "Google Maps"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.delivery.app",
    githubUrl: "https://github.com/Diego Zandonadi/delivery-app"
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Dashboard interativo para análise de dados com gráficos em tempo real e relatórios personalizados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "WebSocket", "Node.js"],
    liveUrl: "https://dashboard-chi-inky.vercel.app/",
    githubUrl: "https://github.com/Diego Zandonadi/analytics-dashboard"
  },
  {
    id: 4,
    title: "API REST Node.js",
    description: "API robusta para gerenciamento de usuários com autenticação JWT e documentação Swagger.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    technologies: ["Node.js", "Express", "JWT", "Swagger"],
    liveUrl: "https://api-exemplo.com/docs",
    githubUrl: "https://github.com/Diego Zandonadi/api-rest"
  },
  {
    id: 5,
    title: "Landing Page Next.js",
    description: "Landing page responsiva com SEO otimizado e performance de alta velocidade.",
    image: landingImage,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://landing-page-typescript.vercel.app/",
    githubUrl: "https://github.com/DiegoZandonadi/landing-page-typescript"
  },
  {
    id: 6,
    title: "Sistema de Chat",
    description: "Chat em tempo real com WebSockets, salas privadas e sistema de mensagens.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    technologies: ["Socket.io", "React", "Express", "Redis"],
    liveUrl: "https://chat-exemplo.com",
    githubUrl: "https://github.com/Diego Zandonadi/chat-system"
  }
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle') // idle, sending, success, error

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    try {
      // Configuração do EmailJS
      const serviceId = 'service_adujo7g' // Substitua pelo seu Service ID
      const templateId = 'template_2jgnxh6' // Substitua pelo seu Template ID
      const publicKey = 'Vo_nLRoNqGn40Lvoc' // Substitua pela sua Public Key
      
      // Inicializar EmailJS
      emailjs.init(publicKey)
      
      // Enviar email
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'zandonadidiego0@gmail.com'
      })
      
      if (result.status === 200) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setFormStatus('error')
    }
  }

  return (
      <div>
      <header className="section hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={stagger}
            >
              <motion.p className="muted" variants={fadeUp}>Diego Zandonadi</motion.p>
              <motion.h1 className="section-title" variants={fadeUp}>
                Desenvolvedor Full Stack
              </motion.h1>
              <motion.p className="section-subtitle muted" variants={fadeUp}>
                Desenvolvedor Full Stack especializado em soluções web modernas, aplicações mobile e arquiteturas escaláveis.
              </motion.p>
              <motion.div className="cta" variants={fadeUp}>
                <a className="btn" href="#projetos">Ver projetos <FiArrowRight /></a>
                <a className="btn" href="#contato" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)' }}>Contato</a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={profileImage} alt="Diego Zandonadi" />
            </motion.div>
          </div>
        </div>
      </header>

      <section id="sobre" className="section">
        <div className="container">
          <div className="grid">
            <motion.div className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} viewport={{ once: true }} style={{ gridColumn: 'span 7' }}>
              <h3>Sobre mim</h3>
              <p className="muted">Desenvolvedor com mais de 3 anos de experiência em desenvolvimento web e mobile. 
              Especializado em React, Node.js e Flutter, com foco em performance, escalabilidade e experiência do usuário.</p>
              <div className="divider" />
              <div style={{ display: 'flex', gap: 12 }}>
                <a className="btn" href="#contato" style={{ padding: '10px 16px' }}>Disponível para projetos</a>
              </div>
            </motion.div>
            <motion.div className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .05 }} viewport={{ once: true }} style={{ gridColumn: 'span 5' }}>
              <h3>Stack Técnica</h3>
              <p className="muted">Frontend: React, TypeScript, Next.js, Flutter<br/>
              Backend: Node.js, Express, MongoDB, PostgreSQL<br/>
              DevOps: Docker, AWS, Vercel</p>
              <div className="divider" />
              <div style={{ display: 'flex', gap: 12 }}>
                <a aria-label="Github" className="btn" href="https://github.com/DiegoZandonadi?tab=repositories" target="_blank" rel="noreferrer" style={{ padding: '10px 14px' }}><FiGithub /></a>
                <a aria-label="LinkedIn" className="btn" href="https://www.linkedin.com/in/diego-zandonadi" target="_blank" rel="noreferrer" style={{ padding: '10px 14px' }}><FiLinkedin /></a>
                <a aria-label="E-mail" className="btn" href="#contato" style={{ padding: '10px 14px' }}><FiMail /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projetos" className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Projetos Destaque</motion.h2>
          <p className="section-subtitle muted">Soluções desenvolvidas com foco em performance e experiência do usuário.</p>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="card project-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: i * 0.04 }}
              >
                <img src={project.image} alt={project.title} />
                <h4 style={{ margin: '6px 0 6px 0' }}>{project.title}</h4>
                <p className="muted" style={{ margin: '0 0 12px 0' }}>{project.description}</p>
                
                {/* Tecnologias */}
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiArrowRight /> Ver Projeto
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub /> Código
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="conhecimentos" className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Competências Técnicas</motion.h2>
          <p className="section-subtitle muted">Tecnologias e ferramentas que domino para desenvolvimento de soluções completas.</p>
          <div className="skills-grid">
            {[
              { name: 'HTML', percent: 95 },
              { name: 'CSS', percent: 90 },
              { name: 'JavaScript', percent: 88 },
              { name: 'TypeScript', percent: 75 },
              { name: 'React', percent: 90 },
              { name: 'Flutter', percent: 60 },
            ].map((s, idx) => (
              <motion.div key={s.name} className="skill" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: idx * 0.05 }}>
                <div className="skill-header">
                  <div className="skill-name"><FiZap /> {s.name}</div>
                  <span className="muted">{s.percent}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div className="skill-fill" initial={{ width: 0 }} whileInView={{ width: `${s.percent}%` }} viewport={{ once: true }} transition={{ duration: .8, ease: 'easeOut' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Entre em Contato</motion.h2>
          <p className="section-subtitle muted">Interessado em trabalhar juntos? Vamos conversar sobre seu próximo projeto.</p>
          <motion.form className="card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
              <input 
                name="name"
                placeholder="Nome" 
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{ padding: 12, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', color: 'white' }} 
              />
              <input 
                name="email"
                placeholder="Email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{ padding: 12, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', color: 'white' }} 
              />
            </div>
            <textarea 
              name="message"
              placeholder="Mensagem" 
              rows={5} 
              value={formData.message}
              onChange={handleInputChange}
              required
              style={{ marginTop: 16, padding: 12, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', color: 'white', width: '100%' }} 
            />
            
            {/* Status do formulário */}
            {formStatus === 'success' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, padding: 12, background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: 8, color: '#22c55e' }}>
                <FiCheck /> Mensagem enviada com sucesso!
              </div>
            )}
            
            {formStatus === 'error' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, padding: 12, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 8, color: '#ef4444' }}>
                <FiX /> Erro ao enviar mensagem. Tente novamente.
              </div>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
              <button 
                className="btn" 
                type="submit" 
                disabled={formStatus === 'sending'}
                style={{ opacity: formStatus === 'sending' ? 0.6 : 1 }}
              >
                {formStatus === 'sending' ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="muted">© {new Date().getFullYear()} Desenvolvedor Full Stack. Todos os direitos reservados.</p>
      </div>
      </footer>
      </div>
  )
}

export default App
