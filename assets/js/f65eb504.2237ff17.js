"use strict";(self.webpackChunkllmsystems=self.webpackChunkllmsystems||[]).push([[655],{1952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151);const o={hide_table_of_contents:!0},r=void 0,l={id:"Projects",title:"Projects",description:"Description",source:"@site/docs/Projects.md",sourceDirName:".",slug:"/Projects",permalink:"/llmsystem2024spring/docs/Projects",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},a={},c=[{value:"Description",id:"description",level:2},{value:"Project Proposal",id:"project-proposal",level:2},{value:"Project Report",id:"project-report",level:2},{value:"Suggested Topics for Projects",id:"suggested-topics-for-projects",level:2}];function d(e){const n={a:"a",br:"br",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Students will collaborate in groups of ",(0,i.jsx)(n.strong,{children:"2 to 3"})," to complete a project on LLM systems. These projects should have some systems and some LLM components.\nThere are two types of projects:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Design scalable and accelerated components in MiniTorch for LLMs by reimplementing a recent LLM system paper. or"}),"\n",(0,i.jsx)(n.li,{children:"Explore and solve new research challenges on LLM systems with the goal of submitting a paper to a conference (e.g. MLsys, OSDI, SOSP, SC, etc)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"project-proposal",children:"Project Proposal"}),"\n",(0,i.jsxs)(n.p,{children:["Please use the latex style file from ",(0,i.jsx)(n.a,{href:"https://media.mlsys.org/Conferences/MLSYS2024/Styles/mlsys2024style.zip",children:"here"}),". You proposal should describe:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"What LLM System problem are you planning to address?\n-- what are the system challenges?"}),"\n",(0,i.jsx)(n.li,{children:"What are the existing state-of-art methods on this problem? Is the source code/model available?\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Possible directions for going forward.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"How do you evaluate the performance? what kind of workload?"}),"\n",(0,i.jsx)(n.li,{children:"Who is your team and how are you planning to split the workload between team members?"}),"\n",(0,i.jsx)(n.li,{children:"A rough timeline/milestones"}),"\n",(0,i.jsx)(n.li,{children:"What CPU, GPU and storage infrastructure do need for this project? Please estimate the amount of computation time required. \xa0"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"project-report",children:"Project Report"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Introduction/Motivation:\xa0This essentially lays out the problem definition, motivation, talks about why we need to work on it, the key contributions expected/presented in the work.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Related Work/Background:\xa0This talks about key papers/works that provide context to your current work. Instead of listing down multiple past works, talk about the ones that minimally differ from your work, and how.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Methodology:\xa0This section talks about your method, raises research questions and how you are going to address them."}),"\n",(0,i.jsx)(n.li,{children:"Experiments: This section can describe your experiments and the results you obtain.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Analysis/Ablations:\xa0Typically, you would have multiple factors involved in your experimental setting. Analysis sections help you probe deeper into the results and help piece out contributions from individual modeling decisions made.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Conclusion/Discussion:\xa0This would list the main takeaways from your work, discuss some future ideas (if any) and engage in discussion.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Limitations:\xa0This section lays out some known limitations of your work.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"[final report only] Team Member Contributions\xa0List out each individual's contributions in this section."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"suggested-topics-for-projects",children:"Suggested Topics for Projects"}),"\n",(0,i.jsxs)(n.p,{children:["We provide a seed list of project ideas.\nYou are welcome to choose any of the below topics but not restrict to these.",(0,i.jsx)(n.br,{}),"\n","We strongly encourage you to come up with something that is challenging and excites you regarding LLM systems."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Extend scalable components in MiniTorch"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implement FlashAttention"}),"\n",(0,i.jsx)(n.li,{children:"Implement PageAttention"}),"\n",(0,i.jsx)(n.li,{children:"Implement mix-precision training"}),"\n",(0,i.jsxs)(n.li,{children:["Implement memory optimization in ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2010.13887",children:"LightSeq"})," for faster inference"]}),"\n",(0,i.jsx)(n.li,{children:"Implement DPO training (Direct Preference Optimization)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Open Research Ideas"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Scaling multimodal LLM training and inference (e.g. speech-text LLM model)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the input can be long sequence due to a great number of pixels or number of frames in a speech utterance"}),"\n",(0,i.jsx)(n.li,{children:"the output can also be long"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Federated training for large models [ ",(0,i.jsx)(n.a,{href:"https://openreview.net/forum?id=Kg0IDQF3wp&noteId=v5OYKJ2sra",children:"link"})," ]"]}),"\n",(0,i.jsx)(n.li,{children:"Additional training (e.g., quantized training/finetuning under fp16/int8) for better quantization performance afterwards"}),"\n",(0,i.jsx)(n.li,{children:"Special model/system design for biology / chemistry-related models (small vocab_size ~10, but long sequence e.g., 10million)"}),"\n",(0,i.jsx)(n.li,{children:"Accelerating large model inference in a browser with limited resource (e.g. how to make WebLLM 10x faster on a 16GB mem laptop?)"}),"\n",(0,i.jsx)(n.li,{children:"Scaling and accelerating the training for MOE Models"}),"\n",(0,i.jsx)(n.li,{children:"Training with heterogenous hardware"}),"\n",(0,i.jsx)(n.li,{children:"Scalable system to jointly train retrieval embeddings and LLM modules"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);