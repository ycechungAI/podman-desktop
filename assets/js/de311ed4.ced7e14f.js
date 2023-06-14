"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1625],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(n),m=i,u=k["".concat(s,".").concat(m)]||k[m]||c[m]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(5773),i=(n(7378),n(5318));const o={title:"Setting up and running a Kubernetes cluster locally with Podman Desktop",description:"Setting up and running a Kubernetes cluster locally with Podman Desktop",slug:"running-a-local-kubernetes-cluster-with-podman-desktop",authors:["themr0c"],tags:["podman-desktop","story","kubernetes","kind"],hide_table_of_contents:!1},r="Setting up and running a Kubernetes cluster locally with Podman Desktop",l={permalink:"/blog/running-a-local-kubernetes-cluster-with-podman-desktop",source:"@site/blog/2023-04-19-running-a-local-kubernetes-cluster-with-podman-desktop.md",title:"Setting up and running a Kubernetes cluster locally with Podman Desktop",description:"Setting up and running a Kubernetes cluster locally with Podman Desktop",date:"2023-04-19T00:00:00.000Z",formattedDate:"April 19, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"story",permalink:"/blog/tags/story"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kind",permalink:"/blog/tags/kind"}],readingTime:8.86,hasTruncateMarker:!0,authors:[{name:"Fabrice Flore-Thebault",title:"Technical writer",url:"https://github.com/themr0c",imageURL:"https://github.com/themr0c.png",key:"themr0c"}],frontMatter:{title:"Setting up and running a Kubernetes cluster locally with Podman Desktop",description:"Setting up and running a Kubernetes cluster locally with Podman Desktop",slug:"running-a-local-kubernetes-cluster-with-podman-desktop",authors:["themr0c"],tags:["podman-desktop","story","kubernetes","kind"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - Podman Desktop 0.15",permalink:"/blog/podman-desktop-release-0.15"},nextItem:{title:"Release Notes - Podman Desktop 0.14",permalink:"/blog/podman-desktop-release-0.14"}},s={authorsImageUrls:[void 0]},p=[{value:"Installing Podman Desktop",id:"installing-podman-desktop",level:2},{value:"Installing and initializing your container engine: Podman",id:"installing-and-initializing-your-container-engine-podman",level:2},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Installing and starting your local Kubernetes provider: Kind",id:"installing-and-starting-your-local-kubernetes-provider-kind",level:2},{value:"Verification",id:"verification-1",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"Starting the Redis leader",id:"starting-the-redis-leader",level:2},{value:"Procedure",id:"procedure-1",level:4},{value:"Verification",id:"verification-2",level:4},{value:"Starting the Redis followers",id:"starting-the-redis-followers",level:2},{value:"Procedure",id:"procedure-2",level:4},{value:"Verification",id:"verification-3",level:4},{value:"Starting the default frontend",id:"starting-the-default-frontend",level:2},{value:"Procedure",id:"procedure-3",level:4},{value:"Verification",id:"verification-4",level:4}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this blog post you will learn to use Podman Desktop to run the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/stateless-application/guestbook/"},"Kubernetes documentation example: Deploying PHP Guestbook application with Redis"),"."),(0,i.kt)("p",null,"On the agenda:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Installing Podman Desktop."),(0,i.kt)("li",{parentName:"ol"},"Installing and initializing your container engine: Podman."),(0,i.kt)("li",{parentName:"ol"},"Installing and starting your local Kubernetes provider: Kind."),(0,i.kt)("li",{parentName:"ol"},"Starting the Redis leader."),(0,i.kt)("li",{parentName:"ol"},"Starting and scaling the Redis followers."),(0,i.kt)("li",{parentName:"ol"},"Starting and exposing the Guestbook frontend.")),(0,i.kt)("h2",{id:"installing-podman-desktop"},"Installing Podman Desktop"),(0,i.kt)("p",null,"You need Podman Desktop."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"/docs/Installation"},"Podman Desktop installation documentation"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on your platform name: ",(0,i.kt)("a",{parentName:"li",href:"/docs/installation/windows-install"},"Windows"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/installation/macos-install"},"macOS"),", or ",(0,i.kt)("a",{parentName:"li",href:"/docs/installation/linux-install"},"Linux"),"."),(0,i.kt)("li",{parentName:"ol"},"Follow the instructions. Stick to the default installation method."),(0,i.kt)("li",{parentName:"ol"},"Start ",(0,i.kt)("strong",{parentName:"li"},"Podman Desktop"),".")),(0,i.kt)("p",null,"At this point, you have a graphical user interface to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Podman and Kind."),(0,i.kt)("li",{parentName:"ul"},"Control and work with your container engines and Kubernetes clusters."),(0,i.kt)("li",{parentName:"ul"},"Run your application on your container engine and migrate it to Kubernetes.")),(0,i.kt)("h2",{id:"installing-and-initializing-your-container-engine-podman"},"Installing and initializing your container engine: Podman"),(0,i.kt)("p",null,"Podman Desktop can control various container engines, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker"),(0,i.kt)("li",{parentName:"ul"},"Lima"),(0,i.kt)("li",{parentName:"ul"},"Podman")),(0,i.kt)("p",null,"Consider installing the Podman container engine for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added security"),(0,i.kt)("li",{parentName:"ul"},"No daemon"),(0,i.kt)("li",{parentName:"ul"},"Open source")),(0,i.kt)("p",null,"Containers are a Linux technology."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On Linux, you can install Podman natively.\nSee: ",(0,i.kt)("a",{parentName:"li",href:"https://podman.io/getting-started/installation#installing-on-linux"},"Installing Podman on Linux"),"."),(0,i.kt)("li",{parentName:"ul"},"On macOS and Windows, Podman requires to run in a Linux virtual machine: the Podman machine.\nUse Podman Desktop to install Podman and initialize your Podman machine:")),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Podman Desktop ",(0,i.kt)("strong",{parentName:"li"},"Dashboard")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"Dashboard")," displays ",(0,i.kt)("em",{parentName:"li"},"Podman Desktop was not able to find an installation of Podman"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Install"),"."),(0,i.kt)("li",{parentName:"ol"},"Podman Desktop checks the prerequisites to install Podman Engine. When necessary, follow the instructions to install prerequisites."),(0,i.kt)("li",{parentName:"ol"},"Podman displays the dialog: ",(0,i.kt)("em",{parentName:"li"},"Podman is not installed on this system, would you like to install Podman?"),". Click on ",(0,i.kt)("strong",{parentName:"li"},"Yes")," to install Podman."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Initialize and start"),".")),(0,i.kt)("h4",{id:"verification"},"Verification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," displays ",(0,i.kt)("em",{parentName:"p"},"Podman is running"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Podman is running",src:n(5986).Z,width:"611",height:"219"})))),(0,i.kt)("p",null,"At this point, you can start working with containers."),(0,i.kt)("h2",{id:"installing-and-starting-your-local-kubernetes-provider-kind"},"Installing and starting your local Kubernetes provider: Kind"),(0,i.kt)("p",null,"You want to deploy your application to a local Kubernetes cluster."),(0,i.kt)("p",null,"Podman Desktop can help you run Kind-powered local Kubernetes clusters on a container engine, such as Podman."),(0,i.kt)("p",null,"Podman Desktop helps you ",(0,i.kt)("a",{parentName:"p",href:"/docs/kubernetes/kind/installing-kind"},"installing the ",(0,i.kt)("inlineCode",{parentName:"a"},"kind")," CLI"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the status bar, click on ",(0,i.kt)("strong",{parentName:"p"},"Kind"),", and follow the prompts.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," CLI is available, the status bar does not display ",(0,i.kt)("strong",{parentName:"p"},"Kind"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On Windows, ",(0,i.kt)("a",{parentName:"p",href:"docs/kubernetes/kind/configuring-podman-for-kind-on-windows"},"configure Podman in rootful mode")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman system connection default podman-machine-default-root\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("img",{src:"/img/podman-icon.png",alt:"Podman icon",style:{height:"1.5em",display:"inline"}})," Podman")," tile, click on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-repeat",size:"lg"}))," icon to restart the Podman container engine.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("img",{src:"/img/kind-icon.png",alt:"Kind icon",style:{height:"1.5em",display:"inline"}})," Kind")," tile, click on the ",(0,i.kt)("strong",{parentName:"p"},"Create new")," button."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Name"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"kind-cluster"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Provider Type"),": select ",(0,i.kt)("inlineCode",{parentName:"li"},"podman"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"HTTP Port"),": select ",(0,i.kt)("inlineCode",{parentName:"li"},"9090"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"HTTPS Port"),": select ",(0,i.kt)("inlineCode",{parentName:"li"},"9443"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Setup an ingress controller"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Enabled")),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Create")," button.\n",(0,i.kt)("img",{alt:"Create a Kind cluster screen",src:n(6893).Z,width:"793",height:"711"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After successful creation, click on the ",(0,i.kt)("strong",{parentName:"p"},"Go back to resources")," button"))),(0,i.kt)("h4",{id:"verification-1"},"Verification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources")," your Kind cluster is running/"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Kind cluster is running",src:n(712).Z,width:"452",height:"189"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Podman Desktop")," tray, open the ",(0,i.kt)("strong",{parentName:"p"},"Kubernetes")," menu: you can set the context to your Kind cluster: ",(0,i.kt)("inlineCode",{parentName:"p"},"kind-kind-cluster"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Kind cluster Kubernetes context in the tray",src:n(141).Z,width:"273",height:"309"})),(0,i.kt)("p",{parentName:"li"},"At this point, you can start working with containers, and your local Kubernetes cluster."))),(0,i.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"docs/kubernetes/kind/creating-a-kind-cluster"},"Creating a local Kind-powered Kubernetes cluster"))),(0,i.kt)("h2",{id:"starting-the-redis-leader"},"Starting the Redis leader"),(0,i.kt)("p",null,"The Guestbook application uses Redis to store its data."),(0,i.kt)("p",null,"With Podman Desktop, you can prepare the Redis leader image and container on your local container engine, and deploy the results to a Kubernetes pod and service.\nThis is functionally equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-leader")," deployment that the Kubernetes example propose."),(0,i.kt)("h4",{id:"procedure-1"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,i.kt)("icon",{icon:"fa-solid fa-arrow-circle-down",size:"lg"})," Pull an image"),"."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Image to Pull"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"docker.io/redis:6.0.5")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Pull image")," to pull the image to your container engine local image registry."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Done")," to get back to the images list."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search images"),": enter ",(0,i.kt)("inlineCode",{parentName:"p"},"redis:6.0.5")," to find the image.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-play",size:"lg"}))," to open the ",(0,i.kt)("strong",{parentName:"p"},"Create a container from image")," dialog."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Container name"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"leader"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Local port for ",(0,i.kt)("inlineCode",{parentName:"strong"},"6379/tcp")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"6379"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})," Start Container")," to start the container in your container engine."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"),": enter ",(0,i.kt)("inlineCode",{parentName:"p"},"leader")," to find the running container.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-stop",size:"lg"}))," to stop the container, and leave the ",(0,i.kt)("inlineCode",{parentName:"p"},"6379")," port available for the Redis follower container.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,i.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes")," to open the ",(0,i.kt)("strong",{parentName:"p"},"Deploy generated pod to Kubernetes")," screen."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Pod Name"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"redis-leader"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use Kubernetes Services"),": select ",(0,i.kt)("strong",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"strong"},"hostPort")," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,i.kt)("inlineCode",{parentName:"strong"},"hostPort"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Expose service locally using Kubernetes Ingress"),": deselect ",(0,i.kt)("strong",{parentName:"li"},"Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: ",(0,i.kt)("inlineCode",{parentName:"strong"},"http://localhost:9090"),". Requirements: your cluster has an ingress controller`"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Kubernetes namespaces"),": select ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"),".\n",(0,i.kt)("img",{alt:"Deploy generated leader pod to Kubernetes screen",src:n(1781).Z,width:"1292",height:"968"})),(0,i.kt)("li",{parentName:"ol"},"Wait for the pod to reach the state: ",(0,i.kt)("strong",{parentName:"li"},"Phase: Running"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Done"),".")))),(0,i.kt)("h4",{id:"verification-2"},"Verification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods")," screen lists the running ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-leader")," pod."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"leader pod is running",src:n(9272).Z,width:"684",height:"231"})))),(0,i.kt)("h2",{id:"starting-the-redis-followers"},"Starting the Redis followers"),(0,i.kt)("p",null,"Although the Redis leader is a single Pod, you can make it highly available and meet traffic demands by adding a few Redis followers, or replicas."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"With Podman Desktop, you can prepare the Redis follower image and container on your local container engine, and deploy the results to Kubernetes pods and services."),"\nThis is functionally equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-follower")," deployment that the Kubernetes example propose."),(0,i.kt)("h4",{id:"procedure-2"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,i.kt)("icon",{icon:"fa-solid fa-arrow-circle-down",size:"lg"})," Pull an image"),".",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Image to Pull"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"gcr.io/google_samples/gb-redis-follower:v2")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Pull image")," to pull the image to your container engine local image registry."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Done")," to get back to the images list."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search images"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"gb-redis-follower:v2")," to find the image."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-play",size:"lg"}))," to open the ",(0,i.kt)("strong",{parentName:"li"},"Create a container from image")," dialog.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Container name"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"follower"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Local port for ",(0,i.kt)("inlineCode",{parentName:"strong"},"6379/tcp")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"6379"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})," Start Container")," to start the container in your container engine."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"follower")," to find the running container."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-stop",size:"lg"}))," to stop the container: you do not need it to run in the container engine."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,i.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes")," to open the ",(0,i.kt)("strong",{parentName:"li"},"Deploy generated pod to Kubernetes")," screen.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Pod Name"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"redis-follower"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use Kubernetes Services"),": select ",(0,i.kt)("strong",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"strong"},"hostPort")," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,i.kt)("inlineCode",{parentName:"strong"},"hostPort"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Expose service locally using Kubernetes Ingress"),": deselect ",(0,i.kt)("strong",{parentName:"li"},"Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: ",(0,i.kt)("inlineCode",{parentName:"strong"},"http://localhost:9090"),". Requirements: your cluster has an ingress controller`"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Kubernetes namespaces"),": select ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"),".\n",(0,i.kt)("img",{alt:"Deploy generated follower pod to Kubernetes screen",src:n(8738).Z,width:"1292",height:"968"})),(0,i.kt)("li",{parentName:"ol"},"Wait for the pod to reach the state: ",(0,i.kt)("strong",{parentName:"li"},"Phase: Running"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Done"),"."))),(0,i.kt)("li",{parentName:"ol"},"To add replicas, repeat the last step with another ",(0,i.kt)("strong",{parentName:"li"},"Pod Name")," value.")),(0,i.kt)("h4",{id:"verification-3"},"Verification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods")," screen lists the running ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-follower")," pods."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"follower pods are running",src:n(5740).Z,width:"668",height:"286"})))),(0,i.kt)("h2",{id:"starting-the-default-frontend"},"Starting the default frontend"),(0,i.kt)("p",null,"Now that you have the Redis storage of your Guestbook up and running, start the Guestbook web servers.\nLike the Redis followers, deploy the frontend using Kubernetes pods and services."),(0,i.kt)("p",null,"The Guestbook app uses a PHP frontend.\nIt is configured to communicate with either the Redis follower or leader Services, depending on whether the request is a read or a write.\nThe frontend exposes a JSON interface, and serves a jQuery-Ajax-based UX."),(0,i.kt)("p",null,"With Podman Desktop, you can prepare the Guestbook frontend image and container on your local container engine, and deploy the results to Kubernetes pods and services.\nThis is functionally equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend")," deployment that the Kubernetes example propose."),(0,i.kt)("h4",{id:"procedure-3"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,i.kt)("icon",{icon:"fa-solid fa-arrow-circle-down",size:"lg"})," Pull an image"),".",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Image to Pull"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"gcr.io/google_samples/gb-frontend:v5")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Pull image")," to pull the image to your container engine local image registry."),(0,i.kt)("li",{parentName:"ol"},"Wait for the pull to complete."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Done")," to get back to the images list."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search images"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"gb-frontend:v5")," to find the image."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-play",size:"lg"}))," to open the ",(0,i.kt)("strong",{parentName:"li"},"Create a container from image")," dialog.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Container name"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"frontend"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Local port for ",(0,i.kt)("inlineCode",{parentName:"strong"},"80/tcp")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"9000"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})," Start Container")," to start the container in your container engine."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"frontend")," to find the running container."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-stop",size:"lg"}))," to stop the container: you do not need it to run in the container engine."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,i.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes")," to open the ",(0,i.kt)("strong",{parentName:"li"},"Deploy generated pod to Kubernetes")," screen.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Pod Name"),": enter ",(0,i.kt)("inlineCode",{parentName:"li"},"frontend"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use Kubernetes Services"),": select ",(0,i.kt)("strong",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"strong"},"hostPort")," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,i.kt)("inlineCode",{parentName:"strong"},"hostPort"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Expose service locally using Kubernetes Ingress"),": select ",(0,i.kt)("strong",{parentName:"li"},"Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: ",(0,i.kt)("inlineCode",{parentName:"strong"},"http://localhost:9090"),". Requirements: your cluster has an ingress controller`"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Kubernetes namespaces"),": select ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"),".\n",(0,i.kt)("img",{alt:"Deploy generated frontend pod to Kubernetes screen",src:n(7104).Z,width:"1292",height:"968"})),(0,i.kt)("li",{parentName:"ol"},"Wait for the pod to reach the state: ",(0,i.kt)("strong",{parentName:"li"},"Phase: Running"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Done"),".")))),(0,i.kt)("h4",{id:"verification-4"},"Verification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods")," screen lists the running ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend")," pod."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"`frontend` pod is running",src:n(9992).Z,width:"674",height:"222"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9090"),": the Guestbook application is running."))))}c.isMDXComponent=!0},6893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-a-kind-cluster-341ca1312e2e05d63d82a93726825a05.png"},8738:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-generated-follower-pod-to-kubernetes-dd643e002a1dbf69e29ef7863f0774d8.png"},7104:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-generated-frontend-pod-to-kubernetes-cf7e13dbd73427575b2cf583e223df38.png"},1781:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-generated-leader-pod-to-kubernetes-e812812296742ec54cd822d0ba969c28.png"},5740:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/follower-pods-are-running-be90e0689f30209b0694469405ecd6a9.png"},9992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-pod-is-running-f6f55d91d200f35629788d3c550ae463.png"},141:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind-cluster-context-in-the-tray-5bb9338bb1437bbcf79bf50dd401400e.png"},712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind-cluster-is-running-e721d473aa52100d8179cbb3d06e0ef9.png"},9272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/leader-pod-is-running-a8caa174a15c06b287dff81b08041f7c.png"},5986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-is-running-745db8684c4d0240922a5aeb63e517d3.png"}}]);