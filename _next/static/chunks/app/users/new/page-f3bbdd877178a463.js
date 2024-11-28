(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{896:function(e,r,s){Promise.resolve().then(s.bind(s,5564))},5564:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return i}});var n=s(7437),t=s(2265),o=s(9376);function i(){let[e,r]=(0,t.useState)(""),[s,i]=(0,t.useState)(""),[l,u]=(0,t.useState)("user"),[a,d]=(0,t.useState)(null),c=(0,o.useRouter)();return((0,t.useEffect)(()=>{let e=localStorage.getItem("currentUser");e?d(JSON.parse(e)):c.push("/")},[c]),a)?(0,n.jsx)("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center",children:(0,n.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md w-96",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mb-6 text-center",children:"Add New User"}),(0,n.jsxs)("form",{onSubmit:r=>{r.preventDefault(),alert("New user added: ".concat(e,", ").concat(s,", ").concat(l)),c.push("/users")},className:"space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),(0,n.jsx)("input",{type:"text",id:"name",value:e,onChange:e=>r(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,n.jsx)("input",{type:"email",id:"email",value:s,onChange:e=>i(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"role",className:"block text-sm font-medium text-gray-700",children:"Role"}),(0,n.jsxs)("select",{id:"role",value:l,onChange:e=>u(e.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",children:[(0,n.jsx)("option",{value:"user",children:"User"}),(0,n.jsx)("option",{value:"manager",children:"Manager"}),(0,n.jsx)("option",{value:"admin",children:"Admin"})]})]}),(0,n.jsx)("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Add User"})]})]})}):(0,n.jsx)("div",{children:"Loading..."})}},9376:function(e,r,s){"use strict";var n=s(5475);s.o(n,"useRouter")&&s.d(r,{useRouter:function(){return n.useRouter}})}},function(e){e.O(0,[971,117,744],function(){return e(e.s=896)}),_N_E=e.O()}]);