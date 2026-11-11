
(()=>{
/* ===== CONFIGURAÇÃO: edite textos, assinatura e aparência aqui ===== */
const CFG={
 intro:"“Dizem que existem lugares que só aparecem para quem está disposto a explorar. Talvez hoje você encontre um deles.”",
 letter:["Se você chegou até aqui, atravessou florestas, lagos, espinhos e até um bruxo.","Essa aventura inteira foi o meu jeito de dizer obrigado por tornar meus dias mais leves.","Obrigado por ter vindo me buscar, de verdade.","Espero que tenha gostado dessa pequena surpresa."],
 signature:"Com carinho,", signer:"Raul",
 fragments:["Um pequeno","mundo","só seu."],
 chars:{raul:{name:"Raul",hair:"#2b1d16",skin:"#e0ae88",shirt:"#ece6d4",skirt:"#23262f",shoe:"#a9d0ee",pack:"#6b4a2a",brace:"#c9ced6",lip:"#b86a5a",blush:"#e0a090",curly:1,glasses:1,stubble:1},luisa:{name:"Luísa",hair:"#6b3a28",skin:"#efc3a0",shirt:"#262633",skirt:"#6f84b5",shoe:"#f4f1ee",pack:"#8b5a33",brace:"#e8c872",lip:"#d9737c",blush:"#f09a90",long:1,ring:1}}
};
/* ===== MAPAS ===== */
const P=a=>a.map(r=>r.padEnd(20,'T').slice(0,20)),TT='T'.repeat(20);
const GREEN=['#2e6b3a','#4f9a4a','#8fd06a'],PINK=['#b5508f','#d878b2','#f6b3d6'],DEEP=['#17463f','#2a7a5a','#5fc28a'];
const MAPS=[
{name:"O Pequeno Vilarejo",g:'#6fa84f',tc:GREEN,tn:[255,140,60,.2],mood:0,
 intro:"{o} sumiu e deixou pistas. WASD/setas andam, E interage. Um tigre descansa aqui: E para montar.",ex:{r:1},
 rows:P([TT,"T..hhhh...hhhh..f..T","T..hhhh...hhhh.....T","T..hhhh.f.hhhh..f..T","T...p.....p........T","pppppppppppppppppppp","T...f..f.......f...T","T.f.......f........T","T.....f......f..f..T","T..f.........f.....T",TT]),
 objs:[{t:'sign',x:7,y:4,txt:"Vilarejo Pequeno. A trilha a leste entra na floresta. Aperte E para ler placas, caixas e outras coisas."},{t:'mail',x:12,y:4},{t:'rab',x:14,y:6},{t:'door',x:19,y:4,h:3,nouse:1,hint:'Leia o bilhete na caixa de correio.'}]},
{name:"A Floresta Esquecida",g:'#2f6b4a',tc:DEEP,tn:[10,20,60,.5],mood:1,
 intro:"Runas brilhantes guardam pistas. Resolva o enigma das luzes.",ex:{l:0,r:2},
 rows:P([TT,"T..T....m.....T....T","T.....T......m.....T","T..m.....T.......T.T","T....T...........T.T","pppppppppppppppppppp","T..f......m......f.T","T..T.........T.....T","T.....m.......T....T","T..T.....T.........T",TT]),
 objs:[{t:'clue',x:2,y:2,name:'Pista: dia',txt:"Runa: “Depois do amanhecer, o dia dourado desperta.”"},{t:'clue',x:12,y:8,name:'Pista: amanhecer',txt:"Runa: “Primeiro acorda o amanhecer, rosado e vermelho.”"},{t:'clue',x:15,y:2,name:'Pista: noite',txt:"Runa: “Por fim, a noite azul fecha o dia.”"},
 {t:'lamp',x:8,y:4,n:2,c:'#5a9bff',d:'#243a66'},{t:'lamp',x:10,y:4,n:0,c:'#ff6b5e',d:'#5a2a2a'},{t:'lamp',x:12,y:4,n:1,c:'#ffd45e',d:'#5a4a22'},{t:'door',x:19,y:4,h:3,nouse:1,hint:'Derrote as sombras para abrir.'}]},
{name:"O Lago das Estrelas",g:'#3f7f5a',tc:DEEP,tn:[10,15,70,.45],mood:2,
 intro:"As pedras do lago guardam estrelas. Leia a placa.",ex:{l:1,r:3},
 rows:P([TT,"T.....~~~~~~~~.....T","T..f..~~~~~~~~..f..T","T.....~~~~~~~~.....T","T.....~~~~~~~~.....T","p.....~~~~~~~~.....p","T.....~~~~~~~~.....T","T.f...~~~~~~~~...f.T","T.....~~~~~~~~.....T","T.....~~~~~~~~.....T",TT]),
 objs:[{t:'sign',x:2,y:5,txt:"Cada pedra guarda um punhado de estrelas. Toque nelas contando as estrelas, do menor número para o maior."},{t:'stone',x:6,y:2,n:2},{t:'stone',x:6,y:4,n:0},{t:'stone',x:6,y:6,n:3},{t:'stone',x:6,y:8,n:1},{t:'door',x:19,y:4,h:3,nouse:1,hint:'Derrote os espíritos para abrir.'}]},
{name:"O Jardim Secreto",g:'#5da878',tc:PINK,tn:[120,60,170,.3],mood:3,
 intro:"Um jardim escondido. Algo brilha ao centro.",ex:{l:2},
 rows:P([TT,"T..g..T.....T..g...T","T.g.......g.....g..T","T....g..........g..T","T..g..gggggggg..g..T","pp.............g...T","T..g.g..........g..T","T....g...g.....g...T","T.g.......g...g....T","T..T....g.....T..g.T",TT]),
 objs:[{t:'ped',x:9,y:3},{t:'frag',x:16,y:8}]},
{name:"O Calabouço",g:'#3a3a52',wall:1,tc:GREEN,tn:[25,5,45,.5],mood:3,intro:"O calabouço do bruxo. Há selos no chão e uma gaiola ao fundo.",ex:{},
 rows:P([TT,"T..................T","T.........T........T","T..................T","T..................T","T..................T","T..................T","T..................T","T.........T........T","T..................T",TT]),
 objs:[{t:'cage',x:17,y:2},{t:'torch',x:3,y:1,nouse:1},{t:'torch',x:9,y:1,nouse:1},{t:'torch',x:13,y:1,nouse:1}]}];
const W=20,Hh=11,TS=16;
const cv=document.getElementById('c'),ctx=cv.getContext('2d'),$=i=>document.getElementById(i);
const S={},K={};let fire=[],amb=[],bf=[],WHO='luisa',RAUL_DONE=0;const BL=document.createElement('canvas');BL.width=80;BL.height=44;const bx=BL.getContext('2d');
const Hs=(x,y,s=0)=>{const v=Math.sin(x*12.9898+y*78.233+s*37.7)*43758.5453;return v-Math.floor(v)};
const R=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(x|0,y|0,w,h)};
const M=()=>MAPS[S.map];
const disc=(cx,cy,r,c)=>{for(let dy=-r;dy<=r;dy++){const w=Math.floor(Math.sqrt(r*r-dy*dy+.5));R(cx-w,cy+dy,w*2+1,1,c)}};
/* ===== ÁUDIO (Web Audio sintetizado) ===== */
const A={c:null,v:.5,m:1,f:1,k:0,
 init(){if(this.c){this.c.resume();return}const c=this.c=new(window.AudioContext||window.webkitAudioContext)();this.mg=c.createGain();this.mg.connect(c.destination);this.mu=c.createGain();this.mu.connect(this.mg);this.fx=c.createGain();this.fx.connect(this.mg);this.set();setInterval(()=>this.tick(),480)},
 set(){if(!this.c)return;this.mg.gain.value=this.v;this.mu.gain.value=this.m?.5:0;this.fx.gain.value=this.f?.8:0},
 n(f,d,ty,g,dest,w=0){const c=this.c,o=c.createOscillator(),e=c.createGain(),t=c.currentTime+w;o.type=ty;o.frequency.value=f;e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(g,t+.02);e.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(e);e.connect(dest);o.start(t);o.stop(t+d+.05)},
 tick(){if(!this.c||!this.m||S.paused||this.c.state!=='running')return;const mo=S.fin?4:S.map,r=[196,174.6,220,261.6,261.6][mo],Q=[1,1.125,1.25,1.5,1.667,2];this.k++;if(this.k%8==1){this.n(r/2,3.6,'sine',.25,this.mu);this.n(r*.75,3.6,'sine',.12,this.mu)}if(Math.random()<(S.end||S.fin?.8:.5))this.n(r*2*Q[(Math.random()*6)|0],1.4,'triangle',.12,this.mu)},
 s(k){if(!this.c)return;const T={blip:[[660,.1]],good:[[523,.15],[659,.15,.1],[784,.3,.2]],bad:[[160,.3,.0]],item:[[880,.1],[1175,.25,.08]],win:[[523,.4],[659,.4,.15],[784,.4,.3],[1047,.4,.45],[1319,.8,.6]]}[k];T.forEach(([f,d,w])=>this.n(f,d,k=='bad'?'sawtooth':'sine',k=='bad'?.08:.18,this.fx,w||0))}
};
/* ===== ESTADO ===== */
function init(){
 MAPS.forEach(m=>{m.r=m.rows.map(r=>[...r]);if(m.ex.r!=null)[4,6].forEach(y=>m.r[y][19]='.');if(m.ex.l!=null)[4,6].forEach(y=>m.r[y][0]='.');m.o=m.objs.map(o=>({...o}))});if(RAUL_DONE)MAPS[3].o.push({t:'wiz',x:12,y:3});
 Object.keys(S).forEach(k=>delete S[k]);
 Object.assign(S,{mode:'title',map:0,p:{x:24,y:92,d:0,fr:0,t:0,act:0,mv:0},items:[],frag:[0,0,0],seq:{l:[],k:[],d:[]},seen:{},fade:null,end:null,fin:0,t:0,msg:0,pa:[],pz:[],paused:0,env:null,mount:0,ci:0,li:0,ct:0,wand:0,robe:0,rg:[],sm:[]});
 fire=[...Array(14)].map(()=>({x:Math.random()*320,y:Math.random()*176,p:Math.random()*6}));bf=[...Array(7)].map((_,i)=>({x:Math.random()*320,y:20+Math.random()*130,p:Math.random()*6,ty:i%3}));amb=[...Array(26)].map(()=>({x:Math.random()*320,y:Math.random()*176,p:Math.random()*6,v:8+Math.random()*10,ty:Math.random()<.5?0:1}));hud();
}
const hud=()=>{$('hm').textContent=M().name+(S.map===4?' — Chefe':S.bt&&S.bt.on?' — Batalha':' — Puzzle');$('hi').innerHTML=S.items.map(i=>`<i>${i}</i>`).join('')};
const say=(t,s)=>{const m=$('msg');m.textContent=fmt(t);m.classList.remove('hide');S.msg=s||Math.max(3.2,t.length*.065)};
const give=n=>{if(!S.items.includes(n)){S.items.push(n);hud();A.s('item')}};
const burst=(x,y)=>{for(let i=0;i<16;i++)S.pa.push({x,y,vx:(Math.random()-.5)*50,vy:-Math.random()*40,l:1,c:['#ffe28a','#9ff6ff','#ffb3e6'][i%3]})};
/* ===== COLISÃO E INTERAÇÃO ===== */
const sol=o=>!o.gone&&o.t!=='frag'&&o.t!=='env'&&o.t!=='rab'&&!o.op;
function blocked(px,py){const tx=px>>4,ty=py>>4;if(tx<0||ty<0||tx>=W||ty>=Hh)return true;if('Th~'.includes(M().r[ty][tx])&&!((tx===19&&M().ex.r!=null||tx===0&&M().ex.l!=null)&&ty>=4&&ty<=6))return true;return M().o.some(o=>sol(o)&&o.x===tx&&ty>=o.y&&ty<o.y+(o.h||1))}
const hit=(x,y)=>blocked(x-4,y-4)||blocked(x+4,y-4)||blocked(x-4,y)||blocked(x+4,y);
const near=()=>{let b=null,bd=21;M().o.forEach(o=>{if(o.gone||o.nouse)return;const d=Math.hypot(S.p.x-(o.x*16+8),S.p.y-4-(o.y*16+8));if(d<bd){bd=d;b=o}});return b};
function seq(k,o,n,done){if(o.on)return;const q=S.seq[k];
 if(o.n===q.length){q.push(o.n);o.on=1;A.s('good');burst(o.x*16+8,o.y*16+8);if(q.length===n)done()}
 else{q.length=0;M().o.forEach(x=>{if(x.t===o.t)x.on=0});A.s('bad');say(o.t==='lamp'?"As luzes tremem e se apagam. Releia as pistas das runas.":o.t==='rune'?"O selo repele a magia errada. Tente de novo.":"As pedras escurecem. Tente de novo, com calma.")}}
const frag=i=>{S.frag[i]=1;give('Fragmento '+(i+1));A.s('win');say(`Um fragmento de mensagem surgiu: “${CFG.fragments[i]}”`,5)};
function use(o){S.p.act=.35;A.s('blip');
 if(o.t==='sign')say(o.txt);
 else if(o.t==='mail'){say("Um bilhete de {o}: “Três luzes dormem na floresta. Elas acordam na ordem do dia.”");give('Bilhete');S.note=1;openDoor()}
 else if(o.t==='clue'){say(o.txt);o.seen=1;give(o.name)}
 else if(o.t==='lamp')seq('l',o,3,()=>{burst(300,88);frag(0);S.wand=1;give('Varinha');startBattle('f',"Você ganhou uma varinha! Sombras surgiram: aperte E para lançar magia (a mira é automática).")});
 else if(o.t==='stone')seq('k',o,4,()=>{for(let x=6;x<14;x++)M().r[5][x]='b';frag(1);S.robe=1;give('Roupa de mago');startBattle('l',"As estrelas vestiram você com um manto de mago! Espíritos do lago atacam: E lança magia.")});
 else if(o.t==='frag'){o.gone=1;frag(2)}
 else if(o.t==='wiz')say("O bruxo: “Monte o pedestal e o caminho até mim se abrirá.”")
 else if(o.t==='wizb')say(S.wand?"O bruxo: “Meus selos seguem o entardecer: vermelho, roxo e azul-luar. Você nunca vai acertar!”":"O bruxo ri: “Sem varinha, você não me atinge!”")
 else if(o.t==='rune'){if(!S.wand)say("Você precisa da varinha para ativar o selo.");else seq('d',o,3,()=>{const m=M();m.o.find(x=>x.t==='wizb').gone=1;m.o.find(x=>x.t==='cage').open=1;burst(208,70);A.s('win');say("O bruxo se desfez em fumaça! A gaiola se abriu. Vá até o Raul.",5)})}
 else if(o.t==='cage'){if(o.open)startCut(4);else say("A gaiola está selada por magia. Ative os selos com a varinha.")}
 else if(o.t==='rab'){o.gone=1;S.mount=1;A.s('good');say("Um tigre manso! Ele corre muito mais rápido. Aperte E longe de objetos para descer.")}
 else if(o.t==='ped'){if(S.frag.every(Boolean))openPz();else say("O pedestal tem três encaixes. Ainda faltam fragmentos.")}
 else if(o.t==='env')toDungeon()}
/* ===== QUEBRA-CABEÇA FINAL ===== */
function openPz(){S.mode='pz';S.pz=[];$('pz').classList.remove('hide');const b=$('pieces');b.innerHTML='';[2,0,1].forEach(i=>{const e=document.createElement('button');e.textContent=CFG.fragments[i];e.onclick=()=>{if(i===S.pz.length){S.pz.push(i);A.s('blip');ph();if(S.pz.length===3){$('pz').classList.add('hide');startBattle('g',"Os espinhos do jardim despertaram! Derrote todos.")}}else{S.pz=[];ph();A.s('bad');b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake')}};b.appendChild(e)});ph()}
const ph=()=>{$('phrase').textContent=S.pz.map(i=>CFG.fragments[i]).join(' ')||'...'};
function startEnd(){const w=M().o.find(o=>o.t==='wiz');if(w){w.gone=1;burst(w.x*16+8,w.y*16);burst(w.x*16+8,w.y*16+10)}S.mode='end';S.end={t:0};A.s('win');$('msg').classList.add('hide')}
function showLetter(){S.mode='letter';const p=$('paper');p.innerHTML=CFG.letter.map((t,i)=>`<p style="animation-delay:${1+i*1.6}s">${t}</p>`).join('')+`<p style="animation-delay:${1+CFG.letter.length*1.6}s">${CFG.signature}<br>${CFG.chars[oth()].name}</p><button id="lc">Continuar</button>`;$('letter').classList.remove('hide');$('lc').onclick=()=>{$('letter').classList.add('hide');S.mode='fin';S.fin=1;$('final').classList.remove('hide');A.s('win')}}
/* ===== UPDATE ===== */
function update(dt){S.t+=dt;S.shake=Math.max(0,(S.shake||0)-dt);objUpdate();const p=S.p,m=M();if(S.mode==='cut'||S.mode==='pick'){S.ct+=dt;return}
 S.pa.forEach(q=>{q.x+=q.vx*dt;q.y+=q.vy*dt;q.vy+=18*dt;q.l-=dt*.6});S.pa=S.pa.filter(q=>q.l>0);if((S.map===1||S.map===3)&&Math.random()<.06)S.pa.push({x:Math.random()*320,y:-4,vx:8,vy:6,l:3.6,c:S.map===3?'#ffb3e6':'#8fc455'});if(Math.random()<.06)S.pa.push({x:Math.random()*320,y:176,vx:(Math.random()-.5)*8,vy:-26,l:2.4,c:S.map===3?'#ffb3e6':S.map===1?'#9fffd0':'#ffe9a8'});
 fire.forEach(f=>{f.p+=dt;f.x+=Math.sin(f.p*.7)*6*dt;f.y+=Math.cos(f.p*.9)*5*dt});bf.forEach(b=>{b.p+=dt;b.x=(b.x+Math.cos(b.p*.7+b.ty)*16*dt+320)%320;b.y+=Math.sin(b.p*1.1)*12*dt});
 if(S.map===0){if(Math.random()<.07)S.sm.push({x:(Math.random()<.5?6:13)*16+11,y:10,l:1,r:1.5});S.sm.forEach(q=>{q.y-=9*dt;q.x+=3*dt;q.r+=1.2*dt;q.l-=.3*dt});S.sm=S.sm.filter(q=>q.l>0)}amb.forEach(a=>{a.p+=dt;a.y+=a.v*dt;a.x+=Math.sin(a.p)*10*dt+4*dt;if(a.y>180){a.y=-6;a.x=Math.random()*320}});
 if(S.msg>0){S.msg-=dt;if(S.msg<=0)$('msg').classList.add('hide')}
 if(p.act>0)p.act-=dt;
 if(S.fade){const f=S.fade;f.t+=dt;if(f.t>=.3&&!f.done){f.done=1;S.map=f.to;p.x=f.x;p.y=f.y;hud();if(!S.seen[S.map]){S.seen[S.map]=1;say(M().intro,4)}}if(f.t>=.6)S.fade=null;return}
 if(S.mode==='end'){const e=S.end;e.t+=dt;if(Math.random()<.5)S.pa.push({x:Math.random()*320,y:176,vx:(Math.random()-.5)*10,vy:-20-Math.random()*20,l:1.6,c:['#ffe28a','#ffb3e6','#9ff6ff'][(Math.random()*3)|0]});
  if(e.t>2&&!m.o.some(o=>o.t==='env'))m.o.push({t:'env',x:9,y:5});if(e.t>4){S.mode='play';say("Um portal se abriu no centro do jardim. Aperte E para entrar.",5)}return}
 if(S.mode==='open'){S.env.t+=dt;if(S.env.t>1.1)showLetter();return}
 if(S.mode!=='play')return;if(S.boss&&S.boss.on)bossUpdate(dt);if(S.bt&&S.bt.on)btUpdate(dt);{const d=M().o.find(x=>x.t==='door'&&!x.op);S.dm=(S.dm||0)-dt;if(d&&p.x>288&&p.y>60&&p.y<120&&S.dm<=0){S.dm=4;say('A porta está trancada. '+d.hint,3.5)}}
 let dx=(K.right?1:0)-(K.left?1:0),dy=(K.down?1:0)-(K.up?1:0);p.mv=dx||dy;if(p.mv&&Math.random()<.35)S.pa.push({x:p.x+(Math.random()-.5)*6,y:p.y-1,vx:0,vy:-6,l:.35,c:S.map===0?'#d9c08a':'#cfd8e8'});
 if(p.mv){if(dx&&dy){dx*=.707;dy*=.707}p.d=dy>0?0:dy<0?1:dx<0?2:3;if(dx&&!dy)p.d=dx<0?2:3;p.t+=dt*8;p.fr=Math.floor(p.t)%2;const sp=52*dt*(S.mount?1.7:1);let nx=p.x+dx*sp,ny=p.y+dy*sp;if(!hit(nx,p.y))p.x=nx;if(!hit(p.x,ny))p.y=ny}
 p.x=Math.max(4,Math.min(316,p.x));p.y=Math.max(6,Math.min(175,p.y));
 if(p.x>=306&&m.ex.r!=null&&!(S.bt&&S.bt.on))S.fade={t:0,to:m.ex.r,x:26,y:92};
 if(p.x<=14&&m.ex.l!=null&&!(S.bt&&S.bt.on))S.fade={t:0,to:m.ex.l,x:294,y:92};
 S.near=near()}
/* ===== DESENHO ===== */
const G=[];
function ground(m,x,y,c){const X=x*16,Y=y*16;
 if(c==='~'||c==='b'){R(X,Y,16,16,'#1b3672');R(X,Y+8,16,8,'#17306a');for(let i=0;i<4;i++){const o=Math.sin(S.t*1.5+x+i*1.7)*3;R(X+4+o,Y+i*4,7,1,'#3a68b8');R(X+5+o,Y+i*4+1,4,1,'#244a94')}
  if(S.map===2){for(let i=0;i<3;i++){const h=Hs(x,y,i);if(Math.sin(S.t*2+h*20)>0)R(X+h*14,Y+((h*97)%14),1,1,'#fff')}if(x===9||x===10)for(let i=0;i<4;i++)R(X+2+Math.sin(S.t*2+i+y)*2,Y+i*4+1,12,1,'rgba(255,248,200,.55)')}
  if(c==='~'){[[-1,0,0,0,1,16],[1,0,15,0,1,16],[0,-1,0,0,16,1],[0,1,0,15,16,1]].forEach(([a,b,ox,oy,w,h])=>{const n=m.r[y+b]&&m.r[y+b][x+a];if(n&&n!=='~'&&n!=='b')R(X+ox,Y+oy,w,h,'rgba(255,255,255,.28)')})}
  if(S.map===2&&c==='~'&&Hs(x,y,6)>.88){R(X+4,Y+7,7,3,'#2a7a48');R(X+5,Y+6,5,1,'#3f9a5a');R(X+8,Y+6,2,2,'#ffb3e6')}
  if(c==='b'){R(X,Y+3,16,10,'#8a6238');for(let i=0;i<4;i++)R(X+i*4,Y+3,1,10,'#5a3a22');R(X,Y+3,16,1,'#b88a52')}return}
 R(X,Y,16,16,m.g);const pv=Hs((x>>1)+3,(y>>1)+5);if(pv>.55)R(X,Y,16,16,'rgba(255,255,255,.05)');else if(pv<.25)R(X,Y,16,16,'rgba(0,0,0,.08)');for(let k=0;k<4;k++){const a=(Hs(x,y,k)*14)|0,b=(Hs(y,x,k+9)*14)|0;R(X+a,Y+b,2,1,k&1?'rgba(255,255,255,.1)':'rgba(0,0,0,.14)')}
 if(Hs(x,y,2)>.8&&c==='.'&&!m.wall){const s=Math.sin(S.t*2+x+y)>0?1:0;R(X+5+s,Y+7,1,3,'#a6e27a');R(X+7,Y+6,1,4,'#86c85f');R(X+9-s,Y+7,1,3,'#a6e27a')}
 if(m.wall&&c==='.'){R(X,Y,16,1,'rgba(0,0,0,.32)');R(X,Y,1,16,'rgba(0,0,0,.32)');R(X+15,Y,1,16,'rgba(255,255,255,.05)');if(Hs(x,y,4)>.78){R(X+4,Y+5,5,1,'rgba(0,0,0,.4)');R(X+8,Y+6,1,4,'rgba(0,0,0,.4)')}if(Hs(x,y,8)>.85)R(X+9,Y+10,4,3,'rgba(80,140,90,.35)')}
 if(c==='p'){R(X,Y,16,16,'#b8955f');for(let k=0;k<5;k++)R(X+Hs(x,y,k+3)*13,Y+Hs(y,x,k+5)*13,2,1,k&1?'#d2b07a':'#8f6f43');[[0,-1,0,0,16,2],[0,1,0,14,16,2],[-1,0,0,0,2,16],[1,0,14,0,2,16]].forEach(([a,b,ox,oy,w,h])=>{const n=m.r[y+b]&&m.r[y+b][x+a];if(n&&n!=='p')R(X+ox,Y+oy,w,h,'#94734a')});if(Hs(x,y,9)>.7)R(X+4,Y+6,3,2,'#a0a0aa')}
 else if(c==='f'){const s=Math.sin(S.t*2+x)>0?1:0;[[3,4,'#ff8fb8'],[9,9,'#ffe28a'],[11,3,'#fff']].forEach(([a,b,col],i)=>{R(X+a+s*(i&1),Y+b,2,2,col);R(X+a,Y+b+2,1,2,'#3b7a3a')})}
 else if(c==='g'){const k=S.end?Math.min(S.end.t/4,1):S.fin?1:0,col=Hs(x,y)>.5?'#ff9ee0':'#8ff6ff';R(X+7,Y+8,2,5,'#2e6b3a');R(X+5,Y+5,6,4,col);R(X+7,Y+6,2,2,'#fff');G.push([X+8,Y+7,10+k*8,col,.35])}
 else if(c==='m'){R(X+7,Y+9,3,6,'#e8e0d0');R(X+4,Y+5,9,5,'#ff6ec7');R(X+6,Y+6,2,2,'#ffd1f0');G.push([X+8,Y+8,16,'#ff6ec7',.3])}
 if(S.map===3){const k=S.end?Math.min(S.end.t/4,1):S.fin?1:0;if(k>0&&c==='.'&&Hs(x,y,5)>.55){const s=Math.min(1,k*1.5);R(X+4+Hs(x,y)*8,Y+6+Hs(y,x)*6,2+s*2,2+s*2,['#ffb3e6','#fff1a8','#9ff6ff'][(Hs(x,y,7)*3)|0])}}}
function wall(x,y){const X=x*16,Y=y*16;R(X,Y,16,16,'#3d3d58');R(X,Y,16,1,'#5e5e80');R(X,Y+5,16,1,'#2a2a40');R(X,Y+10,16,1,'#2a2a40');R(X+(y%2?4:10),Y,1,5,'#2a2a40');R(X+(y%2?10:4),Y+5,1,5,'#2a2a40');R(X+6,Y+10,1,6,'#2a2a40')}
function tree(m,x,y){const X=x*16,Y=y*16,c=m.tc,sw=Math.sin(S.t*.8+x*2)>.4?1:0;
 R(X+2,Y+11,13,5,'rgba(0,0,0,.22)');R(X+6,Y+6,4,10,'#4a2e1a');R(X+6,Y+6,1,10,'#6b4426');R(X+9,Y+8,1,8,'#35210f');R(X+4,Y+14,3,2,'#4a2e1a');R(X+9,Y+14,3,2,'#4a2e1a');
 disc(X+8+sw,Y-1,8,sh(c[0],-45));disc(X+8+sw,Y-1,7,c[0]);disc(X+4+sw,Y+2,5,c[0]);disc(X+12+sw,Y+2,5,c[0]);
 disc(X+7+sw,Y-3,5,c[1]);disc(X+11+sw,Y,4,c[1]);disc(X+4+sw,Y+1,3,c[1]);disc(X+6+sw,Y-5,3,c[2]);R(X+10+sw,Y-3,2,2,c[2]);R(X+4+sw,Y,2,1,c[2]);
 R(X+3+sw,Y+5,3,1,sh(c[0],-20));R(X+10+sw,Y+5,4,1,sh(c[0],-20))}
function house(m,x,y){const X=x*16,Y=y*16,ab=m.r[y-1]&&m.r[y-1][x]==='h',bl=m.r[y+1]&&m.r[y+1][x]==='h';
 if(!ab){R(X,Y,16,16,'#a8453a');for(let i=0;i<4;i++){R(X,Y+i*4+3,16,1,'#7a2f2c');for(let k=(i&1)*4;k<16;k+=8)R(X+k,Y+i*4,1,4,'#8a3330')}R(X,Y,16,2,'#d46a52');R(X,Y+14,16,2,'#6f2a29');if(x===6||x===13){R(X+9,Y-5,4,8,'#7a5a4a');R(X+9,Y-5,1,8,'#9a7a68');R(X+8,Y-6,6,2,'#5a3a2e')}}
 else{R(X,Y,16,16,'#ead7aa');R(X,Y,16,3,'rgba(80,40,20,.25)');for(let i=5;i<16;i+=5)R(X,Y+i,16,1,'#d5bd8f');R(X,Y,1,16,'#f5e8c4');R(X+15,Y,1,16,'#c2a878');
  if(bl){}else if(x===4||x===10){R(X+3,Y+2,10,14,'#4a2b18');R(X+4,Y+3,8,13,'#7a4a2a');R(X+4,Y+3,8,1,'#8f5a34');R(X+7,Y+3,1,13,'#5a3820');R(X+10,Y+9,2,2,'#f2c46d');R(X+2,Y+14,12,2,'#8a8a96')}
  else{R(X+3,Y+3,10,9,'#5a3a22');R(X+4,Y+4,8,7,'#ffd877');R(X+7,Y+4,2,7,'#5a3a22');R(X+4,Y+7,8,1,'#5a3a22');R(X+4,Y+4,2,7,'#e0554f');R(X+3,Y+12,10,2,'#6b4426');R(X+4,Y+11,2,1,'#ff8fb8');R(X+8,Y+11,2,1,'#ffe28a');G.push([X+8,Y+8,16,'#ffc060',.3])}}}
function obj(o){const X=o.x*16,Y=o.y*16;
 if(o.t==='sign'){R(X+7,Y+6,2,10,'#6b4a2a');R(X+2,Y+2,12,8,'#c79a5b');R(X+2,Y+2,12,1,'#e0b878');R(X+4,Y+5,8,1,'#7a5530');R(X+4,Y+7,6,1,'#7a5530')}
 else if(o.t==='mail'){R(X+7,Y+8,2,8,'#6b4a2a');R(X+3,Y+3,10,7,'#4a6fb0');R(X+3,Y+3,10,2,'#6a8fd0');R(X+12,Y+1,2,5,'#e0554f')}
 else if(o.t==='clue'){R(X+3,Y+6,10,9,'#6b4a2a');R(X+3,Y+5,10,3,'#8a6238');R(X+7,Y+9,2,3,o.seen?'#7fffd4':'#3fa08a');G.push([X+8,Y+10,o.seen?16:11,'#7fffd4',.35])}
 else if(o.t==='lamp'){R(X+7,Y+3,2,13,'#3a3a4a');R(X+4,Y+1,8,10,'#2a2a38');R(X+5,Y+3,6,6,o.on?o.c:o.d);if(o.on)G.push([X+8,Y+6,28,o.c,.4]);else G.push([X+8,Y+6,8,o.c,.12])}
 else if(o.t==='stone'){R(X+1,Y+4,14,11,'#6e7788');R(X+2,Y+3,12,3,'#8d97aa');const d=o.n+1,c=o.on?'#8ff6ff':'#1b2030';for(let i=0;i<d;i++)R(X+4+(i%2)*5,Y+7+((i/2)|0)*4,2,2,c);if(o.on)G.push([X+8,Y+8,22,'#8ff6ff',.4])}
 else if(o.t==='ped'){R(X+3,Y+5,10,11,'#9a8fb5');R(X+2,Y+4,12,3,'#c8bde0');S.frag.forEach((f,i)=>R(X+4+i*3,Y+8,2,3,f?'#ffe28a':'#4a3f66'));if(S.frag.every(Boolean))G.push([X+8,Y+6,18,'#ffe28a',.4])}
 else if(o.t==='frag'){const b=Math.sin(S.t*3)*1.5;R(X+4,Y+8+b,8,5,'#ecd9a4');R(X+4,Y+8+b,8,1,'#c8a86a');R(X+6,Y+10+b,4,1,'#8a6a3a');G.push([X+8,Y+10,14,'#ffe28a',.45])}
 else if(o.t==='env'){const k=Math.min(1,S.end?S.end.t-2:2);ctx.globalAlpha=Math.max(0,k);R(X+4,Y+2,8,12,'#2b1f5e');R(X+5,Y+3,6,10,'#9a6bff');for(let i=0;i<4;i++){const a=S.t*3+i*1.57;R(X+8+Math.cos(a)*(6-i),Y+8+Math.sin(a)*(6-i),2,2,i%2?'#c47bff':'#7fffd4')}ctx.globalAlpha=1;G.push([X+8,Y+8,26,'#c47bff',.55])}
 else if(o.t==='wiz')wizard(X-1,Y-14,S.t,0);
 else if(o.t==='wizb')wizard(X-1,Y-14,S.t,Math.sin(S.t*2)>0);
 else if(o.t==='torch'){R(X+7,Y+6,2,8,'#6b4a2a');R(X+6,Y+2,4,5,'#ff9a3c');R(X+7,Y,2,3,'#ffe28a');G.push([X+8,Y+6,30,'#ff9a3c',.45])}
 else if(o.t==='rune'){R(X+1,Y+1,14,14,o.d);R(X+3,Y+3,10,10,o.on?o.c:'#14101c');R(X+6,Y+6,4,4,o.d);G.push([X+8,Y+8,o.on?26:10,o.c,o.on?.5:.15])}
 else if(o.t==='cage'){R(X-8,Y+12,32,4,'#3a3a4a');person(X+2,Y-6,PC.raul,1);if(!o.open){for(let k=0;k<5;k++)R(X-6+k*7,Y-18,1,30,'#9a9ab8');R(X-8,Y-19,32,2,'#7a7a98')}}
 else if(o.t==='rab')rabbit(X-3,Y+2,Math.sin(S.t*4)>.7?1:0);
 else if(o.t==='door'){const pr=o.op?Math.min(1,(S.t-o.opT)*1.6):0,h=48*(1-pr);R(X-1,Y-1,17,50,'#3a3050');R(X,Y,16,48,'#1a1226');
  if(h>0){R(X,Y,16,h,'#6b4426');for(let i=0;i<4;i++)R(X+i*4,Y,1,h,'#4a2e1a');[8,36].forEach(by=>{if(by<h)R(X,Y+by,16,3,'#8a8a9a')});if(h>24){R(X+5,Y+19,6,7,'#f2c46d');R(X+7,Y+21,2,3,'#3a2a10');ctx.strokeStyle='#f2c46d';ctx.lineWidth=2;ctx.beginPath();ctx.arc(X+8,Y+19,3,Math.PI,0);ctx.stroke();G.push([X+8,Y+23,22,'#ff4a5a',.35])}}else G.push([X+8,Y+24,30,'#ffe28a',.45])}
 else if(o.t==='gate'){R(X+1,Y,3,16,'#5b4a6a');R(X+12,Y,3,16,'#5b4a6a');R(X+4,Y,8,16,`rgba(150,120,255,${.3+Math.sin(S.t*4)*.1})`);G.push([X+8,Y+8,18,'#9a7aff',.3])}}
function player(){if((S.boss&&S.boss.on&&S.boss.inv>0||S.bt&&S.bt.on&&S.bt.inv>0)&&Math.floor(S.t*20)%2)return;const p=S.p,c=me(),x=(p.x-6)|0,y=(p.y-21-(S.mount?8:0)+(p.mv&&p.fr?-1:0))|0;
 R(p.x-6,p.y-3,12,2,'rgba(0,0,0,.28)');R(p.x-4,p.y-4,8,1,'rgba(0,0,0,.2)');R(p.x-4,p.y-1,8,1,'rgba(0,0,0,.2)');
 if(S.mount){ctx.save();if(p.d===2){ctx.translate(p.x,0);ctx.scale(-1,1);ctx.translate(-p.x,0)}rabbit(p.x-11,p.y-14,p.mv&&p.fr?2:0);ctx.restore()}
 chr(x,y,c,p.d,S.mount?0:(p.mv?(p.fr?1:-1):0),S.mount);
 if(S.wand){const hx=p.x+(p.d===2||p.d===1?-9:8);R(hx,y+11,1,6,'#c8a060');R(hx,y+10,1,1,'#ffe28a');gl(hx,y+10,p.act>0?18:8,p.act>0?'#7ff6ff':'#ffe28a',.6)}
 if(p.act>0)R(x+(p.d===2?-3:13),y+8,2,4,c.skin)}
function draw(){if(S.mode==='pick'){drawPick();return}if(S.mode==='cut'){drawCut();return}const m=M(),k=S.end?Math.min(S.end.t/4,1):S.fin?1:0;G.length=0;ctx.save();ctx.clearRect(0,0,320,176);if(S.shake>0)ctx.translate((Math.random()-.5)*S.shake*9,(Math.random()-.5)*S.shake*9);
 if(S.mode==='end'&&S.end.t<4){const t=S.end.t,e=t<3?Math.min(1,t/2.2):Math.max(0,4-t),z=1+.7*(e*e*(3-2*e));ctx.translate(160,88);ctx.scale(z,z);ctx.translate(-(160+(152-160)*e),-88)}
 for(let y=0;y<Hh;y++)for(let x=0;x<W;x++)ground(m,x,y,m.r[y][x]);
 const it=[];for(let y=0;y<Hh;y++)for(let x=0;x<W;x++){const c=m.r[y][x];if(c==='T')it.push([y*16+16,()=>m.wall?wall(x,y):tree(m,x,y)]);if(c==='h')it.push([y*16+16,()=>house(m,x,y)]);if(c==='.'&&!m.wall&&!m.o.some(o=>o.x===x&&o.y===y)){const h=Hs(x,y,11),X=x*16,Y=y*16;if(h>.93&&S.map!==2)it.push([Y+14,()=>{const pk=S.map===3;disc(X+8,Y+10,6,sh(pk?'#d878b2':m.tc[0],-30));disc(X+7,Y+9,5,pk?'#d878b2':m.tc[1]);R(X+5,Y+6,3,2,pk?'#f6b3d6':m.tc[2]);if(pk){R(X+9,Y+8,2,2,'#fff1a8');R(X+4,Y+10,2,2,'#ffffff')}}]);else if(h>.88&&h<=.93)it.push([Y+14,()=>{R(X+4,Y+13,9,2,'rgba(0,0,0,.25)');R(X+4,Y+9,8,5,'#6e7488');R(X+5,Y+8,6,2,'#9aa0b4');R(X+4,Y+13,8,1,'#454a5c');if(S.map===1)R(X+5,Y+9,3,1,'#5a9a5a')}])}}
 m.o.forEach(o=>{if(!o.gone)it.push([o.y*16+15,()=>obj(o)])});if(S.map===4&&S.boss&&!S.boss.gone)it.push([S.boss.wy+16,()=>{const b=S.boss;if(b.dead&&b.dt<1.2&&Math.sin(S.t*60)>0)return;ctx.globalAlpha=b.dead&&b.dt>1.2?Math.max(0,1-(b.dt-1.2)/1.3):1;const wx=b.wx-10+(b.dead?Math.sin(S.t*80)*2:0);wizard(wx,b.wy-14,S.t,b.st==='charge'||b.cast>0);if(b.flash>0){ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.7;wizard(wx,b.wy-14,S.t,0);ctx.globalCompositeOperation='source-over'}ctx.globalAlpha=1}]);if(S.bt&&S.bt.on)S.bt.foes.forEach(f=>it.push([f.y+8,()=>foe(f)]));it.push([S.p.y,player]);it.sort((a,b)=>a[0]-b[0]).forEach(i=>i[1]());
 const tn=m.tn.slice();if(m===MAPS[3]){tn[0]+=(255-tn[0])*k;tn[1]+=(215-tn[1])*k;tn[2]+=(150-tn[2])*k;tn[3]+=(.08-tn[3])*k}
 R(0,0,320,176,`rgba(${tn[0]|0},${tn[1]|0},${tn[2]|0},${tn[3]})`);
 if(S.map===0||S.map===3)bf.forEach(b=>{const w=Math.sin(S.t*14+b.p*5)>0?3:1,c=S.map===3?['#ffb3e6','#9ff6ff','#fff1a8'][b.ty]:['#ff9a3c','#ffe28a','#ffffff'][b.ty];R(b.x-w,b.y,w,2,c);R(b.x+1,b.y,w,2,c);R(b.x,b.y,1,3,'#2a1a22')});
 if(S.map===0){S.sm.forEach(q=>{ctx.globalAlpha=Math.max(0,q.l*.5);ctx.fillStyle='#d8d4e0';ctx.beginPath();ctx.arc(q.x,q.y,q.r,0,6.3);ctx.fill()});ctx.globalAlpha=1}
 if(S.map===0||S.map===3)amb.forEach(a=>{R(a.x,a.y,2,1+(Math.sin(a.p*3)>0?1:0),S.map===3?['#ffb3e6','#fff1a8'][a.ty]:['#e8a64a','#9bd46a'][a.ty])});
 if(S.map<4){const lc=S.map===0?'rgba(255,230,160,.07)':S.map===3?'rgba(255,200,255,.06)':'rgba(160,255,220,.05)';ctx.fillStyle=lc;for(let k=0;k<3;k++){const ox=40+k*110+Math.sin(S.t*.4+k)*8;ctx.beginPath();ctx.moveTo(ox,0);ctx.lineTo(ox+30,0);ctx.lineTo(ox+90,176);ctx.lineTo(ox+50,176);ctx.fill()}}
 if(S.map===1||S.map===2)for(let i=0;i<3;i++){const mx=((S.t*6*(i+1)+i*140)%480)-160,g2=ctx.createLinearGradient(mx,0,mx+160,0);g2.addColorStop(0,'rgba(200,220,255,0)');g2.addColorStop(.5,'rgba(200,220,255,.08)');g2.addColorStop(1,'rgba(200,220,255,0)');ctx.fillStyle=g2;ctx.fillRect(mx,60+i*40,160,30)}
 const vg=ctx.createRadialGradient(160,88,60,160,88,200);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(5,3,15,.5)');ctx.fillStyle=vg;ctx.fillRect(0,0,320,176);if(S.map===0){const sg=ctx.createLinearGradient(0,0,0,176);sg.addColorStop(0,'rgba(255,170,80,.2)');sg.addColorStop(1,'rgba(255,170,80,0)');ctx.fillStyle=sg;ctx.fillRect(0,0,320,176)}
 ctx.globalCompositeOperation='lighter';G.forEach(([x,y,r,c,a])=>{const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,c);g.addColorStop(1,'rgba(0,0,0,0)');ctx.globalAlpha=a*(.85+.15*Math.sin(S.t*3+x));ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2)});ctx.globalAlpha=1;
 if(S.map>0)fire.forEach(f=>{const a=.5+.5*Math.sin(f.p*3);ctx.globalAlpha=a;R(f.x,f.y,1,1,'#ffee88');ctx.globalAlpha=a*.3;R(f.x-1,f.y-1,3,3,'#ffee88')});
 ctx.globalAlpha=1;S.pa.forEach(q=>{ctx.globalAlpha=Math.max(0,q.l);R(q.x,q.y,2,2,q.c)});ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';
 if(S.mode==='play')trailDraw();ctx.save();ctx.setTransform(1,0,0,1,0,0);bx.clearRect(0,0,80,44);bx.drawImage(cv,0,0,80,44);ctx.imageSmoothingEnabled=true;ctx.globalCompositeOperation='screen';ctx.globalAlpha=.3;ctx.drawImage(BL,0,0,320,176);ctx.restore();
 if(S.boss&&S.map===4)bossDraw();if(S.bt&&S.bt.on)btDraw();
 if(S.mode==='play'&&S.near&&!S.fade){const n=S.near,x=n.x*16+8,y=n.y*16-5+Math.sin(S.t*5);R(x-5,y-6,10,10,'#2a1f45');R(x-5,y-6,10,1,'#f2c46d');R(x-5,y+3,10,1,'#f2c46d');ctx.fillStyle='#f6e7c8';ctx.font="9px 'Pixelify Sans',monospace";ctx.textAlign='center';ctx.fillText(n.t==='rab'?'M':'E',x,y+2)}
 ctx.restore();
 if(S.fade){const f=S.fade;R(0,0,320,176,`rgba(8,6,20,${f.t<.3?f.t/.3:1-(f.t-.3)/.3})`)}}
/* ===== HISTÓRIA EM CAPÍTULOS ===== */
const PC={her:CFG.chars.luisa,raul:CFG.chars.raul};const oth=()=>WHO==='raul'?'luisa':'raul';const ROBE={robe:1,shirt:'#3b2a7a',skirt:'#3b2a7a',shoe:'#2b1f3a',brace:'#e8c872'};const me=()=>S.robe?{...CFG.chars[WHO],...ROBE}:CFG.chars[WHO];
const fmt=t=>t.replace(/\{o\}/g,CFG.chars[oth()].name).replace(/\{r\}/g,WHO==='raul'?'Você':'Raul').replace(/\{El\}/g,WHO==='raul'?'Ela':'Ele').replace(/\{el\}/g,WHO==='raul'?'ela':'ele').replace(/\{lo\}/g,WHO==='raul'?'la':'lo').replace(/\{b\}/g,RAUL_DONE?"\nUm bruxo de capa preta com listras vermelhas o levou. Só você pode quebrar o feitiço.":"").replace(/\{w\}/g,RAUL_DONE?"O feitiço do bruxo se desfez ao ler a carta. ":"");
function acc(c,d,x,y){const h=c.hair;if(c.curly){R(x,y-1,10,2,h);R(x+1,y-2,3,1,h);R(x+5,y-2,3,1,h)}
 if(c.long){if(d===0){R(x,y+3,1,8,h);R(x+9,y+3,1,8,h)}else if(d===1)R(x,y+6,10,5,h);else R(d===2?x+5:x,y+5,5,6,h)}
 if(c.glasses){if(d===0){[2,5].forEach(a=>{R(x+a,y+3,3,1,'#111');R(x+a,y+5,3,1,'#111')})}else if(d>1){const a=d===2?x+1:x+5;R(a,y+3,4,1,'#111');R(a,y+5,4,1,'#111')}}
 if(c.ring&&d===0)R(x+4,y+6,1,1,'#e8e8f0')}
const lg=(a,b)=>{const g=ctx.createLinearGradient(0,0,0,176);g.addColorStop(0,a);g.addColorStop(1,b);ctx.fillStyle=g;ctx.fillRect(0,0,320,176)};
const gl=(x,y,r,c,a)=>{ctx.globalCompositeOperation='lighter';const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,c);g.addColorStop(1,'rgba(0,0,0,0)');ctx.globalAlpha=a;ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over'};
const heart=(x,y,c)=>{R(x+1,y,2,1,c);R(x+4,y,2,1,c);R(x,y+1,7,2,c);R(x+1,y+3,5,1,c);R(x+2,y+4,3,1,c);R(x+3,y+5,1,1,c)};
const hearts=(x,y,t,n)=>{for(let k=0;k<n;k++){const u=(t*.5+k/n)%1;ctx.globalAlpha=Math.max(0,1-u);heart(x+Math.sin(k*5+t)*14+k*4-n*2,y-u*40,'#ff7aa8')}ctx.globalAlpha=1};
const sh=(h,k)=>'#'+[1,3,5].map(i=>Math.max(0,Math.min(255,parseInt(h.substr(i,2),16)+k)).toString(16).padStart(2,'0')).join('');
const bl=(x,y,w,h,c)=>{R(x+1,y,w-2,1,c);R(x,y+1,w,h-2,c);R(x+1,y+h-1,w-2,1,c)};
/* ===== SPRITES: gerados por código (contorno, sombra, brilho) ===== */
function buildGrid(c,d,f,sit){
 const W=18,Hn=34,g=Array.from({length:Hn},()=>Array(W).fill(null));
 const E=(cx,cy,rx,ry)=>(x,y)=>((x-cx)/rx)**2+((y-cy)/ry)**2<=1;
 const Rc=(a,b,e,h)=>(x,y)=>x>=a&&x<=e&&y>=b&&y<=h;
 const U=(...m)=>(x,y)=>m.some(k=>k(x,y));
 const put=(m,col,id,ok)=>{for(let y=0;y<32;y++)for(let x=0;x<16;x++)if(m(x,y)&&(!ok||ok(x,y)))g[y+1][x+1]={col,id}};
 const H=c.hair,K=c.skin,T=c.shirt,P=c.skirt,Gd='#3a4160',INK=c.glasses?'#4a3a42':'#2b1b22',HB=sh(H,-14),L=c.long,CU=c.curly,GL=c.glasses,Kn=sh(K,-18),Kz=sh(K,-30);
 const hw=y=>Math.max(0,(y-3)*.9),curls=cx=>U(E(cx,6,8,5.5),E(cx-4.5,2.5,3.5,2.8),E(cx+.5,1.5,4,2.8),E(cx+5,2.5,3.5,2.8));
 const legs=()=>{const xs=d===2?[6,9]:[4,9];[0,1].forEach(i=>{const lift=(f===1&&i===0)||(f===2&&i===1)?1:0,pe=(sit?26:28)-lift,lx=xs[i];put(Rc(lx,26,lx+2,pe),P,'p');put(Rc(lx-1,pe+1,lx+3,pe+3),c.shoe,'o');put(Rc(lx-1,pe+3,lx+3,pe+3),'#f4f4f8','o')})};
 const trunk=()=>{put(Rc(3,17,12,25),T,'t',(x,y)=>!(y===17&&(x===3||x===12)))};
 const arms=hand=>{put(Rc(1,17,3,21),T,'t');put(Rc(12,17,14,21),T,'t');put(Rc(1,22,3,24),K,'k');put(Rc(12,22,14,24),K,'k');if(hand)put(Rc(1,21,3,21),c.brace,'j')};
 if(d===0){
  if(L)put(E(7.5,17,7.8,11),H,'hb',(x,y)=>y<=27);
  legs();trunk();arms(1);put(Rc(6,15,9,17),Kn,'n');
  if(L){put(Rc(6,18,6,18),'#f2d98a','j');put(Rc(9,18,9,18),'#f2d98a','j');put(Rc(7,19,8,19),'#f2d98a','j')}else put(Rc(5,20,8,21),'#2c2f3a','j');
  put(E(7.5,9.5,6.5,6.5),K,'k');
  if(CU)put(curls(7.5),H,'h',(x,y)=>y<=9&&!(y>=6&&Math.abs(x-7.5)<5.4));
  else{put(E(7.5,9,7.6,7.6),H,'h',(x,y)=>y<=10&&Math.abs(x-7.5)>hw(y));put(Rc(0,9,2,17),H,'h');put(Rc(13,9,15,17),H,'h')}
  const by=GL?7:8;put(Rc(3,by,6,by),HB,'br');put(Rc(9,by,12,by),HB,'br');
  put(Rc(7,GL?14:12,8,GL?14:13),Kz,'nz');
  if(c.stubble)put(E(7.5,9.5,6.5,6.5),sh(K,-24),'st',(x,y)=>y>=14&&Math.abs(x-7.5)<5.5);
  [4,9].forEach(ex=>{put(Rc(ex,10,ex+1,12),INK,'e');put(Rc(ex,10,ex,10),'#ffffff','w');if(!GL){const l=ex<8?ex-1:ex+2;put(Rc(l,10,l,10),INK,'e')}});
  if(GL){put(Rc(3,9,12,13),Gd,'g',(x,y)=>y===9||y===13||x===3||x===7||x===8||x===12);put(Rc(2,10,2,10),Gd,'g');put(Rc(13,10,13,10),Gd,'g')}
  else{put(Rc(3,13,4,13),c.blush,'b');put(Rc(11,13,12,13),c.blush,'b')}
  if(c.ring)put(Rc(9,13,9,13),'#e8ecf4','j');
  put(Rc(6,15,9,15),c.lip,'m');if(L)put(Rc(7,16,8,16),sh(c.lip,20),'m');
 }else if(d===1){
  legs();trunk();arms(0);if(!L)put(Rc(4,18,11,25),c.pack,'a');put(Rc(6,15,9,17),Kn,'n');
  put(E(7.5,9.5,6.5,6.5),H,'h');put(E(7.5,9,7.6,7.6),H,'h',(x,y)=>y<=12);
  if(CU)put(curls(7.5),H,'h',(x,y)=>y<=12);
  if(L)put(E(7.5,18,7.6,9),H,'h',(x,y)=>y>=10&&y<=26);
 }else{
  if(!L)put(Rc(11,18,14,25),c.pack,'a');
  legs();put(Rc(4,17,11,25),T,'t',(x,y)=>!(y===17&&(x===4||x===11)));
  if(L)put(Rc(8,9,14,25),H,'hb');
  put(Rc(6,17,9,21),T,'t');put(Rc(6,22,9,24),K,'k');put(Rc(6,21,9,21),c.brace,'j');put(Rc(6,15,9,17),Kn,'n');
  put(E(7.5,9.5,6.5,6.5),K,'k');put(Rc(0,12,0,12),K,'k');
  if(CU){put(curls(9.5),H,'h',(x,y)=>y<=9&&!(y>=6&&x<5));put(Rc(9,6,14,14),H,'h')}
  else{put(E(7.5,9,7.6,7.6),H,'h',(x,y)=>y<=8&&!(y>=6&&x<4));put(Rc(8,8,15,16),H,'h')}
  put(Rc(2,GL?7:8,5,GL?7:8),HB,'br');
  if(c.stubble)put(E(7.5,9.5,6.5,6.5),sh(K,-24),'st',(x,y)=>y>=14&&x<=8);
  put(Rc(3,10,4,12),INK,'e');put(Rc(3,10,3,10),'#ffffff','w');if(!GL)put(Rc(2,10,2,10),INK,'e');
  if(GL){put(Rc(2,9,6,13),Gd,'g',(x,y)=>y===9||y===13||x===2||x===6);put(Rc(7,10,13,10),Gd,'g')}else put(Rc(2,13,3,13),c.blush,'b');
  if(c.ring)put(Rc(1,12,1,12),'#e8ecf4','j');
  put(Rc(3,15,4,15),c.lip,'m');
 }
 if(c.robe){put(E(7.5,6,9,2),'#2b1f5e','h',(x,y)=>y>=4&&y<=7);put(Rc(4,0,11,4),'#3b2a7a','h',(x,y)=>Math.abs(x-7.5)<=(y+1)*.9);put(Rc(4,4,11,4),'#e8c872','j',(x,y)=>Math.abs(x-7.5)<=4.5);
  if(d!==1)put(Rc(d===2?4:3,24,d===2?11:12,24),'#e8c872','j');if(d===0){put(Rc(5,20,5,20),'#ffe28a','j');put(Rc(9,22,9,22),'#ffe28a','j');put(Rc(7,19,8,19),'#e8c872','j')}}
 const NS=new Set(['e','w','m','b','g','br','nz','j','st']),out=Array.from({length:Hn},()=>Array(W).fill(null));
 for(let y=0;y<Hn;y++)for(let x=0;x<W;x++){const a=g[y][x];if(!a)continue;let col=a.col;if(!NS.has(a.id)){const b=g[y+1]&&g[y+1][x];if(!b||(b.id!==a.id&&!NS.has(b.id)))col=sh(col,-30);else if((a.id==='h'||a.id==='hb')&&(CU?(x*7+y*13)%9===0:(x*37+(y>>1)*11)%9===0))col=sh(col,36)}out[y][x]=col}
 for(let y=0;y<Hn;y++)for(let x=0;x<W;x++)if(!g[y][x]){for(const[dx,dy]of[[0,1],[0,-1],[1,0],[-1,0]]){const n=g[y+dy]&&g[y+dy][x+dx];if(n){out[y][x]=sh(out[y+dy][x+dx],-105);break}}}
 return out}

const SPR={};
function chr(x,y,c,d,w,sit){const f=w>0?1:w<0?2:0,dd=d===3?2:d,k=c.name+dd+f+(sit?1:0)+(c.robe?'r':'');let cv=SPR[k];
 if(!cv){const g=buildGrid(c,dd,f,sit?1:0);cv=SPR[k]=document.createElement('canvas');cv.width=18;cv.height=34;const q=cv.getContext('2d');g.forEach((r,yy)=>r.forEach((col,xx)=>{if(col){q.fillStyle=col;q.fillRect(xx,yy,1,1)}}))}
 if(d===3){ctx.save();ctx.translate(2*(x+6),0);ctx.scale(-1,1)}
 ctx.drawImage(cv,x-3,y-12);if(d===3)ctx.restore()}
const person=(x,y,c,sit,w=0)=>chr(x,y,c,0,w,sit);
function rabbit(X,Y,h){const o='#e8892b',d='#c76a1a',k='#1a1020',w='#f6e3b8',e='#ffe28a';
 R(X+1,Y+4-h,2,3,o);R(X,Y+1-h,2,4,o);R(X,Y+1-h,2,1,k);
 R(X+3,Y+10,3,4,d);R(X+13,Y+10,3,4,d);R(X+3,Y+13,3,1,w);R(X+13,Y+13,3,1,w);R(X+14,Y+11,2,1,k);R(X+4,Y+11,2,1,k);
 R(X+2,Y+4-h,14,7,o);R(X+3,Y+9-h,12,2,w);for(let i=0;i<4;i++)R(X+4+i*3,Y+4-h,1,5,k);R(X+2,Y+4-h,14,1,'#f5a24a');
 R(X+15,Y+1-h,7,7,o);R(X+15,Y-1-h,2,2,o);R(X+20,Y-1-h,2,2,o);R(X+16,Y-h,1,1,'#f4a0b0');R(X+21,Y-h,1,1,'#f4a0b0');
 R(X+17,Y+1-h,1,2,k);R(X+19,Y+1-h,1,2,k);R(X+17,Y+3-h,1,1,e);R(X+20,Y+3-h,1,1,e);R(X+18,Y+5-h,4,3,w);R(X+21,Y+5-h,1,1,k);R(X+19,Y+7-h,2,1,'#b5532a')}
function sBench(t,i,solo){lg('#ff9a5c','#6a3a6a');R(0,112,320,64,'#8f8a96');
 [[8,56,52,56],[70,34,44,78],[232,44,64,68],[186,70,40,42]].forEach(([x,y,w,h],k)=>{R(x,y,w,h,'#3a2a50');for(let a=0;a<w-8;a+=10)for(let b=6;b<h-8;b+=14)R(x+4+a,y+b,5,7,(a+b+k)%3?'#f6d77a':'#5a4a70')});
 R(148,48,5,64,'#4a3020');[[128,42,46],[134,36,34],[141,30,20],[122,48,58]].forEach(([x,y,w])=>R(x,y,w,5,'#2f6b3a'));
 R(60,72,3,40,'#2a2a3a');R(56,68,11,5,'#2a2a3a');gl(61,72,40,'#ffc060',.5);
 R(112,120,86,5,'#a8743c');R(112,126,86,3,'#8a5a30');R(116,129,4,10,'#5a3a22');R(190,129,4,10,'#5a3a22');
 const b=Math.sin(t*3)>.5?1:0;person(132,100+b,solo?CFG.chars[WHO]:PC.her,1);
 if(!solo){person(160,100+(1-b),PC.raul,1);const k=Math.floor(t*1.3)%2;R(k?134:162,84,12,7,'#fff');R(k?137:165,87,2,2,'#555');R(k?141:169,87,2,2,'#555');
  if(i===2){R(172,76,3,3,'#fff');R(176,70,4,4,'#fff');R(164,38,56,28,'#fff');heart(188,48,'#ff7aa8');heart(202,52,'#ffb3c8')}}
 else{R(170,110,12,7,'#f3e6c4');gl(176,113,22,'#ffe28a',.6+.2*Math.sin(t*4))}}
function sMall(t){lg('#3b2f66','#8a6fb3');R(0,126,320,50,'#c9c0d8');for(let x=0;x<320;x+=32)R(x,126,1,50,'#aaa0c0');
 for(let k=0;k<4;k++){const x=8+k*78;R(x,30,68,90,'#2a2250');R(x+4,34,60,12,['#e0554f','#5ac8a8','#f2c46d','#7a8ff0'][k]);R(x+6,52,56,60,'#f6e7c8');for(let a=0;a<3;a++)R(x+10+a*17,60,11,28,['#ff8fb8','#8ff6ff','#ffe28a'][(a+k)%3]);gl(x+34,80,50,'#ffe9b0',.25)}
 const px=((t*34)%400)-40,b=Math.abs(Math.sin(t*8))*1.5|0;person(px,104-b,PC.her,0,b?1:-1);person(px+26,103+b,PC.raul,0,b?-1:1);R(px+11,120,7,9,'#e0554f');R(px+36,120,7,9,'#7a8ff0');
 if(Math.sin(t*4)>0){ctx.fillStyle='#fff';ctx.font="9px 'Pixelify Sans',monospace";ctx.textAlign='center';ctx.fillText('ha ha',px+20,96)}hearts(px+20,96,t,3)}
function sTV(t){lg('#14102a','#1c1538');R(0,130,320,46,'#2a1f3a');const f=.8+.2*Math.sin(t*7);
 R(100,24,120,76,'#0e0b1c');R(106,30,108,64,'#1a2b66');for(let k=0;k<14;k++)if(Math.sin(t*3+k*2)>-.3)R(110+(k*37)%100,34+(k*17)%26,1,1,'#fff');
 [[130,66,10,28],[146,54,8,40],[158,70,12,24],[174,58,8,36],[188,68,10,26]].forEach(([x,y,w,h])=>{R(x,y,w,h,'#0b0f2a');R(x+1,y-4,w-2,4,'#0b0f2a');R(x+2,y+6,2,3,'#ffd45e')});R(124,88,76,6,'#0b0f2a');gl(160,60,110,'#6a8fff',.5*f);
 R(60,106,200,40,'#6b3a4a');R(50,96,22,50,'#7a4455');R(248,96,22,50,'#7a4455');R(72,100,176,18,'#7a4455');
 person(130,98+(Math.sin(t*2)>.6?1:0),PC.her,1);person(158,98,PC.raul,1);R(120,120,76,20,'#3d6b8f');R(120,126,76,2,'#2d5070');R(204,126,16,10,'#e0554f');for(let k=0;k<5;k++)R(205+k*3,123+(k&1),2,2,'#ffe9a8');
 for(let k=0;k<6;k++){const x=24+k*54,y=18+Math.sin(t+k)*6;R(x,y,2,6,'#f6e7c8');R(x,y-3,2,3,'#ffd45e');gl(x+1,y-2,14,'#ffd45e',.5)}gl(160,110,80,'#6a8fff',.12*f)}
function sEnd(t){lg('#2a1f5a','#d890b8');R(0,118,320,58,'#4a8a5a');
 [[20,60],[270,50],[220,76],[70,80]].forEach(([x,y])=>{R(x+6,y+20,6,40,'#5a3a22');R(x-10,y-6,34,26,'#d878b2');R(x-4,y-12,22,8,'#f6b3d6');R(x+2,y-4,10,6,'#f6b3d6')});
 for(let k=0;k<24;k++){const x=(k*47)%310+4,y=124+(k*29)%46;R(x,y,2,2,['#ffb3e6','#fff1a8','#9ff6ff'][k%3]);R(x,y+2,1,2,'#2e6b3a')}
 gl(40,60,50,'#ffc060',.3);gl(290,60,50,'#ffc060',.3);const hx=Math.min(176,-16+t*28),walk=hx<176;
 person(hx,108+(walk&&Math.sin(t*9)>0?-1:0),me(),0,walk?(Math.sin(t*9)>0?1:-1):0);person(208,108,CFG.chars[oth()],0);R(218,118,2,10,'#2e6b3a');R(214,114,10,6,'#ff7aa8');R(217,112,4,3,'#ffe28a');if(!walk)hearts(192,100,t-6.5,6)}
const KEY=k=>'<b class="k">'+k+'</b>';
const HELP={game:'<h2>Como jogar</h2><p>'+KEY('W A S D')+' ou '+KEY('SETAS')+' andar</p><p>'+KEY('E')+' interagir (placas, runas, caixas)</p><p>'+KEY('M')+' montar e descer do tigre</p><p>'+KEY('ESC')+' pausa</p><p class="s">No celular: direcional à esquerda, botões E e M à direita.</p><p>Siga a <span class="gd">trilha dourada</span> e o <span class="gd">Objetivo</span> no topo da tela.</p><p class="s">Toque ou aperte E para começar</p>',
 battle:'<h2>Batalha!</h2><p>'+KEY('E')+' lança magia (a mira é automática)</p><p>Desvie dos ataques: você tem 3 corações</p><p>Derrote todas as ondas para abrir a porta</p><p class="s">Toque ou aperte E para lutar</p>',
 boss:'<h2>Fase final</h2><p>O bruxo prendeu o Raul!</p><p>Desvie das magias (áreas vermelhas no chão explodem)</p><p>'+KEY('E')+' lança sua magia: 8 acertos o destroem</p><p class="s">Toque ou aperte E para começar</p>'};
function showHelp(h,fn){S.hm=S.mode;S.mode='help';S.hf=fn;$('help').innerHTML=h;$('help').classList.remove('hide')}
function closeHelp(){if(S.mode!=='help')return;$('help').classList.add('hide');S.mode=S.hm==='bi'?'play':S.hm;const f=S.hf;S.hf=null;if(f)f()}
function openDoor(){const d=M().o.find(x=>x.t==='door'&&!x.op);if(d){d.op=1;d.opT=S.t;A.s('win');ring(d.x*16+8,d.y*16+24,'#ffe28a',40);say('A porta se abriu!',3)}}
function toggleMount(){if(S.mode!=='play'||S.fade||S.paused)return;if(S.mount){S.mount=0;M().o.push({t:'rab',x:S.p.x>>4,y:(S.p.y-2)>>4});A.s('blip');say('Você desceu do tigre. Aperte M perto dele para montar.',2.5);return}
 const t=M().o.find(o=>o.t==='rab'&&!o.gone&&Math.hypot(S.p.x-(o.x*16+8),S.p.y-4-(o.y*16+8))<26);if(t){t.gone=1;S.mount=1;A.s('good');say('Você montou no tigre! Aperte M para descer.',3)}}
function objective(){if(S.mode!=='play'||S.fade)return null;if(S.bt&&S.bt.on)return{txt:'Derrote todos os inimigos (E lança magia)'};if(S.boss&&S.boss.on)return{txt:'Destrua o bruxo: desvie e lance sua magia (E)'};
 const o=M().o,T=(x,y)=>({x:x*16+8,y:y*16+8}),cl=S.cl||{},east=txt=>({txt,...T(19,5)});
 if(S.map===0)return S.note?east('Siga a trilha: a porta a leste abriu'):{txt:'Leia o bilhete na caixa de correio',...T(12,4)};
 if(S.map===1){if(!S.wand){const c=o.find(x=>x.t==='clue'&&!x.seen);if(c)return{txt:'Ache as 3 runas brilhantes ('+o.filter(x=>x.t==='clue'&&x.seen).length+'/3)',...T(c.x,c.y)};const l=o.find(x=>x.t==='lamp'&&!x.on&&x.n===S.seq.l.length);return l?{txt:'Acenda as lanternas: amanhecer, dia, noite',...T(l.x,l.y)}:null}return cl.f?east('Siga para o lago, a leste'):null}
 if(S.map===2){if(!S.robe){const t=o.find(x=>x.t==='stone'&&!x.on&&x.n===S.seq.k.length);return t?{txt:'Toque as pedras: da menor para a maior quantidade de estrelas',...T(t.x,t.y)}:null}return cl.l?east('Siga para o jardim, a leste'):null}
 if(S.map===3){const e=o.find(x=>x.t==='env');if(e)return{txt:'Entre no portal',...T(e.x,e.y)};const f=o.find(x=>x.t==='frag'&&!x.gone);if(f)return{txt:'Pegue o fragmento perdido',...T(f.x,f.y)};if(!cl.g)return{txt:'Monte a mensagem no pedestal',...T(9,3)};return null}
 if(S.map===4){const c=o.find(x=>x.t==='cage');return c&&c.open?{txt:'Liberte o Raul',...T(c.x,c.y)}:null}return null}
function objUpdate(){const ob=objective();S.obj=ob;const el=$('ob');if(ob){const t='Objetivo: '+ob.txt;if(S.ot!==t){S.ot=t;el.textContent=t}el.classList.remove('hide')}else el.classList.add('hide')}
function trailDraw(){const o=S.obj;if(!o||o.x==null)return;const p=S.p,dx=o.x-p.x,dy=o.y-(p.y-6),d=Math.hypot(dx,dy);if(d<18)return;const n=Math.min(Math.floor(d/12),16),off=(S.t*18)%12;ctx.globalCompositeOperation='lighter';
 for(let i=0;i<n;i++){const u=(i*12+off)/d;if(u>1)break;const x=p.x+dx*u,y=p.y-6+dy*u;ctx.globalAlpha=Math.min(1,.25+.75*Math.sin(Math.min(1,u)*3.14));R(x-1,y-1,3,3,'#ffe28a');R(x,y-2,1,5,'#fff6c0');R(x-2,y,5,1,'#fff6c0')}
 ctx.globalAlpha=1;gl(o.x,o.y,20,'#ffe28a',.5+.2*Math.sin(S.t*4));const b=Math.sin(S.t*5)*2;R(o.x-4,o.y-24+b,8,2,'#ffe28a');R(o.x-3,o.y-22+b,6,2,'#ffe28a');R(o.x-2,o.y-20+b,4,2,'#ffe28a');R(o.x-1,o.y-18+b,2,2,'#ffe28a');ctx.globalCompositeOperation='source-over'}
const BT={f:{col:'#3a2a5a',eye:'#ff6ec7',w:[[4,0],[2,2]]},l:{col:'#3f8fe0',eye:'#e6fbff',w:[[3,1],[2,3]]},g:{col:'#d8508f',eye:'#ffe28a',w:[[3,1],[2,3],[3,3]]}};
function startBattle(k,msg){S.mode='play';S.bt={on:1,k,wave:0,foes:[],ep:[],sh:[],php:3,inv:0,cd:0,t:0,wt:.8,lose:0,lt:0};hud();if(!S.hb){S.hb=1;showHelp(HELP.battle,()=>msg&&say(msg,6))}else if(msg)say(msg,6)}
function spawnWave(){const b=S.bt,w=BT[b.k].w[b.wave],p=S.p;let i=0;[0,1].forEach(ty=>{for(let n=0;n<w[ty];n++){let x,y,g=0;do{x=30+Math.random()*260;y=34+Math.random()*120;g++}while(Math.hypot(x-p.x,y-p.y)<90&&g<30);b.foes.push({x,y,hp:2,ty,sp:.6+i*.12,cd:1.5+Math.random(),ph:Math.random()*6,fl:0});i++;ring(x,y,BT[b.k].eye,18)}});b.wave++}
function bhurt(){const b=S.bt;if(b.inv>0||b.lose)return 0;b.php--;b.inv=1.3;S.shake=.3;A.s('bad');burst(S.p.x,S.p.y-8);if(b.php<=0){b.lose=1;b.lt=0;b.foes=[];b.ep=[]}return 1}
function endBattle(){const b=S.bt,k=b.k;b.on=0;S.cl=S.cl||{};S.cl[k]=1;hud();A.s('win');ring(S.p.x,S.p.y-8,'#ffffff',80);const g=M().o.find(x=>x.t==='gate');
 if(k==='g')startEnd();else{openDoor();say(k==='f'?"As sombras sumiram! O portão a leste se abriu.":"Os espíritos se dissiparam! O caminho está livre.",5)}}
function btShot(){const b=S.bt,p=S.p;if(b.cd>0||b.lose)return;let t=null,bd=1e9;b.foes.forEach(f=>{const d=Math.hypot(f.x-p.x,f.y-p.y);if(f.sp<=0&&d<bd){bd=d;t=f}});
 b.cd=.35;p.act=.3;if(t)p.d=Math.abs(t.x-p.x)>Math.abs(t.y-p.y)?(t.x<p.x?2:3):(t.y<p.y?1:0);const sx=p.x+(p.d===2||p.d===1?-9:8),sy=p.y-18,a=t?Math.atan2(t.y-sy,t.x-sx):[Math.PI/2,-Math.PI/2,Math.PI,0][p.d];
 b.sh.push({x:sx,y:sy,vx:Math.cos(a)*190,vy:Math.sin(a)*190,l:1.2});ring(sx,sy,'#7ff6ff',14);A.s('blip')}
function btUpdate(dt){const b=S.bt,p=S.p,T=BT[b.k];b.t+=dt;b.cd-=dt;b.inv-=dt;S.rg.forEach(q=>{q.r+=70*dt;q.l-=2.2*dt});S.rg=S.rg.filter(q=>q.l>0);
 if(b.lose){b.lt+=dt;if(b.lt>1.4)startBattle(b.k,"Tente de novo! Desvie e lance sua magia.");return}
 b.sh.forEach(s=>{s.x+=s.vx*dt;s.y+=s.vy*dt;s.l-=dt;S.pa.push({x:s.x,y:s.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,l:.3,c:Math.random()<.5?'#7ff6ff':'#ffffff'});
  b.foes.forEach(f=>{if(s.l>0&&f.sp<=0&&Math.hypot(s.x-f.x,s.y-f.y)<10){s.l=0;f.hp--;f.fl=.15;ring(f.x,f.y,'#7ff6ff',20);burst(f.x,f.y);A.s('good');if(f.hp<=0){f.dead=1;ring(f.x,f.y,T.eye,30);S.shake=.15;for(let i=0;i<8;i++)S.pa.push({x:f.x,y:f.y,vx:(Math.random()-.5)*90,vy:-Math.random()*60,l:.8,c:T.eye})}}})});
 b.sh=b.sh.filter(s=>s.l>0);b.foes=b.foes.filter(f=>!f.dead);
 b.foes.forEach(f=>{f.fl-=dt;if(f.sp>0){f.sp-=dt;return}const dx=p.x-f.x,dy=p.y-6-f.y,d=Math.hypot(dx,dy)||1;
  if(f.ty===0){const v=(30+b.wave*3)*dt;f.x+=dx/d*v;f.y+=dy/d*v+Math.sin(b.t*4+f.ph)*.3}
  else{const m=d>95?1:d<65?-1:0,z=Math.sin(f.ph+b.t*.5)*18*dt;f.x+=dx/d*28*m*dt-dy/d*z;f.y+=dy/d*28*m*dt+dx/d*z;f.cd-=dt;if(f.cd<=0){f.cd=2.2;b.ep.push({x:f.x,y:f.y,vx:dx/d*72,vy:dy/d*72});ring(f.x,f.y,T.eye,12)}}
  f.x=Math.max(14,Math.min(306,f.x));f.y=Math.max(22,Math.min(160,f.y));
  if(Math.hypot(f.x-p.x,f.y-(p.y-6))<9&&bhurt()){f.x-=dx/d*14;f.y-=dy/d*14}});
 b.ep.forEach(q=>{q.x+=q.vx*dt;q.y+=q.vy*dt;if(Math.hypot(q.x-p.x,q.y-(p.y-6))<6&&bhurt())q.dead=1});b.ep=b.ep.filter(q=>!q.dead&&q.x>-5&&q.x<325&&q.y>-5&&q.y<181);
 if(!b.foes.length){b.wt-=dt;if(b.wt<=0){if(b.wave>=T.w.length)endBattle();else{spawnWave();b.wt=1.2}}}else b.wt=1.2}
function foe(f){const k=S.bt.k,T=BT[k],a=f.sp>0?Math.max(.01,1-f.sp/.6):1,x=f.x,y=f.y+Math.sin(S.t*5+f.ph)*1.5,fl=f.fl>0,c=fl?'#ffffff':T.col,d=fl?'#ffffff':sh(T.col,-45),tt=S.t+f.ph,K0='#10081c';
 ctx.globalAlpha=a;R(x-6,f.y+10,12,2,'rgba(0,0,0,.3)');
 if(k==='f'){ctx.fillStyle=d;ctx.beginPath();ctx.arc(x,y-1,9,Math.PI,0);ctx.fill();R(x-9,y-1,18,9,d);ctx.fillStyle=c;ctx.beginPath();ctx.arc(x,y-1,8,Math.PI,0);ctx.fill();R(x-8,y-1,16,8,c);
  for(let i=0;i<5;i++){const w=Math.sin(tt*6+i)*1.5|0;R(x-9+i*3.6,y+8+w,4,3,d);R(x-8+i*3.6,y+8+w,2,2,c)}
  R(x-5,y-4,4,4,T.eye);R(x+1,y-4,4,4,T.eye);R(x-4,y-3,2,2,K0);R(x+2,y-3,2,2,K0);R(x-3,y+2,6,1,K0);R(x-6,y-7,3,1,sh(c,40));G.push([x,y,18,T.eye,.2])}
 else if(k==='l'){ctx.fillStyle=d;ctx.beginPath();ctx.arc(x,y,9,Math.PI,0);ctx.fill();R(x-9,y,18,5,d);ctx.fillStyle=c;ctx.beginPath();ctx.arc(x,y,8,Math.PI,0);ctx.fill();R(x-8,y,16,4,c);
  for(let i=0;i<4;i++){const w=Math.sin(tt*5+i*1.5)*2|0;R(x-8+i*4.5+w,y+4,3,6,d);R(x-7+i*4.5+w,y+4,1,6,c)}
  R(x-5,y-6,4,2,'rgba(255,255,255,.75)');R(x-4,y-3,3,3,'#0a2a5a');R(x+1,y-3,3,3,'#0a2a5a');R(x-3,y-3,1,1,'#ffffff');R(x+2,y-3,1,1,'#ffffff');G.push([x,y,16,'#7fd0ff',.2])}
 else{for(let i=0;i<8;i++){const q=i*.785+tt*.8;R(x+Math.cos(q)*10-1,y+Math.sin(q)*10-1,3,3,'#6fd36a');R(x+Math.cos(q)*8-1,y+Math.sin(q)*8-1,2,2,'#3f9a4a')}
  ctx.fillStyle=d;ctx.beginPath();ctx.arc(x,y,8.5,0,6.3);ctx.fill();ctx.fillStyle=c;ctx.beginPath();ctx.arc(x,y,7.5,0,6.3);ctx.fill();
  R(x-4,y-4,8,7,'#ffffff');R(x-2,y-3,4,5,K0);R(x-1,y-3,1,1,'#ffffff');R(x-4,y+4,8,1,K0);R(x-6,y-6,3,2,sh(c,45))}
 if(f.ty===1){R(x-2,y-14,4,4,T.eye);R(x-1,y-15,2,1,'#ffffff');G.push([x,y-12,12,T.eye,.5])}ctx.globalAlpha=1}
function btDraw(){const b=S.bt,T=BT[b.k];
 b.ep.forEach(q=>{gl(q.x,q.y,10,T.eye,.8);R(q.x-2,q.y-2,4,4,T.eye);R(q.x-1,q.y-1,2,2,'#ffffff')});
 b.sh.forEach(s=>{gl(s.x,s.y,14,'#7ff6ff',.9);R(s.x-2,s.y-2,4,4,'#ffffff');for(let k=0;k<4;k++){const a=S.t*14+k*1.57;R(s.x+Math.cos(a)*5,s.y+Math.sin(a)*5,1,1,'#ffffff')}});
 S.rg.forEach(q=>{ctx.strokeStyle=q.c;ctx.globalAlpha=Math.max(0,q.l);ctx.lineWidth=2;ctx.beginPath();ctx.arc(q.x,q.y,Math.min(q.r,q.m),0,6.3);ctx.stroke();ctx.globalAlpha=1});
 ctx.fillStyle='#ffffff';ctx.font="7px 'Pixelify Sans',monospace";ctx.textAlign='center';ctx.fillText('Onda '+Math.min(b.wave,T.w.length)+'/'+T.w.length,160,19);for(let i=0;i<3;i++)heart(6+i*9,18,i<b.php?'#ff5a7a':'#40303a');
 if(b.inv>1)R(0,0,320,176,'rgba(255,40,60,.2)');if(b.lose){R(0,0,320,176,'rgba(10,6,24,.6)');ctx.fillStyle='#ffffff';ctx.fillText('Você caiu... tente de novo',160,90)}}
function toDungeon(){S.bt=null;S.mode='bi';S.map=4;S.p.x=24;S.p.y=92;S.p.d=3;S.seen[4]=1;S.boss=initBoss();hud();showHelp(HELP.boss,startFight)}
function initBoss(){return{on:0,hp:8,max:8,php:3,t:0,st:'idle',tm:1.4,pat:0,proj:[],zn:[],sh:[],inv:0,cd:0,flash:0,cast:0,dead:0,dt:0,wx:236,wy:88}}
function startFight(){S.mode='play';S.boss.on=1;$('msg').classList.add('hide');A.s('good')}
const ring=(x,y,c,m)=>S.rg.push({x,y,r:2,l:1,c,m:m||30});
function hurt(){const b=S.boss;if(b.inv>0||b.dead||b.lose)return 0;b.php--;b.inv=1.4;S.shake=.35;A.s('bad');burst(S.p.x,S.p.y-8);if(b.php<=0){b.lose=1;b.lt=0;b.proj=[];b.zn=[]}return 1}
function castShot(){const b=S.boss,p=S.p;if(b.cd>0||b.dead||b.lose)return;b.cd=.55;p.act=.35;p.d=3;const sx=p.x+8,sy=p.y-18,a=Math.atan2(b.wy-6-sy,b.wx-sx);b.sh.push({x:sx,y:sy,vx:Math.cos(a)*170,vy:Math.sin(a)*170,l:2});ring(sx,sy,'#7ff6ff',16);A.s('blip')}
function bossUpdate(dt){const b=S.boss,p=S.p,ox=b.wx-9,oy=b.wy-12;b.t+=dt;b.cd-=dt;b.inv-=dt;b.flash-=dt;b.cast-=dt;b.wy=88+Math.sin(b.t*2)*4;
 S.rg.forEach(q=>{q.r+=70*dt;q.l-=2.2*dt});S.rg=S.rg.filter(q=>q.l>0);
 if(b.dead){b.dt+=dt;if(b.dt<1.2&&Math.random()<.45){ring(b.wx+Math.random()*30-15,b.wy-10+Math.random()*30-15,'#ffb347',22);burst(b.wx,b.wy-8);S.shake=.2}
  if(!b.fl&&b.dt>1.2){b.fl=1;S.shake=.8;ring(b.wx,b.wy-8,'#ffffff',90);ring(b.wx,b.wy-8,'#c47bff',60);for(let k=0;k<30;k++)S.pa.push({x:b.wx,y:b.wy-8,vx:(Math.random()-.5)*120,vy:-Math.random()*80,l:1.4,c:['#ff4a5a','#c47bff','#ffffff'][k%3]})}
  if(b.dt>2.8){b.on=0;b.gone=1;M().o.find(x=>x.t==='cage').open=1;say("O bruxo foi destruído! Liberte o Raul.",6);A.s('win')}return}
 if(b.lose){b.lt+=dt;if(b.lt>1.6){S.boss=initBoss();S.boss.on=1;p.x=24;p.y=92;say("Tente de novo! Desvie e acerte o bruxo.",3)}return}
 p.x=Math.min(p.x,186);
 b.sh.forEach(s=>{s.x+=s.vx*dt;s.y+=s.vy*dt;s.l-=dt;S.pa.push({x:s.x,y:s.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,l:.35,c:Math.random()<.5?'#7ff6ff':'#ffffff'});
  if(!b.dead&&Math.hypot(s.x-b.wx,s.y-(b.wy-6))<13){s.l=0;b.hp--;b.flash=.25;S.shake=.3;ring(s.x,s.y,'#7ff6ff',34);burst(s.x,s.y);A.s('good');if(b.hp<=0){b.dead=1;b.dt=0;b.proj=[];b.zn=[];A.s('win')}}});
 b.sh=b.sh.filter(s=>s.l>0);if(b.dead)return;
 if(b.st==='charge'&&Math.random()<.8){const a=Math.random()*6.3;S.pa.push({x:ox+Math.cos(a)*20,y:oy+Math.sin(a)*20,vx:-Math.cos(a)*55,vy:-Math.sin(a)*55,l:.35,c:'#ff6ec7'})}
 b.tm-=dt;
 if(b.st==='idle'&&b.tm<=0){b.pat=(b.pat+1)%3;b.st='charge';b.tm=.95;b.aim={x:p.x,y:p.y-8};if(b.pat===2)for(let k=0;k<3;k++)b.zn.push({x:Math.max(30,Math.min(190,p.x+(k-1)*38+(Math.random()-.5)*20)),y:Math.max(30,Math.min(150,p.y-4+(Math.random()-.5)*50)),t:0,d:1.1,r:17})}
 else if(b.st==='charge'&&b.tm<=0){b.st='idle';b.cast=.4;b.tm=Math.max(.8,2-(8-b.hp)*.13);const sp=62+(8-b.hp)*5;
  if(b.pat===0){const n=b.hp<=4?3:1;for(let k=0;k<n;k++){const a=Math.atan2(b.aim.y-oy,b.aim.x-ox)+(k-(n-1)/2)*.32;b.proj.push({x:ox,y:oy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,r:7,t:'f'})}}
  else if(b.pat===1){const n=b.hp<=4?14:10;for(let k=0;k<n;k++){const a=k/n*6.283+b.t;b.proj.push({x:ox,y:oy,vx:Math.cos(a)*(46+(8-b.hp)*3),vy:Math.sin(a)*(46+(8-b.hp)*3),r:3,t:'o'})}}
  ring(ox,oy,'#ff6ec7',28)}
 b.proj.forEach(q=>{q.x+=q.vx*dt;q.y+=q.vy*dt;S.pa.push({x:q.x,y:q.y,vx:0,vy:-8,l:.4,c:q.t==='f'?'#ff9a3c':'#c47bff'});if(Math.hypot(q.x-p.x,q.y-(p.y-6))<q.r+4&&hurt())q.dead=1});
 b.proj=b.proj.filter(q=>q.x>-10&&q.x<330&&q.y>-10&&q.y<186&&!q.dead);
 b.zn.forEach(z=>{z.t+=dt;if(z.t>=z.d&&!z.e){z.e=1;S.shake=.35;ring(z.x,z.y,'#ffffff',34);burst(z.x,z.y-10);if(Math.hypot(p.x-z.x,p.y-6-z.y)<z.r)hurt()}});
 b.zn=b.zn.filter(z=>z.t<z.d+.4)}
function bossDraw(){const b=S.boss;
 b.zn.forEach(z=>{const k=Math.min(1,z.t/z.d);if(!z.e){ctx.strokeStyle=`rgba(255,70,90,${.5+.4*Math.sin(S.t*20)})`;ctx.lineWidth=1;ctx.beginPath();ctx.arc(z.x,z.y,z.r,0,6.3);ctx.stroke();ctx.fillStyle=`rgba(255,60,80,${.1+.25*k})`;ctx.beginPath();ctx.arc(z.x,z.y,z.r*k,0,6.3);ctx.fill()}else{const a=Math.max(0,1-(z.t-z.d)/.4);ctx.globalAlpha=a;R(z.x-3,z.y-70,6,70,'#ffffff');R(z.x-1,z.y-70,2,70,'#9ff6ff');ctx.globalAlpha=1;gl(z.x,z.y,z.r*1.6,'#ffffff',.8*a)}});
 if(b.st==='charge'&&b.pat===0&&b.aim){ctx.strokeStyle='rgba(255,120,80,.45)';ctx.lineWidth=1;ctx.setLineDash([3,3]);ctx.beginPath();ctx.moveTo(b.wx-9,b.wy-12);ctx.lineTo(b.aim.x,b.aim.y);ctx.stroke();ctx.setLineDash([])}
 if(b.st==='charge')gl(b.wx-9,b.wy-12,12+20*(1-b.tm/.95),'#ff6ec7',.8);
 b.proj.forEach(q=>{gl(q.x,q.y,q.r*3,q.t==='f'?'#ff5a2a':'#c47bff',.8);ctx.fillStyle=q.t==='f'?'#ffcf6a':'#ead0ff';ctx.beginPath();ctx.arc(q.x,q.y,q.r*.7,0,6.3);ctx.fill();if(q.t==='f')for(let k=0;k<5;k++){const a=S.t*10+k*1.26;R(q.x+Math.cos(a)*q.r,q.y+Math.sin(a)*q.r,2,2,'#ff7a2a')}});
 b.sh.forEach(s=>{gl(s.x,s.y,16,'#7ff6ff',.9);R(s.x-2,s.y-2,4,4,'#ffffff');for(let k=0;k<4;k++){const a=S.t*14+k*1.57;R(s.x+Math.cos(a)*5,s.y+Math.sin(a)*5,1,1,'#ffffff')}});
 S.rg.forEach(q=>{ctx.strokeStyle=q.c;ctx.globalAlpha=Math.max(0,q.l);ctx.lineWidth=2;ctx.beginPath();ctx.arc(q.x,q.y,Math.min(q.r,q.m),0,6.3);ctx.stroke();ctx.globalAlpha=1});
 if(b.on){ctx.fillStyle='#ffffff';ctx.font="7px 'Pixelify Sans',monospace";ctx.textAlign='center';if(!b.gone){ctx.fillText('BRUXO',160,19);R(100,21,120,5,'#14101c');R(101,22,118*Math.max(0,b.hp)/b.max,3,'#b0222e');R(100,21,120,1,'#5a4a70')}
  for(let i=0;i<3;i++)heart(6+i*9,18,i<b.php?'#ff5a7a':'#40303a')}
 if(b.inv>1.1)R(0,0,320,176,'rgba(255,40,60,.22)');
 if(b.lose){R(0,0,320,176,'rgba(10,6,24,.6)');ctx.fillStyle='#ffffff';ctx.textAlign='center';ctx.fillText('Você caiu... tente de novo',160,90)}
 if(b.dead&&b.dt>1.2&&b.dt<1.6)R(0,0,320,176,`rgba(255,255,255,${(1.6-b.dt)/.4*.8})`)}

function pickMenu(){S.mode='pick';$('pick').classList.remove('hide');$('pq').textContent=RAUL_DONE?'Raul precisa da sua ajuda':'Quem vai jogar?';$('pr').classList.toggle('hide',!!RAUL_DONE);$('pl').disabled=!RAUL_DONE;$('pr').innerHTML='Raul<small>Começar a história</small>';$('pl').innerHTML='Luísa<small>'+(RAUL_DONE?'Salvar o Raul':'Bloqueada')+'</small>'}
function wizGrid(cast){
 const W=24,Hn=36,g=Array.from({length:Hn},()=>Array(W).fill(null));
 const E=(cx,cy,rx,ry)=>(x,y)=>((x-cx)/rx)**2+((y-cy)/ry)**2<=1;
 const Rc=(a,b,e,h)=>(x,y)=>x>=a&&x<=e&&y>=b&&y<=h;
 const put=(m,col,id,ok)=>{for(let y=0;y<32;y++)for(let x=0;x<22;x++)if(m(x,y)&&(!ok||ok(x,y)))g[y+1][x+1]={col,id}};
 const C='#1d1730',C2='#2c2342',Rd='#b0222e',Gd='#e8c872',SK='#d9d0e4';
 const cl=(x,y)=>y>=9&&y<=31&&Math.abs(x-11)<=4.5+(y-9)*.38,hem=(x,y)=>!(y>=28&&((x*3+y)%5<2));
 put(cl,C,'c',hem);
 put(cl,Rd,'s',(x,y)=>hem(x,y)&&y>=15&&(x+20)%4===0);
 put(cl,C2,'c',(x,y)=>hem(x,y)&&y>=15&&(x+20)%4===2);
 put(Rc(3,30,18,31),Rd,'s',(x,y)=>hem(x,y)&&Math.abs(x-11)<=4.5+22*.38);
 put(E(11,12.5,8.5,3.4),C2,'m');put(E(11,12.5,8.5,3.4),Rd,'s',(x,y)=>y>=15);
 put(Rc(10,14,11,15),Gd,'j');
 put(E(11,7,6,6.3),C,'c');put((x,y)=>y<=3&&Math.abs(x-11)<=(y+1)*1.1,C,'c');
 put(E(11,8.5,3.9,4),'#050309','v');
 put(Rc(9,8,10,9),'#ff3b3b','e');put(Rc(12,8,13,9),'#ff3b3b','e');put(Rc(9,8,9,8),'#ffe0e0','e');put(Rc(13,8,13,8),'#ffe0e0','e');
 put(Rc(1,6,1,31),'#5a3a22','w');put(Rc(1,13,1,13),Gd,'j');put(Rc(1,21,1,21),Gd,'j');
 const oy=cast?2:5;put(E(1.5,oy,2.8,2.8),'#c47bff','o');put(Rc(1,oy-1,1,oy-1),'#ffffff','e');
 put((x,y)=>y>=13&&y<=19&&x>=2&&x<=9&&Math.abs(y-(13+(9-x)*.5))<=2.3,C2,'c');put(Rc(1,16,2,17),SK,'k');
 if(cast){put(Rc(17,9,19,17),C2,'c');put(Rc(17,6,19,8),SK,'k')}else{put(Rc(17,14,19,24),C2,'c');put(Rc(17,25,19,26),SK,'k')}
 const NS=new Set(['e','v','j']),out=Array.from({length:Hn},()=>Array(W).fill(null));
 for(let y=0;y<Hn;y++)for(let x=0;x<W;x++){const a=g[y][x];if(!a)continue;let col=a.col;if(!NS.has(a.id)){const b=g[y+1]&&g[y+1][x];if(!b||(b.id!==a.id&&!NS.has(b.id)))col=sh(col,-22)}out[y][x]=col}
 for(let y=0;y<Hn;y++)for(let x=0;x<W;x++)if(!g[y][x])for(const[dx,dy]of[[0,1],[0,-1],[1,0],[-1,0]]){const n=g[y+dy]&&g[y+dy][x+dx];if(n){out[y][x]=sh(out[y+dy][x+dx],-90);break}}
 return out}
const WS={};
function wizard(x,y,t,cast){const k=cast?1:0;let cv=WS[k];if(!cv){const g=wizGrid(k);cv=WS[k]=document.createElement('canvas');cv.width=24;cv.height=36;const q=cv.getContext('2d');g.forEach((r,yy)=>r.forEach((col,xx)=>{if(col){q.fillStyle=col;q.fillRect(xx,yy,1,1)}}))}
 ctx.drawImage(cv,x-3,y-4);gl(x+1,y+(cast?-1:2),cast?26:16,'#c47bff',.55+.2*Math.sin(t*5))}
function sWiz(t,i){const u=t-S.lt;lg('#0e0b24','#3a2a6a');R(0,128,320,48,'#1d3330');for(let k=0;k<20;k++)if(Math.sin(t*2+k*3)>-.3)R((k*61)%320,(k*23)%90,1,1,'#ffffff');
 R(250,22,16,16,'#f6f0d0');gl(258,30,44,'#f6f0d0',.3);[[24,64],[286,80]].forEach(([x,y])=>{R(x,y+30,6,34,'#0b1a16');R(x-12,y,30,34,'#0f2a22')});
 const wx=i===0?Math.max(214,330-u*45):214;if(i>=1){for(let k=0;k<15;k++){const px=wx-4-k*(wx-128)/14;R(px,104+Math.sin(u*10+k)*5,3,2,k%2?'#ff4a5a':'#c47bff')}gl(wx-4,104,26,'#ff4a5a',.5)}
 wizard(wx,100,t,i>=1);const a=i<2?1:Math.max(0,1-u/1.4);ctx.globalAlpha=a;person(112,106,PC.raul,0);ctx.globalAlpha=1;
 if(i>=2){R(0,0,320,176,`rgba(255,80,100,${Math.max(0,.6-u/1.2)})`);for(let k=0;k<12;k++)R(118+Math.sin(u*3+k)*10,126-((u*40+k*11)%70),2,2,k%2?'#ff4a5a':'#c47bff')}}
const CUTS=[
{s:(t,i)=>sBench(t,i,0),l:["Capítulo 1 — O banquinho\nSaímos pra praça, no centro de Guarapuava. Um banquinho e muita conversa fiada.","“Esse cara é doidinho.”","“Mas parece se interessar por mim.”"]},
{s:sMall,l:["Capítulo 2 — O shopping\nEle me arrastou pro shopping com a maior cara de pau.","“Esse maluco ri de tudo... e eu rio junto.”"]},
{s:sTV,l:["Capítulo 3 — A maratona\nHarry Potter, cobertor e pipoca. Ele comenta cada cena como se fosse especialista.","“Será que ele vale a pena? Vamos vendo.”"]},
{s:(t,i)=>sBench(t,i,1),l:["Capítulo 4 — O sumiço\nDo nada, {o} sumiu. No banquinho, só um bilhete brilhando.","{El} deixou pistas por aí. Vá encontrá-{lo}.{b}"]},
{s:sEnd,l:["Capítulo 5 — Final feliz\nCom a varinha e o manto de mago, você quebrou o feitiço do bruxo.","{o} saiu da gaiola e correu até você, no jardim que voltou a florescer.","— Demorou pra me achar. Brincadeira. Que bom que você veio.","E assim começa o próximo capítulo. Um pequeno algo, com um grande significado."]},
{s:(t,i)=>sBench(t,i,0),l:["Capítulo 1 — O banquinho\nChamei a Luísa pra praça, no centro de Guarapuava. Um banquinho e a gente jogando conversa fora.","O jeito dela de rir faz qualquer tarde parecer especial.","Pensei, sem dizer nada: “espero que a gente dê muito certo.”"]},
{s:sMall,l:["Capítulo 2 — O shopping\nNo shopping, ela transforma qualquer corredor em aventura. Eu só acompanhava, sorrindo atrás das sacolas.","Fingia olhar as vitrines. Na verdade, olhava ela."]},
{s:sTV,l:["Capítulo 3 — A maratona\nCobertor, pipoca e Harry Potter. Ela sabia cada cena de cor, e eu aprendi cada careta dela.","Foi ali que a madrugada virou meu horário preferido."]},
{s:sWiz,l:["Capítulo 4 — A sombra\nNaquela noite, alguém observava de longe: um bruxo de capa preta com listras vermelhas.","Ele ergueu o cajado e lançou uma magia na minha direção.","Uma luz vermelha me envolveu, e eu desapareci."]}];
const cutTxt=()=>{S.lt=S.ct;const m=$('msg');m.textContent=fmt(CUTS[S.ci].l[S.li])+'  ▸';m.classList.remove('hide');S.msg=999};
function startCut(i){S.mode='cut';S.ci=i;S.li=0;S.ct=0;$('hud').classList.add('hide');cutTxt()}
function nextCut(){A.s('blip');if(++S.li<CUTS[S.ci].l.length)return cutTxt();const i=S.ci;if(i<3||(i>=5&&i<8))startCut(i+1);else if(i===8){RAUL_DONE=1;$('msg').classList.add('hide');pickMenu()}else if(i===3){S.mode='play';S.seen[0]=1;$('hud').classList.remove('hide');showHelp(HELP.game,()=>say(M().intro,4))}else{$('msg').classList.add('hide');showLetter()}}
function drawPick(){const t=S.ct,hv=S.hv||(RAUL_DONE?'luisa':'raul');ctx.save();ctx.clearRect(0,0,320,176);lg('#0f0a2a','#6a3a8a');
 for(let k=0;k<46;k++)if(Math.sin(t*2+k*3)>-.3)R((k*53)%320,(k*31)%96,k%7?1:2,k%7?1:2,'#ffffff');
 gl(252,34,70,'#bfb4ff',.35);R(242,24,20,20,'#f6f0d0');R(246,28,6,6,'#e2dcc0');R(254,36,4,4,'#e2dcc0');
 ctx.fillStyle='#1d1640';ctx.beginPath();ctx.moveTo(0,176);for(let x=0;x<=320;x+=16)ctx.lineTo(x,112+Math.sin(x*.045)*9);ctx.lineTo(320,176);ctx.fill();
 ctx.fillStyle='#172f3a';ctx.beginPath();ctx.moveTo(0,176);for(let x=0;x<=320;x+=16)ctx.lineTo(x,122+Math.sin(x*.07+2)*6);ctx.lineTo(320,176);ctx.fill();
 R(0,132,320,44,'#244a3a');R(0,132,320,2,'#3a6a4a');for(let k=0;k<40;k++){const x=(k*47)%316,y=138+(k*29)%34;R(x,y,1,3,k%2?'#3f7a50':'#2e5a40');R(x+1,y+1,1,2,'#4a8a5a')}
 [['raul',100],['luisa',220]].forEach(([k,x])=>{const on=k===hv,lock=k==='luisa'&&!RAUL_DONE;
  ctx.fillStyle='rgba(0,0,0,.38)';ctx.beginPath();ctx.ellipse(x,136,31,7,0,0,6.3);ctx.fill();
  if(on&&!lock){gl(x,136,58,'#f2c46d',.4);gl(x,100,46,'#c47bff',.22);ctx.strokeStyle='#f2c46d';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(x,136,31,7,0,0,6.3);ctx.stroke();for(let i=0;i<10;i++){const a=t*1.2+i*.628;R(x+Math.cos(a)*31,136+Math.sin(a)*7,2,1,'#ffe9a8')}}
  if(k==='raul'&&RAUL_DONE){for(let j=0;j<10;j++)R(x+Math.sin(t*2+j)*14,128-((t*20+j*13)%80),2,2,j%2?'#c47bff':'#ff4a5a');return}
  ctx.save();ctx.globalAlpha=lock?.35:1;ctx.translate(x-18,71+Math.sin(t*3+x)*1.5-(on&&!lock?3:0));ctx.scale(3,3);person(0,0,CFG.chars[k],0);ctx.restore();
  if(lock){R(x-6,56,12,10,'#f2c46d');R(x-6,56,12,2,'#ffe9a8');R(x-1,60,2,4,'#3a2a10');ctx.strokeStyle='#f2c46d';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,56,4,Math.PI,0);ctx.stroke()}});
 for(let k=0;k<16;k++)R((k*37+t*6)%320,170-((t*14+k*23)%150),1,1,'#ffe9a8');
 ctx.restore()}

function drawCut(){ctx.save();ctx.clearRect(0,0,320,176);CUTS[S.ci].s(S.ct,S.li);const v=ctx.createRadialGradient(160,88,60,160,88,200);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(5,3,15,.5)');ctx.fillStyle=v;ctx.fillRect(0,0,320,176);ctx.restore()}
/* ===== ENTRADA E UI ===== */
const keymap={ArrowUp:'up',w:'up',W:'up',ArrowDown:'down',s:'down',S:'down',ArrowLeft:'left',a:'left',A:'left',ArrowRight:'right',d:'right',D:'right'};
function act(){if(S.paused)return;if(S.mode==='cut')return nextCut();if(S.mode==='help'){closeHelp();return}if(S.mode==='bi'){startFight();return}if(S.mode==='play'&&S.boss&&S.boss.on){castShot();return}if(S.mode==='play'&&S.bt&&S.bt.on){btShot();return}if(S.mode==='play'&&!S.fade){const o=near();if(o)use(o);else if(S.mount){S.mount=0;M().o.push({t:'rab',x:S.p.x>>4,y:(S.p.y-2)>>4});A.s('blip')}else $('msg').classList.add('hide')}}
function pause(v){if(S.mode==='title'||S.mode==='fin')return;S.paused=v;$('pause').classList.toggle('hide',!v);Object.keys(K).forEach(k=>K[k]=0)}
addEventListener('keydown',e=>{const k=keymap[e.key];if(k){K[k]=1;e.preventDefault()}else if(e.key==='e'||e.key==='E'||e.key===' '){if(!e.repeat)act();e.preventDefault()}else if(e.key==='m'||e.key==='M')toggleMount();else if(e.key==='Escape'||e.key==='p')pause(!S.paused)});
addEventListener('keyup',e=>{const k=keymap[e.key];if(k)K[k]=0});
document.querySelectorAll('[data-k]').forEach(b=>{const k=b.dataset.k;b.addEventListener('pointerdown',e=>{e.preventDefault();if(k==='act')act();else if(k==='mount')toggleMount();else K[k]=1});['pointerup','pointerleave','pointercancel'].forEach(t=>b.addEventListener(t,()=>{if(k!=='act')K[k]=0}))});
$('go').onclick=()=>{A.init();$('title').classList.add('hide');pickMenu()};document.querySelectorAll('#pick button').forEach(b=>{b.onmouseenter=b.onfocus=b.ontouchstart=()=>S.hv=b.dataset.w;b.onmouseleave=b.onblur=()=>S.hv=null;b.onclick=()=>{WHO=b.dataset.w;$('pick').classList.add('hide');startCut(WHO==='raul'?5:0)}});$('stage').addEventListener('pointerdown',()=>{if(S.mode==='cut')act()});
$('pb').onclick=()=>pause(1);$('rs').onclick=()=>pause(0);
$('cm').onchange=e=>{A.m=e.target.checked?1:0;A.set()};$('cf').onchange=e=>{A.f=e.target.checked?1:0;A.set()};$('vl').oninput=e=>{A.v=e.target.value/100;A.set()};
const reset=()=>{['pause','pz','letter','final','msg','hud','pick'].forEach(i=>$(i).classList.add('hide'));$('title').classList.remove('hide');init()};
$('rt').onclick=reset;$('again').onclick=()=>{RAUL_DONE=0;reset()};
function fit(){const t=matchMedia('(pointer:coarse)').matches;document.body.classList.toggle('touch',t);const r=Math.min(innerWidth/320,innerHeight/176),s=(t||r<2)?r:Math.floor(r),st=$('stage');st.style.width=320*s+'px';st.style.height=176*s+'px';st.style.setProperty('--u',s)}
addEventListener('resize',fit);fit();
let last=0;function loop(ts){const dt=Math.min((ts-last)/1000||0,.05);last=ts;if(!S.paused)update(dt);draw();requestAnimationFrame(loop)}
init();requestAnimationFrame(loop);
})();
