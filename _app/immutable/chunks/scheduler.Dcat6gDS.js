function E(){}const D=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function C(t){t.forEach(q)}function A(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let _;function y(t,n){return t===n?!0:(_||(_=document.createElement("a")),_.href=n,t===_.href)}function b(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function H(t,n){const e=b(t.srcset),r=b(n||"");return r.length===e.length&&r.every(([s,c],o)=>c===e[o][1]&&(y(e[o][0],s)||y(s,e[o][0])))}function P(t){return Object.keys(t).length===0}function F(t,...n){if(t==null){for(const r of n)r(void 0);return E}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(F(n,e))}function U(t,n,e,r){if(t){const s=k(t,n,e,r);return t[0](s)}}function k(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const s=t[2](r(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const c=[],o=Math.max(n.dirty.length,s.length);for(let i=0;i<o;i+=1)c[i]=n.dirty[i]|s[i];return c}return n.dirty|s}return n.dirty}function J(t,n,e,r,s,c){if(s){const o=k(n,e,r,c);t.p(o,s)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function N(t){const n={};for(const e in t)n[e]=!0;return n}function Q(t){return t??""}function R(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let h;function d(t){h=t}function f(){if(!h)throw new Error("Function called outside component initialization");return h}function T(t){f().$$.on_mount.push(t)}function V(t){f().$$.after_update.push(t)}function W(t){f().$$.on_destroy.push(t)}function X(t,n){return f().$$.context.set(t,n),n}function Y(t){return f().$$.context.get(t)}const a=[],m=[];let l=[];const x=[],w=Promise.resolve();let g=!1;function O(){g||(g=!0,w.then(z))}function Z(){return O(),w}function v(t){l.push(t)}const p=new Set;let u=0;function z(){if(u!==0)return;const t=h;do{try{for(;u<a.length;){const n=a[u];u++,d(n),B(n.$$)}}catch(n){throw a.length=0,u=0,n}for(d(null),a.length=0,u=0;m.length;)m.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];p.has(e)||(p.add(e),e())}l.length=0}while(a.length);for(;x.length;)x.pop()();g=!1,p.clear(),d(t)}function B(t){if(t.fragment!==null){t.update(),C(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function $(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{a as A,O as B,X as C,Q as D,N as E,Y as F,R as G,H,j as a,y as b,S as c,v as d,L as e,U as f,K as g,I as h,V as i,m as j,W as k,A as l,D as m,E as n,T as o,M as p,z as q,C as r,G as s,Z as t,J as u,P as v,$ as w,h as x,d as y,q as z};