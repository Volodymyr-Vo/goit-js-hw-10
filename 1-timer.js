import{f as h,i as p}from"./assets/vendor-BbSUbo7J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u=document.querySelector("#datetime-picker"),i=document.querySelector("[data-start]"),g=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");let d=null,l=null;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0],d<=new Date?(i.disabled=!0,p.error({title:"Error",message:"Please choose a date in the future",position:"topRight"})):i.disabled=!1}};h(u,v);i.addEventListener("click",()=>{u.disabled=!0,i.disabled=!0,l=setInterval(()=>{const t=d-Date.now();if(t<=0){clearInterval(l),f(0,0,0,0),u.disabled=!1;return}const{days:r,hours:s,minutes:n,seconds:e}=L(t);f(r,s,n,e)},1e3)});const f=(t,r,s,n)=>{g.textContent=c(t),b.textContent=c(r),S.textContent=c(s),q.textContent=c(n)},L=t=>{const o=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:a,minutes:m,seconds:y}},c=t=>String(t).padStart(2,"0");
//# sourceMappingURL=1-timer.js.map
