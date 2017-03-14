gx.evt.autoSkip=!1;
gx.define("estoque",!1,function(){this.ServerClass="estoque";this.PackageName="com.lilianepresentes";this.setObjectType("trn");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=true;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Estoque_id=function(){try{var a=gx.util.balloon.getNew("ESTOQUE_ID");this.AnyError=0}catch(b){}try{return a==null?true:a.show()}catch(c){}return true};this.Valid_Produto_id=function(){gx.ajax.validSrvEvt("dyncall",
"valid_Produto_id",["gx.O.A153ESTOQUE_ID","gx.O.A70PRODUTO_ID",'gx.date.urlDateTime(gx.O.A156ESTOQUE_DATAHORA_INCLUSAO,"DMY")',"gx.O.A157ESTOQUE_USUARIO_INCLUSAO","gx.O.A160ESTOQUE_STATUS_REGISTRO","gx.O.A154ESTOQUE_QTDE","gx.O.A166ESTOQUE_TIPO","gx.O.A85PRODUTO_NOME","gx.O.A165PRODUTO_QTDE_MINIMA","gx.O.A167ESTOQUE_QTDE_TOTAL"],["A156ESTOQUE_DATAHORA_INCLUSAO","A157ESTOQUE_USUARIO_INCLUSAO","A160ESTOQUE_STATUS_REGISTRO","A154ESTOQUE_QTDE","A166ESTOQUE_TIPO","A85PRODUTO_NOME","A165PRODUTO_QTDE_MINIMA",
"A167ESTOQUE_QTDE_TOTAL","Gx_mode","Z153ESTOQUE_ID","Z70PRODUTO_ID","Z156ESTOQUE_DATAHORA_INCLUSAO","Z157ESTOQUE_USUARIO_INCLUSAO","Z160ESTOQUE_STATUS_REGISTRO","Z154ESTOQUE_QTDE","Z166ESTOQUE_TIPO","Z85PRODUTO_NOME","Z165PRODUTO_QTDE_MINIMA","Z167ESTOQUE_QTDE_TOTAL",["BTN_DELETE","Enabled"],["BTN_ENTER","Enabled"]]);return true};this.Valid_Estoque_tipo=function(){try{var a=gx.util.balloon.getNew("ESTOQUE_TIPO");this.AnyError=0;if(!(this.A166ESTOQUE_TIPO=="E"||this.A166ESTOQUE_TIPO=="S"||""==this.A166ESTOQUE_TIPO))try{a.setError("Campo Tipo de movimenta\u00e7\u00e3o fora do intervalo");
this.AnyError=gx.num.trunc(1,0)}catch(b){}}catch(c){}try{return a==null?true:a.show()}catch(d){}return true};this.Valid_Estoque_datahora_inclusao=function(){try{var a=gx.util.balloon.getNew("ESTOQUE_DATAHORA_INCLUSAO");this.AnyError=0;if(!((new gx.date.gxdate("")).compare(this.A156ESTOQUE_DATAHORA_INCLUSAO)==0||(new gx.date.gxdate(this.A156ESTOQUE_DATAHORA_INCLUSAO)).compare(gx.date.ymdhmstot(1E3,1,1,0,0,0))>=0))try{a.setError("Campo Data e hora de inclus\u00e3o fora do intervalo");this.AnyError=
gx.num.trunc(1,0)}catch(b){}}catch(c){}try{return a==null?true:a.show()}catch(d){}return true};this.Valid_Estoque_status_registro=function(){try{var a=gx.util.balloon.getNew("ESTOQUE_STATUS_REGISTRO");this.AnyError=0;if(!(this.A160ESTOQUE_STATUS_REGISTRO=="A"||this.A160ESTOQUE_STATUS_REGISTRO=="I"||this.A160ESTOQUE_STATUS_REGISTRO=="S"||""==this.A160ESTOQUE_STATUS_REGISTRO))try{a.setError("Campo Status do registro fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(b){}}catch(c){}try{return a==
null?true:a.show()}catch(d){}return true};this.e110e26_client=function(){this.executeServerEvent("ENTER",true)};this.e120e26_client=function(){this.executeServerEvent("CANCEL",true)};var a=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61];this.GXLastCtrlId=61;a[2]={fld:"",grid:0};a[3]={fld:"TABLEMAIN",grid:0};a[4]={fld:"",grid:0};a[5]={fld:"",grid:0};a[6]={fld:"TITLE",
format:0,grid:0};a[7]={fld:"",grid:0};a[8]={fld:"",grid:0};a[9]={fld:"",grid:0};a[10]={fld:"",grid:0};a[16]={fld:"",grid:0};a[17]={fld:"",grid:0};a[19]={fld:"",grid:0};a[20]={fld:"",grid:0};a[21]={fld:"",grid:0};a[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estoque_id,isvalid:null,rgrid:[],fld:"ESTOQUE_ID",gxz:"Z153ESTOQUE_ID",gxold:"O153ESTOQUE_ID",gxvar:"A153ESTOQUE_ID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A153ESTOQUE_ID=
gx.num.intval(a)},v2z:function(a){gx.O.Z153ESTOQUE_ID=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("ESTOQUE_ID",gx.O.A153ESTOQUE_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A153ESTOQUE_ID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESTOQUE_ID",".")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});a[23]={fld:"",grid:0};a[24]={fld:"",grid:0};a[25]={fld:"",grid:0};a[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",
ro:0,grid:0,gxgrid:null,fnc:this.Valid_Produto_id,isvalid:null,rgrid:[],fld:"PRODUTO_ID",gxz:"Z70PRODUTO_ID",gxold:"O70PRODUTO_ID",gxvar:"A70PRODUTO_ID",ucs:[],op:[42,34,30,46,38,58,54,50],ip:[42,34,30,46,38,58,54,50,26,22],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A70PRODUTO_ID=gx.num.intval(a)},v2z:function(a){gx.O.Z70PRODUTO_ID=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("PRODUTO_ID",gx.O.A70PRODUTO_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A70PRODUTO_ID=
gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTO_ID",".")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});a[27]={fld:"",grid:0};a[28]={fld:"",grid:0};a[29]={fld:"",grid:0};a[30]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTO_NOME",gxz:"Z85PRODUTO_NOME",gxold:"O85PRODUTO_NOME",gxvar:"A85PRODUTO_NOME",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A85PRODUTO_NOME=a},v2z:function(a){gx.O.Z85PRODUTO_NOME=
a},v2c:function(){gx.fn.setControlValue("PRODUTO_NOME",gx.O.A85PRODUTO_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A85PRODUTO_NOME=this.val()},val:function(){return gx.fn.getControlValue("PRODUTO_NOME")},nac:gx.falseFn};this.declareDomainHdlr(30,function(){});a[31]={fld:"",grid:0};a[32]={fld:"",grid:0};a[33]={fld:"",grid:0};a[34]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTO_QTDE_MINIMA",
gxz:"Z165PRODUTO_QTDE_MINIMA",gxold:"O165PRODUTO_QTDE_MINIMA",gxvar:"A165PRODUTO_QTDE_MINIMA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A165PRODUTO_QTDE_MINIMA=gx.num.intval(a)},v2z:function(a){gx.O.Z165PRODUTO_QTDE_MINIMA=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("PRODUTO_QTDE_MINIMA",gx.O.A165PRODUTO_QTDE_MINIMA,0)},c2v:function(){gx.O.A165PRODUTO_QTDE_MINIMA=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTO_QTDE_MINIMA",".")},nac:gx.falseFn};
a[35]={fld:"",grid:0};a[36]={fld:"",grid:0};a[37]={fld:"",grid:0};a[38]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTOQUE_QTDE",gxz:"Z154ESTOQUE_QTDE",gxold:"O154ESTOQUE_QTDE",gxvar:"A154ESTOQUE_QTDE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A154ESTOQUE_QTDE=gx.num.intval(a)},v2z:function(a){gx.O.Z154ESTOQUE_QTDE=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("ESTOQUE_QTDE",gx.O.A154ESTOQUE_QTDE,
0)},c2v:function(){gx.O.A154ESTOQUE_QTDE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESTOQUE_QTDE",".")},nac:gx.falseFn};a[39]={fld:"",grid:0};a[40]={fld:"",grid:0};a[41]={fld:"",grid:0};a[42]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTOQUE_QTDE_TOTAL",gxz:"Z167ESTOQUE_QTDE_TOTAL",gxold:"O167ESTOQUE_QTDE_TOTAL",gxvar:"A167ESTOQUE_QTDE_TOTAL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A167ESTOQUE_QTDE_TOTAL=
gx.num.intval(a)},v2z:function(a){gx.O.Z167ESTOQUE_QTDE_TOTAL=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("ESTOQUE_QTDE_TOTAL",gx.O.A167ESTOQUE_QTDE_TOTAL,0)},c2v:function(){gx.O.A167ESTOQUE_QTDE_TOTAL=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESTOQUE_QTDE_TOTAL",".")},nac:gx.falseFn};a[43]={fld:"",grid:0};a[44]={fld:"",grid:0};a[45]={fld:"",grid:0};a[46]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estoque_tipo,isvalid:null,
rgrid:[],fld:"ESTOQUE_TIPO",gxz:"Z166ESTOQUE_TIPO",gxold:"O166ESTOQUE_TIPO",gxvar:"A166ESTOQUE_TIPO",ucs:[],op:[46],ip:[46],nacdep:[],ctrltype:"combo",v2v:function(a){gx.O.A166ESTOQUE_TIPO=a},v2z:function(a){gx.O.Z166ESTOQUE_TIPO=a},v2c:function(){gx.fn.setComboBoxValue("ESTOQUE_TIPO",gx.O.A166ESTOQUE_TIPO);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A166ESTOQUE_TIPO=this.val()},val:function(){return gx.fn.getControlValue("ESTOQUE_TIPO")},nac:gx.falseFn};this.declareDomainHdlr(46,
function(){});a[47]={fld:"",grid:0};a[48]={fld:"",grid:0};a[49]={fld:"",grid:0};a[50]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estoque_datahora_inclusao,isvalid:null,rgrid:[],fld:"ESTOQUE_DATAHORA_INCLUSAO",gxz:"Z156ESTOQUE_DATAHORA_INCLUSAO",gxold:"O156ESTOQUE_DATAHORA_INCLUSAO",gxvar:"A156ESTOQUE_DATAHORA_INCLUSAO",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A156ESTOQUE_DATAHORA_INCLUSAO=
gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.Z156ESTOQUE_DATAHORA_INCLUSAO=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("ESTOQUE_DATAHORA_INCLUSAO",gx.O.A156ESTOQUE_DATAHORA_INCLUSAO,0)},c2v:function(){gx.O.A156ESTOQUE_DATAHORA_INCLUSAO=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ESTOQUE_DATAHORA_INCLUSAO")},nac:gx.falseFn};a[51]={fld:"",grid:0};a[52]={fld:"",grid:0};a[53]={fld:"",grid:0};a[54]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,
grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTOQUE_USUARIO_INCLUSAO",gxz:"Z157ESTOQUE_USUARIO_INCLUSAO",gxold:"O157ESTOQUE_USUARIO_INCLUSAO",gxvar:"A157ESTOQUE_USUARIO_INCLUSAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A157ESTOQUE_USUARIO_INCLUSAO=a},v2z:function(a){gx.O.Z157ESTOQUE_USUARIO_INCLUSAO=a},v2c:function(){gx.fn.setControlValue("ESTOQUE_USUARIO_INCLUSAO",gx.O.A157ESTOQUE_USUARIO_INCLUSAO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A157ESTOQUE_USUARIO_INCLUSAO=
this.val()},val:function(){return gx.fn.getControlValue("ESTOQUE_USUARIO_INCLUSAO")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});a[55]={fld:"",grid:0};a[56]={fld:"",grid:0};a[57]={fld:"",grid:0};a[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estoque_status_registro,isvalid:null,rgrid:[],fld:"ESTOQUE_STATUS_REGISTRO",gxz:"Z160ESTOQUE_STATUS_REGISTRO",gxold:"O160ESTOQUE_STATUS_REGISTRO",gxvar:"A160ESTOQUE_STATUS_REGISTRO",ucs:[],op:[58],ip:[58],nacdep:[],
ctrltype:"combo",v2v:function(a){gx.O.A160ESTOQUE_STATUS_REGISTRO=a},v2z:function(a){gx.O.Z160ESTOQUE_STATUS_REGISTRO=a},v2c:function(){gx.fn.setComboBoxValue("ESTOQUE_STATUS_REGISTRO",gx.O.A160ESTOQUE_STATUS_REGISTRO);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A160ESTOQUE_STATUS_REGISTRO=this.val()},val:function(){return gx.fn.getControlValue("ESTOQUE_STATUS_REGISTRO")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});a[59]={fld:"",grid:0};a[60]={fld:"",
grid:0};a[61]={fld:"",grid:0};this.O70PRODUTO_ID=this.Z70PRODUTO_ID=this.A70PRODUTO_ID=this.O153ESTOQUE_ID=this.Z153ESTOQUE_ID=this.A153ESTOQUE_ID=0;this.O85PRODUTO_NOME=this.Z85PRODUTO_NOME=this.A85PRODUTO_NOME="";this.O167ESTOQUE_QTDE_TOTAL=this.Z167ESTOQUE_QTDE_TOTAL=this.A167ESTOQUE_QTDE_TOTAL=this.O154ESTOQUE_QTDE=this.Z154ESTOQUE_QTDE=this.A154ESTOQUE_QTDE=this.O165PRODUTO_QTDE_MINIMA=this.Z165PRODUTO_QTDE_MINIMA=this.A165PRODUTO_QTDE_MINIMA=0;this.O166ESTOQUE_TIPO=this.Z166ESTOQUE_TIPO=this.A166ESTOQUE_TIPO=
"";this.A156ESTOQUE_DATAHORA_INCLUSAO=gx.date.nullDate();this.Z156ESTOQUE_DATAHORA_INCLUSAO=gx.date.nullDate();this.O156ESTOQUE_DATAHORA_INCLUSAO=gx.date.nullDate();this.O160ESTOQUE_STATUS_REGISTRO=this.Z160ESTOQUE_STATUS_REGISTRO=this.A160ESTOQUE_STATUS_REGISTRO=this.O157ESTOQUE_USUARIO_INCLUSAO=this.Z157ESTOQUE_USUARIO_INCLUSAO=this.A157ESTOQUE_USUARIO_INCLUSAO="";this.A70PRODUTO_ID=this.A153ESTOQUE_ID=0;this.A156ESTOQUE_DATAHORA_INCLUSAO=gx.date.nullDate();this.A160ESTOQUE_STATUS_REGISTRO=this.A157ESTOQUE_USUARIO_INCLUSAO=
"";this.A167ESTOQUE_QTDE_TOTAL=0;this.A85PRODUTO_NOME="";this.A154ESTOQUE_QTDE=this.A165PRODUTO_QTDE_MINIMA=0;this.A166ESTOQUE_TIPO="";this.Events={e110e26_client:["ENTER",true],e120e26_client:["CANCEL",true]};this.EvtParms.ENTER=[[{postForm:true}],[]];this.EvtParms.REFRESH=[[],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.createParentObj(estoque);
