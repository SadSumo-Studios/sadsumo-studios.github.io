(self.webpackChunksadsumoblog=self.webpackChunksadsumoblog||[]).push([[377],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2832:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l={id:"Gitsetup",title:"Installing Git in a Windows Machine",sidebar_position:5},o={unversionedId:"Onboarding/Gitsetup",id:"Onboarding/Gitsetup",isDocsHomePage:!1,title:"Installing Git in a Windows Machine",description:"git",source:"@site/docs/Onboarding/setup-Git.md",sourceDirName:"Onboarding",slug:"/Onboarding/Gitsetup",permalink:"/docs/Onboarding/Gitsetup",version:"current",sidebarPosition:5,frontMatter:{id:"Gitsetup",title:"Installing Git in a Windows Machine",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"setting up writting a blog",permalink:"/docs/Onboarding/setupblogging"}},p=[{value:"git",id:"git",children:[]}],s={toc:p};function u(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"git"},(0,r.kt)("a",{parentName:"h2",href:"https://git-scm.com/dpwnloads/win"},"git")),(0,r.kt)("p",null,"Follow the link above"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'The download should start automatically, but if it does not click on the link "Click here to download manually". ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Double-click the executable. In Windows 10 you will get a UAC prompt, click Yes. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Accept the license terms. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the select components window, make sure:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"check daily for Git for Windows Updates" is checked'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"ComponentWindow",src:n(6307).Z,title:"ComponentWindow"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In the "Choosing the default editor used by Git" window:'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Ensure "Use Visual Studio Code as Git\'s defalut editor" is selected.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Ensure VS Code",src:n(3869).Z,title:"Ensure VS Code"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Adjusting the name of the initial branch...:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Leave the default of "Let Git decide"'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"git-repoName",src:n(5490).Z,title:"git-repoName"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the Adjusting your PATH window:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Leave the default of "Git from the command line and also from 3rd-party software'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"PATH",src:n(259).Z,title:"PATH"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In "Choosing HTTPS transport backend:'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Leave default "Use the OpenSSL Library"'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"HTTPS",src:n(8734).Z,title:"HTTPS"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Configuring the terminal emulator:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Leave "Use MinTTY (the default terminal of MSTS2)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"you will mostly be using the terminal in VS Code"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Terminal Emulation",src:n(1602).Z,title:"Terminal Emulation"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Choose the default behavior of 'git pull'"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is debatable, so if you know what you are doing, you decide. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if you do not know, leave default."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"SadSumo",src:n(8061).Z,title:"Original SadSumo"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Choose a credential helper:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"very excited that Git Credential Manager Core is an option. LEAVE IT!!"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"CredHelper",src:n(2416).Z,title:"Credential Helper"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Configuring extra options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"leave the defaults"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Extra Options",src:n(9718).Z,title:"Extra Options"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Configuring experimental options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"save yourself a headache and leave this unchecked"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let the install run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Do you really want to read the "Release Notes"? uncheck that. Also you do not have to check Launch Git Bash unless you want to see that run. '))),(0,r.kt)("p",null,"you can verify that Git is installed by running the following command in the VS Code terminal, a CMD window, or PowerShell console. And of course you can run Git commands in Git Bash, duh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Verify Git installed."',title:'"Verify',Git:!0,'installed."':!0},"git --version \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="the output should look like ."',title:'"the',output:!0,should:!0,look:!0,like:!0,'."':!0},"git version 2.31.1.windows.1 #but your version might be different\n")))}u.isMDXComponent=!0},8734:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-HTTPSH-3023c0e87136a5f4a318cad012b51e70.jpg"},259:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-PATH-b4150d27932335d4229a6e4d5b34e9c0.jpg"},2416:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-credmanager-f7df079f90d20b4543918fda442cb7f4.jpg"},3869:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-ensureVSCode-e75f3f20ad91805834c003c8e48b2914.jpg"},9718:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-extra-ee0c976a442cefe3db90835b762cfded.jpg"},8061:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-pull-cddd7ba199e6ab51ccd4d707d1150629.jpg"},5490:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-repoName-bb31753b670cf748210ff8f1934c3c82.jpg"},6307:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-selectComponentWindow-1c31ca8826fba89abdc992d3a3b8642f.jpg"},1602:function(e,t,n){"use strict";t.Z=n.p+"assets/images/git-terminalemulation-44e4ca6e47192a8fb2536f79595b505b.jpg"}}]);