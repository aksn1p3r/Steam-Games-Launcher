// Copyright (c) 2010 Google All rights reserved.
// Author: Abdul Akbar Banwa
// Website: aksn1p3r.blogspot.com 
// Twitter: http://twitter.com/aksn1p3r

function readRegion(callback) {
  // Use default value = '.com' 
  chrome.storage.sync.get({
    userRegion: '.com',
  }, function(items) {
    // The value is usable here..
    callback(items.userRegion);
  });
  // But not here
}
