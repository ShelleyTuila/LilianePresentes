gx.evt.autoSkip=!1;
gx.define("ww_cadastroproduto",!1,function(){this.ServerClass="ww_cadastroproduto";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV30isErro=gx.fn.getControlValue("vISERRO");this.AV11PRODUTO=gx.fn.getControlValue("vPRODUTO");this.AV41isErroFornecedor=gx.fn.getControlValue("vISERROFORNECEDOR");
this.AV47isErroCores=gx.fn.getControlValue("vISERROCORES");this.AV39Table=gx.fn.getControlValue("vTABLE");this.AV17AuxPRODUTO_REFERENCIA=gx.fn.getIntegerValue("vAUXPRODUTO_REFERENCIA",".");this.A151PRODUTO_REFERENCIA=gx.fn.getIntegerValue("PRODUTO_REFERENCIA",".");this.A76PRODUTO_STATUS_REGISTRO=gx.fn.getControlValue("PRODUTO_STATUS_REGISTRO");this.A85PRODUTO_NOME=gx.fn.getControlValue("PRODUTO_NOME");this.A71PRODUTO_DESCRICAO=gx.fn.getControlValue("PRODUTO_DESCRICAO");this.A13FORNECEDOR_ID=gx.fn.getIntegerValue("FORNECEDOR_ID",
".");this.A16FORNECEDOR_NOME_FANTASIA=gx.fn.getControlValue("FORNECEDOR_NOME_FANTASIA");this.A77TIPO_PRODUTO_ID=gx.fn.getIntegerValue("TIPO_PRODUTO_ID",".");this.A161PRODUTO_VALOR_COMPRA=gx.fn.getDecimalValue("PRODUTO_VALOR_COMPRA",".",",");this.A163PRODUTO_VALOR_VENDA=gx.fn.getDecimalValue("PRODUTO_VALOR_VENDA",".",",");this.A164PRODUTO_VALOR_DESCONTO=gx.fn.getDecimalValue("PRODUTO_VALOR_DESCONTO",".",",");this.AV22AuxFORNECEDOR_ID=gx.fn.getIntegerValue("vAUXFORNECEDOR_ID",".");this.A30FORNECEDOR_STATUS_REGISTRO=
gx.fn.getControlValue("FORNECEDOR_STATUS_REGISTRO");this.AV46AuxCORES_ID=gx.fn.getIntegerValue("vAUXCORES_ID",".");this.A144CORES_ID=gx.fn.getIntegerValue("CORES_ID",".");this.A150CORES_STATUS_REGISTRO=gx.fn.getControlValue("CORES_STATUS_REGISTRO");this.A145CORES_DESCRICAO=gx.fn.getControlValue("CORES_DESCRICAO");this.AV31PRODUTO_ID=gx.fn.getIntegerValue("vPRODUTO_ID",".")};this.s132_client=function(){gx.fn.setCtrlProperty("CTLPRODUTO_CODIGO","Enabled",false);gx.fn.setCtrlProperty("CTLPRODUTO_REFERENCIA",
"Enabled",false);gx.fn.setCtrlProperty("CTLFORNECEDOR_ID","Enabled",false);gx.fn.setCtrlProperty("CTLPRODUTO_NOME","Enabled",false);gx.fn.setCtrlProperty("CTLPRODUTO_DESCRICAO","Enabled",false);gx.fn.setCtrlProperty("CTLTIPO_PRODUTO_ID","Enabled",false);gx.fn.setCtrlProperty("CTLPRODUTO_TAMANHO","Enabled",false);gx.fn.setCtrlProperty("CTLCORES_ID","Enabled",false);gx.fn.setCtrlProperty("CTLPRODUTO_OBSERVACAO","Enabled",false);gx.fn.setCtrlProperty("TABLEESTOQUE","Visible",false)};this.s142_client=
function(){this.AV30isErro=false;if(this.AV41isErroFornecedor){this.AV30isErro=true;this.addMessage("Fornecedor n\u00e3o encontrado.")}if(this.AV47isErroCores){this.AV30isErro=true;this.addMessage("Cor n\u00e3o encontrada.")}if(""==this.AV11PRODUTO.PRODUTO_NOME){this.AV30isErro=true;this.addMessage("Descri\u00e7\u00e3o resumida \u00e9 obrigat\u00f3rio.")}if(""==this.AV11PRODUTO.PRODUTO_DESCRICAO){this.AV30isErro=true;this.addMessage("Descri\u00e7\u00e3o \u00e9 obrigat\u00f3rio.")}if(0==this.AV11PRODUTO.PRODUTO_VALOR_COMPRA){this.AV30isErro=
true;this.addMessage("Valor de compra \u00e9 obrigat\u00f3rio.")}if(0==this.AV11PRODUTO.PRODUTO_VALOR_VENDA){this.AV30isErro=true;this.addMessage("Valor de venda \u00e9 obrigat\u00f3rio.")}if(this.Gx_mode=="INS"&&0==this.AV35ESTOQUE_QTDE){this.AV30isErro=true;this.addMessage("Quantidade inicial \u00e9 obrigat\u00f3rio.")}0==this.AV11PRODUTO.PRODUTO_QTDE_MINIMA&&this.addMessage("Quantidade m\u00ednima \u00e9 obrigat\u00f3rio.")};this.e121h2_client=function(){this.executeServerEvent("ENTER",true)};
this.e131h2_client=function(){this.executeServerEvent("'FECHAR'",false)};this.e141h2_client=function(){this.executeServerEvent("CTLPRODUTO_REFERENCIA.ISVALID",true)};this.e151h2_client=function(){this.executeServerEvent("CTLFORNECEDOR_ID.ISVALID",true)};this.e161h2_client=function(){this.executeServerEvent("CTLCORES_ID.ISVALID",true)};this.e181h2_client=function(){this.executeServerEvent("CANCEL",true)};var a=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,
23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,84,85,86];this.GXLastCtrlId=86;a[2]={fld:"",grid:0};a[3]={fld:"MAINTABLE",grid:0};a[4]={fld:"",grid:0};a[5]={fld:"",grid:0};a[6]={fld:"TEXTBLOCK1",format:0,grid:0};a[7]={fld:"",grid:0};a[8]={fld:"",grid:0};a[10]={fld:"",grid:0};a[11]={fld:"",grid:0};a[12]={fld:"",grid:0};a[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",
ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_ID",gxz:"ZV49GXV1",gxold:"OV49GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV1=gx.num.intval(a)},v2z:function(a){gx.O.ZV49GXV1=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("CTLPRODUTO_ID",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLPRODUTO_ID",".")},nac:gx.falseFn};a[14]={fld:"",grid:0};a[15]={fld:"",grid:0};
a[16]={fld:"",grid:0};a[17]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e141h2_client",rgrid:[],fld:"CTLPRODUTO_REFERENCIA",gxz:"ZV52GXV2",gxold:"OV52GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV2=gx.num.intval(a)},v2z:function(a){gx.O.ZV52GXV2=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("CTLPRODUTO_REFERENCIA",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLPRODUTO_REFERENCIA",
".")},nac:gx.falseFn};a[18]={fld:"",grid:0};a[19]={fld:"",grid:0};a[20]={fld:"",grid:0};a[21]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e151h2_client",rgrid:[],fld:"CTLFORNECEDOR_ID",gxz:"ZV53GXV3",gxold:"OV53GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV3=gx.num.intval(a)},v2z:function(a){gx.O.ZV53GXV3=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("CTLFORNECEDOR_ID",gx.O.GXV3,0)},c2v:function(){gx.O.GXV3=
gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLFORNECEDOR_ID",".")},nac:gx.falseFn};a[22]={fld:"",grid:0};a[23]={fld:"",grid:0};a[24]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDOR_NOME_FANTASIA",gxz:"ZV18FORNECEDOR_NOME_FANTASIA",gxold:"OV18FORNECEDOR_NOME_FANTASIA",gxvar:"AV18FORNECEDOR_NOME_FANTASIA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV18FORNECEDOR_NOME_FANTASIA=a},
v2z:function(a){gx.O.ZV18FORNECEDOR_NOME_FANTASIA=a},v2c:function(){gx.fn.setControlValue("vFORNECEDOR_NOME_FANTASIA",gx.O.AV18FORNECEDOR_NOME_FANTASIA,0)},c2v:function(){gx.O.AV18FORNECEDOR_NOME_FANTASIA=this.val()},val:function(){return gx.fn.getControlValue("vFORNECEDOR_NOME_FANTASIA")},nac:gx.falseFn};a[25]={fld:"",grid:0};a[26]={fld:"",grid:0};a[27]={fld:"",grid:0};a[28]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_CODIGO",
gxz:"ZV54GXV4",gxold:"OV54GXV4",gxvar:"GXV4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV4=a},v2z:function(a){gx.O.ZV54GXV4=a},v2c:function(){gx.fn.setControlValue("CTLPRODUTO_CODIGO",gx.O.GXV4,0)},c2v:function(){gx.O.GXV4=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTO_CODIGO")},nac:gx.falseFn};a[29]={fld:"",grid:0};a[30]={fld:"",grid:0};a[31]={fld:"",grid:0};a[32]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,
rgrid:[],fld:"CTLPRODUTO_NOME",gxz:"ZV55GXV5",gxold:"OV55GXV5",gxvar:"GXV5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV5=a},v2z:function(a){gx.O.ZV55GXV5=a},v2c:function(){gx.fn.setControlValue("CTLPRODUTO_NOME",gx.O.GXV5,0)},c2v:function(){gx.O.GXV5=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTO_NOME")},nac:gx.falseFn};a[33]={fld:"",grid:0};a[34]={fld:"",grid:0};a[35]={fld:"",grid:0};a[36]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,
fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_DESCRICAO",gxz:"ZV56GXV6",gxold:"OV56GXV6",gxvar:"GXV6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV6=a},v2z:function(a){gx.O.ZV56GXV6=a},v2c:function(){gx.fn.setControlValue("CTLPRODUTO_DESCRICAO",gx.O.GXV6,0)},c2v:function(){gx.O.GXV6=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTO_DESCRICAO")},nac:gx.falseFn};a[37]={fld:"",grid:0};a[38]={fld:"",grid:0};a[39]={fld:"",grid:0};a[40]={lvl:0,type:"int",len:4,
dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPO_PRODUTO_ID",gxz:"ZV57GXV7",gxold:"OV57GXV7",gxvar:"GXV7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.GXV7=gx.num.intval(a)},v2z:function(a){gx.O.ZV57GXV7=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("CTLTIPO_PRODUTO_ID",gx.O.GXV7)},c2v:function(){gx.O.GXV7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLTIPO_PRODUTO_ID",".")},nac:gx.falseFn};
a[41]={fld:"",grid:0};a[42]={fld:"",grid:0};a[43]={fld:"",grid:0};a[44]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_TAMANHO",gxz:"ZV58GXV8",gxold:"OV58GXV8",gxvar:"GXV8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV8=a},v2z:function(a){gx.O.ZV58GXV8=a},v2c:function(){gx.fn.setControlValue("CTLPRODUTO_TAMANHO",gx.O.GXV8,0)},c2v:function(){gx.O.GXV8=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTO_TAMANHO")},
nac:gx.falseFn};a[45]={fld:"",grid:0};a[46]={fld:"",grid:0};a[47]={fld:"",grid:0};a[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e161h2_client",rgrid:[],fld:"CTLCORES_ID",gxz:"ZV59GXV9",gxold:"OV59GXV9",gxvar:"GXV9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV9=gx.num.intval(a)},v2z:function(a){gx.O.ZV59GXV9=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("CTLCORES_ID",gx.O.GXV9,0)},c2v:function(){gx.O.GXV9=gx.num.intval(this.val())},
val:function(){return gx.fn.getIntegerValue("CTLCORES_ID",".")},nac:gx.falseFn};a[49]={fld:"",grid:0};a[50]={fld:"",grid:0};a[51]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORES_DESCRICAO",gxz:"ZV44CORES_DESCRICAO",gxold:"OV44CORES_DESCRICAO",gxvar:"AV44CORES_DESCRICAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV44CORES_DESCRICAO=a},v2z:function(a){gx.O.ZV44CORES_DESCRICAO=a},v2c:function(){gx.fn.setControlValue("vCORES_DESCRICAO",
gx.O.AV44CORES_DESCRICAO,0)},c2v:function(){gx.O.AV44CORES_DESCRICAO=this.val()},val:function(){return gx.fn.getControlValue("vCORES_DESCRICAO")},nac:gx.falseFn};a[52]={fld:"",grid:0};a[53]={fld:"",grid:0};a[54]={fld:"TABLEESTOQUE",grid:0};a[55]={fld:"",grid:0};a[56]={fld:"",grid:0};a[57]={fld:"",grid:0};a[58]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESTOQUE_QTDE",gxz:"ZV35ESTOQUE_QTDE",gxold:"OV35ESTOQUE_QTDE",gxvar:"AV35ESTOQUE_QTDE",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV35ESTOQUE_QTDE=gx.num.intval(a)},v2z:function(a){gx.O.ZV35ESTOQUE_QTDE=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vESTOQUE_QTDE",gx.O.AV35ESTOQUE_QTDE,0)},c2v:function(){gx.O.AV35ESTOQUE_QTDE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESTOQUE_QTDE",".")},nac:gx.falseFn};a[59]={fld:"",grid:0};a[60]={fld:"",grid:0};a[61]={fld:"",grid:0};a[62]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",
ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_QTDE_MINIMA",gxz:"ZV60GXV10",gxold:"OV60GXV10",gxvar:"GXV10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV10=gx.num.intval(a)},v2z:function(a){gx.O.ZV60GXV10=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("CTLPRODUTO_QTDE_MINIMA",gx.O.GXV10,0)},c2v:function(){gx.O.GXV10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLPRODUTO_QTDE_MINIMA",".")},nac:gx.falseFn};a[63]={fld:"",
grid:0};a[64]={fld:"",grid:0};a[65]={fld:"",grid:0};a[66]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_VALOR_COMPRA",gxz:"ZV61GXV11",gxold:"OV61GXV11",gxvar:"GXV11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV11=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV61GXV11=gx.fn.toDecimalValue(a,".",",")},v2c:function(){gx.fn.setDecimalValue("CTLPRODUTO_VALOR_COMPRA",gx.O.GXV11,2,",")},
c2v:function(){gx.O.GXV11=this.val()},val:function(){return gx.fn.getDecimalValue("CTLPRODUTO_VALOR_COMPRA",".",",")},nac:gx.falseFn};a[67]={fld:"",grid:0};a[68]={fld:"",grid:0};a[69]={fld:"",grid:0};a[70]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_VALOR_VENDA",gxz:"ZV62GXV12",gxold:"OV62GXV12",gxvar:"GXV12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV12=gx.fn.toDecimalValue(a,",",".")},
v2z:function(a){gx.O.ZV62GXV12=gx.fn.toDecimalValue(a,".",",")},v2c:function(){gx.fn.setDecimalValue("CTLPRODUTO_VALOR_VENDA",gx.O.GXV12,2,",")},c2v:function(){gx.O.GXV12=this.val()},val:function(){return gx.fn.getDecimalValue("CTLPRODUTO_VALOR_VENDA",".",",")},nac:gx.falseFn};a[71]={fld:"",grid:0};a[72]={fld:"",grid:0};a[73]={fld:"",grid:0};a[74]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_VALOR_DESCONTO",gxz:"ZV63GXV13",
gxold:"OV63GXV13",gxvar:"GXV13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV13=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV63GXV13=gx.fn.toDecimalValue(a,".",",")},v2c:function(){gx.fn.setDecimalValue("CTLPRODUTO_VALOR_DESCONTO",gx.O.GXV13,2,",")},c2v:function(){gx.O.GXV13=this.val()},val:function(){return gx.fn.getDecimalValue("CTLPRODUTO_VALOR_DESCONTO",".",",")},nac:gx.falseFn};a[75]={fld:"",grid:0};a[76]={fld:"",grid:0};a[77]={fld:"",grid:0};a[78]={lvl:0,type:"svchar",
len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO_OBSERVACAO",gxz:"ZV64GXV14",gxold:"OV64GXV14",gxvar:"GXV14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.GXV14=a},v2z:function(a){gx.O.ZV64GXV14=a},v2c:function(){gx.fn.setControlValue("CTLPRODUTO_OBSERVACAO",gx.O.GXV14,0)},c2v:function(){gx.O.GXV14=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTO_OBSERVACAO")},nac:gx.falseFn};a[79]={fld:"",grid:0};
a[80]={fld:"",grid:0};a[81]={fld:"",grid:0};a[84]={fld:"PROMPT_GXV2",grid:0};a[85]={fld:"PROMPT_GXV3",grid:0};a[86]={fld:"PROMPT_GXV9",grid:0};this.OV53GXV3=this.ZV53GXV3=this.GXV3=this.OV52GXV2=this.ZV52GXV2=this.GXV2=this.OV49GXV1=this.ZV49GXV1=this.GXV1=0;this.OV56GXV6=this.ZV56GXV6=this.GXV6=this.OV55GXV5=this.ZV55GXV5=this.GXV5=this.OV54GXV4=this.ZV54GXV4=this.GXV4=this.OV18FORNECEDOR_NOME_FANTASIA=this.ZV18FORNECEDOR_NOME_FANTASIA=this.AV18FORNECEDOR_NOME_FANTASIA="";this.OV57GXV7=this.ZV57GXV7=
this.GXV7=0;this.OV58GXV8=this.ZV58GXV8=this.GXV8="";this.OV59GXV9=this.ZV59GXV9=this.GXV9=0;this.OV44CORES_DESCRICAO=this.ZV44CORES_DESCRICAO=this.AV44CORES_DESCRICAO="";this.OV63GXV13=this.ZV63GXV13=this.GXV13=this.OV62GXV12=this.ZV62GXV12=this.GXV12=this.OV61GXV11=this.ZV61GXV11=this.GXV11=this.OV60GXV10=this.ZV60GXV10=this.GXV10=this.OV35ESTOQUE_QTDE=this.ZV35ESTOQUE_QTDE=this.AV35ESTOQUE_QTDE=0;this.OV64GXV14=this.ZV64GXV14=this.GXV14="";this.GXV3=this.GXV2=this.GXV1=0;this.GXV6=this.GXV5=this.GXV4=
this.AV18FORNECEDOR_NOME_FANTASIA="";this.GXV7=0;this.GXV8="";this.GXV9=0;this.AV44CORES_DESCRICAO="";this.GXV13=this.GXV12=this.GXV11=this.GXV10=this.AV35ESTOQUE_QTDE=0;this.GXV14="";this.AV31PRODUTO_ID=0;this.A76PRODUTO_STATUS_REGISTRO="";this.A151PRODUTO_REFERENCIA=0;this.A71PRODUTO_DESCRICAO=this.A85PRODUTO_NOME="";this.A13FORNECEDOR_ID=0;this.A16FORNECEDOR_NOME_FANTASIA="";this.A164PRODUTO_VALOR_DESCONTO=this.A163PRODUTO_VALOR_VENDA=this.A161PRODUTO_VALOR_COMPRA=this.A77TIPO_PRODUTO_ID=0;this.A150CORES_STATUS_REGISTRO=
"";this.A144CORES_ID=0;this.Gx_mode=this.A30FORNECEDOR_STATUS_REGISTRO=this.A145CORES_DESCRICAO="";this.AV30isErro=false;this.AV11PRODUTO={};this.AV47isErroCores=this.AV41isErroFornecedor=false;this.AV39Table="";this.AV46AuxCORES_ID=this.AV22AuxFORNECEDOR_ID=this.AV17AuxPRODUTO_REFERENCIA=0;this.Events={e121h2_client:["ENTER",true],e131h2_client:["'FECHAR'",true],e141h2_client:["CTLPRODUTO_REFERENCIA.ISVALID",true],e151h2_client:["CTLFORNECEDOR_ID.ISVALID",true],e161h2_client:["CTLCORES_ID.ISVALID",
true],e181h2_client:["CANCEL",true]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV30isErro",fld:"vISERRO"},{av:"AV11PRODUTO",fld:"vPRODUTO"},{av:"AV41isErroFornecedor",fld:"vISERROFORNECEDOR"},{av:"AV47isErroCores",fld:"vISERROCORES"},{av:"AV35ESTOQUE_QTDE",fld:"vESTOQUE_QTDE"},{av:"AV39Table",fld:"vTABLE"}],[{av:"AV11PRODUTO",fld:"vPRODUTO"},{av:"AV30isErro",fld:"vISERRO"},{av:"AV39Table",fld:"vTABLE"},{av:"AV15Messages",fld:"vMESSAGES"},{av:"AV67GXV15",fld:"vGXV15"},
{av:"AV16Message",fld:"vMESSAGE"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms["CTLPRODUTO_REFERENCIA.ISVALID"]=[[{av:"AV11PRODUTO",fld:"vPRODUTO"},{av:"AV17AuxPRODUTO_REFERENCIA",fld:"vAUXPRODUTO_REFERENCIA"},{av:"A151PRODUTO_REFERENCIA",fld:"PRODUTO_REFERENCIA"},{av:"A76PRODUTO_STATUS_REGISTRO",fld:"PRODUTO_STATUS_REGISTRO"},{av:"A85PRODUTO_NOME",fld:"PRODUTO_NOME"},{av:"A71PRODUTO_DESCRICAO",fld:"PRODUTO_DESCRICAO"},{av:"A13FORNECEDOR_ID",fld:"FORNECEDOR_ID"},{av:"A16FORNECEDOR_NOME_FANTASIA",
fld:"FORNECEDOR_NOME_FANTASIA"},{av:"A77TIPO_PRODUTO_ID",fld:"TIPO_PRODUTO_ID"},{av:"A161PRODUTO_VALOR_COMPRA",fld:"PRODUTO_VALOR_COMPRA"},{av:"A163PRODUTO_VALOR_VENDA",fld:"PRODUTO_VALOR_VENDA"},{av:"A164PRODUTO_VALOR_DESCONTO",fld:"PRODUTO_VALOR_DESCONTO"}],[{av:"AV17AuxPRODUTO_REFERENCIA",fld:"vAUXPRODUTO_REFERENCIA"},{av:"AV11PRODUTO",fld:"vPRODUTO"},{av:"AV18FORNECEDOR_NOME_FANTASIA",fld:"vFORNECEDOR_NOME_FANTASIA"}]];this.EvtParms["CTLFORNECEDOR_ID.ISVALID"]=[[{av:"AV11PRODUTO",fld:"vPRODUTO"},
{av:"AV22AuxFORNECEDOR_ID",fld:"vAUXFORNECEDOR_ID"},{av:"A13FORNECEDOR_ID",fld:"FORNECEDOR_ID"},{av:"A30FORNECEDOR_STATUS_REGISTRO",fld:"FORNECEDOR_STATUS_REGISTRO"},{av:"A16FORNECEDOR_NOME_FANTASIA",fld:"FORNECEDOR_NOME_FANTASIA"}],[{av:"AV41isErroFornecedor",fld:"vISERROFORNECEDOR"},{av:"AV65GXLvl100",fld:"vGXLVL100"},{av:"AV18FORNECEDOR_NOME_FANTASIA",fld:"vFORNECEDOR_NOME_FANTASIA"},{av:"AV22AuxFORNECEDOR_ID",fld:"vAUXFORNECEDOR_ID"}]];this.EvtParms["CTLCORES_ID.ISVALID"]=[[{av:"AV11PRODUTO",
fld:"vPRODUTO"},{av:"AV46AuxCORES_ID",fld:"vAUXCORES_ID"},{av:"A144CORES_ID",fld:"CORES_ID"},{av:"A150CORES_STATUS_REGISTRO",fld:"CORES_STATUS_REGISTRO"},{av:"A145CORES_DESCRICAO",fld:"CORES_DESCRICAO"}],[{av:"AV66GXLvl127",fld:"vGXLVL127"},{av:"AV44CORES_DESCRICAO",fld:"vCORES_DESCRICAO"},{av:"AV47isErroCores",fld:"vISERROCORES"},{av:"AV46AuxCORES_ID",fld:"vAUXCORES_ID"}]];this.setPrompt("PROMPT_GXV2",[17]);this.setPrompt("PROMPT_GXV3",[21]);this.setPrompt("PROMPT_GXV9",[48]);this.EnterCtrl=["ENTER"];
this.setVCMap("Gx_mode","vMODE",0,"char");this.setVCMap("AV30isErro","vISERRO",0,"boolean");this.setVCMap("AV11PRODUTO","vPRODUTO",0,"PRODUTO");this.setVCMap("AV41isErroFornecedor","vISERROFORNECEDOR",0,"boolean");this.setVCMap("AV47isErroCores","vISERROCORES",0,"boolean");this.setVCMap("AV39Table","vTABLE",0,"svchar");this.setVCMap("AV17AuxPRODUTO_REFERENCIA","vAUXPRODUTO_REFERENCIA",0,"int");this.setVCMap("A151PRODUTO_REFERENCIA","PRODUTO_REFERENCIA",0,"int");this.setVCMap("A76PRODUTO_STATUS_REGISTRO",
"PRODUTO_STATUS_REGISTRO",0,"char");this.setVCMap("A85PRODUTO_NOME","PRODUTO_NOME",0,"svchar");this.setVCMap("A71PRODUTO_DESCRICAO","PRODUTO_DESCRICAO",0,"svchar");this.setVCMap("A13FORNECEDOR_ID","FORNECEDOR_ID",0,"int");this.setVCMap("A16FORNECEDOR_NOME_FANTASIA","FORNECEDOR_NOME_FANTASIA",0,"svchar");this.setVCMap("A77TIPO_PRODUTO_ID","TIPO_PRODUTO_ID",0,"int");this.setVCMap("A161PRODUTO_VALOR_COMPRA","PRODUTO_VALOR_COMPRA",0,"decimal");this.setVCMap("A163PRODUTO_VALOR_VENDA","PRODUTO_VALOR_VENDA",
0,"decimal");this.setVCMap("A164PRODUTO_VALOR_DESCONTO","PRODUTO_VALOR_DESCONTO",0,"decimal");this.setVCMap("AV22AuxFORNECEDOR_ID","vAUXFORNECEDOR_ID",0,"int");this.setVCMap("A30FORNECEDOR_STATUS_REGISTRO","FORNECEDOR_STATUS_REGISTRO",0,"char");this.setVCMap("AV46AuxCORES_ID","vAUXCORES_ID",0,"int");this.setVCMap("A144CORES_ID","CORES_ID",0,"int");this.setVCMap("A150CORES_STATUS_REGISTRO","CORES_STATUS_REGISTRO",0,"char");this.setVCMap("A145CORES_DESCRICAO","CORES_DESCRICAO",0,"svchar");this.setVCMap("AV31PRODUTO_ID",
"vPRODUTO_ID",0,"int");this.addBCProperty("Produto",["PRODUTO_ID"],this.GXValidFnc[13],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_REFERENCIA"],this.GXValidFnc[17],"AV11PRODUTO");this.addBCProperty("Produto",["FORNECEDOR_ID"],this.GXValidFnc[21],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_CODIGO"],this.GXValidFnc[28],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_NOME"],this.GXValidFnc[32],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_DESCRICAO"],this.GXValidFnc[36],
"AV11PRODUTO");this.addBCProperty("Produto",["TIPO_PRODUTO_ID"],this.GXValidFnc[40],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_TAMANHO"],this.GXValidFnc[44],"AV11PRODUTO");this.addBCProperty("Produto",["CORES_ID"],this.GXValidFnc[48],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_QTDE_MINIMA"],this.GXValidFnc[62],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_VALOR_COMPRA"],this.GXValidFnc[66],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_VALOR_VENDA"],this.GXValidFnc[70],
"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_VALOR_DESCONTO"],this.GXValidFnc[74],"AV11PRODUTO");this.addBCProperty("Produto",["PRODUTO_OBSERVACAO"],this.GXValidFnc[78],"AV11PRODUTO");this.InitStandaloneVars()});gx.createParentObj(ww_cadastroproduto);
