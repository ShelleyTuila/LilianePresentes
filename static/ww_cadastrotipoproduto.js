gx.evt.autoSkip=!1;
gx.define("ww_cadastrotipoproduto",!1,function(){this.ServerClass="ww_cadastrotipoproduto";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9isErro=gx.fn.getControlValue("vISERRO");this.AV5TIPO_PRODUTO=gx.fn.getControlValue("vTIPO_PRODUTO");this.AV6TIPO_PRODUTO_ID=gx.fn.getIntegerValue("vTIPO_PRODUTO_ID",
".")};this.s112_client=function(){this.AV5TIPO_PRODUTO={TIPO_PRODUTO_ID:0,TIPO_PRODUTO_DESCRICAO:"",TIPO_PRODUTO_USUARIO_INCLUSAO:"",TIPO_PRODUTO_DATAHORA_INCLUSAO:"",TIPO_PRODUTO_USUARIO_ALTERACAO:"",TIPO_PRODUTO_DATAHORA_ALTERACAO:"",TIPO_PRODUTO_STATUS_REGISTRO:""}};this.s132_client=function(){gx.fn.setCtrlProperty("CTLTIPO_PRODUTO_DESCRICAO","Enabled",false);gx.fn.setCtrlProperty("BTNENTER","Visible",false)};this.s142_client=function(){this.AV9isErro=false;if(""==this.AV5TIPO_PRODUTO.TIPO_PRODUTO_DESCRICAO){this.AV9isErro=
true;this.addMessage("Descri\u00e7\u00e3o \u00e9 obrigat\u00f3rio.")}};this.e121p2_client=function(){this.executeServerEvent("ENTER",true)};this.e141p1_client=function(){this.executeServerEvent("CANCEL",true)};var a=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13];this.GXLastCtrlId=13;a[2]={fld:"",grid:0};a[3]={fld:"MAINTABLE",grid:0};a[4]={fld:"",grid:0};a[5]={fld:"",grid:0};a[6]={fld:"TITLE",format:0,grid:0};a[7]={fld:"",grid:0};a[8]={fld:"",grid:0};a[9]={fld:"",grid:0};a[10]={lvl:0,
type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPO_PRODUTO_DESCRICAO",gxz:"ZV13GXV1",gxold:"OV13GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV1=a},v2z:function(a){gx.O.ZV13GXV1=a},v2c:function(){gx.fn.setControlValue("CTLTIPO_PRODUTO_DESCRICAO",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLTIPO_PRODUTO_DESCRICAO")},nac:gx.falseFn};a[11]={fld:"",grid:0};
a[12]={fld:"",grid:0};a[13]={fld:"",grid:0};this.GXV1=this.OV13GXV1=this.ZV13GXV1=this.GXV1="";this.AV6TIPO_PRODUTO_ID=0;this.Gx_mode="";this.AV9isErro=false;this.AV5TIPO_PRODUTO={};this.Events={e121p2_client:["ENTER",true],e141p1_client:["CANCEL",true]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV9isErro",fld:"vISERRO"},{av:"AV5TIPO_PRODUTO",fld:"vTIPO_PRODUTO"}],[{av:"AV5TIPO_PRODUTO",fld:"vTIPO_PRODUTO"},{av:"AV9isErro",fld:"vISERRO"},{av:"AV7Messages",
fld:"vMESSAGES"},{av:"AV14GXV2",fld:"vGXV2"},{av:"AV8Message",fld:"vMESSAGE"}]];this.EnterCtrl=["BTNENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.setVCMap("AV9isErro","vISERRO",0,"boolean");this.setVCMap("AV5TIPO_PRODUTO","vTIPO_PRODUTO",0,"TIPO_PRODUTO");this.setVCMap("AV6TIPO_PRODUTO_ID","vTIPO_PRODUTO_ID",0,"int");this.addBCProperty("Tipo_produto",["TIPO_PRODUTO_DESCRICAO"],this.GXValidFnc[10],"AV5TIPO_PRODUTO");this.InitStandaloneVars()});gx.createParentObj(ww_cadastrotipoproduto);