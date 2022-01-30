"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[619],{9904:function(e,n,t){var a=t(7711);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9755:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(1513),r=t(7711),o=t(6928),l=t(8229);var u=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(1255),i=t(1506),s="tabItem_dVQ5";function m(e){var n,t,a,o=e.lazy,l=e.block,m=e.defaultValue,c=e.values,d=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,p.lx)(f,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),w=k.tabGroupChoices,y=k.setTabGroupChoices,T=(0,r.useState)(g),N=T[0],x=T[1],R=[],A=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=w[d];null!=E&&E!==N&&f.some((function(e){return e.value===E}))&&x(E)}var Z=function(e){var n=e.currentTarget,t=R.indexOf(n),a=f[t].value;a!==N&&(A(n),x(a),null!=d&&y(d,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=R.indexOf(e.currentTarget)+1;t=R[a]||R[0];break;case"ArrowLeft":var r=R.indexOf(e.currentTarget)-1;t=R[r]||R[R.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":N===n}),key:n,ref:function(e){return R.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},null!=t?t:n)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function c(e){var n=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},7346:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return b}});var a=t(1513),r=t(1275),o=(t(7711),t(4635)),l=t(9755),u=t(9904),p=["components"],i={title:"\u4f7f\u7528 Web component\uff08beta\uff09",slug:"/guide/develop/web-component",order:1},s=void 0,m={unversionedId:"issues/web-component",id:"issues/web-component",isDocsHomePage:!1,title:"\u4f7f\u7528 Web component\uff08beta\uff09",description:"\u672c\u8282\u4e3b\u8981\u4ece\u4e3b\u5e94\u7528\u89c6\u89d2\u51fa\u53d1\uff0c\u901a\u8fc7 Web Component \u6982\u89c8\u6027\u63cf\u5fae\u524d\u7aef\u5e94\u7528\uff0cWeb Component \u63a5\u5165\u65b9\u5f0f\u7279\u70b9\uff1a",source:"@site/docs/issues/web-component.md",sourceDirName:"issues",slug:"/guide/develop/web-component",permalink:"/guide/develop/web-component",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/issues/web-component.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1643552610,formattedLastUpdatedAt:"2022/1/30",frontMatter:{title:"\u4f7f\u7528 Web component\uff08beta\uff09",slug:"/guide/develop/web-component",order:1}},c=[{value:"\u4e3b\u5e94\u7528",id:"\u4e3b\u5e94\u7528",children:[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:3},{value:"\u5165\u53e3\u5904\u6ce8\u518c Web Component",id:"\u5165\u53e3\u5904\u6ce8\u518c-web-component",children:[],level:3},{value:"\u5206\u914d\u8def\u7531\u7ed9\u5fae\u524d\u7aef\u5e94\u7528",id:"\u5206\u914d\u8def\u7531\u7ed9\u5fae\u524d\u7aef\u5e94\u7528",children:[],level:3}],level:2},{value:"\u5b50\u5e94\u7528",id:"\u5b50\u5e94\u7528",children:[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56-1",children:[],level:3},{value:"\u901a\u8fc7 Bridge \u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528",id:"\u901a\u8fc7-bridge-\u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528",children:[],level:3},{value:"\u8c03\u6574\u5b50\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e",id:"\u8c03\u6574\u5b50\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e",children:[],level:3}],level:2}],d={toc:c};function b(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u8282\u4e3b\u8981\u4ece\u4e3b\u5e94\u7528\u89c6\u89d2\u51fa\u53d1\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Web Component")," \u6982\u89c8\u6027\u63cf\u5fae\u524d\u7aef\u5e94\u7528\uff0cWeb Component \u63a5\u5165\u65b9\u5f0f\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u4e0e\u4e3b\u5e94\u7528\u6846\u67b6\u7ed3\u5408\u4f7f\u7528\uff0c\u52a0\u8f7d\u5fae\u524d\u7aef\u5e94\u7528\u50cf\u52a0\u8f7d\u7ec4\u4ef6\u4e00\u6837\u7b80\u5355"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bbe\u7f6e\u5b50\u5e94\u7528 Loading \u4e2d\u95f4\u6001\u3001\u9519\u8bef\u6001\u5360\u4f4d\u5185\u5bb9"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0e\u8def\u7531\u9a71\u52a8\u6a21\u5f0f\u4e00\u8d77\u4f7f\u7528")),(0,o.kt)("h2",{id:"\u4e3b\u5e94\u7528"},"\u4e3b\u5e94\u7528"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install garfish --save\n"))),(0,o.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add garfish\n")))),(0,o.kt)("h3",{id:"\u5165\u53e3\u5904\u6ce8\u518c-web-component"},"\u5165\u53e3\u5904\u6ce8\u518c Web Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\uff08\u4e3b\u5e94\u7528\u5165\u53e3\u5904\uff09\nimport { defineCustomElements } from 'garfish';\n\n// \u5b9a\u4e49 WebComponent Tag \u4e3a\u201cmicro-portal\u201d\uff0c\u5e76\u6307\u5b9a loading \u65f6\u7684\u5185\u5bb9\ndefineCustomElements('micro-portal', {\n  loading: ({ isLoading, error, pastDelay }) => {\n    let loadingElement = document.createElement('div');\n    // \u6e32\u67d3\u8fc7\u7a0b\u4e2d\u53d1\u751f\u5f02\u5e38\uff0c\u5c55\u793a\u5f02\u5e38\u5185\u5bb9\n    if (error) {\n      loadingElement.innerHTML = `load app get error: ${error.message}`;\n      return loadingElement;\n    }\n    // \u6e32\u67d3\u4e2d\uff0c\u5e76\u4e14\u7b26\u5408\u5ef6\u8fdf\u65f6\u95f4\uff08\u907f\u514d loading \u95ea\u9000\uff09\n    if (pastDelay && isLoading) {\n      loadingElement.innerHTML = `loading`;\n      return loadingElement;\n    }\n    return null;\n  },\n});\n")),(0,o.kt)("h3",{id:"\u5206\u914d\u8def\u7531\u7ed9\u5fae\u524d\u7aef\u5e94\u7528"},"\u5206\u914d\u8def\u7531\u7ed9\u5fae\u524d\u7aef\u5e94\u7528"),(0,o.kt)(l.Z,{groupId:"framework",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"React",label:"React",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { BrowserRouter, Route, Link, Switch } from 'react-router-dom';\n\nfunction VueApp(basename) {\n  // name: \u5b50\u5e94\u7528\u540d\u79f0\n  // entry: \u5b50\u5e94\u7528\u5165\u53e3\u8d44\u6e90\u5730\u5740\uff0c\u53ef\u4ee5\u4e3a HTML\u3001\u6216 JS\n  // basename: \u5b50\u5e94\u7528\u8def\u7531\u7684\u57fa\u7840\u8def\u5f84\n  return (\n    <micro-portal\n      name=\"vue-app\"\n      entry=\"http://localhost:8092\"\n      basename={basename}\n    ></micro-portal>\n  );\n}\n\nfunction App() {\n  return (\n    <BrowserRouter basename={'/'}>\n      <Link to=\"/vue-app\">VueApp</Link>\n      <Switch>\n        // \u5206\u914d\u4e00\u4e2a\u8def\u7531\u7ed9 vue \u5e94\u7528\n        <Route path=\"/vue-app\" component={() => VueApp('/vue-app')}></Route>\n      </Switch>\n    </BrowserRouter>\n  );\n}\n"))),(0,o.kt)(u.Z,{value:"Vue",label:"Vue",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u63d0\u4f9b ReactApp \u7684 Vue \u7ec4\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- ./component/ReactApp.vue --\x3e\n<template>\n  <div>\n    <micro-portal\n      name="react-app"\n      entry="http://localhost:8093"\n      basename="/react-app"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \'App\',\n  };\n<\/script>\n<style></style>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5c06 ReactApp \u7ec4\u4ef6\u6dfb\u52a0\u5230\u8def\u7531\u4e2d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport ReactApp from './component/ReactApp.vue';\nconst router = new VueRouter({\n  mode: 'history',\n  base: '/',\n  routers: [{ path: '/react-app', component: ReactApp }],\n});\nnew Vue({\n  router,\n  store,\n  render: (h) => h(App),\n}).$mount('#app');\n")))),(0,o.kt)("h2",{id:"\u5b50\u5e94\u7528"},"\u5b50\u5e94\u7528"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56-1"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @garfish/bridge --save\n"))),(0,o.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @garfish/bridge\n")))),(0,o.kt)("h3",{id:"\u901a\u8fc7-bridge-\u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528"},"\u901a\u8fc7 Bridge \u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528"),(0,o.kt)(l.Z,{groupId:"framework",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"React",label:"React",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { reactBridge } from '@garfish/bridge';\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { BrowserRouter, Switch, Route, Link } from 'react-router-dom';\n\nfunction App({ basename }) {\n  return (\n    // \u6839\u7ec4\u4ef6\u4f7f\u7528\u4f20\u9012\u8fc7\u6765\u7684 basename\uff0c\u4f5c\u4e3a\u5e94\u7528\u7684\u57fa\u7840\u8def\u5f84\n    <BrowserRouter basename={basename}>\n      <Link to=\"/\">Home</Link>\n      <Switch>\n        <Route exact path=\"/\">\n          <HelloGarfish />\n        </Route>\n      </Switch>\n    </BrowserRouter>\n  );\n}\n\nexport const provider = reactBridge({\n  React,\n  ReactDOM,\n  domElementGetter: '#root', // \u5e94\u7528\u7684\u6302\u8f7d\u70b9\uff0c\u5982\u679c\u5b50\u5e94\u7528\u6253\u5305\u4e3a JS \u5165\u53e3\uff0c\u53ef\u4e0d\u586b\u5199\n  rootComponent: App,\n});\n"))),(0,o.kt)(u.Z,{value:"Vue",label:"Vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Vue from 'vue';\nimport App from './App.vue';\nimport { vueBridge } from '@garfish/bridge';\n\nfunction newRouter(basename) {\n  const router = new VueRouter({\n    mode: 'history',\n    base: basename,\n    router,\n    routes: [{ path: '/', component: HelloGarfish }],\n  });\n  return router;\n}\n\nexport const provider = vueBridge({\n  Vue,\n  rootComponent: App,\n  appOptions: ({ basename }) => {\n    const router = newRouter(basename);\n    return {\n      el: '#app',\n      router,\n      store,\n    };\n  },\n});\n")))),(0,o.kt)("h3",{id:"\u8c03\u6574\u5b50\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e"},"\u8c03\u6574\u5b50\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Webpack",label:"Webpack",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u4fee\u6539\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\uff0c\u907f\u514d\u9003\u9038\u6c99\u7bb1\n    globalObject: 'window',\n    // \u8bf7\u6c42\u786e\u4fdd\u6bcf\u4e2a\u5b50\u5e94\u7528\u8be5\u503c\u90fd\u4e0d\u76f8\u540c\uff0c\u5426\u5219\u53ef\u80fd\u51fa\u73b0 webpack chunk \u4e92\u76f8\u5f71\u54cd\u7684\u53ef\u80fd\n    jsonpFunction: 'vue-app-jsonpFunction',\n    // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u8def\u5f84\u53d8\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u907f\u514d\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8d44\u6e90\u5728\u53d8\u4e3a\u4e3b\u5e94\u7528\u4e0a\u7684\u76f8\u5bf9\u8d44\u6e90\uff0c\u56e0\u4e3a\u5b50\u5e94\u7528\u548c\u4e3b\u5e94\u7528\u5728\u540c\u4e00\u4e2a\u6587\u6863\u6d41\uff0c\u76f8\u5bf9\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u4e3b\u5e94\u7528\u800c\u8a00\u7684\n    publicPath: 'http://localhost:8000',\n  },\n  devServer: {\n    // \u4fdd\u8bc1\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5e94\u7528\u7aef\u53e3\u4e0d\u4e00\u6837\n    port: '8000',\n    headers: {\n      // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u652f\u6301\u8de8\u57df\uff0c\u5728\u7ebf\u4e0a\u540e\u9700\u8981\u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u5728\u4e3b\u5e94\u7528\u7684\u73af\u5883\u4e2d\u52a0\u8f7d\u4e0d\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff08**\u4e5f\u9700\u8981\u9650\u5236\u8303\u56f4\u6ce8\u610f\u5b89\u5168\u95ee\u9898**\uff09\n      'Access-Control-Allow-Origin': '*',\n    },\n  },\n};\n")))))}b.isMDXComponent=!0}}]);