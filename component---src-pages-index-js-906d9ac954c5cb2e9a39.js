(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var A=a(0),n=a.n(A),r=(a(146),a(154)),c=a(148),o=a(152),i=(a(168),a(7)),s=a.n(i),l=(a(169),a(170)),d=a.n(l),m=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return n.a.createElement("h2",{className:d.a.Headline},this.props.name)},t}(n.a.Component),p=a(171),f=a.n(p),u=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:f.a.Profile},n.a.createElement(m,{name:"Profile"}),n.a.createElement("p",{className:f.a.Profile__text},"大隈隼 (おおくまはやと). 1997年生まれで福岡県宗像市出身. 2018年に北九州高専を卒業し, 九州工業大学情報工学部 知能情報工学科(飯塚市)へ編入学しました. 現在は学部4年で坂本研究室に所属しており, 圧縮アルゴリズムに関する研究に取り組んでいます."),n.a.createElement("p",{className:f.a.Profile__text},"また, アプリケーションやWebサービスの開発などを行うIT学生団体 P&D に所属し, 日々技術の習得や団体としての活動にも参加しています. そうした実践的な経験を活かして, 2020年度からは東京でWebエンジニアとして働く予定です."))},t}(n.a.Component),E=a(172),b=a.n(E),g=["Ruby on Rails","React","GatsbyJS","Illustrator (ちょっと)"],h=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:b.a.Skill},n.a.createElement(m,{name:"Skill"}),n.a.createElement("ul",{className:b.a.Skill__text},g.map(function(e){return n.a.createElement("li",null,e)})))},t}(n.a.Component),y=a(173),w=a.n(y),x=(a(155),a(174)),k=a.n(x),N=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return n.a.createElement("a",{href:this.props.data.link,target:"_blank",className:k.a.WorkItem},n.a.createElement("div",{className:k.a.WorkItem__image},n.a.createElement(c.a,{filename:this.props.data.image})),n.a.createElement("h2",{className:k.a.WorkItem__title},this.props.data.title),n.a.createElement("p",{className:k.a.WorkItem__text},this.props.data.text))},t}(n.a.Component),Q=[{image:"work01.png",title:"魁!! 漢飯",text:"「美味しいご飯は食べたいけど、作るのは面倒」という方のため、簡単に作ることができる漢の料理 = 漢飯のレシピを共有するアプリ。もらった天晴 (いいね) の数と投稿数に応じて、自分の二つ名となる称号を獲得することができます。3人チームによるRuby on Railsで開発し、参加した「九州アプリチャレンジキャラバン2018」では、最優秀賞及び協賛企業であるサイバーエージェント賞を受賞しました!! 現在は正式リリースに向け準備中ですので、乞うご期待。",link:"https://challecara.hatenablog.com/entry/2018/12/12/005721"},{image:"work02.png",title:"株式会社Lien 求人サイト",text:"福岡県の飯塚市・嘉麻市にて児童発達支援や放課後等デイサービスを行う株式会社Lienの求人情報サイトです。友人と2人で作成し、デザインの提案からドメイン取得までを一貫して担当しました。",link:"https://www.recruit.kk-lien.jp/"}],j=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:w.a.Work},n.a.createElement(m,{name:"Work"}),n.a.createElement("div",{className:w.a.Work__items},Q.map(function(e){return n.a.createElement(N,{data:e})})))},t}(n.a.Component),v=a(175),B=a.n(v),R=[{category:"Food",object:"チキン南蛮, ガトーショコラ"},{category:"Drink",object:"ブラックコーヒー"},{category:"Music",object:"サカナクション"},{category:"Actress",object:"中条あやみ"},{category:"Color",object:"チャコールグレー"},{category:"Fashion brand",object:"MONKEY TIME, Jieda, NIKE"}],M=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:B.a.Favorite},n.a.createElement(m,{name:"Favorite"}),n.a.createElement("table",{className:B.a.Favorite__item,bor:!0},R.map(function(e){return n.a.createElement("tr",null,n.a.createElement("td",{className:B.a.Favorite__item__category},e.category),n.a.createElement("td",{className:B.a.Favorite__item__object},e.object))})))},t}(n.a.Component);t.default=function(){return n.a.createElement(r.a,null,n.a.createElement("link",{href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css",rel:"stylesheet"}),n.a.createElement(o.a,{title:"Hayato OKUMA"}),n.a.createElement(u,null),n.a.createElement(h,null),n.a.createElement(j,null),n.a.createElement(M,null))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var A=a(0),n=a.n(A),r=a(4),c=a.n(r),o=a(33),i=a.n(o);a.d(t,"a",function(){return i.a});a(147);var s=n.a.createContext({}),l=function(e){return n.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,t,a){var A;e.exports=(A=a(150))&&A.default||A},148:function(e,t,a){"use strict";a(74),a(75),a(76);var A=a(151),n=a(0),r=a.n(n),c=a(146),o=a(156),i=a.n(o);t.a=function(e){return r.a.createElement(c.b,{query:"1345654842",render:function(t){var a=t.images.edges.find(function(t){return t.node.relativePath.includes(e.filename)});if(!a)return null;var A=a.node.childImageSharp.sizes;return r.a.createElement(i.a,{alt:e.alt,sizes:A})},data:A})}},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var A=a(0),n=a.n(A),r=a(4),c=a.n(r),o=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},151:function(e){e.exports={data:{images:{edges:[{node:{relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/hayato818/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png",srcSet:"/hayato818/static/4a9773549091c227cd2eb82ccd9c5e3a/d3809/gatsby-icon.png 150w,\n/hayato818/static/4a9773549091c227cd2eb82ccd9c5e3a/fdbb0/gatsby-icon.png 300w,\n/hayato818/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{relativePath:"kuma01.jpg",name:"kuma01",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAG3Sko0TWZrCKMY4E2//8QAGxAAAgMAAwAAAAAAAAAAAAAAAAECERIDEyH/2gAIAQEAAQUCyczkngbSLs7WRLG/f//EABgRAAIDAAAAAAAAAAAAAAAAAAACEBEx/9oACAEDAQE/AcKGj//EABgRAQADAQAAAAAAAAAAAAAAAAABAjER/9oACAECAQE/AddUTr//xAAaEAABBQEAAAAAAAAAAAAAAAAAARAREjEg/9oACAEBAAY/AtEpxhL/AP/EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQWGh/9oACAEBAAE/IdNKhW9/ZR2l9zNq5i1asCAbezOllrsVaexrz//aAAwDAQACAAMAAAAQG/AC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERIUEx/9oACAEDAQE/EI0KdmBcP//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQIBAT8QVyxy4ZZsf//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExQWFx/9oACAEBAAE/EB7P4HHe0UCNXmMaJh679xJJgqLluyOt8yvDOnue/wBaq5INfGHC6GZ//9k=",aspectRatio:1,src:"/hayato818/static/8c062392f9892e0f011bdc8b9cdf6681/775d9/kuma01.jpg",srcSet:"/hayato818/static/8c062392f9892e0f011bdc8b9cdf6681/cb3d3/kuma01.jpg 150w,\n/hayato818/static/8c062392f9892e0f011bdc8b9cdf6681/c83a6/kuma01.jpg 300w,\n/hayato818/static/8c062392f9892e0f011bdc8b9cdf6681/775d9/kuma01.jpg 600w,\n/hayato818/static/8c062392f9892e0f011bdc8b9cdf6681/aab0f/kuma01.jpg 850w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"top01.JPG",name:"top01",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAABf3HlJ2iA/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAIRARIT/9oACAEBAAEFAsbS0iHpFxjs/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEREv/aAAgBAwEBPwGmYf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAaEAABBQEAAAAAAAAAAAAAAAAAAQIQEiEy/9oACAEBAAY/AjUOSrZ//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERMRAhUXH/2gAIAQEAAT8hd0mRoMmFz9fcaH//2gAMAwEAAgADAAAAEBQv/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QQy//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Qlaf/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFRYXHh/9oACAEBAAE/EHLC9XdwxEuRIuty9zHSGxsfiJbavmUG2f/Z",aspectRatio:1.3333333333333333,src:"/hayato818/static/704675d5862884b2dda89e8f5f8834d0/775d9/top01.jpg",srcSet:"/hayato818/static/704675d5862884b2dda89e8f5f8834d0/cb3d3/top01.jpg 150w,\n/hayato818/static/704675d5862884b2dda89e8f5f8834d0/c83a6/top01.jpg 300w,\n/hayato818/static/704675d5862884b2dda89e8f5f8834d0/775d9/top01.jpg 600w,\n/hayato818/static/704675d5862884b2dda89e8f5f8834d0/2b1a3/top01.jpg 900w,\n/hayato818/static/704675d5862884b2dda89e8f5f8834d0/81ef8/top01.jpg 1200w,\n/hayato818/static/704675d5862884b2dda89e8f5f8834d0/fb184/top01.jpg 1800w,\n/hayato818/static/704675d5862884b2dda89e8f5f8834d0/a8d59/top01.jpg 4032w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"work01.png",name:"work01",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADTUlEQVQ4y02TS2/jZBSG8zumVG16p01zvzROc7Nju0ns5tKkSRMnbUMHpZQpAjqt0Ehc5iaxQCAhAaILijQbFsBmYMGs2M6/YM+CX+CHY1dULF758+dz/J1z3ucLxONx11MqlbpTMpl0E4mE//z//n/y4sPhiP+MxWKyDrvRaNTPCWQyGSQRRVF8ZbPZO0kyEnT3rihZtra2qFQqHB8fUqvVaDYbjMcOnb22nx+QQNdTsVh0S6WSL/ngn7a5uXlXZT6fd8vlsh97fv6u++PNtfvw4gP36dPP3Jsfrt3vvv3avbq6cAMSiKdcLudXKm2wsLDAzL17vjY21olEwv6+9z2dTqPkFBxnSL/fYzA4YDp9G/k5w+GAQKFQwDR3kBkQCoV4Y3aWWdFccJHg4jKLSyuiZYLB4O3+/Dwrc3Ok5ABdN9A0DcMwKRZL/jrg9V3dqRKJxTDzObaTCdRcllGtjFZIU1QSVEoKFcOgXC7JTKVSiZ2Mx3S7e4xHDkdHh1iWhW3bBGQufrsLS0u01BwZqXJsbfHXNxZ/vJ/k59MEry7LXJ2N0JIZnu+3qCcixKNxYpEka+thVGWbTrdLs9G4bdmbz9x8ELOcJynrsRHl9aXCy0mc3+8n+OVgmQvHZDuW4MGuRk8q369kuHHe5PO9FQ6bFRqtPdqtFgFVVRFnWV1bo6lrVPIFWrrCq492+O1c4ftxip8+HvHsySNC0upGeJOlUJSemeb1eyv8ebbBxXGb3VYHRdAKeJxFIhGSwtxg1+JAlMlskYjHWF9bZVUMmVvdIBpLosnPtM0QZjhMWhzPxiJEQ2EKqkZW+PQYDfT7fX+YhqFzIvafnE45aNZ5/PAdnlyd8MXlIV9+6HA2sCkLXsf9faZyqC6Q920Tp6FRU/Noun5riuM4DIZDDNOkbtUxxPGmbfDV41Oun0958ew+Lz494vKkg1G3sHZtSmaVXnWbv399wD8vz/lk2mTHapISQnxsdOFor9OlJgm9/gGHxxMa7S6qXsNu7ZMtVmh3+4wElcnkLcZHE9p1nUcnNqNWgXQqLpejcHv1vBl6N8MDd2ZmxofbQ8m2LUrFoj9oQ6+giXkeuB5v3W6H/V4f1axTUg12qlXa7TYtcflfAEAAlcLrVHMAAAAASUVORK5CYII=",aspectRatio:1.464604090194022,src:"/hayato818/static/66a774100dce03392775b1fbb0477591/59139/work01.png",srcSet:"/hayato818/static/66a774100dce03392775b1fbb0477591/d3809/work01.png 150w,\n/hayato818/static/66a774100dce03392775b1fbb0477591/fdbb0/work01.png 300w,\n/hayato818/static/66a774100dce03392775b1fbb0477591/59139/work01.png 600w,\n/hayato818/static/66a774100dce03392775b1fbb0477591/cb30f/work01.png 900w,\n/hayato818/static/66a774100dce03392775b1fbb0477591/ba299/work01.png 1200w,\n/hayato818/static/66a774100dce03392775b1fbb0477591/3e65a/work01.png 1800w,\n/hayato818/static/66a774100dce03392775b1fbb0477591/d1720/work01.png 5586w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"work02.png",name:"work02",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC/klEQVQozzWS+09bBRTH71+jP6k/GAOyGMcSg3GS7BeWJboflv2gbsnMtqhomFHZhgQYMkKFYoHCKHtmRZBBae2KsD5uW+5tbx/ru729ZX3QR0h02y+fXTGe5JPzPSfnJOecHGFKTjOrhDCF40xHqswnmph15uKNQ72YPjj0t/P/MK2UGfNlWUgdYIrWmJT2GA+oTIX2dMqHCGI4gFf241d2KZVLvHzxgv+t2axjdzooV8qk4mH6vvmKrg86MZvnqFYrBPwe3KKHVCZJMpUgnsog+JQgmwGZ7UgSf0ghrSUoqhksJiOTI9dZmv2VUknFbr3Lzb7vOPZuOydOdJMvFnC4nOyIPpKZNJF4jPDTJMLUjJEvL/dye8WJyy3y8JaBb784S2f7O3QdeZtTx4+xG3Dzt5bDPW/i+9MnMY7fpHbwkmAoTjyRQCuVyBcK/03Y8cZrjF7qIbG7gir9hXu4l1Mff0h7Wwdd77VhvnKGhPSERjxC7uEcbtMosWiKXLWFpFaJlPZ5+qyBWq2TzRcQPjn+PlZDPznJx97gEOlLffR0tPHTyaOMf95NYX2EVDpHLRQjbf4Fz/QErsdb5Mv7yGqNiFYlX21QbzbJqkWEG2M3uHD5AtGlUbKG81SGT6NMXKS4MoK61Et8w4QnnCWvJNE8fnJ+mXWbgx23H0WJkstk0TSNvGuVgG0ZwTjwKf0/nmXm605+H+phdfAjtOAqGb8N5d41RK8PmztGPltEi6kUEyr31xzMWR6w/MiOZzeKVwrzx28TrN1ZQBj77E3OdL/O1Lm3uHfxCEHDOSpqhXAsTUJ/JVkKsvGnh/K/a0lR9sQtNlfmWbNMcGdmEqtlhvWlaWyLBuTlIYS78z8wbrzK6sIVXNafcW0/Qiw9xxlV2RQ3MNtdWL0RXJka3oDIE6eFLYd+hp377Gw/YNt5i8ebZhz2RbZsswjXpCbXpQb9UovhUFOnwaBc09lnUKoxIO0zHK4f6qtSnYFQiwG5pdfrfXJTj3Wv50aUJqNKi1fuhbW4wbnp4gAAAABJRU5ErkJggg==",aspectRatio:1.8274111675126903,src:"/hayato818/static/41b34c92df9526597e2e934ab5727353/59139/work02.png",srcSet:"/hayato818/static/41b34c92df9526597e2e934ab5727353/d3809/work02.png 150w,\n/hayato818/static/41b34c92df9526597e2e934ab5727353/fdbb0/work02.png 300w,\n/hayato818/static/41b34c92df9526597e2e934ab5727353/59139/work02.png 600w,\n/hayato818/static/41b34c92df9526597e2e934ab5727353/cb30f/work02.png 900w,\n/hayato818/static/41b34c92df9526597e2e934ab5727353/ba299/work02.png 1200w,\n/hayato818/static/41b34c92df9526597e2e934ab5727353/3e65a/work02.png 1800w,\n/hayato818/static/41b34c92df9526597e2e934ab5727353/7347c/work02.png 2880w",sizes:"(max-width: 600px) 100vw, 600px"}}}}]}}}},152:function(e,t,a){"use strict";var A=a(153),n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(160),s=a.n(i);function l(e){var t=e.description,a=e.lang,n=e.meta,c=e.title,o=A.data.site,i=t||o.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=l},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Ato ha mitame dake",author:"Hayato OKUMA"}}}}},154:function(e,t,a){"use strict";var A=a(149),n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(146),s=a(148),l=a(157),d=a.n(l),m=function(e){e.siteTitle;return r.a.createElement("header",null,r.a.createElement("div",{className:d.a.header},r.a.createElement("div",{className:d.a.header__text},r.a.createElement("h1",{className:d.a.header__text__message},"Hayato",r.a.createElement("br",null),"OKUMA"),r.a.createElement("p",{className:d.a.header__text__name},"Always climb, Even slowly.")),r.a.createElement("div",{className:d.a.header__image},r.a.createElement("div",{className:d.a.header__image__main},r.a.createElement(s.a,{filename:"kuma01.jpg"})),r.a.createElement("div",{className:d.a.header__image__under}," "))))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var p=m,f=(a(158),a(155),a(7)),u=a.n(f),E=a(159),b=a.n(E),g=[{icon:"fab fa-facebook-square",link:"https://www.facebook.com/ohayato9",text:"ohayato9"},{icon:"fab fa-facebook-square",link:"https://github.com/8810KMKM",text:"KMKM8810"},{icon:"fas fa-envelope-square",link:"mailto:p00h_33@outlook.jp",text:"p00h_33@outlook.jp"}],h=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{className:b.a.footer},r.a.createElement("div",{className:b.a.footer__info},r.a.createElement("p",{className:b.a.footer__info__name},"大隈 隼"),r.a.createElement("p",{className:b.a.footer__info__belongs},"学校 : 九州工業大学 情報工学部 4年",r.a.createElement("br",null),"団体 :",r.a.createElement("a",{href:"https://kyutech-stairs.github.io/",target:"_blank"}," stairs"),r.a.createElement("a",{href:"https://www.planningdev.com/",target:"_blank"},"P&D"))),r.a.createElement("div",{className:b.a.footer__account},r.a.createElement("ul",{className:b.a.footer__account__list},g.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.link,target:"_blank"},r.a.createElement("i",{className:e.icon}),e.text))}))))},t}(r.a.Component),y=function(e){var t=e.children;return r.a.createElement(i.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)),r.a.createElement(h,null))},data:A})};y.propTypes={children:o.a.node.isRequired};t.a=y},169:function(e,t,a){var A=a(25).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||a(18)&&A(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-906d9ac954c5cb2e9a39.js.map