const root=document.documentElement;
try{const t=localStorage.getItem("theme"); if(t) root.dataset.theme=t;}catch(e){}
document.getElementById("themeBtn").addEventListener("click",()=>{
  const dark=root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme=dark?"light":"dark";
  try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}
});
const toast=document.getElementById("toast");
function say(m){toast.textContent=m;toast.hidden=false;clearTimeout(say.t);say.t=setTimeout(()=>toast.hidden=true,1800)}
document.getElementById("copyBtn").addEventListener("click",()=>{
  const el=document.getElementById("email");
  const sel=()=>{const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);say("E-mail selecionado")};
  try{navigator.clipboard.writeText(el.textContent).then(()=>say("E-mail copiado"),sel)}catch(err){sel()}
});