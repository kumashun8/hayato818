(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(A,e,a){"use strict";a.r(e);var t=a(0),n=a.n(t),c=a(146),r=a(154),i=a(152);e.default=function(){return n.a.createElement(r.a,null,n.a.createElement(i.a,{title:"Page two"}),n.a.createElement("h1",null,"Hi from the second page"),n.a.createElement("p",null,"Welcome to page 2"),n.a.createElement(c.a,{to:"/"},"Go back to the homepage"))}},146:function(A,e,a){"use strict";a.d(e,"b",function(){return d});var t=a(0),n=a.n(t),c=a(4),r=a.n(c),i=a(33),s=a.n(i);a.d(e,"a",function(){return s.a});a(147);var o=n.a.createContext({}),d=function(A){return n.a.createElement(o.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(A,e,a){var t;A.exports=(t=a(150))&&t.default||t},148:function(A,e,a){"use strict";a(74),a(75),a(76);var t=a(151),n=a(0),c=a.n(n),r=a(146),i=a(156),s=a.n(i);e.a=function(A){return c.a.createElement(r.b,{query:"1345654842",render:function(e){var a=e.images.edges.find(function(e){return e.node.relativePath.includes(A.filename)});if(!a)return null;var t=a.node.childImageSharp.sizes;return c.a.createElement(s.a,{alt:A.alt,sizes:t})},data:t})}},149:function(A){A.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},150:function(A,e,a){"use strict";a.r(e);a(34);var t=a(0),n=a.n(t),c=a(4),r=a.n(c),i=a(55),s=a(2),o=function(A){var e=A.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?n.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=o},151:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png",srcSet:"/static/4a9773549091c227cd2eb82ccd9c5e3a/d3809/gatsby-icon.png 150w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/fdbb0/gatsby-icon.png 300w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{relativePath:"kuma01.jpg",name:"kuma01",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAG3Sko0TWZrCKMY4E2//8QAGxAAAgMAAwAAAAAAAAAAAAAAAAECERIDEyH/2gAIAQEAAQUCyczkngbSLs7WRLG/f//EABgRAAIDAAAAAAAAAAAAAAAAAAACEBEx/9oACAEDAQE/AcKGj//EABgRAQADAQAAAAAAAAAAAAAAAAABAjER/9oACAECAQE/AddUTr//xAAaEAABBQEAAAAAAAAAAAAAAAAAARAREjEg/9oACAEBAAY/AtEpxhL/AP/EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQWGh/9oACAEBAAE/IdNKhW9/ZR2l9zNq5i1asCAbezOllrsVaexrz//aAAwDAQACAAMAAAAQG/AC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERIUEx/9oACAEDAQE/EI0KdmBcP//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQIBAT8QVyxy4ZZsf//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExQWFx/9oACAEBAAE/EB7P4HHe0UCNXmMaJh679xJJgqLluyOt8yvDOnue/wBaq5INfGHC6GZ//9k=",aspectRatio:1,src:"/static/8c062392f9892e0f011bdc8b9cdf6681/775d9/kuma01.jpg",srcSet:"/static/8c062392f9892e0f011bdc8b9cdf6681/cb3d3/kuma01.jpg 150w,\n/static/8c062392f9892e0f011bdc8b9cdf6681/c83a6/kuma01.jpg 300w,\n/static/8c062392f9892e0f011bdc8b9cdf6681/775d9/kuma01.jpg 600w,\n/static/8c062392f9892e0f011bdc8b9cdf6681/aab0f/kuma01.jpg 850w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"top01.JPG",name:"top01",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAABf3HlJ2iA/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAIRARIT/9oACAEBAAEFAsbS0iHpFxjs/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEREv/aAAgBAwEBPwGmYf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAaEAABBQEAAAAAAAAAAAAAAAAAAQIQEiEy/9oACAEBAAY/AjUOSrZ//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERMRAhUXH/2gAIAQEAAT8hd0mRoMmFz9fcaH//2gAMAwEAAgADAAAAEBQv/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QQy//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Qlaf/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFRYXHh/9oACAEBAAE/EHLC9XdwxEuRIuty9zHSGxsfiJbavmUG2f/Z",aspectRatio:1.3333333333333333,src:"/static/704675d5862884b2dda89e8f5f8834d0/775d9/top01.jpg",srcSet:"/static/704675d5862884b2dda89e8f5f8834d0/cb3d3/top01.jpg 150w,\n/static/704675d5862884b2dda89e8f5f8834d0/c83a6/top01.jpg 300w,\n/static/704675d5862884b2dda89e8f5f8834d0/775d9/top01.jpg 600w,\n/static/704675d5862884b2dda89e8f5f8834d0/2b1a3/top01.jpg 900w,\n/static/704675d5862884b2dda89e8f5f8834d0/81ef8/top01.jpg 1200w,\n/static/704675d5862884b2dda89e8f5f8834d0/fb184/top01.jpg 1800w,\n/static/704675d5862884b2dda89e8f5f8834d0/a8d59/top01.jpg 4032w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"work01.png",name:"work01",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADTUlEQVQ4y02TS2/jZBSG8zumVG16p01zvzROc7Nju0ns5tKkSRMnbUMHpZQpAjqt0Ehc5iaxQCAhAaILijQbFsBmYMGs2M6/YM+CX+CHY1dULF758+dz/J1z3ucLxONx11MqlbpTMpl0E4mE//z//n/y4sPhiP+MxWKyDrvRaNTPCWQyGSQRRVF8ZbPZO0kyEnT3rihZtra2qFQqHB8fUqvVaDYbjMcOnb22nx+QQNdTsVh0S6WSL/ngn7a5uXlXZT6fd8vlsh97fv6u++PNtfvw4gP36dPP3Jsfrt3vvv3avbq6cAMSiKdcLudXKm2wsLDAzL17vjY21olEwv6+9z2dTqPkFBxnSL/fYzA4YDp9G/k5w+GAQKFQwDR3kBkQCoV4Y3aWWdFccJHg4jKLSyuiZYLB4O3+/Dwrc3Ok5ABdN9A0DcMwKRZL/jrg9V3dqRKJxTDzObaTCdRcllGtjFZIU1QSVEoKFcOgXC7JTKVSiZ2Mx3S7e4xHDkdHh1iWhW3bBGQufrsLS0u01BwZqXJsbfHXNxZ/vJ/k59MEry7LXJ2N0JIZnu+3qCcixKNxYpEka+thVGWbTrdLs9G4bdmbz9x8ELOcJynrsRHl9aXCy0mc3+8n+OVgmQvHZDuW4MGuRk8q369kuHHe5PO9FQ6bFRqtPdqtFgFVVRFnWV1bo6lrVPIFWrrCq492+O1c4ftxip8+HvHsySNC0upGeJOlUJSemeb1eyv8ebbBxXGb3VYHRdAKeJxFIhGSwtxg1+JAlMlskYjHWF9bZVUMmVvdIBpLosnPtM0QZjhMWhzPxiJEQ2EKqkZW+PQYDfT7fX+YhqFzIvafnE45aNZ5/PAdnlyd8MXlIV9+6HA2sCkLXsf9faZyqC6Q920Tp6FRU/Noun5riuM4DIZDDNOkbtUxxPGmbfDV41Oun0958ew+Lz494vKkg1G3sHZtSmaVXnWbv399wD8vz/lk2mTHapISQnxsdOFor9OlJgm9/gGHxxMa7S6qXsNu7ZMtVmh3+4wElcnkLcZHE9p1nUcnNqNWgXQqLpejcHv1vBl6N8MDd2ZmxofbQ8m2LUrFoj9oQ6+giXkeuB5v3W6H/V4f1axTUg12qlXa7TYtcflfAEAAlcLrVHMAAAAASUVORK5CYII=",aspectRatio:1.464604090194022,src:"/static/66a774100dce03392775b1fbb0477591/59139/work01.png",srcSet:"/static/66a774100dce03392775b1fbb0477591/d3809/work01.png 150w,\n/static/66a774100dce03392775b1fbb0477591/fdbb0/work01.png 300w,\n/static/66a774100dce03392775b1fbb0477591/59139/work01.png 600w,\n/static/66a774100dce03392775b1fbb0477591/cb30f/work01.png 900w,\n/static/66a774100dce03392775b1fbb0477591/ba299/work01.png 1200w,\n/static/66a774100dce03392775b1fbb0477591/3e65a/work01.png 1800w,\n/static/66a774100dce03392775b1fbb0477591/d1720/work01.png 5586w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"work02.png",name:"work02",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC/klEQVQozzWS+09bBRTH71+jP6k/GAOyGMcSg3GS7BeWJboflv2gbsnMtqhomFHZhgQYMkKFYoHCKHtmRZBBae2KsD5uW+5tbx/ru729ZX3QR0h02y+fXTGe5JPzPSfnJOecHGFKTjOrhDCF40xHqswnmph15uKNQ72YPjj0t/P/MK2UGfNlWUgdYIrWmJT2GA+oTIX2dMqHCGI4gFf241d2KZVLvHzxgv+t2axjdzooV8qk4mH6vvmKrg86MZvnqFYrBPwe3KKHVCZJMpUgnsog+JQgmwGZ7UgSf0ghrSUoqhksJiOTI9dZmv2VUknFbr3Lzb7vOPZuOydOdJMvFnC4nOyIPpKZNJF4jPDTJMLUjJEvL/dye8WJyy3y8JaBb784S2f7O3QdeZtTx4+xG3Dzt5bDPW/i+9MnMY7fpHbwkmAoTjyRQCuVyBcK/03Y8cZrjF7qIbG7gir9hXu4l1Mff0h7Wwdd77VhvnKGhPSERjxC7uEcbtMosWiKXLWFpFaJlPZ5+qyBWq2TzRcQPjn+PlZDPznJx97gEOlLffR0tPHTyaOMf95NYX2EVDpHLRQjbf4Fz/QErsdb5Mv7yGqNiFYlX21QbzbJqkWEG2M3uHD5AtGlUbKG81SGT6NMXKS4MoK61Et8w4QnnCWvJNE8fnJ+mXWbgx23H0WJkstk0TSNvGuVgG0ZwTjwKf0/nmXm605+H+phdfAjtOAqGb8N5d41RK8PmztGPltEi6kUEyr31xzMWR6w/MiOZzeKVwrzx28TrN1ZQBj77E3OdL/O1Lm3uHfxCEHDOSpqhXAsTUJ/JVkKsvGnh/K/a0lR9sQtNlfmWbNMcGdmEqtlhvWlaWyLBuTlIYS78z8wbrzK6sIVXNafcW0/Qiw9xxlV2RQ3MNtdWL0RXJka3oDIE6eFLYd+hp377Gw/YNt5i8ebZhz2RbZsswjXpCbXpQb9UovhUFOnwaBc09lnUKoxIO0zHK4f6qtSnYFQiwG5pdfrfXJTj3Wv50aUJqNKi1fuhbW4wbnp4gAAAABJRU5ErkJggg==",aspectRatio:1.8274111675126903,src:"/static/41b34c92df9526597e2e934ab5727353/59139/work02.png",srcSet:"/static/41b34c92df9526597e2e934ab5727353/d3809/work02.png 150w,\n/static/41b34c92df9526597e2e934ab5727353/fdbb0/work02.png 300w,\n/static/41b34c92df9526597e2e934ab5727353/59139/work02.png 600w,\n/static/41b34c92df9526597e2e934ab5727353/cb30f/work02.png 900w,\n/static/41b34c92df9526597e2e934ab5727353/ba299/work02.png 1200w,\n/static/41b34c92df9526597e2e934ab5727353/3e65a/work02.png 1800w,\n/static/41b34c92df9526597e2e934ab5727353/7347c/work02.png 2880w",sizes:"(max-width: 600px) 100vw, 600px"}}}}]}}}},152:function(A,e,a){"use strict";var t=a(153),n=a(0),c=a.n(n),r=a(4),i=a.n(r),s=a(160),o=a.n(s);function d(A){var e=A.description,a=A.lang,n=A.meta,r=A.title,i=t.data.site,s=e||i.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:s}].concat(n)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},e.a=d},153:function(A){A.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Ato ha mitame dake",author:"Hayato OKUMA"}}}}},154:function(A,e,a){"use strict";var t=a(149),n=a(0),c=a.n(n),r=a(4),i=a.n(r),s=a(146),o=a(148),d=a(157),l=a.n(d),f=function(A){A.siteTitle;return c.a.createElement("header",null,c.a.createElement("div",{className:l.a.header},c.a.createElement("div",{className:l.a.header__text},c.a.createElement("h1",{className:l.a.header__text__message},"Hayato",c.a.createElement("br",null),"OKUMA"),c.a.createElement("p",{className:l.a.header__text__name},"Always climb, Even slowly.")),c.a.createElement("div",{className:l.a.header__image},c.a.createElement("div",{className:l.a.header__image__main},c.a.createElement(o.a,{filename:"kuma01.jpg"})),c.a.createElement("div",{className:l.a.header__image__under}," "))))};f.propTypes={siteTitle:i.a.string},f.defaultProps={siteTitle:""};var p=f,b=(a(158),a(155),a(7)),E=a.n(b),g=a(159),m=a.n(g),u=[{icon:"fab fa-facebook-square",link:"https://www.facebook.com/ohayato9",text:"ohayato9"},{icon:"fab fa-facebook-square",link:"https://github.com/8810KMKM",text:"KMKM8810"},{icon:"fas fa-envelope-square",link:"mailto:p00h_33@outlook.jp",text:"p00h_33@outlook.jp"}],w=function(A){function e(){return A.apply(this,arguments)||this}return E()(e,A),e.prototype.render=function(){return c.a.createElement("footer",{className:m.a.footer},c.a.createElement("div",{className:m.a.footer__info},c.a.createElement("p",{className:m.a.footer__info__name},"大隈 隼"),c.a.createElement("p",{className:m.a.footer__info__belongs},"学校 : 九州工業大学 情報工学部 4年",c.a.createElement("br",null),"団体 :",c.a.createElement("a",{href:"https://kyutech-stairs.github.io/",target:"_blank"}," stairs"),c.a.createElement("a",{href:"https://www.planningdev.com/",target:"_blank"},"P&D"))),c.a.createElement("div",{className:m.a.footer__account},c.a.createElement("ul",{className:m.a.footer__account__list},u.map(function(A){return c.a.createElement("li",null,c.a.createElement("a",{href:A.link,target:"_blank"},c.a.createElement("i",{className:A.icon}),A.text))}))))},e}(c.a.Component),h=function(A){var e=A.children;return c.a.createElement(s.b,{query:"755544856",render:function(A){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{siteTitle:A.site.siteMetadata.title}),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},c.a.createElement("main",null,e)),c.a.createElement(w,null))},data:t})};h.propTypes={children:i.a.node.isRequired};e.a=h}}]);
//# sourceMappingURL=component---src-pages-page-2-js-adf5c426c4f8b2fa1683.js.map