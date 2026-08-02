/* Levl — shared page behaviour: mobile menu, reveal on scroll, jump-rail spy. */
(function(){
  /* mobile menu */
  var b=document.querySelector('.burger');
  if(b)b.addEventListener('click',function(){document.body.classList.toggle('menu-open');});
  document.querySelectorAll('.nav-r a').forEach(function(a){
    a.addEventListener('click',function(){document.body.classList.remove('menu-open');});
  });

  /* reveal */
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{rootMargin:'0px 0px -8% 0px',threshold:.06});
    rv.forEach(function(el){io.observe(el);});
  }else{rv.forEach(function(el){el.classList.add('in');});}

  /* jump rail active state */
  var rail=document.querySelector('.rail');
  if(rail){
    var links=[].slice.call(rail.querySelectorAll('a')),
        targets=links.map(function(a){return document.querySelector(a.getAttribute('href'));});
    var spy=function(){
      var y=window.scrollY+130,cur=0;
      targets.forEach(function(t,i){if(t&&t.offsetTop<=y)cur=i;});
      links.forEach(function(a,i){a.classList.toggle('on',i===cur);});
    };
    window.addEventListener('scroll',spy,{passive:true});spy();
  }

  /* year */
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
