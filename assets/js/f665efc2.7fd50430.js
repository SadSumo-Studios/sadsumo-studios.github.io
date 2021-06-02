(self.webpackChunksadsumoblog=self.webpackChunksadsumoblog||[]).push([[762],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2392:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={id:"linuxdevsetup",title:"Windows Dev Machine Setup",sidebar_position:2},l={unversionedId:"Onboarding/linuxdevsetup",id:"Onboarding/linuxdevsetup",isDocsHomePage:!1,title:"How To Set Up a Windows machine for web development or to write blogs in blog.sadsumo.com",description:"These are the steps needed to set up a Windows machine for web development or to write blogs in blog.sadsumo.com",source:"@site/docs/Onboarding/setup-windows.md",sourceDirName:"Onboarding",slug:"/Onboarding/linuxdevsetup",permalink:"/docs/Onboarding/linuxdevsetup",version:"current",sidebarPosition:2,frontMatter:{id:"linuxdevsetup",title:"Windows Dev Machine Setup",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/Onboarding/newdevintro"},next:{title:"How To Set Up a Windows machine for web development or to write blogs in blog.sadsumo.com",permalink:"/docs/Onboarding/linuxdevsetup"}},s=[{value:"Visual Studio Code",id:"visual-studio-code",children:[]},{value:"NodeJS",id:"nodejs",children:[]},{value:"NPM",id:"npm",children:[]},{value:"git",id:"git",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These are the steps needed to set up a Windows machine for web development or to write blogs in blog.sadsumo.com"),(0,i.kt)("p",null,"The environments that I am installing are:"),(0,i.kt)("h2",{id:"visual-studio-code"},(0,i.kt)("a",{parentName:"h2",href:"https://code.visualstudio.com/"},"Visual Studio Code")),(0,i.kt)("p",null,"follow the link above and download the latest installation. Use the default install settings. "),(0,i.kt)("h2",{id:"nodejs"},(0,i.kt)("a",{parentName:"h2",href:"https://nodejs.org/en/"},"NodeJS")),(0,i.kt)("p",null,"Download and install the latest. Docusaurus 2 requires 12.13.0 or above. Use the default install settings. "),(0,i.kt)("p",null,"you can verify you have installed NodeJS by opening either a CMD prompt or a PowerShell console and issue the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",2:!0,className:"language-PowerSHell",metastring:'title="Verify node installed. Docusaurus 2 requires 12.13.0 or above"',title:'"Verify',node:!0,"installed.":!0,Docusaurus:!0,requires:!0,"12.13.0":!0,or:!0,'above"':!0},"node -v # to check node version\n")),(0,i.kt)("p",null,"note: you can also use the terminal in VS Code to verify Node and NPM installation. "),(0,i.kt)("h2",{id:"npm"},(0,i.kt)("a",{parentName:"h2",href:"https://www.npmjs.com/"},"NPM")),(0,i.kt)("p",null,"Installing NodeJS from above will also install NPM.\nyou can verify you have installed NPM by opening either a CMD prompt or a PowerShell console and issue the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Verify NPM installed."',title:'"Verify',NPM:!0,'installed."':!0},"npm -v # to check node version\n")),(0,i.kt)("h2",{id:"git"},(0,i.kt)("a",{parentName:"h2",href:"https://git-scm.com/dpwnloads/win"},"git")),(0,i.kt)("p",null,"Installing Git in windows is simple but has a lot of steps, so we put those instructions in its own document ",(0,i.kt)("a",{parentName:"p",href:"/docs/Onboarding/Gitsetup"},"here")),(0,i.kt)("p",null,"That's it! You are ready to either develop web solutions using your machine. Only use your new powers for good!"))}d.isMDXComponent=!0}}]);