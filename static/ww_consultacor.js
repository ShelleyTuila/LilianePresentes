gx.evt.autoSkip=!1;
gx.define("ww_consultacor",!1,function(){this.ServerClass="ww_consultacor";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e11292_client=function(){this.executeServerEvent("'DOINSERT'",false)};this.e15292_client=function(a){this.executeServerEvent("ENTER",true,a)};this.e16292_client=
function(a){this.executeServerEvent("CANCEL",true,a)};var b=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,23,24,25,26,27];this.GXLastCtrlId=27;var c=this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",22,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"ww_consultacor",[],false,1,false,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);c.addSingleLineEdit(144,23,"CORES_ID","C\u00f3digo interno",
"","CORES_ID","int",0,"px",4,4,"right",null,[],144,"CORES_ID",true,0,false,false,"Attribute",1,"WWColumn WWOptionalColumn");c.addSingleLineEdit(145,24,"CORES_DESCRICAO","Descri\u00e7\u00e3o","","CORES_DESCRICAO","svchar",0,"px",100,80,"left",null,[],145,"CORES_DESCRICAO",true,0,false,false,"DescriptionAttribute",1,"WWColumn");c.addSingleLineEdit(147,25,"CORES_DATAHORA_INCLUSAO","Data","","CORES_DATAHORA_INCLUSAO","dtime",0,"px",14,14,"right",null,[],147,"CORES_DATAHORA_INCLUSAO",true,5,false,false,
"Attribute",1,"WWColumn WWOptionalColumn");c.addBitmap("&Update","vUPDATE",26,0,"px",17,"px",null,"","","ActionAttribute","WWActionColumn");c.addBitmap("&Delete","vDELETE",27,0,"px",17,"px",null,"","","DeleteAttribute","WWActionColumn");this.setGrid(c);b[2]={fld:"",grid:0};b[3]={fld:"MAIN",grid:0};b[4]={fld:"",grid:0};b[5]={fld:"",grid:0};b[6]={fld:"GRIDTABLE",grid:0};b[7]={fld:"",grid:0};b[8]={fld:"",grid:0};b[10]={fld:"",grid:0};b[11]={fld:"",grid:0};b[12]={fld:"TITLETEXT",format:0,grid:0};b[13]=
{fld:"",grid:0};b[14]={fld:"",grid:0};b[16]={fld:"",grid:0};b[17]={fld:"",grid:0};b[18]={fld:"",grid:0};b[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCORES_DESCRICAO",gxz:"ZV14CORES_DESCRICAO",gxold:"OV14CORES_DESCRICAO",gxvar:"AV14CORES_DESCRICAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV14CORES_DESCRICAO=a},v2z:function(a){gx.O.ZV14CORES_DESCRICAO=a},v2c:function(){gx.fn.setControlValue("vCORES_DESCRICAO",
gx.O.AV14CORES_DESCRICAO,0)},c2v:function(){gx.O.AV14CORES_DESCRICAO=this.val()},val:function(){return gx.fn.getControlValue("vCORES_DESCRICAO")},nac:gx.falseFn};b[20]={fld:"",grid:0};b[21]={fld:"",grid:0};b[23]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CORES_ID",gxz:"Z144CORES_ID",gxold:"O144CORES_ID",gxvar:"A144CORES_ID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A144CORES_ID=
gx.num.intval(a)},v2z:function(a){gx.O.Z144CORES_ID=gx.num.intval(a)},v2c:function(a){gx.fn.setGridControlValue("CORES_ID",a||gx.fn.currentGridRowImpl(22),gx.O.A144CORES_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A144CORES_ID=gx.num.intval(this.val())},val:function(a){return gx.fn.getGridIntegerValue("CORES_ID",a||gx.fn.currentGridRowImpl(22),".")},nac:gx.falseFn};b[24]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,
fnc:null,isvalid:null,rgrid:[],fld:"CORES_DESCRICAO",gxz:"Z145CORES_DESCRICAO",gxold:"O145CORES_DESCRICAO",gxvar:"A145CORES_DESCRICAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A145CORES_DESCRICAO=a},v2z:function(a){gx.O.Z145CORES_DESCRICAO=a},v2c:function(a){gx.fn.setGridControlValue("CORES_DESCRICAO",a||gx.fn.currentGridRowImpl(22),gx.O.A145CORES_DESCRICAO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A145CORES_DESCRICAO=
this.val()},val:function(a){return gx.fn.getGridControlValue("CORES_DESCRICAO",a||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};b[25]={lvl:2,type:"dtime",len:8,dec:5,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CORES_DATAHORA_INCLUSAO",gxz:"Z147CORES_DATAHORA_INCLUSAO",gxold:"O147CORES_DATAHORA_INCLUSAO",gxvar:"A147CORES_DATAHORA_INCLUSAO",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",
v2v:function(a){gx.O.A147CORES_DATAHORA_INCLUSAO=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.Z147CORES_DATAHORA_INCLUSAO=gx.fn.toDatetimeValue(a)},v2c:function(a){gx.fn.setGridControlValue("CORES_DATAHORA_INCLUSAO",a||gx.fn.currentGridRowImpl(22),gx.O.A147CORES_DATAHORA_INCLUSAO,0)},c2v:function(){gx.O.A147CORES_DATAHORA_INCLUSAO=gx.fn.toDatetimeValue(this.val())},val:function(a){return gx.fn.getGridDateTimeValue("CORES_DATAHORA_INCLUSAO",a||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};b[26]=
{lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUPDATE",gxz:"ZV15Update",gxold:"OV15Update",gxvar:"AV15Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV15Update=a},v2z:function(a){gx.O.ZV15Update=a},v2c:function(a){gx.fn.setGridMultimediaValue("vUPDATE",a||gx.fn.currentGridRowImpl(22),gx.O.AV15Update,gx.O.AV23Update_GXI)},c2v:function(){gx.O.AV23Update_GXI=this.val_GXI();gx.O.AV15Update=
this.val()},val:function(a){return gx.fn.getGridControlValue("vUPDATE",a||gx.fn.currentGridRowImpl(22))},val_GXI:function(a){return gx.fn.getGridControlValue("vUPDATE_GXI",a||gx.fn.currentGridRowImpl(22))},gxvar_GXI:"AV23Update_GXI",nac:gx.falseFn};b[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDELETE",gxz:"ZV16Delete",gxold:"OV16Delete",gxvar:"AV16Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",
v2v:function(a){gx.O.AV16Delete=a},v2z:function(a){gx.O.ZV16Delete=a},v2c:function(a){gx.fn.setGridMultimediaValue("vDELETE",a||gx.fn.currentGridRowImpl(22),gx.O.AV16Delete,gx.O.AV24Delete_GXI)},c2v:function(){gx.O.AV24Delete_GXI=this.val_GXI();gx.O.AV16Delete=this.val()},val:function(a){return gx.fn.getGridControlValue("vDELETE",a||gx.fn.currentGridRowImpl(22))},val_GXI:function(a){return gx.fn.getGridControlValue("vDELETE_GXI",a||gx.fn.currentGridRowImpl(22))},gxvar_GXI:"AV24Delete_GXI",nac:gx.falseFn};
this.OV14CORES_DESCRICAO=this.ZV14CORES_DESCRICAO=this.AV14CORES_DESCRICAO="";this.O144CORES_ID=this.Z144CORES_ID=0;this.O145CORES_DESCRICAO=this.Z145CORES_DESCRICAO="";this.Z147CORES_DATAHORA_INCLUSAO=gx.date.nullDate();this.O147CORES_DATAHORA_INCLUSAO=gx.date.nullDate();this.A150CORES_STATUS_REGISTRO=this.AV14CORES_DESCRICAO=this.OV16Delete=this.ZV16Delete=this.OV15Update=this.ZV15Update="";this.A144CORES_ID=0;this.A145CORES_DESCRICAO="";this.A147CORES_DATAHORA_INCLUSAO=gx.date.nullDate();this.AV22Pgmname=
this.AV16Delete=this.AV15Update="";this.Events={e11292_client:["'DOINSERT'",true],e15292_client:["ENTER",true],e16292_client:["CANCEL",true]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A144CORES_ID",fld:"CORES_ID"},{av:"AV22Pgmname",fld:"vPGMNAME"},{av:"AV14CORES_DESCRICAO",fld:"vCORES_DESCRICAO"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];
this.EvtParms["GRID.LOAD"]=[[{av:"A144CORES_ID",fld:"CORES_ID"}],[{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A144CORES_ID",fld:"CORES_ID"}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A144CORES_ID",fld:"CORES_ID"},{av:"AV22Pgmname",
fld:"vPGMNAME"},{av:"AV14CORES_DESCRICAO",fld:"vCORES_DESCRICAO"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A144CORES_ID",fld:"CORES_ID"},{av:"AV22Pgmname",fld:"vPGMNAME"},{av:"AV14CORES_DESCRICAO",fld:"vCORES_DESCRICAO"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",
fld:"vGRIDSTATEFILTERVALUE"}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A144CORES_ID",fld:"CORES_ID"},{av:"AV22Pgmname",fld:"vPGMNAME"},{av:"AV14CORES_DESCRICAO",fld:"vCORES_DESCRICAO"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},
{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A144CORES_ID",fld:"CORES_ID"},{av:"AV22Pgmname",fld:"vPGMNAME"},{av:"AV14CORES_DESCRICAO",fld:"vCORES_DESCRICAO"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];this.setVCMap("AV22Pgmname","vPGMNAME",0,"char");this.setVCMap("AV22Pgmname","vPGMNAME",0,"char");c.addRefreshingVar(this.GXValidFnc[19]);c.addRefreshingVar({rfrVar:"AV15Update",rfrProp:"Value",gxAttId:"Update"});c.addRefreshingVar({rfrVar:"AV16Delete",
rfrProp:"Value",gxAttId:"Delete"});c.addRefreshingVar({rfrVar:"AV22Pgmname"});c.addRefreshingVar({rfrVar:"A144CORES_ID",rfrProp:"Value",gxAttId:"144"});this.InitStandaloneVars()});gx.createParentObj(ww_consultacor);
