(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{8296:function(e,t,a){Promise.resolve().then(a.bind(a,7749)),Promise.resolve().then(a.t.bind(a,4926,23))},7749:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(9268),r=a(6006),l=a(7508),s=a.n(l),i=a(4610),o=a(4079),c=a(2119),u=a(787);function d(){let[e,{onFocus:t,onBlur:a,...n}]=(0,u.Z)();return(0,c.Z)(n),[e,{onFocus:t,onBlur:a,style:{outlineColor:"transparent",outlineWidth:2,outlineStyle:"dotted",boxShadow:e?"0 0 0 2px var(--bg),0 0 0 4px var(--blue-500)":void 0}}]}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400;return{fontSize:"".concat(e,"em"),fontWeight:t,lineHeight:1.25,marginBlock:"".concat(1.5/e,"em")}}let f={regularBase:g(1,400),boldBase:g(1,700),boldLarge:g(1.2,700),regularXL:g(1.601),regular2XL:g(2),bold2XL:g(2,700),regular3XL:g(2.4),regular4XL:g(3)};var m=(0,r.forwardRef)(function(e,t){let{children:a,margins:r,style:l,variant:s="regularBase",...i}=e,o={style:{...f[s],..."regularBase"===s?{fontSize:"1rem"}:void 0,...r?void 0:{marginBlock:0},...l}};return"function"==typeof a?a(o):(0,n.jsx)("span",{...o,...i,ref:t,children:a})}),v=(0,r.forwardRef)(function(e,t){let{children:a,className:l="",disabled:s,onAnimationStart:i,onBlur:o,onFocus:u,onMouseEnter:g,onMouseLeave:f,style:v,variant:h="primary",...b}=e,[y,{onMouseEnter:p,onMouseLeave:x,...j}]=function(){let[e,t]=(0,r.useState)(!1);return(0,r.useMemo)(()=>[e,{onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)}}],[e])}();(0,c.Z)(j);let[,{onBlur:w,onFocus:k,style:B,...S}]=d();(0,c.Z)(S);let[Z,{className:M,onAnimationStart:E,...L}]=function(){let[e,t]=(0,r.useState)(!1);return[e,{onAnimationStart(e){let{animationName:a}=e;"active"===a?t(!0):"not-active"===a&&t(!1)},className:"detect-active"}]}();return(0,c.Z)(L),(0,n.jsx)(m,{children:e=>{let{style:r,...d}=e;(0,c.Z)(d);let m={className:"".concat(M||""," ").concat(l||""),disabled:s,style:{appearance:"none",outline:"none",margin:"0",padding:"0.5em 0.75em",border:0,borderRadius:"0.25em",background:"var(--static-".concat(s?"gray-600":Z?"blue-500":"blue-".concat(y?6:7,"00"),")"),color:"var(--static-".concat(s?"gray-300":"white",")"),cursor:s?"not-allowed":"default",...B,...r,...v}};return"function"==typeof a?a({onAnimationStart:E,onBlur:w,onFocus:k,onMouseEnter:p,onMouseLeave:x,...m}):(0,n.jsx)("button",{onAnimationStart:e=>{null==i||i(e),null==E||E(e)},onFocus:e=>{null==k||k(e),null==u||u(e)},onBlur:e=>{null==w||w(),null==o||o(e)},onMouseEnter:e=>{null==p||p(),null==g||g(e)},onMouseLeave:e=>{null==x||x(),null==f||f(e)},...m,...b,ref:t,children:a})}})}),h=(0,r.forwardRef)(function(e,t){let{as:a,children:r,style:l,...s}=e,i={style:{...a?{color:"var(--fg-".concat(a,")")}:void 0,...l}};return"function"==typeof r?r(i):(0,n.jsx)("span",{...i,...s,ref:t,children:r})}),b=(0,r.forwardRef)(function(e,t){let{children:a,static:r,style:l,theme:s,...i}=e,o=r?"static-":"",c={style:{boxSizing:"border-box",background:"var(--bg)",color:"var(--fg)","--bg":"var(--".concat(o).concat({black:"black","dark-gray":"gray-800","light-gray":"gray-200",white:"white",default:"gray-900"}[s||"default"],")"),"--fg":"var(--".concat(o).concat("white"===s||"light-gray"===s?"black":"white",")"),"--fg-muted":"var(--".concat(o,"gray-").concat("white"===s||"dark-gray"===s?4:5,"00)"),"--fg-bright":"var(--".concat(o,"gold-").concat("white"===s?"400":"light-gray"===s?"500":"200",")"),"--fg-success":"var(--".concat(o,"green-").concat("white"===s||"light-gray"===s?6:3,"00)"),"--fg-error":"var(--".concat(o,"red-").concat("white"===s||"light-gray"===s?6:3,"00)"),"--fg-link":"var(--".concat(o,"blue-").concat("dark-gray"===s?3:4,"00)"),"--fg-link-bright":"var(--".concat(o,"blue-").concat("dark-gray"===s?2:3,"00)"),...l}};return"function"==typeof a?a(c):(0,n.jsx)("div",{...c,...i,ref:t,children:a})}),y=(0,r.forwardRef)(function(e,t){let{disabled:a,onBlur:l,onChange:s,value:i,...o}=e;(0,c.Z)(o);let[,{onFocus:u,onBlur:g,style:f,...v}]=d();(0,c.Z)(v);let y=(0,r.useCallback)(e=>{null==g||g(),null==l||l(e)},[g,l]);return(0,n.jsx)("div",{style:{margin:0,display:"inline-flex",borderRadius:"0.25em",...f},children:(0,n.jsx)(b,{theme:"white",static:!0,children:e=>{let{style:r,...l}=e;return(0,c.Z)(l)&&(0,n.jsx)(m,{children:e=>{let{style:l,...d}=e;return(0,c.Z)(d)&&(0,n.jsx)(h,{as:a?"muted":void 0,children:e=>{let{style:d,...g}=e;return(0,c.Z)(g)&&(0,n.jsx)("input",{onBlur:y,onChange:s,onFocus:u,value:i,ref:t,style:{appearance:"none",outline:0,border:0,margin:0,padding:"0.5em 0.75em",borderRadius:"0.25em",width:"100%",cursor:a?"not-allowed":"default",...r,...l,...d},disabled:a,...o})}})}})}})})});let p=i.type({result:i.union([i.literal("success"),i.literal("error")]),msg:i.string});async function x(e){let{name:t,email:a}=e,n=await s()("https://dev.us21.list-manage.com/subscribe/post-json?u=1961e884a06fdad7a53bc160e&id=3f29e7fcdf&f_id=00905ce1f0&FNAME=".concat(encodeURIComponent(t),"&EMAIL=").concat(encodeURIComponent(a)),{jsonpCallback:"c"}),r=await o.decode(p,await n.json());if("error"===r.result){var l;r.msg=(null===(l=r.msg.match(/([0-9\s]+\-\s+)?(.*)/))||void 0===l?void 0:l[2])||r.msg}return r}function j(){let[e,t]=(0,r.useReducer)(function(e,t){let a=JSON.parse(JSON.stringify(e));switch(t.tag){case"data":case"visited":a[t.tag][t.field]="visited"===t.tag||t.value,a.status={tag:"pending"};break;case"submit":let{name:n,email:r}=e.data;a.visited.name=!0,a.visited.email=!0,n&&r&&(a.status={tag:"processing"});break;case"completed":a.status=t}return a},{data:{name:"",email:""},visited:{name:!1,email:!1},status:{tag:"pending"}});(0,r.useEffect)(()=>{if("processing"===e.status.tag){let a=!1;return x(e.data).then(e=>{a||t({tag:"completed",...e})}).catch(()=>{a||t({tag:"completed",result:"error",msg:"I'm sorry, but something went wrong. Please try submitting the form again."})}),()=>{a=!0}}},[e]);let a=(0,r.useMemo)(()=>{let t=e.status;return"processing"===t.tag||"completed"===t.tag&&"success"===t.result},[e.status]);return(0,n.jsx)(b,{theme:"dark-gray",children:r=>{let{style:l,...s}=r;return(0,c.Z)(s)&&(0,n.jsxs)("form",{style:{display:"inline-flex",flexDirection:"column",gap:"0.5em",padding:"2em",...l},onSubmit:e=>{e.preventDefault(),t({tag:"submit"})},children:[(0,n.jsxs)("label",{style:{display:"contents"},children:[(0,n.jsx)(m,{variant:"boldBase",children:"First name"}),(0,n.jsx)(y,{disabled:a,value:e.data.name,onChange:e=>{t({tag:"data",field:"name",value:e.target.value})},onBlur:()=>{t({tag:"visited",field:"name"})}}),(0,n.jsx)(h,{as:"error",children:e.visited.name&&!e.data.name?"Please provide your name.":(0,n.jsx)(n.Fragment,{children:"​"})})]}),(0,n.jsx)("div",{}),(0,n.jsxs)("label",{style:{display:"contents"},children:[(0,n.jsx)(m,{variant:"boldBase",children:"Email address"}),(0,n.jsx)(y,{disabled:a,value:e.data.email,onChange:e=>{t({tag:"data",field:"email",value:e.target.value})},onBlur:()=>{t({tag:"visited",field:"email"})}}),(0,n.jsx)(h,{as:"error",children:e.visited.email&&!e.data.email?"Please provide your email.":(0,n.jsx)(n.Fragment,{children:"​"})})]}),(0,n.jsx)("div",{}),(0,n.jsx)(v,{type:"submit",disabled:a,style:{alignSelf:"center"},children:"Subscribe"}),(0,n.jsx)("div",{}),(0,n.jsx)(h,{style:{textAlign:"center"},as:"completed"===e.status.tag?e.status.result:"muted",children:"completed"===e.status.tag?e.status.msg:(0,n.jsxs)(n.Fragment,{children:["​",(0,n.jsx)("br",{}),"​"]})})]})}})}},787:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(6006);function r(){let[e,t]=(0,n.useState)(!1);return(0,n.useMemo)(()=>[e,{onFocus(e){let{currentTarget:a}=e;a.matches(":focus-visible")&&t(!0)},onBlur(){t(!1)}}],[e])}},2119:function(e,t,a){"use strict";function n(e){return!0}a.d(t,{Z:function(){return n}})}},function(e){e.O(0,[372,253,769,744],function(){return e(e.s=8296)}),_N_E=e.O()}]);