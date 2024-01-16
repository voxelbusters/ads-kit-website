"use strict";(self.webpackChunkdocusaurus_client=self.webpackChunkdocusaurus_client||[]).push([[54],{2648:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(5893),t=s(1151);const i={},o="Presenting Consent Form",a={id:"privacy-management/presenting-consent-form",title:"Presenting Consent Form",description:"Presenting a consent form using the Ads Kit plugin involves offering users the opportunity to provide their consent for personalized ads and other privacy-related attributes before initializing ad networks. Here's how to approach it:",source:"@site/docs/04-privacy-management/03-presenting-consent-form.md",sourceDirName:"04-privacy-management",slug:"/privacy-management/presenting-consent-form",permalink:"/privacy-management/presenting-consent-form",draft:!1,unlisted:!1,editUrl:"https://github.com/voxelbusters/ads-kit-website/tree/main/docs/04-privacy-management/03-presenting-consent-form.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Consent Requirements",permalink:"/privacy-management/consent-requirements"},next:{title:"best-practices",permalink:"/privacy-management/best-practices"}},d={},l=[{value:"Steps to Present the Consent Form",id:"steps-to-present-the-consent-form",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"presenting-consent-form",children:"Presenting Consent Form"}),"\n",(0,r.jsx)(n.p,{children:"Presenting a consent form using the Ads Kit plugin involves offering users the opportunity to provide their consent for personalized ads and other privacy-related attributes before initializing ad networks. Here's how to approach it:"}),"\n",(0,r.jsx)(n.h3,{id:"steps-to-present-the-consent-form",children:"Steps to Present the Consent Form"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Determine the Need for Consent"}),": Decide if your game requires presenting a consent form, which is necessary if you're serving personalized/non-personalised ads or collecting user data for ad-related purposes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Obtain a Consent Form Provider"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use the\xa0",(0,r.jsx)(n.strong,{children:"AdServices"}),"\xa0utility class to query the available\xa0",(0,r.jsx)(n.strong,{children:"IConsentFormProvider"}),"\xa0implementations."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"var availableProviders = AdServices.FindConsentFormProviders();\nIConsentFormProvider consentProvider = availableProviders.Length > 0 ? availableProviders[0] : null;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If AdMob is enabled, the plugin provides a default implementation that uses AdMob\u2019s User Messaging Platform (UMP) framework, compliant with the IAB's Transparency & Consent Framework (TCF) specification."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Custom Consent Form Provider (Optional)"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you wish to customize the consent form, implement the\xa0",(0,r.jsx)(n.strong,{children:"IConsentFormProvider"}),"\xa0interface to create your provider and handle the display and result of user consent."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Initialize Ads Manager"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Pass the obtained consent provider to the\xa0",(0,r.jsx)(n.code,{children:"InitialiseAdsManager"}),"\xa0method which initializes the Ads Manager:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public void InitialiseAdsManager(IConsentFormProvider consentProvider)\n{\n   var operation = AdsManager.Initialise(consentProvider);\n   operation.OnComplete += (result) =>\n   {\n       // Ad networks have been initialised, and you can start loading/showing ads\n   };\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Call this method during your game startup routine."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Setup Consent Form via AdMob Dashboard"}),"\xa0(If using AdMob):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Follow the instructions provided in the\xa0",(0,r.jsx)(n.a,{href:"https://support.google.com/admob/answer/10113207",children:"AdMob support"}),"\xa0to set up the consent form on the AdMob dashboard."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By following these steps, developers can ensure they present a consent form to their players, allowing them to make informed decisions about their data and adhere to privacy regulations such as GDPR and COPPA."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(7294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);