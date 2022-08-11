"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{4651:function(a,b,c){c.d(b,{Ee:function(){return m}});var d=c(4805),e=c(5031),f=c(7294),g=c(4697);function h(){return(h=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function i(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var j=["htmlWidth","htmlHeight","alt"],k=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],l=f.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,g=i(a,j);return f.createElement("img",h({width:c,height:d,ref:b,alt:e},g))});e.Ts&&(l.displayName="NativeImage");var m=(0,d.Gp)(function(a,b){var c,j,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=a.fallbackSrc,C=a.fallback,D=a.src,E=a.srcSet,F=a.align,G=a.fit,H=a.loading,I=a.ignoreFallback,J=a.crossOrigin,K=a.fallbackStrategy,L=a.referrerPolicy,M=i(a,k),N=null!=H||I||!(void 0!==B|| void 0!==C),O=(z=(j=(c=h({},a,{ignoreFallback:N})).loading,m=c.src,n=c.srcSet,o=c.onLoad,p=c.onError,q=c.crossOrigin,r=c.sizes,s=c.ignoreFallback,t=(0,f.useState)("pending"),u=t[0],v=t[1],(0,f.useEffect)(function(){v(m?"loading":"pending")},[m]),w=(0,f.useRef)(),x=(0,f.useCallback)(function(){if(m){y();var a=new Image;a.src=m,q&&(a.crossOrigin=q),n&&(a.srcset=n),r&&(a.sizes=r),j&&(a.loading=j),a.onload=function(a){y(),v("loaded"),null==o||o(a)},a.onerror=function(a){y(),v("failed"),null==p||p(a)},w.current=a}},[m,q,n,r,o,p,j]),y=function(){w.current&&(w.current.onload=null,w.current.onerror=null,w.current=null)},(0,g.a)(function(){if(!s)return"loading"===u&&x(),function(){y()}},[u,x,s]),s?"loaded":u),A=void 0===K?"beforeLoadOrError":K,"loaded"!==z&&"beforeLoadOrError"===A||"failed"===z&&"onError"===A),P=h({ref:b,objectFit:G,objectPosition:F},N?M:(0,e.CE)(M,["onError","onLoad"]));return O?C||f.createElement(d.m$.img,h({as:l,className:"chakra-image__placeholder",src:B},P)):f.createElement(d.m$.img,h({as:l,src:D,srcSet:E,crossOrigin:J,loading:H,referrerPolicy:L,className:"chakra-image"},P))});e.Ts&&(m.displayName="Image")},4870:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(1799),e=c(9396),f=c(9534),g=c(5893),h=c(7294),i=c(8527),j=function(a){var b=a.expand,c=a.container,j=(0,f.Z)(a,["expand","container"]),k=(0,h.useMemo)(function(){return b&&{height:"100vh"}},[b]);return(0,g.jsx)(i.xu,(0,e.Z)((0,d.Z)({as:"section"},k,j),{children:(0,g.jsx)(i.W2,(0,e.Z)((0,d.Z)({maxW:"container.lg",h:"full",py:"5em"},c),{children:j.children}))}))}},6467:function(a,b,c){c.r(b),c.d(b,{default:function(){return k}});var d=c(5893),e=c(8527),f=c(7496),g=c(4651),h=c(7294),i=c(4870),j={src:"/portfolio/_next/static/media/me.a433708a.jpeg",height:460,width:460,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKIhb//EAB0QAAICAQUAAAAAAAAAAAAAAAECAwQAESEyM7H/2gAIAQEAAT8AltxR2+1yxkVNDx3X0Z//xAAYEQACAwAAAAAAAAAAAAAAAAACIgABQf/aAAgBAgEBPwCzNWyf/8QAFhEBAQEAAAAAAAAAAAAAAAAAASEA/9oACAEDAQE/AFrN/9k="},k=function(){var a=(0,h.useState)("100vh"),b=a[0],c=a[1];return(0,h.useEffect)(function(){var a=function(){c(innerHeight+"px")};return a(),addEventListener("resize",a),function(){removeEventListener("resize",a)}},[]),(0,d.jsx)(i.Z,{h:b,color:"white",children:(0,d.jsx)(e.M5,{h:"full",w:"full",children:(0,d.jsx)(f.Rg,{in:!0,delay:.5,children:(0,d.jsxs)(e.gC,{alignItems:"center",spacing:"1em",children:[(0,d.jsx)(g.Ee,{src:j.src,alt:"profile picture",borderRadius:"full",w:[200,null,"xs"],boxShadow:"xl"}),(0,d.jsx)(e.X6,{children:"Thanawat Yodnil."}),(0,d.jsx)(e.xv,{children:"I'm web developer \uD83D\uDC4B"})]})})})})}}}])