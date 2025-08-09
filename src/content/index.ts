// import { Req, AckType, ReqType } from '../common/message.js';

// document.addEventListener('keydown', async (e) => {
//   const hotkey: string = 'd';

//   if (e.repeat || !e.ctrlKey || e.key.toLowerCase() != hotkey) return;

//   chrome.runtime.sendMessage(new Req(ReqType.SAVE));
// });

// chrome.runtime.onMessage.addListener((msg, _sender, _sendResponse) => {
//   if (msg.command === AckType.SAVED) {
//     alert('good');
//   }
// });
