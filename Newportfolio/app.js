// Reveal elements on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Nav toggle for small screens
const nav = document.getElementById('mainNav');
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', ()=>{
  nav.classList.toggle('open');
  if(nav.classList.contains('open')) nav.style.display = 'flex'; else nav.style.display = '';
});

// Subtle tilt for project cards
document.querySelectorAll('.project').forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) / r.width;
    const y = (e.clientY - r.top - r.height/2) / r.height;
    card.style.transform = `perspective(800px) rotateX(${ -y * 6 }deg) rotateY(${ x * 8 }deg) translateZ(6px)`;
  });
  card.addEventListener('mouseleave', ()=>{ card.style.transform=''; });
});

// Make whole card clickable if data-link present
document.querySelectorAll('.project[data-link]').forEach(card=>{
  card.style.cursor='pointer';
  card.addEventListener('click', ()=>{
    const url = card.getAttribute('data-link'); if(url) location.href = url;
  });
});
