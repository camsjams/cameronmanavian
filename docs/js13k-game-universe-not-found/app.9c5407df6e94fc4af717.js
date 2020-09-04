!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.probes=t.ships=t.GAME_STATE=t.PADDING=t.HEIGHT_WITH_GAP=t.WIDTH_WITH_GAP=t.HEIGHT=t.WIDTH=t.GAME_HEIGHT=t.GAME_WIDTH=t.FUEL_AMOUNT=t.FONT_SIZE=t.MOON_GATE_SIZE=t.DOOR_SIZE=t.PROBE_SIZE=t.SHIP_SIZE=void 0,t.SHIP_SIZE=10,t.PROBE_SIZE=5,t.DOOR_SIZE=25,t.MOON_GATE_SIZE=40,t.FONT_SIZE=20,t.FUEL_AMOUNT=1e3,t.GAME_WIDTH=1080,t.GAME_HEIGHT=612,t.WIDTH=250,t.HEIGHT=275,t.WIDTH_WITH_GAP=t.WIDTH+15,t.HEIGHT_WITH_GAP=t.HEIGHT+35,t.PADDING=10,t.GAME_STATE={NORMAL:0,DESTROYED:1,ENTERED_MOON_GATE:2,FUEL_EMPTY:3},t.ships=[[t.PADDING,5],[t.PADDING,50],[t.PADDING,95]],t.probes=[[t.ships[0][0]+t.SHIP_SIZE,t.ships[0][1]],[t.ships[1][0]+t.SHIP_SIZE,t.ships[1][1]],[t.ships[2][0]+t.SHIP_SIZE,t.ships[2][1]]]},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.checkCollisions=void 0;const i=n(0),r=o(n(2));t.checkCollisions=(e,t)=>{let n=void 0;return e.doors.forEach(o=>{r.default([t[0],t[1]],t[2],[e.x+o[0],e.y+o[1]],i.DOOR_SIZE)&&(n=o,-1===o[2]&&(o[3]=!0))}),n},t.render=function(e,t){t.doors.forEach(n=>{n[3]?e.fillStyle="crimson":e.fillStyle="darkviolet",e.fillRect(t.x+n[0],t.y+n[1],i.DOOR_SIZE/2,i.DOOR_SIZE)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,n,o)=>{return i=e[0],r=e[1],l=e[0]+t,s=e[1]+t,c=n[0],a=n[1],u=n[0]+o,f=n[1]+o,!(l<=c||i>u||s<=a||r>f);var i,r,l,s,c,a,u,f}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.checkCollisions=void 0;const i=n(0),r=o(n(2)),l=["255,0,0","255,127,0","255,255,0","127,255,0","0,255,0","0,255,127","0,255,255","0,127,255","0,0,255","127,0,255","255,0,255","255,0,127"],s=l.length,c=()=>l[(new Date).getSeconds()%s],a=e=>[e.x+i.WIDTH/2,e.y+i.HEIGHT/2];t.checkCollisions=(e,t)=>{if(e.doors.length)return!1;const n=a(e);return r.default([t[0],t[1]],t[2],[n[0]-i.MOON_GATE_SIZE,n[1]-i.MOON_GATE_SIZE],2*i.MOON_GATE_SIZE)},t.render=function(e,t){const n=a(t);e.beginPath(),e.arc(n[0],n[1],i.MOON_GATE_SIZE,-4,1),e.fillStyle=`rgb(${c()})`,e.fill(),e.fillStyle="#333",e.fillRect(n[0]-i.MOON_GATE_SIZE-10,n[1]+i.MOON_GATE_SIZE-10,100,7)}},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const l=n(6),s=r(n(8)),c=n(9),a=n(1),u=n(3),f=n(11),I=n(12),d=n(13),D=n(14),T=n(0);let p=0,_=T.FUEL_AMOUNT;const y=document.getElementById("s"),H=document.getElementById("t"),G=document.getElementById("m"),h=document.getElementById("l"),E=document.getElementById("g"),A=document.createElement("canvas");E.appendChild(A),A.width=T.GAME_WIDTH,A.height=T.GAME_HEIGHT;const v=A.getContext("2d"),P=(e,t)=>{h.prepend(`[${t?"??:??:?? ::":(new Date).toLocaleTimeString()}]: ${e}\n`)};const m=e=>T.FUEL_AMOUNT*Math.max(1,e-1);function W(e,t,n){const o=a.checkCollisions(t,e);if(o){if(!(o[2]>-1))return _=m(n),c.play404(),l.destroyActivePlayer(),T.GAME_STATE.DESTROYED;{const t=l.goToUniverse(o[2]);t&&(c.playWarp(),function(e,t){e[0]=t.x+0,e[1]=t.y+T.HEIGHT/2,t.doors.length||P("A Moon Gate! Should we enter it?")}(e,t))}}return T.GAME_STATE.NORMAL}function N(e,t,n,o){const i=s.default(e);t[0]+=i[0],t[1]+=i[1],function(e,t){const n=t.x+T.WIDTH-T.PROBE_SIZE,o=t.y+T.HEIGHT-T.PROBE_SIZE;e[0]<t.x?e[0]=t.x:e[0]>n&&(e[0]=n),e[1]<t.y?e[1]=t.y:e[1]>o&&(e[1]=o)}(t,n);const r=W(t,n,o);if(u.checkCollisions(n,t))return function(e,t){c.playEnterGate(),l.goToNextLevel(),P("Moon Gate Entered."),P("----",!0),P(`We have entered into a new Mother Universe: Mμ${t+1}.`,!0),P("Calibrated sensors to new time vortex."),_=m(t+1),e[0]=T.WIDTH/2,e[1]=T.HEIGHT/2}(t,o),2;const a=function(e,t){return _-=.5*(Math.abs(e[0])+Math.abs(e[1])),_<0?(P("Fuel Supply Empty."),P("Vessel Lost."),P("---"),_=m(t),c.playNoFuel(),l.destroyActivePlayer(),T.GAME_STATE.FUEL_EMPTY):T.GAME_STATE.NORMAL}(i,o);return a!==T.GAME_STATE.NORMAL?a:r}const S=(e,t)=>{e!==t.innerHTML&&(t.innerHTML=e)};function b(e){p=e,requestAnimationFrame(M)}function M(){const e=Date.now(),t=(e-p)/1e3,n=l.getContext();return v.clearRect(0,0,A.width,A.height),3===n.levelNum&&void 0===n.universe?(c.playGameWin(),void f.render(v,T.ships.length>2)):function(e,t){let n=0;return t.player&&t.universe&&(_-=.25*e,n=N(e,t.player,t.universe,t.levelNum)),S("<b>Fuel:</b> "+~~_,H),S("<b>Survivors:</b> "+100*T.ships.length,y),S(`<b>Status:</b>\n\t\tExploring <i>Level ${t.levelNum}</i> |\n\t\t ${T.ships.length} <i>ships left</i> | ${T.probes.length} <i>probes left</i>`,G),n===T.GAME_STATE.DESTROYED&&(P("Warning - ERC#+404-0-404: Universe Not Found!"),P("Vessel Lost."),P("---")),n}(t,n)!==T.GAME_STATE.NORMAL?(b(e),void v.clearRect(0,0,A.width,A.height)):n.player?(function(e){e.level&&(D.render(v,e.level),I.render(v,T.ships),d.render(v,T.probes)),e.player&&s.render(v,e.player)}(n),void b(e)):(S('<div class="over">\n\t\t<h2>Game Over</h2>\n\t\t<p>Refresh reality (...the page) to Retry</p>\n\t\t</div>',E),void c.playGameLoss())}_=T.FUEL_AMOUNT,l.reset(),c.playBgm(),p=Date.now(),M()},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.goToNextLevel=t.destroyActivePlayer=t.goToUniverse=t.reset=t.getContext=void 0;const i=n(0),r=o(n(7));let l=void 0,s=void 0,c=void 0,a=1;const u=()=>{const e=r.default.shift();return a=3-r.default.length,e};t.getContext=()=>(l||(l=(()=>{const e=i.probes.pop();if(e)return[e[0],e[1],i.PROBE_SIZE,"rgba(0,255,0,0.5)"];const t=i.ships.pop();return t?[t[0],t[1],i.SHIP_SIZE,"rgba(34,100,140,0.9)"]:void 0})()),s||(s=u(),c=c||(s?s[0]:void 0)),{player:l,level:s,levelNum:a,universe:c}),t.reset=()=>{l=void 0,s=void 0,c=void 0},t.goToUniverse=e=>{if(s&&s[e])return s[e].active=!0,c=s[e],c},t.destroyActivePlayer=()=>{s&&(s=s.map((e,t)=>(0!==t&&(e.active=!1),e)),c=s[0]),l=void 0},t.goToNextLevel=()=>{s=u(),c=s?s[0]:void 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),i=[[{x:0,y:0,name:"Π",active:!0,doors:[[o.WIDTH-o.PADDING,o.PADDING,2],[o.WIDTH-o.PADDING,200,-1]]},{x:o.WIDTH_WITH_GAP,y:0,name:"Ρ",doors:[[o.WIDTH-o.PADDING,o.HEIGHT/2,5],[o.PADDING/3,100,-1]]},{x:2*o.WIDTH_WITH_GAP,y:0,name:"Σ",doors:[[-o.PADDING/2,o.PADDING+o.PADDING,-1],[o.WIDTH-o.PADDING,.7*o.HEIGHT,4]]},{x:0,y:o.HEIGHT_WITH_GAP,name:"Τ",doors:[[o.WIDTH-o.PADDING,o.PADDING,1],[o.WIDTH-o.PADDING,200,-1]]},{x:o.WIDTH_WITH_GAP,y:o.HEIGHT_WITH_GAP,name:"Υ",doors:[[o.WIDTH-o.PADDING,.45*o.HEIGHT,-1],[o.PADDING,.7*o.HEIGHT,3]]},{x:2*o.WIDTH_WITH_GAP,y:o.HEIGHT_WITH_GAP,name:"Φ",doors:[]}],[{x:0,y:0,name:"ΰ",active:!0,doors:[[o.WIDTH-o.PADDING,o.PADDING,-1],[o.WIDTH-o.PADDING,200,4],[0,170,4]]},{x:o.WIDTH_WITH_GAP,y:0,name:"α",doors:[]},{x:2*o.WIDTH_WITH_GAP,y:0,name:"β",doors:[[145,.75*o.HEIGHT,1]]},{x:3*o.WIDTH_WITH_GAP,y:0,name:"γ",doors:[[o.PADDING+o.PADDING,o.PADDING+o.PADDING,-1],[o.WIDTH-o.PADDING,.8*o.HEIGHT,5]]},{x:0,y:o.HEIGHT_WITH_GAP,name:"η",doors:[[o.WIDTH-o.PADDING,10,-1],[o.WIDTH-o.PADDING,50,3],[o.WIDTH-o.PADDING,100,-1],[o.WIDTH-o.PADDING,200,-1]]},{x:o.WIDTH_WITH_GAP,y:o.HEIGHT_WITH_GAP,name:"δ",doors:[[o.WIDTH-o.PADDING,.66*o.HEIGHT,-1],[123,200,6]]},{x:2*o.WIDTH_WITH_GAP,y:o.HEIGHT_WITH_GAP,name:"ζ",doors:[[o.PADDING+o.PADDING,o.PADDING+o.PADDING,7],[o.WIDTH-o.PADDING,.1*o.HEIGHT,-1]]},{x:3*o.WIDTH_WITH_GAP,y:o.HEIGHT_WITH_GAP,name:"ε",doors:[[o.WIDTH-o.PADDING,50,-1],[o.WIDTH-o.PADDING,150,2]]}],[{x:0,y:0,name:"ΰπ",active:!0,doors:[[o.WIDTH-o.PADDING,o.PADDING,-1],[0,.9*o.HEIGHT,4]]},{x:o.WIDTH_WITH_GAP,y:0,name:"π",doors:[[o.WIDTH-o.PADDING,0,6],[o.WIDTH-o.PADDING,30,-1],[o.WIDTH-o.PADDING,70,3],[o.WIDTH-o.PADDING,100,0],[o.WIDTH-o.PADDING,200,-1]]},{x:2*o.WIDTH_WITH_GAP,y:0,name:"σ",doors:[[o.PADDING+o.PADDING,o.PADDING+o.PADDING,-1],[o.WIDTH-o.PADDING,.8*o.HEIGHT,1]]},{x:3*o.WIDTH_WITH_GAP,y:0,name:"ς",doors:[[o.WIDTH-o.PADDING,.15*o.HEIGHT,2]]},{x:0,y:o.HEIGHT_WITH_GAP,name:"τ",doors:[[0,200,3],[o.WIDTH-o.PADDING,200,-1]]},{x:o.WIDTH_WITH_GAP,y:o.HEIGHT_WITH_GAP,name:"υ",doors:[]},{x:2*o.WIDTH_WITH_GAP,y:o.HEIGHT_WITH_GAP,name:"ζυυ",doors:[[25,0,-1],[o.WIDTH-o.PADDING,.1*o.HEIGHT,7]]},{x:3*o.WIDTH_WITH_GAP,y:o.HEIGHT_WITH_GAP,name:"φ",doors:[[156,50,-1],[186,50,2],[216,50,5]]}]];t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;let o={};document.addEventListener("keydown",e=>{o[e.key]=1}),document.addEventListener("keyup",e=>{o[e.key]=0}),window.addEventListener("blur",()=>{o={}}),t.render=function(e,t){e.fillStyle=t[3],e.fillRect(t[0],t[1],t[2],t[2])},t.default=e=>{const t=[0,0];return o.s&&(t[1]+=120*e),o.w&&(t[1]-=120*e),o.a&&(t[0]-=120*e),o.d&&(t[0]+=120*e),t}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.playBgm=t.playGameLoss=t.playGameWin=t.playEnterGate=t.playNoFuel=t.play404=t.playWarp=void 0;const i=o(n(10)),r=new AudioContext,l=new i.default.Sequence(r,300,["G4 s","D4 s","F4 s"]);l.loop=!1,t.playWarp=()=>{l.play(r.currentTime)};const s=new i.default.Sequence(r,220,["G4 s","G3 q"]);s.loop=!1,t.play404=()=>{s.play(r.currentTime)};const c=new i.default.Sequence(r,220,["G2 s","G3 s","F2 s","D3 s"]);c.loop=!1,t.playNoFuel=()=>{c.play(r.currentTime)};const a=new i.default.Sequence(r,180,["E3  e","F3  e","G3  e","F3  e","E3  e","F3  e","D3  q"]);a.loop=!1,t.playEnterGate=()=>{a.play(r.currentTime)};const u=new i.default.Sequence(r,180,["E5  s","F5  s","G5  q","F5  e","E5  e","D5  q"]);u.loop=!1,t.playGameWin=()=>{u.play(r.currentTime)};const f=new i.default.Sequence(r,180,["E2  s","F2  s","G2  q","F2  e","E2  e","D2  q"]);f.loop=!1,t.playGameLoss=()=>{f.play(r.currentTime)};const I=new i.default.Sequence(r,60,["- e","F3 e","A3 q","Bb3 e","F3 e","A3 q","Bb3 e","F3 e","E3 e","G3 e","F3 e","E3 e","D3 q","- e","Bb3 s","A3 s","Bb3 e","F3 e","A3 e","Bb3 s","F3 s","A3 e","E3 e","F3 e","G3 e","F3 e","E3 s","F3 s","E3 e","D3 q"]),d=new i.default.Sequence(r,60,["- e","F5 e","A5 q","Bb5 e","F5 e","A5 q","Bb5 e","F5 e","E5 e","G5 e","F5 e","E5 e","D5 q","- e","Bb5 s","A5 s","Bb5 e","F5 e","A5 e","Bb5 s","F5 s","A5 e","E6 e","F6 e","G6 e","F6 e","E6 s","F6 s","E6 e","D6 q"]),D=new i.default.Sequence(r,60,["F2 q","- h","F2 q","A2 q","- h","A2 q","Bb2 q","- h","Bb2 q","F2 h","A2 h"]);d.staccato=.55,D.smoothing=.4,I.gain.gain.value=.2,d.gain.gain.value=.05,D.gain.gain.value=.05,d.mid.frequency.value=1200,D.mid.gain.value=3,D.bass.gain.value=6,D.bass.frequency.value=80,D.mid.gain.value=-6,D.mid.frequency.value=500,D.treble.gain.value=-2,D.treble.frequency.value=1400,t.playBgm=()=>{const e=r.currentTime;I.play(e),d.play(e),D.play(e)}},function(e,t,n){var o,i,r;i=[t],void 0===(r="function"==typeof(o=function(e){var t=440*Math.pow(Math.pow(2,1/12),-9),n=/^[0-9.]+$/,o=/\s+/,i=/(\d+)/,r={};function l(e){var t=e.split(o);this.frequency=l.getFrequency(t[0])||0,this.duration=l.getDuration(t[1])||0}function s(e,t,n){this.ac=e||new AudioContext,this.createFxNodes(),this.tempo=t||120,this.loop=!0,this.smoothing=0,this.staccato=0,this.notes=[],this.push.apply(this,n||[])}"B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb".split("|").forEach((function(e,t){e.split("-").forEach((function(e){r[e]=t}))})),l.getFrequency=function(e){var n=e.split(i),o=r[n[0]],l=(n[1]||4)-4;return t*Math.pow(Math.pow(2,1/12),o)*Math.pow(2,l)},l.getDuration=function(e){return n.test(e)?parseFloat(e):e.toLowerCase().split("").reduce((function(e,t){return e+("w"===t?4:"h"===t?2:"q"===t?1:"e"===t?.5:"s"===t?.25:0)}),0)},s.prototype.createFxNodes=function(){var e=this.gain=this.ac.createGain();return[["bass",100],["mid",1e3],["treble",2500]].forEach(function(t,n){(n=this[t[0]]=this.ac.createBiquadFilter()).type="peaking",n.frequency.value=t[1],e.connect(e=n)}.bind(this)),e.connect(this.ac.destination),this},s.prototype.push=function(){return Array.prototype.forEach.call(arguments,function(e){this.notes.push(e instanceof l?e:new l(e))}.bind(this)),this},s.prototype.createCustomWave=function(e,t){t||(t=e),this.waveType="custom",this.customWave=[new Float32Array(e),new Float32Array(t)]},s.prototype.createOscillator=function(){return this.stop(),this.osc=this.ac.createOscillator(),this.customWave?this.osc.setPeriodicWave(this.ac.createPeriodicWave.apply(this.ac,this.customWave)):this.osc.type=this.waveType||"square",this.osc.connect(this.gain),this},s.prototype.scheduleNote=function(e,t){var n=60/this.tempo*this.notes[e].duration,o=n*(1-(this.staccato||0));return this.setFrequency(this.notes[e].frequency,t),this.smoothing&&this.notes[e].frequency&&this.slide(e,t,o),this.setFrequency(0,t+o),t+n},s.prototype.getNextNote=function(e){return this.notes[e<this.notes.length-1?e+1:0]},s.prototype.getSlideStartDelay=function(e){return e-Math.min(e,60/this.tempo*this.smoothing)},s.prototype.slide=function(e,t,n){var o=this.getNextNote(e),i=this.getSlideStartDelay(n);return this.setFrequency(this.notes[e].frequency,t+i),this.rampFrequency(o.frequency,t+n),this},s.prototype.setFrequency=function(e,t){return this.osc.frequency.setValueAtTime(e,t),this},s.prototype.rampFrequency=function(e,t){return this.osc.frequency.linearRampToValueAtTime(e,t),this},s.prototype.play=function(e){return e="number"==typeof e?e:this.ac.currentTime,this.createOscillator(),this.osc.start(e),this.notes.forEach(function(t,n){e=this.scheduleNote(n,e)}.bind(this)),this.osc.stop(e),this.osc.onended=this.loop?this.play.bind(this,e):null,this},s.prototype.stop=function(){return this.osc&&(this.osc.onended=null,this.osc.disconnect(),this.osc=null),this},e.Note=l,e.Sequence=s})?o.apply(t,i):o)||(e.exports=r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;const o=n(0),i=o.GAME_WIDTH/6,r=[o.GAME_WIDTH/2,o.GAME_HEIGHT/2];t.render=function(e,t){e.fillStyle="#fff",e.font='25px "Courier New", Courier, monospace',e.fillText("You Found a Safe Universe",o.GAME_WIDTH/3,25),e.font='20px "Courier New", Courier, monospace',t?(e.fillStyle="#2E8B57",e.fillText("Accomplished Leader: All Ships Survived",o.GAME_WIDTH/3.5,65)):(e.fillStyle="rgba(34, 100, 140, 0.9)",e.fillText("Great Leader: Most Ships Survived",o.GAME_WIDTH/3,65),e.fillStyle="#333",e.fillText("Retry (refresh page) For a Perfect Mission",o.GAME_WIDTH/3.5,95)),e.beginPath(),e.arc(r[0],r[1],i,0,2*Math.PI),e.fillStyle="blue",e.fill();const n=[r[0]-i,r[1]-i];e.fillStyle="green",e.fillRect(n[0]+70,n[1]+40,10,15),e.fillRect(n[0]+65,n[1]+45,15,15),e.fillRect(n[0]+65,n[1]+50,15,15),e.fillRect(n[0]+65,n[1]+55,20,15),e.fillRect(n[0]+75,n[1]+100,25,25),e.fillRect(n[0]+70,n[1]+125,75,25),e.fillRect(n[0]+65,n[1]+150,100,25),e.fillRect(n[0]+45,n[1]+175,100,25),e.fillRect(n[0]+50,n[1]+200,115,25),e.fillRect(n[0]+65,n[1]+225,150,25),e.fillRect(n[0]+65,n[1]+250,125,25),e.fillRect(n[0]+70,n[1]+275,100,25),e.fillRect(n[0]+225,n[1]+40,15,15),e.fillRect(n[0]+220,n[1]+55,25,15),e.fillRect(n[0]+215,n[1]+70,30,15),e.fillRect(n[0]+215,n[1]+85,55,15),e.fillRect(n[0]+210,n[1]+100,70,15),e.fillRect(n[0]+205,n[1]+115,50,15),e.fillRect(n[0]+215,n[1]+130,45,15),e.fillRect(n[0]+220,n[1]+145,30,15),e.fillRect(n[0]+255,n[1]+275,30,20),e.fillRect(n[0]+265,n[1]+295,15,20),e.fillRect(n[0]+275,n[1]+315,5,10),e.fillRect(n[0]+305,n[1]+180,30,20),e.fillRect(n[0]+300,n[1]+200,15,20),e.fillRect(n[0]+275,n[1]+220,5,10),e.fillStyle="rgba(255,255,255,0.7)",e.fillRect(n[0]+70,n[1]+120,10,5),e.fillRect(n[0]+65,n[1]+125,20,5),e.fillRect(n[0]+70,n[1]+125,10,5),e.fillRect(n[0]+100,n[1]+35,10,5),e.fillRect(n[0]+95,n[1]+40,20,5),e.fillRect(n[0]+95,n[1]+45,15,5),e.fillRect(n[0]+100,n[1]+50,10,5),e.fillRect(n[0]+110,n[1]+85,10,5),e.fillRect(n[0]+100,n[1]+90,20,5),e.fillRect(n[0]+100,n[1]+95,15,5),e.fillRect(n[0]+120,n[1]+100,10,5),e.fillRect(n[0]+110,n[1]+185,10,5),e.fillRect(n[0]+100,n[1]+190,20,5),e.fillRect(n[0]+100,n[1]+195,35,5),e.fillRect(n[0]+120,n[1]+200,20,5),e.fillRect(n[0]+230,n[1]+215,30,20),e.fillRect(n[0]+225,n[1]+235,40,15),e.fillRect(n[0]+195,n[1]+280,25,10),e.fillRect(n[0]+200,n[1]+290,30,25)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;const o=n(0);t.render=function(e,t){t.forEach((t,n)=>{e.fillStyle=`rgba(${34+25*n},100,140,0.9)`,e.fillRect(t[0],t[1],o.SHIP_SIZE,o.SHIP_SIZE)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;const o=n(0);t.render=function(e,t){t.forEach((t,n)=>{e.fillStyle=`rgba(0,${255-25*n},0,0.5)`,e.fillRect(t[0],t[1],o.PROBE_SIZE,o.PROBE_SIZE)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;const o=n(0),i=n(1),r=n(3);t.render=function(e,t){t.forEach(t=>{if(!t.active)return((e,t)=>{e.fillStyle="transparent",e.fillRect(t.x,t.y,o.WIDTH,o.HEIGHT)})(e,t);e.fillStyle="#fff",e.font=o.FONT_SIZE+'px "Courier New", Courier, monospace',e.fillText((e=>"Universe "+e.name)(t),t.x+o.WIDTH/3,t.y+o.FONT_SIZE+o.HEIGHT),e.fillStyle="#101",e.fillRect(t.x,t.y,o.WIDTH,o.HEIGHT),((e,t)=>{const n=t.x+o.WIDTH,i=t.y+o.HEIGHT;for(let o=t.x;o<n;o++)for(let n=t.y;n<i;n++)(o+n)%12==0&&n%6==0&&(e.fillStyle=`rgba(255,255,255,${Math.min(.3,Math.random())})`,e.fillRect(o,n,1,1))})(e,t),t.doors.length?i.render(e,t):r.render(e,t)})}}]);