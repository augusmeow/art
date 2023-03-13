import{s as B,I as E,$ as j,J as x,V,_ as H,M as W,o as C,b as I,y as Z,F as K,e as l,h as $,j as N,k as O,a1 as U,t as G,aq as y,T as q,ar as Q,a4 as X,p as Y,i as ee,a as te,a7 as ne,U as F,ai as ae,as as se,at as A,R as D,au as ie,av as J,aw as oe,ax as re,ay as ce,az as ue,aA as M}from"./entry.628a9aac.js";import{r as z}from"./asyncData.8ee76958.js";/* empty css                               */const le=(c=[],o,_)=>{const g=[...o||[]],m=[..._||[]],u=JSON.parse(JSON.stringify(c));for(const t of g)if(t.oldPath)if(m.splice(m.findIndex(a=>a.path===t.oldPath),1),g.find(a=>a.path===t.oldPath))u.push({path:t.path,parsed:t.parsed});else{const a=u.find(v=>v.path===t.oldPath);a&&(a.path=t.path,t.parsed?a.parsed=t.parsed:t.pathMeta&&["_file","_path","_id","_locale"].forEach(v=>{a.parsed[v]=t.pathMeta[v]}))}else if(t.new)u.push({path:t.path,parsed:t.parsed});else{const s=u.find(a=>a.path===t.path);s&&Object.assign(s,{path:t.path,parsed:t.parsed})}for(const t of m)u.splice(u.findIndex(s=>s.path===t.path),1);const r=new Intl.Collator(void 0,{numeric:!0});return u.sort((t,s)=>r.compare(t.path,s.path)),u},S=c=>(Y("data-v-8e024b41"),c=c(),ee(),c),pe=S(()=>l("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),de=S(()=>l("span",null,"Preview mode enabled",-1)),ve={key:0},fe=S(()=>l("div",{id:"__preview_background"},null,-1)),we=S(()=>l("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),_e=S(()=>l("p",null,"Initializing the preview...",-1)),me={key:0},he=S(()=>l("div",{id:"__preview_background"},null,-1)),ye={id:"__preview_loader"},ge=B({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(c){const o=c,_=["__nuxt_preview","__preview_enabled"],g=E(),m=j(),u=x(!0),r=x(!1),t=x(!1),s=x("");let a;const v=async()=>{y("previewToken").value="",q().query.preview="",await Q(q().path),X(()=>{z()}),u.value=!1,s.value="",document.body.classList.remove(..._)},b=async h=>{const w=await o.syncPreview(h);if(t.value!==!0){if(!w){setTimeout(()=>b(h),1e3);return}t.value=!0,g.callHook("nuxt-studio:preview:ready"),m.replace({query:{}}),window.parent&&window.self!==window.parent&&a.disconnect()}};return V(async()=>{a=(await H(()=>import("./index.96f179e1.js"),[],import.meta.url)).connect(`${o.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:o.previewToken.value}});let w;a.on("connect",()=>{w=setTimeout(()=>{t.value||(w=setTimeout(()=>{s.value="Preview sync timed out",t.value=!1},3e4),a.emit("draft:requestSync"))},3e4)});const k=()=>{w&&(clearTimeout(w),w=null)};a.on("draft:sync",async P=>{if(k(),!P){try{a.once("draft:ready",()=>{a.emit("draft:requestSync")}),await o.requestPreviewSyncAPI()}catch(R){switch(k(),R.response.status){case 404:s.value="Preview draft not found",t.value=!1;break;default:s.value="An error occurred while syncing preview",t.value=!1}}return}b(P)}),a.on("draft:unauthorized",()=>{k(),s.value="Unauthorized preview token",t.value=!1}),a.on("disconnect",()=>{k()}),document.body.classList.add(..._),a.on("draft:update",P=>{r.value=!0,o.syncPreview(P),r.value=!1})}),W(()=>{document.body.classList.remove(..._)}),(h,w)=>(C(),I("div",null,[u.value?(C(),I("div",{key:0,id:"__nuxt_preview",class:Z({__preview_ready:t.value,__preview_refreshing:r.value})},[t.value?(C(),I(K,{key:0},[pe,de,l("button",{onClick:v}," Close ")],64)):$("",!0)],2)):$("",!0),N(U,{name:"preview-loading"},{default:O(()=>[u.value&&!t.value&&!s.value?(C(),I("div",ve,[fe,l("div",{id:"__preview_loader"},[we,_e,l("button",{onClick:v}," Cancel ")])])):$("",!0)]),_:1}),N(U,{name:"preview-loading"},{default:O(()=>[s.value?(C(),I("div",me,[he,l("div",ye,[l("p",null,G(s.value),1),l("button",{onClick:v}," Exit preview ")])])):$("",!0)]),_:1})]))}}),ke=te(ge,[["__scopeId","data-v-8e024b41"]]),Pe=se(()=>JSON.parse(JSON.stringify(D()))),Ie=()=>{const c=E(),{studio:o,content:_}=ne().public,g=q(),m=Pe();let u;const r=F("studio-client-db",()=>null),t=F("studio-preview-db-files",()=>[]);r.value||(c.hook("content:storage",e=>{r.value=e}),ae("/non-existing-path").findOne());const s=async(e,n,i=!0)=>{const p=y("previewToken",{sameSite:"none",secure:!0}),f=await e.getKeys(`${p.value}:`);await Promise.all(f.map(T=>e.removeItem(T)));const d=new Set(n.map(T=>T.parsed._id.split(":").shift()));await e.setItem(`${p.value}$`,JSON.stringify({ignoreSources:Array.from(d)})),await Promise.all(n.map(T=>e.setItem(`${p.value}:${T.parsed._id}`,JSON.stringify(T.parsed))))},a=e=>{const n=A(c,D);ie(n,J(e,m)),e||oe(n,m)},v=e=>{var i,p,f,d;const n=(d=(f=(p=(i=c==null?void 0:c.vueApp)==null?void 0:i._context)==null?void 0:p.config)==null?void 0:f.globalProperties)==null?void 0:d.$pinceauTheme;!n||!(n!=null&&n.updateTheme)||(u||(u=JSON.parse(JSON.stringify((n==null?void 0:n.theme.value)||{}))),A(c,n.updateTheme,[J(e,u)]))},b=async e=>{if(t.value=e.files=e.files||t.value||[],!r.value)return!1;const n=le(e.files,e.additions,e.deletions),i=n.filter(d=>!d.path.startsWith(ue));await s(r.value,i,(e.files||[]).length!==0);const p=n.find(d=>d.path===M.appConfig);a(p==null?void 0:p.parsed);const f=n.find(d=>d.path===M.tokensConfig);return v(f==null?void 0:f.parsed),L(),!0},h=async()=>{const e=y("previewToken",{sameSite:"none",secure:!0});await $fetch("api/projects/preview/sync",{baseURL:o==null?void 0:o.apiURL,method:"POST",params:{token:e.value}})},w=()=>{const e=y("previewToken",{sameSite:"none",secure:!0}),n=document.createElement("div");n.id="__nuxt_preview_wrapper",document.body.appendChild(n),re(ke,{previewToken:e,apiURL:o==null?void 0:o.apiURL,syncPreview:b,requestPreviewSyncAPI:h}).mount(n)},k=async e=>{var p,f,d;const n=y("previewToken",{sameSite:"none",secure:!0});if(!e)return null;e=e.replace(/\/$/,"");let i=await((p=r.value)==null?void 0:p.getItem(`${n.value}:${e}`));return i||(i=await((f=r.value)==null?void 0:f.getItem(`cached:${e}`))),i||(i=i=await((d=r.value)==null?void 0:d.getItem(e))),i},P=e=>{var i;const n=y("previewToken",{sameSite:"none",secure:!0});r.value&&r.value.setItem(`${n.value}:${(i=e.parsed)==null?void 0:i._id}`,JSON.stringify(e.parsed))},R=async e=>{var i;const n=y("previewToken",{sameSite:"none",secure:!0});await((i=r.value)==null?void 0:i.removeItem(`${n.value}:${e}`))},L=()=>{if(_!=null&&_.documentDriven){const{pages:e}=A(c,ce);for(const n in e.value)n!==g.path&&delete e.value[n]}A(c,z)};return{apiURL:o==null?void 0:o.apiURL,contentStorage:r,syncPreviewFiles:s,syncPreviewAppConfig:a,syncPreviewTokensConfig:v,requestPreviewSynchronization:h,mountPreviewUI:w,findContentWithId:k,updateContent:P,removeContentWithId:R,requestRerender:L}};export{Ie as useStudio};
