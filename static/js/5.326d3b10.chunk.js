(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[5],{19:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var i=o(43),r=o(251);function n(){var e=Object(i.a)().breakpoints.up("desktop"),t=Object(r.a)(e,{noSsr:!0});return{isDesktop:t,isMobile:!t}}},3:function(e,t,o){"use strict";o.r(t);var i=o(5),r=(o(4),o(18)),n=o.n(r),s=o(20),a=o(256),c=o(257),l=o(64),h=o(248),d=o(14),u=Object(h.a)((function(e){return{root:{width:e.layout.pageWidth,maxWidth:"100%",margin:"50px auto",textAlign:"center","& h1":{fontSize:20,fontWeight:"bold"},"& a":{display:"block",textDecoration:"underline",marginTop:10}}}})),b=function(){var e=u();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)("h1",{children:"About Ballotnav"}),Object(i.jsx)("p",{children:"coming soon..."}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.hackforla.org/projects/ballot-nav",children:"Project Overview"}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://demo.ballotnav.org",children:"View the Demo"})]})},j=o(67),f=function(){return Object(i.jsxs)(d.d,{children:[Object(i.jsx)(d.b,{exact:!0,path:"/",children:Object(i.jsx)(b,{})}),Object(i.jsx)(d.b,{path:"/privacy-policy",children:Object(i.jsx)(j.a,{})}),Object(i.jsx)(d.a,{to:"/"})]})},m=o(58),p=o(70),x=Object(h.a)({root:{display:"flex",flexDirection:"column",minHeight:"100vh"},content:{flex:1,position:"relative"}}),w=function(){var e=x();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)("div",{className:e.content,children:Object(i.jsx)(f,{})}),Object(i.jsx)(m.a,{}),Object(i.jsx)(p.a,{})]})};n.a.render(Object(i.jsxs)(a.a,{theme:l.a,children:[Object(i.jsx)(c.a,{}),Object(i.jsx)(s.a,{children:Object(i.jsx)(w,{})})]}),document.getElementById("root"))},49:function(e,t,o){"use strict";t.a=o.p+"static/media/hack-for-la.58c25565.svg"},58:function(e,t,o){"use strict";var i=o(5),r=o(4),n=o(11),s=o(19),a=o(248),c=o(49),l=o.p+"static/media/twitter.4efe72c2.svg",h=o.p+"static/media/facebook.5c4140e3.svg",d=Object(a.a)((function(e){return{root:{display:"flex",alignItems:"center"},hackForLA:{width:"5em",marginRight:"3em"},twitter:{width:"2em",marginRight:"3em"},facebook:{width:"1em"}}})),u=function(){var e=d();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)("a",{href:"https://www.hackforla.org",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{className:e.hackForLA,id:"hack-for-LA-logo",src:c.a,alt:"Hack for LA logo"})}),Object(i.jsx)("a",{href:"https://twitter.com/BallotNav",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{className:e.twitter,src:l,alt:"Twitter logo"})}),Object(i.jsx)("a",{href:"https://www.facebook.com/BallotNav/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{className:e.facebook,src:h,alt:"Facebook logo"})})]})},b=o.p+"static/media/ivoted.c928f1f9.png",j=Object(a.a)((function(e){return{root:{display:"flex",alignItems:"center"},shareText:{fontWeight:700,marginBottom:"0.5em",fontSize:"1.2em"},shareButtons:{display:"flex",alignItems:"center","& > :first-child":{marginRight:"0.75em"}},ivoted:{width:"4em",marginRight:"1em"}}})),f=function(){var e=j();return Object(r.useEffect)((function(){window.twttr.ready((function(){return window.twttr.widgets.load()}))}),[]),Object(r.useEffect)((function(){var e;(null===(e=window.FB)||void 0===e?void 0:e.XFBML)?window.FB.XFBML.parse():window.fbAsyncInit=function(){return window.FB.XFBML.parse()}}),[]),Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)("img",{className:e.ivoted,src:b,alt:"I voted"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:e.shareText,children:"Share with your friends"}),Object(i.jsxs)("div",{className:e.shareButtons,children:[Object(i.jsx)("div",{className:"fb-share-button","data-href":"https://www.ballotnav.org/","data-layout":"button_count","data-size":"large",children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ballotnav.org%2F&src=sdkpreparse",className:"fb-xfbml-parse-ignore",children:"Share"})}),Object(i.jsx)("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-url":"https://www.ballotnav.org/","data-dnt":"true","data-show-count":"false",children:"Tweet"})]})]})]})},m=o(20),p=Object(a.a)((function(e){return{root:{textAlign:"center","& a":{color:"inherit"}}}})),x=function(){var e=p();return Object(i.jsxs)("div",{className:e.root,children:["\xa9 COPYRIGHT 2020 BallotNav |"," ",Object(i.jsx)(m.b,{to:"/privacy-policy",children:"PRIVACY POLICY"})]})},w=Object(n.a)((function(e){return{root:{height:156,padding:25,backgroundColor:e.palette.primary.dark,color:e.palette.common.white,fontSize:"1em"},content:{margin:"0 auto",height:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:e.layout.pageWidth}}}))((function(e){var t=e.classes;return Object(i.jsx)("div",{className:t.root,children:Object(i.jsxs)("div",{className:t.content,children:[Object(i.jsx)(u,{}),Object(i.jsx)(f,{}),Object(i.jsx)(x,{})]})})})),y=Object(n.a)((function(e){return{root:{padding:"2em",backgroundColor:e.palette.primary.dark,color:e.palette.common.white,fontSize:"0.8em","& > *:not(:last-child)":{marginBottom:"2em"}}}}))((function(e){var t=e.classes;return Object(i.jsxs)("div",{className:t.root,children:[Object(i.jsx)(u,{}),Object(i.jsx)(f,{}),Object(i.jsx)(x,{})]})}));t.a=function(e){e.hidden;return Object(s.a)().isMobile?Object(i.jsx)(y,{}):Object(i.jsx)(w,{})}},64:function(e,t,o){"use strict";var i=o(208);t.a=Object(i.a)({palette:{type:"light",primary:{main:"#1B2152",dark:"#040822",light:"#EBF3FA"},secondary:{main:"#FF0029"},link:{main:"#0819A5"},background:{default:"#FFF"},divider:"#CCD3DD",locationMarkers:{default:"#614799",selected:"#FF0029"}},typography:{fontFamily:["Open Sans","sans-serif"]},breakpoints:{values:{mobile:0,desktop:960}},layout:{headerHeight:50,sidebarWidth:500,pageWidth:1134},overrides:{MuiCssBaseline:{"@global":{a:{textDecoration:"none"},"h1, h2, h3, h4, h5, h6, p":{margin:0,padding:0}}}}})},67:function(e,t,o){"use strict";var i=o(5),r=(o(4),o(248)),n=Object(r.a)((function(e){return{root:{padding:"0 10px",margin:"0 auto",maxWidth:e.layout.pageWidth,"& ul":{listStyleType:"disc",paddingInlineStart:40},"& li":{display:"list-item"},"& h1":{fontSize:"1.8em",lineHeight:1.6,marginTop:10},"& h2":{fontSize:"1.4em",lineHeight:1.4,margin:"10px 0"},"& h3":{fontSize:"1.1em",lineHeight:1.6,marginTop:10}}}}));t.a=function(){var e=n();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)("h1",{children:"Privacy Policy"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"We respect your privacy, and recognize that we must maintain and use your information responsibly."}),Object(i.jsxs)("p",{children:[Object(i.jsx)("a",{href:"https://www.ballotnav.org/",children:"https://www.ballotnav.org/"}),' is a nonprofit website run by Hack for LA which is a brigade of Code for America Labs, Inc. ("Code for America", "we", "us", "our"). This Privacy Policy describes how we collect, use, and protect your personal information on BallotNav\u2019s website (',Object(i.jsx)("a",{href:"https://www.ballotnav.org/",children:"https://www.ballotnav.org/"}),"). By submitting your personal information on our websites, you agree to the terms in this Privacy Policy. If you do not agree with these terms, please do not use our websites."]}),Object(i.jsx)("h2",{children:"Overview"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"We may collect information from you when you visit and take actions on our website. We use this information to provide the services you've requested."}),Object(i.jsx)("li",{children:"We use cookies (such as those stored by Google Analytics) to provide a better experience and improve our website."}),Object(i.jsx)("li",{children:"We will not knowingly disclose or sell your personal information to any third party, except as provided in this privacy policy."}),Object(i.jsx)("li",{children:"Protecting your personal information is extremely important to us and we take all reasonable measures to do so."})]}),Object(i.jsx)("h2",{children:"The personal information we collect"}),Object(i.jsxs)("h3",{children:["Visiting"," ",Object(i.jsx)("a",{href:"https://www.ballotnav.org/",children:"https://www.ballotnav.org/"})," "]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["We may automatically collect and store data about your visit to"," ",Object(i.jsx)("a",{href:"https://www.ballotnav.org/",children:"https://www.ballotnav.org/"}),":"," "]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Domain from which you access the Internet"}),Object(i.jsx)("li",{children:"Operating system on your computer and information about the browser you used when visiting the site"}),Object(i.jsx)("li",{children:"Date and time of your visit"}),Object(i.jsx)("li",{children:"Pages you visited"}),Object(i.jsx)("li",{children:"Address of the website that connects you to the Site (such as google.com or bing.com)"}),Object(i.jsx)("li",{children:"The queries you make on our site."})]}),Object(i.jsxs)("li",{children:["None of the information we collect about you when you visit"," ",Object(i.jsx)("a",{href:"https://www.ballotnav.org/",children:"https://www.ballotnav.org/"})," is personally identifiable unless you submit your contact information in the form on the Contact Us submit page."]}),Object(i.jsxs)("li",{children:["We use this non personally identifiable information to understand how the"," ",Object(i.jsx)("a",{href:"https://www.ballotnav.org/",children:"https://www.ballotnav.org/"})," ","website is used, to improve the website, and to monitor usage for security purposes."]}),Object(i.jsx)("li",{children:"We will not collect personal information from you without your knowledge and consent, except in a few limited circumstances as described in this policy."})]}),Object(i.jsxs)("h3",{children:["Signing up for notifications at"," ",Object(i.jsx)("a",{href:"https://www.ballotnav.org/",children:"https://www.ballotnav.org/"}),":"," "]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["When signing up for notifications the information stored is limited to:"," "]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Phone Number "}),Object(i.jsx)("li",{children:"Date / Time created"}),Object(i.jsx)("li",{children:"(State and/or Election Administration Jurisdiction) location for which you would like updates for"})]})]}),Object(i.jsx)("h3",{children:"Filling in Webforms such as Contact Us"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"We have a form for feedback."}),Object(i.jsxs)("li",{children:["When you submit the contact us form, your comment, and any other data you submit, will be sent to Hack for LA. The data included here is limited to the fields filled out in the forum."," "]}),Object(i.jsx)("li",{children:"If you are interested in additional information about Hack for LA or Code for America, feel free to reach out."}),Object(i.jsx)("li",{children:"We use the personal data we collect to understand how people ask us questions and to improve the experience of doing so."})]}),Object(i.jsx)("h3",{children:"Filling in Webforms such as Volunteer With Us"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"We have a form for signing up to volunteer with BallotNav. "}),Object(i.jsxs)("li",{children:["When you submit the volunteer form, the data you submit will be sent to Hack for LA. The data included here is limited to the fields filled out in the forum."," "]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"First name"}),Object(i.jsx)("li",{children:"Last name "}),Object(i.jsx)("li",{children:"Your email address "}),Object(i.jsx)("li",{children:"Volunteer Interests "}),Object(i.jsx)("li",{children:"Skills "}),Object(i.jsx)("li",{children:"Experience "}),Object(i.jsx)("li",{children:"Professional Profile link (Linkedin, etc.)"}),Object(i.jsx)("li",{children:"Location (general)"}),Object(i.jsx)("li",{children:"Domain from which you access the internet"}),Object(i.jsx)("li",{children:"IP address"}),Object(i.jsx)("li",{children:"Operating system on your computer and information about the browser you used when visiting the site"}),Object(i.jsx)("li",{children:"Date and time when you submit the form"}),Object(i.jsx)("li",{children:"Address of the page on our website, or the third-party website that connected you to sign-up form"})]}),Object(i.jsx)("li",{children:"If you are interested in additional information about Hack for LA or Code for America, feel free to reach out."}),Object(i.jsx)("li",{children:"We use the personal data we collect to understand how people ask us questions and to improve the experience of doing so."})]}),Object(i.jsx)("h3",{children:"Google Analytics"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"We use Google Analytics to understand how visitors use our site and to gather aggregate performance metrics."}),Object(i.jsx)("li",{children:"We\u2019ve set up Google Analytics so that it doesn\u2019t collect your full IP address."}),Object(i.jsx)("li",{children:"We don\u2019t collect any personally identifiable information using Google Analytics, and we do not combine the information collected through Google Analytics with any personally identifiable information."}),Object(i.jsxs)("li",{children:["Google Analytics places a cookie on your web browser to identify you as a unique user. This cookie cannot be used by anyone but Google. Google's ability to use and share information collected by Google Analytics about your visits to this site is restricted by the",Object(i.jsxs)("a",{href:"http://www.google.com/analytics/terms/us.html",children:[" ","Google Analytics Terms of Use"]})," ","and the"," ",Object(i.jsx)("a",{href:"http://www.google.com/policies/privacy/",children:"Google Privacy Policy"}),"."]})]}),Object(i.jsx)("h2",{children:"Cookies and other tracking technologies"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Cookies are small text files that websites place on the computers and mobile devices of people who visit those websites. Pixel tags (also called web beacons) are small blocks of code placed on websites and emails."}),Object(i.jsx)("li",{children:"We use cookies and other technologies like pixel tags to remember your preferences, enhance your online experience, and to gather data on how you use our Sites to improve the way we promote our content, programs, and events."}),Object(i.jsx)("li",{children:"Your use of our Sites indicates your consent to such use of Cookies."})]}),Object(i.jsx)("h3",{children:"Third party service providers"}),Object(i.jsx)("p",{children:"We use third-party service providers to track and analyze statistical usage and volume information from our Site users. These third-party service providers use persistent Cookies to help us to improve the user experience, manage the content on our Sites, and analyze how users navigate and use the Sites."}),Object(i.jsxs)("p",{children:["Third-party service providers we may use include"," ",Object(i.jsx)("a",{href:"https://analytics.google.com/",children:"Google Analytics"}),",",Object(i.jsx)("a",{href:"https://mixpanel.com/",children:" Mixpanel"}),",",Object(i.jsx)("a",{href:"https://www.hotjar.com/",children:" Hotjar"}),",",Object(i.jsx)("a",{href:"https://www.eventbrite.com/",children:" Eventbrite"}),",",Object(i.jsx)("a",{href:"https://donorbox.org/",children:" Donorbox"}),",",Object(i.jsx)("a",{href:"https://medium.com/",children:" Medium"}),",",Object(i.jsx)("a",{href:"https://twitter.com/?lang=en",children:" Twitter"}),",",Object(i.jsx)("a",{href:"https://www.facebook.com/",children:" Facebook"}),",",Object(i.jsx)("a",{href:"https://www.linkedin.com/",children:" LinkedIn"}),", Airtable."]}),Object(i.jsx)("h3",{children:"How to opt-out of the use of cookies"}),Object(i.jsxs)("p",{children:["Most browsers are initially set up to accept HTTP cookies. If you want to restrict or block the cookies that are set by our Site, or any other site, you can do so through your browser setting. The \u2018Help\u2019 function in your browser should explain how. Alternatively, you can visit"," ",Object(i.jsx)("a",{href:"http://www.aboutcookies.org",children:"www.aboutcookies.org"}),", which contains comprehensive information on how to do this on a wide variety of browsers. You will find general information about cookies and details on how to delete cookies from your machine."]}),Object(i.jsx)("h2",{children:"As required by law and similar disclosures"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["We may access, preserve, and disclose your information if we believe doing so is required or appropriate to:"," "]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"comply with law enforcement requests and legal process, such as a court order or subpoena;"}),Object(i.jsx)("li",{children:"respond to your requests; or"}),Object(i.jsx)("li",{children:"protect your, our, or others\u2019 rights, property, or safety."})]}),Object(i.jsx)("li",{children:"For the avoidance of doubt, the disclosure of your information may occur if you post any objectionable content on or through the Site."})]}),Object(i.jsx)("h2",{children:"Consent"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:"We may also disclose information from you or about you or your devices with your permission."})}),Object(i.jsx)("h2",{children:"Children\u2019s privacy"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"We do not knowingly collect, maintain, or use personal information from children under 13 years of age, and no part of our Site is directed to children."}),Object(i.jsxs)("li",{children:["If you learn that a child has provided us with personal information in violation of this Privacy Policy, then you may alert us at"," ",Object(i.jsx)("a",{href:"mailto:privacy@hackforla.org",children:"privacy@hackforla.org"})," and reference \u201cBallotNav\u201d in the subject line."]})]}),Object(i.jsx)("h2",{children:"Security"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:"We make reasonable efforts to protect your information by using physical and electronic safeguards designed to improve the security of the information we maintain. However, as our Services are hosted electronically, we can make no guarantees as to the security or privacy of your information."})}),Object(i.jsx)("h2",{children:"Right to be forgotten and rectification"}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:["You may request that we delete your personal data that is stored in our databases at any time. Requests can be submitted to"," ",Object(i.jsx)("a",{href:"mailto:privacy@hackforla.org",children:"privacy@hackforla.org"})," and reference \u201cBallotNav\u201d in the subject line."]})}),Object(i.jsx)("h2",{children:"Changes"}),Object(i.jsx)("p",{children:"We may change this Privacy Policy from time to time. Please check this page frequently for updates as your continued use of this site after any changes in this Privacy Policy will constitute your acceptance of the changes."}),Object(i.jsx)("h2",{children:"Effective Date"}),Object(i.jsx)("p",{children:"This version of the policy is effective October 1, 2020."}),Object(i.jsx)("h2",{children:"Questions"}),Object(i.jsx)("p",{children:"If you have any questions, comments, concerns, or complaints related to our websites, please contact us by email at ballotnav@hackforla.org, or by mail at:"}),Object(i.jsxs)("p",{children:["Code for America",Object(i.jsx)("br",{}),"Ref: Hack for LA, BallotNav",Object(i.jsx)("br",{}),"155 9th Street",Object(i.jsx)("br",{}),"San Francisco, CA 94103"]}),Object(i.jsx)("br",{})]})}},70:function(e,t,o){"use strict";var i=o(5),r=o(15),n=o(4),s=o(93),a=o.n(s),c=o(248),l=o(275),h=o(255),d=Object(c.a)((function(e){return{snackbar:{width:"100%",left:0,bottom:0,opacity:.9,backdropFilter:"blur(3px)"},content:{background:e.palette.background.default,color:e.palette.primary.main,borderRadius:0,opacity:1,fontSize:14,paddingBottom:"10px",paddingTop:"10px"},button:{borderRadius:20,fontWeight:700,background:e.palette.primary.main,color:e.palette.background.default,"&:hover":{background:e.palette.primary.main}}}})),u=function(e){var t=e.cookieName,o=e.cookieValue,s=e.expires,c=Object(n.useState)(!1),u=Object(r.a)(c,2),b=u[0],j=u[1],f=d();Object(n.useEffect)((function(){a.a.get(t)||j(!0)}),[j,t]);return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(l.a,{className:f.snackbar,anchorOrigin:{horizontal:"center",vertical:"bottom"},open:b,message:"We use cookies and other tracking technologies to improve your browsing experience and to better understand our website traffic. By browsing our website, you consent to our use of cookies and other tracking technologies.",action:Object(i.jsx)(h.a,{className:f.button,variant:"contained",onClick:function(){a.a.set(t,o,{expires:s}),j(!1)},"aria-label":"accept",children:"OK"}),ContentProps:{className:f.content}})})};t.a=u,u.defaultProps={cookieName:"accept-cookies",cookieValue:!0,expires:30}}}]);
//# sourceMappingURL=5.326d3b10.chunk.js.map