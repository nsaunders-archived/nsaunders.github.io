(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{6384:function(e,t,r){Promise.resolve().then(r.bind(r,6095))},6095:function(e,t,r){"use strict";r.r(t);var n=r(9268),o=r(6006),u=r(5410),i=r(787);t.default=(0,o.forwardRef)(function(e,t){let{children:r,disabled:o,selected:s,style:f,...c}=e,[l,{onFocus:a,onBlur:d}]=(0,i.Z)(),[_,{onMouseEnter:v,onMouseLeave:p}]=(0,u.Z)(),b={onClick(e){o&&e.preventDefault()},onFocus:a,onBlur:d,onMouseEnter:v,onMouseLeave:p,style:{textDecoration:_&&!l?"underline":"none",outlineColor:"transparent",outlineWidth:2,outlineStyle:"dotted",color:_?"var(--fg-link-bright)":"var(--fg-link)",boxShadow:l&&!o?"0 0 0 2px var(--bg), 0 0 0 4px var(--blue-500)":void 0,borderRadius:2,...s&&{color:"var(--blue-100)"},...o&&{cursor:"default",textDecoration:"none"},...f},tabIndex:o?-1:void 0};return"function"==typeof r?r(b):(0,n.jsx)("a",{...b,...c,ref:t,children:r})})},787:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(6006);function o(){let[e,t]=(0,n.useState)(!1);return(0,n.useMemo)(()=>[e,{onFocus(e){let{currentTarget:r}=e;r.matches(":focus-visible")&&t(!0)},onBlur(){t(!1)}}],[e])}},5410:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(6006);function o(){let[e,t]=(0,n.useState)(!1);return(0,n.useMemo)(()=>[e,{onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)}}],[e])}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,u={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!f.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:u,_owner:s.current}}t.Fragment=u,t.jsx=c,t.jsxs=c},9268:function(e,t,r){"use strict";e.exports=r(3177)}},function(e){e.O(0,[253,769,744],function(){return e(e.s=6384)}),_N_E=e.O()}]);