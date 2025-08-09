chrome.commands.onCommand.addListener(async (command) => {
  console.log(command);
  if (command === 'add-bookmark') {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      if (!tab || !tab.url) return;

      // 북마크 중복 체크
      chrome.bookmarks.search({ url: tab.url }, (results) => {
        if (results.length > 0) {
          console.log('이미 북마크에 존재함');
          return;
        }
        // 북마크 생성
        chrome.bookmarks.create(
          {
            parentId: '1', // 기본 북마크 바
            title: tab.title || tab.url,
            url: tab.url,
          },
          (bookmark) => {
            console.log('북마크 추가 완료:', bookmark);
          }
        );
      });
    } catch (e) {
      console.error(e);
    }
  }
});
