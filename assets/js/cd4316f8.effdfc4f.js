(self.webpackChunksadsumoblog=self.webpackChunksadsumoblog||[]).push([[952],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},318:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={id:"setupblogging",title:"How to set up blogging",sidebar_position:4},s={unversionedId:"Onboarding/setupblogging",id:"Onboarding/setupblogging",isDocsHomePage:!1,title:"setting up writting a blog",description:"After you have followed the process of setting up your machine for dev, the next step is to clone the repository that holds the code for the blog to your machine. You then can start making changes and creating new blog posts and deploying them to the GitHub repository. There are two different pushes to the repositories.",source:"@site/docs/Onboarding/set-up-to-write-blogs.md",sourceDirName:"Onboarding",slug:"/Onboarding/setupblogging",permalink:"/docs/Onboarding/setupblogging",version:"current",sidebarPosition:4,frontMatter:{id:"setupblogging",title:"How to set up blogging",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How To Set Up a Linux machine for web development",permalink:"/docs/Onboarding/linuxdevsetup"},next:{title:"Installing Git in a Windows Machine",permalink:"/docs/Onboarding/Gitsetup"}},l=[{value:"Pushing Changes to update the blog site",id:"pushing-changes-to-update-the-blog-site",children:[]},{value:"Pushing changes to the blog repository to save your changes.",id:"pushing-changes-to-the-blog-repository-to-save-your-changes",children:[]},{value:"Markdown Documentation",id:"markdown-documentation",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After you have followed the process of setting up your machine for dev, the next step is to clone the repository that holds the code for the blog to your machine. You then can start making changes and creating new blog posts and deploying them to the GitHub repository. There are two different pushes to the repositories. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.google.com"},"Pushing Changes to update the blog site"))),(0,i.kt)("h2",{id:"pushing-changes-to-update-the-blog-site"},"Pushing Changes to update the blog site"),(0,i.kt)("h2",{id:"pushing-changes-to-the-blog-repository-to-save-your-changes"},"Pushing changes to the blog repository to save your changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="clone repo"',title:'"clone','repo"':!0},"git clone https://github.com/SadSumo-Studios/blogcode.git\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"cd blogcode\n\n\nGIT_USER=<YOUR GITHUB USER ID> yarn deploy\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="clone repo"',title:'"clone','repo"':!0},"sudo apt install nodejs\n")),(0,i.kt)("h2",{id:"markdown-documentation"},"Markdown Documentation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"MarkDown Documentation")))}c.isMDXComponent=!0}}]);