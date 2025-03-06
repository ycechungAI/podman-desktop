"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41052],{92358:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"interfaces/PodCreateOptions","title":"Interface: PodCreateOptions","description":"Defined in414","source":"@site/api/interfaces/PodCreateOptions.md","sourceDirName":"interfaces","slug":"/interfaces/PodCreateOptions","permalink":"/api/interfaces/PodCreateOptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"PodContainerInfo","permalink":"/api/interfaces/PodContainerInfo"},"next":{"title":"PodCreatePortOptions","permalink":"/api/interfaces/PodCreatePortOptions"}}');var t=s(62540),a=s(43023);const r={},o="Interface: PodCreateOptions",d={},c=[{value:"Properties",id:"properties",level:2},{value:"exit_policy?",id:"exit_policy",level:3},{value:"Examples",id:"examples",level:4},{value:"labels?",id:"labels",level:3},{value:"Index Signature",id:"index-signature",level:4},{value:"name?",id:"name",level:3},{value:"netns?",id:"netns",level:3},{value:"nsmode",id:"nsmode",level:4},{value:"Examples",id:"examples-1",level:5},{value:"Networks?",id:"networks",level:3},{value:"Index Signature",id:"index-signature-1",level:4},{value:"Remarks",id:"remarks",level:4},{value:"portmappings?",id:"portmappings",level:3},{value:"provider?",id:"provider",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-podcreateoptions",children:"Interface: PodCreateOptions"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/ycechungAI/podman-desktop/blob/e39eb60daa29b637aeab34959abcb3283fc9f11b/packages/extension-api/src/extension-api.d.ts#L414",children:"packages/extension-api/src/extension-api.d.ts:414"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"exit_policy",children:"exit_policy?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"exit_policy"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/ycechungAI/podman-desktop/blob/e39eb60daa29b637aeab34959abcb3283fc9f11b/packages/extension-api/src/extension-api.d.ts#L467",children:"packages/extension-api/src/extension-api.d.ts:467"})]}),"\n",(0,t.jsx)(n.p,{children:"ExitPolicy determines the pod's exit and stop behaviour."}),"\n",(0,t.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'"continue": the pod continues running. This is the default policy\nwhen creating a pod.\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'"stop": stop the pod when the last container exits. This is the\ndefault behaviour for play kube.\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"labels",children:"labels?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"labels"}),": ",(0,t.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/ycechungAI/podman-desktop/blob/e39eb60daa29b637aeab34959abcb3283fc9f11b/packages/extension-api/src/extension-api.d.ts#L428",children:"packages/extension-api/src/extension-api.d.ts:428"})]}),"\n",(0,t.jsx)(n.p,{children:"Labels are key-value pairs that are used to add metadata to pods. Optional."}),"\n",(0,t.jsx)(n.h4,{id:"index-signature",children:"Index Signature"}),"\n",(0,t.jsxs)(n.p,{children:["[",(0,t.jsx)(n.code,{children:"key"}),": ",(0,t.jsx)(n.code,{children:"string"}),"]: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"name?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"name"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/ycechungAI/podman-desktop/blob/e39eb60daa29b637aeab34959abcb3283fc9f11b/packages/extension-api/src/extension-api.d.ts#L418",children:"packages/extension-api/src/extension-api.d.ts:418"})]}),"\n",(0,t.jsx)(n.p,{children:"Name is the name of the pod. If not provided, a name will be generated when the pod is created. Optional."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"netns",children:"netns?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"netns"}),": ",(0,t.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/ycechungAI/podman-desktop/blob/e39eb60daa29b637aeab34959abcb3283fc9f11b/packages/extension-api/src/extension-api.d.ts#L447",children:"packages/extension-api/src/extension-api.d.ts:447"})]}),"\n",(0,t.jsx)(n.p,{children:"Network namespace"}),"\n",(0,t.jsx)(n.h4,{id:"nsmode",children:"nsmode"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"nsmode"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"NamespaceMode"}),"\n",(0,t.jsx)(n.h5,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"`bridge` indicates that the network backend (CNI/netavark) should be used.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"`pasta` indicates that a pasta network stack should be used.\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"networks",children:"Networks?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Networks"}),": ",(0,t.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/ycechungAI/podman-desktop/blob/e39eb60daa29b637aeab34959abcb3283fc9f11b/packages/extension-api/src/extension-api.d.ts#L438",children:"packages/extension-api/src/extension-api.d.ts:438"})]}),"\n",(0,t.jsx)(n.p,{children:"Map of networks names to ids the container should join to.\nYou can request additional settings for each network, you can set network aliases,"}),"\n",(0,t.jsx)(n.h4,{id:"index-signature-1",children:"Index Signature"}),"\n",(0,t.jsxs)(n.p,{children:["[",(0,t.jsx)(n.code,{children:"key"}),": ",(0,t.jsx)(n.code,{children:"string"}),"]: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/interfaces/PodCreateOptions#",children:"PodCreateOptions.netns.nsmode"})," need to be set to ",(0,t.jsx)(n.code,{children:"bridge"})," to join a network"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"portmappings",children:"portmappings?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"portmappings"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/PodCreatePortOptions",children:(0,t.jsx)(n.code,{children:"PodCreatePortOptions"})}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/ycechungAI/podman-desktop/blob/e39eb60daa29b637aeab34959abcb3283fc9f11b/packages/extension-api/src/extension-api.d.ts#L424",children:"packages/extension-api/src/extension-api.d.ts:424"})]}),"\n",(0,t.jsx)(n.p,{children:"PortMappings is a set of ports to map into the infra container.\nAs, by default, containers share their network with the infra container, this will forward the ports to the entire pod.\nOnly available if NetNS is set to Bridge, Slirp, or Pasta."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"provider",children:"provider?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"provider"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/ContainerProviderConnection",children:(0,t.jsx)(n.code,{children:"ContainerProviderConnection"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/ycechungAI/podman-desktop/blob/e39eb60daa29b637aeab34959abcb3283fc9f11b/packages/extension-api/src/extension-api.d.ts#L430",children:"packages/extension-api/src/extension-api.d.ts:430"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(63696);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);