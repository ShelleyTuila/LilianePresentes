window.dhtmlHistory={isIE:!1,isOpera:!1,isSafari:!1,isKonquerer:!1,isGecko:!1,isSupported:!1,isCreated:!1,create:function(t){t&&(this.blankPagePath=t.blankPagePath||"","/"!=this.blankPagePath.charAt(this.blankPagePath.length-1)&&(this.blankPagePath=this.blankPagePath+"/"));var i=this,e=navigator.userAgent.toLowerCase(),a=(navigator.platform.toLowerCase(),navigator.vendor||"");"KDE"===a?(this.isKonqueror=!0,this.isSupported=!1):"undefined"!=typeof window.opera?(this.isOpera=!0,this.isSupported=!0):gx.util.browser.isIE()?(this.isIE=!0,this.isSupported=!0):a.indexOf("Apple Computer, Inc.")>-1?(this.isSafari=!0,this.isSupported=!0):-1!=e.indexOf("gecko")?(this.isGecko=!0,this.isSupported=!0):e.indexOf("chrome")>-1&&(this.isSafari=!0,this.isSupported=!0),window.historyStorage.setup(t,this.isIE),this.isSafari?this.createSafari():this.isOpera&&this.createOpera();var r=this.getCurrentLocation();this.currentLocation=r,this.isIE&&this.createIE(r);var s=function(){i.firstLoad=null};this.addEventListener(window,"unload",s),this.isIE?this.ignoreLocationChange=!0:historyStorage.hasKey(this.PAGELOADEDSTRING)?(this.ignoreLocationChange=!1,this.fireOnNewListener=!0):(this.ignoreLocationChange=!0,this.firstLoad=!0,historyStorage.put(this.PAGELOADEDSTRING,!0));var o=function(){i.checkLocation()};this.isCreated=!0,this.locationHandlerInterval=setInterval(o,10)},destroy:function(){this.locationHandlerInterval&&(this.isCreated=!1,clearInterval(this.locationHandlerInterval))},initialize:function(){this.isIE&&(historyStorage.hasKey(this.PAGELOADEDSTRING)?(this.fireOnNewListener=!0,this.firstLoad=!1):(this.fireOnNewListener=!1,this.firstLoad=!0,historyStorage.put(this.PAGELOADEDSTRING,!0)))},addListener:function(t){this.listener=t,this.fireOnNewListener&&(this.fireHistoryEvent(this.currentLocation),this.fireOnNewListener=!1)},addEventListener:function(t,i,e){t.addEventListener?t.addEventListener(i,e,!1):t.attachEvent&&t.attachEvent("on"+i,function(){e(window.event)})},add:function(t,i){if(this.isSafari)t=this.removeHash(t),historyStorage.put(t,i),this.currentLocation=t,window.location.hash=t,this.putSafariState(t);else{var e=this,a=function(){if(e.currentWaitTime>0&&(e.currentWaitTime=e.currentWaitTime-e.waitTime),t=e.removeHash(t),document.getElementById(t)&&e.debugMode){var a="Exception: History locations can not have the same value as _any_ IDs that might be in the document, due to a bug in IE; please ask the developer to choose a history location that does not match any HTML IDs in this document. The following ID is already taken and cannot be a location: "+t;throw new Error(a)}historyStorage.put(t,i),e.ignoreLocationChange=!0,e.ieAtomicLocationChange=!0,e.currentLocation=t,window.location.hash=t,e.isIE&&(e.iframe.src=e.blankPagePath+"blank.html?"+t),e.ieAtomicLocationChange=!1};window.setTimeout(a,this.currentWaitTime),this.currentWaitTime=this.currentWaitTime+this.waitTime}},isFirstLoad:function(){return this.firstLoad},getVersion:function(){return"0.6"},getCurrentLocation:function(){return this.getCurrentHash()},getCurrentHash:function(){var t=window.location.href,i=t.indexOf("#");return i>=0?t.substr(i+1):""},PAGELOADEDSTRING:"DhtmlHistory_pageLoaded",listener:null,waitTime:200,currentWaitTime:0,currentLocation:null,iframe:null,safariHistoryStartPoint:null,safariStack:null,safariLength:null,ignoreLocationChange:null,fireOnNewListener:null,firstLoad:null,ieAtomicLocationChange:null,createIE:function(t){this.waitTime=400;var i=(historyStorage.debugMode?"width: 800px;height:80px;border:1px solid black;":historyStorage.hideStyles,"rshHistoryFrame"),e=document.createElement("iframe");e.setAttribute("id",i),e.style.border="0px",e.style.width="0px",e.style.height="0px",e.src=this.blankPagePath+"blank.html?"+t;var a=function(){this.iframe=document.body.appendChild(e)};document.body?a.call(this,e):gx.evt.on_ready(this,a.closure(this,[e]))},createOpera:function(){this.waitTime=400;var t='<img src="javascript:location.href=\'javascript:dhtmlHistory.checkLocation();\';" style="'+historyStorage.hideStyles+'" />';document.body.innerHTML+=t},createSafari:function(){var t=function(){var t="rshSafariStack",i="rshSafariLength",e=(historyStorage.debugMode?historyStorage.showStyles:historyStorage.hideStyles,historyStorage.debugMode?"width:800px;height:20px;border:1px solid black;margin:0;padding:0;":historyStorage.hideStyles),a='<input type="text" style="'+e+'" id="'+t+'" value="[]"/><input type="text" style="'+e+'" id="'+i+'" value=""/>',r=document.createElement("div");r.innerHTML=a,document.forms[0].appendChild(r),this.safariStack=document.getElementById(t),this.safariLength=document.getElementById(i),historyStorage.hasKey(this.PAGELOADEDSTRING)?this.safariHistoryStartPoint=this.safariLength.value:(this.safariHistoryStartPoint=history.length,this.safariLength.value=this.safariHistoryStartPoint)};gx.evt.on_ready(this,t.closure(this,[]))},getSafariStack:function(){var t=this.safariStack.value;return historyStorage.fromJSON(t)},getSafariState:function(){var t=this.getSafariStack(),i=t[history.length-this.safariHistoryStartPoint-1];return i},putSafariState:function(t){var i=this.getSafariStack();i[history.length-this.safariHistoryStartPoint]=t,this.safariStack.value=historyStorage.toJSON(i)},fireHistoryEvent:function(t){var i=historyStorage.get(t);this.listener.call(null,t,i)},checkLocation:function(){if(!this.isIE&&this.ignoreLocationChange)return this.ignoreLocationChange=!1,void(this.currentLocation=this.getCurrentLocation());if(this.isIE||!this.ieAtomicLocationChange){var t=this.getCurrentLocation();if(t!=this.currentLocation){if(this.ieAtomicLocationChange=!0,this.isIE&&this.getIframeHash()!=t)this.iframe.src=this.blankPagePath+"blank.html?"+t;else if(this.isIE)return;this.currentLocation=t,this.ieAtomicLocationChange=!1,this.fireHistoryEvent(t)}}},getIframeHash:function(){var t=this.iframe.contentWindow.document,i=String(t.location.search);return 1==i.length&&"?"==i.charAt(0)?i="":i.length>=2&&"?"==i.charAt(0)&&(i=i.substring(1)),i},removeHash:function(t){var i;return i=null===t||void 0===t?null:""===t?"":1==t.length&&"#"==t.charAt(0)?"":t.length>1&&"#"==t.charAt(0)?t.substring(1):t},iframeLoaded:function(t){if(this.ignoreLocationChange)return void(this.ignoreLocationChange=!1);var i=String(t.search);1==i.length&&"?"==i.charAt(0)?i="":i.length>=2&&"?"==i.charAt(0)&&(i=i.substring(1)),window.location.hash=i,this.fireHistoryEvent(i)}},window.historyStorage={setup:function(t){"undefined"!=typeof t&&(t.debugMode&&(this.debugMode=t.debugMode),t.toJSON&&(this.toJSON=t.toJSON),t.fromJSON&&(this.fromJSON=t.fromJSON));var i="rshStorageField",e=(this.debugMode?historyStorage.showStyles:historyStorage.hideStyles,historyStorage.debugMode?"width: 800px;height:80px;border:1px solid black;":historyStorage.hideStyles);this.storageField=document.createElement("textarea"),this.storageField.setAttribute("id",i),this.storageField.setAttribute("style",e),this.storageField.style.visibility="hidden";var a=function(t){document.forms[0].appendChild(t),"undefined"!=typeof window.opera&&t.focus()};document.forms[0]?a(this.storageField):gx.evt.on_ready(this,a.closure(this,[this.storageField]))},put:function(t,i){this.assertValidKey(t),this.hasKey(t)&&this.remove(t),this.storageHash[t]=i,this.saveHashTable()},get:function(t){this.assertValidKey(t),this.loadHashTable();var i=this.storageHash[t];return void 0===i&&(i=null),i},remove:function(t){this.assertValidKey(t),this.loadHashTable(),delete this.storageHash[t],this.saveHashTable()},reset:function(){this.storageField.value="",this.storageHash={}},hasKey:function(t){return this.assertValidKey(t),this.loadHashTable(),"undefined"!=typeof this.storageHash[t]},isValidKey:function(t){return"string"==typeof t},showStyles:"border:0;margin:0;padding:0;",hideStyles:"left:-1000px;top:-1000px;width:1px;height:1px;border:0;position:absolute;",debugMode:!1,storageHash:{},hashLoaded:!1,storageField:null,assertValidKey:function(t){var i=this.isValidKey(t);if(!i&&this.debugMode)throw new Error("Please provide a valid key for window.historyStorage. Invalid key = "+t+".")},loadHashTable:function(){if(!this.hashLoaded){var t=this.storageField.value;""!==t&&null!==t&&(this.storageHash=this.fromJSON(t),this.hashLoaded=!0)}},saveHashTable:function(){this.loadHashTable();var t=this.toJSON(this.storageHash);this.storageField.value=t},toJSON:function(t){return t.toJSONString()},fromJSON:function(t){return t.parseJSON()}};