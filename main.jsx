
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, Download, FileText,
  ArrowUpRight, GraduationCap
} from 'lucide-react';
import './style.css';

const projects = [
  {
    title: 'Digital Twin — AQI Forecasting',
    kind: 'AI · Forecasting',
    stack: 'Python · LSTM · Flask · REST APIs · Leaflet.js',
    desc: 'Air-quality forecasting system combining 8,700+ hourly records with live monitoring data and interactive maps.',
    url: null
  },
  {
    title: 'Toxic Comment Classifier',
    kind: 'NLP · Responsible AI',
    stack: 'BERT · TF-IDF · FastAPI · Gradio',
    desc: 'Multi-label toxicity detection across six categories with an interactive analysis interface.',
    url: null
  },
  {
    title: 'Agriculture RAG Assistant',
    kind: 'LLM · Retrieval',
    stack: 'Python · SentenceTransformers · FAISS · Flask',
    desc: 'In-development retrieval-augmented assistant designed to ground farming guidance in curated agricultural documents.',
    url: 'https://github.com/SistaManogna/Agriculture-RAG-Assistant'
  },
  {
    title: 'Faculty Connect',
    kind: 'Full-stack',
    stack: 'Flask · MongoDB · HTML · CSS',
    desc: 'Faculty search and availability application built collaboratively in an Agile team.',
    url: 'https://github.com/SistaManogna/Faculty_Connect'
  },
  {
    title: 'Fertilizer Usage Optimizer',
    kind: 'Machine Learning',
    stack: 'Python · OOP · ML',
    desc: 'Soil-nutrient-based fertilizer recommendation engine with approximately 80% reported recommendation accuracy.',
    url: null
  }
];




const folders = [
  // LEFT SEMICIRCLE
 
{ id: 'about', label: 'About ME👆🏻', color: '#efba77', x: 19, y: 20, rot: -5 },

{ id: 'skills', label: 'Interests🤓', color: '#e6a3ac', x: 12, y: 50, rot: -3 },

{ id: 'hobbies', label: 'Hobbies!!🎤', color: '#b8a6d3', x: 19, y: 76, rot: 4 },


  // RIGHT SEMICIRCLE
  {
    id: 'resume',
    label: 'My Resume',
    color: '#91b5c4',
    x: 75,
    y: 20,
    rot: 5
  },
  {
    id: 'projects',
    label: 'My Projects!😇',
    color: '#a8b994',
    x: 82,
    y: 50,
    rot: 3
  },
  {
    id: 'achievements',
    label: 'My Little Wins 🥳',
    color: '#ddc06c',
    x: 75,
    y: 76,
    rot: -4
  },

  // BOTTOM RIGHT
  
   
{
  id: 'contact',
  label: 'Contact me @ ✌🏻',
  color: '#b6aaa1',
  x: 47,
  y: 78,
  rot: 1
}

  
];




function FolderIcon({ color }) {
  return (
    <svg viewBox="0 0 110 92" className="folder-icon" aria-hidden="true">
      <path
        d="M8 21Q8 11 18 11H44L55 20H91Q102 20 102 31V76Q102 84 93 84H17Q8 84 8 75Z"
        fill={color}
      />
      <path
        d="M8 36Q8 29 17 29H96Q105 29 103 38L100 77Q99 85 90 85H18Q8 85 8 76Z"
        fill={color}
        stroke="#6c6252"
        strokeOpacity=".17"
      />
      <path
        d="M15 38H95"
        stroke="white"
        strokeOpacity=".38"
        strokeWidth="3"
      />
    </svg>
  );
}

