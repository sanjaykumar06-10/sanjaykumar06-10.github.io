// simple reveal on scroll
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(n=>obs.observe(n));

// project card tilt and click
document.querySelectorAll('.project').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) / r.width;
    const y = (e.clientY - r.top - r.height/2) / r.height;
    card.style.transform = `perspective(800px) rotateX(${ -y*6 }deg) rotateY(${ x*8 }deg) translateZ(6px)`;
  });
  card.addEventListener('mouseleave', ()=> card.style.transform='');
  card.addEventListener('click', ()=>{
    const url = card.getAttribute('data-link'); if(url) window.open(url, '_blank');
  });
});

// mobile menu
const menuBtn = document.getElementById('menuBtn');
menuBtn?.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav');
  if(nav.style.display==='flex') nav.style.display=''; else nav.style.display='flex';
});
