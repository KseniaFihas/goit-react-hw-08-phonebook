"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[557],{2557:function(e,n,t){t.d(n,{Z:function(){return je}});var o=t(4942),r=t(3366),i=t(7462),a=t(2791),l=t(8182),c=t(4419),s=t(2065),u=t(7630),d=t(551),p=t(4036),f=t(5527),v=t(5878),h=t(1217);function m(e){return(0,h.Z)("MuiAlert",e)}var g,b=(0,v.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Z=t(9439),x=t(2071),y=t(8956).Z,R=!0,M=!1,C={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function w(e){e.metaKey||e.altKey||e.ctrlKey||(R=!0)}function S(){R=!1}function E(){"hidden"===this.visibilityState&&M&&(R=!0)}function k(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return R||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!C[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var z=function(){var e=a.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",w,!0),n.addEventListener("mousedown",S,!0),n.addEventListener("pointerdown",S,!0),n.addEventListener("touchstart",S,!0),n.addEventListener("visibilitychange",E,!0))}),[]),n=a.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!k(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(M=!0,window.clearTimeout(g),g=window.setTimeout((function(){M=!1}),100),n.current=!1,!0)},ref:e}},T=t(3433);function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var P=t(7326),L=t(4578),A=t(5545);function I(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function V(e,n,t){return null!=t[n]?t[n]:e.props[n]}function B(e,n,t){var o=I(e.children),r=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var o,r=Object.create(null),i=[];for(var a in e)a in n?i.length&&(r[a]=i,i=[]):i.push(a);var l={};for(var c in n){if(r[c])for(o=0;o<r[c].length;o++){var s=r[c][o];l[r[c][o]]=t(s)}l[c]=t(c)}for(o=0;o<i.length;o++)l[i[o]]=t(i[o]);return l}(n,o);return Object.keys(r).forEach((function(i){var l=r[i];if((0,a.isValidElement)(l)){var c=i in n,s=i in o,u=n[i],d=(0,a.isValidElement)(u)&&!u.props.in;!s||c&&!d?s||!c||d?s&&c&&(0,a.isValidElement)(u)&&(r[i]=(0,a.cloneElement)(l,{onExited:t.bind(null,l),in:u.props.in,exit:V(l,"exit",e),enter:V(l,"enter",e)})):r[i]=(0,a.cloneElement)(l,{in:!1}):r[i]=(0,a.cloneElement)(l,{onExited:t.bind(null,l),in:!0,exit:V(l,"exit",e),enter:V(l,"enter",e)})}})),r}var N=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},F=function(e){function n(n,t){var o,r=(o=e.call(this,n,t)||this).handleExited.bind((0,P.Z)(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,L.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,o,r=n.children,i=n.handleExited;return{children:n.firstRender?(t=e,o=i,I(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:V(e,"appear",t),enter:V(e,"enter",t),exit:V(e,"exit",t)})}))):B(e,r,i),firstRender:!1}},t.handleExited=function(e,n){var t=I(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,o=(0,r.Z)(e,["component","childFactory"]),i=this.state.contextValue,l=N(this.state.children).map(t);return delete o.appear,delete o.enter,delete o.exit,null===n?a.createElement(A.Z.Provider,{value:i},l):a.createElement(A.Z.Provider,{value:i},a.createElement(n,o,l))},n}(a.Component);F.propTypes={},F.defaultProps={component:"div",childFactory:function(e){return e}};var O=F,D=t(2554),W=t(184);var H=function(e){var n=e.className,t=e.classes,o=e.pulsate,r=void 0!==o&&o,i=e.rippleX,c=e.rippleY,s=e.rippleSize,u=e.in,d=e.onExited,p=e.timeout,f=a.useState(!1),v=(0,Z.Z)(f,2),h=v[0],m=v[1],g=(0,l.Z)(n,t.ripple,t.rippleVisible,r&&t.ripplePulsate),b={width:s,height:s,top:-s/2+c,left:-s/2+i},x=(0,l.Z)(t.child,h&&t.childLeaving,r&&t.childPulsate);return u||h||m(!0),a.useEffect((function(){if(!u&&null!=d){var e=setTimeout(d,p);return function(){clearTimeout(e)}}}),[d,u,p]),(0,W.jsx)("span",{className:g,style:b,children:(0,W.jsx)("span",{className:x})})};var K,X,U,Y,_,q,$,G,J=(0,v.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=["center","classes","className"],ee=(0,D.F4)(_||(_=K||(K=j(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),ne=(0,D.F4)(q||(q=X||(X=j(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),te=(0,D.F4)($||($=U||(U=j(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),oe=(0,u.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),re=(0,u.ZP)(H,{name:"MuiTouchRipple",slot:"Ripple"})(G||(G=Y||(Y=j(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),J.rippleVisible,ee,550,(function(e){return e.theme.transitions.easing.easeInOut}),J.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),J.child,J.childLeaving,ne,550,(function(e){return e.theme.transitions.easing.easeInOut}),J.childPulsate,te,(function(e){return e.theme.transitions.easing.easeInOut})),ie=a.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiTouchRipple"}),o=t.center,c=void 0!==o&&o,s=t.classes,u=void 0===s?{}:s,p=t.className,f=(0,r.Z)(t,Q),v=a.useState([]),h=(0,Z.Z)(v,2),m=h[0],g=h[1],b=a.useRef(0),x=a.useRef(null);a.useEffect((function(){x.current&&(x.current(),x.current=null)}),[m]);var y=a.useRef(!1),R=a.useRef(null),M=a.useRef(null),C=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(R.current)}}),[]);var w=a.useCallback((function(e){var n=e.pulsate,t=e.rippleX,o=e.rippleY,r=e.rippleSize,i=e.cb;g((function(e){return[].concat((0,T.Z)(e),[(0,W.jsx)(re,{classes:{ripple:(0,l.Z)(u.ripple,J.ripple),rippleVisible:(0,l.Z)(u.rippleVisible,J.rippleVisible),ripplePulsate:(0,l.Z)(u.ripplePulsate,J.ripplePulsate),child:(0,l.Z)(u.child,J.child),childLeaving:(0,l.Z)(u.childLeaving,J.childLeaving),childPulsate:(0,l.Z)(u.childPulsate,J.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:o,rippleSize:r},b.current)])})),b.current+=1,x.current=i}),[u]),S=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.pulsate,r=void 0!==o&&o,i=n.center,a=void 0===i?c||n.pulsate:i,l=n.fakeElement,s=void 0!==l&&l;if("mousedown"===(null==e?void 0:e.type)&&y.current)y.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(y.current=!0);var u,d,p,f=s?null:C.current,v=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(a||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(v.width/2),d=Math.round(v.height/2);else{var h=e.touches&&e.touches.length>0?e.touches[0]:e,m=h.clientX,g=h.clientY;u=Math.round(m-v.left),d=Math.round(g-v.top)}if(a)(p=Math.sqrt((2*Math.pow(v.width,2)+Math.pow(v.height,2))/3))%2===0&&(p+=1);else{var b=2*Math.max(Math.abs((f?f.clientWidth:0)-u),u)+2,Z=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(b,2)+Math.pow(Z,2))}null!=e&&e.touches?null===M.current&&(M.current=function(){w({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:t})},R.current=setTimeout((function(){M.current&&(M.current(),M.current=null)}),80)):w({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:t})}}),[c,w]),E=a.useCallback((function(){S({},{pulsate:!0})}),[S]),k=a.useCallback((function(e,n){if(clearTimeout(R.current),"touchend"===(null==e?void 0:e.type)&&M.current)return M.current(),M.current=null,void(R.current=setTimeout((function(){k(e,n)})));M.current=null,g((function(e){return e.length>0?e.slice(1):e})),x.current=n}),[]);return a.useImperativeHandle(n,(function(){return{pulsate:E,start:S,stop:k}}),[E,S,k]),(0,W.jsx)(oe,(0,i.Z)({className:(0,l.Z)(J.root,u.root,p),ref:C},f,{children:(0,W.jsx)(O,{component:null,exit:!0,children:m})}))})),ae=ie;function le(e){return(0,h.Z)("MuiButtonBase",e)}var ce,se=(0,v.Z)("MuiButtonBase",["root","disabled","focusVisible"]),ue=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],de=(0,u.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((ce={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,o.Z)(ce,"&.".concat(se.disabled),{pointerEvents:"none",cursor:"default"}),(0,o.Z)(ce,"@media print",{colorAdjust:"exact"}),ce)),pe=a.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiButtonBase"}),o=t.action,s=t.centerRipple,u=void 0!==s&&s,p=t.children,f=t.className,v=t.component,h=void 0===v?"button":v,m=t.disabled,g=void 0!==m&&m,b=t.disableRipple,R=void 0!==b&&b,M=t.disableTouchRipple,C=void 0!==M&&M,w=t.focusRipple,S=void 0!==w&&w,E=t.LinkComponent,k=void 0===E?"a":E,T=t.onBlur,j=t.onClick,P=t.onContextMenu,L=t.onDragLeave,A=t.onFocus,I=t.onFocusVisible,V=t.onKeyDown,B=t.onKeyUp,N=t.onMouseDown,F=t.onMouseLeave,O=t.onMouseUp,D=t.onTouchEnd,H=t.onTouchMove,K=t.onTouchStart,X=t.tabIndex,U=void 0===X?0:X,Y=t.TouchRippleProps,_=t.touchRippleRef,q=t.type,$=(0,r.Z)(t,ue),G=a.useRef(null),J=a.useRef(null),Q=(0,x.Z)(J,_),ee=z(),ne=ee.isFocusVisibleRef,te=ee.onFocus,oe=ee.onBlur,re=ee.ref,ie=a.useState(!1),ce=(0,Z.Z)(ie,2),se=ce[0],pe=ce[1];g&&se&&pe(!1),a.useImperativeHandle(o,(function(){return{focusVisible:function(){pe(!0),G.current.focus()}}}),[]);var fe=a.useState(!1),ve=(0,Z.Z)(fe,2),he=ve[0],me=ve[1];a.useEffect((function(){me(!0)}),[]);var ge=he&&!R&&!g;function be(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C;return y((function(o){return n&&n(o),!t&&J.current&&J.current[e](o),!0}))}a.useEffect((function(){se&&S&&!R&&he&&J.current.pulsate()}),[R,S,se,he]);var Ze=be("start",N),xe=be("stop",P),ye=be("stop",L),Re=be("stop",O),Me=be("stop",(function(e){se&&e.preventDefault(),F&&F(e)})),Ce=be("start",K),we=be("stop",D),Se=be("stop",H),Ee=be("stop",(function(e){oe(e),!1===ne.current&&pe(!1),T&&T(e)}),!1),ke=y((function(e){G.current||(G.current=e.currentTarget),te(e),!0===ne.current&&(pe(!0),I&&I(e)),A&&A(e)})),ze=function(){var e=G.current;return h&&"button"!==h&&!("A"===e.tagName&&e.href)},Te=a.useRef(!1),je=y((function(e){S&&!Te.current&&se&&J.current&&" "===e.key&&(Te.current=!0,J.current.stop(e,(function(){J.current.start(e)}))),e.target===e.currentTarget&&ze()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&ze()&&"Enter"===e.key&&!g&&(e.preventDefault(),j&&j(e))})),Pe=y((function(e){S&&" "===e.key&&J.current&&se&&!e.defaultPrevented&&(Te.current=!1,J.current.stop(e,(function(){J.current.pulsate(e)}))),B&&B(e),j&&e.target===e.currentTarget&&ze()&&" "===e.key&&!e.defaultPrevented&&j(e)})),Le=h;"button"===Le&&($.href||$.to)&&(Le=k);var Ae={};"button"===Le?(Ae.type=void 0===q?"button":q,Ae.disabled=g):($.href||$.to||(Ae.role="button"),g&&(Ae["aria-disabled"]=g));var Ie=(0,x.Z)(n,re,G);var Ve=(0,i.Z)({},t,{centerRipple:u,component:h,disabled:g,disableRipple:R,disableTouchRipple:C,focusRipple:S,tabIndex:U,focusVisible:se}),Be=function(e){var n=e.disabled,t=e.focusVisible,o=e.focusVisibleClassName,r=e.classes,i={root:["root",n&&"disabled",t&&"focusVisible"]},a=(0,c.Z)(i,le,r);return t&&o&&(a.root+=" ".concat(o)),a}(Ve);return(0,W.jsxs)(de,(0,i.Z)({as:Le,className:(0,l.Z)(Be.root,f),ownerState:Ve,onBlur:Ee,onClick:j,onContextMenu:xe,onFocus:ke,onKeyDown:je,onKeyUp:Pe,onMouseDown:Ze,onMouseLeave:Me,onMouseUp:Re,onDragLeave:ye,onTouchEnd:we,onTouchMove:Se,onTouchStart:Ce,ref:Ie,tabIndex:g?-1:U,type:q},Ae,$,{children:[p,ge?(0,W.jsx)(ae,(0,i.Z)({ref:Q,center:u},Y)):null]}))})),fe=pe;function ve(e){return(0,h.Z)("MuiIconButton",e)}var he=(0,v.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),me=["edge","children","className","color","disabled","disableFocusRipple","size"],ge=(0,u.ZP)(fe,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"default"!==t.color&&n["color".concat((0,p.Z)(t.color))],t.edge&&n["edge".concat((0,p.Z)(t.edge))],n["size".concat((0,p.Z)(t.size))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var n,t=e.theme,r=e.ownerState,a=null==(n=(t.vars||t).palette)?void 0:n[r.color];return(0,i.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,i.Z)({color:null==a?void 0:a.main},!r.disableRipple&&{"&:hover":(0,i.Z)({},a&&{backgroundColor:t.vars?"rgba(".concat(a.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,o.Z)({},"&.".concat(he.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),be=a.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiIconButton"}),o=t.edge,a=void 0!==o&&o,s=t.children,u=t.className,f=t.color,v=void 0===f?"default":f,h=t.disabled,m=void 0!==h&&h,g=t.disableFocusRipple,b=void 0!==g&&g,Z=t.size,x=void 0===Z?"medium":Z,y=(0,r.Z)(t,me),R=(0,i.Z)({},t,{edge:a,color:v,disabled:m,disableFocusRipple:b,size:x}),M=function(e){var n=e.classes,t=e.disabled,o=e.color,r=e.edge,i=e.size,a={root:["root",t&&"disabled","default"!==o&&"color".concat((0,p.Z)(o)),r&&"edge".concat((0,p.Z)(r)),"size".concat((0,p.Z)(i))]};return(0,c.Z)(a,ve,n)}(R);return(0,W.jsx)(ge,(0,i.Z)({className:(0,l.Z)(M.root,u),centerRipple:!0,focusRipple:!b,disabled:m,ref:n,ownerState:R},y,{children:s}))})),Ze=t(9201),xe=(0,Ze.Z)((0,W.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ye=(0,Ze.Z)((0,W.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Re=(0,Ze.Z)((0,W.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Me=(0,Ze.Z)((0,W.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Ce=(0,Ze.Z)((0,W.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),we=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],Se=(0,u.ZP)(f.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["".concat(t.variant).concat((0,p.Z)(t.color||t.severity))]]}})((function(e){var n=e.theme,t=e.ownerState,r="light"===n.palette.mode?s._j:s.$n,a="light"===n.palette.mode?s.$n:s._j,l=t.color||t.severity;return(0,i.Z)({},n.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},l&&"standard"===t.variant&&(0,o.Z)({color:n.vars?n.vars.palette.Alert["".concat(l,"Color")]:r(n.palette[l].light,.6),backgroundColor:n.vars?n.vars.palette.Alert["".concat(l,"StandardBg")]:a(n.palette[l].light,.9)},"& .".concat(b.icon),n.vars?{color:n.vars.palette.Alert["".concat(l,"IconColor")]}:{color:n.palette[l].main}),l&&"outlined"===t.variant&&(0,o.Z)({color:n.vars?n.vars.palette.Alert["".concat(l,"Color")]:r(n.palette[l].light,.6),border:"1px solid ".concat((n.vars||n).palette[l].light)},"& .".concat(b.icon),n.vars?{color:n.vars.palette.Alert["".concat(l,"IconColor")]}:{color:n.palette[l].main}),l&&"filled"===t.variant&&(0,i.Z)({fontWeight:n.typography.fontWeightMedium},n.vars?{color:n.vars.palette.Alert["".concat(l,"FilledColor")],backgroundColor:n.vars.palette.Alert["".concat(l,"FilledBg")]}:{backgroundColor:"dark"===n.palette.mode?n.palette[l].dark:n.palette[l].main,color:n.palette.getContrastText(n.palette[l].main)}))})),Ee=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,n){return n.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ke=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,n){return n.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),ze=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,n){return n.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Te={success:(0,W.jsx)(xe,{fontSize:"inherit"}),warning:(0,W.jsx)(ye,{fontSize:"inherit"}),error:(0,W.jsx)(Re,{fontSize:"inherit"}),info:(0,W.jsx)(Me,{fontSize:"inherit"})},je=a.forwardRef((function(e,n){var t,o,a,s,u,f,v=(0,d.Z)({props:e,name:"MuiAlert"}),h=v.action,g=v.children,b=v.className,Z=v.closeText,x=void 0===Z?"Close":Z,y=v.color,R=v.components,M=void 0===R?{}:R,C=v.componentsProps,w=void 0===C?{}:C,S=v.icon,E=v.iconMapping,k=void 0===E?Te:E,z=v.onClose,T=v.role,j=void 0===T?"alert":T,P=v.severity,L=void 0===P?"success":P,A=v.slotProps,I=void 0===A?{}:A,V=v.slots,B=void 0===V?{}:V,N=v.variant,F=void 0===N?"standard":N,O=(0,r.Z)(v,we),D=(0,i.Z)({},v,{color:y,severity:L,variant:F}),H=function(e){var n=e.variant,t=e.color,o=e.severity,r=e.classes,i={root:["root","".concat(n).concat((0,p.Z)(t||o)),"".concat(n)],icon:["icon"],message:["message"],action:["action"]};return(0,c.Z)(i,m,r)}(D),K=null!=(t=null!=(o=B.closeButton)?o:M.CloseButton)?t:be,X=null!=(a=null!=(s=B.closeIcon)?s:M.CloseIcon)?a:Ce,U=null!=(u=I.closeButton)?u:w.closeButton,Y=null!=(f=I.closeIcon)?f:w.closeIcon;return(0,W.jsxs)(Se,(0,i.Z)({role:j,elevation:0,ownerState:D,className:(0,l.Z)(H.root,b),ref:n},O,{children:[!1!==S?(0,W.jsx)(Ee,{ownerState:D,className:H.icon,children:S||k[L]||Te[L]}):null,(0,W.jsx)(ke,{ownerState:D,className:H.message,children:g}),null!=h?(0,W.jsx)(ze,{ownerState:D,className:H.action,children:h}):null,null==h&&z?(0,W.jsx)(ze,{ownerState:D,className:H.action,children:(0,W.jsx)(K,(0,i.Z)({size:"small","aria-label":x,title:x,color:"inherit",onClick:z},U,{children:(0,W.jsx)(X,(0,i.Z)({fontSize:"small"},Y))}))}):null]}))}))}}]);
//# sourceMappingURL=557.0929d274.chunk.js.map