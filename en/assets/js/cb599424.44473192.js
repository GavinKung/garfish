"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[579],{4635:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var n=t(7711);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?n.createElement(h,r(r({ref:a},s),{},{components:t})):n.createElement(h,r({ref:a},s))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var d=2;d<o;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5403:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var n=t(8538),i=t(7765),o=(t(7711),t(4635)),r=["components"],p={title:"Manual loading",slug:"/guide/advance/loadApp",order:1},l=void 0,d={unversionedId:"guide/advance/loadApp",id:"guide/advance/loadApp",isDocsHomePage:!1,title:"Manual loading",description:"Garfish.loadApp(appName LoadAppOptions)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/advance/loadApp.md",sourceDirName:"guide/advance",slug:"/guide/advance/loadApp",permalink:"/en/guide/advance/loadApp",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/advance/loadApp.md",tags:[],version:"current",lastUpdatedBy:"zhouxiao.shaw",lastUpdatedAt:1633680542,formattedLastUpdatedAt:"10/8/2021",frontMatter:{title:"Manual loading",slug:"/guide/advance/loadApp",order:1},sidebar:"guide",previous:{title:"Build from scratch",permalink:"/en/guide/develop/from-zero"}},s=[{value:"Garfish.loadApp(appName: string, opts?: LoadAppOptions)",id:"garfishloadappappname-string-opts-loadappoptions",children:[]},{value:"Caution",id:"caution",children:[]},{value:"Manual loading scheme without caching.",id:"manual-loading-scheme-without-caching",children:[]},{value:"Manual loading scheme that requires caching (caching is recommended)",id:"manual-loading-scheme-that-requires-caching-caching-is-recommended",children:[]},{value:"What does app.mount do",id:"what-does-appmount-do",children:[]},{value:"What events does app.unmount do",id:"what-events-does-appunmount-do",children:[]},{value:"What events does app.show do?",id:"what-events-does-appshow-do",children:[]},{value:"What events does app.hide do",id:"what-events-does-apphide-do",children:[]},{value:"Caching",id:"caching",children:[]}],c={toc:s};function u(e){var a=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"garfishloadappappname-string-opts-loadappoptions"},"Garfish.loadApp(appName: string, opts?: LoadAppOptions)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parameters",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"appName - unique id of the app, required, id name of the child app"),(0,o.kt)("li",{parentName:"ul"},"opts - ",(0,o.kt)("inlineCode",{parentName:"li"},"LoadAppOptions")," - optional, configure sub-application related configuration (the parameters are basically the same, the only difference is one more ",(0,o.kt)("inlineCode",{parentName:"li"},"cache")," parameter, if there is no configured parameter, it will be downgraded to use the global ",(0,o.kt)("inlineCode",{parentName:"li"},"options"),")",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"domGetter - ",(0,o.kt)("inlineCode",{parentName:"li"},"Element | ()=> Element")," - optional, will use Garfish.run's domGetter parameter if not provided"),(0,o.kt)("li",{parentName:"ul"},"basename - ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - optional, defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"'/'")," the base route of the subapplication, which will be passed as a parameter to the subapplication's exported provider, which will use it as the basename so that the subapplication's base route is based on the current basename"))))),(0,o.kt)("li",{parentName:"ul"},"Return value - ",(0,o.kt)("inlineCode",{parentName:"li"},"appInstance")," - the sub-application instance",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"mount(): ",(0,o.kt)("inlineCode",{parentName:"li"},"promise<null>")),(0,o.kt)("li",{parentName:"ul"},"unmount(): ",(0,o.kt)("inlineCode",{parentName:"li"},"promise<null>")),(0,o.kt)("li",{parentName:"ul"},"show(): ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"hide(): ",(0,o.kt)("inlineCode",{parentName:"li"},"null"))))),(0,o.kt)("h3",{id:"caution"},"Caution"),(0,o.kt)("p",null,"This is a specific usage note for ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish"),"'s manual loading scheme. ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish")," manual loading is the core mechanism for rendering the entire sub-application. It is mainly implemented through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp")," api.\nThe following are the two loading cases."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"If you want to use manual load mode, you should turn off the ",(0,o.kt)("inlineCode",{parentName:"li"},"autoRefreshApp")," mode of the route to avoid interference with the route driver. 2."),(0,o.kt)("li",{parentName:"ol"},"If you use manual loading, make sure you have ",(0,o.kt)("inlineCode",{parentName:"li"},"snapshot")," set to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"vm")," sandbox turned on, otherwise the linear law based on snapshot sandbox will cause side effects to be cleared accidentally."),(0,o.kt)("li",{parentName:"ol"},"Manually loaded sub-applications need to be registered in advance using ",(0,o.kt)("inlineCode",{parentName:"li"},"Garfish.run"),", along with the registered sub-application information, without providing ",(0,o.kt)("inlineCode",{parentName:"li"},"activeWhen"))),(0,o.kt)("p",{parentName:"div"},"``js\nGarfish.run({\nsandbox: {\nopen: true,\nsnapshot: false,\n},\napps: ","[\n{\nname: 'vueApp',\nentry: 'xxx',\n},\n]",",\nautoRefreshApp: false,\n});"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-4."},"\n4. If the sub-application has a route, you need to pass ``basename`'' as the base route of the current page when ``load`'', for example, when manually loading sub-application b in the page of sub-application a, since the default ``basename`'' of b is ``/b/`'', you need to pass\n\n```js\nGarfish.loadApp('vueApp', { basename: '/vueApp' });\n")))),(0,o.kt)("h3",{id:"manual-loading-scheme-without-caching"},"Manual loading scheme without caching."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// options is optional, if not passed, a deep copy will be made from Garfish.options by default\nconst app = await Garfish.loadApp('appName', {\n  domGetter: () => document.getElementById('id'),\n});\n\n// rendering: compile the code for the sub-app -> create the app container -> call provider.render to render\nconst success = await app.mount();\n// unload: clear the side effects of the child application -> call provider.destroy -> destroy the application container\nconst success = await app.unmount();\n")),(0,o.kt)("h3",{id:"manual-loading-scheme-that-requires-caching-caching-is-recommended"},"Manual loading scheme that requires caching (caching is recommended)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cache = true;\nconst app = await Garfish.loadApp('appName', {\n  domGetter: () => document.getElementById('id'),\n});\n\n// Render\nif (cache && app.mounted) {\n  const success = app.show();\n} else {\n  const success = await app.count();\n}\n// unload\nconst success = app.hide();\n")),(0,o.kt)("h3",{id:"what-does-appmount-do"},"What does app.mount do"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"create the ",(0,o.kt)("inlineCode",{parentName:"li"},"app")," container and add it to the document stream"),(0,o.kt)("li",{parentName:"ol"},"compile the code of the sub-app"),(0,o.kt)("li",{parentName:"ol"},"get the ",(0,o.kt)("inlineCode",{parentName:"li"},"provider")," of the child application"),(0,o.kt)("li",{parentName:"ol"},"call the ",(0,o.kt)("inlineCode",{parentName:"li"},"app.options.beforeMount")," hook"),(0,o.kt)("li",{parentName:"ol"},"call ",(0,o.kt)("inlineCode",{parentName:"li"},"provider.render")," 6."),(0,o.kt)("li",{parentName:"ol"},"set ",(0,o.kt)("inlineCode",{parentName:"li"},"app.display")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"app.counted")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ol"},"set ",(0,o.kt)("inlineCode",{parentName:"li"},"app")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Garfish.activeApps")),(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("inlineCode",{parentName:"li"},"app.options.afterMount")," hook",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"If the rendering fails, ",(0,o.kt)("inlineCode",{parentName:"p"},"app.mount")," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", otherwise it will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the rendering succeeds, you can do the corresponding processing according to the return value.")))),(0,o.kt)("h3",{id:"what-events-does-appunmount-do"},"What events does app.unmount do"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"call the ",(0,o.kt)("inlineCode",{parentName:"li"},"app.options.beforeUnmount")," hook"),(0,o.kt)("li",{parentName:"ol"},"call ",(0,o.kt)("inlineCode",{parentName:"li"},"provider.destroy")),(0,o.kt)("li",{parentName:"ol"},"clear the side effects of the compilation"),(0,o.kt)("li",{parentName:"ol"},"remove the container for ",(0,o.kt)("inlineCode",{parentName:"li"},"app")," from the document stream"),(0,o.kt)("li",{parentName:"ol"},"set ",(0,o.kt)("inlineCode",{parentName:"li"},"app.display")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"app.counted")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ol"},"remove the current ",(0,o.kt)("inlineCode",{parentName:"li"},"app")," instance from ",(0,o.kt)("inlineCode",{parentName:"li"},"Garfish.activeApps")),(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("inlineCode",{parentName:"li"},"app.options.afterUnmount")," hook",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"As above, you can determine if the uninstall was successful based on the return value.")))),(0,o.kt)("h3",{id:"what-events-does-appshow-do"},"What events does app.show do?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"add the container for ",(0,o.kt)("inlineCode",{parentName:"li"},"app")," to the document stream"),(0,o.kt)("li",{parentName:"ol"},"call ",(0,o.kt)("inlineCode",{parentName:"li"},"provider.render")," 3."),(0,o.kt)("li",{parentName:"ol"},"set ",(0,o.kt)("inlineCode",{parentName:"li"},"app.display")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"As above, you can determine whether the rendering was successful based on the return value.")))),(0,o.kt)("h3",{id:"what-events-does-apphide-do"},"What events does app.hide do"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"call ",(0,o.kt)("inlineCode",{parentName:"li"},"provider.destroy")," 2."),(0,o.kt)("li",{parentName:"ol"},"remove the container of ",(0,o.kt)("inlineCode",{parentName:"li"},"app")," from the document stream"),(0,o.kt)("li",{parentName:"ol"},"set ",(0,o.kt)("inlineCode",{parentName:"li"},"app.display")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"As above, you can determine if hiding is successful based on the return value.")))),(0,o.kt)("h3",{id:"caching"},"Caching"),(0,o.kt)("p",null,"Manual loading provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," function to reuse ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," and avoid wasted performance caused by duplicate compiled code, just pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," parameter when ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp"),"."),(0,o.kt)("p",null,"For example, the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const app1 = await Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconst app2 = await Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconsole.log(app1 === app2); // true\n")),(0,o.kt)("p",null,"In fact, it will be the same copy for the loaded ",(0,o.kt)("inlineCode",{parentName:"p"},"promise"),", as in the following demo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const promise1 = Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconst promise2 = Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconsole.log(promise1 === promise2); // true\n\nconst app1 = await promise1;\nconst app2 = await promise2;\nconsole.log(app1 === app2); // true\n")))}u.isMDXComponent=!0}}]);