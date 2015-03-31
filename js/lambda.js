// Copyright (c) 2010 Google All rights reserved.
// Author: Abdul Akbar Banwa
// Website: aksn1p3r.blogspot.com 
// Twitter: http://twitter.com/aksn1p3r


function IncognitoSearch(ocd) {
  var launchGame1 = 'steam://run/570';
  chrome.windows.create({"url": serviceCall1, "incognito": true});
}

chrome.contextMenus.create({
  "title": "Search Google Incognito for '%s'", // 
  "contexts":["selection"],
  "onclick": IncognitoSearch 
});


