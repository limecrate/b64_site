(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const w of l.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&r(w)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function T(e,t=!1,n=!1){return Uint8Array.prototype.toBase64?(console.log("Encode with toBase64!"),e.toBase64({alphabet:t?"base64url":"base64",omitPadding:n})):(console.log("Encode with compatible mode"),E(e,t,n))}function A(e,t=!1){return Uint8Array.fromBase64?(console.log("Decode with fromBase64!"),Uint8Array.fromBase64(e,{alphabet:t?"base64url":"base64"})):(console.log("Decode with compatible mode"),C(e,t))}function E(e,t=!1,n=!1){const r=Array.from(e,l=>String.fromCodePoint(l)).join(""),o=btoa(r);return!t&&!n?o:t?n?o.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""):o.replace(/\+/g,"-").replace(/\//g,"_"):o.replace(/=+$/,"")}function C(e,t=!1){const n=t?e.replace(/-/g,"+").replace(/_/g,"/"):e,r=atob(n);return Uint8Array.from(r,o=>o.codePointAt(0))}const I=[{ext:"png",sig:[137,80,78,71,13,10,26,10]},{ext:"jpg",sig:[255,216,255,224]},{ext:"jpg",sig:[255,216,255,225]},{ext:"webp",sig:[82,73,70,70,null,null,null,null,87,69,66,80]},{ext:"gif",sig:[71,73,70,56,55,97]},{ext:"gif",sig:[71,73,70,56,57,97]},{ext:"bmp",sig:[66,77]},{ext:"mp3",sig:[255,251]},{ext:"ogg",sig:[79,103,103,83]},{ext:"wav",sig:[82,73,70,70,null,null,null,null,87,65,86,69]},{ext:"zip",sig:[80,75,3,4]},{ext:"7z",sig:[55,122,188,175,39,28]},{ext:"gz",sig:[31,139]},{ext:"xz",sig:[253,55,122,88,90,0]},{ext:"ttf",sig:[116,114,117,101,0]},{ext:"otf",sig:[79,84,84,79,0]},{ext:"woff",sig:[119,79,70,70]},{ext:"woff2",sig:[119,79,70,50]},{ext:"pdf",sig:[37,80,68,70,45]},{ext:"wasm",sig:[0,97,115,109]},{ext:"exe",sig:[90,77]},{ext:"webm",sig:[26,69,223,163]},{ext:"doc",sig:[208,207,17,224,161,177,26,225]},{ext:"mp4",sig:[null,null,null,null,102,116,121,112,105,115,111,109]},{ext:"mov",sig:[null,null,null,null,102,116,121,112,113,116,32,32]},{ext:"mov",sig:[null,null,null,null,109,111,111,118]},{ext:"avif",sig:[null,null,null,null,102,116,121,112,97,118,105,102]},{ext:"heif",sig:[null,null,null,null,0,0,0,24,102,116,121,112,104,101,105,99]}],u=1024,d=1048576,g=1073741824,m=1099511627776,p=0x4000000000000;function R(e){let t=0;for(const n of I){for(t=0;t<n.sig.length&&!(n.sig[t]!==null&&e[t]!==n.sig[t]);t+=1);if(t===n.sig.length)return n.ext}return"txt"}function h(e){return e?e<u?`${e} B`:e<d?`${e%u?(e/u).toFixed(1):e/u} KiB`:e<g?`${e%d?(e/d).toFixed(1):e/d} MiB`:e<m?`${e%g?(e/g).toFixed(1):e/g} GiB`:e<p?`${e%m?(e/m).toFixed(1):e/m} TiB`:`${e%p?(e/p).toFixed(1):e/p} PiB`:""}function L(e,t,n=!0){return n?e.startsWith(".")?`.${e.slice(1).replace(/\./g,"_")}.${t}`:`${e.replace(/\./g,"_")}.${t}`:`${e}.${t}`}const i=document.querySelector("#file-input"),s=document.querySelector("#download"),P=document.querySelector("#to-b64"),U=document.querySelector("#to-b64-url-safe"),v=document.querySelector("#to-b64-omit-padding"),M=document.querySelector("#to-bin"),$=document.querySelector("#to-bin-url-safe"),_=document.querySelector("#file-names");document.querySelector("#file-size");const q=document.querySelector("#download > span"),b=document.querySelector("#message"),S=document.querySelector("#processing-modal");let c=localStorage.getItem("isToB64Url")==="true",a=localStorage.getItem("isToB64Omit")==="true",x=localStorage.getItem("isToBinUrl")==="true";f(U,c);f(v,a);f($,x);i.addEventListener("change",function(e){var n,r,o;_.textContent=((n=i.files[0])==null?void 0:n.name.normalize("NFC"))??"";const t=h((r=i.files[0])==null?void 0:r.size);t.textContent=t?`(${h((o=i.files[0])==null?void 0:o.size)})`:"",B(b),B(s)});P.addEventListener("click",function(){if(!i.files.length){y("Upload file to encode");return}O("Encoding...");const e=new FileReader;e.onload=function(){try{const t=new Uint8Array(e.result),n=T(t,c,a),r=new Blob([n],{type:"text/plain"}),o=URL.createObjectURL(r),l=L(i.files[0].name,"txt");q.textContent=h(r.size),s.href=o,s.download=l,F(s)}catch(t){console.error(t),y(`Failed encoding..
File size might be too large.`)}finally{S.close()}},e.readAsArrayBuffer(i.files[0])});M.addEventListener("click",function(){if(!i.files.length){y("Upload file to decode");return}O("Decoding...");const e=new FileReader;e.onload=function(){try{const t=A(e.result,x);if(t.length===0)throw new Error("Something wrong. Result is 0 bytes");const n=new Blob([t]),r=URL.createObjectURL(n),o=L(i.files[0].name,R(t));q.textContent=h(n.size),s.href=r,s.download=o,F(s)}catch(t){console.error(t),y(`Failed decoding..
`+(x?"This file might be invalid or too large.":"Try to use URL safe option."))}finally{S.close()}},e.readAsText(i.files[0])});U.addEventListener("click",function(){c=!c,f(this,c),localStorage.setItem("isToB64Url",c)});v.addEventListener("click",function(){a=!a,f(this,a),localStorage.setItem("isToB64Omit",a)});$.addEventListener("click",function(){x=!x,f(this,x),localStorage.setItem("isToBinUrl",x)});function f(e,t){t?(e.classList.remove("push"),e.classList.add("half-push")):(e.classList.remove("half-push"),e.classList.add("push"))}function y(e){b.textContent=e,b.classList.remove("hide")}function B(e){e.classList.add("hide")}function F(e){e.classList.remove("hide")}function O(e){B(b),B(s),document.querySelector("#processing-modal > span").textContent=e,S.showModal()}
