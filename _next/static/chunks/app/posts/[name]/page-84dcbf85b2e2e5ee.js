(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{543:function(e,t,n){Promise.resolve().then(n.bind(n,1087)),Promise.resolve().then(n.bind(n,6095)),Promise.resolve().then(n.t.bind(n,4926,23))},6095:function(e,t,n){"use strict";n.r(t);var a=n(9268),r=n(6006),l=n(5410),o=n(787);t.default=(0,r.forwardRef)(function(e,t){let{children:n,disabled:r,selected:i,style:s,...u}=e,[c,{onFocus:d,onBlur:g}]=(0,o.Z)(),[f,{onMouseEnter:m,onMouseLeave:v}]=(0,l.Z)(),h={onClick(e){r&&e.preventDefault()},onFocus:d,onBlur:g,onMouseEnter:m,onMouseLeave:v,style:{textDecoration:f&&!c?"underline":"none",outlineColor:"transparent",outlineWidth:2,outlineStyle:"dotted",color:f?"var(--blue-300)":"var(--blue-400)",boxShadow:c&&!r?"0 0 0 2px var(--bg), 0 0 0 4px var(--blue-500)":void 0,borderRadius:2,...i&&{color:"var(--blue-100)"},...r&&{cursor:"default",textDecoration:"none"},...s},tabIndex:r?-1:void 0};return"function"==typeof n?n(h):(0,a.jsx)("a",{...h,...u,ref:t,children:n})})},1087:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(9268),r=n(6006),l=n(7508),o=n.n(l),i=n(4610),s=n(4079),u=n(2119),c=n(787);function d(){let[e,{onFocus:t,onBlur:n,...a}]=(0,c.Z)();return(0,u.Z)(a),[e,{onFocus:t,onBlur:n,style:{outlineColor:"transparent",outlineWidth:2,outlineStyle:"dotted",boxShadow:e?"0 0 0 2px var(--bg),0 0 0 4px var(--blue-500)":void 0}}]}var g=n(5410);function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400;return{fontSize:"".concat(e,"em"),fontWeight:t,lineHeight:1.25,marginBlock:"".concat(1.5/e,"em")}}let m={regularBase:f(1,400),boldBase:f(1,700),boldLarge:f(1.2,700),regularXL:f(1.601),regular2XL:f(2),bold2XL:f(2,700),regular3XL:f(2.4),regular4XL:f(3)};var v=(0,r.forwardRef)(function(e,t){let{children:n,margins:r,style:l,variant:o="regularBase",...i}=e,s={style:{...m[o],..."regularBase"===o?{fontSize:"1rem"}:void 0,...r?void 0:{marginBlock:0},...l}};return"function"==typeof n?n(s):(0,a.jsx)("span",{...s,...i,ref:t,children:n})}),h=(0,r.forwardRef)(function(e,t){let{children:n,className:l="",disabled:o,onAnimationStart:i,onBlur:s,onFocus:c,onMouseEnter:f,onMouseLeave:m,style:h,variant:b="primary",...p}=e,[y,{onMouseEnter:x,onMouseLeave:j,...w}]=(0,g.Z)();(0,u.Z)(w);let[,{onBlur:k,onFocus:S,style:Z,...B}]=d();(0,u.Z)(B);let[M,{className:R,onAnimationStart:C,...E}]=function(){let[e,t]=(0,r.useState)(!1);return[e,{onAnimationStart(e){let{animationName:n}=e;"active"===n?t(!0):"not-active"===n&&t(!1)},className:"detect-active"}]}();return(0,u.Z)(E),(0,a.jsx)(v,{children:e=>{let{style:r,...d}=e;(0,u.Z)(d);let g={className:"".concat(R||""," ").concat(l||""),disabled:o,style:{appearance:"none",outline:"none",margin:"0",padding:"0.5em 0.75em",border:0,borderRadius:"0.25em",background:"var(--static-".concat(o?"gray-600":M?"blue-500":"blue-".concat(y?6:7,"00"),")"),color:"var(--static-".concat(o?"gray-300":"white",")"),cursor:o?"not-allowed":"default",...Z,...r,...h}};return"function"==typeof n?n({onAnimationStart:C,onBlur:k,onFocus:S,onMouseEnter:x,onMouseLeave:j,...g}):(0,a.jsx)("button",{onAnimationStart:e=>{null==i||i(e),null==C||C(e)},onFocus:e=>{null==S||S(e),null==c||c(e)},onBlur:e=>{null==k||k(),null==s||s(e)},onMouseEnter:e=>{null==x||x(),null==f||f(e)},onMouseLeave:e=>{null==j||j(),null==m||m(e)},...g,...p,ref:t,children:n})}})}),b=(0,r.forwardRef)(function(e,t){let{as:n,children:r,style:l,...o}=e,i={style:{...n?{color:"var(--fg-".concat(n,")")}:void 0,...l}};return"function"==typeof r?r(i):(0,a.jsx)("span",{...i,...o,ref:t,children:r})}),p=(0,r.forwardRef)(function(e,t){let{children:n,static:r,style:l,theme:o,...i}=e,s=r?"static-":"",u={style:{background:"var(--bg)",color:"var(--fg)","--bg":"var(--".concat(s).concat({black:"black","dark-gray":"gray-800","light-gray":"gray-200",white:"white",default:"gray-900"}[o||"default"],")"),"--fg":"var(--".concat(s).concat("white"===o||"light-gray"===o?"black":"white",")"),"--fg-muted":"var(--".concat(s,"gray-").concat("white"===o||"dark-gray"===o?4:5,"00)"),"--fg-bright":"var(--".concat(s,"gold-").concat("white"===o?"400":"light-gray"===o?"500":"200",")"),"--fg-success":"var(--".concat(s,"green-").concat("white"===o||"light-gray"===o?6:3,"00)"),"--fg-error":"var(--".concat(s,"red-").concat("white"===o||"light-gray"===o?6:3,"00)"),...l}};return"function"==typeof n?n(u):(0,a.jsx)("div",{...u,...i,ref:t,children:n})}),y=(0,r.forwardRef)(function(e,t){let{disabled:n,onBlur:l,onChange:o,value:i,...s}=e;(0,u.Z)(s);let[,{onFocus:c,onBlur:g,style:f,...m}]=d();(0,u.Z)(m);let h=(0,r.useCallback)(e=>{null==g||g(),null==l||l(e)},[g,l]);return(0,a.jsx)("div",{style:{margin:0,display:"inline-flex",borderRadius:"0.25em",...f},children:(0,a.jsx)(p,{theme:"white",static:!0,children:e=>{let{style:r,...l}=e;return(0,u.Z)(l)&&(0,a.jsx)(v,{children:e=>{let{style:l,...d}=e;return(0,u.Z)(d)&&(0,a.jsx)(b,{as:n?"muted":void 0,children:e=>{let{style:d,...g}=e;return(0,u.Z)(g)&&(0,a.jsx)("input",{onBlur:h,onChange:o,onFocus:c,value:i,ref:t,style:{appearance:"none",outline:0,border:0,margin:0,padding:"0.5em 0.75em",borderRadius:"0.25em",width:"100%",cursor:n?"not-allowed":"default",...r,...l,...d},disabled:n,...s})}})}})}})})});let x=i.type({result:i.union([i.literal("success"),i.literal("error")]),msg:i.string});async function j(e){let{name:t,email:n}=e,a=await o()("https://dev.us21.list-manage.com/subscribe/post-json?u=1961e884a06fdad7a53bc160e&id=3f29e7fcdf&f_id=00905ce1f0&FNAME=".concat(encodeURIComponent(t),"&EMAIL=").concat(encodeURIComponent(n)),{jsonpCallback:"c"}),r=await s.decode(x,await a.json());if("error"===r.result){var l;r.msg=(null===(l=r.msg.match(/([0-9\s]+\-\s+)?(.*)/))||void 0===l?void 0:l[2])||r.msg}return r}function w(){let[e,t]=(0,r.useReducer)(function(e,t){let n=JSON.parse(JSON.stringify(e));switch(t.tag){case"data":case"visited":n[t.tag][t.field]="visited"===t.tag||t.value,n.status={tag:"pending"};break;case"submit":let{name:a,email:r}=e.data;n.visited.name=!0,n.visited.email=!0,a&&r&&(n.status={tag:"processing"});break;case"completed":n.status=t}return n},{data:{name:"",email:""},visited:{name:!1,email:!1},status:{tag:"pending"}});(0,r.useEffect)(()=>{if("processing"===e.status.tag){let n=!1;return j(e.data).then(e=>{n||t({tag:"completed",...e})}).catch(()=>{n||t({tag:"completed",result:"error",msg:"I'm sorry, but something went wrong. Please try submitting the form again."})}),()=>{n=!0}}},[e]);let n=(0,r.useMemo)(()=>{let t=e.status;return"processing"===t.tag||"completed"===t.tag&&"success"===t.result},[e.status]);return(0,a.jsx)(p,{theme:"dark-gray",children:r=>{let{style:l,...o}=r;return(0,u.Z)(o)&&(0,a.jsxs)("form",{style:{display:"inline-flex",flexDirection:"column",gap:"0.5em",padding:"2em",...l},onSubmit:e=>{e.preventDefault(),t({tag:"submit"})},children:[(0,a.jsxs)("label",{style:{display:"contents"},children:[(0,a.jsx)(v,{variant:"boldBase",children:"First name"}),(0,a.jsx)(y,{disabled:n,value:e.data.name,onChange:e=>{t({tag:"data",field:"name",value:e.target.value})},onBlur:()=>{t({tag:"visited",field:"name"})}}),(0,a.jsx)(b,{as:"error",children:e.visited.name&&!e.data.name?"Please provide your name.":(0,a.jsx)(a.Fragment,{children:"​"})})]}),(0,a.jsx)("div",{}),(0,a.jsxs)("label",{style:{display:"contents"},children:[(0,a.jsx)(v,{variant:"boldBase",children:"Email address"}),(0,a.jsx)(y,{disabled:n,value:e.data.email,onChange:e=>{t({tag:"data",field:"email",value:e.target.value})},onBlur:()=>{t({tag:"visited",field:"email"})}}),(0,a.jsx)(b,{as:"error",children:e.visited.email&&!e.data.email?"Please provide your email.":(0,a.jsx)(a.Fragment,{children:"​"})})]}),(0,a.jsx)("div",{}),(0,a.jsx)(h,{type:"submit",disabled:n,style:{alignSelf:"center"},children:"Subscribe"}),(0,a.jsx)("div",{}),(0,a.jsx)(b,{style:{textAlign:"center"},as:"completed"===e.status.tag?e.status.result:"muted",children:"completed"===e.status.tag?e.status.msg:(0,a.jsxs)(a.Fragment,{children:["​",(0,a.jsx)("br",{}),"​"]})})]})}})}},787:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(6006);function r(){let[e,t]=(0,a.useState)(!1);return(0,a.useMemo)(()=>[e,{onFocus(e){let{currentTarget:n}=e;n.matches(":focus-visible")&&t(!0)},onBlur(){t(!1)}}],[e])}},5410:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(6006);function r(){let[e,t]=(0,a.useState)(!1);return(0,a.useMemo)(()=>[e,{onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)}}],[e])}},2119:function(e,t,n){"use strict";function a(e){return!0}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[372,253,769,744],function(){return e(e.s=543)}),_N_E=e.O()}]);