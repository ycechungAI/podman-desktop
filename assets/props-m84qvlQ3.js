const tr="5.22.5",Gn="5";var on;typeof window<"u"&&((on=window.__svelte??(window.__svelte={})).v??(on.v=new Set)).add(Gn);let _e=!1,Wn=!1;function zn(){_e=!0}zn();const rr=1,ur=2,lr=4,sr=8,ir=16,Zn=1,Xn=2,cn=4,Jn=8,Qn=16,ar=4,_n=1,et=2,x=Symbol(),fr="http://www.w3.org/1999/xhtml",Ze=!1,I=2,vn=4,Ae=8,Be=16,q=32,re=64,he=128,N=256,we=512,T=1024,j=2048,z=4096,ne=8192,Se=16384,nt=32768,Oe=65536,dn=1<<17,tt=1<<19,pn=1<<20,F=Symbol("$state"),hn=Symbol("legacy props"),or=Symbol("");var wn=Array.isArray,rt=Array.prototype.indexOf,ut=Array.from,gn=Object.defineProperty,V=Object.getOwnPropertyDescriptor,lt=Object.getOwnPropertyDescriptors,st=Object.prototype,it=Array.prototype,bn=Object.getPrototypeOf;function ie(e){return typeof e=="function"}const ee=()=>{};function at(e){return e()}function ge(e){for(var n=0;n<e.length;n++)e[n]()}function cr(e,n,t=!1){return e===void 0?t?n():n:e}let oe=[],Le=[];function En(){var e=oe;oe=[],ge(e)}function ft(){var e=Le;Le=[],ge(e)}function ot(e){oe.length===0&&queueMicrotask(En),oe.push(e)}function Xe(){oe.length>0&&En(),Le.length>0&&ft()}function yn(e){return e===this.v}function mn(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ue(e){return!mn(e,this.v)}function ct(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _t(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vt(e){throw new Error("https://svelte.dev/e/effect_orphan")}function dt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function _r(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function pt(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ht(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function wt(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function gt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function bt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function P(e,n){var t={f:0,v:e,reactions:null,equals:yn,rv:0,wv:0};return t}function vr(e){return xn(P(e))}function Ve(e,n=!1){var r;const t=P(e);return n||(t.equals=Ue),_e&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(t),t}function dr(e,n=!1){return xn(Ve(e,n))}function xn(e){return d!==null&&!D&&(d.f&I)!==0&&(R===null?Tt([e]):R.push(e)),e}function pr(e,n){return S(e,$(()=>g(e))),n}function S(e,n){return d!==null&&!D&&De()&&(d.f&(I|Be))!==0&&(R===null||!R.includes(e))&&bt(),Me(e,n)}function Me(e,n){return e.equals(n)||(e.v,e.v=n,e.wv=Dn(),Tn(e,j),De()&&h!==null&&(h.f&T)!==0&&(h.f&(q|re))===0&&(L===null?At([e]):L.push(e))),n}function Je(e,n=1){var t=g(e),r=n===1?t++:t--;return S(e,t),r}function Tn(e,n){var t=e.reactions;if(t!==null)for(var r=De(),u=t.length,l=0;l<u;l++){var i=t[l],c=i.f;(c&j)===0&&(!r&&i===h||(C(i,n),(c&(T|N))!==0&&((c&I)!==0?Tn(i,z):Ie(i))))}}function ce(e){var n=I|j,t=d!==null&&(d.f&I)!==0?d:null;return h===null||t!==null&&(t.f&N)!==0?n|=N:h.f|=pn,{ctx:p,deps:null,effects:null,equals:yn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??h}}function Et(e){const n=ce(e);return n.equals=Ue,n}function An(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)W(n[t])}}function yt(e){for(var n=e.parent;n!==null;){if((n.f&I)===0)return n;n=n.parent}return null}function mt(e){var n,t=h;Y(yt(e));try{An(e),n=Rn(e)}finally{Y(t)}return n}function Sn(e){var n=mt(e),t=(U||(e.f&N)!==0)&&e.deps!==null?z:T;C(e,t),e.equals(n)||(e.v=n,e.wv=Dn())}function Q(e,n=null,t){if(typeof e!="object"||e===null||F in e)return e;const r=bn(e);if(r!==st&&r!==it)return e;var u=new Map,l=wn(e),i=P(0);l&&u.set("length",P(e.length));var c;return new Proxy(e,{defineProperty(f,s,_){(!("value"in _)||_.configurable===!1||_.enumerable===!1||_.writable===!1)&&ht();var o=u.get(s);return o===void 0?(o=P(_.value),u.set(s,o)):S(o,Q(_.value,c)),!0},deleteProperty(f,s){var _=u.get(s);if(_===void 0)s in f&&u.set(s,P(x));else{if(l&&typeof s=="string"){var o=u.get("length"),a=Number(s);Number.isInteger(a)&&a<o.v&&S(o,a)}S(_,x),Qe(i)}return!0},get(f,s,_){var w;if(s===F)return e;var o=u.get(s),a=s in f;if(o===void 0&&(!a||(w=V(f,s))!=null&&w.writable)&&(o=P(Q(a?f[s]:x,c)),u.set(s,o)),o!==void 0){var v=g(o);return v===x?void 0:v}return Reflect.get(f,s,_)},getOwnPropertyDescriptor(f,s){var _=Reflect.getOwnPropertyDescriptor(f,s);if(_&&"value"in _){var o=u.get(s);o&&(_.value=g(o))}else if(_===void 0){var a=u.get(s),v=a==null?void 0:a.v;if(a!==void 0&&v!==x)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return _},has(f,s){var v;if(s===F)return!0;var _=u.get(s),o=_!==void 0&&_.v!==x||Reflect.has(f,s);if(_!==void 0||h!==null&&(!o||(v=V(f,s))!=null&&v.writable)){_===void 0&&(_=P(o?Q(f[s],c):x),u.set(s,_));var a=g(_);if(a===x)return!1}return o},set(f,s,_,o){var O;var a=u.get(s),v=s in f;if(l&&s==="length")for(var w=_;w<a.v;w+=1){var E=u.get(w+"");E!==void 0?S(E,x):w in f&&(E=P(x),u.set(w+"",E))}a===void 0?(!v||(O=V(f,s))!=null&&O.writable)&&(a=P(void 0),S(a,Q(_,c)),u.set(s,a)):(v=a.v!==x,S(a,Q(_,c)));var m=Reflect.getOwnPropertyDescriptor(f,s);if(m!=null&&m.set&&m.set.call(o,_),!v){if(l&&typeof s=="string"){var K=u.get("length"),k=Number(s);Number.isInteger(k)&&k>=K.v&&S(K,k+1)}Qe(i)}return!0},ownKeys(f){g(i);var s=Reflect.ownKeys(f).filter(a=>{var v=u.get(a);return v===void 0||v.v!==x});for(var[_,o]of u)o.v!==x&&!(_ in f)&&s.push(_);return s},setPrototypeOf(){wt()}})}function Qe(e,n=1){S(e,e.v+n)}function en(e){return e!==null&&typeof e=="object"&&F in e?e[F]:e}function hr(e,n){return Object.is(en(e),en(n))}var nn,On,Pn,Nn;function xt(){if(nn===void 0){nn=window,On=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype;Pn=V(n,"firstChild").get,Nn=V(n,"nextSibling").get,e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0,Text.prototype.__t=void 0}}function He(e=""){return document.createTextNode(e)}function M(e){return Pn.call(e)}function Ye(e){return Nn.call(e)}function wr(e,n){return M(e)}function gr(e,n){{var t=M(e);return t instanceof Comment&&t.data===""?Ye(t):t}}function br(e,n=1,t=!1){let r=e;for(;n--;)r=Ye(r);return r}function Er(e){e.textContent=""}let pe=!1,be=!1,Ee=null,G=!1,$e=!1;function tn(e){$e=e}let fe=[];let d=null,D=!1;function H(e){d=e}let h=null;function Y(e){h=e}let R=null;function Tt(e){R=e}let y=null,A=0,L=null;function At(e){L=e}let In=1,ye=0,U=!1,B=null;function Dn(){return++In}function ue(e){var o;var n=e.f;if((n&j)!==0)return!0;if((n&z)!==0){var t=e.deps,r=(n&N)!==0;if(t!==null){var u,l,i=(n&we)!==0,c=r&&h!==null&&!U,f=t.length;if(i||c){var s=e,_=s.parent;for(u=0;u<f;u++)l=t[u],(i||!((o=l==null?void 0:l.reactions)!=null&&o.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);i&&(s.f^=we),c&&_!==null&&(_.f&N)===0&&(s.f^=N)}for(u=0;u<f;u++)if(l=t[u],ue(l)&&Sn(l),l.wv>e.wv)return!0}(!r||h!==null&&!U)&&C(e,T)}return!1}function St(e,n){for(var t=n;t!==null;){if((t.f&he)!==0)try{t.fn(e);return}catch{t.f^=he}t=t.parent}throw pe=!1,e}function Ot(e){return(e.f&Se)===0&&(e.parent===null||(e.parent.f&he)===0)}function Pe(e,n,t,r){if(pe){if(t===null&&(pe=!1),Ot(n))throw e;return}t!==null&&(pe=!0);{St(e,n);return}}function Cn(e,n,t=!0){var r=e.reactions;if(r!==null)for(var u=0;u<r.length;u++){var l=r[u];(l.f&I)!==0?Cn(l,n,!1):n===l&&(t?C(l,j):(l.f&T)!==0&&C(l,z),Ie(l))}}function Rn(e){var v;var n=y,t=A,r=L,u=d,l=U,i=R,c=p,f=D,s=e.f;y=null,A=0,L=null,U=(s&N)!==0&&(D||!G||d===null),d=(s&(q|re))===0?e:null,R=null,ln(e.ctx),D=!1,ye++;try{var _=(0,e.fn)(),o=e.deps;if(y!==null){var a;if(me(e,A),o!==null&&A>0)for(o.length=A+y.length,a=0;a<y.length;a++)o[A+a]=y[a];else e.deps=o=y;if(!U)for(a=A;a<o.length;a++)((v=o[a]).reactions??(v.reactions=[])).push(e)}else o!==null&&A<o.length&&(me(e,A),o.length=A);if(De()&&L!==null&&!D&&o!==null&&(e.f&(I|z|j))===0)for(a=0;a<L.length;a++)Cn(L[a],e);return u!==null&&ye++,_}finally{y=n,A=t,L=r,d=u,U=l,R=i,ln(c),D=f}}function Pt(e,n){let t=n.reactions;if(t!==null){var r=rt.call(t,e);if(r!==-1){var u=t.length-1;u===0?t=n.reactions=null:(t[r]=t[u],t.pop())}}t===null&&(n.f&I)!==0&&(y===null||!y.includes(n))&&(C(n,z),(n.f&(N|we))===0&&(n.f^=we),An(n),me(n,0))}function me(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Pt(e,t[r])}function Ne(e){var n=e.f;if((n&Se)===0){C(e,T);var t=h,r=p,u=G;h=e,G=!0;try{(n&Be)!==0?kt(e):kn(e),jn(e);var l=Rn(e);e.teardown=typeof l=="function"?l:null,e.wv=In;var i=e.deps,c;Ze&&Wn&&e.f&j}catch(f){Pe(f,e,t,r||e.ctx)}finally{G=u,h=t}}}function Nt(){try{dt()}catch(e){if(Ee!==null)Pe(e,Ee,null);else throw e}}function Ln(){var e=G;try{var n=0;for(G=!0;fe.length>0;){n++>1e3&&Nt();var t=fe,r=t.length;fe=[];for(var u=0;u<r;u++){var l=Dt(t[u]);It(l)}}}finally{be=!1,G=e,Ee=null}}function It(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Se|ne))===0)try{ue(r)&&(Ne(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Bn(r):r.fn=null))}catch(u){Pe(u,r,null,r.ctx)}}}function Ie(e){be||(be=!0,queueMicrotask(Ln));for(var n=Ee=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(re|q))!==0){if((t&T)===0)return;n.f^=T}}fe.push(n)}function Dt(e){for(var n=[],t=e;t!==null;){var r=t.f,u=(r&(q|re))!==0,l=u&&(r&T)!==0;if(!l&&(r&ne)===0){if((r&vn)!==0)n.push(t);else if(u)t.f^=T;else{var i=d;try{d=t,ue(t)&&Ne(t)}catch(s){Pe(s,t,null,t.ctx)}finally{d=i}}var c=t.first;if(c!==null){t=c;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)t=f.next,f=f.parent}return n}function Ct(e){var n;for(Xe();fe.length>0;)be=!0,Ln(),Xe();return n}async function yr(){await Promise.resolve(),Ct()}function g(e){var n=e.f,t=(n&I)!==0;if(B!==null&&B.add(e),d!==null&&!D){R!==null&&R.includes(e)&&gt();var r=d.deps;e.rv<ye&&(e.rv=ye,y===null&&r!==null&&r[A]===e?A++:y===null?y=[e]:(!U||!y.includes(e))&&y.push(e))}else if(t&&e.deps===null&&e.effects===null){var u=e,l=u.parent;l!==null&&(l.f&N)===0&&(u.f^=N)}return t&&(u=e,ue(u)&&Sn(u)),e.v}function Rt(e){var n=B;B=new Set;var t=B,r;try{if($(e),n!==null)for(r of B)n.add(r)}finally{B=n}return t}function mr(e){var n=Rt(()=>$(e));for(var t of n)if((t.f&dn)!==0)for(const r of t.deps||[])(r.f&I)===0&&Me(r,r.v);else Me(t,t.v)}function $(e){var n=D;try{return D=!0,e()}finally{D=n}}const Lt=-7169;function C(e,n){e.f=e.f&Lt|n}function xr(e,n){var t={};for(var r in e)n.includes(r)||(t[r]=e[r]);return t}function Mt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(F in e)Fe(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&F in t&&Fe(t)}}}function Fe(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Fe(e[r],n)}catch{}const t=bn(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=lt(t);for(let u in r){const l=r[u].get;if(l)try{l.call(e)}catch{}}}}}function Mn(e){h===null&&d===null&&vt(),d!==null&&(d.f&N)!==0&&h===null&&_t(),$e&&ct()}function Ft(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function le(e,n,t,r=!0){var u=h,l={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:e|j,first:null,fn:n,last:null,next:null,parent:u,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Ne(l),l.f|=nt}catch(f){throw W(l),f}else n!==null&&Ie(l);var i=t&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(pn|he))===0;if(!i&&r&&(u!==null&&Ft(l,u),d!==null&&(d.f&I)!==0)){var c=d;(c.effects??(c.effects=[])).push(l)}return l}function Fn(e){const n=le(Ae,null,!1);return C(n,T),n.teardown=e,n}function rn(e){Mn();var n=h!==null&&(h.f&q)!==0&&p!==null&&!p.m;if(n){var t=p;(t.e??(t.e=[])).push({fn:e,effect:h,reaction:d})}else{var r=qn(e);return r}}function qt(e){return Mn(),Ke(e)}function jt(e){const n=le(re,e,!0);return(t={})=>new Promise(r=>{t.outro?Te(n,()=>{W(n),r(void 0)}):(W(n),r(void 0))})}function qn(e){return le(vn,e,!1)}function Tr(e,n){var t=p,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ke(()=>{e(),!r.ran&&(r.ran=!0,S(t.l.r2,!0),$(n))})}function Ar(){var e=p;Ke(()=>{if(g(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&T)!==0&&C(t,z),ue(t)&&Ne(t),n.ran=!1}e.l.r2.v=!1}})}function Ke(e){return le(Ae,e,!0)}function Sr(e,n=[],t=ce){const r=n.map(t);return Ge(()=>e(...r.map(g)))}function Ge(e,n=0){return le(Ae|Be|n,e,!0)}function xe(e,n=!0){return le(Ae|q,e,!0,n)}function jn(e){var n=e.teardown;if(n!==null){const t=$e,r=d;tn(!0),H(null);try{n.call(null)}finally{tn(t),H(r)}}}function kn(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&re)!==0?t.parent=null:W(t,n),t=r}}function kt(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&q)===0&&W(n),n=t}}function W(e,n=!0){var t=!1;if((n||(e.f&tt)!==0)&&e.nodes_start!==null){for(var r=e.nodes_start,u=e.nodes_end;r!==null;){var l=r===u?null:Ye(r);r.remove(),r=l}t=!0}kn(e,n&&!t),me(e,0),C(e,Se);var i=e.transitions;if(i!==null)for(const f of i)f.stop();jn(e);var c=e.parent;c!==null&&c.first!==null&&Bn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Bn(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Te(e,n){var t=[];Un(e,t,!0),Bt(t,()=>{W(e),n&&n()})}function Bt(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var u of e)u.out(r)}else n()}function Un(e,n,t){if((e.f&ne)===0){if(e.f^=ne,e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&n.push(i);for(var r=e.first;r!==null;){var u=r.next,l=(r.f&Oe)!==0||(r.f&q)!==0;Un(r,n,l?t:!1),r=u}}}function un(e){Vn(e,!0)}function Vn(e,n){if((e.f&ne)!==0){e.f^=ne,(e.f&T)===0&&(e.f^=T),ue(e)&&(C(e,j),Ie(e));for(var t=e.first;t!==null;){var r=t.next,u=(t.f&Oe)!==0||(t.f&q)!==0;Vn(t,u?n:!1),t=r}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||n)&&l.in()}}function Ut(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let p=null;function ln(e){p=e}function Or(e){return We().get(e)}function Pr(e,n){return We().set(e,n),n}function Nr(e){return We().has(e)}function Vt(e,n=!1,t){p={p,c:null,e:null,m:!1,s:e,x:null,l:null},_e&&!n&&(p.l={s:null,u:null,r1:[],r2:P(!1)})}function Ht(e){const n=p;if(n!==null){e!==void 0&&(n.x=e);const i=n.e;if(i!==null){var t=h,r=d;n.e=null;try{for(var u=0;u<i.length;u++){var l=i[u];Y(l.effect),H(l.reaction),qn(l.fn)}}finally{Y(t),H(r)}}p=n.p,n.m=!0}return e||{}}function De(){return!_e||p!==null&&p.l===null}function We(e){return p===null&&Ut(),p.c??(p.c=new Map(Yt(p)||void 0))}function Yt(e){let n=e.p;for(;n!==null;){const t=n.c;if(t!==null)return t;n=n.p}return null}const $t=["touchstart","touchmove"];function Kt(e){return $t.includes(e)}let sn=!1;function Gt(){sn||(sn=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function Hn(e){var n=d,t=h;H(null),Y(null);try{return e()}finally{H(n),Y(t)}}function Ir(e,n,t,r=t){e.addEventListener(n,()=>Hn(t));const u=e.__on_r;u?e.__on_r=()=>{u(),r(!0)}:e.__on_r=()=>r(!0),Gt()}const Yn=new Set,qe=new Set;function Wt(e,n,t,r={}){function u(l){if(r.capture||ae.call(n,l),!l.cancelBubble)return Hn(()=>t==null?void 0:t.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ot(()=>{n.addEventListener(e,u,r)}):n.addEventListener(e,u,r),u}function Dr(e,n,t,r,u){var l={capture:r,passive:u},i=Wt(e,n,t,l);(n===document.body||n===window||n===document)&&Fn(()=>{n.removeEventListener(e,i,l)})}function Cr(e){for(var n=0;n<e.length;n++)Yn.add(e[n]);for(var t of qe)t(e)}function ae(e){var k;var n=this,t=n.ownerDocument,r=e.type,u=((k=e.composedPath)==null?void 0:k.call(e))||[],l=u[0]||e.target,i=0,c=e.__root;if(c){var f=u.indexOf(c);if(f!==-1&&(n===document||n===window)){e.__root=n;return}var s=u.indexOf(n);if(s===-1)return;f<=s&&(i=f)}if(l=u[i]||e.target,l!==n){gn(e,"currentTarget",{configurable:!0,get(){return l||t}});var _=d,o=h;H(null),Y(null);try{for(var a,v=[];l!==null;){var w=l.assignedSlot||l.parentNode||l.host||null;try{var E=l["__"+r];if(E!==void 0&&(!l.disabled||e.target===l))if(wn(E)){var[m,...K]=E;m.apply(l,[e,...K])}else E.call(l,e)}catch(O){a?v.push(O):a=O}if(e.cancelBubble||w===n||w===null)break;l=w}if(a){for(let O of v)queueMicrotask(()=>{throw O});throw a}}finally{e.__root=n,delete e.currentTarget,H(_),Y(o)}}}function $n(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function te(e,n){var t=h;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function Rr(e,n){var t=(n&_n)!==0,r=(n&et)!==0,u,l=!e.startsWith("<!>");return()=>{u===void 0&&(u=$n(l?e:"<!>"+e),t||(u=M(u)));var i=r||On?document.importNode(u,!0):u.cloneNode(!0);if(t){var c=M(i),f=i.lastChild;te(c,f)}else te(i,i);return i}}function Lr(e,n,t="svg"){var r=!e.startsWith("<!>"),u=(n&_n)!==0,l=`<${t}>${r?e:"<!>"+e}</${t}>`,i;return()=>{if(!i){var c=$n(l),f=M(c);if(u)for(i=document.createDocumentFragment();M(f);)i.appendChild(M(f));else i=M(f)}var s=i.cloneNode(!0);if(u){var _=M(s),o=s.lastChild;te(_,o)}else te(s,s);return s}}function Mr(e=""){{var n=He(e+"");return te(n,n),n}}function Fr(){var e=document.createDocumentFragment(),n=document.createComment(""),t=He();return e.append(n,t),te(n,t),e}function qr(e,n){e!==null&&e.before(n)}let an=!0;function jr(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function kr(e,n){return zt(e,n)}const X=new Map;function zt(e,{target:n,anchor:t,props:r={},events:u,context:l,intro:i=!0}){xt();var c=new Set,f=o=>{for(var a=0;a<o.length;a++){var v=o[a];if(!c.has(v)){c.add(v);var w=Kt(v);n.addEventListener(v,ae,{passive:w});var E=X.get(v);E===void 0?(document.addEventListener(v,ae,{passive:w}),X.set(v,1)):X.set(v,E+1)}}};f(ut(Yn)),qe.add(f);var s=void 0,_=jt(()=>{var o=t??n.appendChild(He());return xe(()=>{if(l){Vt({});var a=p;a.c=l}u&&(r.$$events=u),an=i,s=e(o,r)||{},an=!0,l&&Ht()}),()=>{var w;for(var a of c){n.removeEventListener(a,ae);var v=X.get(a);--v===0?(document.removeEventListener(a,ae),X.delete(a)):X.set(a,v)}qe.delete(f),o!==t&&((w=o.parentNode)==null||w.removeChild(o))}});return je.set(s,_),s}let je=new WeakMap;function Br(e,n){const t=je.get(e);return t?(je.delete(e),t(n)):Promise.resolve()}function Ur(e,n,[t,r]=[0,0]){var u=e,l=null,i=null,c=x,f=t>0?Oe:0,s=!1;const _=(a,v=!0)=>{s=!0,o(v,a)},o=(a,v)=>{c!==(c=a)&&(c?(l?un(l):v&&(l=xe(()=>v(u))),i&&Te(i,()=>{i=null})):(i?un(i):v&&(i=xe(()=>v(u,[t+1,r]))),l&&Te(l,()=>{l=null})))};Ge(()=>{s=!1,n(_),s||o(null,null)},f)}function Vr(e,n,t){var r=e,u,l;Ge(()=>{u!==(u=n())&&(l&&(Te(l),l=null),u&&(l=xe(()=>t(r,u))))},Oe)}function Hr(e=!1){const n=p,t=n.l.u;if(!t)return;let r=()=>Mt(n.s);if(e){let u=0,l={};const i=ce(()=>{let c=!1;const f=n.s;for(const s in f)f[s]!==l[s]&&(l[s]=f[s],c=!0);return c&&u++,u});r=()=>g(i)}t.b.length&&qt(()=>{fn(n,r),ge(t.b)}),rn(()=>{const u=$(()=>t.m.map(at));return()=>{for(const l of u)typeof l=="function"&&l()}}),t.a.length&&rn(()=>{fn(n,r),ge(t.a)})}function fn(e,n){if(e.l.s)for(const t of e.l.s)g(t);n()}function Kn(e,n,t){if(e==null)return n(void 0),ee;const r=$(()=>e.subscribe(n,t));return r.unsubscribe?()=>r.unsubscribe():r}const J=[];function Yr(e,n=ee){let t=null;const r=new Set;function u(c){if(mn(e,c)&&(e=c,t)){const f=!J.length;for(const s of r)s[1](),J.push(s,e);if(f){for(let s=0;s<J.length;s+=2)J[s][0](J[s+1]);J.length=0}}}function l(c){u(c(e))}function i(c,f=ee){const s=[c,f];return r.add(s),r.size===1&&(t=n(u,l)||ee),c(e),()=>{r.delete(s),r.size===0&&t&&(t(),t=null)}}return{set:u,update:l,subscribe:i}}function Zt(e){let n;return Kn(e,t=>n=t)(),n}let de=!1,ke=Symbol();function $r(e,n,t){const r=t[n]??(t[n]={store:null,source:Ve(void 0),unsubscribe:ee});if(r.store!==e&&!(ke in t))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=ee;else{var u=!0;r.unsubscribe=Kn(e,l=>{u?r.source.v=l:S(r.source,l)}),u=!1}return e&&ke in t?Zt(e):g(r.source)}function Kr(){const e={};function n(){Fn(()=>{for(var t in e)e[t].unsubscribe();gn(e,ke,{enumerable:!1,value:!0})})}return[e,n]}function Xt(e){var n=de;try{return de=!1,[e(),de]}finally{de=n}}const Jt={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Gr(e,n,t){return new Proxy({props:e,exclude:n},Jt)}const Qt={get(e,n){if(!e.exclude.includes(n))return g(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=nr({get[n](){return e.props[n]}},n,cn)),e.special[n](t),Je(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),Je(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Wr(e,n){return new Proxy({props:e,exclude:n,special:{},version:P(0)},Qt)}const er={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ie(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let u=e.props[r];ie(u)&&(u=u());const l=V(u,n);if(l&&l.set)return l.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ie(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const u=V(r,n);return u&&!u.configurable&&(u.configurable=!0),u}}},has(e,n){if(n===F||n===hn)return!1;for(let t of e.props)if(ie(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props){ie(t)&&(t=t());for(const r in t)n.includes(r)||n.push(r)}return n}};function zr(...e){return new Proxy({props:e},er)}function nr(e,n,t,r){var ze;var u=(t&Zn)!==0,l=!_e||(t&Xn)!==0,i=(t&Jn)!==0,c=(t&Qn)!==0,f=!1,s;i?[s,f]=Xt(()=>e[n]):s=e[n];var _=F in e||hn in e,o=i&&(((ze=V(e,n))==null?void 0:ze.set)??(_&&n in e&&(b=>e[n]=b)))||void 0,a=r,v=!0,w=!1,E=()=>(w=!0,v&&(v=!1,c?a=$(r):a=r),a);s===void 0&&r!==void 0&&(o&&l&&pt(),s=E(),o&&o(s));var m;if(l)m=()=>{var b=e[n];return b===void 0?E():(v=!0,w=!1,b)};else{var K=(u?ce:Et)(()=>e[n]);K.f|=dn,m=()=>{var b=g(K);return b!==void 0&&(a=void 0),b===void 0?a:b}}if((t&cn)===0)return m;if(o){var k=e.$$legacy;return function(b,Z){return arguments.length>0?((!l||!Z||k||f)&&o(Z?m():b),b):m()}}var O=!1,Ce=!1,ve=Ve(s),se=ce(()=>{var b=m(),Z=g(ve);return O?(O=!1,Ce=!0,Z):(Ce=!1,ve.v=b)});return u||(se.equals=Ue),function(b,Z){if(B!==null&&(O=Ce,m(),g(ve)),arguments.length>0){const Re=Z?g(se):l&&i?Q(b):b;return se.equals(Re)||(O=!0,S(ve,Re),w&&a!==void 0&&(a=Re),$(()=>g(se))),b}return g(se)}}export{Q as $,$ as A,ot as B,Ut as C,p as D,wn as E,rn as F,_r as G,_e as H,Tr as I,Ar as J,Dr as K,Mt as L,Yr as M,Kr as N,$r as O,or as P,fr as Q,bn as R,F as S,lt as T,Ge as U,Oe as V,xe as W,W as X,Nr as Y,Pr as Z,Or as _,qr as a,vr as a0,Gr as a1,ce as a2,kr as a3,Br as a4,He as a5,lr as a6,un as a7,Te as a8,ne as a9,hr as aA,Cr as aB,Je as aC,nn as aD,pr as aE,yr as aF,mr as aG,tr as aH,cr as aI,ut as aa,h as ab,rr as ac,Me as ad,ur as ae,Ve as af,P as ag,sr as ah,Un as ai,Er as aj,Bt as ak,Ye as al,ir as am,an,Be as ao,nt as ap,ar as aq,Hn as ar,ie as as,H as at,Y as au,d as av,Ir as aw,De as ax,V as ay,Fn as az,Ht as b,zr as c,Mr as d,Sr as e,gr as f,jr as g,xr as h,Hr as i,wr as j,Fr as k,g as l,Et as m,ee as n,Wr as o,Vt as p,nr as q,Lr as r,br as s,Rr as t,Ur as u,S as v,dr as w,Vr as x,qn as y,Ke as z};
