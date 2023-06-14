"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2284],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(5773),o=(n(7378),n(5318));const a={sidebar_position:1,title:"Developer Sandbox",description:"Configuring access to a Developer Sandbox",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","openshift"],tags:["migrating-to-kubernetes","openshift"]},i="Configuring access to a Developer Sandbox",l={unversionedId:"kubernetes/openshift/configuring-access-to-a-developer-sandbox",id:"kubernetes/openshift/configuring-access-to-a-developer-sandbox",title:"Developer Sandbox",description:"Configuring access to a Developer Sandbox",source:"@site/docs/kubernetes/openshift/configuring-access-to-a-developer-sandbox.md",sourceDirName:"kubernetes/openshift",slug:"/kubernetes/openshift/configuring-access-to-a-developer-sandbox",permalink:"/docs/kubernetes/openshift/configuring-access-to-a-developer-sandbox",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/openshift/configuring-access-to-a-developer-sandbox.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"openshift",permalink:"/docs/tags/openshift"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Developer Sandbox",description:"Configuring access to a Developer Sandbox",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","openshift"],tags:["migrating-to-kubernetes","openshift"]},sidebar:"mySidebar",previous:{title:"Working with OpenShift",permalink:"/docs/kubernetes/openshift/"},next:{title:"OpenShift Local",permalink:"/docs/kubernetes/openshift/creating-an-openshift-local-cluster"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-access-to-a-developer-sandbox"},"Configuring access to a Developer Sandbox"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developers.redhat.com/developer-sandbox"},"Developer Sandbox")," is a free, private OpenShift environment including one project and a resource quota of 14 GB RAM, and 40 GB storage.\nIt lasts 30 days."),(0,o.kt)("p",null,"With Podman Desktop, you can configure access to your Developer Sandbox instances."),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.redhat.com/register"},"Register a Red Hat account"),".")),(0,o.kt)("h4",{id:"procedure"},"Procedure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("em",{parentName:"li"},"Developer Sandbox")," extension: go to ",(0,o.kt)("strong",{parentName:"li"},"Dashboard"),", and click ",(0,o.kt)("strong",{parentName:"li"},"Developer Sandbox ",(0,o.kt)("icon",{icon:"fa-solid fa-download",size:"lg"})),"."),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Developer Sandbox")," tile, click ",(0,o.kt)("strong",{parentName:"li"},"Create new"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Create a Developer Sandbox")," screen, click ",(0,o.kt)("strong",{parentName:"li"},"Log into Developer Sandbox"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Open external website")," dialog, click ",(0,o.kt)("strong",{parentName:"li"},"Yes"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("a",{parentName:"li",href:"https://developers.redhat.com/developer-sandbox"},"Developer Sandbox website"),":",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Start your sandbox for free")),(0,o.kt)("li",{parentName:"ol"},"If you never used this service, you might get through a verification workflow."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Login with...")," screen, click ",(0,o.kt)("strong",{parentName:"li"},"DevSandbox"),"."),(0,o.kt)("li",{parentName:"ol"},"In your Developer Sandbox Console, click on ",(0,o.kt)("strong",{parentName:"li"},"your login name > Copy login command")," from the menu."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Login with...")," screen, click ",(0,o.kt)("strong",{parentName:"li"},"DevSandbox"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Display Token"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("strong",{parentName:"li"},"Log in with this token")," full login command, similar to: ",(0,o.kt)("inlineCode",{parentName:"li"},"oc login --token=sha256~<token> --server=https://api.sandbox-m2.<sandbox_id>.openshiftapps.com:6443"),"."))),(0,o.kt)("li",{parentName:"ol"},"Get back to Podman Desktop ",(0,o.kt)("strong",{parentName:"li"},"Create a Developer Sandbox")," screen.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Context name"),": Enter a name such as ",(0,o.kt)("inlineCode",{parentName:"li"},"Developer Sandbox"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Login command"),": Paste the ",(0,o.kt)("inlineCode",{parentName:"li"},"oc login")," command that you copied previously."))),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Creation")," screen displays ",(0,o.kt)("em",{parentName:"li"},"Successful operation"),". Click ",(0,o.kt)("strong",{parentName:"li"},"Go back to Resources"),".")),(0,o.kt)("h4",{id:"verification"},"Verification"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources")," screen, your Developer Sandbox is running."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Developer Sandbox is running",src:n(8698).Z,width:"510",height:"211"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../viewing-and-selecting-current-kubernete-context"},"Select your Developer Sandbox in the Podman Desktop tray"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run basic tasks such as:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../deploying-a-container-to-kubernetes"},"Deploying a container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../deploying-a-pod-to-kubernetes"},"Deploying a pod"))))))}d.isMDXComponent=!0},8698:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resources-developer-sandbox-running-435054109642f996529ce6a133f1893e.png"}}]);