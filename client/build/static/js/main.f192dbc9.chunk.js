(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,a){e.exports=a(177)},116:function(e,t,a){},138:function(e,t,a){},169:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(35),r=a.n(o),c=a(28),s=(a(116),a(15)),i=a(16),u=a(18),p=a(17),m=a(199),h=a(200),d=a(198),g=a(12),f=a.n(g),E=function(e,t){return console.log("auth route"),f.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},v=function(e,t){return f.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},b=function(e){console.log(e),f.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))};var y=function(e){return console.log(e.user),l.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(m.a.Brand,{href:"/"},"MyTent"),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(h.a,{className:"mr-auto"},l.a.createElement(d.a,{title:"Dropdown",id:"collasible-nav-dropdown"},l.a.createElement(d.a.Item,{href:"#action/3.1"},"Action"),l.a.createElement(d.a.Item,{href:"#action/3.2"},"Another action"),l.a.createElement(d.a.Item,{href:"#action/3.3"},"Something"),l.a.createElement(d.a.Divider,null),l.a.createElement(d.a.Item,{href:"#action/3.4"},"Separated link"))),l.a.createElement(h.a,null,e.user?l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{style:{color:"0000"}},"Welcome ",e.user.username," "),l.a.createElement(h.a.Link,{href:"/myprofile"},"Profil"),l.a.createElement(h.a.Link,{to:"/",onClick:function(){return b(e)}},"Logout")):l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a.Link,{href:"/signup"},"Sign Up"),l.a.createElement(h.a.Link,{eventKey:2,href:"/login"}," LogIn ")))))},k=(a(137),a(138),a(58)),w=function(e){var t=Object(n.useState)(""),a=Object(k.a)(t,2),o=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{className:"inputProfil",type:"text",onInput:function(e){console.log(e.target.value),r(e.target.value)},value:o}))},j=a(50),C=a(13),O=a.n(C),L=(a(89),a(95),a(52)),S=a.n(L),P=(a(93),a(169),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={place:null},e.handleLike=function(t){console.log("like",t),f.a.put("/api/places/like/".concat(t)).then((function(t){console.log(t.data),e.getData()})).catch((function(e){return e.response}))},e}return Object(i.a)(a,[{key:"getData",value:function(){var e=this;f.a.get("/api/places/details/".concat(this.props.match.params.placeId)).then((function(t){console.log(t.data),e.setState({place:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){console.log(this.state.place),console.log(this.props.match.params.placeId),this.getData()}},{key:"render",value:function(){var e=this;return this.state.place?l.a.createElement("div",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("p",null,"Back")),l.a.createElement("p",null,this.state.place.name),l.a.createElement("p",null,l.a.createElement("img",{className:"profileimg",src:this.state.place.imgPath})),l.a.createElement("p",null,this.state.place.description),l.a.createElement("p",null,"Likes: ",this.state.place.likes," "),l.a.createElement("button",{type:"like",onClick:function(){return e.handleLike(e.state.place._id)}}," Like ")):l.a.createElement("div",null,"loading...")}}]),a}(n.Component));O.a.accessToken="pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw";new S.a({accessToken:O.a.accessToken,mapboxgl:O.a});var x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={viewport:{lng:13.33,lat:52.51,zoom:8},places:[],editMap:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/places").then((function(t){console.log(t,"response"),e.setState({places:t.data})})).catch((function(e){console.log(e)}));var t=new O.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.viewport.lng,this.state.viewport.lat],zoom:this.state.viewport.zoom});t.on("move",(function(){e.setState({lng:t.getCenter().lng.toFixed(4),lat:t.getCenter().lat.toFixed(4),zoom:t.getZoom().toFixed(2)})})),t.on("click",(function(a){var n=(new O.a.Marker).setLngLat([a.lngLat.lng,a.lngLat.lat]).addTo(t);console.log("A click event has occurred at "+a.lngLat),console.log("A Pin was placed at "+a.lngLat),console.log(a.lngLat.lat),console.log(a.lngLat.lng),console.log(a.lngLat),console.log(e.props),e.props.handleMapChange(a.lngLat.lng,a.lngLat.lat),setInterval((function(){n.remove()}),2e3),setTimeout((function(){alert("Marker of location is set and saved.")}),500)})),t.addControl(new O.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),t.addControl(new S.a({accessToken:O.a.accessToken,mapboxgl:O.a})),t.on("load",(function(){e.state.places.forEach((function(a){var n=document.createElement("div");n.className="marker",n.style.backgroundImage="url(".concat(a.imgPath,")"),console.log("this is place.imgPath:",a.imgPath),n.style.width="40px",n.style.height="40px",new O.a.Marker(n).setLngLat([a.longitude,a.latitude]).setPopup((new O.a.Popup).setHTML("<p><b>".concat(a.name,'</b></p><img src="').concat(a.imgPath,'"  width="60" height="60"/> <p>').concat(a.description,"</p><p>created by ").concat(e.props.user.username,'</p><a href="/place/').concat(a._id,'">See Details</a>'))).addTo(t)}))}))}},{key:"render",value:function(){var e=this,t=this.state;t.lng,t.lat,t.zoom;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"}),l.a.createElement("div",{className:"sidebarStyle"},"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom:"," ",this.state.zoom))}}]),a}(n.Component),D=(a(172),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={title:"",description:"",photo:"",userPhoto:e.props.user.photo,userPhotoURL:"",uploadOn:!0,uploadOn2:!0,longitude:"",latitude:"",places:[],Likes:0},e.updateLikes=function(t){e.setState({likes:e.state.likes+t})},e.onDrop=function(t){e.setState({photo:e.state.photo.concat(t)})},e.addPlace=function(){var t={title:"Camping in Berlin",description:"The best camping in Berlin"};e.setState((function(e,a){e.places.concat(t)}))},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(j.a)({},n,l))},e.handleMapChange=function(t,a){console.log(t,a,"handlemapchange"),e.setState({longitude:t,latitude:a})},e.handleFileUpload=function(t){var a=new FormData;a.append("imagePath",t.target.files[0]),e.setState({uploadOn2:!0}),f.a.post("/api/places/uploadImage",a).then((function(t){console.log(t),e.setState({photo:t.data,uploadOn2:!1})})).catch((function(e){return console.log("Error while uploading the file",e)}))},e.handleFileUploadProfile=function(t){var a=new FormData;a.append("imagePath",t.target.files[0]),e.setState({uploadOn:!0}),f.a.post("/api/auth/uploadImage",a).then((function(t){console.log(t),e.setState({uploadOn:!1,userPhotoURL:t.data})})).catch((function(e){return console.log("Error while uploading the file",e)}))},e.handleSubmit=function(t){t.preventDefault(),console.log("banana");var a=e.state,n={title:a.title,description:a.description,photo:a.photo,latitude:a.latitude,longitude:a.longitude};console.log("this is the handle Submit",e.handleSubmit),f.a.post("/api/places/new",n).then((function(t){console.log(t.data),e.props.getData()})).catch((function(e){return e.response.data}))},e.handleSubmitUserProfile=function(t){t.preventDefault(),console.log(e.state.userPhotoURL),f.a.post("/api/auth/profilePicture",{photo:e.state.userPhotoURL}).then((function(t){console.log(t.data.photo),e.props.setUser(t.data),e.setState({userPhoto:t.data.photo})})).catch((function(e){return e.response.data}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.userPhoto!==this.state.userPhoto&&this.render()}},{key:"render",value:function(){return console.log(this.state),console.log(this.props,"PROPS"),l.a.createElement("div",{className:"Form"},l.a.createElement(c.b,{to:"/favorites"},l.a.createElement("p",null,"My Favorites ")),l.a.createElement("img",{className:"profileimg",src:this.state.userPhoto}),l.a.createElement("form",{encType:"multipart/form-data",onSubmit:this.handleSubmitUserProfile},l.a.createElement("h2",null,"Add a your profile picture!"),l.a.createElement("input",{type:"file",name:"photo",onChange:this.handleFileUploadProfile}),l.a.createElement("br",null),l.a.createElement("br",null),this.state.uploadOn?l.a.createElement("button",{disabled:!0,type:"submit"}," ","Add a your profile picture"," "):l.a.createElement("button",{type:"submit"}," Add a your profile picture ")),l.a.createElement("h2",null," Add a new place for Camping!"),l.a.createElement("form",{encType:"multipart/form-data",onSubmit:this.handleSubmit},this.handleSubmit.state?l.a.createElement("p",null," New place added. "):l.a.createElement("p",null," Bratan Test! "),l.a.createElement("label",{htmlFor:"title"}," Title: "),l.a.createElement("input",{type:"text",name:"title",id:"title",value:this.state.title,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"description"}," Description: "),l.a.createElement("input",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange}),l.a.createElement("input",{type:"file",name:"photo",onChange:this.handleFileUpload}),this.state.uploadOn2?l.a.createElement("p",null):l.a.createElement("p",null," Image uploaded! "),l.a.createElement("br",null),l.a.createElement(x,{className:"mapBoxHome",handleMapChange:this.handleMapChange,user:this.props.user}),l.a.createElement("br",null),this.state.uploadOn2?l.a.createElement("button",{disabled:!0,type:"submit"}," ","Add a Place"," "):l.a.createElement("button",{type:"submit"}," Add a Place ")),l.a.createElement("h1",null," All my created places "),"List with all the places I created.")}}]),a}(n.Component)),N=a(202),U=a(99),F=(a(173),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleDelete=function(t){console.log("delete",t),f.a.post("/api/places/delete/".concat(t)).then((function(t){console.log(t.data),e.props.getData()})).catch((function(e){return e.response.data}))},e.handleLike=function(t){console.log("like",t),f.a.put("/api/places/like/".concat(t)).then((function(t){console.log(t.data),e.props.getData()})).catch((function(e){return e.response.data}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.places!==this.props.places&&this.render()}},{key:"render",value:function(){var e=this;return console.log(this.props.places,"PLACES"),l.a.createElement("div",{className:"cardContainer"},this.props.places.map((function(t){return l.a.createElement("div",{className:"cardContainer"},l.a.createElement(N.a,{key:t._id,className:"card"},l.a.createElement(N.a.Img,{variant:"top",src:t.imgPath,className:"myPlaces"}),l.a.createElement(N.a.Body,null,l.a.createElement(N.a.Title,null,l.a.createElement(c.b,{to:"/place/".concat(t._id)},l.a.createElement("p",null,t.name))),l.a.createElement(N.a.Text,null,l.a.createElement("p",null," Place created by ",t.userId.username)),l.a.createElement(N.a.Text,null,l.a.createElement("p",null," ",t.description," ")),l.a.createElement("p",null,"Likes: ",t.likes," "),l.a.createElement(U.a,{className:"cardButton",onClick:function(){return e.handleLike(t._id)},type:"like",variant:"primary"},"Like"),l.a.createElement(U.a,{className:"cardButton",type:"delete",onClick:function(){return e.handleDelete(t._id)},variant:"primary"}," Delete Place "))))})))}}]),a}(n.Component)),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={places:[]},e.getData=function(){console.log("getData"),f.a.get("/api/places/userPlaces").then((function(t){e.setState({places:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log("render"),l.a.createElement("div",null,l.a.createElement("h1",null," My Profile"),l.a.createElement(D,{user:this.props.user,setUser:this.props.setUser,getData:this.getData}),l.a.createElement(F,{places:this.state.places,getData:this.getData}))}}]),a}(n.Component),T=a(19);a(174);O.a.accessToken="pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw";new S.a({accessToken:O.a.accessToken,mapboxgl:O.a});var I=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={viewport:{lng:13.33,lat:52.51,zoom:8},places:[],editMap:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/places").then((function(t){console.log(t,"response"),e.setState({places:t.data})})).catch((function(e){console.log(e)}));var t=new O.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.viewport.lng,this.state.viewport.lat],zoom:this.state.viewport.zoom});t.on("move",(function(){e.setState({lng:t.getCenter().lng.toFixed(4),lat:t.getCenter().lat.toFixed(4),zoom:t.getZoom().toFixed(2)})})),t.addControl(new O.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),t.addControl(new S.a({accessToken:O.a.accessToken,mapboxgl:O.a})),t.on("load",(function(){e.state.places.forEach((function(a){var n=document.createElement("div");n.className="marker",n.style.backgroundImage="url(".concat(a.imgPath,")"),console.log("this is place.imgPath:",a.imgPath),n.style.width="40px",n.style.height="40px",new O.a.Marker(n).setLngLat([a.longitude,a.latitude]).setPopup((new O.a.Popup).setHTML("<p><b>".concat(a.name,'</b></p><img src="').concat(a.imgPath,'"  width="60" height="60"/> <p>').concat(a.description,"</p><p>created by ").concat(e.props.user.username,'</p><a href="/place/').concat(a._id,'">See Details</a>'))).addTo(t),console.log(e.props.user.username)}))}))}},{key:"render",value:function(){var e=this,t=this.state;t.lng,t.lat,t.zoom;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"}),l.a.createElement("div",{className:"sidebarStyle"},"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom:"," ",this.state.zoom))}}]),a}(n.Component);a(175);function A(){return l.a.createElement("div",{className:"parentContainerHome"},l.a.createElement(w,null),l.a.createElement(x,{className:"mapBoxHome"}))}var z=a(195),J=a(201),B=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(j.a)({},n,l))},e.handleSubmit=function(t){t.preventDefault(),console.log("here");var a=e.state,n=a.username,l=a.password;E(n,l).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/myprofile"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Signup"),l.a.createElement(z.a,{onSubmit:this.handleSubmit},l.a.createElement(z.a.Group,null,l.a.createElement(z.a.Label,{htmlFor:"username"},"Username: "),l.a.createElement(z.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),l.a.createElement(z.a.Group,null,l.a.createElement(z.a.Label,{htmlFor:"password"},"Password: "),l.a.createElement(z.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&l.a.createElement(J.a,{variant:"danger"},this.state.message),l.a.createElement(U.a,{type:"submit"},"Signup")))}}]),a}(n.Component),W=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(j.a)({},n,l))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,l=a.password;v(n,l).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(console.log(t),e.props.setUser(t),e.props.history.push("/myprofile"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Login"),l.a.createElement(z.a,{onSubmit:this.handleSubmit},l.a.createElement(z.a.Group,null,l.a.createElement(z.a.Label,{htmlFor:"username"},"Username: "),l.a.createElement(z.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),l.a.createElement(z.a.Group,null,l.a.createElement(z.a.Label,{htmlFor:"password"},"Password: "),l.a.createElement(z.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&l.a.createElement(J.a,{variant:"danger"},this.state.message),l.a.createElement(U.a,{type:"submit"},"Login")))}}]),a}(n.Component),H=a(43),Z=(a(176),a(193));a(197),a(196),Object(Z.a)({root:{width:200,display:"flex",alignItems:"center"}});var G=function(e){return l.a.createElement(H.a,null,l.a.createElement(H.a.Item,null,l.a.createElement(H.a.Caption,null,l.a.createElement("p",null," Hello "))),l.a.createElement(H.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"/BER2.jpg",alt:"Third slide"}),l.a.createElement(H.a.Caption,null,l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(H.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"/BER3.jpg",alt:"Third slide"}),l.a.createElement(H.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))};var _=function(){return l.a.createElement(x,null)},R=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleDelete=function(t){console.log("delete",t),f.a.post("/api/places/delete/".concat(t)).then((function(t){console.log(t.data),e.props.getData()})).catch((function(e){return e.response.data}))},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.props.places),this.props.places?l.a.createElement("div",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("p",null,"Home")),this.props.places.map((function(e){return l.a.createElement("div",{key:e._id},l.a.createElement(c.b,{to:"/place/".concat(e._id)},l.a.createElement("p",null,e.name)),l.a.createElement("p",null,e.description),l.a.createElement("img",{className:"myPlaces",src:e.imgPath}))}))):l.a.createElement("div",null," empty ")}}]),a}(n.Component),V=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={favorites:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/places/favorites").then((function(t){console.log(t,"favoritesPlaces"),e.setState({favorites:t.data.favorites})}))}},{key:"render",value:function(){return console.log(this.state.favorites,"favorites"),l.a.createElement("div",null,l.a.createElement("h1",null," My Favorites "),l.a.createElement(R,{places:this.state.favorites,getData:this.getData}))}}]),a}(n.Component),X=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={user:e.props.user,editMap:!1},e.setUser=function(t){e.setState({user:t})},e.handleMapChange=function(t,a){console.log(t,a,"handlemapchange"),e.setState({longitude:t,latitude:a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.user),l.a.createElement("div",{className:"homeApp"},l.a.createElement("nav",null,l.a.createElement(y,{user:this.state.user,setUser:this.setUser})),l.a.createElement(T.a,{exact:!0,path:"/favorites",render:function(t){return l.a.createElement(V,Object.assign({},t,{setUser:e.setUser,user:e.state.user}))}}),l.a.createElement(T.a,{exact:!0,path:"/myprofile",render:function(t){return l.a.createElement(M,Object.assign({},t,{setUser:e.setUser,user:e.state.user}))}}),l.a.createElement(T.a,{exact:!0,path:"/place/:placeId",render:function(t){return l.a.createElement(P,Object.assign({},t,{user:e.state.user}))}}),l.a.createElement(T.a,{exact:!0,path:"/edit",render:function(e){return l.a.createElement("div",null,l.a.createElement(_,null))}}),l.a.createElement(T.a,{exact:!0,path:"/signup",render:function(t){return l.a.createElement(B,Object.assign({setUser:e.setUser},t))}}),l.a.createElement(T.a,{exact:!0,path:"/login",render:function(t){return l.a.createElement(W,Object.assign({setUser:e.setUser},t))}}),l.a.createElement(T.a,{exact:!0,path:"/",render:function(t){return l.a.createElement("div",{className:"searchBar"},l.a.createElement("div",{className:"searchBar-inner"},l.a.createElement(w,null),l.a.createElement(G,{className:"sliderComponent slide"})),l.a.createElement(I,{className:"mapBoxHome",handleMapChange:e.handleMapChange,user:e.state.user}))}}),l.a.createElement(T.a,{exact:!0,path:"/home",render:function(e){return l.a.createElement(A,null)}}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));O.a.accessToken="pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw",f.a.get("/api/auth/loggedin").then((function(e){var t=e.data;r.a.render(l.a.createElement(c.a,null,l.a.createElement(X,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.f192dbc9.chunk.js.map