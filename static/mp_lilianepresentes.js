gx.evt.autoSkip=!1;
gx.define("mp_lilianepresentes",!1,function(){this.ServerClass="mp_lilianepresentes";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.IsMasterPage=true;this.skipOnEnter=this.hasEnterEvent=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){};this.e13082_client=function(){this.executeServerEvent("LOGOUT_MPAGE",true)};this.e15082_client=function(){this.executeServerEvent("ENTER_MPAGE",true)};this.e16082_client=
function(){this.executeServerEvent("CANCEL_MPAGE",true)};var b=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,29,30];this.GXLastCtrlId=30;var a=this.MPSMOOTHNAVMENUContainer=gx.uc.getNew(this,22,0,"SmoothNavMenu","MPSMOOTHNAVMENUContainer","Smoothnavmenu");a.setProp("Width","Width","470","str");a.setProp("Height","Height","37","str");a.setProp("Title","Title","Title","str");a.setProp("Orientation","Orientation","h","str");a.setProp("HeaderNormalBackground",
"Headernormalbackground",gx.color.fromRGB(255,255,255),"color");a.setProp("HeaderHoverBackground","Headerhoverbackground",gx.color.fromRGB(224,224,224),"color");a.setProp("NormalBackground","Normalbackground",gx.color.fromRGB(255,255,255),"color");a.setProp("HoverBackground","Hoverbackground",gx.color.fromRGB(224,224,224),"color");a.setProp("MenuBorderColor","Menubordercolor",gx.color.fromRGB(255,255,255),"color");a.setProp("FontHeaderNormalColor","Fontheadernormalcolor",gx.color.fromRGB(128,128,
128),"color");a.setProp("FontHeaderHoverColor","Fontheaderhovercolor",gx.color.fromRGB(128,128,128),"color");a.setProp("HeaderBackgroundImage","Headerbackgroundimage","","str");a.setProp("HeaderVerticalPadding","Headerverticalpadding","Default","str");a.setProp("FontItemNormalColor","Fontitemnormalcolor",gx.color.fromRGB(128,128,128),"color");a.setProp("FontItemHoverColor","Fontitemhovercolor",gx.color.fromRGB(128,128,128),"color");a.setProp("ItemVerticalPadding","Itemverticalpadding","Default","str");
a.addV2CFunction("AV7SmoothNavMenuData","vSMOOTHNAVMENUDATA_MPAGE","SetMenuData");a.addC2VFunction(function(a){a.ParentObject.AV7SmoothNavMenuData=a.GetMenuData();gx.fn.setControlValue("vSMOOTHNAVMENUDATA_MPAGE",a.ParentObject.AV7SmoothNavMenuData)});a.addV2CFunction("AV8SmoothNavMenuSelectedItem","vSMOOTHNAVMENUSELECTEDITEM_MPAGE","SetSelectedItem");a.addC2VFunction(function(a){a.ParentObject.AV8SmoothNavMenuSelectedItem=a.GetSelectedItem();gx.fn.setControlValue("vSMOOTHNAVMENUSELECTEDITEM_MPAGE",
a.ParentObject.AV8SmoothNavMenuSelectedItem)});a.setProp("Arrows","Arrows",true,"bool");a.setProp("DownArrow","Downarrow","","str");a.setProp("RightArrow","Rightarrow","","str");a.setProp("Visible","Visible",true,"bool");a.setProp("Enabled","Enabled",true,"boolean");a.setProp("Class","Class","","char");a.setC2ShowFunction(function(a){a.show()});this.setUserControl(a);a=this.MPSCAMESSAGEContainer=gx.uc.getNew(this,31,0,"scaMessage","MPSCAMESSAGEContainer","Scamessage");a.setProp("Width","Width","312",
"str");a.setProp("Height","Height","62","str");a.setProp("MessageType","Messagetype","pinesnotify","str");a.setProp("AnimationType","Animationtype","fade","str");a.setProp("DelayUntilClose","Delayuntilclose",4E3,"num");a.setProp("AutoClose","Autoclose",true,"bool");a.setProp("ShowCloseButton","Showclosebutton",true,"bool");a.setProp("StartPosition","Startposition","TopRight","str");a.setProp("AnimationSpeed","Animationspeed",600,"num");a.setProp("DisplayHistoryMenu","Displayhistorymenu",true,"bool");
a.setProp("NextMessagePosition","Nextmessageposition","down","str");a.setProp("NiftyAnimationType","Niftyanimationtype","md-effect-1","str");a.setProp("NiftyDefaultMessageTitle","Niftydefaultmessagetitle","Message Title","str");a.setProp("NiftyMessageTitleTag","Niftymessagetitletag","#T#","str");a.setProp("NiftyButtonText","Niftybuttontext","Close me!","str");a.setProp("DialogDefaultMessageTitle","Dialogdefaultmessagetitle","Message Title","str");a.setProp("DialogMessageTitleTag","Dialogmessagetitletag",
"#T#","str");a.setProp("Visible","Visible",true,"bool");a.setProp("Enabled","Enabled",true,"boolean");a.setProp("Class","Class","","char");a.setC2ShowFunction(function(a){a.show()});this.setUserControl(a);b[2]={fld:"",grid:0};b[3]={fld:"MAINTABLE",grid:0};b[4]={fld:"",grid:0};b[5]={fld:"",grid:0};b[6]={fld:"HEADER",grid:0};b[7]={fld:"",grid:0};b[8]={fld:"",grid:0};b[9]={fld:"APPLICATIONHEADER",format:0,grid:0};b[10]={fld:"",grid:0};b[11]={fld:"TABLE1",grid:0};b[12]={fld:"",grid:0};b[13]={fld:"",grid:0};
b[14]={fld:"USERLOGIN",format:0,grid:0};b[15]={fld:"",grid:0};b[16]={fld:"LOGOUT",grid:0};b[17]={fld:"",grid:0};b[18]={fld:"",grid:0};b[19]={fld:"MENU",grid:0};b[20]={fld:"",grid:0};b[21]={fld:"",grid:0};b[23]={fld:"",grid:0};b[24]={fld:"",grid:0};b[25]={fld:"CONTENT",grid:0};b[26]={fld:"",grid:0};b[27]={fld:"",grid:0};b[29]={fld:"",grid:0};b[30]={fld:"",grid:0};this.AV7SmoothNavMenuData=[];this.Events={e13082_client:["LOGOUT_MPAGE",true],e15082_client:["ENTER_MPAGE",true],e16082_client:["CANCEL_MPAGE",
true]};this.EvtParms.REFRESH_MPAGE=[[],[]];this.EvtParms.LOGOUT_MPAGE=[[],[]];this.InitStandaloneVars()});gx.setMasterPage(new mp_lilianepresentes);