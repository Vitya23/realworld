"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[777],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},516:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],u={},c="\u0413\u0430\u0440\u0434\u0438",l={unversionedId:"guards",id:"guards",title:"\u0413\u0430\u0440\u0434\u0438",description:"\u0423 \u043f\u0440\u043e\u0435\u043a\u0442\u0456 \u0454 \u0434\u0432\u0430 \u0433\u0430\u0440\u0434\u0438:",source:"@site/docs/04-guards.md",sourceDirName:".",slug:"/guards",permalink:"/realworld/guards",editUrl:"https://github.com/ditsmod/realworld/edit/main/website/docs/04-guards.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"OpenAPI \u0442\u0430 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u044f",permalink:"/realworld/openapi-and-validation"}},s=[],p={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0433\u0430\u0440\u0434\u0438"},"\u0413\u0430\u0440\u0434\u0438"),(0,a.kt)("p",null,"\u0423 \u043f\u0440\u043e\u0435\u043a\u0442\u0456 \u0454 \u0434\u0432\u0430 \u0433\u0430\u0440\u0434\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ditsmod/realworld/blob/main/packages/server/src/app/modules/service/auth/bearer.guard.ts"},"BearerGuard")," - \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0430\u0432\u0442\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0457 \u0443 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430; \u0432\u0456\u043d \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454 \u0447\u0438 \u043c\u0430\u0454 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0432\u0430\u043b\u0456\u0434\u043d\u0438\u0439 Json Web Token;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ditsmod/realworld/blob/main/packages/server/src/app/modules/service/auth/permissions.guard.ts"},"PermissionsGuard")," - \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u0457 \u0443 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430; \u0432\u0456\u043d \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454 \u0447\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043c\u0430\u0454 \u043f\u0440\u0430\u0432\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u0434\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u0443 (\u0446\u044f \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u0442\u0435\u0436 \u0432\u0438\u0442\u044f\u0433\u0430\u0454\u0442\u044c\u0441\u044f \u0456\u0437 Json Web Token).")))}d.isMDXComponent=!0}}]);