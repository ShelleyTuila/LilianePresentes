gx.evt.autoSkip=!1;
gx.define("parametrizacao",!1,function(){this.ServerClass="parametrizacao";this.PackageName="com.lilianepresentes";this.setObjectType("trn");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=true;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Parametrizacao_id=function(){gx.ajax.validSrvEvt("dyncall","valid_Parametrizacao_id",["gx.O.A10PARAMETRIZACAO_ID","gx.O.A11PARAMETRIZACAO_NOME","gx.O.A12PARAMETRIZACAO_XML"],
["A11PARAMETRIZACAO_NOME","A12PARAMETRIZACAO_XML","Gx_mode","Z10PARAMETRIZACAO_ID","Z11PARAMETRIZACAO_NOME","Z12PARAMETRIZACAO_XML",["BTN_DELETE","Enabled"],["BTN_ENTER","Enabled"]]);return true};this.e11022_client=function(){this.executeServerEvent("ENTER",true)};this.e12022_client=function(){this.executeServerEvent("CANCEL",true)};var a=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];this.GXLastCtrlId=33;a[2]={fld:"",grid:0};a[3]={fld:"TABLEMAIN",
grid:0};a[4]={fld:"",grid:0};a[5]={fld:"",grid:0};a[6]={fld:"TITLE",format:0,grid:0};a[7]={fld:"",grid:0};a[8]={fld:"",grid:0};a[9]={fld:"",grid:0};a[10]={fld:"",grid:0};a[16]={fld:"",grid:0};a[17]={fld:"",grid:0};a[19]={fld:"",grid:0};a[20]={fld:"",grid:0};a[21]={fld:"",grid:0};a[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametrizacao_id,isvalid:null,rgrid:[],fld:"PARAMETRIZACAO_ID",gxz:"Z10PARAMETRIZACAO_ID",gxold:"O10PARAMETRIZACAO_ID",gxvar:"A10PARAMETRIZACAO_ID",
ucs:[],op:[30,26],ip:[30,26,22],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A10PARAMETRIZACAO_ID=gx.num.intval(a)},v2z:function(a){gx.O.Z10PARAMETRIZACAO_ID=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("PARAMETRIZACAO_ID",gx.O.A10PARAMETRIZACAO_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A10PARAMETRIZACAO_ID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETRIZACAO_ID",".")},nac:gx.falseFn};this.declareDomainHdlr(22,
function(){});a[23]={fld:"",grid:0};a[24]={fld:"",grid:0};a[25]={fld:"",grid:0};a[26]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETRIZACAO_NOME",gxz:"Z11PARAMETRIZACAO_NOME",gxold:"O11PARAMETRIZACAO_NOME",gxvar:"A11PARAMETRIZACAO_NOME",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A11PARAMETRIZACAO_NOME=a},v2z:function(a){gx.O.Z11PARAMETRIZACAO_NOME=a},v2c:function(){gx.fn.setControlValue("PARAMETRIZACAO_NOME",
gx.O.A11PARAMETRIZACAO_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11PARAMETRIZACAO_NOME=this.val()},val:function(){return gx.fn.getControlValue("PARAMETRIZACAO_NOME")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});a[27]={fld:"",grid:0};a[28]={fld:"",grid:0};a[29]={fld:"",grid:0};a[30]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETRIZACAO_XML",gxz:"Z12PARAMETRIZACAO_XML",
gxold:"O12PARAMETRIZACAO_XML",gxvar:"A12PARAMETRIZACAO_XML",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A12PARAMETRIZACAO_XML=a},v2z:function(a){gx.O.Z12PARAMETRIZACAO_XML=a},v2c:function(){gx.fn.setControlValue("PARAMETRIZACAO_XML",gx.O.A12PARAMETRIZACAO_XML,0)},c2v:function(){gx.O.A12PARAMETRIZACAO_XML=this.val()},val:function(){return gx.fn.getControlValue("PARAMETRIZACAO_XML")},nac:gx.falseFn};a[31]={fld:"",grid:0};a[32]={fld:"",grid:0};a[33]={fld:"",grid:0};this.O10PARAMETRIZACAO_ID=
this.Z10PARAMETRIZACAO_ID=this.A10PARAMETRIZACAO_ID=0;this.O12PARAMETRIZACAO_XML=this.Z12PARAMETRIZACAO_XML=this.A12PARAMETRIZACAO_XML=this.O11PARAMETRIZACAO_NOME=this.Z11PARAMETRIZACAO_NOME=this.A11PARAMETRIZACAO_NOME="";this.A10PARAMETRIZACAO_ID=0;this.A12PARAMETRIZACAO_XML=this.A11PARAMETRIZACAO_NOME="";this.Events={e11022_client:["ENTER",true],e12022_client:["CANCEL",true]};this.EvtParms.ENTER=[[{postForm:true}],[]];this.EvtParms.REFRESH=[[],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode",
"vMODE",0,"char");this.InitStandaloneVars()});gx.createParentObj(parametrizacao);
