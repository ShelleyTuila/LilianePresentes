gx.evt.autoSkip=!1;
gx.define("ww_consultacliente",!1,function(){this.ServerClass="ww_consultacliente";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e111u2_client=function(){this.executeServerEvent("'DOINSERT'",false)};this.e151u2_client=function(a){this.executeServerEvent("ENTER",true,
a)};this.e161u2_client=function(a){this.executeServerEvent("CANCEL",true,a)};var b=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,23,24,25,26,27,28];this.GXLastCtrlId=28;var c=this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",22,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"ww_consultacliente",[],false,1,false,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);c.addSingleLineEdit(115,23,"CLIENTE_ID",
"C\u00f3digo interno","","CLIENTE_ID","int",0,"px",4,4,"right",null,[],115,"CLIENTE_ID",true,0,false,false,"Attribute",1,"WWColumn WWOptionalColumn");c.addSingleLineEdit(116,24,"CLIENTE_CPF","CPF","","CLIENTE_CPF","char",0,"px",14,14,"left",null,[],116,"CLIENTE_CPF",true,0,false,false,"DescriptionAttribute",1,"WWColumn");c.addSingleLineEdit(117,25,"CLIENTE_NOME","Nome","","CLIENTE_NOME","svchar",0,"px",100,80,"left",null,[],117,"CLIENTE_NOME",true,0,false,false,"Attribute",1,"WWColumn WWOptionalColumn");
c.addSingleLineEdit(129,26,"CLIENTE_DATAHORA_INCLUSAO","Data","","CLIENTE_DATAHORA_INCLUSAO","dtime",0,"px",14,14,"right",null,[],129,"CLIENTE_DATAHORA_INCLUSAO",true,5,false,false,"Attribute",1,"WWColumn WWOptionalColumn");c.addBitmap("&Update","vUPDATE",27,0,"px",17,"px",null,"","","ActionAttribute","WWActionColumn");c.addBitmap("&Delete","vDELETE",28,0,"px",17,"px",null,"","","DeleteAttribute","WWActionColumn");this.setGrid(c);b[2]={fld:"",grid:0};b[3]={fld:"MAIN",grid:0};b[4]={fld:"",grid:0};
b[5]={fld:"",grid:0};b[6]={fld:"GRIDTABLE",grid:0};b[7]={fld:"",grid:0};b[8]={fld:"",grid:0};b[10]={fld:"",grid:0};b[11]={fld:"",grid:0};b[12]={fld:"TITLETEXT",format:0,grid:0};b[13]={fld:"",grid:0};b[14]={fld:"",grid:0};b[16]={fld:"",grid:0};b[17]={fld:"",grid:0};b[18]={fld:"",grid:0};b[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLIENTE_NOME",gxz:"ZV14CLIENTE_NOME",gxold:"OV14CLIENTE_NOME",gxvar:"AV14CLIENTE_NOME",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV14CLIENTE_NOME=a},v2z:function(a){gx.O.ZV14CLIENTE_NOME=a},v2c:function(){gx.fn.setControlValue("vCLIENTE_NOME",gx.O.AV14CLIENTE_NOME,0)},c2v:function(){gx.O.AV14CLIENTE_NOME=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTE_NOME")},nac:gx.falseFn};b[20]={fld:"",grid:0};b[21]={fld:"",grid:0};b[23]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,
rgrid:[],fld:"CLIENTE_ID",gxz:"Z115CLIENTE_ID",gxold:"O115CLIENTE_ID",gxvar:"A115CLIENTE_ID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A115CLIENTE_ID=gx.num.intval(a)},v2z:function(a){gx.O.Z115CLIENTE_ID=gx.num.intval(a)},v2c:function(a){gx.fn.setGridControlValue("CLIENTE_ID",a||gx.fn.currentGridRowImpl(22),gx.O.A115CLIENTE_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A115CLIENTE_ID=gx.num.intval(this.val())},val:function(a){return gx.fn.getGridIntegerValue("CLIENTE_ID",
a||gx.fn.currentGridRowImpl(22),".")},nac:gx.falseFn};b[24]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLIENTE_CPF",gxz:"Z116CLIENTE_CPF",gxold:"O116CLIENTE_CPF",gxvar:"A116CLIENTE_CPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A116CLIENTE_CPF=a},v2z:function(a){gx.O.Z116CLIENTE_CPF=a},v2c:function(a){gx.fn.setGridControlValue("CLIENTE_CPF",a||gx.fn.currentGridRowImpl(22),
gx.O.A116CLIENTE_CPF,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A116CLIENTE_CPF=this.val()},val:function(a){return gx.fn.getGridControlValue("CLIENTE_CPF",a||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};b[25]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLIENTE_NOME",gxz:"Z117CLIENTE_NOME",gxold:"O117CLIENTE_NOME",gxvar:"A117CLIENTE_NOME",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",
inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A117CLIENTE_NOME=a},v2z:function(a){gx.O.Z117CLIENTE_NOME=a},v2c:function(a){gx.fn.setGridControlValue("CLIENTE_NOME",a||gx.fn.currentGridRowImpl(22),gx.O.A117CLIENTE_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A117CLIENTE_NOME=this.val()},val:function(a){return gx.fn.getGridControlValue("CLIENTE_NOME",a||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};b[26]={lvl:2,type:"dtime",len:8,dec:5,sign:false,ro:1,
isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLIENTE_DATAHORA_INCLUSAO",gxz:"Z129CLIENTE_DATAHORA_INCLUSAO",gxold:"O129CLIENTE_DATAHORA_INCLUSAO",gxvar:"A129CLIENTE_DATAHORA_INCLUSAO",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A129CLIENTE_DATAHORA_INCLUSAO=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.Z129CLIENTE_DATAHORA_INCLUSAO=gx.fn.toDatetimeValue(a)},v2c:function(a){gx.fn.setGridControlValue("CLIENTE_DATAHORA_INCLUSAO",
a||gx.fn.currentGridRowImpl(22),gx.O.A129CLIENTE_DATAHORA_INCLUSAO,0)},c2v:function(){gx.O.A129CLIENTE_DATAHORA_INCLUSAO=gx.fn.toDatetimeValue(this.val())},val:function(a){return gx.fn.getGridDateTimeValue("CLIENTE_DATAHORA_INCLUSAO",a||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};b[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUPDATE",gxz:"ZV15Update",gxold:"OV15Update",gxvar:"AV15Update",ucs:[],op:[],ip:[],
nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV15Update=a},v2z:function(a){gx.O.ZV15Update=a},v2c:function(a){gx.fn.setGridMultimediaValue("vUPDATE",a||gx.fn.currentGridRowImpl(22),gx.O.AV15Update,gx.O.AV21Update_GXI)},c2v:function(){gx.O.AV21Update_GXI=this.val_GXI();gx.O.AV15Update=this.val()},val:function(a){return gx.fn.getGridControlValue("vUPDATE",a||gx.fn.currentGridRowImpl(22))},val_GXI:function(a){return gx.fn.getGridControlValue("vUPDATE_GXI",a||gx.fn.currentGridRowImpl(22))},
gxvar_GXI:"AV21Update_GXI",nac:gx.falseFn};b[28]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDELETE",gxz:"ZV16Delete",gxold:"OV16Delete",gxvar:"AV16Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV16Delete=a},v2z:function(a){gx.O.ZV16Delete=a},v2c:function(a){gx.fn.setGridMultimediaValue("vDELETE",a||gx.fn.currentGridRowImpl(22),gx.O.AV16Delete,gx.O.AV22Delete_GXI)},c2v:function(){gx.O.AV22Delete_GXI=
this.val_GXI();gx.O.AV16Delete=this.val()},val:function(a){return gx.fn.getGridControlValue("vDELETE",a||gx.fn.currentGridRowImpl(22))},val_GXI:function(a){return gx.fn.getGridControlValue("vDELETE_GXI",a||gx.fn.currentGridRowImpl(22))},gxvar_GXI:"AV22Delete_GXI",nac:gx.falseFn};this.OV14CLIENTE_NOME=this.ZV14CLIENTE_NOME=this.AV14CLIENTE_NOME="";this.O115CLIENTE_ID=this.Z115CLIENTE_ID=0;this.O117CLIENTE_NOME=this.Z117CLIENTE_NOME=this.O116CLIENTE_CPF=this.Z116CLIENTE_CPF="";this.Z129CLIENTE_DATAHORA_INCLUSAO=
gx.date.nullDate();this.O129CLIENTE_DATAHORA_INCLUSAO=gx.date.nullDate();this.A132CLIENTE_STATUS_REGISTRO=this.AV14CLIENTE_NOME=this.OV16Delete=this.ZV16Delete=this.OV15Update=this.ZV15Update="";this.A115CLIENTE_ID=0;this.A117CLIENTE_NOME=this.A116CLIENTE_CPF="";this.A129CLIENTE_DATAHORA_INCLUSAO=gx.date.nullDate();this.AV20Pgmname=this.AV16Delete=this.AV15Update="";this.Events={e111u2_client:["'DOINSERT'",true],e151u2_client:["ENTER",true],e161u2_client:["CANCEL",true]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},
{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A115CLIENTE_ID",fld:"CLIENTE_ID"},{av:"AV20Pgmname",fld:"vPGMNAME"},{av:"AV14CLIENTE_NOME",fld:"vCLIENTE_NOME"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A115CLIENTE_ID",fld:"CLIENTE_ID"}],[{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',
ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A115CLIENTE_ID",fld:"CLIENTE_ID"}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A115CLIENTE_ID",fld:"CLIENTE_ID"},{av:"AV20Pgmname",fld:"vPGMNAME"},{av:"AV14CLIENTE_NOME",fld:"vCLIENTE_NOME"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];this.EvtParms.GRID_PREVPAGE=
[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A115CLIENTE_ID",fld:"CLIENTE_ID"},{av:"AV20Pgmname",fld:"vPGMNAME"},{av:"AV14CLIENTE_NOME",fld:"vCLIENTE_NOME"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},
{av:"A115CLIENTE_ID",fld:"CLIENTE_ID"},{av:"AV20Pgmname",fld:"vPGMNAME"},{av:"AV14CLIENTE_NOME",fld:"vCLIENTE_NOME"}],[{av:"AV9GridState",fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV15Update",fld:"vUPDATE"},{av:"AV16Delete",fld:"vDELETE"},{av:"A115CLIENTE_ID",fld:"CLIENTE_ID"},{av:"AV20Pgmname",fld:"vPGMNAME"},{av:"AV14CLIENTE_NOME",fld:"vCLIENTE_NOME"}],[{av:"AV9GridState",
fld:"vGRIDSTATE"},{av:"AV10GridStateFilterValue",fld:"vGRIDSTATEFILTERVALUE"}]];this.setVCMap("AV20Pgmname","vPGMNAME",0,"char");this.setVCMap("AV20Pgmname","vPGMNAME",0,"char");c.addRefreshingVar(this.GXValidFnc[19]);c.addRefreshingVar({rfrVar:"AV15Update",rfrProp:"Value",gxAttId:"Update"});c.addRefreshingVar({rfrVar:"AV16Delete",rfrProp:"Value",gxAttId:"Delete"});c.addRefreshingVar({rfrVar:"AV20Pgmname"});c.addRefreshingVar({rfrVar:"A115CLIENTE_ID",rfrProp:"Value",gxAttId:"115"});this.InitStandaloneVars()});
gx.createParentObj(ww_consultacliente);