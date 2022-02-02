(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r,s=n(12),c=n.n(s),a=(n(17),n(2)),o=n(5),u=n(11),i=n(6),d=n(7),l=n(9),p=n(8),h=n(1),f=n.n(h),j=n(3),b=n.n(j),v=(n(19),n(20),n(21),n(4)),m=n.n(v),x=n(0),O=function(e){var t=e.todos,n=e.selectedUserId,r=e.onCheck,s=e.onSelectUser;return Object(x.jsxs)("div",{className:"TodoList",children:[Object(x.jsx)("h2",{children:"Todos:"}),Object(x.jsx)("div",{className:"TodoList__list-container",children:Object(x.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){return Object(x.jsxs)("li",{className:m()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return r(e.id)}}),Object(x.jsx)("p",{children:e.title})]}),Object(x.jsx)("button",{className:m()("button","TodoList__user-button",{"TodoList__user-button--selected":0===n||e.userId===n}),type:"button",onClick:function(){return s(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})},y=function(){var e=Object(a.a)(f.a.mark((function e(t){var n,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://mate.academy/students-api/".concat(t),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:throw e.prev=11,e.t0=e.catch(1),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(a.a)(f.a.mark((function e(){var t,n,r,s=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:void 0,n="todos",void 0!==t&&(n+="?completed=".concat(t)),e.next=5,y(n);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="users/".concat(t),e.next=3,y(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=(n(23),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:null,userNotFoundError:!1,isLoading:!1},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadUser();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(a.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.userId===this.props.userId){e.next=3;break}return e.next=3,this.loadUser();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadUser",value:function(){var e=Object(a.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isLoading:!0,userNotFoundError:!1}),e.next=4,k(this.props.userId);case 4:t=e.sent,this.setState({user:t,isLoading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({userNotFoundError:!0});case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.user,r=t.userNotFoundError,s=t.isLoading;if(r)return Object(x.jsx)("span",{children:"404: User is not found"});if(s||!n)return Object(x.jsx)("span",{children:"Loading..."});var c=n,a=c.id,o=c.name,u=c.email,i=c.phone;return Object(x.jsxs)("div",{className:"CurrentUser",children:[Object(x.jsx)("h2",{className:"CurrentUser__title",children:Object(x.jsx)("span",{children:"Selected user: ".concat(a)})}),Object(x.jsx)("h3",{className:"CurrentUser__name",children:o}),Object(x.jsx)("p",{className:"CurrentUser__email",children:u}),Object(x.jsx)("p",{className:"CurrentUser__phone",children:i}),Object(x.jsx)("button",{type:"button",className:m()("CurrentUser__clear","button","TodoList__user-button","TodoList__user-button--selected"),onClick:function(){return e.props.onClear()},children:"Clear"})]})}}]),n}(b.a.Component));!function(e){e.All="all",e.Active="active",e.Completed="completed"}(r||(r={}));n(24);var C=function(e){var t=e.query,n=e.todoStatus,s=e.onChange;return Object(x.jsxs)("form",{className:"form",children:[Object(x.jsx)("input",{type:"text",value:t,name:"query",onChange:s,className:"input is-link"}),Object(x.jsx)("div",{className:"select",children:Object(x.jsxs)("select",{name:"todoStatus",value:n,onChange:s,children:[Object(x.jsx)("option",{value:r.All,children:"All"}),Object(x.jsx)("option",{value:r.Active,children:"Active"}),Object(x.jsx)("option",{value:r.Completed,children:"Completed"})]})})]})},N=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return(e=t.call.apply(t,[this].concat(c))).state={selectedUserId:0,todos:[],query:"",todoStatus:r.All},e.checkTodo=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id!==t?e:Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed})}))}}))},e.selectUser=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.setState({selectedUserId:t})},e.changeHandler=function(t){var n=t.target,r=n.name,s=n.value;e.setState(Object(o.a)({},r,s))},e.filterTodos=Object(a.a)(f.a.mark((function t(){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.query,t.next=3,e.filterTodosByStatus();case 3:r=t.sent,e.setState({todos:r.filter((function(e){return e.title.includes(n)}))});case 5:case"end":return t.stop()}}),t)}))),e.filterTodosByStatus=Object(a.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.state.todoStatus,t.t0=n,t.next=t.t0===r.Active?4:t.t0===r.Completed?5:6;break;case 4:return t.abrupt("return",_(!1));case 5:return t.abrupt("return",_(!0));case 6:return t.abrupt("return",_());case 7:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(a.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.query===n.query&&this.state.todoStatus===n.todoStatus){e.next=3;break}return e.next=3,this.filterTodos();case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.todos,r=e.query,s=e.todoStatus;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"App__sidebar",children:[Object(x.jsx)(C,{query:r,todoStatus:s,onChange:this.changeHandler}),Object(x.jsx)(O,{todos:n,selectedUserId:t,onCheck:this.checkTodo,onSelectUser:this.selectUser})]}),Object(x.jsx)("div",{className:"App__content",children:Object(x.jsx)("div",{className:"App__content-container",children:t?Object(x.jsx)(w,{userId:t,onClear:this.selectUser}):"No user selected"})})]})}}]),n}(b.a.Component),U=N;c.a.render(Object(x.jsx)(U,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ebef904c.chunk.js.map