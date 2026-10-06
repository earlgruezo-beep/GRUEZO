(function(){
 var links = document.querySelectorAll('#tabs a');
 function setActive(id){
 links.forEach(function(a){
  if(a.getAttribute('href') === '#' + id){
  a.setAttribute('aria-current','true');
  a.scrollIntoView({block:'nearest',inline:'nearest'});
  } else {
  a.removeAttribute('aria-current');
  }
 });
 }
 var watcher = new IntersectionObserver(function(entries){
 entries.forEach(function(e){
  if(e.isIntersecting) setActive(e.target.getAttribute('data-nav'));
 });
 }, { rootMargin: '-40% 0px -55% 0px' });
 document.querySelectorAll('[data-nav]').forEach(function(el){ watcher.observe(el); });


 var media = document.querySelectorAll('.media video, .media audio');
 media.forEach(function(m){
 m.addEventListener('play', function(){
  media.forEach(function(o){ if(o !== m) o.pause(); });
 });
 });

 var stage = document.getElementById('stage');
 stage.addEventListener('pointermove', function(e){
 var r = stage.getBoundingClientRect();
 stage.style.setProperty('--x', (e.clientX - r.left) + 'px');
 stage.style.setProperty('--y', (e.clientY - r.top) + 'px');
 });
})();
