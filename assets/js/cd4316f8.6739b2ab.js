(self.webpackChunksadsumoblog=self.webpackChunksadsumoblog||[]).push([[952],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9443:function(e,t,n){"use strict";var o=(0,n(7294).createContext)(void 0);t.Z=o},944:function(e,t,n){"use strict";var o=n(7294),r=n(9443);t.Z=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var o=n(2122),r=n(9756),a=n(7294),i=n(3905),l=n(944),s=n(6010),u="tabItem_1uMI",c="tabItemActive_2DSg";var d=37,p=39;var g=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,r=e.values,i=e.groupId,g=e.className,h=(0,l.Z)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,b=(0,a.useState)(o),v=b[0],y=b[1],k=a.Children.toArray(e.children),w=[];if(null!=i){var T=m[i];null!=T&&T!==v&&r.some((function(e){return e.value===T}))&&y(T)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),o=r[n].value;y(o),null!=i&&(f(i,o),setTimeout((function(){var e,n,o,r,a,i,l,s;(e=t.getBoundingClientRect(),n=e.top,o=e.left,r=e.bottom,a=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&a<=s&&r<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case p:var o=w.indexOf(e.target)+1;n=w[o]||w[0];break;case d:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},g)},r.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var h=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)},m={id:"setupblogging",title:"How to set up blogging",sidebar_position:4},f={unversionedId:"Onboarding/setupblogging",id:"Onboarding/setupblogging",isDocsHomePage:!1,title:"Setting up writting a blog",description:"After you have followed the process of setting up your machine for dev, the next step is to clone the repository that holds the code for the blog to your machine. You then can start making changes and creating new blog posts and deploying them to the GitHub repository. There are two different pushes to the repositories.",source:"@site/docs/Onboarding/set-up-to-write-blogs.md",sourceDirName:"Onboarding",slug:"/Onboarding/setupblogging",permalink:"/docs/Onboarding/setupblogging",version:"current",sidebarPosition:4,frontMatter:{id:"setupblogging",title:"How to set up blogging",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How To Set Up a Linux machine for web development",permalink:"/docs/Onboarding/linuxdevsetup"},next:{title:"Installing Git in a Windows Machine",permalink:"/docs/Onboarding/Gitsetup"}},b=[{value:"Creating and deploying a new blog",id:"creating-and-deploying-a-new-blog",children:[{value:"Installation",id:"installation",children:[]},{value:"Local Development",id:"local-development",children:[]},{value:"Build",id:"build",children:[]}]},{value:"Pushing Changes To Update The Blog Site",id:"pushing-changes-to-update-the-blog-site",children:[]},{value:"Pushing Changes To The Blog Repository To Save Your Changes.",id:"pushing-changes-to-the-blog-repository-to-save-your-changes",children:[]},{value:"Markdown Documentation",id:"markdown-documentation",children:[]}],v={toc:b};function y(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After you have followed the process of setting up your machine for dev, the next step is to clone the repository that holds the code for the blog to your machine. You then can start making changes and creating new blog posts and deploying them to the GitHub repository. There are two different pushes to the repositories. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Onboarding/setupblogging#pushing-changes-to-update-the-blog-site"},"Pushing Changes to update the blog site")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Onboarding/setupblogging#pushing-changes-to-the-blog-repository-to-save-your-changes"},"Pushing changes to the blog repository to save your changes"))),(0,i.kt)("p",null,"But first you need to clone the repository "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"create a directory and open that folder with VS Code. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"open a terminal in VSCode "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"VSCodeTerminal",src:n(1721).Z,title:"VSCodeTerminal"})))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/SadSumo-Studios/blogcode.git\n")),(0,i.kt)("h2",{id:"creating-and-deploying-a-new-blog"},"Creating and deploying a new blog"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"yarn install\n")),(0,i.kt)("h3",{id:"local-development"},"Local Development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"yarn start\n")),(0,i.kt)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),(0,i.kt)("h3",{id:"build"},"Build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"yarn build\n")),(0,i.kt)("p",null,"This command generates static content into the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."),(0,i.kt)("h2",{id:"pushing-changes-to-update-the-blog-site"},"Pushing Changes To Update The Blog Site"),(0,i.kt)("p",null,"This command is different depending if you are on a Windows or Linux platform. In either you can use Visual Studio Code. In a terminal run the command below. "),(0,i.kt)(g,{defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"lx"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"win",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"cmd /C 'set \"GIT_USER=MY_GIT_USERNAME\" && yarn deploy'\n"))),(0,i.kt)(h,{value:"lx",mdxType:"TabItem"},(0,i.kt)("p",null,"Follow these instructions to generate a -> ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Personal Access Token")),(0,i.kt)("p",null,'From GitHub "Basic authentication using a password to Git is deprecated and will soon no longer work. Visit ',(0,i.kt)("a",{parentName:"p",href:"https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/"},"https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/"),' for more information around suggested workarounds and removal dates."'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_USER=<YOUR GITHUB USER ID> GIT_PASS=<Personal Access Token> yarn deploy\n")))),(0,i.kt)("p",null,"Visual Studio Code should open your default browser and have you authenticate "),(0,i.kt)("h2",{id:"pushing-changes-to-the-blog-repository-to-save-your-changes"},"Pushing Changes To The Blog Repository To Save Your Changes."),(0,i.kt)("p",null,"The commands should be the same in either windows or linux. make sure to save your changes. Then stage and commit your changes and push it to the repository. "),(0,i.kt)("h2",{id:"markdown-documentation"},"Markdown Documentation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"MarkDown Documentation")))}y.isMDXComponent=!0},6010:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},1721:function(e,t,n){"use strict";t.Z=n.p+"assets/images/VS-scr-shot-7efd535db51baa5d863df6783072aded.jpg"}}]);