(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(31)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=n(5),i=n(7),s=n(13),u=n(1),d=n(2),p=n(4),f=n(3),m=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props;(0,t.onClick)(t.cbData)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return r.a.createElement("button",{className:t,onClick:this.handleClick},n)}}]),n}(a.Component),h=(n(26),["all","active","completed"]),v=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.clearCompleted,a=e.allTasks,l=e.itemsLeft,o=e.onFilterChanged;return r.a.createElement("div",{className:a>0?"show footer":"footer"},r.a.createElement("span",{className:"todoCount"},l," items left"),r.a.createElement("div",{className:"filterBtns"},h.map((function(e){return r.a.createElement(m,{key:e,className:t===e?"filterSwitchBtn selected":"filterSwitchBtn",cbData:e,onClick:o},e)}))),r.a.createElement("button",{onClick:n,className:"clearCompleted"},"clear completed"))}}]),n}(a.Component),E=(n(27),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).createNewTask=function(t){var n=t.currentTarget.value;if("Enter"===t.key&&n.trim()){var a={id:Date.now().toString(),title:n,done:!1};e.props.onCreate(a),console.log(a,"newTask"),t.currentTarget.value=""}},e.handleClick=function(){var t=e.props,n=t.allTasks,a=t.itemsDone,r=t.allDone,l=t.allUndone;console.log(n,"allTasks"),console.log(a,"itemsDone"),console.log(r,"allDone"),console.log(l,"allUndone"),n===a?l():r()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.allTasks;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("button",{onClick:this.handleClick,className:e>0?"showAllDoneBtn allDoneBtn":"allDoneBtn "},"\u221f")),r.a.createElement("input",{onKeyPress:this.createNewTask,placeholder:"What needs to be done?",className:"newTask"}))}}]),n}(a.Component)),k=(n(28),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:"",isEdit:!1},e.handleDelete=function(){var t=e.props,n=t.id;(0,t.onDelete)(n)},e.handleUpdate=function(){var t=e.props,n=t.id;(0,t.onUpdate)(n)},e.handleChange=function(t){var n=t.currentTarget.value;n.trim()&&e.setState({value:n})},e.handleDblClick=function(){e.setState({isEdit:!0,value:e.props.title}),window.addEventListener("keydown",e.handleKeyUp)},e.handelCancel=function(){e.setState({isEdit:!1}),window.removeEventListener("keydown",e.handleKeyUp)},e.handleSave=function(){var t=e.props,n=t.id;(0,t.onSaveEdit)(n,e.state.value),e.handelCancel()},e.handleKeyUp=function(t){"Escape"===t.key&&e.handelCancel(),"Enter"===t.key&&e.handleSave()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isEdit,n=e.value,a=this.props,l=a.done,o=a.title;return r.a.createElement("div",{className:l?"todo done":"todo"},r.a.createElement("div",{className:l?"toggleDone":"toggleNotDone",onClick:this.handleUpdate}),r.a.createElement("div",{className:"text"},t?r.a.createElement("input",{type:"text",value:n,onChange:this.handleChange,onBlur:this.handleSave,autoFocus:!0,className:"editTodo"}):r.a.createElement("p",{className:l?"text done":"text",onDoubleClick:this.handleDblClick},o)),r.a.createElement("div",{className:"wrapperBtnDelete"},r.a.createElement("button",{type:"button",onClick:this.handleDelete,className:"delete"},"\xd7")))}}]),n}(a.Component)),y=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onUpdate,n=e.onDelete,a=e.onSaveEdit;return r.a.createElement("div",{className:"todos"},this.props.tasks.map((function(e){var l=e.id,o=e.title,c=e.done;return r.a.createElement(k,{key:l,id:l,title:o,done:c,onUpdate:t,onDelete:n,onSaveEdit:a})})))}}]),n}(a.Component),b=function(e){return{type:"CREATE_TASK",payload:e}},C=function(e){return{type:"UPDATE_TASK",payload:e}},O=function(e){return{type:"DELETE_TASK",payload:e}},T=function(){return{type:"CLEAR_COMPLETED"}},g=function(e,t){return{type:"SAVE_EDIT",payload:{id:e,title:t}}},D=function(){return{type:"ALL_DONE"}},N=function(){return{type:"ALL_UNDONE"}},j=function(e){return{type:"CHANGE_FILTER",payload:e}},S=(n(29),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tasks,n=e.filter,a=e.allTasks,l=e.createNewTask,o=e.allDone,c=e.allUndone,i=e.updateTask,s=e.deleteTask,u=e.itemsLeft,d=e.itemsDone,p=e.changeFilter,f=e.clearCompleted,m=e.saveEdit;return console.log(t,"tasks"),r.a.createElement("div",{className:"todoList"},r.a.createElement(E,{onCreate:l,allDone:o,allUndone:c,allTasks:a,itemsLeft:u,itemsDone:d}),r.a.createElement(y,{tasks:t,onUpdate:i,onDelete:s,onSaveEdit:m}),r.a.createElement(v,{filter:n,allTasks:a,itemsLeft:u,onFilterChanged:p,clearCompleted:f}))}}]),n}(a.Component)),w=function(e){var t=e.filter,n=e.tasks;switch(t){case"active":return n.filter((function(e){return!e.done}));case"completed":return n.filter((function(e){return e.done}));default:return n}},A=Object(i.b)((function(e){return{tasks:w(e),filter:e.filter,itemsLeft:e.tasks.filter((function(e){return!e.done})).length,itemsDone:e.tasks.filter((function(e){return e.done})).length,allTasks:e.tasks.length}}),(function(e){return Object(c.bindActionCreators)({createNewTask:b,updateTask:C,deleteTask:O,changeFilter:j,clearCompleted:T,saveEdit:g,allDone:D,allUndone:N},e)}))(S),L=(n(30),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"todoTitle"},"todos"),r.a.createElement(A,null))}}]),n}(a.Component)),U=n(14),_=[],K=Object(c.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TASK":return[].concat(Object(U.a)(e),[t.payload]);case"UPDATE_TASK":return e.map((function(e){return e.id===t.payload&&(e.done=!e.done),e}));case"DELETE_TASK":return e.filter((function(e){return e.id!==t.payload}));case"CLEAR_COMPLETED":return e.filter((function(e){return!e.done}));case"SAVE_EDIT":return e.map((function(e){return e.id===t.payload.id&&(e.title=t.payload.title),e}));case"ALL_DONE":return e.map((function(e){return!1===e.done&&(e.done=!e.done),e}));case"ALL_UNDONE":return e.map((function(e){return!0===e.done&&(e.done=!e.done),e}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return t.payload;default:return e}}}),B=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},x=Object(c.createStore)(K,B,Object(s.devToolsEnhancer)());x.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(x.getState()))}));var I=r.a.createElement(i.a,{store:x},r.a.createElement(L,null));o.a.render(I,document.getElementById("root")),console.log(x)}},[[15,1,2]]]);
//# sourceMappingURL=main.705b987d.chunk.js.map