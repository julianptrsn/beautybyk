(function(){
  var nav=document.querySelector('.site-head .nav'); if(!nav) return;
  var onHome=!!document.getElementById('behandlungen');
  function h(id){ return (onHome?'':'./')+'#'+id; }
  var DM='https://ig.me/m/beauty_by_katharina';

  var btn=document.createElement('button');
  btn.type='button'; btn.className='menu-btn';
  btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-controls','mnav'); btn.setAttribute('aria-label','Menü öffnen');
  btn.innerHTML='<span></span><span></span>';
  nav.appendChild(btn);

  var panel=document.createElement('div');
  panel.id='mnav'; panel.className='mnav'; panel.hidden=true;
  panel.setAttribute('role','dialog'); panel.setAttribute('aria-modal','true'); panel.setAttribute('aria-label','Menü');
  panel.innerHTML=
    '<nav aria-label="Mobile Navigation"><ul class="mnav-main">'+
      '<li><a href="'+h('behandlungen')+'">Behandlungen</a>'+
        '<ul class="mnav-sub">'+
          '<li><a href="wimpernverlaengerung-flensburg.html">Wimpernverlängerung</a></li>'+
          '<li><a href="wimpernlifting-flensburg.html">Wimpernlifting</a></li>'+
          '<li><a href="browlifting-flensburg.html">Browlifting</a></li>'+
          '<li><a href="powder-brows-flensburg.html">Powder Brows</a></li>'+
        '</ul></li>'+
      '<li><a href="'+h('ueber-mich')+'">Über mich</a></li>'+
      '<li><a href="'+h('studio')+'">Studio</a></li>'+
      '<li><a href="'+h('preise')+'">Preise</a></li>'+
      '<li><a href="'+h('faq')+'">Fragen</a></li>'+
      '<li><a href="'+h('kontakt')+'">Kontakt</a></li>'+
    '</ul></nav>'+
    '<div class="mnav-cta">'+
      '<a class="btn btn-dark" href="'+DM+'" target="_blank" rel="noopener">Termin per Instagram</a>'+
      '<a class="btn btn-line" href="'+h('kontakt')+'">Anfrage per E-Mail</a>'+
    '</div>'+
    '<p class="mnav-meta">Europastraße 49 A · Flensburg-Jarplund<br>Instagram @beauty_by_katharina</p>';
  document.body.appendChild(panel);

  function set(open){
    panel.hidden=!open;
    btn.setAttribute('aria-expanded',String(open));
    btn.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');
    document.documentElement.classList.toggle('menu-open',open);
  }
  btn.addEventListener('click',function(){ set(panel.hidden); });
  panel.addEventListener('click',function(e){ if(e.target.closest('a')) set(false); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && !panel.hidden){ set(false); btn.focus(); } });
  var mq=window.matchMedia('(min-width:921px)');
  var onChange=function(e){ if(e.matches) set(false); };
  if(mq.addEventListener) mq.addEventListener('change',onChange); else if(mq.addListener) mq.addListener(onChange);
})();
