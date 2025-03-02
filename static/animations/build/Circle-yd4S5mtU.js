import{K as B,N as g,l as h,O as y,B as A,P as C,Q as I,k as v,n as D,E as m,F as P,G as L,H as S}from"./_virtual_settings-DVCYLlHS.js";var $=function(a,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(i=(n<3?r(i):n>3?r(e,t,i):r(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};class p extends B{constructor(e,t,o,n,i,r){super(),this.startPoint=e,this.radius=t,this.xAxisRotationDegree=o,this.largeArcFlag=n,this.sweepFlag=i,this.endPoint=r,this.xAxisRotation=this.xAxisRotationDegree*g,this.radius=new h(Math.abs(t.x),Math.abs(t.y));const s=e.sub(r).div(2).transform(y.fromRotation(-o).domMatrix),l=s.x*s.x/(t.x*t.x)+s.y*s.y/(t.y*t.y);if(l>1){const M=Math.sqrt(l);t.x=M*t.x,t.y=M*t.y}const c=new h(t.ctg*s.y,t.perpendicular.ctg*s.x).scale(Math.sqrt(1/(s.x*s.x/(t.x*t.x)+s.y*s.y/(t.y*t.y))-1)*(n===i?-1:1));this.xAxisRotationMatrix=y.fromRotation(o).domMatrix,this.center=c.transform(this.xAxisRotationMatrix).add(e.add(r).div(2));const f=s.sub(c).div(t),b=s.scale(-1).sub(c).div(t);this.startAngle=f.radians,this.deltaAngle=h.angleBetween(f,b)%(Math.PI*2),this.sweepFlag===0&&this.deltaAngle>0&&(this.deltaAngle-=Math.PI*2),this.sweepFlag===1&&this.deltaAngle<0&&(this.deltaAngle+=Math.PI*2),p.el.setAttribute("d",`M ${this.startPoint.x} ${this.startPoint.y} A ${this.radius.x} ${this.radius.y} ${this.xAxisRotationDegree} ${this.largeArcFlag} ${this.sweepFlag} ${this.endPoint.x} ${this.endPoint.y}`),this.length=p.el.getTotalLength();const w=new A(p.el.getBBox());this.points=[w.topLeft,w.bottomRight]}getAnglePosition(e){return this.radius.mul(h.fromRadians(e)).transform(this.xAxisRotationMatrix).add(this.center)}getAngleDerivative(e){return new h(-this.radius.x*Math.sin(e),this.radius.y*Math.cos(e)).transform(this.xAxisRotationMatrix)}draw(e,t,o,n){const i=this.startAngle+this.deltaAngle*t,r=this.startAngle+this.deltaAngle*o,s=this.getPoint(t),l=this.getPoint(o);return n&&e.moveTo(s.position.x,s.position.y),e.ellipse(this.center.x,this.center.y,this.radius.x,this.radius.y,this.xAxisRotation,i,r,this.sweepFlag===0),[s,l]}getPoint(e){const t=this.startAngle+e*this.deltaAngle,o=this.getAngleDerivative(t).normalized;return{position:e===0?this.startPoint:e===1?this.endPoint:this.getAnglePosition(t),tangent:o,normal:o.perpendicular}}get arcLength(){return this.length}}$([C(()=>{const a=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","path");return a.appendChild(e),I.shadowRoot.appendChild(a),e})],p,"el",void 0);function z(a,e,t,o,n=!1){const i={arcLength:0,minSin:1,segments:[]};if(t<e){const f=Math.floor((e-t)/(Math.PI*2))+1;t+=Math.PI*2*f}else if(t>e+Math.PI*2){const f=Math.floor((t-e)/(Math.PI*2));t-=Math.PI*2*f}const r=(e+t)/2,s=a.mul(h.fromRadians(e)),l=a.mul(h.fromRadians(t)),c=a.mul(h.fromRadians(r)).scale(n?-1:1);return o&&u(i,new v(h.zero,s)),R(i,a,s,c,e,r,n),R(i,a,c,l,r,t,n),o&&u(i,new v(l,h.zero)),i}function u(a,e){a.segments.push(e),a.arcLength+=e.arcLength}function R(a,e,t,o,n,i,r){const s=Math.abs(n-i)<=180?1:0,l=n>i?0:1,c=r?0:1;u(a,new p(t,e,0,0,s^c^l,o))}var x=function(a,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(i=(n<3?r(i):n>3?r(e,t,i):r(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let d=class extends D{constructor(e){super(e)}profile(){return z(this.size().scale(.5),this.startAngle()*g,this.endAngle()*g,this.closed(),this.counterclockwise())}desiredSize(){return{x:this.width.context.getter(),y:this.height.context.getter()}}offsetComputedLayout(e){return e}childrenBBox(){return A.fromSizeCentered(this.computedSize())}getPath(){return this.requiresProfile()?this.curveDrawingInfo().path:this.createPath()}getRipplePath(){return this.createPath(this.rippleSize())}getCacheBBox(){return super.getCacheBBox().expand(this.rippleSize())}createPath(e=0){const t=new Path2D,o=this.startAngle()*g;let n=this.endAngle()*g;const i=this.size().scale(.5).add(e),r=this.closed();if(n>o+Math.PI*2){const s=Math.floor((n-o)/(Math.PI*2));n-=Math.PI*2*s}return r&&t.moveTo(0,0),t.ellipse(0,0,i.x,i.y,0,o,n,this.counterclockwise()),r&&t.closePath(),t}};x([m(0),P()],d.prototype,"startAngle",void 0);x([m(360),P()],d.prototype,"endAngle",void 0);x([m(!1),P()],d.prototype,"counterclockwise",void 0);x([L()],d.prototype,"profile",null);d=x([S("Circle")],d);export{d as C};
