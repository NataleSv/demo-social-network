"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[381],{5381:function(t,s,e){e.r(s),e.d(s,{default:function(){return N}});var n=e(1413),i=e(5671),r=e(3144),o=e(136),u=e(5716),a=e(2791),c={wrapImg:"ProfileInfo_wrapImg__COvwT"},p=e(1628),d=e(184),l=(a.Component,e(885)),h=function(t){var s=(0,a.useState)(!1),e=(0,l.Z)(s,2),n=e[0],i=e[1],r=(0,a.useState)(t.status),o=(0,l.Z)(r,2),u=o[0],c=o[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,d.jsxs)("div",{children:[!n&&(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"hjkfghj"})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(u)}})})]})},f=e(1806),j=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:null!=s.photos.large?s.photos.large:f,className:c.avatar})}),(0,d.jsx)("div",{children:(0,d.jsx)(h,{status:e,updateStatus:n})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:s.fullName}),(0,d.jsxs)("p",{children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",s.aboutMe]}),(0,d.jsx)("h4",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),(0,d.jsxs)("p",{children:["facebook: ",s.contacts.facebook]}),(0,d.jsxs)("p",{children:["website: ",s.contacts.website]}),(0,d.jsxs)("p",{children:["vk: ",s.contacts.vk]}),(0,d.jsxs)("p",{children:["twitter: ",s.contacts.twitter]}),(0,d.jsxs)("p",{children:["instagram: ",s.contacts.instagram]}),(0,d.jsxs)("p",{children:["youtube: ",s.contacts.youtube]}),(0,d.jsxs)("p",{children:["github: ",s.contacts.github]}),(0,d.jsxs)("p",{children:["mainLink: ",s.contacts.mainLink]}),(0,d.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b:",s.lookingForAJobDescription," "]})]})]}):(0,d.jsx)(p.Z,{})},x=e(2982),m="Post_item__M-TPS",g=function(t){return(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("img",{src:"https://miro.medium.com/fit/c/1360/1360/1*aHkiCy29-OUFYmut2Mjabg.png"}),t.message,(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"like"})," ",t.likesCount]})]})},v=e(6139),k=e(704),b=e(5304),P=e(9086),S=(0,b.D)(10),w=(0,k.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,d.jsx)("form",{onSubmit:t.handleSubmit,children:(0,d.jsxs)("div",{children:[(0,d.jsx)(v.Z,{name:"newPostText",component:P.gx,placeholder:"Post message",validate:[b.C,S]}),(0,d.jsx)("button",{children:"Add post"})]})})})),Z=a.memo((function(t){var s=(0,x.Z)(t.posts).reverse().map((function(t){return(0,d.jsx)(g,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"My posts"}),(0,d.jsx)(w,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,d.jsx)("div",{children:s})]})})),C=e(6508),I=e(364),y=(0,I.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,C.Wl)(s))}}}))(Z),_=function(t){return(0,d.jsxs)("div",{children:[(0,d.jsx)(j,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(y,{})]})},T=e(6871),U=e(8277),A=e(7781),M=function(t){(0,o.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,i.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match?this.props.match.params.userId:this.props.authorizedUserId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,d.jsx)("div",{children:(0,d.jsx)(_,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),e}(a.Component),N=(0,A.qC)((0,I.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:C.et,getStatus:C.lR,updateStatus:C.Nf}),U.e)((function(t){var s=(0,T.bS)("/profile/:userId/");return(0,d.jsx)(M,(0,n.Z)((0,n.Z)({},t),{},{match:s}))}))}}]);
//# sourceMappingURL=381.efa5efb5.chunk.js.map