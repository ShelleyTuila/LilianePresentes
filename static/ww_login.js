gx.evt.autoSkip=!1;
gx.define("ww_login",!1,function(){this.ServerClass="ww_login";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){this.A5USUARIO_SENHA=gx.fn.getControlValue("USUARIO_SENHA");this.A2USUARIO_LOGIN=gx.fn.getControlValue("USUARIO_LOGIN");this.A4USUARIO_STATUS_REGISTRO=gx.fn.getControlValue("USUARIO_STATUS_REGISTRO")};this.Validv_Usuario_login=
function(){try{var a=gx.util.balloon.getNew("vUSUARIO_LOGIN");this.AnyError=0}catch(b){}try{return a==null?true:a.show()}catch(c){}return true};this.e110h2_client=function(){this.executeServerEvent("ENTER",true)};this.e130h2_client=function(){this.executeServerEvent("CANCEL",true)};var a=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];this.GXLastCtrlId=20;a[2]={fld:"",grid:0};a[3]={fld:"MAINTABLE",grid:0};a[4]={fld:"",grid:0};a[5]={fld:"",grid:0};a[6]={fld:"TABLE1",
grid:0};a[7]={fld:"",grid:0};a[8]={fld:"",grid:0};a[9]={fld:"LOGO",grid:0};a[10]={fld:"",grid:0};a[11]={fld:"",grid:0};a[12]={fld:"",grid:0};a[13]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuario_login,isvalid:null,rgrid:[],fld:"vUSUARIO_LOGIN",gxz:"ZV5USUARIO_LOGIN",gxold:"OV5USUARIO_LOGIN",gxvar:"AV5USUARIO_LOGIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV5USUARIO_LOGIN=a},v2z:function(a){gx.O.ZV5USUARIO_LOGIN=a},v2c:function(){gx.fn.setControlValue("vUSUARIO_LOGIN",
gx.O.AV5USUARIO_LOGIN,0)},c2v:function(){gx.O.AV5USUARIO_LOGIN=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIO_LOGIN")},nac:gx.falseFn};a[14]={fld:"",grid:0};a[15]={fld:"",grid:0};a[16]={fld:"",grid:0};a[17]={lvl:0,type:"svchar",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIO_SENHA",gxz:"ZV6USUARIO_SENHA",gxold:"OV6USUARIO_SENHA",gxvar:"AV6USUARIO_SENHA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6USUARIO_SENHA=
a},v2z:function(a){gx.O.ZV6USUARIO_SENHA=a},v2c:function(){gx.fn.setControlValue("vUSUARIO_SENHA",gx.O.AV6USUARIO_SENHA,0)},c2v:function(){gx.O.AV6USUARIO_SENHA=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIO_SENHA")},nac:gx.falseFn};a[18]={fld:"",grid:0};a[19]={fld:"",grid:0};a[20]={fld:"",grid:0};this.A2USUARIO_LOGIN=this.A5USUARIO_SENHA=this.A4USUARIO_STATUS_REGISTRO=this.AV6USUARIO_SENHA=this.AV5USUARIO_LOGIN=this.OV6USUARIO_SENHA=this.ZV6USUARIO_SENHA=this.AV6USUARIO_SENHA=
this.OV5USUARIO_LOGIN=this.ZV5USUARIO_LOGIN=this.AV5USUARIO_LOGIN="";this.Events={e110h2_client:["ENTER",true],e130h2_client:["CANCEL",true]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"A2USUARIO_LOGIN",fld:"USUARIO_LOGIN"},{av:"AV5USUARIO_LOGIN",fld:"vUSUARIO_LOGIN"},{av:"AV6USUARIO_SENHA",fld:"vUSUARIO_SENHA"},{av:"A5USUARIO_SENHA",fld:"USUARIO_SENHA"},{av:"A4USUARIO_STATUS_REGISTRO",fld:"USUARIO_STATUS_REGISTRO"}],[{av:"AV14GXLvl2",fld:"vGXLVL2"}]];this.EnterCtrl=["BUTTON1"];this.setVCMap("A5USUARIO_SENHA",
"USUARIO_SENHA",0,"char");this.setVCMap("A2USUARIO_LOGIN","USUARIO_LOGIN",0,"svchar");this.setVCMap("A4USUARIO_STATUS_REGISTRO","USUARIO_STATUS_REGISTRO",0,"char");this.InitStandaloneVars()});gx.createParentObj(ww_login);
