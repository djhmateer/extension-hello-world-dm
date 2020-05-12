// when a message is sent we will get this function called here 
// alert this message out
chrome.runtime.onMessage.addListener(function (request) {
    console.log(request)
    alert(request)
})

