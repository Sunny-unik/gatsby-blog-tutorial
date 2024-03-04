"use strict";(self.webpackChunkmy_first_gatsby_site=self.webpackChunkmy_first_gatsby_site||[]).push([[221],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return R},L:function(){return h},M:function(){return C},P:function(){return k},S:function(){return D},_:function(){return i},a:function(){return l},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=i(e,g);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,y);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,f);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=i(e,E);return t?r.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const C=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=v.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},I={image:s().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],$=["style","className"],P=new Set;let _,O;const j=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:h}=e,y=i(e,T);const{width:f,height:b,layout:v}=n,w=u(f,b,v),{style:E,className:k}=w,C=i(w,$),L=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,f,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(N);if(O&&P.has(N))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;L.current&&(L.current.innerHTML=a(l({isLoading:!0,isLoaded:P.has(N),image:n},y)),P.has(N)||(t=requestAnimationFrame((()=>{L.current&&(r=i(L.current,N,P,s,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{P.has(N)&&O&&(L.current.innerHTML=O(l({isLoading:P.has(N),isLoaded:P.has(N),image:n},y)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},C,{style:l({},E,s,{backgroundColor:c}),className:`${k}${d?` ${d}`:""}`,ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));R.propTypes=I,R.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,q);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const W=A((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:y,objectFit:f,objectPosition:b}=e,v=i(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=l({objectFit:f,objectPosition:b,backgroundColor:y},p);const{width:w,height:E,layout:x,images:I,placeholder:T,backgroundColor:$}=o,P=u(w,E,x),{style:_,className:O}=P,j=i(P,N),R={fallback:void 0,sources:[]};return I.fallback&&(R.fallback=l({},I.fallback,{srcSet:I.fallback.srcSet?S(I.fallback.srcSet):void 0})),I.sources&&(R.sources=I.sources.map((e=>l({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,l({},j,{style:l({},_,s,{backgroundColor:y}),className:`${O}${a?` ${a}`:""}`}),r.createElement(h,{layout:x,width:w,height:E},r.createElement(k,l({},m(T,!1,x,w,E,$,f,b))),r.createElement(C,l({"data-gatsby-image-ssr":"",className:g},v,d("eager"===c,!1,R,c,p)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),M={src:s().string.isRequired,alt:x,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};W.displayName="StaticImage",W.propTypes=M;const D=A(R);D.displayName="StaticImage",D.propTypes=M},8678:function(e,t,a){var r=a(7294),n=a(4160),s=a(5235);t.Z=e=>{let{pageTitle:t,children:a}=e;const l=(0,n.K2)("3159585216");return r.createElement("main",{className:s.nC},r.createElement("title",null,t," | ",l.site.siteMetadata.title),r.createElement("nav",null,r.createElement("ul",{className:s.FV},r.createElement("li",{className:s.up},r.createElement(n.rU,{className:s.cP,to:"/"},"Home")),r.createElement("li",{className:s.up},r.createElement(n.rU,{className:s.cP,to:"/about"},"About")),r.createElement("li",{className:s.up},r.createElement(n.rU,{className:s.cP,to:"/documentation"},"Documentation links")),r.createElement("li",{className:s.up},r.createElement(n.rU,{className:s.cP,to:"/blog"},"Blogs")))),r.createElement("main",null,r.createElement("h1",{className:s.nP},t),a))}},5235:function(e,t,a){a.d(t,{FV:function(){return o},cP:function(){return i},nC:function(){return r},nP:function(){return s},up:function(){return l},yD:function(){return n}});var r="layout-module--container--d35f3",n="layout-module--fullWidth--6ccae",s="layout-module--heading--a9e45",l="layout-module--nav-link-item--a0364",i="layout-module--nav-link-text--d798f",o="layout-module--nav-links--5db89"}}]);
//# sourceMappingURL=7c4403d50c97ef02203aa07113e1676a5c8bab8b-177059539ea9e4b2f862.js.map