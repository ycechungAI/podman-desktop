"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6690],{5150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(5773),s=(n(7378),n(5318)),o=n(2975);const i={title:"Release Notes - Podman Desktop 0.14",description:"Podman Desktop 0.14 has been released!",slug:"podman-desktop-release-0.14",authors:["deboer"],tags:["podman-desktop","release","kubernetes","kind"],hide_table_of_contents:!1},l=void 0,r={permalink:"/blog/podman-desktop-release-0.14",source:"@site/blog/2023-04-14-release-0.14.md",title:"Release Notes - Podman Desktop 0.14",description:"Podman Desktop 0.14 has been released!",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kind",permalink:"/blog/tags/kind"}],readingTime:4.015,hasTruncateMarker:!0,authors:[{name:"Tim deBoer",title:"Architect",url:"https://github.com/deboer-tim",imageURL:"https://github.com/deboer-tim.png",key:"deboer"}],frontMatter:{title:"Release Notes - Podman Desktop 0.14",description:"Podman Desktop 0.14 has been released!",slug:"podman-desktop-release-0.14",authors:["deboer"],tags:["podman-desktop","release","kubernetes","kind"],hide_table_of_contents:!1},prevItem:{title:"Setting up and running a Kubernetes cluster locally with Podman Desktop",permalink:"/blog/running-a-local-kubernetes-cluster-with-podman-desktop"},nextItem:{title:"Release Notes - Podman Desktop 0.13",permalink:"/blog/podman-desktop-release-0.13"}},d={authorsImageUrls:[void 0]},p=[{value:"Release details",id:"release-details",level:2},{value:"Kind Installation",id:"kind-installation",level:3},{value:"Manage Kind Clusters",id:"manage-kind-clusters",level:3},{value:"Using Kind",id:"using-kind",level:3},{value:"Kind Ingress",id:"kind-ingress",level:3},{value:"UI and UX improvements",id:"ui-and-ux-improvements",level:3},{value:"Updated Preferences",id:"updated-preferences",level:4},{value:"Telemetry Prompt",id:"telemetry-prompt",level:4},{value:"Other notable enhancements",id:"other-notable-enhancements",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Notable bug fixes",id:"notable-bug-fixes",level:2},{value:"Final notes",id:"final-notes",level:2}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Podman Desktop 0.14 - Our Kind-est release yet!"),(0,s.kt)("p",null,"We have been working on a Kind extension for a while now, and decided it is time to promote it\ninto a release just in time for KubeCon and CloudNativeCon Europe!"),(0,s.kt)("p",null,"We're especially excited about releasing Kind because it finally shows the full purpose\nof Podman Desktop: not just local container engines, but Kubernetes too. More importantly,\nproviding tools that allow you to manage both environments and seamlessly move between them."),(0,s.kt)("p",null,"Some of these features were available in development mode over the last few releases,\nbut since they are now in the release build, we will do a full roundup and talk about\nall the Kind features."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Kind Installation"),": Install Kind from the status bar"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Manage Kind Clusters"),": Create and manage Kind clusters from ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Using Kind"),": Deploying YAML and sharing images to a cluster"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Kind Ingress"),": Install a Contour ingress controller"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"UX and UI Improvements"),": Updated preferences and telemetry prompt")),(0,s.kt)("p",null,"Podman Desktop 0.14 is now available. ",(0,s.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Podman-desktop-0-14-hero",src:n(1767).Z,width:"1140",height:"1097"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"release-details"},"Release details"),(0,s.kt)("h3",{id:"kind-installation"},"Kind Installation"),(0,s.kt)("p",null,"Get Kind up and running in seconds! The Kind extension is now bundled as part of Podman Desktop\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1421"},"1421"),"\nand allows you to easily ",(0,s.kt)("a",{parentName:"p",href:"/docs/kubernetes/kind/installing-kind"},"install Kind directly from the status bar"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1257"},"1257"),"."),(0,s.kt)("p",null,"The installed ",(0,s.kt)("inlineCode",{parentName:"p"},"kind")," CLI is available from the system shell ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1516"},"1516"),",\nallowing you to open a terminal window to ",(0,s.kt)("inlineCode",{parentName:"p"},"kind get clusters")," or work with other tools."),(0,s.kt)("h3",{id:"manage-kind-clusters"},"Manage Kind Clusters"),(0,s.kt)("p",null,"Once Kind is installed (or if you already had it), you can manage your clusters in ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"),".\nFrom here you can ",(0,s.kt)("a",{parentName:"p",href:"/docs/kubernetes/kind/creating-a-kind-cluster"},"create Kind clusters"),",\nstart/stop ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1953"},"1953"),"\nor delete ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1977"},"1977")," them."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"kind-clusters",src:n(5988).Z,width:"1484",height:"364"})),(0,s.kt)("p",null,"The Kind control plane runs as a container. You will see this container\nin the ",(0,s.kt)("strong",{parentName:"p"},"Container")," list and can also start or stop it from there."),(0,s.kt)("h3",{id:"using-kind"},"Using Kind"),(0,s.kt)("p",null,"Now that you have Kind installed and running, what can you do with it?\nIf you like terminals, you can always open one up and use the Kind CLI to\n",(0,s.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#interacting-with-your-cluster"},"interact with your cluster"),"."),(0,s.kt)("p",null,"Within Podman Desktop we have started with two ways to interact with the cluster.\nThe first is the ability to play local YAML files on your Kind (or any other Kubernetes!) cluster ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1261"},"1261"),". This allows you to take existing Kubernetes YAML definitons -\nyour deployments, services, or other objects - and deploy it to the cluster."),(0,s.kt)(o.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/231812563-ece0a56a-b347-48f8-a3a7-400eb9449037.mp4",mdxType:"ReactPlayer"}),(0,s.kt)("p",null,"As you deploy pods, they will automatically appear in the list of ",(0,s.kt)("strong",{parentName:"p"},"Pods")," ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1263"},"1263"),", allowing you to start, stop, and interact them just like pods running on Podman."),(0,s.kt)("p",null,"One of the most common uses is to deploy a container that you have been running on Podman, and this will fail\nif the image is not available in Kind. To solve this we have made it easy to push images from\nPodman to Kind ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1448"},"1448"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"push-image-kind",src:n(5281).Z,width:"1054",height:"152"})),(0,s.kt)("h3",{id:"kind-ingress"},"Kind Ingress"),(0,s.kt)("p",null,"If you deploy a pod to Kind, you are also going to want to reach it! To do this you will need to install a load balancer or\ningress controller so that the pod is accessible from outside the cluster. We made it easy to install the Contour ingress\ncontroller while creating a Kind cluster ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1675"},"1675"),",\nso if you created your cluster with Podman Desktop it is already there!"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"kind-ingress",src:n(1958).Z,width:"1328",height:"1238"})),(0,s.kt)("p",null,"We have several other Kind and Kubernetes features planned to expand the supported scenarios, but hopefully this\nmakes it easy to get started with Kind and shows where we're headed. As always, feedback is appreciated!"),(0,s.kt)("h3",{id:"ui-and-ux-improvements"},"UI and UX improvements"),(0,s.kt)("h4",{id:"updated-preferences"},"Updated Preferences"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences")," page has been updated with a new design ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/1913"},"1913"),",\nmaking it easier to see and change preferences. Changes are live, no more Update button."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/229498507-e754b55c-dcbd-486d-9ee3-a1fe3bed7271.gif",alt:"preferences"})),(0,s.kt)("h4",{id:"telemetry-prompt"},"Telemetry Prompt"),(0,s.kt)("p",null,"The prompt to enable or disable telemetry has been moved from its own dialog into the ",(0,s.kt)("strong",{parentName:"p"},"Welcome")," screen.\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/1927"},"1927"),"\nThis is more usable, one less prompt, and solves a window-layering issue for some users!"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19958075/229577331-365a9a01-0426-4482-a95d-f5dfe39af90a.png",alt:"telemetry prompt"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"other-notable-enhancements"},"Other notable enhancements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Extension support for opening an external URL ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2028"},"2028")," and\naccessing the clipboard ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2023"},"2023"))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"documentation"},"Documentation"),(0,s.kt)("p",null,"Naturally, we have a section in the documentation just for ",(0,s.kt)("a",{parentName:"p",href:"https://podman-desktop.io/docs/kubernetes/kind"},"Kind"),"."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"notable-bug-fixes"},"Notable bug fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Avoid a dialog box if unable to check for updates ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2062"},"2062")),(0,s.kt)("li",{parentName:"ul"},"Unable to get to the Dashboard if Kind (or Kubernetes) cluster was not running ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/issues/2052"},"2052"))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"final-notes"},"Final notes"),(0,s.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.14.0"},"here"),"."),(0,s.kt)("p",null,"Get the latest release from the ",(0,s.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}m.isMDXComponent=!0},5988:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind-clusters-580828529dfdd23680262d7ee586823d.png"},1958:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind-ingress-ab2dd4054a7ce838c758ddc0d98cc5cb.png"},1767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-desktop-release-0.14-5d7adb6814b7191ab2623cdd431642f3.png"},5281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/push-image-kind-ea3f19b80ab3ce13cdfadbbb63762780.png"}}]);