gx.evt.autoSkip=!1;
gx.define("transportadora",!1,function(){this.ServerClass="transportadora";this.PackageName="com.lilianepresentes";this.setObjectType("trn");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=true;this.SetStandaloneVars=function(){this.A65TRANSPORTADORA_USUARIO_INCLUSAO=gx.fn.getControlValue("TRANSPORTADORA_USUARIO_INCLUSAO");this.A66TRANSPORTADORA_DATAHORA_INCLUSAO=gx.fn.getDateTimeValue("TRANSPORTADORA_DATAHORA_INCLUSAO");this.A67TRANSPORTADORA_USUARIO_ALTERACAO=
gx.fn.getControlValue("TRANSPORTADORA_USUARIO_ALTERACAO");this.A68TRANSPORTADORA_DATAHORA_ALTERACAO=gx.fn.getDateTimeValue("TRANSPORTADORA_DATAHORA_ALTERACAO");this.A69TRANSPORTADORA_STATUS_REGISTRO=gx.fn.getControlValue("TRANSPORTADORA_STATUS_REGISTRO");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.AV12CCOD=gx.fn.getControlValue("vCCOD");this.AV13CMSG=gx.fn.getControlValue("vCMSG");this.A51TRANSPORTADORA_ID=gx.fn.getIntegerValue("TRANSPORTADORA_ID",".");this.A13FORNECEDOR_ID=gx.fn.getIntegerValue("FORNECEDOR_ID",
".");this.A60TRANSPORTADORACONTATO_SERIAL=gx.fn.getIntegerValue("TRANSPORTADORACONTATO_SERIAL",".");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Transportadora_cnpj=function(){gx.ajax.validSrvEvt("dyncall","valid_Transportadora_cnpj",["gx.O.A52TRANSPORTADORA_CNPJ"],["A52TRANSPORTADORA_CNPJ"]);return true};this.Valid_Transportadora_cep=function(){gx.ajax.validSrvEvt("dyncall","valid_Transportadora_cep",["gx.O.A55TRANSPORTADORA_CEP","gx.O.AV12CCOD","gx.O.AV13CMSG","gx.O.A56TRANSPORTADORA_LOGRADOURO",
"gx.O.A58TRANSPORTADORA_BAIRRO","gx.O.A50TRANSPORTADORA_ESTADO_UF","gx.O.A49TRANSPORTADORA_CIDADE_ID"],["A55TRANSPORTADORA_CEP","AV12CCOD","AV13CMSG","A56TRANSPORTADORA_LOGRADOURO","A58TRANSPORTADORA_BAIRRO","A50TRANSPORTADORA_ESTADO_UF","A49TRANSPORTADORA_CIDADE_ID"]);return true};this.Valid_Transportadora_estado_uf=function(){gx.ajax.validSrvEvt("dyncall","valid_Transportadora_estado_uf",["gx.O.Gx_mode","gx.O.Gx_BScreen","gx.O.A50TRANSPORTADORA_ESTADO_UF","gx.O.A49TRANSPORTADORA_CIDADE_ID"],["A50TRANSPORTADORA_ESTADO_UF",
"A49TRANSPORTADORA_CIDADE_ID"]);return true};this.Valid_Transportadora_cidade_id=function(){gx.ajax.validSrvEvt("dyncall","valid_Transportadora_cidade_id",["gx.O.A49TRANSPORTADORA_CIDADE_ID","gx.O.A50TRANSPORTADORA_ESTADO_UF"],["A49TRANSPORTADORA_CIDADE_ID"]);return true};this.Valid_Transportadoracontato_id=function(){try{if(gx.fn.currentGridRowImpl(59)===0)return true;var a=gx.util.balloon.getNew("TRANSPORTADORACONTATO_ID",gx.fn.currentGridRowImpl(59));this.AnyError=0;this.sMode12=this.Gx_mode;this.Gx_mode=
gx.fn.getGridRowMode(12,59);this.standaloneModal0612();this.standaloneNotModal0612();if(gx.fn.gridDuplicateKey(60)){a.setError(gx.text.format(gx.getMessage("GXM_1004"),"CONTATO","","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}}catch(b){}try{this.Gx_mode=this.sMode12;return a==null?true:a.show()}catch(c){}return true};this.Valid_Transportadoracontato_tipo=function(){try{if(gx.fn.currentGridRowImpl(59)===0)return true;var a=gx.util.balloon.getNew("TRANSPORTADORACONTATO_TIPO",gx.fn.currentGridRowImpl(59));
this.AnyError=0;this.sMode12=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(12,59);if(!(this.A63TRANSPORTADORACONTATO_TIPO=="RE"||this.A63TRANSPORTADORACONTATO_TIPO=="CO"||this.A63TRANSPORTADORACONTATO_TIPO=="CE"||""==this.A63TRANSPORTADORACONTATO_TIPO))try{a.setError("Campo Tipo de telefone fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(b){}}catch(c){}try{this.Gx_mode=this.sMode12;return a==null?true:a.show()}catch(d){}return true};this.Valid_Transportadoracontato_telefone=function(){this.sMode12=
this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(12,59);gx.ajax.validSrvEvt("dyncall","valid_Transportadoracontato_telefone",["gx.O.A60TRANSPORTADORACONTATO_SERIAL","gx.O.A64TRANSPORTADORACONTATO_TELEFONE"],["A64TRANSPORTADORACONTATO_TELEFONE"]);this.Gx_mode=this.sMode12;return true};this.standaloneModal0612=function(){this.A60TRANSPORTADORACONTATO_SERIAL=gx.num.trunc(gx.fn.serialRule("A60TRANSPORTADORACONTATO_SERIAL","A61TRANSPORTADORACONTATO_ID",59,1,this),0);return true};this.standaloneNotModal0612=
function(){try{gx.fn.setCtrlProperty("TRANSPORTADORACONTATO_ID","Enabled",0)}catch(a){}return true};this.e11062_client=function(){this.executeServerEvent("AFTER TRN",true)};this.e12062_client=function(){this.executeServerEvent("'ELIMINAR'",false)};this.e130611_client=function(){this.executeServerEvent("ENTER",true)};this.e140611_client=function(){this.executeServerEvent("CANCEL",true)};var b=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,
29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66];this.GXLastCtrlId=66;var c=this.Gridtransportadora_contatoContainer=new gx.grid.grid(this,12,"CONTATO",59,"Gridtransportadora_contato","Gridtransportadora_contato","Gridtransportadora_contatoContainer",this.CmpContext,this.IsMasterPage,"transportadora",[61],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);c.addSingleLineEdit(61,
60,"TRANSPORTADORACONTATO_ID","ID","","TRANSPORTADORACONTATO_ID","int",0,"px",4,4,"right",null,[],61,"TRANSPORTADORACONTATO_ID",false,0,false,false,"Attribute",1,"");c.addSingleLineEdit(62,61,"TRANSPORTADORACONTATO_NOME","Contato","","TRANSPORTADORACONTATO_NOME","svchar",0,"px",100,80,"left",null,[],62,"TRANSPORTADORACONTATO_NOME",true,0,false,false,"Attribute",1,"");c.addComboBox(63,62,"TRANSPORTADORACONTATO_TIPO","Tipo de telefone","TRANSPORTADORACONTATO_TIPO","char",null,0,true,false,0,"px","");
c.addSingleLineEdit(64,63,"TRANSPORTADORACONTATO_TELEFONE","Telefone","","TRANSPORTADORACONTATO_TELEFONE","char",0,"px",20,20,"left",null,[],64,"TRANSPORTADORACONTATO_TELEFONE",true,0,false,false,"Attribute",1,"");this.setGrid(c);b[2]={fld:"",grid:0};b[3]={fld:"TABLEMAIN",grid:0};b[4]={fld:"",grid:0};b[5]={fld:"",grid:0};b[6]={fld:"TITLE",format:0,grid:0};b[7]={fld:"",grid:0};b[8]={fld:"",grid:0};b[10]={fld:"",grid:0};b[11]={fld:"",grid:0};b[12]={fld:"",grid:0};b[13]={lvl:0,type:"svchar",len:100,
dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_NOME_FANTASIA",gxz:"Z16FORNECEDOR_NOME_FANTASIA",gxold:"O16FORNECEDOR_NOME_FANTASIA",gxvar:"A16FORNECEDOR_NOME_FANTASIA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A16FORNECEDOR_NOME_FANTASIA=a},v2z:function(a){gx.O.Z16FORNECEDOR_NOME_FANTASIA=a},v2c:function(){gx.fn.setControlValue("FORNECEDOR_NOME_FANTASIA",gx.O.A16FORNECEDOR_NOME_FANTASIA,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},
c2v:function(){gx.O.A16FORNECEDOR_NOME_FANTASIA=this.val()},val:function(){return gx.fn.getControlValue("FORNECEDOR_NOME_FANTASIA")},nac:gx.falseFn};this.declareDomainHdlr(13,function(){});b[14]={fld:"",grid:0};b[15]={fld:"",grid:0};b[16]={fld:"",grid:0};b[17]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadora_cnpj,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_CNPJ",gxz:"Z52TRANSPORTADORA_CNPJ",gxold:"O52TRANSPORTADORA_CNPJ",gxvar:"A52TRANSPORTADORA_CNPJ",
ucs:[],op:[17],ip:[17],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A52TRANSPORTADORA_CNPJ=a},v2z:function(a){gx.O.Z52TRANSPORTADORA_CNPJ=a},v2c:function(){gx.fn.setControlValue("TRANSPORTADORA_CNPJ",gx.O.A52TRANSPORTADORA_CNPJ,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A52TRANSPORTADORA_CNPJ=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_CNPJ")},nac:gx.falseFn};this.declareDomainHdlr(17,function(){});b[18]={fld:"",grid:0};b[19]={fld:"",
grid:0};b[20]={fld:"",grid:0};b[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_RAZAO_SOCIAL",gxz:"Z53TRANSPORTADORA_RAZAO_SOCIAL",gxold:"O53TRANSPORTADORA_RAZAO_SOCIAL",gxvar:"A53TRANSPORTADORA_RAZAO_SOCIAL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A53TRANSPORTADORA_RAZAO_SOCIAL=a},v2z:function(a){gx.O.Z53TRANSPORTADORA_RAZAO_SOCIAL=a},v2c:function(){gx.fn.setControlValue("TRANSPORTADORA_RAZAO_SOCIAL",
gx.O.A53TRANSPORTADORA_RAZAO_SOCIAL,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A53TRANSPORTADORA_RAZAO_SOCIAL=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_RAZAO_SOCIAL")},nac:gx.falseFn};this.declareDomainHdlr(21,function(){});b[22]={fld:"",grid:0};b[23]={fld:"",grid:0};b[24]={fld:"",grid:0};b[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_NOME_FANTASIA",gxz:"Z54TRANSPORTADORA_NOME_FANTASIA",
gxold:"O54TRANSPORTADORA_NOME_FANTASIA",gxvar:"A54TRANSPORTADORA_NOME_FANTASIA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A54TRANSPORTADORA_NOME_FANTASIA=a},v2z:function(a){gx.O.Z54TRANSPORTADORA_NOME_FANTASIA=a},v2c:function(){gx.fn.setControlValue("TRANSPORTADORA_NOME_FANTASIA",gx.O.A54TRANSPORTADORA_NOME_FANTASIA,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A54TRANSPORTADORA_NOME_FANTASIA=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_NOME_FANTASIA")},
nac:gx.falseFn};this.declareDomainHdlr(25,function(){});b[26]={fld:"",grid:0};b[27]={fld:"",grid:0};b[28]={fld:"",grid:0};b[29]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadora_cep,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_CEP",gxz:"Z55TRANSPORTADORA_CEP",gxold:"O55TRANSPORTADORA_CEP",gxvar:"A55TRANSPORTADORA_CEP",ucs:[],op:[29,49,45,41,33],ip:[49,45,41,33,29],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A55TRANSPORTADORA_CEP=a},v2z:function(a){gx.O.Z55TRANSPORTADORA_CEP=
a},v2c:function(){gx.fn.setControlValue("TRANSPORTADORA_CEP",gx.O.A55TRANSPORTADORA_CEP,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A55TRANSPORTADORA_CEP=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_CEP")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});b[30]={fld:"",grid:0};b[31]={fld:"",grid:0};b[32]={fld:"",grid:0};b[33]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_LOGRADOURO",
gxz:"Z56TRANSPORTADORA_LOGRADOURO",gxold:"O56TRANSPORTADORA_LOGRADOURO",gxvar:"A56TRANSPORTADORA_LOGRADOURO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A56TRANSPORTADORA_LOGRADOURO=a},v2z:function(a){gx.O.Z56TRANSPORTADORA_LOGRADOURO=a},v2c:function(){gx.fn.setControlValue("TRANSPORTADORA_LOGRADOURO",gx.O.A56TRANSPORTADORA_LOGRADOURO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A56TRANSPORTADORA_LOGRADOURO=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_LOGRADOURO")},
nac:gx.falseFn};this.declareDomainHdlr(33,function(){});b[34]={fld:"",grid:0};b[35]={fld:"",grid:0};b[36]={fld:"",grid:0};b[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_NUMERO",gxz:"Z57TRANSPORTADORA_NUMERO",gxold:"O57TRANSPORTADORA_NUMERO",gxvar:"A57TRANSPORTADORA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A57TRANSPORTADORA_NUMERO=gx.num.intval(a)},v2z:function(a){gx.O.Z57TRANSPORTADORA_NUMERO=
gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("TRANSPORTADORA_NUMERO",gx.O.A57TRANSPORTADORA_NUMERO,0)},c2v:function(){gx.O.A57TRANSPORTADORA_NUMERO=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRANSPORTADORA_NUMERO",".")},nac:gx.falseFn};b[38]={fld:"",grid:0};b[39]={fld:"",grid:0};b[40]={fld:"",grid:0};b[41]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_BAIRRO",gxz:"Z58TRANSPORTADORA_BAIRRO",
gxold:"O58TRANSPORTADORA_BAIRRO",gxvar:"A58TRANSPORTADORA_BAIRRO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A58TRANSPORTADORA_BAIRRO=a},v2z:function(a){gx.O.Z58TRANSPORTADORA_BAIRRO=a},v2c:function(){gx.fn.setControlValue("TRANSPORTADORA_BAIRRO",gx.O.A58TRANSPORTADORA_BAIRRO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A58TRANSPORTADORA_BAIRRO=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_BAIRRO")},nac:gx.falseFn};
this.declareDomainHdlr(41,function(){});b[42]={fld:"",grid:0};b[43]={fld:"",grid:0};b[44]={fld:"",grid:0};b[45]={lvl:0,type:"svchar",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadora_estado_uf,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_ESTADO_UF",gxz:"Z50TRANSPORTADORA_ESTADO_UF",gxold:"O50TRANSPORTADORA_ESTADO_UF",gxvar:"A50TRANSPORTADORA_ESTADO_UF",ucs:[],op:[49,45],ip:[49,45],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.A50TRANSPORTADORA_ESTADO_UF=a},v2z:function(a){gx.O.Z50TRANSPORTADORA_ESTADO_UF=
a},v2c:function(){gx.fn.setComboBoxValue("TRANSPORTADORA_ESTADO_UF",gx.O.A50TRANSPORTADORA_ESTADO_UF);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A50TRANSPORTADORA_ESTADO_UF=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_ESTADO_UF")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});b[46]={fld:"",grid:0};b[47]={fld:"",grid:0};b[48]={fld:"",grid:0};b[49]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadora_cidade_id,
isvalid:null,rgrid:[],fld:"TRANSPORTADORA_CIDADE_ID",gxz:"Z49TRANSPORTADORA_CIDADE_ID",gxold:"O49TRANSPORTADORA_CIDADE_ID",gxvar:"A49TRANSPORTADORA_CIDADE_ID",ucs:[],op:[49],ip:[45,49],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.A49TRANSPORTADORA_CIDADE_ID=a},v2z:function(a){gx.O.Z49TRANSPORTADORA_CIDADE_ID=a},v2c:function(){gx.fn.setComboBoxValue("TRANSPORTADORA_CIDADE_ID",gx.O.A49TRANSPORTADORA_CIDADE_ID)},c2v:function(){gx.O.A49TRANSPORTADORA_CIDADE_ID=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_CIDADE_ID")},
nac:gx.falseFn};b[50]={fld:"",grid:0};b[51]={fld:"",grid:0};b[52]={fld:"",grid:0};b[53]={lvl:0,type:"svchar",len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORA_OBSERVACAO",gxz:"Z59TRANSPORTADORA_OBSERVACAO",gxold:"O59TRANSPORTADORA_OBSERVACAO",gxvar:"A59TRANSPORTADORA_OBSERVACAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A59TRANSPORTADORA_OBSERVACAO=a},v2z:function(a){gx.O.Z59TRANSPORTADORA_OBSERVACAO=a},v2c:function(){gx.fn.setControlValue("TRANSPORTADORA_OBSERVACAO",
gx.O.A59TRANSPORTADORA_OBSERVACAO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A59TRANSPORTADORA_OBSERVACAO=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORA_OBSERVACAO")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});b[54]={fld:"",grid:0};b[55]={fld:"",grid:0};b[56]={fld:"TITLECONTATO",format:0,grid:0};b[57]={fld:"",grid:0};b[58]={fld:"",grid:0};b[60]={lvl:12,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:1,grid:59,gxgrid:this.Gridtransportadora_contatoContainer,
fnc:this.Valid_Transportadoracontato_id,isvalid:null,rgrid:[],fld:"TRANSPORTADORACONTATO_ID",gxz:"Z61TRANSPORTADORACONTATO_ID",gxold:"O61TRANSPORTADORACONTATO_ID",gxvar:"A61TRANSPORTADORACONTATO_ID",ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A61TRANSPORTADORACONTATO_ID=gx.num.intval(a)},v2z:function(a){gx.O.Z61TRANSPORTADORACONTATO_ID=gx.num.intval(a)},v2c:function(a){gx.fn.setGridControlValue("TRANSPORTADORACONTATO_ID",a||gx.fn.currentGridRowImpl(59),gx.O.A61TRANSPORTADORACONTATO_ID,
0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A61TRANSPORTADORACONTATO_ID=gx.num.intval(this.val())},val:function(a){return gx.fn.getGridIntegerValue("TRANSPORTADORACONTATO_ID",a||gx.fn.currentGridRowImpl(59),".")},nac:gx.falseFn};b[61]={lvl:12,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:1,grid:59,gxgrid:this.Gridtransportadora_contatoContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORACONTATO_NOME",gxz:"Z62TRANSPORTADORACONTATO_NOME",gxold:"O62TRANSPORTADORACONTATO_NOME",
gxvar:"A62TRANSPORTADORACONTATO_NOME",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A62TRANSPORTADORACONTATO_NOME=a},v2z:function(a){gx.O.Z62TRANSPORTADORACONTATO_NOME=a},v2c:function(a){gx.fn.setGridControlValue("TRANSPORTADORACONTATO_NOME",a||gx.fn.currentGridRowImpl(59),gx.O.A62TRANSPORTADORACONTATO_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A62TRANSPORTADORACONTATO_NOME=this.val()},val:function(a){return gx.fn.getGridControlValue("TRANSPORTADORACONTATO_NOME",
a||gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};b[62]={lvl:12,type:"char",len:2,dec:0,sign:false,ro:0,isacc:1,grid:59,gxgrid:this.Gridtransportadora_contatoContainer,fnc:this.Valid_Transportadoracontato_tipo,isvalid:null,rgrid:[],fld:"TRANSPORTADORACONTATO_TIPO",gxz:"Z63TRANSPORTADORACONTATO_TIPO",gxold:"O63TRANSPORTADORACONTATO_TIPO",gxvar:"A63TRANSPORTADORACONTATO_TIPO",ucs:[],op:[62],ip:[62],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(a){gx.O.A63TRANSPORTADORACONTATO_TIPO=a},v2z:function(a){gx.O.Z63TRANSPORTADORACONTATO_TIPO=
a},v2c:function(a){gx.fn.setGridComboBoxValue("TRANSPORTADORACONTATO_TIPO",a||gx.fn.currentGridRowImpl(59),gx.O.A63TRANSPORTADORACONTATO_TIPO);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A63TRANSPORTADORACONTATO_TIPO=this.val()},val:function(a){return gx.fn.getGridControlValue("TRANSPORTADORACONTATO_TIPO",a||gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};b[63]={lvl:12,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:59,gxgrid:this.Gridtransportadora_contatoContainer,
fnc:this.Valid_Transportadoracontato_telefone,isvalid:null,rgrid:[],fld:"TRANSPORTADORACONTATO_TELEFONE",gxz:"Z64TRANSPORTADORACONTATO_TELEFONE",gxold:"O64TRANSPORTADORACONTATO_TELEFONE",gxvar:"A64TRANSPORTADORACONTATO_TELEFONE",ucs:[],op:[63],ip:[63],nacdep:[],ctrltype:"edit",inputType:"tel",v2v:function(a){gx.O.A64TRANSPORTADORACONTATO_TELEFONE=a},v2z:function(a){gx.O.Z64TRANSPORTADORACONTATO_TELEFONE=a},v2c:function(a){gx.fn.setGridControlValue("TRANSPORTADORACONTATO_TELEFONE",a||gx.fn.currentGridRowImpl(59),
gx.O.A64TRANSPORTADORACONTATO_TELEFONE,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A64TRANSPORTADORACONTATO_TELEFONE=this.val()},val:function(a){return gx.fn.getGridControlValue("TRANSPORTADORACONTATO_TELEFONE",a||gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};b[64]={fld:"",grid:0};b[65]={fld:"",grid:0};b[66]={fld:"",grid:0};this.O56TRANSPORTADORA_LOGRADOURO=this.Z56TRANSPORTADORA_LOGRADOURO=this.A56TRANSPORTADORA_LOGRADOURO=this.O55TRANSPORTADORA_CEP=this.Z55TRANSPORTADORA_CEP=
this.A55TRANSPORTADORA_CEP=this.O54TRANSPORTADORA_NOME_FANTASIA=this.Z54TRANSPORTADORA_NOME_FANTASIA=this.A54TRANSPORTADORA_NOME_FANTASIA=this.O53TRANSPORTADORA_RAZAO_SOCIAL=this.Z53TRANSPORTADORA_RAZAO_SOCIAL=this.A53TRANSPORTADORA_RAZAO_SOCIAL=this.O52TRANSPORTADORA_CNPJ=this.Z52TRANSPORTADORA_CNPJ=this.A52TRANSPORTADORA_CNPJ=this.O16FORNECEDOR_NOME_FANTASIA=this.Z16FORNECEDOR_NOME_FANTASIA=this.A16FORNECEDOR_NOME_FANTASIA="";this.O57TRANSPORTADORA_NUMERO=this.Z57TRANSPORTADORA_NUMERO=this.A57TRANSPORTADORA_NUMERO=
0;this.O59TRANSPORTADORA_OBSERVACAO=this.Z59TRANSPORTADORA_OBSERVACAO=this.A59TRANSPORTADORA_OBSERVACAO=this.O49TRANSPORTADORA_CIDADE_ID=this.Z49TRANSPORTADORA_CIDADE_ID=this.A49TRANSPORTADORA_CIDADE_ID=this.O50TRANSPORTADORA_ESTADO_UF=this.Z50TRANSPORTADORA_ESTADO_UF=this.A50TRANSPORTADORA_ESTADO_UF=this.O58TRANSPORTADORA_BAIRRO=this.Z58TRANSPORTADORA_BAIRRO=this.A58TRANSPORTADORA_BAIRRO="";this.O61TRANSPORTADORACONTATO_ID=this.Z61TRANSPORTADORACONTATO_ID=0;this.O64TRANSPORTADORACONTATO_TELEFONE=
this.Z64TRANSPORTADORACONTATO_TELEFONE=this.O63TRANSPORTADORACONTATO_TIPO=this.Z63TRANSPORTADORACONTATO_TIPO=this.O62TRANSPORTADORACONTATO_NOME=this.Z62TRANSPORTADORACONTATO_NOME="";this.A61TRANSPORTADORACONTATO_ID=0;this.A64TRANSPORTADORACONTATO_TELEFONE=this.A63TRANSPORTADORACONTATO_TIPO=this.A62TRANSPORTADORACONTATO_NOME="";this.A51TRANSPORTADORA_ID=this.A13FORNECEDOR_ID=0;this.A65TRANSPORTADORA_USUARIO_INCLUSAO="";this.A66TRANSPORTADORA_DATAHORA_INCLUSAO=gx.date.nullDate();this.A67TRANSPORTADORA_USUARIO_ALTERACAO=
"";this.A68TRANSPORTADORA_DATAHORA_ALTERACAO=gx.date.nullDate();this.A49TRANSPORTADORA_CIDADE_ID=this.A50TRANSPORTADORA_ESTADO_UF=this.A58TRANSPORTADORA_BAIRRO=this.A56TRANSPORTADORA_LOGRADOURO=this.AV13CMSG=this.AV12CCOD=this.A69TRANSPORTADORA_STATUS_REGISTRO="";this.Gx_BScreen=0;this.A55TRANSPORTADORA_CEP=this.A54TRANSPORTADORA_NOME_FANTASIA=this.A53TRANSPORTADORA_RAZAO_SOCIAL=this.A52TRANSPORTADORA_CNPJ=this.A16FORNECEDOR_NOME_FANTASIA="";this.A57TRANSPORTADORA_NUMERO=0;this.A59TRANSPORTADORA_OBSERVACAO=
"";this.A60TRANSPORTADORACONTATO_SERIAL=0;this.Events={e11062_client:["AFTER TRN",true],e12062_client:["'ELIMINAR'",true],e130611_client:["ENTER",true],e140611_client:["CANCEL",true]};this.EvtParms.ENTER=[[{postForm:true},{av:"A13FORNECEDOR_ID",fld:"FORNECEDOR_ID"},{av:"A51TRANSPORTADORA_ID",fld:"TRANSPORTADORA_ID"}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["AFTER TRN"]=[[],[]];this.EvtParms["'ELIMINAR'"]=[[{av:"A13FORNECEDOR_ID",fld:"FORNECEDOR_ID"}],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("A65TRANSPORTADORA_USUARIO_INCLUSAO",
"TRANSPORTADORA_USUARIO_INCLUSAO",0,"svchar");this.setVCMap("A66TRANSPORTADORA_DATAHORA_INCLUSAO","TRANSPORTADORA_DATAHORA_INCLUSAO",0,"dtime");this.setVCMap("A67TRANSPORTADORA_USUARIO_ALTERACAO","TRANSPORTADORA_USUARIO_ALTERACAO",0,"svchar");this.setVCMap("A68TRANSPORTADORA_DATAHORA_ALTERACAO","TRANSPORTADORA_DATAHORA_ALTERACAO",0,"dtime");this.setVCMap("A69TRANSPORTADORA_STATUS_REGISTRO","TRANSPORTADORA_STATUS_REGISTRO",0,"char");this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int");this.setVCMap("AV12CCOD",
"vCCOD",0,"svchar");this.setVCMap("AV13CMSG","vCMSG",0,"svchar");this.setVCMap("A51TRANSPORTADORA_ID","TRANSPORTADORA_ID",0,"int");this.setVCMap("A13FORNECEDOR_ID","FORNECEDOR_ID",0,"int");this.setVCMap("A60TRANSPORTADORACONTATO_SERIAL","TRANSPORTADORACONTATO_SERIAL",0,"int");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars();this.LvlOlds[11]=["O60TRANSPORTADORACONTATO_SERIAL"]});gx.createParentObj(transportadora);
