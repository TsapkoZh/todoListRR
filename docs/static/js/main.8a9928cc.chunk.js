(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=a(1),i=a(2),s=a(4),u=a(3),d=a(7),p=a(5),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props;(0,t.onClick)(t.cbData)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.children;return r.a.createElement("button",{className:t,onClick:this.handleClick},a)}}]),a}(n.Component),m=(a(26),["all","active","completed"]),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.filter,a=e.clearCompleted,n=e.allTasks,l=e.itemsLeft,o=e.onFilterChanged;return r.a.createElement("div",{className:n>0?"show footer":"footer"},r.a.createElement("span",{className:"todoCount"},l," items left"),r.a.createElement("div",{className:"filterBtns"},m.map((function(e){return r.a.createElement(f,{key:e,className:t===e?"filterSwitchBtn selected":"filterSwitchBtn",cbData:e,onClick:o},e)}))),r.a.createElement("button",{onClick:a,className:"clearCompleted"},"clear completed"))}}]),a}(n.Component),v=(a(27),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).createNewTask=function(t){if("Enter"===t.key){var a={id:Date.now().toString(),title:t.currentTarget.value,done:!1};e.props.onCreate(a),t.currentTarget.value=""}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.allDone,a=e.allTasks;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("button",{onClick:t,className:a>0?"showAllDoneBtn allDoneBtn":"allDoneBtn"},"\u221f")),r.a.createElement("input",{onKeyPress:this.createNewTask,placeholder:"What needs to be done?",className:"newTask"}))}}]),a}(n.Component)),E=(a(28),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:"",isEdit:!1},e.handleDelete=function(){var t=e.props,a=t.id;(0,t.onDelete)(a)},e.handleUpdate=function(){var t=e.props,a=t.id;(0,t.onUpdate)(a)},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleDblClick=function(){e.setState({isEdit:!0,value:e.props.title}),window.addEventListener("keydown",e.handleKeyUp)},e.handelCancel=function(){e.setState({isEdit:!1}),window.removeEventListener("keydown",e.handleKeyUp)},e.handleSave=function(){var t=e.props,a=t.id;(0,t.onSaveEdit)(a,e.state.value),e.handelCancel()},e.handleKeyUp=function(t){"Escape"===t.key&&e.handelCancel(),"Enter"===t.key&&e.handleSave()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isEdit,t=this.props,a=t.done,n=t.title;return r.a.createElement("div",{className:a?"task done":"task"},r.a.createElement("div",{className:a?"toggleDone":"toggleNotDone",onClick:this.handleUpdate}),r.a.createElement("div",{className:"text"},e?r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,onBlur:this.handleSave,autoFocus:!0}):r.a.createElement("p",{className:"text",onDoubleClick:this.handleDblClick},n)),r.a.createElement("div",{className:"wrapperBtnDelete"},r.a.createElement("button",{type:"button",onClick:this.handleDelete,className:"delete"},"\xd7")))}}]),a}(n.Component)),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onUpdate,a=e.onDelete,n=e.onSaveEdit;return r.a.createElement("div",{className:"tasks"},this.props.tasks.map((function(e){var l=e.id,o=e.title,c=e.done;return r.a.createElement(E,{key:l,id:l,title:o,done:c,onUpdate:t,onDelete:a,onSaveEdit:n})})))}}]),a}(n.Component),y=function(e){return{type:"CREATE_TASK",payload:e}},b=function(e){return{type:"CHANGE_FILTER",payload:e}},C=function(e){return{type:"UPDATE_TASK",payload:e}},O=function(e){return{type:"DELETE_TASK",payload:e}},T=function(){return{type:"CLEAR_COMPLETED"}},j=function(e,t){return{type:"SAVE_EDIT",payload:{id:e,title:t}}},g=function(){return{type:"ALL_DONE"}},D=(a(29),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.filter,n=e.allTasks,l=e.createNewTask,o=e.allDone,c=e.updateTask,i=e.deleteTask,s=e.itemsLeft,u=e.changeFilter,d=e.clearCompleted,p=e.saveEdit;return r.a.createElement("div",{className:"todoList"},r.a.createElement(v,{onCreate:l,allDone:o,allTasks:n}),r.a.createElement(k,{tasks:t,onUpdate:c,onDelete:i,onSaveEdit:p}),r.a.createElement(h,{filter:a,allTasks:n,itemsLeft:s,onFilterChanged:u,clearCompleted:d}))}}]),a}(n.Component)),N=function(e){var t=e.filter,a=e.tasks;switch(t){case"active":return a.filter((function(e){return!e.done}));case"completed":return a.filter((function(e){return e.done}));default:return a}},S=Object(d.b)((function(e){return{tasks:N(e),filter:e.filter,itemsLeft:e.tasks.filter((function(e){return!e.done})).length,allTasks:e.tasks.length}}),(function(e){return Object(p.bindActionCreators)({createNewTask:y,updateTask:C,deleteTask:O,changeFilter:b,clearCompleted:T,saveEdit:j,allDone:g},e)}))(D),w=(a(30),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"todoTitle"},"todos"),r.a.createElement(S,null))}}]),a}(n.Component)),A=a(14),L=[],_=Object(p.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TASK":return[].concat(Object(A.a)(e),[t.payload]);case"UPDATE_TASK":return e.map((function(e){return e.id===t.payload&&(e.done=!e.done),e}));case"DELETE_TASK":return e.filter((function(e){return e.id!==t.payload}));case"CLEAR_COMPLETED":return e.filter((function(e){return!e.done}));case"SAVE_EDIT":return e.map((function(e){return e.id===t.payload.id&&(e.title=t.payload.title),e}));case"ALL_DONE":return e.map((function(e){return!1===e.done&&(e.done=!e.done),e}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return t.payload;default:return e}}}),U=a(13),K=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},B=Object(p.createStore)(_,K,Object(U.devToolsEnhancer)());B.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(B.getState()))}));var I=r.a.createElement(d.a,{store:B},r.a.createElement(w,null));o.a.render(I,document.getElementById("root")),console.log(B)}},[[15,1,2]]]);
//# sourceMappingURL=main.8a9928cc.chunk.js.map