(this.webpackJsonpcaptive=this.webpackJsonpcaptive||[]).push([[0],{127:function(e,t,a){a(128),e.exports=a(293)},143:function(e,t,a){},152:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=(a(143),a(294),a(123)),l=(a(92),a(46)),s=(a(93),a(91)),d=(a(148),a(10)),p=a(110),u=a(111),h=a(124),m=a(112),f=a(125),g=(a(295),a(90)),E=(a(152),g.a.Title),C=g.a.Paragraph,v=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleOk=function(){a.setState({loading:!0,incorrectCode:!1}),fetch("/checkjson",{method:"POST",body:{code:a.state.inputCode},headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"connected"===e.status?a.setState({loading:!1,connected:!0}):a.setState({loading:!1,connected:!1,incorrectCode:!0})}))},a.state={inputCode:"",connected:!1,incorrectCode:!1,loading:!1},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.connected?c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(E,{level:2},'"Ojal\xe1 esta Wi-Fi fuera fibra"'),c.a.createElement(d.a,{type:"wifi",style:{fontSize:"10em",color:"#52c41a"}}),c.a.createElement(C,{style:{fontSize:"1.5em",color:"#52c41a"}},"Est\xe1s conectado"))):c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(E,{level:2},'"Ojal\xe1 esta Wi-Fi fuera fibra"'),c.a.createElement(C,null,"Introduce el c\xf3digo que est\xe1 en la pantallita del r\xfater"),c.a.createElement(i.a.Item,{validateStatus:this.state.incorrectCode?"error":"",help:this.state.incorrectCode?"C\xf3digo incorrecto":""},c.a.createElement(s.a.Group,{compact:!0,size:"large",style:{whiteSpace:"nowrap"}},c.a.createElement(s.a,{style:{width:"6em",textAlign:"center"},placeholder:"C\xf3digo",maxLength:6,onChange:function(t){return e.setState({inputCode:t.target.value,incorrectCode:!1})},value:this.state.inputCode,onPressEnter:this.handleOk}),c.a.createElement(l.a,{size:"large",type:"primary",icon:"wifi",loading:this.state.loading,onClick:this.handleOk})))))}}]),t}(c.a.Component);o.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.a7f6886a.chunk.js.map