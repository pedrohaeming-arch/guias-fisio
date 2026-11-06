/* Visual "Soda": bolhas subindo, "+" flutuantes que fogem do cursor e capa que inclina com o mouse. Só decoração. */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var hero = document.querySelector('.hero'); if (!hero) return;
  var fx = document.createElement('div'); fx.className = 'soda-fx'; fx.setAttribute('aria-hidden','true'); hero.prepend(fx);
  var small = innerWidth < 700;
  // bolhas
  function bubble(){
    var b = document.createElement('span'); b.className = 'soda-bubble';
    var s = Math.random()*20+10; b.style.width = b.style.height = s+'px';
    b.style.left = Math.random()*100+'%';
    var d = Math.random()*6+4; b.style.animationDuration = d+'s';
    fx.appendChild(b); setTimeout(function(){ b.remove(); }, d*1000);
  }
  setInterval(bubble, small ? 900 : 450);
  // "+" flutuantes
  var pos = [[12,18,34],[8,72,22],[30,88,40],[70,8,26],[82,60,30],[55,46,18],[88,90,24]];
  var plus = pos.slice(0, small ? 4 : 7).map(function(p,i){
    var e = document.createElement('span'); e.className='soda-plus'; e.textContent='+';
    e.style.top=p[0]+'%'; e.style.left=p[1]+'%'; e.style.fontSize=p[2]+'px';
    fx.appendChild(e); return {el:e, rx:0, ry:0, a:Math.random()*360, i:i};
  });
  var img = hero.querySelector('.img-slot img');
  var m={x:0,y:0,px:-9999,py:-9999}, c={x:0,y:0};
  addEventListener('mousemove', function(e){ m.x=e.clientX/innerWidth-.5; m.y=e.clientY/innerHeight-.5; m.px=e.clientX; m.py=e.clientY; });
  (function loop(){
    var t = Date.now()*.001;
    c.x += (m.x-c.x)*.05; c.y += (m.y-c.y)*.05;
    if (img) img.style.transform = 'rotate(-4deg) rotateY('+(c.x*18)+'deg) rotateX('+(-c.y*12)+'deg)';
    plus.forEach(function(p){
      var r = p.el.getBoundingClientRect(), dx = m.px-(r.left+r.width/2), dy = m.py-(r.top+r.height/2), dist = Math.sqrt(dx*dx+dy*dy)||1, tx=0, ty=0, sp=1;
      if (dist < 300){ var f=(300-dist)/300; tx=dx/dist*f*-70; ty=dy/dist*f*-70; sp=1+f*5; }
      p.rx += (tx-p.rx)*.1; p.ry += (ty-p.ry)*.1; p.a += .2*sp;
      var dur=[5,7,6,8,5.5,6.5,9][p.i], ph=(t+p.i*.7)*(Math.PI*2/dur);
      p.el.style.transform = 'translate('+(p.rx+c.x*40)+'px,'+(p.ry+c.y*40+Math.sin(ph)*15)+'px) rotate('+(p.a+Math.cos(ph)*6)+'deg)';
    });
    requestAnimationFrame(loop);
  })();
})();
