gx.evt.autoSkip=!1;
gx.define("recentlinks",!0,function(b){this.ServerClass="recentlinks";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.setCmpContext(b);this.ReadonlyForm=true;this.skipOnEnter=this.hasEnterEvent=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){this.AV6FormCaption=gx.fn.getControlValue("vFORMCAPTION");this.AV7FormPgmName=gx.fn.getControlValue("vFORMPGMNAME")};this.e13022_client=function(a){this.executeServerEvent("ENTER",true,
a)};this.e14022_client=function(a){this.executeServerEvent("CANCEL",true,a)};b=this.GXValidFnc=[];this.GXCtrlIds=[2,5,10,12,14];this.GXLastCtrlId=14;var a=this.LinksContainer=new gx.grid.grid(this,2,"WbpLvl2",7,"Links","Links","LinksContainer",this.CmpContext,this.IsMasterPage,"recentlinks",[],true,0,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);a.startRow("","","","","","");a.startCell("","","","","","","37px","","","");a.addTextBlock("PLACE",
null);a.endCell();a.startCell("","","","","","","4px","","","td100");a.addTextBlock("PIPE",null);a.endCell();a.endRow();this.setGrid(a);b[2]={fld:"TABLE",grid:0};b[5]={fld:"RECENTTEXT",format:0,grid:0};b[10]={fld:"PLACE",format:0,grid:7};b[12]={fld:"PIPE",format:0,grid:7};b[14]={fld:"BOTTOMLINE",grid:0};this.AV7FormPgmName=this.AV6FormCaption="";this.Events={e13022_client:["ENTER",true],e14022_client:["CANCEL",true]};this.EvtParms.REFRESH=[[{av:"LINKS_nFirstRecordOnPage"},{av:"LINKS_nEOF"},{av:"AV6FormCaption",
fld:"vFORMCAPTION"},{av:"sPrefix"}],[]];this.EvtParms["LINKS.LOAD"]=[[{av:"AV6FormCaption",fld:"vFORMCAPTION"}],[{av:"AV11RecentLinksItems",fld:"vRECENTLINKSITEMS"},{av:"AV9i",fld:"vI"},{av:"AV12RecentLinksItem",fld:"vRECENTLINKSITEM"},{av:"AV13PlaceCaption",fld:"vPLACECAPTION"},{av:'gx.fn.getCtrlProperty("PLACE","Caption")',ctrl:"PLACE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PLACE","Link")',ctrl:"PLACE",prop:"Link"}]];this.setVCMap("AV6FormCaption","vFORMCAPTION",0,"char");this.setVCMap("AV7FormPgmName",
"vFORMPGMNAME",0,"svchar");this.setVCMap("AV6FormCaption","vFORMCAPTION",0,"char");a.addRefreshingVar({rfrVar:"AV6FormCaption"});this.InitStandaloneVars()});
