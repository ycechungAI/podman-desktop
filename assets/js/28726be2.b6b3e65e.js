"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2557],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),r=n(8944);const o="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},3930:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(5773),r=n(7378),o=n(8944),i=n(3457),l=n(5331),s=n(654),c=n(784),p=n(1819);function u(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??u;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var h=n(6457);const g="tabList_J5MA",b="tabItem_l0OV";function N(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(u(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function O(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(5773),r=(n(7378),n(5318)),o=n(3930),i=n(9798);const l={sidebar_position:1,title:"OpenShift Local",description:"Creating an OpenShift Local instance",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","openshift"],tags:["migrating-to-kubernetes","openshift"]},s="Creating an OpenShift Local instance",c={unversionedId:"kubernetes/openshift/creating-an-openshift-local-cluster",id:"kubernetes/openshift/creating-an-openshift-local-cluster",title:"OpenShift Local",description:"Creating an OpenShift Local instance",source:"@site/docs/kubernetes/openshift/creating-an-openshift-local-cluster.md",sourceDirName:"kubernetes/openshift",slug:"/kubernetes/openshift/creating-an-openshift-local-cluster",permalink:"/docs/kubernetes/openshift/creating-an-openshift-local-cluster",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/openshift/creating-an-openshift-local-cluster.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"openshift",permalink:"/docs/tags/openshift"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"OpenShift Local",description:"Creating an OpenShift Local instance",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","openshift"],tags:["migrating-to-kubernetes","openshift"]},sidebar:"mySidebar",previous:{title:"Developer Sandbox",permalink:"/docs/kubernetes/openshift/configuring-access-to-a-developer-sandbox"},next:{title:"Compose spec with Podman Desktop",permalink:"/docs/compose/compose-spec"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}],m={toc:u};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-an-openshift-local-instance"},"Creating an OpenShift Local instance"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.redhat.com/products/openshift-local/overview"},"Red Hat OpenShift Local")," manages a minimal OpenShift or MicroShift cluster on your workstation for local development and testing."),(0,r.kt)("p",null,"With Podman Desktop and the OpenShift Local extension, you can manage your OpenShift Local instances."),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.redhat.com/register"},"Register a Red Hat account"),".")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("em",{parentName:"p"},"OpenShift Local")," extension: on to ",(0,r.kt)("strong",{parentName:"p"},"Dashboard"),", click ",(0,r.kt)("strong",{parentName:"p"},"OpenShift Local ",(0,r.kt)("icon",{icon:"fa-solid fa-download",size:"lg"})),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the OpenShift Local binaries, when on the ",(0,r.kt)("strong",{parentName:"p"},"Dashboard"),", you see ",(0,r.kt)("em",{parentName:"p"},"Podman Desktop was not able to find an installation of OpenShift Local"),"."),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"OpenShift Local")," tile, click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Install"),"."),(0,r.kt)("li",{parentName:"ol"},"When prerequisites are missing, follow the instructions."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Red Hat OpenShift Local")," screen, click ",(0,r.kt)("strong",{parentName:"li"},"Yes")," to start the installation."),(0,r.kt)("li",{parentName:"ol"},"Follow the installation program instructions."),(0,r.kt)("li",{parentName:"ol"},"Reboot to finalize system changes."))),(0,r.kt)(i.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"OpenShift Local")," tile, click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Install"),"."),(0,r.kt)("li",{parentName:"ol"},"When prerequisites are missing, follow the instructions."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Red Hat OpenShift Local")," screen, click ",(0,r.kt)("strong",{parentName:"li"},"Yes")," to start the installation."),(0,r.kt)("li",{parentName:"ol"},"Follow the installation program instructions."),(0,r.kt)("li",{parentName:"ol"},"Reboot to finalize system changes."))),(0,r.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.redhat.com/openshift/create/local"},"Red Hat OpenShift local download page"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your platform.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Download OpenShift Local"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the archive.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"crc")," binary to a directory in your",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),", such as ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To configure your system, run the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ crc setup\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Exit and restart Podman Desktop.")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optionally) Review the extension settings in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Extension: Red Hat OpenShift Local"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Dashboard"),", click ",(0,r.kt)("strong",{parentName:"p"},"Initialize and start"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your OpenShift Local Virtual machine preset, if not set in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Extension: Red Hat OpenShift Local > Preset"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"MicroShift")," (experimental): provides a lightweight and optimized environment with a limited set of services."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"OpenShift"),": provides a single node OpenShift cluster with a fuller set of services, including a web console (requires more resources)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide a pull secret, required to pull container images from the registry:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.redhat.com/openshift/create/local"},"Red Hat OpenShift Local download page"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Copy pull secret"),"."),(0,r.kt)("li",{parentName:"ol"},"Get back to Podman Desktop."),(0,r.kt)("li",{parentName:"ol"},"Paste the pull secret, and press ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter"),".")))))),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Dashboard")," screen, ",(0,r.kt)("em",{parentName:"p"},"OpenShift Local is running"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Resources")," screen, your OpenShift Local instance is running."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Developer Sandbox is running",src:n(3176).Z,width:"467",height:"182"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../viewing-and-selecting-current-kubernete-context"},"Select your OpenShift Local instance the Podman Desktop tray"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run basic tasks such as:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../deploying-a-container-to-kubernetes"},"Deploying a container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../deploying-a-pod-to-kubernetes"},"Deploying a pod"))))),(0,r.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/crc-org/crc-extension"},"Red Hat OpenShift Local extension repository"))))}d.isMDXComponent=!0},3176:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/resources-openshift-local-running-1eea98ac12a94cb97437a2e74046ee6a.png"}}]);