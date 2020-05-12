document.addEventListener('DOMContentLoaded', function () {

    // only 1 button (invoke alert box) so this is the lazy way to find it
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick () {
      // looking for the current active tab open
      chrome.tabs.query({currentWindow: true, active: true}, 
      function (tabs) {
        // sending a message to our content tab - received by content.js function
        chrome.tabs.sendMessage(tabs[0].id, 'hi from the chrome extension')
      })
    }
  }, false)