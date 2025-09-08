import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiZap } from 'react-icons/fi'
import './App.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const stagger = {
  show: { transition: { staggerChildren: 0.12 } }
}

function App() {
  return (
    <div>
      <header className="section hero">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={stagger}
          >
            <motion.p className="muted" variants={fadeUp}>Portfólio</motion.p>
            <motion.h1 className="section-title" variants={fadeUp}>
              Criativo, moderno e escuro com degradê
            </motion.h1>
            <motion.p className="section-subtitle muted" variants={fadeUp}>
              Front-end focado em experiências rápidas e desenvolvimento back e mobile.
            </motion.p>
            <motion.div className="cta" variants={fadeUp}>
              <a className="btn" href="#projetos">Ver projetos <FiArrowRight /></a>
              <a className="btn" href="#contato" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)' }}>Contato</a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section id="sobre" className="section">
        <div className="container">
          <div className="grid">
            <motion.div className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} viewport={{ once: true }} style={{ gridColumn: 'span 7' }}>
              <h3>Sobre mim</h3>
              <p className="muted">Sou um desenvolvedor apaixonado por criar interfaces que unem performance e estética.
              Trabalhando com React, animações e design system.</p>
              <div className="divider" />
              <div style={{ display: 'flex', gap: 12 }}>
                <a className="btn" href="#contato" style={{ padding: '10px 16px' }}>Disponível para projetos</a>
              </div>
            </motion.div>
            <motion.div className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .05 }} viewport={{ once: true }} style={{ gridColumn: 'span 5' }}>
              <h3>Stack</h3>
              <p className="muted">React, Vite, Framer Motion, TypeScript/JS, CSS moderno.</p>
              <div className="divider" />
              <div style={{ display: 'flex', gap: 12 }}>
                <a aria-label="Github" className="btn" href="https://github.com/" target="_blank" rel="noreferrer" style={{ padding: '10px 14px' }}><FiGithub /></a>
                <a aria-label="LinkedIn" className="btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" style={{ padding: '10px 14px' }}><FiLinkedin /></a>
                <a aria-label="E-mail" className="btn" href="#contato" style={{ padding: '10px 14px' }}><FiMail /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projetos" className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Projetos em destaque</motion.h2>
          <div className="projects-grid">
            {[1,2,3,4,5,6].map((i) => (
              <motion.a
                key={i}
                href="#"
                className="card project-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: i * 0.04 }}
              >
                <img src={`https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop`} alt="Projeto" />
                <h4 style={{ margin: '6px 0 6px 0' }}>Projeto {i}</h4>
                <p className="muted" style={{ margin: 0 }}>Interface responsiva com animações suaves.</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="conhecimentos" className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Conhecimentos</motion.h2>
          <p className="section-subtitle muted">Um panorama das tecnologias que utilizo no dia a dia.</p>
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
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Vamos conversar</motion.h2>
          <motion.form className="card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
              <input placeholder="Nome" style={{ padding: 12, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', color: 'white' }} />
              <input placeholder="Email" type="email" style={{ padding: 12, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', color: 'white' }} />
            </div>
            <textarea placeholder="Mensagem" rows={5} style={{ marginTop: 16, padding: 12, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', color: 'white', width: '100%' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
              <button className="btn" type="submit">Enviar</button>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="muted">© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
