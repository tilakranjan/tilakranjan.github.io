(this["webpackJsonpairbase-request"]=this["webpackJsonpairbase-request"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"service":{"name":"GitHub","website":"https://github.com","usage_count":5,"logo":"https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1426048404/y4lxnqcngh5dvoaz06as.png","description":"GitHub is a web-based Git repository hosting service offering distributed revision control and source code management functionality of Git."},"requested_by":{"email":"shawn@airbase.io","first_name":"Shawn","last_name":"Park","profile_picture":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"},"id":34,"cost_cents":40000,"renewal_frequency_in_months":1,"spend_limit_cents":150000,"spend_limit_window":"month","card_lock_date":null,"approvers":[{"approver":{"email":"shreyas@airbase.io","first_name":"Shreyas","last_name":"Subramaniam","profile_picture":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"},"status":"accepted","last_notified_time":"2018-05-07T10:45:53.150215","created_date":"2018-05-07T10:45:42.380930","last_updated_date":"2018-05-07T10:47:03.166711"},{"approver":{"email":"thejo@airbase.io","first_name":"Thejo","last_name":"Kote","profile_picture":"https://lh5.googleusercontent.com/-gIEfrbWr0QY/AAAAAAAAAAI/AAAAAAAAAAo/HHihoSxWy9c/photo.jpg"},"status":"created","last_notified_time":"2018-05-07T10:47:13.661571","created_date":"2018-05-07T10:45:42.630981","last_updated_date":"2018-05-07T10:47:13.690153"}],"description":"This is a request to pay for our monthly Github expenses","status":"archived","expense_account":"4432 Product Development","created_date":"2018-05-07T10:45:42.330393","last_updated_date":"2018-09-03T09:30:33.561155","cost":400,"spend_limit":1500,"files":["https://staging-airbase.s3.amazonaws.com/company_38dd77/subscription_155/eclipse.jpg"]}')},,,function(e,t,a){e.exports=a.p+"static/media/Airbase_Logo.6caeb41a.svg"},function(e,t,a){e.exports=a.p+"static/media/lock.370e89ba.svg"},function(e,t,a){e.exports=a.p+"static/media/file.c95f57b2.svg"},function(e,t,a){e.exports=a.p+"static/media/check.c722dbbc.svg"},function(e,t,a){e.exports=a.p+"static/media/unCheck.7aa3516f.svg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){e.exports=a.p+"static/media/FontsFree-Net-SFProDisplay-Regular.d09549c1.ttf"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),r=a.n(s),l=(a(19),a(20),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),p=a(9),d=a.n(p),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("img",{src:d.a,className:"App-logo",alt:"Airbase_Logo"})}}]),t}(n.Component),b=a(10),E=a.n(b),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"infoDiv"},c.a.createElement("p",{className:"infoHead1"},c.a.createElement("img",{src:E.a,className:"Lock-img",alt:"Airbase_Lock"}),"Security Message"),c.a.createElement("p",{className:"infoText1"},"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus."))}}]),t}(n.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.logo,n=e.id;return c.a.createElement("div",{className:"titleDiv"},c.a.createElement("img",{src:a,className:"service-logo",alt:"service_Logo"}),c.a.createElement("span",{className:"titleStyle"},"Request for ",t," (#",n,")"))}}]),t}(n.Component),N=a(11),g=a.n(N),A=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"buttonGroup"},c.a.createElement("div",{className:"actionButton approveButton"},c.a.createElement("p",null,"Approve")),c.a.createElement("div",{className:"actionButton denyButton"},c.a.createElement("p",null,"Deny")))}}]),t}(n.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.requestedByImage,a=e.requestedByName,n=e.cost,s=e.renewalFrequency,r=e.annualCost,l=e.expenseAccount,i=e.file,o=e.description;return c.a.createElement("div",{className:"requestDiv"},c.a.createElement("div",{className:"requestDivContent requestDivMargin"},c.a.createElement("div",{className:"contentInfoView"},c.a.createElement("div",{className:"contentKeyDiv"},c.a.createElement("span",{className:"contentKeyText"},"Requested by")),c.a.createElement("div",{className:"contentValDiv"},c.a.createElement("img",{src:t,className:"request_avatar",alt:"request_avatar"}),c.a.createElement("span",{className:"contentValText"},a))),c.a.createElement("div",{className:"contentInfoView topBorder"},c.a.createElement("div",{className:"contentKeyDiv"},c.a.createElement("span",{className:"contentKeyText"},"Cost")),c.a.createElement("div",{className:"contentValDiv"},c.a.createElement("span",{className:"contentValText"},"$",n))),c.a.createElement("div",{className:"contentInfoView2 topBorder contentInfoView2BorderRight"},c.a.createElement("div",{className:"contentKeyDiv2"},c.a.createElement("span",{className:"contentKeyText"},"Renewal Frequency")),c.a.createElement("div",{className:"contentValDiv"},c.a.createElement("span",{className:"contentValText"},s))),c.a.createElement("div",{className:"contentInfoView2 topBorder"},c.a.createElement("div",{className:"contentKeyDiv"},c.a.createElement("span",{className:"contentKeyText"},"Annual Cost")),c.a.createElement("div",{className:"contentValDiv"},c.a.createElement("span",{className:"contentValText"},"$",r))),c.a.createElement("div",{className:"contentInfoView topBorder"},c.a.createElement("div",{className:"contentKeyDiv"},c.a.createElement("span",{className:"contentKeyText"},"Expense Account")),c.a.createElement("div",{className:"contentValDiv"},c.a.createElement("span",{className:"contentValText"},l))),c.a.createElement("div",{className:"contentInfoView topBorder"},c.a.createElement("div",{className:"contentKeyDiv"},c.a.createElement("span",{className:"contentKeyText"},"File")),c.a.createElement("div",{className:"contentValDiv"},i.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("img",{src:g.a,className:"fileIcon",alt:"File_Icon"}),c.a.createElement("a",{href:e,target:"blank",className:"contentValText"},e.split("/")[e.split("/").length-1]),c.a.createElement("br",null))})))),c.a.createElement("div",{className:"contentInfoView contentInfoView3 topBorder"},c.a.createElement("div",{className:"contentKeyDiv"},c.a.createElement("span",{className:"contentKeyText"},"Description")),c.a.createElement("div",{className:"contentValDiv3"},c.a.createElement("span",{className:"contentValText"},o)))),c.a.createElement("div",{className:"alertText"},c.a.createElement("span",null,"Your company is already paying for Amazon Web Service on a recurring basis."),c.a.createElement("br",null),c.a.createElement("span",{className:"defaultColor"},"(1 instance owned by John Smith).")),c.a.createElement("div",{className:"webActionButtons"},c.a.createElement(A,null)))}}]),t}(n.Component),y=a(12),j=a.n(y),O=a(13),D=a.n(O),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t=new Date(e),a=t.getMonth(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=n[a],s=c+" "+t.getDate()+", "+t.getFullYear();return s}return""},x=function(e,t){var a=e.filter((function(e){return t?"accepted"===e.status:"accepted"!==e.status}));console.log("memArr.length: ",e.length),console.log("filteredMembers.length: ",a.length);var n=t?1:e.length-a.length+1;return console.log("srNum: ",n),a=a.map((function(e){return e.srNum=n++,e}))},k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.memberData,t=e.approver,a=e.last_updated_date,n=e.status,s=e.srNum,r=t.first_name,l=t.last_name,i=t.profile_picture,o=t.email;return c.a.createElement("div",{className:"memberView"},c.a.createElement("div",{className:"memberCountView"},c.a.createElement("div",{className:"memberCount"},c.a.createElement("p",{className:"memberCountText"},s))),c.a.createElement("div",{className:"memberDetails"},c.a.createElement("div",{className:"memberAvatarHolder"},c.a.createElement("img",{src:i,className:"member_avatar",alt:"member_avatar"})),c.a.createElement("div",{className:"memberDetailsHolder"},c.a.createElement("p",{className:"memberDetailP"},c.a.createElement("span",{className:"memberName"},r+" "+l+" "),c.a.createElement("span",{className:"memberInfo"},"(",o,")")),"accepted"===n?c.a.createElement("span",{className:"memberInfo"},"Approved ",w(a)):c.a.createElement("span",{className:"memberInfo"},"Last Notified ",w(a)))),c.a.createElement("div",{className:"memberCheck"},"accepted"===n?c.a.createElement("img",{src:j.a,className:"Check-logo",alt:"Check_Logo"}):c.a.createElement("img",{src:D.a,className:"Check-logo",alt:"Check_Logo"})))}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.approved,a=e.pending;return c.a.createElement("div",{className:"memberDiv"},t.length&&c.a.createElement("div",{className:"memberSection"},c.a.createElement("p",{className:"memberDivTitle"},"Approved"),c.a.createElement("div",{className:"membersList"},t.map((function(e,t){return c.a.createElement(k,{key:t,memberData:e})})))),c.a.createElement("hr",{className:"membersHr"}),a.length&&c.a.createElement("div",{className:"memberSection"},c.a.createElement("p",{className:"memberDivTitle"},"Pending"),c.a.createElement("div",{className:"membersList"},a.map((function(e,t){return c.a.createElement(k,{key:t,memberData:e})})))))}}]),t}(n.Component),q=(a(21),a(6)),C=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(f,null),c.a.createElement("div",{className:"MainDiv"},c.a.createElement(h,{name:q.service.name,logo:q.service.logo,id:q.id}),c.a.createElement("div",{className:"ContentDiv"},c.a.createElement(_,{requestedByImage:q.requested_by.profile_picture,requestedByName:q.requested_by.first_name+" "+q.requested_by.last_name,cost:q.cost,renewalFrequency:q.renewal_frequency_in_months+" "+q.spend_limit_window,annualCost:12*q.cost,expenseAccount:q.expense_account,file:q.files,description:q.description}),c.a.createElement(T,{approved:x(q.approvers,!0),pending:x(q.approvers,!1)}))),c.a.createElement("div",{className:"mobileActionButtons"},c.a.createElement(A,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.ea6d31ff.chunk.js.map