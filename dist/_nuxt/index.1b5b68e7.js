import b from"./Nav.e2a181cf.js";import{O as h,e as f,o as t,H as e,P as n,Q as a,R as p,S as _,u as v,a1 as y,X as d,N as x,W as w,K as k}from"./entry.d9e5e99d.js";import{u as N}from"./asyncData.b5c035b9.js";import{f as $}from"./navigation.b0cbe001.js";import{q as C}from"./query.01897a38.js";import"./utils.673b26ff.js";const B={class:"min-h-screen"},S=y('<section class="lg:px-[15%] px-[5%] pt-20 h-screen relative flex justify-center" style="background-image:url(&#39;/spain-cars-rental.jpg&#39;);background-repeat:no-repeat;background-size:cover;background-position:top;"><span class="overlay w-full h-full flex justify-center items-top backdrop-brightness-50 absolute inset-0"></span><div class="z-20"><div class="flex flex-col justify-center"><h1 class="lg:text-6xl text-4xl text-center leading-normal font-bold text-white mb-8"><span class="text-[#bc0014]">All about</span> <br> <span class="text-[#ffbb01]"> Car Rental</span> <br> <span class="text-[#bc0014]">In Spain </span></h1><a href="https://www.discovercars.com/?a_aid=spainCars" target="_blank" rel="noopener" type="button" class="text-center inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"> Book a car now </a></div></div></section>',1),V={class:"lg:px-[15%] px-[5%] lg:pt-20 pt-14"},j=a("p",{class:"text-center uppercase font-medium tracking-wider mb-10 text-gray-500"}," Blog Posts ",-1),A={class:"grid grid-cols-1 lg:grid-cols-3 gap-5"},q={class:"text-lg font-semibold rainbow-text"},z={key:0,class:"list-disc list-inside mt-4 pl-2 space-y-3"},D={key:1,class:"list-disc list-inside mt-4 pl-2 space-y-3"},H=a("li",{class:"list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"}," View article.. ",-1),T={__name:"index",async setup(I){let o,i;const{data:u}=([o,i]=h(()=>N("navigation",()=>$(C("blog")))),o=await o,i(),o);return f({title:"SpainCars"}),(L,P)=>{const g=b,l=k;return t(),e("div",B,[n(g),a("main",null,[S,a("section",V,[j,a("div",A,[(t(!0),e(p,null,_(v(u)[0].children,(s,c)=>(t(),e("div",{key:`blogNavItem-${s._path}-${c}`,class:"px-7 py-5 rounded-lg border-2"},[a("h2",q,d(s.title),1),s.children?(t(),e("ul",z,[(t(!0),e(p,null,_(s.children,(r,m)=>(t(),e("li",{key:`childNav-${r._path}-${m}-${c}`,class:"list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"},[n(l,{to:`/blog${r._path}`},{default:x(()=>[w(d(r.title),1)]),_:2},1032,["to"])]))),128))])):(t(),e("ul",D,[n(l,{to:`/blog${s._path}`},{default:x(()=>[H]),_:2},1032,["to"])]))]))),128))])])])])}}};export{T as default};