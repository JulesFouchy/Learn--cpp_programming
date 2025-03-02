import{w as Y,i as Ge,g as qe,t as De,h as Ie,k as ze,C as Oe,l as ce,n as Be,o as ge,p as Fe,q as he,v as Ve,L as C,B as $e,x as Ne,y as Je,z as He,A as Ke,D as Qe,E as ve,F as Te,G as ke,H as Ue,M as ye,m as we,u as le,r as ee,j as a,b as xe,R as A,c as m,I as _,J as Ze,a as w,V as Pe,S as et,d as tt,f as nt,s as st}from"../../_virtual_settings-DVCYLlHS.js";import{u as Le,C as o,T as b,t as k,s as M}from"../../styles-DiP1wR1d.js";import{S as Ce,b as v,c as ae,p as fe}from"../../motion-DS7563LG.js";import{C as X}from"../../Circle-yd4S5mtU.js";qe(Ee,De());function*Ee(s,e){yield*Y(s),Ge(e)?yield*e:e()}function it(s,e,i){const c={arcLength:0,segments:[],minSin:1};if(s.length===0)return c;if(i){const t=s[0].add(s[s.length-1]).scale(.5);s=[t,...s,t]}let n=s[0];for(let t=2;t<s.length;t++){const r=s[t-2],h=s[t-1],u=s[t],W=r.sub(h),f=u.sub(h),g=W.normalized.safe,z=f.normalized.safe,j=Math.acos(Ie(-1,1,g.dot(z))),R=Math.tan(j/2),D=Math.sin(j/2),G=Math.min(e,R*W.magnitude*(t===2?1:.5),R*f.magnitude*(t===s.length-1?1:.5)),ne=D===0?0:G/D,V=R===0?0:G/R,N=g.add(z).scale(1/2).normalized.safe.scale(ne).add(h),q=g.perpendicular.dot(z)<0,I=new ze(n,h.add(g.scale(V))),d=new Oe(N,G,g.perpendicular.scale(q?1:-1),z.perpendicular.scale(q?-1:1),q);I.arcLength>0&&(c.segments.push(I),c.arcLength+=I.arcLength),d.arcLength>0&&(c.segments.push(d),c.arcLength+=d.arcLength),c.minSin=Math.min(c.minSin,Math.abs(D)),n=h.add(z.scale(V))}const l=new ze(n,s[s.length-1]);return l.arcLength>0&&(c.segments.push(l),c.arcLength+=l.arcLength),c}function at(s){return s.reduce((e,i,c)=>c?e+s[c-1].sub(i).magnitude:0,0)}function me(s,e,i){const c=s.length;let n=0;for(let l=0;l<e.length;l+=1){const t=s[(i+l)%c],r=e[l];n+=t.sub(r).squaredMagnitude}return n}function ot(s,e,i){const c=[];if(i===0)return[...s];if(i===1)return[...e];for(let n=0;n<s.length;n++){const l=s[n],t=e[n];c.push(ce.lerp(l,t,i))}return c}var te=function(s,e,i,c){var n=arguments.length,l=n<3?e:c===null?c=Object.getOwnPropertyDescriptor(e,i):c,t;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,e,i,c);else for(var r=s.length-1;r>=0;r--)(t=s[r])&&(l=(n<3?t(l):n>3?t(e,i,l):t(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l},ue;let E=ue=class extends Be{static rotatePoints(e,i,c){if(c){let n=1/0,l=0;for(let t=0;t<e.length;t+=1){const r=me(e,i,t);r<n&&(n=r,l=t)}if(l){const t=e.splice(0,l);e.splice(e.length,0,...t)}}else{const n=me(e,i,0),l=[...e].reverse();me(l,i,0)<n&&e.reverse()}}static distributePoints(e,i){if(e.length===0){for(let r=0;r<i;r++)e.push(ce.zero);return}if(e.length===1){const r=e[0];for(let h=0;h<i;h++)e.push(r);return}const c=e.length+i,n=at(e);let l=n===0?0:i/n,t=0;for(;e.length<c;){const r=c-e.length;if(t+1>=e.length){l=n===0?0:r/n,t=0;continue}const h=e[t],u=e[t+1],W=h.sub(u).magnitude;let f=Math.min(Math.round(W*l),r)+1;n===0&&(f=2);for(let g=1;g<f;g++)e.splice(++t,0,ce.lerp(h,u,g/f));t++}}*tweenPoints(e,i,c){const n=[...this.parsedPoints()],l=this.parsePoints(ge(e)),t=this.closed(),r=n.length-l.length;ue.distributePoints(r<0?n:l,Math.abs(r)),ue.rotatePoints(l,n,t),this.tweenedPoints(n),yield*Fe(i,h=>{const u=c(h);this.tweenedPoints(ot(n,l,u))},()=>{this.tweenedPoints(null),this.points(e)})}constructor(e){super(e),this.tweenedPoints=he(null),e.children===void 0&&e.points===void 0&&Ve().warn({message:"No points specified for the line",remarks:`<p>The line won&#39;t be visible unless you specify at least two points:</p>
<pre class=""><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span>
  stroke=<span class="hljs-string">&quot;#fff&quot;</span>
  lineWidth={<span class="hljs-number">8</span>}
  points={[
    [<span class="hljs-number">100</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">100</span>],
  ]}
/&gt;</code></pre><p>Alternatively, you can define the points using the children:</p>
<pre class=""><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>}&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">x</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">y</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
&lt;/<span class="hljs-title class_">Line</span>&gt;</code></pre><p>If you did this intentionally, and want to disable this message, set the
<code>points</code> property to <code>null</code>:</p>
<pre class=""><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>} points={<span class="hljs-literal">null</span>} /&gt;</code></pre>`,inspect:this.key})}childrenBBox(){let e=this.tweenedPoints();if(!e){const i=this.points();e=i?i.map(c=>new ce(ge(c))):this.children().filter(c=>!(c instanceof C)||c.isLayoutRoot()).map(c=>c.position())}return $e.fromPoints(...e)}parsedPoints(){return this.parsePoints(this.points())}profile(){return it(this.tweenedPoints()??this.parsedPoints(),this.radius(),this.closed())}lineWidthCoefficient(){const e=this.radius(),i=this.lineJoin();let c=super.lineWidthCoefficient();if(e===0&&i==="miter"){const{minSin:n}=this.profile();n>0&&(c=Math.max(c,.5/n))}return c}drawOverlay(e,i){const c=this.childrenBBox().transformCorners(i),l=this.computedSize().mul(this.offset()).scale(.5).transformAsPoint(i);e.fillStyle="white",e.strokeStyle="black",e.lineWidth=1;const t=new Path2D,r=(this.tweenedPoints()??this.parsedPoints()).map(h=>h.transformAsPoint(i));if(r.length>0){Ne(t,r[0]);for(const h of r)Je(t,h),e.beginPath(),He(e,h,4),e.closePath(),e.fill(),e.stroke()}e.strokeStyle="white",e.stroke(t),e.beginPath(),Ke(e,l),e.stroke(),e.beginPath(),Qe(e,c),e.closePath(),e.stroke()}parsePoints(e){return e?e.map(i=>new ce(ge(i))):this.children().map(i=>i.position())}};te([ve(0),Te()],E.prototype,"radius",void 0);te([ve(null),Te()],E.prototype,"points",void 0);te([De()],E.prototype,"tweenPoints",null);te([ke()],E.prototype,"childrenBBox",null);te([ke()],E.prototype,"parsedPoints",null);te([ke()],E.prototype,"profile",null);E=ue=te([Ue("Line")],E);let _e;_e??(_e=new ye("mergeSort",!1));_e.loadData({version:0,shared:{background:null,range:[0,null],size:{x:1920,y:1080},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:30,resolutionScale:.5,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1,fastStart:!0,includeAudio:!0}}}});const lt=_e;let We;We??(We=new ye("mergeSort_intro",!1));We.loadData({version:0,timeEvents:[],seed:829095212});const rt=We;function oe(s){return s.map((e,i)=>({value:e,index:i})).sort((e,i)=>e.value-i.value).map(({index:e})=>e)}function de(s){let e=Array(s.length);for(let i=0;i<s.length;i++)e[s[i]]=i;return e}function*ct(...s){const e=s.map(i=>i[Symbol.iterator]());for(;;){const i=e.map(c=>c.next());if(i.some(({done:c})=>c))break;yield i.map(({value:c})=>c)}}const Q=we(function*(s){const e=le().variables.get("seed",42),i=le().variables.get("size",7),c=Le(e()),n=ee(i()).map(d=>c.nextInt(1,70)),l=Math.floor(i()/2),t=[],r=m(),h=m(),u=m(),W=28,f=16,g=128,z=W+g,j=4,R=8;s.fill(o.background),s.add(ee(n.length).map(d=>a(A,{ref:xe(t,d),size:g,lineWidth:R,stroke:o.surface,fill:o.background,radius:j,x:-156*(n.length-1)/2+z*d,alignItems:"center",justifyContent:"center",children:a(b,{text:n[d].toString(),...k})}))),s.add(a(Ze,{children:[a(A,{ref:r,stroke:o.surface,lineWidth:6,radius:8,opacity:0,width:n.length*z-W+2*f,height:g+2*f}),a(A,{ref:h,stroke:o.cyan,lineWidth:6,radius:8,opacity:0,topLeft:()=>[r().left().x-g,r().bottomRight().y+2*f],width:l*z-W+2*f,height:g+2*f,fill:new _(o.cyan).desaturate(.5).alpha(.1)}),a(A,{ref:u,stroke:o.yellow,lineWidth:6,radius:8,opacity:0,topRight:()=>[r().right().x+g,r().bottomRight().y+2*f],width:(n.length-l)*z-W+2*f,height:g+2*f,fill:new _(o.yellow).desaturate(.5).alpha(.1)})]})),yield*Y(.5),yield*w(M(.1,...t.slice(0,l).map(d=>d.stroke(o.cyan,.1))),M(.1,...t.slice(l).map(d=>d.stroke(o.yellow,.1)))),yield*Y(.5);const D=g/2+2*f;yield*w(r().y(r().y()-D,.3),...t.map(d=>d.y(d.y()-D,.3)),r().opacity(1,.3),Ee(.1,w(h().opacity(1,.3),u().opacity(1,.3))));const G=t.map(d=>d.position());yield*w(M(.3,...t.slice(0,l).map((d,L)=>d.topLeft(h().topLeft().addY(f).addX(f+z*L),.4))),M(.3,...t.slice(l).map((d,L)=>d.topLeft(u().topLeft().addY(f).addX(f+z*L),.4))));const ne=t.map(d=>d.position()),V=de([...oe(n.slice(0,l)),...oe(n.slice(l)).map(d=>d+l)]);yield*M(.1,...V.map((d,L)=>t[L].position(ne[d],.3))),yield*Y(.5);const N=[...t];V.forEach((d,L)=>t[d]=N[L]);const q=[...n];V.forEach((d,L)=>n[d]=q[L]);const I=de(oe(n));{const d=t.slice();I.forEach((L,B)=>t[L]=d[B])}yield*M(.2,...t.map((d,L)=>d.position(G[L],.3))),yield*Y(.5),yield*w(r().y(r().y()+D,.3),...t.map(d=>d.y(d.y()+D,.3)),r().opacity(0,.3),h().opacity(0,.3),u().opacity(0,.3),...t.map(d=>d.stroke(o.surface,.3))),yield*w(h().opacity(0,.3),u().opacity(0,.3),r().opacity(0,.3)),yield*M(.1,...t.map(d=>d.fill(o.green,.3)))});Q.name="mergeSort_intro";rt.attach(Q.meta);Q.onReplaced??(Q.onReplaced=new Pe(Q.config));let je;je??(je=new ye("mergePhase",!1));je.loadData({version:0,timeEvents:[],seed:2990217251});const dt=je,y={...Ce};y.boxWidth/=1.2;y.boxGap/=1.5;function ie(s,e,i){return()=>s().topLeft().addX(e*i)}function Re(s,e,i){return()=>s().bottomLeft().addX(e*i)}function pt(s,e,i,c,n,l=4*y.outlineMargin,t=2*y.boxWidth,r=1){return[a(C,{ref:c,opacity:r,topLeft:()=>s().bottomLeft().addX(-t/2).addY(l),width:e*v(y)-y.boxGap,height:()=>s().height()}),a(C,{ref:n,opacity:r,topRight:()=>s().bottomRight().addX(t/2).addY(l),width:i*v(y)-y.boxGap,height:()=>s().height()})]}function Ae(s,e){return ee(s().children().length-1).map(i=>a(E,{points:[s().children()[i].right().transformAsPoint(s().localToParent()),s().children()[i+1].left().transformAsPoint(s().localToParent())],...e}))}const U=we(function*(s){const e=le().variables.get("seed",42),i=le().variables.get("size",7)(),c=Le(e()),n=Math.floor(i/2);let l=ee(i).map(p=>c.nextInt(1,99));const t=[],r=m(),h=m(),u=m(),W=m(),f=m(),g=m();s.fill(o.background),s.add(a(C,{ref:r,opacity:1,width:l.length*v(y)-y.boxGap,y:-s.height()/2+y.boxWidth+2*y.outlineMargin,height:y.boxWidth})),s.add(pt(r,n,l.length-n,u,f)),s.add([ae(r,h,o.surface,y.outlineMargin,1),ae(u,W,o.cyan,y.outlineMargin,1),ae(f,g,o.yellow,y.outlineMargin,1)]),W().fill(new _(o.cyan).desaturate(.5).alpha(.1)),g().fill(new _(o.yellow).desaturate(.5).alpha(.1)),s.add(ee(l.length).map(p=>a(A,{ref:xe(t,p),size:y.boxWidth,lineWidth:y.boxStrokeWidth,stroke:o.surface,fill:o.background,radius:y.boxRadius,topLeft:ie(r,p,v(y)),alignItems:"center",justifyContent:"center",children:a(b,{text:l[p].toString(),...k})})));const z=m(),j=m(),R=m();s.add(Array.from(ct([z,j,R],[o.cyan,o.yellow,o.pink])).map(([p,x])=>a(X,{ref:p,fill:x,stroke:new _(x).darken(2),size:20,lineWidth:4,opacity:0})));const D=m(),G=m(),ne=m(),V=m(),N=m(),q=m(),I=m(),d=m(),L=m(),B={lineWidth:5,stroke:o.white,radius:10,padding:new et(5,15),layout:!0,alignItems:"center",justifyContent:"center"},J={lineWidth:5,stroke:o.white,lineDash:[5,5],radius:5};s.add(a(C,{ref:D,children:[a(A,{ref:G,...B,x:-600,y:200,children:[a(C,{ref:ne,width:20,padding:[0,30]}),a(b,{ref:N,text:"<",...k,padding:[0,20],opacity:0}),a(C,{ref:V,width:20,padding:[0,30]})]}),a(C,{ref:q,layout:!0,gap:40,left:()=>G().right().addX(100).addY(-70),children:[a(A,{...B,opacity:.5,children:[a(b,{text:"[",...k}),a(X,{fill:o.cyan,stroke:new _(o.cyan).darken(2),size:20,lineWidth:5}),a(b,{text:"] < [",...k}),a(X,{fill:o.yellow,stroke:new _(o.yellow).darken(2),size:20,lineWidth:5}),a(b,{text:"]",...k})]}),a(A,{...B,opacity:.5,children:[a(b,{text:"[",...k}),a(X,{fill:o.pink,stroke:new _(o.pink).darken(2),size:20,lineWidth:5}),a(b,{text:"] = [",...k}),a(X,{fill:o.cyan,stroke:new _(o.cyan).darken(2),size:20,lineWidth:5}),a(b,{text:"]",...k})]}),a(A,{...B,opacity:.5,children:[a(X,{fill:o.cyan,stroke:new _(o.cyan).darken(2),size:20,lineWidth:5}),a(b,{text:" + 1",...k,padding:[0,20]})]})]}),a(E,{points:[G().right(),q().left()],...J}),a(C,{ref:I,layout:!0,gap:40,left:()=>G().right().addX(100).addY(70),children:[a(A,{...B,opacity:.5,children:[a(b,{text:"[",...k}),a(X,{fill:o.cyan,stroke:new _(o.cyan).darken(2),size:20,lineWidth:5}),a(b,{text:"] > [",...k}),a(X,{fill:o.yellow,stroke:new _(o.yellow).darken(2),size:20,lineWidth:5}),a(b,{text:"]",...k})]}),a(A,{...B,opacity:.5,children:[a(b,{text:"[",...k}),a(X,{fill:o.pink,stroke:new _(o.pink).darken(2),size:20,lineWidth:5}),a(b,{text:"] = [",...k}),a(X,{fill:o.yellow,stroke:new _(o.yellow).darken(2),size:20,lineWidth:5}),a(b,{text:"]",...k})]}),a(A,{...B,opacity:.5,children:[a(X,{fill:o.yellow,stroke:new _(o.yellow).darken(2),size:20,lineWidth:5}),a(b,{text:" + 1",...k,padding:[0,20]})]})]}),a(E,{points:()=>[G().right(),I().left()],...J}),a(A,{ref:L,...B,opacity:.5,left:()=>q().right().addX(100).addY(70),children:[a(X,{fill:o.pink,stroke:new _(o.pink).darken(2),size:20,lineWidth:5}),a(b,{text:" + 1",...k,padding:[0,20]})]}),a(E,{...J,points:()=>[q().childAs(2).right().transformAsPoint(q().localToParent()),L().left()]}),a(E,{...J,points:()=>[I().childAs(2).right().transformAsPoint(I().localToParent()),L().left]}),a(C,{ref:d,opacity:.5,children:[a(A,{...B,position:I().bottom().addY(100),children:[a(b,{text:"While",...k,padding:[0,20]}),a(X,{fill:o.cyan,stroke:new _(o.cyan).darken(2),size:20,lineWidth:5}),a(b,{text:"< size(",...k,paddingLeft:20}),a(A,{fill:o.cyan,stroke:new _(o.cyan).darken(2),size:[60,30],radius:10,lineWidth:5}),a(b,{text:") &&",...k,paddingRight:20}),a(X,{fill:o.yellow,stroke:new _(o.yellow).darken(2),size:20,lineWidth:5}),a(b,{text:"< size(",...k,paddingLeft:20}),a(A,{fill:o.yellow,stroke:new _(o.yellow).darken(2),size:[60,30],radius:10,lineWidth:5}),a(b,{text:")",...k})]}),a(E,{...J,radius:200,points:()=>[L().bottom(),[L().bottom().x,d().childAs(0).right().y],d().childAs(0).right()]}),a(E,{...J,radius:200,endArrow:!0,points:()=>[d().childAs(0).left(),[G().bottom().x,d().childAs(0).left().y],G().bottom()]})]})]})),D().add(Ae(q,J)),D().add(Ae(I,J)),yield*w(M(.1,...t.slice(0,n).map(p=>p.stroke(o.cyan,.1))),M(.1,...t.slice(n).map(p=>p.stroke(o.yellow,.1)))),yield*w(M(.1,...t.slice(0,n).map((p,x)=>p.topLeft(ie(u,x,v(y)),.2))),M(.1,...t.slice(n).map((p,x)=>p.topLeft(ie(f,x,v(y)),.2))));{const p=de([...oe(l.slice(0,n)),...oe(l.slice(n)).map(O=>O+n)]),x=t.map(O=>O.position());yield*w(...p.map((O,re)=>t[re].position(x[O],.2)));const H=[...t];p.forEach((O,re)=>t[O]=H[re]);const K=[...l];p.forEach((O,re)=>l[O]=K[re])}yield*w(M(.1,...t.slice(0,n).map(p=>p.stroke(o.surface,.1))),M(.1,...t.slice(n).map(p=>p.stroke(o.surface,.1)))),yield*w(...[W,g].map(p=>p().stroke(o.surface,.1)));const S=he(0),T=he(0),F=he(0);z().position(()=>Re(u,Math.min(S(),n-1),v(y))().addX(y.boxWidth/2).addY(y.outlineMargin)),j().position(()=>Re(f,Math.min(T(),i-n-1),v(y))().addX(y.boxWidth/2).addY(y.outlineMargin)),R().position(()=>ie(r,Math.min(F(),i-1),v(y))().addX(y.boxWidth/2).addY(-y.outlineMargin)),yield*w(...[z,j,R].map(p=>p().opacity(1,.3)));let se=Array(i);for(;S()<n&&T()<i-n;){t[S()].save(),t[T()+n].save();const p=t[S()].childAs(0).clone(),x=t[T()+n].childAs(0).clone();p.position(t[S()].childAs(0).absolutePosition().transformAsPoint(s.worldToLocal())),x.position(t[T()+n].childAs(0).absolutePosition().transformAsPoint(s.worldToLocal())),s.add([p,x]),yield*w(t[S()].stroke(o.cyan,.3),t[T()+n].stroke(o.yellow,.3),p.absolutePosition(ne().absolutePosition(),.3),p.fill(o.cyan,.3),x.absolutePosition(V().absolutePosition(),.3),x.fill(o.yellow,.3));let H=l[S()]<l[T()+n];N().text(H?"<":">");const K=H?q:I;K().children().forEach(O=>O.save()),L().save(),yield*w(N().opacity(1,.3),K().children()[0].opacity(1,.3)),yield*Y(.5),K().children()[1].save(),yield*K().children()[1].opacity(1,.3),yield*w(t[S()].restore(.3),t[T()+n].restore(.3),(H?t[S()]:t[T()+n]).topLeft(ie(r,F(),v(y)),.3)),yield*K().children()[2].opacity(1,.3),se[F()]=H?S():T()+n,yield*(H?S:T)((H?S:T)()+1,.3),yield*L().opacity(1,.3),F()<i-1&&(yield*F(F()+1,.3)),d().save(),yield*d().opacity(1,.3),S()<n&&T()<i-n||(yield*d().childAs(0).stroke(o.red,.3),yield*Y(.5)),yield*w(N().opacity(0,.3),p.opacity(0,.3),x.opacity(0,.3),M(.1,...K().children().map(O=>O.restore(.3)),L().restore(.3),d().restore(.3))),p.remove(),x.remove(),yield*Y(.5)}yield*w(D().opacity(0,.3),D().y(D().y()+50,.4)),D().remove();const $=m();s.add(a(b,{...k,y:200,ref:$,text:"Move remaining elements"})),$().save(),$().opacity(0),$().y($().y()+50),yield*$().restore(.3),yield*Y(.5);const pe=S()<n?W:g;pe().save(),yield*pe().stroke(pe().stroke().brighten(4),.4),yield*pe().restore(.4);const Me=S()<n?t.slice(S(),n):t.slice(n+T());Me.forEach((p,x)=>se[F()+x]=S()<n?S()+x:n+T()+x),yield*w(M(.1,...Me.map((p,x)=>p.topLeft(ie(r,F()+x,v(y)),.4))),F(i,.2*(i-F())),S()<n?S(n,.2*(n-S())):T(i-n,.2*(i-n-T()))),yield*w(w(...[W,g].map(p=>p().opacity(0,.3))),w(...[z,j,R].map(p=>p().opacity(0,.3)))),yield*w($().opacity(0,.3),$().y($().y()+50,.3),r().y(0,.3)),se=de(se);const Xe=[...t];se.forEach((p,x)=>t[p]=Xe[x]);const Ye=[...l];se.forEach((p,x)=>l[p]=Ye[x]),yield*M(.1,...t.map(p=>p.fill(o.green,.3)))});U.name="mergePhase";dt.attach(U.meta);U.onReplaced??(U.onReplaced=new Pe(U.config));let Se;Se??(Se=new ye("recursiveMergeSort",!1));Se.loadData({version:0,timeEvents:[],seed:3180500438});const ht=Se,P={...Ce};P.boxWidth/=1.2;P.boxGap/=1.5;function ft(s,e,i,c,n,l=4*P.outlineMargin,t=2*P.boxWidth,r=1){return[a(C,{ref:c,opacity:r,topLeft:s().bottomLeft().addX(-t/2).addY(l),width:e*v(P)-P.boxGap,height:()=>s().height()}),a(C,{ref:n,opacity:r,topRight:s().bottomRight().addX(t/2).addY(l),width:i*v(P)-P.boxGap,height:()=>s().height()})]}function*be(s,e,i,c,n,l,t=0,r=null){if(i<=1){yield n.stroke(o.green,.5),yield*Y(.5);return}yield r==null?void 0:r.save(),yield r==null?void 0:r.stroke(r.stroke().alpha(.3),.3),yield n.stroke(o.blue,.3);let h=Math.floor(i/2);const u=m(),W=m(),f=m(),g=m();s.add(a(C,{layout:!0,direction:"column",alignItems:"start",topLeft:()=>s.topLeft().transformAsPoint(s.worldToLocal()).add(50),children:[a(C,{layout:!0,margin:10,children:[a(b,{text:"Sorted Array:",...k,marginRight:50}),a(A,{size:[200,60],fill:new _(o.green).alpha(.02),stroke:o.green,radius:10,lineWidth:6})]}),a(C,{layout:!0,margin:10,children:[a(b,{text:"Current Array:",...k,marginRight:20}),a(A,{size:[200,60],fill:new _(o.blue).alpha(.02),stroke:o.blue,radius:10,lineWidth:6})]})]})),s.add(ft(c,h,i-h,u,f,4*P.outlineMargin,(Math.pow(e-t,2)+1)*P.outlineMargin)),s.add([ae(u,W,o.surface,P.outlineMargin,0),ae(f,g,o.surface,P.outlineMargin,0)]),u().y(u().y()+50),f().y(f().y()+50),yield*w(u().y(u().y()-50,.3),f().y(f().y()-50,.3),W().opacity(1,.3),g().opacity(1,.3)),yield*w(M(.1,...l.slice(0,h).map((j,R)=>j.topLeft(fe(u,R,v(P)),.2))),M(.1,...l.slice(h).map((j,R)=>j.topLeft(fe(f,R,v(P)),.2)))),yield*be(s,e,h,u,W(),l.slice(0,h),t+1,n),yield*Y(.5),yield*be(s,e,i-h,f,g(),l.slice(h),t+1,n);const z=de(oe(l.map(j=>parseInt(j.childAs(0).text(),10))));{const j=l.slice();z.forEach((R,D)=>l[R]=j[D])}yield*M(.2,...l.map((j,R)=>j.topLeft(fe(c,R,v(P)),.3))),yield*w(W().opacity(0,.3),g().opacity(0,.3)),yield*Y(.5),yield*n.stroke(o.green,.3),r&&(yield*r.restore(.3)),yield*Y(.5),[u,f,W,g].forEach(j=>j().remove())}const Z=we(function*(s){const e=le().variables.get("seed",42),i=le().variables.get("size",7)(),c=Le(e());let n=ee(i).map(u=>c.nextInt(1,99));const l=[],t=m(),r=m();s.fill(o.background),s.add([a(C,{ref:t,opacity:1,width:n.length*v(P)-P.boxGap,height:P.boxWidth,y:-200}),ae(t,r,o.surface,P.outlineMargin,1)]),s.add(ee(n.length).map(u=>a(A,{ref:xe(l,u),size:P.boxWidth,lineWidth:P.boxStrokeWidth,stroke:o.surface,fill:o.background,radius:P.boxRadius,topLeft:fe(t,u,v(P)),alignItems:"center",justifyContent:"center",children:a(b,{text:n[u].toString(),...k})})));const h=Math.ceil(Math.log2(i));yield*be(s,h,i,t,r(),l),yield*w(r().stroke(o.surface,.3),M(.1,...l.map(u=>u.fill(o.green,.3)))),yield*Y(1)});Z.name="recursiveMergeSort";ht.attach(Z.meta);Z.onReplaced??(Z.onReplaced=new Pe(Z.config));const ut=tt({scenes:[Q,U,Z]}),wt=nt("mergeSort",{core:"3.17.2",two:"3.17.2",ui:"3.17.2",vitePlugin:"3.17.2"},[],ut,lt,st);export{wt as default};
