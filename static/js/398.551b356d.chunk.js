"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[398,791],{398:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,i,o,s,a,c,d,l,x,h,u=r(861),p=r(439),f=r(687),g=r.n(f),v=r(689),Z=r(87),j=r(791),m=r(652),b=r(243),w=r(168),k=r(686),y=k.Z.div(t||(t=(0,w.Z)(["\n  padding: 20px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),_=k.Z.div(i||(i=(0,w.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-top: 10px;\n"]))),U=k.Z.div(o||(o=(0,w.Z)(["\n  flex: 0 0 200px;\n"]))),z=k.Z.img(s||(s=(0,w.Z)(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n"]))),C=k.Z.div(a||(a=(0,w.Z)(["\n  flex: 1;\n"]))),L=k.Z.h2(c||(c=(0,w.Z)(["\n  margin-bottom: 10px;\n  font-size: 24px;\n  font-weight: bold;\n"]))),R=k.Z.p(d||(d=(0,w.Z)(["\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),S=k.Z.h3(l||(l=(0,w.Z)(["\n  margin-top: 20px;\n  font-size: 18px;\n  font-weight: bold;\n"]))),E=k.Z.p(x||(x=(0,w.Z)(["\n  font-size: 14px;\n"]))),G=k.Z.div(h||(h=(0,w.Z)(["\n  margin: 20px 0 20px 0;\n"]))),O=r(184);function P(){var n,e=(0,v.UO)().movieId,r=(0,j.useState)(null),t=(0,p.Z)(r,2),i=t[0],o=t[1],s=(0,j.useState)(!1),a=(0,p.Z)(s,2),c=a[0],d=a[1],l=(0,v.TH)(),x=(0,j.useRef)((null===(n=l.state)||void 0===n?void 0:n.from)||"/movies");if((0,j.useEffect)((function(){var n=function(){var n=(0,u.Z)(g().mark((function n(){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=fb3515b73dbebc75ad9d5f107517204c"));case 3:r=n.sent,o(r.data),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0),d(!0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),c)return(0,O.jsx)(m.default,{});if(!i)return(0,O.jsx)("div",{children:"Loading..."});var h=i.genres.map((function(n){return n.name})).join(", "),f=Math.round(i.vote_average/10*100);return(0,O.jsxs)(y,{children:[(0,O.jsx)(Z.rU,{to:x.current,children:"Go back"}),(0,O.jsxs)(_,{children:[(0,O.jsx)(U,{children:(0,O.jsx)(z,{src:"https://image.tmdb.org/t/p/w500".concat(i.poster_path),alt:i.title})}),(0,O.jsxs)(C,{children:[(0,O.jsx)(L,{children:i.title}),(0,O.jsxs)(R,{children:["User score: ",f,"%"]}),(0,O.jsx)(S,{children:"Overview"}),(0,O.jsx)(E,{children:i.overview}),(0,O.jsx)(S,{children:"Genres"}),(0,O.jsx)(E,{children:h})]})]}),(0,O.jsx)(G,{children:(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)(Z.rU,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(Z.rU,{to:"reviews",children:"Reviews"})})]})}),(0,O.jsx)(j.Suspense,{fallback:(0,O.jsx)("div",{children:"Loading..."}),children:(0,O.jsx)(v.j3,{})})]})}},652:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var t,i,o,s=r(168),a=r(686),c=r(184),d=a.Z.h1(t||(t=(0,s.Z)(["\n  margin-top: 125px;\n  margin-bottom: 10px;\n  text-align: center;\n"]))),l=a.Z.p(i||(i=(0,s.Z)(["\n  text-align: center;\n  font-size: 24px;\n"]))),x=a.Z.a(o||(o=(0,s.Z)(["\n  color: #0000ff;\n  font-weight: 700;\n"])));function h(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(d,{children:"Error 404"}),(0,c.jsxs)(l,{children:["Page Not Found We're sorry, but the page you requested could not be found. Please check the URL for any mistakes and try again. You can go back to the"," ",(0,c.jsx)(x,{href:"/goit-react-hw-05-movies",children:"home page"})," ","to continue browsing."]})]})}}}]);
//# sourceMappingURL=398.551b356d.chunk.js.map