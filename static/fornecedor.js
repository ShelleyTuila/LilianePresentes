gx.evt.autoSkip=!1;
gx.define("fornecedor",!1,function(){this.ServerClass="fornecedor";this.PackageName="com.lilianepresentes";this.setObjectType("trn");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=true;this.SetStandaloneVars=function(){this.A26FORNECEDOR_USUARIO_INCLUSAO=gx.fn.getControlValue("FORNECEDOR_USUARIO_INCLUSAO");this.A27FORNECEDOR_DATAHORA_INCLUSAO=gx.fn.getDateTimeValue("FORNECEDOR_DATAHORA_INCLUSAO");this.A28FORNECEDOR_USUARIO_ALTERACAO=gx.fn.getControlValue("FORNECEDOR_USUARIO_ALTERACAO");
this.A29FORNECEDOR_DATAHORA_ALTERACAO=gx.fn.getDateTimeValue("FORNECEDOR_DATAHORA_ALTERACAO");this.A30FORNECEDOR_STATUS_REGISTRO=gx.fn.getControlValue("FORNECEDOR_STATUS_REGISTRO");this.A35FORNECEDORCONTATO_SERIAL=gx.fn.getIntegerValue("FORNECEDORCONTATO_SERIAL",".");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.A22FORNECEDORCONTATO_ID=gx.fn.getIntegerValue("FORNECEDORCONTATO_ID",".");this.AV31AuxFORNECEDOR_CEP=gx.fn.getControlValue("vAUXFORNECEDOR_CEP")};
this.Valid_Fornecedor_id=function(){gx.ajax.validSrvEvt("dyncall","valid_Fornecedor_id",["gx.O.A13FORNECEDOR_ID","gx.O.A26FORNECEDOR_USUARIO_INCLUSAO",'gx.date.urlDateTime(gx.O.A27FORNECEDOR_DATAHORA_INCLUSAO,"DMY")',"gx.O.A28FORNECEDOR_USUARIO_ALTERACAO",'gx.date.urlDateTime(gx.O.A29FORNECEDOR_DATAHORA_ALTERACAO,"DMY")',"gx.O.A30FORNECEDOR_STATUS_REGISTRO","gx.O.A14FORNECEDOR_CNPJ","gx.O.A15FORNECEDOR_RAZAO_SOCIAL","gx.O.A16FORNECEDOR_NOME_FANTASIA","gx.O.A17FORNECEDOR_CEP","gx.O.A18FORNECEDOR_LOGRADOURO",
"gx.O.A19FORNECEDOR_NUMERO","gx.O.A20FORNECEDOR_BAIRRO","gx.O.A21FORNECEDOR_OBSERVACAO","gx.O.A35FORNECEDORCONTATO_SERIAL","gx.O.A47FORNECEDOR_CIDADE_ID","gx.O.A48FORNECEDOR_ESTADO_UF"],["A26FORNECEDOR_USUARIO_INCLUSAO","A27FORNECEDOR_DATAHORA_INCLUSAO","A28FORNECEDOR_USUARIO_ALTERACAO","A29FORNECEDOR_DATAHORA_ALTERACAO","A30FORNECEDOR_STATUS_REGISTRO","A14FORNECEDOR_CNPJ","A15FORNECEDOR_RAZAO_SOCIAL","A16FORNECEDOR_NOME_FANTASIA","A17FORNECEDOR_CEP","A18FORNECEDOR_LOGRADOURO","A19FORNECEDOR_NUMERO",
"A20FORNECEDOR_BAIRRO","A21FORNECEDOR_OBSERVACAO","A48FORNECEDOR_ESTADO_UF","A35FORNECEDORCONTATO_SERIAL","A47FORNECEDOR_CIDADE_ID","Gx_mode","Z13FORNECEDOR_ID","Z26FORNECEDOR_USUARIO_INCLUSAO","Z27FORNECEDOR_DATAHORA_INCLUSAO","Z28FORNECEDOR_USUARIO_ALTERACAO","Z29FORNECEDOR_DATAHORA_ALTERACAO","Z30FORNECEDOR_STATUS_REGISTRO","Z14FORNECEDOR_CNPJ","Z15FORNECEDOR_RAZAO_SOCIAL","Z16FORNECEDOR_NOME_FANTASIA","Z17FORNECEDOR_CEP","Z18FORNECEDOR_LOGRADOURO","Z19FORNECEDOR_NUMERO","Z20FORNECEDOR_BAIRRO",
"Z21FORNECEDOR_OBSERVACAO","Z48FORNECEDOR_ESTADO_UF","Z35FORNECEDORCONTATO_SERIAL","Z47FORNECEDOR_CIDADE_ID","O35FORNECEDORCONTATO_SERIAL","Gridfornecedor_contato",["BTN_DELETE","Enabled"],["BTN_ENTER","Enabled"]]);return true};this.Valid_Fornecedor_estado_uf=function(){gx.ajax.validSrvEvt("dyncall","valid_Fornecedor_estado_uf",["gx.O.A48FORNECEDOR_ESTADO_UF","gx.O.A47FORNECEDOR_CIDADE_ID"],["A47FORNECEDOR_CIDADE_ID"]);return true};this.Valid_Fornecedor_cidade_id=function(){gx.ajax.validSrvEvt("dyncall",
"valid_Fornecedor_cidade_id",["gx.O.A47FORNECEDOR_CIDADE_ID","gx.O.A48FORNECEDOR_ESTADO_UF"],[]);return true};this.Valid_Fornecedorcontato_tipo=function(){try{if(gx.fn.currentGridRowImpl(68)===0)return true;var a=gx.util.balloon.getNew("FORNECEDORCONTATO_TIPO",gx.fn.currentGridRowImpl(68));this.AnyError=0;this.sMode4=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(4,68);this.standaloneModal034();this.standaloneNotModal034();if(!(this.A23FORNECEDORCONTATO_TIPO=="RE"||this.A23FORNECEDORCONTATO_TIPO==
"CO"||this.A23FORNECEDORCONTATO_TIPO=="CE"||""==this.A23FORNECEDORCONTATO_TIPO))try{a.setError("Campo Tipo de telefone fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(b){}}catch(c){}try{this.Gx_mode=this.sMode4;return a==null?true:a.show()}catch(d){}return true};this.standaloneModal034=function(){this.A35FORNECEDORCONTATO_SERIAL=gx.num.trunc(gx.fn.serialRule("A35FORNECEDORCONTATO_SERIAL","A22FORNECEDORCONTATO_ID",68,1,this),0);return true};this.standaloneNotModal034=function(){return true};
this.e12032_client=function(){this.executeServerEvent("AFTER TRN",true)};this.e13032_client=function(){this.executeServerEvent("FORNECEDOR_CEP.ISVALID",true)};this.e14033_client=function(){this.executeServerEvent("ENTER",true)};this.e15033_client=function(){this.executeServerEvent("CANCEL",true)};var b=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,
65,66,67,69,70,71,72,73,74];this.GXLastCtrlId=74;var c=this.Gridfornecedor_contatoContainer=new gx.grid.grid(this,4,"CONTATO",68,"Gridfornecedor_contato","Gridfornecedor_contato","Gridfornecedor_contatoContainer",this.CmpContext,this.IsMasterPage,"fornecedor",[],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);c.addSingleLineEdit(25,69,"FORNECEDORCONTATO_NOME","Contato","","FORNECEDORCONTATO_NOME","svchar",0,"px",100,80,"left",null,
[],25,"FORNECEDORCONTATO_NOME",true,0,false,false,"Attribute",1,"");c.addComboBox(23,70,"FORNECEDORCONTATO_TIPO","Tipo de telefone","FORNECEDORCONTATO_TIPO","char",null,0,true,false,0,"px","");c.addSingleLineEdit(24,71,"FORNECEDORCONTATO_TELEFONE","Telefone","","FORNECEDORCONTATO_TELEFONE","char",0,"px",20,20,"left",null,[],24,"FORNECEDORCONTATO_TELEFONE",true,0,false,false,"Attribute",1,"");this.setGrid(c);b[2]={fld:"",grid:0};b[3]={fld:"TABLEMAIN",grid:0};b[4]={fld:"",grid:0};b[5]={fld:"",grid:0};
b[6]={fld:"TITLE",format:0,grid:0};b[7]={fld:"",grid:0};b[8]={fld:"",grid:0};b[9]={fld:"",grid:0};b[10]={fld:"",grid:0};b[16]={fld:"",grid:0};b[17]={fld:"",grid:0};b[19]={fld:"",grid:0};b[20]={fld:"",grid:0};b[21]={fld:"",grid:0};b[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fornecedor_id,isvalid:null,rgrid:[this.Gridfornecedor_contatoContainer],fld:"FORNECEDOR_ID",gxz:"Z13FORNECEDOR_ID",gxold:"O13FORNECEDOR_ID",gxvar:"A13FORNECEDOR_ID",ucs:[],op:[54,
58,62,50,46,42,38,34,30,26],ip:[54,58,62,50,46,42,38,34,30,26,22],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A13FORNECEDOR_ID=gx.num.intval(a)},v2z:function(a){gx.O.Z13FORNECEDOR_ID=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("FORNECEDOR_ID",gx.O.A13FORNECEDOR_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A13FORNECEDOR_ID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FORNECEDOR_ID",".")},nac:gx.falseFn};this.declareDomainHdlr(22,
function(){});b[23]={fld:"",grid:0};b[24]={fld:"",grid:0};b[25]={fld:"",grid:0};b[26]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_CNPJ",gxz:"Z14FORNECEDOR_CNPJ",gxold:"O14FORNECEDOR_CNPJ",gxvar:"A14FORNECEDOR_CNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A14FORNECEDOR_CNPJ=a},v2z:function(a){gx.O.Z14FORNECEDOR_CNPJ=a},v2c:function(){gx.fn.setControlValue("FORNECEDOR_CNPJ",gx.O.A14FORNECEDOR_CNPJ,0);typeof this.dom_hdl==
"function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A14FORNECEDOR_CNPJ=this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_CNPJ")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});b[27]={fld:"",grid:0};b[28]={fld:"",grid:0};b[29]={fld:"",grid:0};b[30]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_RAZAO_SOCIAL",gxz:"Z15FORNECEDOR_RAZAO_SOCIAL",gxold:"O15FORNECEDOR_RAZAO_SOCIAL",gxvar:"A15FORNECEDOR_RAZAO_SOCIAL",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A15FORNECEDOR_RAZAO_SOCIAL=a},v2z:function(a){gx.O.Z15FORNECEDOR_RAZAO_SOCIAL=a},v2c:function(){gx.fn.setControlValue("FORNECEDOR_RAZAO_SOCIAL",gx.O.A15FORNECEDOR_RAZAO_SOCIAL,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A15FORNECEDOR_RAZAO_SOCIAL=this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_RAZAO_SOCIAL")},nac:gx.falseFn};this.declareDomainHdlr(30,function(){});b[31]={fld:"",
grid:0};b[32]={fld:"",grid:0};b[33]={fld:"",grid:0};b[34]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_NOME_FANTASIA",gxz:"Z16FORNECEDOR_NOME_FANTASIA",gxold:"O16FORNECEDOR_NOME_FANTASIA",gxvar:"A16FORNECEDOR_NOME_FANTASIA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A16FORNECEDOR_NOME_FANTASIA=a},v2z:function(a){gx.O.Z16FORNECEDOR_NOME_FANTASIA=a},v2c:function(){gx.fn.setControlValue("FORNECEDOR_NOME_FANTASIA",
gx.O.A16FORNECEDOR_NOME_FANTASIA,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A16FORNECEDOR_NOME_FANTASIA=this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_NOME_FANTASIA")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});b[35]={fld:"",grid:0};b[36]={fld:"",grid:0};b[37]={fld:"",grid:0};b[38]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e13032_client",rgrid:[],fld:"FORNECEDOR_CEP",gxz:"Z17FORNECEDOR_CEP",
gxold:"O17FORNECEDOR_CEP",gxvar:"A17FORNECEDOR_CEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A17FORNECEDOR_CEP=a},v2z:function(a){gx.O.Z17FORNECEDOR_CEP=a},v2c:function(){gx.fn.setControlValue("FORNECEDOR_CEP",gx.O.A17FORNECEDOR_CEP,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A17FORNECEDOR_CEP=this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_CEP")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});b[39]={fld:"",
grid:0};b[40]={fld:"",grid:0};b[41]={fld:"",grid:0};b[42]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_LOGRADOURO",gxz:"Z18FORNECEDOR_LOGRADOURO",gxold:"O18FORNECEDOR_LOGRADOURO",gxvar:"A18FORNECEDOR_LOGRADOURO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A18FORNECEDOR_LOGRADOURO=a},v2z:function(a){gx.O.Z18FORNECEDOR_LOGRADOURO=a},v2c:function(){gx.fn.setControlValue("FORNECEDOR_LOGRADOURO",gx.O.A18FORNECEDOR_LOGRADOURO,
0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A18FORNECEDOR_LOGRADOURO=this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_LOGRADOURO")},nac:gx.falseFn};this.declareDomainHdlr(42,function(){});b[43]={fld:"",grid:0};b[44]={fld:"",grid:0};b[45]={fld:"",grid:0};b[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_NUMERO",gxz:"Z19FORNECEDOR_NUMERO",gxold:"O19FORNECEDOR_NUMERO",
gxvar:"A19FORNECEDOR_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A19FORNECEDOR_NUMERO=gx.num.intval(a)},v2z:function(a){gx.O.Z19FORNECEDOR_NUMERO=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("FORNECEDOR_NUMERO",gx.O.A19FORNECEDOR_NUMERO,0)},c2v:function(){gx.O.A19FORNECEDOR_NUMERO=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FORNECEDOR_NUMERO",".")},nac:gx.falseFn};b[47]={fld:"",grid:0};b[48]={fld:"",grid:0};b[49]={fld:"",grid:0};
b[50]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_BAIRRO",gxz:"Z20FORNECEDOR_BAIRRO",gxold:"O20FORNECEDOR_BAIRRO",gxvar:"A20FORNECEDOR_BAIRRO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A20FORNECEDOR_BAIRRO=a},v2z:function(a){gx.O.Z20FORNECEDOR_BAIRRO=a},v2c:function(){gx.fn.setControlValue("FORNECEDOR_BAIRRO",gx.O.A20FORNECEDOR_BAIRRO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A20FORNECEDOR_BAIRRO=
this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_BAIRRO")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});b[51]={fld:"",grid:0};b[52]={fld:"",grid:0};b[53]={fld:"",grid:0};b[54]={lvl:0,type:"svchar",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fornecedor_estado_uf,isvalid:null,rgrid:[],fld:"FORNECEDOR_ESTADO_UF",gxz:"Z48FORNECEDOR_ESTADO_UF",gxold:"O48FORNECEDOR_ESTADO_UF",gxvar:"A48FORNECEDOR_ESTADO_UF",ucs:[],op:[58],ip:[58,54],nacdep:[],ctrltype:"dyncombo",
v2v:function(a){gx.O.A48FORNECEDOR_ESTADO_UF=a},v2z:function(a){gx.O.Z48FORNECEDOR_ESTADO_UF=a},v2c:function(){gx.fn.setComboBoxValue("FORNECEDOR_ESTADO_UF",gx.O.A48FORNECEDOR_ESTADO_UF);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A48FORNECEDOR_ESTADO_UF=this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_ESTADO_UF")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});b[55]={fld:"",grid:0};b[56]={fld:"",grid:0};b[57]={fld:"",grid:0};b[58]={lvl:0,
type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fornecedor_cidade_id,isvalid:null,rgrid:[],fld:"FORNECEDOR_CIDADE_ID",gxz:"Z47FORNECEDOR_CIDADE_ID",gxold:"O47FORNECEDOR_CIDADE_ID",gxvar:"A47FORNECEDOR_CIDADE_ID",ucs:[],op:[],ip:[54,58],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.A47FORNECEDOR_CIDADE_ID=a},v2z:function(a){gx.O.Z47FORNECEDOR_CIDADE_ID=a},v2c:function(){gx.fn.setComboBoxValue("FORNECEDOR_CIDADE_ID",gx.O.A47FORNECEDOR_CIDADE_ID)},c2v:function(){gx.O.A47FORNECEDOR_CIDADE_ID=
this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_CIDADE_ID")},nac:gx.falseFn};b[59]={fld:"",grid:0};b[60]={fld:"",grid:0};b[61]={fld:"",grid:0};b[62]={lvl:0,type:"svchar",len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_OBSERVACAO",gxz:"Z21FORNECEDOR_OBSERVACAO",gxold:"O21FORNECEDOR_OBSERVACAO",gxvar:"A21FORNECEDOR_OBSERVACAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A21FORNECEDOR_OBSERVACAO=
a},v2z:function(a){gx.O.Z21FORNECEDOR_OBSERVACAO=a},v2c:function(){gx.fn.setControlValue("FORNECEDOR_OBSERVACAO",gx.O.A21FORNECEDOR_OBSERVACAO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A21FORNECEDOR_OBSERVACAO=this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_OBSERVACAO")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});b[63]={fld:"",grid:0};b[64]={fld:"",grid:0};b[65]={fld:"TITLECONTATO",format:0,grid:0};b[66]={fld:"",grid:0};b[67]=
{fld:"",grid:0};b[69]={lvl:4,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:1,grid:68,gxgrid:this.Gridfornecedor_contatoContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDORCONTATO_NOME",gxz:"Z25FORNECEDORCONTATO_NOME",gxold:"O25FORNECEDORCONTATO_NOME",gxvar:"A25FORNECEDORCONTATO_NOME",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A25FORNECEDORCONTATO_NOME=a},v2z:function(a){gx.O.Z25FORNECEDORCONTATO_NOME=a},v2c:function(a){gx.fn.setGridControlValue("FORNECEDORCONTATO_NOME",
a||gx.fn.currentGridRowImpl(68),gx.O.A25FORNECEDORCONTATO_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A25FORNECEDORCONTATO_NOME=this.val()},val:function(a){return gx.fn.getGridControlValue("FORNECEDORCONTATO_NOME",a||gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};b[70]={lvl:4,type:"char",len:2,dec:0,sign:false,ro:0,isacc:1,grid:68,gxgrid:this.Gridfornecedor_contatoContainer,fnc:this.Valid_Fornecedorcontato_tipo,isvalid:null,rgrid:[],fld:"FORNECEDORCONTATO_TIPO",
gxz:"Z23FORNECEDORCONTATO_TIPO",gxold:"O23FORNECEDORCONTATO_TIPO",gxvar:"A23FORNECEDORCONTATO_TIPO",ucs:[],op:[70],ip:[70],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(a){gx.O.A23FORNECEDORCONTATO_TIPO=a},v2z:function(a){gx.O.Z23FORNECEDORCONTATO_TIPO=a},v2c:function(a){gx.fn.setGridComboBoxValue("FORNECEDORCONTATO_TIPO",a||gx.fn.currentGridRowImpl(68),gx.O.A23FORNECEDORCONTATO_TIPO);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A23FORNECEDORCONTATO_TIPO=
this.val()},val:function(a){return gx.fn.getGridControlValue("FORNECEDORCONTATO_TIPO",a||gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};b[71]={lvl:4,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:68,gxgrid:this.Gridfornecedor_contatoContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDORCONTATO_TELEFONE",gxz:"Z24FORNECEDORCONTATO_TELEFONE",gxold:"O24FORNECEDORCONTATO_TELEFONE",gxvar:"A24FORNECEDORCONTATO_TELEFONE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"tel",v2v:function(a){gx.O.A24FORNECEDORCONTATO_TELEFONE=
a},v2z:function(a){gx.O.Z24FORNECEDORCONTATO_TELEFONE=a},v2c:function(a){gx.fn.setGridControlValue("FORNECEDORCONTATO_TELEFONE",a||gx.fn.currentGridRowImpl(68),gx.O.A24FORNECEDORCONTATO_TELEFONE,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A24FORNECEDORCONTATO_TELEFONE=this.val()},val:function(a){return gx.fn.getGridControlValue("FORNECEDORCONTATO_TELEFONE",a||gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};b[72]={fld:"",grid:0};b[73]={fld:"",grid:0};b[74]={fld:"",
grid:0};this.O13FORNECEDOR_ID=this.Z13FORNECEDOR_ID=this.A13FORNECEDOR_ID=0;this.O18FORNECEDOR_LOGRADOURO=this.Z18FORNECEDOR_LOGRADOURO=this.A18FORNECEDOR_LOGRADOURO=this.O17FORNECEDOR_CEP=this.Z17FORNECEDOR_CEP=this.A17FORNECEDOR_CEP=this.O16FORNECEDOR_NOME_FANTASIA=this.Z16FORNECEDOR_NOME_FANTASIA=this.A16FORNECEDOR_NOME_FANTASIA=this.O15FORNECEDOR_RAZAO_SOCIAL=this.Z15FORNECEDOR_RAZAO_SOCIAL=this.A15FORNECEDOR_RAZAO_SOCIAL=this.O14FORNECEDOR_CNPJ=this.Z14FORNECEDOR_CNPJ=this.A14FORNECEDOR_CNPJ=
"";this.O19FORNECEDOR_NUMERO=this.Z19FORNECEDOR_NUMERO=this.A19FORNECEDOR_NUMERO=0;this.O24FORNECEDORCONTATO_TELEFONE=this.Z24FORNECEDORCONTATO_TELEFONE=this.O23FORNECEDORCONTATO_TIPO=this.Z23FORNECEDORCONTATO_TIPO=this.O25FORNECEDORCONTATO_NOME=this.Z25FORNECEDORCONTATO_NOME=this.O21FORNECEDOR_OBSERVACAO=this.Z21FORNECEDOR_OBSERVACAO=this.A21FORNECEDOR_OBSERVACAO=this.O47FORNECEDOR_CIDADE_ID=this.Z47FORNECEDOR_CIDADE_ID=this.A47FORNECEDOR_CIDADE_ID=this.O48FORNECEDOR_ESTADO_UF=this.Z48FORNECEDOR_ESTADO_UF=
this.A48FORNECEDOR_ESTADO_UF=this.O20FORNECEDOR_BAIRRO=this.Z20FORNECEDOR_BAIRRO=this.A20FORNECEDOR_BAIRRO="";this.A22FORNECEDORCONTATO_ID=0;this.A24FORNECEDORCONTATO_TELEFONE=this.A23FORNECEDORCONTATO_TIPO=this.A25FORNECEDORCONTATO_NOME="";this.AV14Context={};this.AV17WebSession={};this.A13FORNECEDOR_ID=0;this.A26FORNECEDOR_USUARIO_INCLUSAO="";this.A27FORNECEDOR_DATAHORA_INCLUSAO=gx.date.nullDate();this.A28FORNECEDOR_USUARIO_ALTERACAO="";this.A29FORNECEDOR_DATAHORA_ALTERACAO=gx.date.nullDate();this.A30FORNECEDOR_STATUS_REGISTRO=
"";this.Gx_BScreen=0;this.A18FORNECEDOR_LOGRADOURO=this.A17FORNECEDOR_CEP=this.A16FORNECEDOR_NOME_FANTASIA=this.A15FORNECEDOR_RAZAO_SOCIAL=this.A14FORNECEDOR_CNPJ="";this.A19FORNECEDOR_NUMERO=0;this.A48FORNECEDOR_ESTADO_UF=this.A47FORNECEDOR_CIDADE_ID=this.A21FORNECEDOR_OBSERVACAO=this.A20FORNECEDOR_BAIRRO="";this.A35FORNECEDORCONTATO_SERIAL=0;this.AV31AuxFORNECEDOR_CEP="";this.Events={e12032_client:["AFTER TRN",true],e13032_client:["FORNECEDOR_CEP.ISVALID",true],e14033_client:["ENTER",true],e15033_client:["CANCEL",
true]};this.EvtParms.ENTER=[[{postForm:true}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["AFTER TRN"]=[[],[]];this.EvtParms["FORNECEDOR_CEP.ISVALID"]=[[{av:"A17FORNECEDOR_CEP",fld:"FORNECEDOR_CEP"},{av:"AV31AuxFORNECEDOR_CEP",fld:"vAUXFORNECEDOR_CEP"}],[{av:"A47FORNECEDOR_CIDADE_ID",fld:"FORNECEDOR_CIDADE_ID"},{av:"A48FORNECEDOR_ESTADO_UF",fld:"FORNECEDOR_ESTADO_UF"},{av:"A20FORNECEDOR_BAIRRO",fld:"FORNECEDOR_BAIRRO"},{av:"A18FORNECEDOR_LOGRADOURO",fld:"FORNECEDOR_LOGRADOURO"},{av:"AV8CMSG",
fld:"vCMSG"},{av:"AV7CCOD",fld:"vCCOD"},{av:"A17FORNECEDOR_CEP",fld:"FORNECEDOR_CEP"},{av:"AV31AuxFORNECEDOR_CEP",fld:"vAUXFORNECEDOR_CEP"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("A26FORNECEDOR_USUARIO_INCLUSAO","FORNECEDOR_USUARIO_INCLUSAO",0,"svchar");this.setVCMap("A27FORNECEDOR_DATAHORA_INCLUSAO","FORNECEDOR_DATAHORA_INCLUSAO",0,"dtime");this.setVCMap("A28FORNECEDOR_USUARIO_ALTERACAO","FORNECEDOR_USUARIO_ALTERACAO",0,"svchar");this.setVCMap("A29FORNECEDOR_DATAHORA_ALTERACAO","FORNECEDOR_DATAHORA_ALTERACAO",
0,"dtime");this.setVCMap("A30FORNECEDOR_STATUS_REGISTRO","FORNECEDOR_STATUS_REGISTRO",0,"char");this.setVCMap("A35FORNECEDORCONTATO_SERIAL","FORNECEDORCONTATO_SERIAL",0,"int");this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int");this.setVCMap("Gx_mode","vMODE",0,"char");this.setVCMap("A22FORNECEDORCONTATO_ID","FORNECEDORCONTATO_ID",68,"int");this.setVCMap("AV31AuxFORNECEDOR_CEP","vAUXFORNECEDOR_CEP",0,"svchar");this.InitStandaloneVars();this.LvlOlds[3]=["O35FORNECEDORCONTATO_SERIAL"]});gx.createParentObj(fornecedor);
