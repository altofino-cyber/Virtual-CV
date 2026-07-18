<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Altofino Zunguze — Virtual CV</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --bg: #12141c;
    --bg-panel: #181b26;
    --bg-tab: #1f2330;
    --line: #2a2f40;
    --text: #e7e9ee;
    --text-dim: #8b90a3;
    --cyan: #7dd3fc;
    --amber: #fbbf24;
    --purple: #a78bfa;
    --green: #86efac;
    --mono: 'JetBrains Mono', monospace;
    --sans: 'Inter', sans-serif;
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  body{
    background:var(--bg);
    color:var(--text);
    font-family:var(--sans);
    line-height:1.6;
  }
  a{color:inherit;}

  /* Top chrome bar, mimics an editor window */
  .chrome{
    display:flex; align-items:center; gap:8px;
    padding:10px 16px;
    background:var(--bg-tab);
    border-bottom:1px solid var(--line);
    position:sticky; top:0; z-index:50;
  }
  .dot{width:11px; height:11px; border-radius:50%;}
  .dot.r{background:#ff5f57;} .dot.y{background:#febc2e;} .dot.g{background:#28c840;}
  .chrome .path{
    margin-left:16px; font-family:var(--mono); font-size:12px; color:var(--text-dim);
  }

  /* Tab bar acting as navigation */
  .tabbar{
    display:flex; overflow-x:auto; background:var(--bg-panel);
    border-bottom:1px solid var(--line);
    position:sticky; top:37px; z-index:49;
    scrollbar-width:none;
  }
  .tabbar::-webkit-scrollbar{display:none;}
  .tab{
    font-family:var(--mono); font-size:13px; color:var(--text-dim);
    padding:10px 18px; border-right:1px solid var(--line);
    white-space:nowrap; cursor:pointer; background:none; border-top:none; border-bottom:none; border-left:none;
    display:flex; align-items:center; gap:8px;
  }
  .tab .ext{color:var(--purple);}
  .tab.active{color:var(--text); background:var(--bg); border-top:2px solid var(--cyan); position:relative; top:-1px;}
  .tab:hover{color:var(--text);}

  main{max-width:920px; margin:0 auto; padding:0 24px;}
  section{padding:64px 0; border-bottom:1px dashed var(--line);}
  section:last-of-type{border-bottom:none;}

  .comment{color:#565d78; font-family:var(--mono); font-size:13px;}
  .lineno{
    color:#3d4356; font-family:var(--mono); font-size:12px;
    display:inline-block; width:28px; user-select:none;
  }

  /* Hero */
  .hero{padding-top:56px;}
  .hero .kw{color:var(--purple); font-family:var(--mono);}
  .hero .fn{color:var(--cyan); font-family:var(--mono);}
  .hero h1{
    font-family:var(--mono); font-weight:800; font-size:clamp(28px,5vw,46px);
    margin:10px 0 6px; letter-spacing:-0.5px;
  }
  .hero h1 .string{color:var(--green);}
  .cursor{
    display:inline-block; width:3px; height:0.9em; background:var(--cyan);
    margin-left:4px; vertical-align:-2px; animation:blink 1s step-end infinite;
  }
  @keyframes blink{50%{opacity:0;}}
  .hero .role{color:var(--text-dim); font-family:var(--mono); font-size:16px; margin-bottom:22px;}
  .hero p.summary{max-width:60ch; color:#c7cad6; font-size:16px;}
  .badges{display:flex; gap:10px; flex-wrap:wrap; margin-top:26px;}
  .badge{
    font-family:var(--mono); font-size:12px; padding:6px 12px;
    border:1px solid var(--line); border-radius:4px; color:var(--amber);
    background:var(--bg-panel);
  }

  h2.sectitle{
    font-family:var(--mono); font-size:22px; color:var(--text);
    margin-bottom:28px; display:flex; align-items:center; gap:10px;
  }
  h2.sectitle .kw{color:var(--purple); font-size:14px;}

  /* Skills */
  .skill-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px;}
  .skill-card{
    background:var(--bg-panel); border:1px solid var(--line); border-radius:6px; padding:18px;
  }
  .skill-card .name{font-family:var(--mono); font-weight:700; color:var(--cyan); font-size:14px; margin-bottom:10px;}
  .bar{height:6px; background:var(--line); border-radius:3px; overflow:hidden; margin-bottom:6px;}
  .bar span{display:block; height:100%; background:linear-gradient(90deg,var(--cyan),var(--purple)); width:0; transition:width 1.1s ease;}
  .skill-card .level{font-family:var(--mono); font-size:11px; color:var(--text-dim);}

  /* Experience as commit log */
  .commit{
    display:grid; grid-template-columns:20px 1fr; gap:14px; padding:18px 0; border-bottom:1px solid var(--line);
  }
  .commit:last-child{border-bottom:none;}
  .commit .node{width:10px; height:10px; border-radius:50%; background:var(--green); margin-top:6px;}
  .commit .hash{font-family:var(--mono); color:var(--amber); font-size:12px;}
  .commit .title{font-weight:600; font-size:16px; margin:4px 0;}
  .commit .meta{color:var(--text-dim); font-size:13px; margin-bottom:8px; font-family:var(--mono);}
  .commit .desc{color:#c7cad6; font-size:14px;}

  /* Education */
  .edu-card{
    background:var(--bg-panel); border:1px solid var(--line); border-left:3px solid var(--purple);
    border-radius:4px; padding:20px; margin-bottom:16px;
  }
  .edu-card .school{font-weight:700; font-size:16px;}
  .edu-card .deg{color:var(--text-dim); font-family:var(--mono); font-size:13px; margin-top:4px;}

  /* Contact */
  .terminal{
    background:#0d0f16; border:1px solid var(--line); border-radius:8px; padding:22px;
    font-family:var(--mono); font-size:14px;
  }
  .terminal .prompt{color:var(--green);}
  .terminal .out{color:var(--text-dim); margin:6px 0 16px 0;}
  .contact-links{display:flex; flex-wrap:wrap; gap:14px; margin-top:6px;}
  .contact-links a{
    color:var(--cyan); text-decoration:none; border-bottom:1px dotted var(--cyan); font-size:14px;
    padding-bottom:2px;
  }
  .contact-links a:hover{color:var(--amber); border-color:var(--amber);}

  footer{
    text-align:center; padding:30px 0 60px; color:var(--text-dim); font-family:var(--mono); font-size:12px;
  }

  @media (prefers-reduced-motion: reduce){
    .cursor{animation:none;}
    .bar span{transition:none;}
  }
  @media (max-width:600px){
    section{padding:44px 0;}
    .chrome .path{display:none;}
  }
</style>
</head>
<body>

<div class="chrome">
  <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
  <span class="path">~/altofino-zunguze/cv — edited just now</span>
</div>

<nav class="tabbar" id="tabbar">
  <button class="tab active" data-target="hero"><span class="ext">●</span> about.py</button>
  <button class="tab" data-target="skills"><span class="ext">●</span> skills.py</button>
  <button class="tab" data-target="experience"><span class="ext">●</span> experience.py</button>
  <button class="tab" data-target="education"><span class="ext">●</span> education.py</button>
  <button class="tab" data-target="contact"><span class="ext">●</span> contact.py</button>
</nav>

<main>
  <section class="hero" id="hero">
    <div class="comment"><span class="lineno">01</span># run: python about.py</div>
    <div><span class="lineno">02</span><span class="kw">class</span> <span class="fn">Developer</span>:</div>
    <h1><span class="lineno" style="width:auto;margin-right:8px;">03</span>&nbsp;&nbsp;name = <span class="string">"Altofino Zunguze"</span><span class="cursor"></span></h1>
    <div class="role">&nbsp;&nbsp;role&nbsp;=&nbsp;"Final-Year BSc IT Student · Student Assistant & Tutor, NWU"</div>
    <p class="summary">
      I build software and teach it. Currently completing my BSc in Information Technology
      at North-West University, while tutoring first- and second-year students in Python,
      C#, data structures, and systems analysis. I like code that's easy to read as much as
      code that runs fast.
    </p>
    <div class="badges">
      <span class="badge">Python</span>
      <span class="badge">C#</span>
      <span class="badge">Data Structures</span>
      <span class="badge">Systems Analysis</span>
      <span class="badge">TM1 Planning Analytics</span>
    </div>
  </section>

  <section id="skills">
    <h2 class="sectitle"><span class="kw">def</span> skills():</h2>
    <div class="skill-grid">
      <div class="skill-card"><div class="name">Python</div><div class="bar"><span data-level="90"></span></div><div class="level">proficient</div></div>
      <div class="skill-card"><div class="name">C#</div><div class="bar"><span data-level="80"></span></div><div class="level">proficient</div></div>
      <div class="skill-card"><div class="name">Data Structures & Algorithms</div><div class="bar"><span data-level="85"></span></div><div class="level">proficient</div></div>
      <div class="skill-card"><div class="name">Systems Analysis & Design</div><div class="bar"><span data-level="80"></span></div><div class="level">proficient</div></div>
      <div class="skill-card"><div class="name">TM1 Planning Analytics</div><div class="bar"><span data-level="65"></span></div><div class="level">working knowledge</div></div>
      <div class="skill-card"><div class="name">Teaching & Communication</div><div class="bar"><span data-level="90"></span></div><div class="level">proficient</div></div>
    </div>
  </section>

  <section id="experience">
    <h2 class="sectitle"><span class="kw">def</span> experience():</h2>

    <div class="commit">
      <div class="node"></div>
      <div>
        <div class="hash">#a1c02f4</div>
        <div class="title">Student Assistant & Tutor — North-West University</div>
        <div class="meta">Potchefstroom, South Africa</div>
        <div class="desc">Teaching Python, C#, data structures, and systems analysis to first- and second-year IT students. Running practical labs, marking assessments, and holding consultation sessions to help students debug both their code and their understanding.</div>
      </div>
    </div>

    <div class="commit">
      <div class="node" style="background:var(--purple);"></div>
      <div>
        <div class="hash">#f7e2b19</div>
        <div class="title">BSc Information Technology (Final Year) — North-West University</div>
        <div class="meta">Expected completion 2026</div>
        <div class="desc">Coursework spanning software development, operations research, database systems, and systems analysis. Recent project work includes integer programming and network optimization problems.</div>
      </div>
    </div>
  </section>

  <section id="education">
    <h2 class="sectitle"><span class="kw">def</span> education():</h2>
    <div class="edu-card">
      <div class="school">North-West University, Potchefstroom Campus</div>
      <div class="deg">BSc Information Technology — Final Year</div>
    </div>
  </section>

  <section id="contact">
    <h2 class="sectitle"><span class="kw">def</span> contact():</h2>
    <div class="terminal">
      <div><span class="prompt">$</span> whoami --contact</div>
      <div class="out">→ Reachable via the links below. Open to graduate developer and data roles.</div>
      <div class="contact-links">
        <a href="mailto:you@example.com">email</a>
        <a href="#">linkedin.com/in/your-handle</a>
        <a href="#">github.com/your-handle</a>
      </div>
    </div>
  </section>
</main>

<footer>
  built with HTML, CSS & JS · hosted on GitHub Pages
</footer>

<script>
  // Tab navigation with active-state syncing
  const tabs = document.querySelectorAll('.tab');
  const sections = [...tabs].map(t => document.getElementById(t.dataset.target));

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.getElementById(tab.dataset.target).scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        tabs.forEach(t => t.classList.remove('active'));
        const match = [...tabs].find(t => t.dataset.target === entry.target.id);
        if(match) match.classList.add('active');
      }
    });
  }, {rootMargin:'-40% 0px -50% 0px'});

  sections.forEach(s => s && observer.observe(s));

  // Animate skill bars once visible
  const bars = document.querySelectorAll('.bar span');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.width = entry.target.dataset.level + '%';
        barObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.4});
  bars.forEach(b => barObserver.observe(b));
</script>

</body>
</html>
