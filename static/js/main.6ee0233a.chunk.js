(this["webpackJsonpface-identifier"]=this["webpackJsonpface-identifier"]||[]).push([[0],{219:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(61),r=a.n(i),o=(a(68),a(10)),l=a(11),c=a(13),m=a(12),u=function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},style:{color:"white"},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},style:{color:"white"},className:"f3 link dim black underline pa3 pointer"},"Sign in"),s.a.createElement("p",{onClick:function(){return t("register")},style:{color:"white"},className:"f3 link dim black underline pa3 pointer"},"Register"))},h=(a(69),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3 white"},"Enter an image url and the ai will detect faces."),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form center pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),s.a.createElement("button",{className:"detect-btn grow f4 link ph3 pv2 dib white bg-blue w-30",onClick:a},"Detect"))))}),p=(a(70),function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputimage",src:t,alt:"",width:"500px",height:"auto"}),s.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),d=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"white f3"},s.a.createElement("p",null,"Hello ",t,". ",s.a.createElement("br",null),"Your current entries count is ",s.a.createElement("span",null,a))))},g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 mt0"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),a}(s.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onSubmitRegister=function(e){e.preventDefault(),fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 mt0"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(s.a.Component),f=a(62),w=a.n(f),E=(a(219),{particles:{number:{value:50},size:{value:3}}}),v={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://localhost:3000/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({initialState:v}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=v,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,i=e.box;return s.a.createElement("div",{className:"App"},s.a.createElement(w.a,{className:"particle",params:E}),s.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:t}),"signin"===n?s.a.createElement(g,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):"register"===n?s.a.createElement(b,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement("div",null,s.a.createElement(d,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(h,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),s.a.createElement(p,{box:i,imageUrl:a})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(220);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(221)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.6ee0233a.chunk.js.map