"use strict";(self.webpackChunkzhenxun_docs=self.webpackChunkzhenxun_docs||[]).push([[4449],{2472:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=s(4848),a=s(8453);const o={title:"\u6d88\u606f\u53d1\u9001",subSidebar:!1},r=void 0,i={id:"development/message",title:"\u6d88\u606f\u53d1\u9001",description:"\u63d2\u4ef6\u5185\u6d88\u606f\u53d1\u9001",source:"@site/docs/development/message.md",sourceDirName:"development",slug:"/development/message",permalink:"/zhenxun_bot/development/message",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/development/message.md",tags:[],version:"current",frontMatter:{title:"\u6d88\u606f\u53d1\u9001",subSidebar:!1},sidebar:"devSidebar",previous:{title:"\u5546\u5e97\u914d\u7f6e",permalink:"/zhenxun_bot/development/shop"},next:{title:"\u6d88\u606f\u64a4\u56de",permalink:"/zhenxun_bot/development/withdraw"}},l={},d=[{value:"\u63d2\u4ef6\u5185\u6d88\u606f\u53d1\u9001",id:"\u63d2\u4ef6\u5185\u6d88\u606f\u53d1\u9001",level:2},{value:"\u8f6c\u53d1\u6d88\u606f",id:"\u8f6c\u53d1\u6d88\u606f",level:2},{value:"\u4e3b\u52a8\u6d88\u606f\u53d1\u9001",id:"\u4e3b\u52a8\u6d88\u606f\u53d1\u9001",level:2},{value:"\u53d1\u9001\u7ed9\u8d85\u7ea7\u7528\u6237",id:"\u53d1\u9001\u7ed9\u8d85\u7ea7\u7528\u6237",level:2},{value:"\u5e7f\u64ad",id:"\u5e7f\u64ad",level:2}];function m(e){const n={code:"code",h2:"h2",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63d2\u4ef6\u5185\u6d88\u606f\u53d1\u9001",children:"\u63d2\u4ef6\u5185\u6d88\u606f\u53d1\u9001"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from nonebot import on_command\nfrom zhenxun.utils.message import MessageUtils\n\n_matcher = on_command(\'test\')\n\n@_matcher.handle()\nasync def _():\n    # \u53d1\u9001\u6587\u672c\n    await MessageUtils.build_message("\u4f60\u597d").send()\n    # \u53d1\u9001\u56fe\u7247\n    # \u56fe\u7247\u6570\u636e\u53ef\u4ee5\u662fBuildImage, bytes, Path, base64, BytesIO\n    img = ...\n    await MessageUtils.build_message(img).send()\n    # \u53d1\u9001\u56fe\u7247\u548c\u6587\u672c\n    await MessageUtils.build_message(["\u4f60\u597d\u554a", img]).send()\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u8f6c\u53d1\u6d88\u606f",children:"\u8f6c\u53d1\u6d88\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from zhenxun.utils.message import MessageUtils\n\n# \u6d88\u606f\u5217\u8868\nmsg_list = ['123', '123', img]\n# \u8f6c\u4e3aalc\u6d88\u606f\nalc_msg = MessageUtils.build_message(msg_list)\n# \u53d1\u9001\u8f6c\u53d1\u6d88\u606f\uff0c\u5934\u50cf\u4e3aqq\u662f`123123123`\u7684\u5934\u50cf\uff0c\u540d\u79f0\u4e3a\u5c0f\u771f\u5bfb\nawait MessageUtils.alc_forward_msg(alc_msg, '123123123', '\u5c0f\u771f\u5bfb').send()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3b\u52a8\u6d88\u606f\u53d1\u9001",children:"\u4e3b\u52a8\u6d88\u606f\u53d1\u9001"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from zhenxun.utils.platform import PlatformUtils\n\n\nawait PlatformUtils.send_message(bot, user_id, group_id, message)\n# \u793a\u4f8b\n# \u5728\u7fa4\u7ec4123123123\u53d1\u9001\u6d88\u606f\nawait PlatformUtils.send_message(bot, None, 123123123, "\u5927\u5bb6\u597d")\n# \u5bf9\u597d\u53cb123123123\u53d1\u9001\u6d88\u606f\nawait PlatformUtils.send_message(bot, 123123123, None, "\u4f60\u597d")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53d1\u9001\u7ed9\u8d85\u7ea7\u7528\u6237",children:"\u53d1\u9001\u7ed9\u8d85\u7ea7\u7528\u6237"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from zhenxun.utils.platform import PlatformUtils\n\nawait PlatformUtils.send_superuser(bot, message, superuser_id)\n# \u793a\u4f8b\n# \u968f\u673a\u53d1\u9001\u7ed9\u4e00\u4e2a\u8d85\u7ea7\u7528\u6237\n# \u9700\u8981\u5728.env.dev\u4e2d\u914d\u7f6e\u597d `PLATFORM_SUPERUSERS`\nawait PlatformUtils.send_superuser(bot, "\u5927\u5bb6\u597d")\n\n# \u53d1\u9001\u7ed9\u6307\u5b9a\u7684\u8d85\u7ea7\u7528\u6237\uff08123123123\uff09\nawait PlatformUtils.send_superuser(bot, "\u5927\u5bb6\u597d", 123123123)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5e7f\u64ad",children:"\u5e7f\u64ad"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# \u5e7f\u64ad\u65b9\u6cd5\nasync def broadcast_group(\n    message: str | UniMessage,\n    bot: Bot | list[Bot] | None = None,\n    bot_id: str | set[str] | None = None,\n    ignore_group: set[int] | None = None,\n    check_func: Callable[[Bot, str], Awaitable] | None = None,\n    log_cmd: str | None = None,\n    platform: Literal["qq", "dodo", "kaiheila"] | None = None,\n):\n    """\u83b7\u53d6\u6240\u6709Bot\u6216\u6307\u5b9aBot\u5bf9\u8c61\u5e7f\u64ad\u7fa4\u804a\n\n    \u53c2\u6570:\n        message: \u5e7f\u64ad\u6d88\u606f\u5185\u5bb9\n        bot: \u6307\u5b9abot\u5bf9\u8c61.\n        bot_id: \u6307\u5b9abot id.\n        ignore_group: \u5ffd\u7565\u7fa4\u804a\u5217\u8868.\n        check_func: \u53d1\u9001\u524d\u5bf9\u7fa4\u804a\u68c0\u6d4b\u65b9\u6cd5\uff0c\u5224\u65ad\u662f\u5426\u53d1\u9001.\n        log_cmd: \u65e5\u5fd7\u6807\u8bb0.\n        platform: \u6307\u5b9a\u5e73\u53f0\n    """\n    ...\n\n\nfrom zhenxun.utils.platform import broadcast_group\n\n# \u53d1\u9001\u7ed9\u6240\u6709\u7fa4\u7ec4\nawait broadcast_group("\u5927\u5bb6\u597d")\n'})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(6540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);