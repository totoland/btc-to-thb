findExchangeRate = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://coinprice.report/btc/thb/" + query});
};

chrome.contextMenus.create({
  title: "Covert to thai baht",
  contexts:["selection"],
  onclick: findExchangeRate
});