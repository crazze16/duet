(this.webpackJsonpduet=this.webpackJsonpduet||[]).push([[0],{62:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,s,u,j,b,d,l,h,p,O,x,f,g,v,m,y,M,w=n(2),A=n.n(w),k=n(36),S=n.n(k),P=(n(62),n(14)),C=n(15),D=n(17),E=n(16),T=n(26),_=n(27),I=n(19),R=n(9),F=n(10),N=F.a.header(a||(a=Object(R.a)(["\n\nwidth:100%;\n\n"]))),z=F.a.nav(c||(c=Object(R.a)(["\nbackground-color:#333;\nfont-family: 'Josefin Sans', sans-serif; \nfont-weight: 600;\nfont-size:22px;\nheight:45px;\nmax-width:800px;\nmargin: 0 auto;\ndisplay:flex;\njustify-content: space-around;\nalign-items: center;\nborder-bottom-right-radius: 50px;\nborder-bottom-left-radius: 50px;\n\n\n}\n\n\n"]))),U=F.a.div(r||(r=Object(R.a)(["\nfont-family: 'Vidaloka', serif;\nfont-size:24px;\nmargin:0 10px;\n"]))),V=F.a.div(i||(i=Object(R.a)(["\nwidth:100%;\ndisplay:flex;\njustify-content: space-between;\ncolor:#fff;\nbackground-color:rgba(0,0,0,0.9);\n\n\n"]))),H=F.a.div(o||(o=Object(R.a)(["\nmargin:0 10px;\n\n"]))),L=F.a.span(s||(s=Object(R.a)(["\ncolor:#fff\n"]))),G=n(3),W=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(G.jsxs)(N,{children:[Object(G.jsxs)(V,{children:[Object(G.jsx)(U,{children:"D.V.A"}),Object(G.jsx)(H,{children:Object(G.jsx)(I.b,{to:"/Auth",children:Object(G.jsx)(T.a,{icon:_.c,color:"#fff"})})})]}),Object(G.jsxs)(z,{children:[Object(G.jsxs)(I.b,{to:"/home",children:[Object(G.jsx)(T.a,{icon:_.b,color:"white"})," ",Object(G.jsx)(L,{children:"Home"})]}),Object(G.jsx)(I.b,{to:"/Vapi",children:Object(G.jsx)(L,{children:"VovaN Api"})}),Object(G.jsx)(I.b,{to:"/Dapi",children:Object(G.jsx)(L,{children:"Dima Api"})}),Object(G.jsx)(I.b,{to:"/Aapi",children:Object(G.jsx)(L,{children:"Alex Api"})}),Object(G.jsxs)(I.b,{to:"/About",children:[Object(G.jsx)(T.a,{icon:_.a,color:"white"}),Object(G.jsx)(L,{children:" About"})]})]})]})}}]),n}(A.a.Component),B=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(G.jsx)("div",{children:"SHOCK CONTENT!!!!"})}}]),n}(A.a.Component),J=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(T.a,{icon:_.d,color:"#fff",size:"9x",pulse:!0,style:{dislay:"block",margin:"50px 45%"}}),Object(G.jsx)("p",{style:{fontSize:"55px",textAlign:"center"},children:"COMING SOON!"})]})}}]),n}(A.a.Component),K=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(T.a,{icon:_.d,color:"#000",size:"9x",pulse:!0,style:{dislay:"block",margin:"50px 45%"}}),Object(G.jsx)("p",{style:{fontSize:"55px",textAlign:"center"},children:"COMING SOON!"})]})}}]),n}(A.a.Component),q=n(24),Q=n(13),X=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return this.props.authFlag?Object(G.jsxs)("div",{children:[Object(G.jsx)(T.a,{icon:_.d,color:"#AF5500",size:"9x",pulse:!0,style:{dislay:"block",margin:"50px 45%"}}),Object(G.jsx)("p",{style:{fontSize:"55px",textAlign:"center"},children:"COMING SOON!"})]}):Object(G.jsx)(Q.a,{to:"/Auth"})}}]),n}(A.a.Component),Y=Object(q.b)((function(e){return{authFlag:e.AuthPageReducer.isAuth}}),{})(X),Z=n(12),$=function(e){return Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{type:"text",onChange:function(t){return n=t.currentTarget.value,void e.searchMovie(n);var n}}),Object(G.jsx)("button",{onClick:function(){return e.buttonSearch()},children:"search"})]})},ee="ON_SEARCH_MOVIE",te="SET_MOVIES",ne="SET_TOTAL_PAGES",ae="SET_CURRENT_PAGE",ce="SET_CURRENT_MOVIE",re={searchedMovie:null,resultMoviesData:[],selectedMovieData:[],currentPage:1,totalPages:null},ie=function(e){return{type:te,movieData:e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(Z.a)(Object(Z.a)({},e),{},{searchedMovie:t.searchedText});case te:return Object(Z.a)(Object(Z.a)({},e),{},{resultMoviesData:t.movieData});case ce:return Object(Z.a)(Object(Z.a)({},e),{},{selectedMovieData:t.selectedMovie});case ne:return Object(Z.a)(Object(Z.a)({},e),{},{totalPages:t.totalPages});case ae:return Object(Z.a)(Object(Z.a)({},e),{},{currentPage:t.page});default:return Object(Z.a)({},e)}},se=n(56),ue="5b9377492f02937b4e7cf2b6508ab19f",je=se.create({baseURL:"https://api.themoviedb.org/3/"}),be=function(e,t){return je.get("search/movie?api_key=".concat(ue,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"))},de=function(e){return je.get("movie/".concat(e,"?api_key=").concat(ue,"&language=en-US"))},le=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(P.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).buttonSearch=function(){be(e.props.searchedMovie,e.props.currentPage).then((function(t){e.props.setMovieData(t.data.results),e.props.setTotalPages(t.data.total_pages)}))},e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(G.jsx)("div",{children:Object(G.jsx)($,Object(Z.a)(Object(Z.a)({},this.props),{},{buttonSearch:this.buttonSearch}))})}}]),n}(A.a.Component),he=Object(q.b)((function(e){return{searchedMovie:e.MoviePageReducer.searchedMovie,currentPage:e.MoviePageReducer.currentPage}}),{searchMovie:function(e){return{type:ee,searchedText:e}},setMovieData:ie,setTotalPages:function(e){return{type:ne,totalPages:e}}})(le),pe=F.a.div(u||(u=Object(R.a)(["\n    height: 480px;\n    flex: 1 20%;\n    border: 1px solid black;\n    margin: 10px 10px 60px 10px;\n    justify-content: flex-start;\n    position: relative;\n}\n"]))),Oe=F.a.div(j||(j=Object(R.a)(["\n    position: absolute;\n   \n"]))),xe=function(e){var t="https://image.tmdb.org/t/p/w300/".concat(e.poster);return Object(G.jsx)(I.b,{to:e.url+"/movie/"+e.id,children:Object(G.jsxs)(pe,{poster:e.poster,children:[Object(G.jsx)("img",{src:e.poster?t:"https://prikolnye-kartinki.ru/img/picture/Sep/23/9d857169c84422fdaa28df62667a1467/8.jpg",alt:"",height:"100%",width:"100%"}),Object(G.jsx)(Oe,{children:e.title})]})})},fe=F.a.div(b||(b=Object(R.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]))),ge=F.a.span(d||(d=Object(R.a)(["\n    font-weight: bold\n"]))),ve=Object(q.b)((function(e){return{resultMoviesData:e.MoviePageReducer.resultMoviesData,totalPages:e.MoviePageReducer.totalPages,searchedMovie:e.MoviePageReducer.searchedMovie,currentPage:e.MoviePageReducer.currentTarget}}),{setCurrentPage:function(e){return{type:ae,page:e}},setMovieData:ie})((function(e){for(var t=e.resultMoviesData.map((function(t){return Object(G.jsx)(xe,{poster:t.poster_path,id:t.id,url:e.url,title:t.title})})),n=[],a=e.totalPages,c=1;c<=a;c++)n.push(c);return Object(G.jsxs)(G.Fragment,{children:[n.map((function(t){return Object(G.jsx)(ge,{onClick:function(){return function(t){e.setCurrentPage(t),be(e.searchedMovie,t).then((function(t){e.setMovieData(t.data.results)}))}(t)},children:t})})),Object(G.jsx)(fe,{children:t})]})})),me=F.a.div(l||(l=Object(R.a)(["\n    max-width: ","px;\n    width: 100%;\n    margin: 0 auto;\n    \n    \n"])),1400),ye=Object(F.a)(me)(h||(h=Object(R.a)(["\n    background: linear-gradient(to right, #47474c, #313136);\n    height: 1000px;\n    box-shadow: 1px 1px 50px 20px #000000;\n    border-radius: 15px 15px 0 0;\n\n"]))),Me=F.a.h1(p||(p=Object(R.a)(["\n    color: #fff;\n"]))),we=F.a.div(O||(O=Object(R.a)(["\n    font-size: 18px;\n    color: #fff;\n    opacity: 80%;\n    padding-left: 5px;\n\n"]))),Ae=F.a.div(x||(x=Object(R.a)(["\n    border-radius: 2px 15px 0 0;\n    background-image: url(",");\n    height: 800px;\n    background-size: cover;\n    max-width: 1400px;\n    width: 100%;\n    position: relative;\n    box-shadow: inset -1px -50px 29px -30px rgba(0,0,0,0.42);\n"])),(function(e){return e.src})),ke=F.a.div(f||(f=Object(R.a)(["\n    position: absolute;\n    top: 0;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    max-width: 500px;\n    width: 100%;\n"]))),Se=F.a.div(g||(g=Object(R.a)(["\n    background: linear-gradient(270deg, rgba(0,0,0,0) 43%, rgba(0,0,0,0.5914740896358543) 70%);\n    height: 100%;\n    width: 100%;   \n"]))),Pe=F.a.div(v||(v=Object(R.a)(["\n      margin-top: 20px;\n      color: #fff;  \n      font-size: 20px;\n      text-shadow: 5px 3px 9px rgba(0, 0, 0, 1);\n      padding-left: 5px;\n"]))),Ce=F.a.div(m||(m=Object(R.a)(["\n    \n"]))),De=F.a.div(y||(y=Object(R.a)(["\n    \n"]))),Ee=(F.a.div(M||(M=Object(R.a)(["\n    \n"]))),function(e){var t="https://image.tmdb.org/t/p/original/".concat(e.selectedMovieData.backdrop_path);"https://image.tmdb.org/t/p/original/".concat(e.selectedMovieData.poster_path);return Object(G.jsx)(ye,{children:Object(G.jsxs)(Ae,{src:t,children:[Object(G.jsxs)(ke,{children:[Object(G.jsx)(Me,{children:e.selectedMovieData.title}),Object(G.jsx)(we,{children:e.selectedMovieData.original_title}),Object(G.jsx)(Pe,{children:e.selectedMovieData.overview}),Object(G.jsx)(Ce,{children:Object(G.jsxs)(De,{children:["VOTE AVERAGE: ",e.selectedMovieData.vote_average]})})]}),Object(G.jsx)(Se,{})]})})}),Te=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=+this.props.match.params.movieId;console.log(t),de(t).then((function(t){return e.props.setCurrentMovie(t.data)}))}},{key:"render",value:function(){return Object(G.jsx)(Ee,Object(Z.a)({},this.props))}}]),n}(A.a.Component),_e=Object(Q.f)(Te),Ie=Object(q.b)((function(e){return{selectedMovieData:e.MoviePageReducer.selectedMovieData}}),{setCurrentMovie:function(e){return{type:ce,selectedMovie:e}}})(_e),Re=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(G.jsxs)(me,{children:[Object(G.jsx)(he,{}),Object(G.jsx)(ve,{url:this.props.match.url})]})}}]),n}(A.a.Component),Fe=Object(Q.f)(Re),Ne=n(32),ze=n(57).a.initializeApp({apiKey:"AIzaSyAuk10owd8HSTuUHi4Xnwg6oEp7KyfFVnI",authDomain:"dva-react-app.firebaseapp.com",projectId:"dva-react-app",storageBucket:"dva-react-app.appspot.com",messagingSenderId:"450946863814",appId:"1:450946863814:web:df289356c0822259c97dc7",measurementId:"G-HW787PQNGC"}),Ue="ON_AUTH",Ve="OFF_AUTH",He={isAuth:!1,name:"Dima"},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(Z.a)(Object(Z.a)({},e),{},{isAuth:!0});case Ve:return Object(Z.a)(Object(Z.a)({},e),{},{isAuth:!1});default:return Object(Z.a)({},e)}},Ge=Object(q.b)((function(e){return{authFlag:e.AuthPageReducer.isAuth}}),{onAuth:function(){return{type:Ue}},offAuth:function(){return{type:Ve}}})((function(e){var t=e.handleLogout;return Object(w.useEffect)((function(){e.onAuth(),console.log("bitch")}),[]),Object(G.jsxs)("section",{children:[Object(G.jsx)("h2",{children:"Welcome"}),Object(G.jsx)("button",{onClick:function(){return t()},children:"Logout"})]})})),We=function(e){var t=e.email,n=e.setEmail,a=e.password,c=e.setPassword,r=e.handleLogin,i=e.handleSignup,o=e.hasAccount,s=e.setHasAccount,u=e.emailError,j=e.passwordError;return Object(G.jsx)("section",{children:Object(G.jsxs)("div",{children:[Object(G.jsx)("label",{children:"Username"}),Object(G.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(G.jsx)("p",{children:u}),Object(G.jsx)("label",{children:"Password"}),Object(G.jsx)("input",{type:"password",value:a,onChange:function(e){return c(e.target.value)}}),Object(G.jsx)("p",{children:j}),Object(G.jsx)("div",{children:o?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("button",{onClick:r,children:"Sign in"}),Object(G.jsxs)("p",{children:["Dont have an account?",Object(G.jsx)("span",{onClick:function(){return s(!o)},children:"Sign Up"})]})]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("button",{onClick:i,children:"Sign Up"}),Object(G.jsxs)("p",{children:["Have an account?",Object(G.jsx)("span",{onClick:function(){return s(!o)},children:"Sign In"})]})]})})]})})},Be=function(){var e=Object(w.useState)(""),t=Object(Ne.a)(e,2),n=t[0],a=t[1],c=Object(w.useState)(""),r=Object(Ne.a)(c,2),i=r[0],o=r[1],s=Object(w.useState)(""),u=Object(Ne.a)(s,2),j=u[0],b=u[1],d=Object(w.useState)(""),l=Object(Ne.a)(d,2),h=l[0],p=l[1],O=Object(w.useState)(""),x=Object(Ne.a)(O,2),f=x[0],g=x[1],v=Object(w.useState)(""),m=Object(Ne.a)(v,2),y=m[0],M=m[1],A=function(){p(""),g("")},k=function(){ze.auth().onAuthStateChanged((function(e){e?(o(""),b(""),a(e)):a("")}))};return Object(w.useEffect)((function(){k()}),[]),Object(G.jsx)("div",{children:n?Object(G.jsx)(Ge,{handleLogout:function(){ze.auth().signOut()}}):Object(G.jsx)(We,{email:i,setEmail:o,password:j,setPassword:b,handleLogin:function(){A(),ze.auth().signInWithEmailAndPassword(i,j).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":p(e.message);break;case"auth/wrong-password":g(e.message)}}))},handleSignup:function(){A(),ze.auth().createUserWithEmailAndPassword(i,j).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":p(e.message);break;case"auth/weak-password":g(e.message)}}))},hasAccount:y,setHasAccount:M,emailError:h,passwordError:f})})},Je=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(G.jsx)("div",{children:Object(G.jsx)(Be,{})})}}]),n}(A.a.Component);var Ke=function(){return Object(G.jsxs)("div",{className:"App",children:[Object(G.jsx)(W,{}),Object(G.jsx)(Q.b,{path:"/Auth",render:function(){return Object(G.jsx)(Je,{})}}),Object(G.jsx)(Q.b,{path:"/home",render:function(){return Object(G.jsx)(B,{})}}),Object(G.jsx)(Q.b,{exact:!0,path:"/Vapi",render:function(){return Object(G.jsx)(Fe,{})}}),Object(G.jsx)(Q.b,{path:"/Dapi",render:function(){return Object(G.jsx)(J,{})}}),Object(G.jsx)(Q.b,{path:"/Aapi",render:function(){return Object(G.jsx)(K,{})}}),Object(G.jsx)(Q.b,{path:"/Vapi/movie/:movieId?",render:function(){return Object(G.jsx)(Ie,{})}}),Object(G.jsx)(Q.b,{path:"/About",render:function(){return Object(G.jsx)(Y,{})}})]})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Qe=n(34),Xe=Object(Qe.b)({MoviePageReducer:oe,AuthPageReducer:Le}),Ye=Object(Qe.c)(Xe);window.store=Ye,S.a.render(Object(G.jsx)(I.a,{children:Object(G.jsx)(A.a.StrictMode,{children:Object(G.jsx)(q.a,{store:Ye,children:Object(G.jsx)(Ke,{})})})}),document.getElementById("root")),qe()}},[[89,1,2]]]);
//# sourceMappingURL=main.d791c4a2.chunk.js.map