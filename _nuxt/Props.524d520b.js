import B from"./ProseTh.06286828.js";import V from"./ProseTr.991c0f12.js";import g from"./ProseThead.6f4522f0.js";import b from"./ProseCodeInline.c30e25dd.js";import C from"./ProseTd.25668d0a.js";import R from"./ProseTbody.29e372a3.js";import N from"./ProseTable.c3680249.js";import{a as p,s as F,aa as S,m as c,o,c as l,k as e,j as r,f as d,h as s,b as j,F as A,r as E,t as m}from"./entry.628a9aac.js";import{u as I}from"./asyncData.8ee76958.js";/* empty css                    *//* empty css                    *//* empty css                       *//* empty css                            *//* empty css                    *//* empty css                       */const L=F({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${S(t.of)}`,{data:h}=await I(t.of,()=>$fetch(k),"$9RDwpmty38"),i=c(()=>h.value.props.filter(a=>{var n;return!((n=a.tags)!=null&&n.ignore.includes(a))})),w=c(()=>{var a;return t.required!==void 0?t.required:(a=i.value)==null?void 0:a.find(n=>n.required!==void 0)}),q=c(()=>{var a;return t.values!==void 0?t.values:(a=i.value)==null?void 0:a.find(n=>n.values)}),f=c(()=>{var a;return t.description!==void 0?t.description:(a=i.value)==null?void 0:a.find(n=>n.description)}),y=c(()=>{var a;return t.default!==void 0?t.default:(a=i.value)==null?void 0:a.find(n=>n.default)});return{meta:h,properties:i,showRequired:w,showValues:q,showDescription:f,showDefault:y}}});function Y(t,k,h,i,w,q){var v,D,P;const f=B,y=V,a=g,n=b,_=C,T=R,$=N;return t.meta&&((v=t.meta)!=null&&v.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(o(),l($,{key:0},{default:e(()=>[r(a,null,{default:e(()=>[r(y,null,{default:e(()=>[r(f,null,{default:e(()=>[d("Prop")]),_:1}),r(f,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(o(),l(f,{key:0},{default:e(()=>[d(" Required ")]),_:1})):s("",!0),t.showDefault?(o(),l(f,{key:1},{default:e(()=>[d(" Default ")]),_:1})):s("",!0),t.showValues?(o(),l(f,{key:2},{default:e(()=>[d(" Values ")]),_:1})):s("",!0),t.showDescription?(o(),l(f,{key:3},{default:e(()=>[d(" Description ")]),_:1})):s("",!0)]),_:1})]),_:1}),r(T,null,{default:e(()=>[(o(!0),j(A,null,E(t.properties,u=>(o(),l(y,{key:u.name},{default:e(()=>[r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(o(),l(_,{key:0},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):s("",!0),t.showDefault?(o(),l(_,{key:1},{default:e(()=>[u.default?(o(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):s("",!0)]),_:2},1024)):s("",!0),t.showValues?(o(),l(_,{key:2},{default:e(()=>[u.values?(o(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(o(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):s("",!0),t.showDescription?(o(),l(_,{key:3},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.description),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):s("",!0)}const ne=p(L,[["render",Y]]);export{ne as default};
