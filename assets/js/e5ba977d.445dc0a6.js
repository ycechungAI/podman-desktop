"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[902],{5318:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>u});var n=t(7378);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},l=function(e){var o=c(e.components);return n.createElement(p.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?n.createElement(y,s(s({ref:o},l),{},{components:t})):n.createElement(y,s({ref:o},l))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var p in o)hasOwnProperty.call(o,p)&&(i[p]=o[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8658:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(5773),r=(t(7378),t(5318));const a={title:"Compose spec with Podman Desktop",sidebar_position:1},s=void 0,i={unversionedId:"compose/compose-spec",id:"compose/compose-spec",title:"Compose spec with Podman Desktop",description:"Introduction",source:"@site/docs/compose/compose-spec.md",sourceDirName:"compose",slug:"/compose/compose-spec",permalink:"/docs/compose/compose-spec",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/compose/compose-spec.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Compose spec with Podman Desktop",sidebar_position:1},sidebar:"mySidebar",previous:{title:"OpenShift Local",permalink:"/docs/kubernetes/openshift/creating-an-openshift-local-cluster"},next:{title:"Podman Compose with Podman Desktop",permalink:"/docs/compose/podman-compose"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How does it work",id:"how-does-it-work",level:3},{value:"What do you need to enable",id:"what-do-you-need-to-enable",level:3},{value:"What if you already have Docker Compose or Podman Compose installed",id:"what-if-you-already-have-docker-compose-or-podman-compose-installed",level:3}],l={toc:c};function d(e){let{components:o,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Podman Desktop supports the ",(0,r.kt)("a",{parentName:"p",href:"https://compose-spec.io"},"Compose spec"),". With Podman Desktop, users can easily create and manage multi-container applications by using Compose files."),(0,r.kt)("h3",{id:"how-does-it-work"},"How does it work"),(0,r.kt)("p",null,"Each time you run a Compose file by using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-compose"},"Podman Compose")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," a label is assigned to each container.\nPodman Desktop detects that label and shows it appropriately within the management console."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img2",src:t(9685).Z,width:"1999",height:"1103"})),(0,r.kt)("h3",{id:"what-do-you-need-to-enable"},"What do you need to enable"),(0,r.kt)("p",null,"Containers deployed by the Compose specification are automatically detected by Podman Desktop."),(0,r.kt)("h3",{id:"what-if-you-already-have-docker-compose-or-podman-compose-installed"},"What if you already have Docker Compose or Podman Compose installed"),(0,r.kt)("p",null,"Any containers already deployed by Docker Compose / Podman Compose will be automatically shown within Podman Desktop. You do not need to do anything!"))}d.isMDXComponent=!0},9685:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/compose_doc_image_2-fd0c6791568797c6a5670c72e53687ca.png"}}]);