function Content({ id }) {
  switch (id) {
    case 'about':
      return (
        <>
          <p className="eyebrow">THE HUMAN BEHIND THE CODE</p>
          <h2>Hello, I'm Manogna ,You can call me SISTA!<span>✳</span></h2>
          <p>
            I'm Sista Manogna, a Computer Science (AI & ML)
            undergraduate at VNR Vignana Jyothi Institute of
            Engineering and Technology in Hyderabad (2024–2028).
          </p>
          <p>
            I enjoy building thoughtful AI applications, experimenting
            with new ideas, and solving algorithmic challenges.
            I also love creative communication and collaborative communities.
            I am a quick learner and collaborative worker!
          </p>
          <div className="info-strip">
            <GraduationCap size={21} />
            B.Tech · CSE (AI & ML) · Hyderabad
          </div>
        </>
      );

    case 'resume':
      return (
        <>
          <p className="eyebrow">THE FORMAL STUFF</p>
          <h2>RESUME <span>↗</span></h2>
          <p>
            Take a closer look at my education, projects,
            technical skills, and achievements.
          </p>
          <div className="resume-actions">
            <a
              className="primary-link"
              href="/Manogna_Sista_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={16} /> Open PDF
            </a>
            <a
              className="secondary-link"
              href="/Manogna_Sista_Resume.pdf"
              download
            >
              <Download size={16} /> Download
            </a>
          </div>
          <iframe
            className="pdf-frame"
            src="/Manogna_Sista_Resume.pdf"
            title="Manogna's resume"
          />
        </>
      );

    case 'projects':
      return (
        <>
          <p className="eyebrow">IDEAS INTO REALITY</p>
          <h2>Things I've worked on<span>✳</span></h2>
          <div className="projects">
            {projects.map((p, i) => (
              <article className="project" key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div>
                  <div className="project-kind">{p.kind}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <small>{p.stack}</small>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View repository <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <a
            className="text-link"
            href="https://github.com/SistaManogna"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore all GitHub repositories
            <ArrowUpRight size={15} />
          </a>
        </>
      );

    case 'skills':
      return (
        <>
          <p className="eyebrow">MY SKILL SET </p>
          <h2>Learned with passion! <span>⚡</span></h2>
          {[
            ['Languages', 'Python', 'Java', 'C', 'SQL', 'JavaScript'],
            ['Backend & web', 'Flask', 'REST APIs', 'HTML', 'CSS'],
            ['Data & AI', 'Machine Learning', 'NLP', 'LSTM', 'RAG'],
            ['Databases & tools', 'MongoDB', 'Git', 'GitHub', 'VS Code']
          ].map(([name, ...skills]) => (
            <div className="skill-row" key={name}>
              <h3>{name}</h3>
              <div>
                {skills.map(s => (
                  <span className="skill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </>
      );

    case 'achievements':
      return (
        <>
          <p className="eyebrow">THE LITTLE WINS</p>
          <h2>My Achievements<span>★</span></h2>
          <div className="achievements">
            {[
              ['700+', 'DSA problems solved'],
              ['State finalist', 'IDEATHON organised by Govt. of Telangana — worked on AGRI-VEDA'],
              ['80+ days', 'NeetCode streak'],
              ['60+', 'Led podcast sessions with a team of 75+ students.'],
              ['CONVERGENCE' ,'Youngest core committee contributor to the annual technical symposium organised by my college.'],
              ['10+', 'Articles written reflecting society, my thoughts']
            ].map(([big, small]) => (
              <div className="achievement" key={small}>
                <strong>{big}</strong>
                <span>{small}</span>
              </div>
            ))}
          </div>
          <p>
            Also: Lead RJ at VJ Vibes Podcast Club,
            Women in Tech At GDGC, and Ignition Wing 
            Master at VJ STARTUPS .
          </p>
        </>
      );

    case 'hobbies':
      return (
        <>
          <p className="eyebrow">BEYOND THE TERMINAL</p>
          <h2>offline mode <span>♡</span></h2>
          <p>
            There is more than coding to me . My creative side includes
            podcasting,martial arts, badminton , writing, storytelling, and bringing people together.
          </p>
          <div className="hobby-grid">
            <div>🎙️<b>Podcasting</b><small>VJ Vibes</small></div>
            <div>🥋<b>Martial Arts</b><small>Practiced Shotokan style for 7 years and was awarded with second highest belt.</small></div>
           
            <div>✍️<b>Blog Writer</b><small>10+ articles in Medium</small></div>
            <div>💡<b>Building communities</b><small>Startup initiatives</small></div>
            <div>👩‍💼<b>Organised various events to develop start-up mindset in students </b><small> Startup initiatives </small></div>
          </div>
          {/* <p className="note">
            More personal photos, music and hobbies can be added later.
          </p> */}
        </>
      );

    case 'contact':
      return (
        <>
          <p className="eyebrow">LEAVE A LITTLE NOTE</p>
          <h2>To approach me <span>✳</span></h2>
          <p>
            Have an idea, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
          <div className="social-links">
            <a href="mailto:sistamanogna@gmail.com">
              <Mail size={19} /> Email <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/SistaManogna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={19} /> GitHub <ArrowUpRight size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/sista-manogna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={19} /> LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </>
      );

    default:
      return null;
  }
}

function App() {
  const [windows, setWindows] = useState([]);
  const [top, setTop] = useState(10);
  const [positions, setPositions] = useState({});
  const [photoError, setPhotoError] = useState(false);
  const [glowingFolder, setGlowingFolder] = useState(null);
  const dragging = useRef(null);

  const open = id => {
    setWindows(prev => prev.includes(id) ? prev : [...prev, id]);
    setTop(t => t + 1);
    setPositions(p => ({
      ...p,
      [id]: { ...p[id], z: top + 1 }
    }));
  };

  const close = id => {
    setWindows(prev => prev.filter(x => x !== id));
  };

  const startDrag = (e, id) => {
    if (e.target.closest('button')) return;

    const el = e.currentTarget.parentElement;

    dragging.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      x: el.offsetLeft,
      y: el.offsetTop
    };

    e.currentTarget.setPointerCapture(e.pointerId);
    setTop(t => t + 1);

    setPositions(p => ({
      ...p,
      [id]: { ...p[id], z: top + 1 }
    }));
  };

  const moveDrag = e => {
    if (!dragging.current) return;

    const d = dragging.current;

    setPositions(p => ({
      ...p,
      [d.id]: {
        ...p[d.id],
        x: Math.max(0, d.x + e.clientX - d.startX),
        y: Math.max(0, d.y + e.clientY - d.startY)
      }
    }));
  };

  const endDrag = () => {
    dragging.current = null;
  };

  useEffect(() => {
    const esc = e => {
      if (e.key === 'Escape') setWindows([]);
    };

    window.addEventListener('keydown', esc);

    return () => window.removeEventListener('keydown', esc);
  }, []);

  return (
    <main className="desktop">
      <div className="grain" />

      <div className="topbar">
      <div className="brand">
        <span className="status-dot" />
            MY PORTFOLIO
    </div>
        <span className="top-note">
           * A sneak into my journey ✳
        </span>
      </div>

      <div className="background-word" aria-hidden="true">
        hello.
      </div>

      {/* CENTER PHOTO SECTION */}
      <div className="center-stage">
        <div className="photo-wrap">
          {!photoError ? (
            <img
              src="public/images/pp2.png"
              alt="Portrait of Manogna"
              onError={() => setPhotoError(true)}
            />
          ) : (
            <div className="photo-placeholder">
              <span>✿</span>
              <p>your photo<br />goes here</p>
              <small>public/images/pp2.png</small>
            </div>
          )}
        </div>

        <div className="center-caption">
          <span>WELCOME TO MY LITTLE WORLD</span>
          <h1>Sista Manogna <i>✳</i></h1>
          <p>Developer · Dreamer · Curious human</p>
        </div>
      </div>

      {/* INTERACTIVE FOLDERS */}
      <div className="folders">
       {folders.map((f, i) => (
  <motion.button
    key={f.id}
className={`folder ${glowingFolder === f.id ? 'folder-glow' : ''}`}    style={{
      left: f.x + '%',
      top: f.y + '%',
      transform: 'translate(-50%, -50%)'
    }}
    animate={{
      x: [0, i % 2 === 0 ? 12 : -12, 0],
      y: [0, -12, 0],
      rotate: [f.rot, f.rot + 3, f.rot]
    }}
    transition={{
      duration: 5 + (i % 3),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.3
    }}
    whileHover={{
      scale: 1.15,
      rotate: 0,
      transition: { duration: 0.2 }
    }}
    onClick={() => {
  setGlowingFolder(f.id);
  open(f.id);
}}
    aria-label={'Open ' + f.label}
  >
    <FolderIcon color={f.color} />
    <span className="folder-label">{f.label}</span>
  </motion.button>
))}
      </div>

      <div className="sparkle s1">✦</div>
      <div className="sparkle s2">✳</div>
      <div className="sparkle s3">✧</div>

      <div className="bottom-dock">
        <span>✿ create</span>
        <span>⌘ explore</span>
        <span>♡ imagine</span>
      </div>

      {/* DRAGGABLE WINDOWS */}
      <AnimatePresence>
        {windows.map((id, i) => (
          <motion.section
            key={id}
            className="app-window"
            style={{
              left: positions[id]?.x ??
                `calc(50% - 310px + ${i * 22}px)`,
              top: positions[id]?.y ??
                `${Math.min(95 + i * 28, 200)}px`,
              zIndex: positions[id]?.z ?? (20 + i)
            }}
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.2 }}
            aria-label={id + ' window'}
          >
            <header
              className="window-bar"
              onPointerDown={e => startDrag(e, id)}
              onPointerMove={moveDrag}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              <div className="traffic">
                <button
                  className="traffic-close"
                  onClick={() => close(id)}
                  aria-label={'Close ' + id}
                />
                <span />
                <span />
              </div>

              <strong>
                {folders.find(f => f.id === id)?.label}
              </strong>

              <div className="window-symbol">✳</div>
            </header>

            <div className="window-body">
              <Content id={id} />
            </div>
          </motion.section>
        ))}
      </AnimatePresence>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
