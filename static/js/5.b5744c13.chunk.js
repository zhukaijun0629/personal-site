(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{152:function(t,e,i){t.exports=function(){"use strict";var t="millisecond",e="second",i="minute",n="hour",r="day",s="week",a="month",o="quarter",c="year",u="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},p={s:f,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),r=i%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(r,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),r=e.clone().add(n,a),s=i-r<0,o=e.clone().add(n+(s?-1:1),a);return+(-(n+(i-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:c,w:s,d:r,D:u,h:n,m:i,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",g={};g[m]=d;var b=function(t){return t instanceof S},$=function(t,e,i){var n;if(!t)return m;if("string"==typeof t)g[t]&&(n=t),e&&(g[t]=e,n=t);else{var r=t.name;g[r]=t,n=r}return!i&&n&&(m=n),n||!i&&m},j=function(t,e){if(b(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new S(i)},y=p;y.l=$,y.i=b,y.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=$(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(h);if(n){var r=n[2]-1||0,s=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var i=j(t);return this.startOf(e)<=i&&i<=this.endOf(e)},f.isAfter=function(t,e){return j(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<j(t)},f.$g=function(t,e,i){return y.u(t)?this[e]:this.set(i,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,l=!!y.u(o)||o,d=y.p(t),f=function(t,e){var i=y.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return l?i:i.endOf(r)},p=function(t,e){return y.w(h.toDate()[t].apply(h.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,g=this.$M,b=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case c:return l?f(1,0):f(31,11);case a:return l?f(1,g):f(0,g+1);case s:var j=this.$locale().weekStart||0,S=(m<j?m+7:m)-j;return f(l?b-S:b+(6-S),g);case r:case u:return p($+"Hours",0);case n:return p($+"Minutes",1);case i:return p($+"Seconds",2);case e:return p($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,l=y.p(s),d="set"+(this.$u?"UTC":""),f=(h={},h[r]=d+"Date",h[u]=d+"Date",h[a]=d+"Month",h[c]=d+"FullYear",h[n]=d+"Hours",h[i]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[l],p=l===r?this.$D+(o-this.$W):o;if(l===a||l===c){var m=this.clone().set(u,1);m.$d[f](p),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,o){var u,h=this;t=Number(t);var l=y.p(o),d=function(e){var i=j(h);return y.w(i.date(i.date()+Math.round(e*t)),h)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===r)return d(1);if(l===s)return d(7);var f=(u={},u[i]=6e4,u[n]=36e5,u[e]=1e3,u)[l]||1,p=this.$d.getTime()+t*f;return y.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},d=function(t){return y.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:h(r.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,c,2),ddd:h(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:y.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:n};return i.replace(l,(function(t,e){return e||p[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,h){var l,d=y.p(u),f=j(t),p=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,g=y.m(this,f);return g=(l={},l[c]=g/12,l[a]=g,l[o]=g/3,l[s]=(m-p)/6048e5,l[r]=(m-p)/864e5,l[n]=m/36e5,l[i]=m/6e4,l[e]=m/1e3,l)[d]||m,h?g:y.a(g)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=$(t,e,!0);return n&&(i.$L=n),i},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),v=S.prototype;return j.prototype=v,[["$ms",t],["$s",e],["$m",i],["$H",n],["$W",r],["$M",a],["$y",c],["$D",u]].forEach((function(t){v[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,S,j),t.$i=!0),j},j.locale=$,j.isDayjs=b,j.unix=function(t){return j(1e3*t)},j.en=g[m],j.Ls=g,j.p={},j}()},164:function(t,e,i){"use strict";i.r(e);var n=i(0),r=(i(1),i(5)),s=i(20),a=i(152),o=i.n(a),c=function(t){var e=t.data;return Object(n.jsx)("div",{className:"cell-container",children:Object(n.jsxs)("article",{className:"mini-post",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.title})}),Object(n.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(n.jsx)("nav",{className:"links",children:Object(n.jsxs)("ul",{children:[e.linkDemo&&Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.linkDemo,target:"_blank",rel:"noopener noreferrer",children:"Try it out"})},"demo"),e.linkGithub&&Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.linkGithub,target:"_blank",rel:"noopener noreferrer",children:"Github"})},"github")]})}),Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"image",children:Object(n.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:e.desc})})]})})},u=[{title:"KaiPlace",subtitle:"Photo Sharing Social Network",linkDemo:"https://kaiplace.web.app",linkGithub:"https://github.com/zhukaijun0629/Milestone_Project-1_KaiPlace-Frontend",image:"/images/projects/kaiplace.gif",date:"2021-02-01",desc:"Developed a dynamic and interactive Photo Sharing Social Networking service during pandemic. We wish to light up some hopes under the lock-down by encouraging users to share places they plan to visit in the future. "},{title:"Kaibrary",subtitle:"Online Library",linkDemo:"https://kaibrary.herokuapp.com/",linkGithub:"https://github.com/zhukaijun0629/Milestone_Project-2_Kaibrary",image:"/images/projects/kaibrary.png",date:"2020-12-20",desc:"Build a PC-only online library application which allows the user to organize and search for books and authors. JavaScript and HTML/CSS were used to build the front end, while NodeJS, Express, MongoDB, and FilePond API were used to build the back end of the web app."},{title:"Speed Typing",subtitle:"A speed typing game",linkDemo:"https://zhukaijun0629.github.io/Small_Project-2_Speed-Typing/",linkGithub:"https://github.com/zhukaijun0629/Small_Project-2_Speed-Typing",image:"/images/projects/speed-type.gif",date:"2020-11-20",desc:'Launched this addicitve mini web game "Speed-Typing" to help practice typing skills by monitoring speed and accuracy. JavaScript, HTML/CSS, and Random Quotes API were used to create the game. Just try it out, you will love it!'},{title:"Tic Tac Toe",subtitle:"A mini web game Tic-Tac-Toe",linkDemo:"https://zhukaijun0629.github.io/Small_Project-3_JS-TIC-TAC-TOE/",linkGithub:"https://github.com/zhukaijun0629/Small_Project-3_JS-TIC-TAC-TOE",image:"/images/projects/tic-tac-toe.gif",date:"2020-11-18",desc:"Revived this classic Tic-Tac-Toe game on the web using vanilla JavaScript, HTML and CSS. Though it is not fancy, but it might help kill 5 seconds of the boring time. "}];e.default=function(){return Object(n.jsx)(s.a,{title:"Projects",description:"Learn about Kaijun Zhu's projects.",children:Object(n.jsxs)("article",{className:"post",id:"projects",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(n.jsx)("p",{children:"Working on projects are the best way to learn and practice, thus grow"})]})}),u.map((function(t){return Object(n.jsx)(c,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=5.b5744c13.chunk.js.map