gx.evt.autoSkip=!1;
gx.define("ww_cadastrocor",!1,function(){this.ServerClass="ww_cadastrocor";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV5CORES=gx.fn.getControlValue("vCORES");this.AV7Messages=gx.fn.getControlValue("vMESSAGES");this.AV6CORES_ID=gx.fn.getIntegerValue("vCORES_ID",".")};
this.s112_client=function(){this.AV5CORES={CORES_ID:0,CORES_DESCRICAO:"",CORES_USUARIO_INCLUSAO:"",CORES_DATAHORA_INCLUSAO:"",CORES_USUARIO_ALTERACAO:"",CORES_DATAHORA_ALTERACAO:"",CORES_STATUS_REGISTRO:""}};this.s132_client=function(){gx.fn.setCtrlProperty("CTLCORES_ID","Enabled",false);gx.fn.setCtrlProperty("CTLCORES_DESCRICAO","Enabled",false)};this.s152_client=function(){for(this.AV14GXV3=gx.num.trunc(1,0);this.AV14GXV3<=this.AV7Messages.length;){this.AV8Message=this.AV7Messages[this.AV14GXV3-
1];this.addMessage(this.AV8Message.Description);this.AV14GXV3=gx.num.trunc(this.AV14GXV3+1,0)}};this.e122a2_client=function(){this.executeServerEvent("ENTER",true)};this.e142a1_client=function(){this.executeServerEvent("CANCEL",true)};var a=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];this.GXLastCtrlId=17;a[2]={fld:"",grid:0};a[3]={fld:"MAINTABLE",grid:0};a[4]={fld:"",grid:0};a[5]={fld:"",grid:0};a[6]={fld:"TITLE",format:0,grid:0};a[7]={fld:"",grid:0};a[8]={fld:"",grid:0};
a[9]={fld:"",grid:0};a[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCORES_ID",gxz:"ZV12GXV1",gxold:"OV12GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV1=gx.num.intval(a)},v2z:function(a){gx.O.ZV12GXV1=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("CTLCORES_ID",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLCORES_ID",
".")},nac:gx.falseFn};a[11]={fld:"",grid:0};a[12]={fld:"",grid:0};a[13]={fld:"",grid:0};a[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCORES_DESCRICAO",gxz:"ZV13GXV2",gxold:"OV13GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV2=a},v2z:function(a){gx.O.ZV13GXV2=a},v2c:function(){gx.fn.setControlValue("CTLCORES_DESCRICAO",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(){return gx.fn.getControlValue("CTLCORES_DESCRICAO")},
nac:gx.falseFn};a[15]={fld:"",grid:0};a[16]={fld:"",grid:0};a[17]={fld:"",grid:0};this.OV12GXV1=this.ZV12GXV1=this.GXV1=0;this.OV13GXV2=this.ZV13GXV2=this.GXV2="";this.GXV1=0;this.GXV2="";this.AV6CORES_ID=0;this.Gx_mode="";this.AV5CORES={};this.AV7Messages=[];this.AV8Message={};this.AV14GXV3=0;this.Events={e122a2_client:["ENTER",true],e142a1_client:["CANCEL",true]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV5CORES",fld:"vCORES"},{av:"AV7Messages",fld:"vMESSAGES"}],
[{av:"AV5CORES",fld:"vCORES"},{av:"AV7Messages",fld:"vMESSAGES"},{av:"AV14GXV3",fld:"vGXV3"},{av:"AV8Message",fld:"vMESSAGE"}]];this.EnterCtrl=["BTNENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.setVCMap("AV5CORES","vCORES",0,"CORES");this.setVCMap("AV7Messages","vMESSAGES",0,"CollMessages.Message");this.setVCMap("AV6CORES_ID","vCORES_ID",0,"int");this.addBCProperty("Cores",["CORES_ID"],this.GXValidFnc[10],"AV5CORES");this.addBCProperty("Cores",["CORES_DESCRICAO"],this.GXValidFnc[14],"AV5CORES");
this.InitStandaloneVars()});gx.createParentObj(ww_cadastrocor);
