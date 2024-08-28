"use strict";exports.id=582,exports.ids=[582],exports.modules={7165:(e,t,a)=>{a.d(t,{default:()=>r.a});var n=a(1251),r=a.n(n)},4332:(e,t,a)=>{var n=a(4453);a.o(n,"redirect")&&a.d(t,{redirect:function(){return n.redirect}}),a.o(n,"usePathname")&&a.d(t,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}})},1586:(e,t,a)=>{a.d(t,{Fw:()=>b,fC:()=>R,wy:()=>m});var n=a(1183),r=a(7539),o=a(5508),s=a(7911),i=a(4076),l=a(7430),d=a(464),c=a(2988),u=a(2232),p=a(577),v="Collapsible",[h,g]=(0,o.b)(v),[f,y]=h(v),k=n.forwardRef((e,t)=>{let{__scopeCollapsible:a,open:r,defaultOpen:o,disabled:i,onOpenChange:l,...c}=e,[v=!1,h]=(0,s.T)({prop:r,defaultProp:o,onChange:l});return(0,p.jsx)(f,{scope:a,disabled:i,contentId:(0,u.M)(),open:v,onOpenToggle:n.useCallback(()=>h(e=>!e),[h]),children:(0,p.jsx)(d.WV.div,{"data-state":I(v),"data-disabled":i?"":void 0,...c,ref:t})})});k.displayName=v;var M="CollapsibleTrigger",m=n.forwardRef((e,t)=>{let{__scopeCollapsible:a,...n}=e,o=y(M,a);return(0,p.jsx)(d.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":I(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...n,ref:t,onClick:(0,r.M)(e.onClick,o.onOpenToggle)})});m.displayName=M;var x="CollapsibleContent",b=n.forwardRef((e,t)=>{let{forceMount:a,...n}=e,r=y(x,e.__scopeCollapsible);return(0,p.jsx)(c.z,{present:a||r.open,children:({present:e})=>(0,p.jsx)(C,{...n,ref:t,present:e})})});b.displayName=x;var C=n.forwardRef((e,t)=>{let{__scopeCollapsible:a,present:r,children:o,...s}=e,c=y(x,a),[u,v]=n.useState(r),h=n.useRef(null),g=(0,l.e)(t,h),f=n.useRef(0),k=f.current,M=n.useRef(0),m=M.current,b=c.open||u,C=n.useRef(b),R=n.useRef();return n.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,i.b)(()=>{let e=h.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();f.current=t.height,M.current=t.width,C.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),v(r)}},[c.open,r]),(0,p.jsx)(d.WV.div,{"data-state":I(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!b,...s,ref:g,style:{"--radix-collapsible-content-height":k?`${k}px`:void 0,"--radix-collapsible-content-width":m?`${m}px`:void 0,...e.style},children:b&&o})});function I(e){return e?"open":"closed"}var R=k},8473:(e,t,a)=>{a.d(t,{Dx:()=>ea,VY:()=>et,aV:()=>ee,dk:()=>en,fC:()=>G,h_:()=>Q,x8:()=>er,xz:()=>J});var n=a(1183),r=a(7539),o=a(7430),s=a(5508),i=a(2232),l=a(7911),d=a(5305),c=a(8806),u=a(852),p=a(2988),v=a(464),h=a(7441),g=a(1686),f=a(5118),y=a(5742),k=a(577),M="Dialog",[m,x]=(0,s.b)(M),[b,C]=m(M),I=e=>{let{__scopeDialog:t,children:a,open:r,defaultOpen:o,onOpenChange:s,modal:d=!0}=e,c=n.useRef(null),u=n.useRef(null),[p=!1,v]=(0,l.T)({prop:r,defaultProp:o,onChange:s});return(0,k.jsx)(b,{scope:t,triggerRef:c,contentRef:u,contentId:(0,i.M)(),titleId:(0,i.M)(),descriptionId:(0,i.M)(),open:p,onOpenChange:v,onOpenToggle:n.useCallback(()=>v(e=>!e),[v]),modal:d,children:a})};I.displayName=M;var R="DialogTrigger",D=n.forwardRef((e,t)=>{let{__scopeDialog:a,...n}=e,s=C(R,a),i=(0,o.e)(t,s.triggerRef);return(0,k.jsx)(v.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":L(s.open),...n,ref:i,onClick:(0,r.M)(e.onClick,s.onOpenToggle)})});D.displayName=R;var Z="DialogPortal",[w,j]=m(Z,{forceMount:void 0}),N=e=>{let{__scopeDialog:t,forceMount:a,children:r,container:o}=e,s=C(Z,t);return(0,k.jsx)(w,{scope:t,forceMount:a,children:n.Children.map(r,e=>(0,k.jsx)(p.z,{present:a||s.open,children:(0,k.jsx)(u.h,{asChild:!0,container:o,children:e})}))})};N.displayName=Z;var F="DialogOverlay",O=n.forwardRef((e,t)=>{let a=j(F,e.__scopeDialog),{forceMount:n=a.forceMount,...r}=e,o=C(F,e.__scopeDialog);return o.modal?(0,k.jsx)(p.z,{present:n||o.open,children:(0,k.jsx)(_,{...r,ref:t})}):null});O.displayName=F;var _=n.forwardRef((e,t)=>{let{__scopeDialog:a,...n}=e,r=C(F,a);return(0,k.jsx)(g.Z,{as:y.g7,allowPinchZoom:!0,shards:[r.contentRef],children:(0,k.jsx)(v.WV.div,{"data-state":L(r.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),P="DialogContent",E=n.forwardRef((e,t)=>{let a=j(P,e.__scopeDialog),{forceMount:n=a.forceMount,...r}=e,o=C(P,e.__scopeDialog);return(0,k.jsx)(p.z,{present:n||o.open,children:o.modal?(0,k.jsx)(W,{...r,ref:t}):(0,k.jsx)(A,{...r,ref:t})})});E.displayName=P;var W=n.forwardRef((e,t)=>{let a=C(P,e.__scopeDialog),s=n.useRef(null),i=(0,o.e)(t,a.contentRef,s);return n.useEffect(()=>{let e=s.current;if(e)return(0,f.Ry)(e)},[]),(0,k.jsx)(V,{...e,ref:i,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,r.M)(e.onCloseAutoFocus,e=>{e.preventDefault(),a.triggerRef.current?.focus()}),onPointerDownOutside:(0,r.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,r.M)(e.onFocusOutside,e=>e.preventDefault())})}),A=n.forwardRef((e,t)=>{let a=C(P,e.__scopeDialog),r=n.useRef(!1),o=n.useRef(!1);return(0,k.jsx)(V,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||a.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let n=t.target;a.triggerRef.current?.contains(n)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),V=n.forwardRef((e,t)=>{let{__scopeDialog:a,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:i,...l}=e,u=C(P,a),p=n.useRef(null),v=(0,o.e)(t,p);return(0,h.EW)(),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(c.M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:i,children:(0,k.jsx)(d.XB,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":L(u.open),...l,ref:v,onDismiss:()=>u.onOpenChange(!1)})}),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(X,{titleId:u.titleId}),(0,k.jsx)(Y,{contentRef:p,descriptionId:u.descriptionId})]})]})}),z="DialogTitle",T=n.forwardRef((e,t)=>{let{__scopeDialog:a,...n}=e,r=C(z,a);return(0,k.jsx)(v.WV.h2,{id:r.titleId,...n,ref:t})});T.displayName=z;var S="DialogDescription",$=n.forwardRef((e,t)=>{let{__scopeDialog:a,...n}=e,r=C(S,a);return(0,k.jsx)(v.WV.p,{id:r.descriptionId,...n,ref:t})});$.displayName=S;var B="DialogClose",U=n.forwardRef((e,t)=>{let{__scopeDialog:a,...n}=e,o=C(B,a);return(0,k.jsx)(v.WV.button,{type:"button",...n,ref:t,onClick:(0,r.M)(e.onClick,()=>o.onOpenChange(!1))})});function L(e){return e?"open":"closed"}U.displayName=B;var q="DialogTitleWarning",[H,K]=(0,s.k)(q,{contentName:P,titleName:z,docsSlug:"dialog"}),X=({titleId:e})=>{let t=K(q),a=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return n.useEffect(()=>{e&&!document.getElementById(e)&&console.error(a)},[a,e]),null},Y=({contentRef:e,descriptionId:t})=>{let a=K("DialogDescriptionWarning"),r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${a.contentName}}.`;return n.useEffect(()=>{let a=e.current?.getAttribute("aria-describedby");t&&a&&!document.getElementById(t)&&console.warn(r)},[r,e,t]),null},G=I,J=D,Q=N,ee=O,et=E,ea=T,en=$,er=U},9753:(e,t,a)=>{a.d(t,{f:()=>d});var n=a(1183),r=a(464),o=a(577),s="horizontal",i=["horizontal","vertical"],l=n.forwardRef((e,t)=>{let{decorative:a,orientation:n=s,...l}=e,d=i.includes(n)?n:s;return(0,o.jsx)(r.WV.div,{"data-orientation":d,...a?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},...l,ref:t})});l.displayName="Separator";var d=l},101:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","activity","IconActivity",[["path",{d:"M3 12h4l3 8l4 -16l3 8h4",key:"svg-0"}]])},8076:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","businessplan","IconBusinessplan",[["path",{d:"M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0",key:"svg-0"}],["path",{d:"M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4",key:"svg-1"}],["path",{d:"M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4",key:"svg-2"}],["path",{d:"M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4",key:"svg-3"}],["path",{d:"M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5",key:"svg-4"}],["path",{d:"M5 15v1m0 -8v1",key:"svg-5"}]])},7662:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","cash-register","IconCashRegister",[["path",{d:"M21 15h-2.5c-.398 0 -.779 .158 -1.061 .439c-.281 .281 -.439 .663 -.439 1.061c0 .398 .158 .779 .439 1.061c.281 .281 .663 .439 1.061 .439h1c.398 0 .779 .158 1.061 .439c.281 .281 .439 .663 .439 1.061c0 .398 -.158 .779 -.439 1.061c-.281 .281 -.663 .439 -1.061 .439h-2.5",key:"svg-0"}],["path",{d:"M19 21v1m0 -8v1",key:"svg-1"}],["path",{d:"M13 21h-7c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414v-10c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h2m12 3.12v-1.12c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2",key:"svg-2"}],["path",{d:"M16 10v-6c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-4c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414v6m8 0h-8m8 0h1m-9 0h-1",key:"svg-3"}],["path",{d:"M8 14v.01",key:"svg-4"}],["path",{d:"M8 17v.01",key:"svg-5"}],["path",{d:"M12 13.99v.01",key:"svg-6"}],["path",{d:"M12 17v.01",key:"svg-7"}]])},8727:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","checklist","IconChecklist",[["path",{d:"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8",key:"svg-0"}],["path",{d:"M14 19l2 2l4 -4",key:"svg-1"}],["path",{d:"M9 8h4",key:"svg-2"}],["path",{d:"M9 12h2",key:"svg-3"}]])},2020:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","circle-arrow-down-left","IconCircleArrowDownLeft",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M15 9l-6 6",key:"svg-1"}],["path",{d:"M15 15h-6v-6",key:"svg-2"}]])},411:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","circle-arrow-up-right","IconCircleArrowUpRight",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M15 9l-6 6",key:"svg-1"}],["path",{d:"M15 15v-6h-6",key:"svg-2"}]])},1858:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","clock-check","IconClockCheck",[["path",{d:"M20.942 13.021a9 9 0 1 0 -9.407 7.967",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]])},4544:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","clock-dollar","IconClockDollar",[["path",{d:"M20.866 10.45a9 9 0 1 0 -7.815 10.488",key:"svg-0"}],["path",{d:"M12 7v5l1.5 1.5",key:"svg-1"}],["path",{d:"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5",key:"svg-2"}],["path",{d:"M19 21v1m0 -8v1",key:"svg-3"}]])},9663:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","file-invoice","IconFileInvoice",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 7l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M13 17l2 0",key:"svg-4"}]])},7166:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","home","IconHome",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]])},3945:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","layout-sidebar","IconLayoutSidebar",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M9 4l0 16",key:"svg-1"}]])},7361:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","logout-2","IconLogout2",[["path",{d:"M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2",key:"svg-0"}],["path",{d:"M15 12h-12l3 -3",key:"svg-1"}],["path",{d:"M6 15l-3 -3",key:"svg-2"}]])},2758:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","pointer-check","IconPointerCheck",[["path",{d:"M17.487 14.93l-2.709 -2.708l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.785 .785",key:"svg-0"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-1"}]])},9534:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},1894:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","shield-check","IconShieldCheck",[["path",{d:"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",key:"svg-0"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-1"}]])},2103:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]])},4502:(e,t,a)=>{a.d(t,{Z:()=>n});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(7975).Z)("outline","user-scan","IconUserScan",[["path",{d:"M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M4 8v-2a2 2 0 0 1 2 -2h2",key:"svg-1"}],["path",{d:"M4 16v2a2 2 0 0 0 2 2h2",key:"svg-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"svg-3"}],["path",{d:"M16 20h2a2 2 0 0 0 2 -2v-2",key:"svg-4"}],["path",{d:"M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2",key:"svg-5"}]])}};