(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,s,a){"use strict";a.r(s);var t=a(0),i=a.n(t),n=a(2),m=a.n(n),g=a(3),o=a(4),c=a(6),r=a(5),l=a(7);var p=function(e){return i.a.createElement("nav",null,i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("span",{className:"cor-inc"},e.message),i.a.createElement("span",{id:"title"},"Piggy Bank Rock"),i.a.createElement("ul",{id:"nav-mobile",className:"right"},i.a.createElement("li",null,"Correct: ",e.correct),i.a.createElement("li",null,"Incorrect: ",e.incorrect))))};var d=function(e){return i.a.createElement("div",null,i.a.createElement("div",{target:"#prompt-id",className:"col s6 m4 l2",onClick:function(){return e.compareToyPriceToDollarValue(e.cost)}},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{src:"/PiggyBankRock"+e.image})),i.a.createElement("div",{className:"card-stacked"},i.a.createElement("div",{className:"card-content"},i.a.createElement("h5",{className:"toy-cost"},"$",e.cost))))))};var u=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"col s12 m3 l2"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"money-img",src:"/PiggyBankRock"+e.images})))))};var j=function(e){return i.a.createElement("div",{className:"toy-area"},i.a.createElement("div",{className:"row"},i.a.createElement("h5",{className:"prompt"},"Which toy cost that amount?"),e.children))};var v=function(e){return i.a.createElement("div",{className:"money-area"},i.a.createElement("div",{className:"row"},i.a.createElement("h5",{id:"prompt-id",className:"prompt"},"Money in your piggy bank."),e.children))},y=[{id:1,image:"/assets/images/chase.png",cost:13},{id:2,image:"/assets/images/mrsincredible.png",cost:14},{id:3,image:"/assets/images/hatch.png",cost:15},{id:4,image:"/assets/images/hatchInEgg.png",cost:4},{id:5,image:"/assets/images/hatchinoutegg.png",cost:5},{id:6,image:"/assets/images/dash.png",cost:6},{id:7,image:"/assets/images/jackjack.png",cost:7},{id:8,image:"/assets/images/minionStuart.png",cost:8},{id:9,image:"/assets/images/bluecar.png",cost:9},{id:10,image:"/assets/images/rocky.png",cost:10},{id:11,image:"/assets/images/skye.png",cost:11},{id:12,image:"/assets/images/vannilope.png",cost:12}],f=[{id:1,moneyimgs:["/assets/images/ten.jpg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:13},{id:2,moneyimgs:["/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:4},{id:3,moneyimgs:["/assets/images/five.jpg"],value:5},{id:4,moneyimgs:["/assets/images/five.jpg","/assets/images/one.jpeg"],value:6},{id:5,moneyimgs:["/assets/images/five.jpg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:10},{id:5,moneyimgs:["/assets/images/ten.jpg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:14},{id:6,moneyimgs:["/assets/images/five.jpg","/assets/images/five.jpg","/assets/images/five.jpg"],value:15},{id:7,moneyimgs:["/assets/images/five.jpg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:7},{id:8,moneyimgs:["/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:7},{id:9,moneyimgs:["/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:5},{id:9,moneyimgs:["/assets/images/five.jpg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:8},{id:10,moneyimgs:["/assets/images/five.jpg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:9},{id:11,moneyimgs:["/assets/images/five.jpg","/assets/images/five.jpg"],value:10},{id:12,moneyimgs:["/assets/images/five.jpg","/assets/images/five.jpg","/assets/images/one.jpeg","/assets/images/one.jpeg"],value:12},{id:13,moneyimgs:["/assets/images/five.jpg","/assets/images/five.jpg","/assets/images/one.jpeg"],value:11},{id:14,moneyimgs:["/assets/images/ten.jpg","/assets/images/one.jpeg"],value:11}],h=function(e){function s(){var e,a;Object(g.a)(this,s);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(r.a)(s)).call.apply(e,[this].concat(i)))).state={moneyInBank:[],toyDisplayOrder:[],moneyInBankVal:0,message:"",correct:0,incorrect:0},a.selectNewObject=function(){var e=Math.floor(Math.random()*(f.length-0)+0);a.setState({moneyInBank:f[e].moneyimgs,moneyInBankVal:f[e].value,toyDisplayOrder:a.shuffle(y)})},a.compareToyPriceToDollarValue=function(e){var s=a.state.correct,t=a.state.incorrect;e===a.state.moneyInBankVal?(a.setState({message:"Yay! That's correct. "}),a.selectNewObject(),s++,a.setState({correct:s}),window.scrollTo(0,0),window.setTimeout(a.updateMessage,3500)):(a.setState({message:"Whoops! Try Again."}),a.selectNewObject(),t++,a.setState({incorrect:t}),a.startGameOver(),window.scrollTo(0,0),window.setTimeout(a.updateMessage,3500))},a.updateMessage=function(){a.setState({message:""})},a.startGameOver=function(){a.state.incorrect>1&&a.setState({correct:0,incorrect:0})},a.shuffle=function(e){for(var s,a,t=e.length;0!==t;)a=Math.floor(Math.random()*t),s=e[t-=1],e[t]=e[a],e[a]=s;return e},a}return Object(l.a)(s,e),Object(o.a)(s,[{key:"componentDidMount",value:function(){this.selectNewObject()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(p,{message:this.state.message,correct:this.state.correct,incorrect:this.state.incorrect}),i.a.createElement(v,null,this.state.moneyInBank.map(function(e){return i.a.createElement(u,{images:e})})),i.a.createElement(j,null,this.state.toyDisplayOrder.map(function(s){return i.a.createElement(d,{key:s.id,image:s.image,cost:s.cost,compareToyPriceToDollarValue:e.compareToyPriceToDollarValue})})))}}]),s}(t.Component);m.a.render(i.a.createElement(h,null),document.getElementById("root"))},8:function(e,s,a){e.exports=a(14)}},[[8,2,1]]]);
//# sourceMappingURL=main.2b501878.chunk.js.map