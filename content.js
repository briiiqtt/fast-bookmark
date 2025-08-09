// document.addEventListener('keydown', async (e) => {
//   const hotkey = 'd';
//   if (e.repeat || !e.ctrlKey || e.key.toLowerCase() != hotkey) return;

//   chrome.runtime.sendMessage(1, (response) => {
//     if (chrome.runtime.lastError) {
//       console.error('send failed:', chrome.runtime.lastError);
//     } else {
//       console.log('response:', response);
//     }
//   });
// });