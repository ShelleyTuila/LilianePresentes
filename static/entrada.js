gx.evt.autoSkip=!1;
gx.define("entrada",!1,function(){this.ServerClass="entrada";this.PackageName="com.lilianepresentes";this.setObjectType("trn");this.hasEnterEvent=true;this.skipOnEnter=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=true;this.SetStandaloneVars=function(){this.A92ENTRADA_USUARIO_INCLUSAO=gx.fn.getControlValue("ENTRADA_USUARIO_INCLUSAO");this.A93ENTRADA_DATAHORA_INCLUSAO=gx.fn.getDateTimeValue("ENTRADA_DATAHORA_INCLUSAO");this.A94ENTRADA_USUARIO_ALTERACAO=gx.fn.getControlValue("ENTRADA_USUARIO_ALTERACAO");this.A95ENTRADA_DATAHORA_ALTERACAO=
gx.fn.getDateTimeValue("ENTRADA_DATAHORA_ALTERACAO");this.A86ENTRADA_ID=gx.fn.getIntegerValue("ENTRADA_ID",".");this.A96ENTRADA_STATUS_REGISTRO=gx.fn.getControlValue("ENTRADA_STATUS_REGISTRO");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Entrada_nota_data=function(){try{var a=gx.util.balloon.getNew("ENTRADA_NOTA_DATA");this.AnyError=0;if(!((new gx.date.gxdate("")).compare(this.A88ENTRADA_NOTA_DATA)==0||(new gx.date.gxdate(this.A88ENTRADA_NOTA_DATA)).compare(gx.date.ymdhmstot(1E3,1,1,0,
0,0))>=0))try{a.setError("Campo Data da nota fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(b){}}catch(c){}try{return a==null?true:a.show()}catch(d){}return true};this.Valid_Produto_id=function(){this.sMode18=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(18,31);this.standaloneModal0918();this.standaloneNotModal0918();if(gx.fn.currentGridRowImpl(31)===0){this.Gx_mode=this.sMode18;return true}var a=gx.util.balloon.getNew("PRODUTO_ID",gx.fn.currentGridRowImpl(31));if(gx.fn.gridDuplicateKey(32)){a.setError(gx.text.format(gx.getMessage("GXM_1004"),
"PRODUTO","","","","","","","",""));this.AnyError=gx.num.trunc(1,0);this.Gx_mode=this.sMode18;return a.show()}gx.ajax.validSrvEvt("dyncall","valid_Produto_id",["gx.O.A70PRODUTO_ID","gx.O.A107PRODUTO_CODIGO","gx.O.A85PRODUTO_NOME"],["A107PRODUTO_CODIGO","A85PRODUTO_NOME"]);this.Gx_mode=this.sMode18;return true};this.Valid_Entradaproduto_qtde=function(){try{if(gx.fn.currentGridRowImpl(31)===0)return true;var a=gx.util.balloon.getNew("ENTRADAPRODUTO_QTDE",gx.fn.currentGridRowImpl(31));this.AnyError=
0;this.sMode18=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(18,31);if(this.A91ENTRADAPRODUTO_QTDE<=0)try{a.setError("Quantidade deve ser maior que 0");this.AnyError=gx.num.trunc(1,0)}catch(b){}}catch(c){}try{this.Gx_mode=this.sMode18;return a==null?true:a.show()}catch(d){}return true};this.Valid_Entradaproduto_valor_unitario=function(){try{if(gx.fn.currentGridRowImpl(31)===0)return true;var a=gx.util.balloon.getNew("ENTRADAPRODUTO_VALOR_UNITARIO",gx.fn.currentGridRowImpl(31));this.AnyError=0;this.sMode18=
this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(18,31);try{this.A100ENTRADAPRODUTO_VALOR_TOTAL=this.A91ENTRADAPRODUTO_QTDE*this.A98ENTRADAPRODUTO_VALOR_UNITARIO}catch(b){}try{this.A99ENTRADA_VALOR_TOTAL=gx.fn.sumFrm("A100ENTRADAPRODUTO_VALOR_TOTAL",0,".",",",31,gx.trueFn,[])}catch(c){}if(0==this.A98ENTRADAPRODUTO_VALOR_UNITARIO)try{a.setError("Valor unit\u00e1rio \u00e9 obrigat\u00f3rio");this.AnyError=gx.num.trunc(1,0)}catch(d){}}catch(e){}try{this.Gx_mode=this.sMode18;return a==null?true:a.show()}catch(f){}return true};
this.Valid_Entradaproduto_valor_total=function(){try{if(gx.fn.currentGridRowImpl(31)===0)return true;var a=gx.util.balloon.getNew("ENTRADAPRODUTO_VALOR_TOTAL",gx.fn.currentGridRowImpl(31));this.AnyError=0;this.sMode18=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(18,31)}catch(b){}try{this.Gx_mode=this.sMode18;return a==null?true:a.show()}catch(c){}return true};this.standaloneModal0918=function(){return true};this.standaloneNotModal0918=function(){try{gx.fn.setCtrlProperty("PRODUTO_ID","Enabled",
0)}catch(a){}return true};this.e12092_client=function(){this.executeServerEvent("AFTER TRN",true)};this.e130917_client=function(){this.executeServerEvent("ENTER",true)};this.e140917_client=function(){this.executeServerEvent("CANCEL",true)};var b=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38,39,40];this.GXLastCtrlId=40;var c=this.Gridentrada_produtoContainer=new gx.grid.grid(this,18,"PRODUTO",31,"Gridentrada_produto",
"Gridentrada_produto","Gridentrada_produtoContainer",this.CmpContext,this.IsMasterPage,"entrada",[70],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);c.addSingleLineEdit(70,32,"PRODUTO_ID","Produto","","PRODUTO_ID","int",0,"px",4,4,"right",null,[],70,"PRODUTO_ID",false,0,false,false,"Attribute",1,"");c.addSingleLineEdit(107,33,"PRODUTO_CODIGO","C\u00f3digo de barras","","PRODUTO_CODIGO","svchar",0,"px",20,20,"left",null,[],107,
"PRODUTO_CODIGO",true,0,false,false,"Attribute",1,"");c.addSingleLineEdit(85,34,"PRODUTO_NOME","Produto","","PRODUTO_NOME","svchar",0,"px",100,80,"left",null,[],85,"PRODUTO_NOME",true,0,false,false,"Attribute",1,"");c.addSingleLineEdit(91,35,"ENTRADAPRODUTO_QTDE","Qtde","","ENTRADAPRODUTO_QTDE","int",0,"px",4,4,"right",null,[],91,"ENTRADAPRODUTO_QTDE",true,0,false,false,"Attribute",1,"");c.addSingleLineEdit(98,36,"ENTRADAPRODUTO_VALOR_UNITARIO","Valor unit\u00e1rio","","ENTRADAPRODUTO_VALOR_UNITARIO",
"decimal",0,"px",8,8,"right",null,[],98,"ENTRADAPRODUTO_VALOR_UNITARIO",true,2,false,false,"Attribute",1,"");c.addSingleLineEdit(100,37,"ENTRADAPRODUTO_VALOR_TOTAL","Valor total","","ENTRADAPRODUTO_VALOR_TOTAL","decimal",0,"px",8,8,"right",null,[],100,"ENTRADAPRODUTO_VALOR_TOTAL",true,2,false,false,"Attribute",1,"");this.setGrid(c);b[2]={fld:"",grid:0};b[3]={fld:"TABLEMAIN",grid:0};b[4]={fld:"",grid:0};b[5]={fld:"",grid:0};b[6]={fld:"TITLE",format:0,grid:0};b[7]={fld:"",grid:0};b[8]={fld:"",grid:0};
b[10]={fld:"",grid:0};b[11]={fld:"",grid:0};b[12]={fld:"",grid:0};b[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADA_NOTA_FISCAL",gxz:"Z87ENTRADA_NOTA_FISCAL",gxold:"O87ENTRADA_NOTA_FISCAL",gxvar:"A87ENTRADA_NOTA_FISCAL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A87ENTRADA_NOTA_FISCAL=a},v2z:function(a){gx.O.Z87ENTRADA_NOTA_FISCAL=a},v2c:function(){gx.fn.setControlValue("ENTRADA_NOTA_FISCAL",gx.O.A87ENTRADA_NOTA_FISCAL,
0)},c2v:function(){gx.O.A87ENTRADA_NOTA_FISCAL=this.val()},val:function(){return gx.fn.getControlValue("ENTRADA_NOTA_FISCAL")},nac:gx.falseFn};b[14]={fld:"",grid:0};b[15]={fld:"",grid:0};b[16]={fld:"",grid:0};b[17]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entrada_nota_data,isvalid:null,rgrid:[],fld:"ENTRADA_NOTA_DATA",gxz:"Z88ENTRADA_NOTA_DATA",gxold:"O88ENTRADA_NOTA_DATA",gxvar:"A88ENTRADA_NOTA_DATA",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",
dec:5},ucs:[],op:[17],ip:[17],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A88ENTRADA_NOTA_DATA=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.Z88ENTRADA_NOTA_DATA=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("ENTRADA_NOTA_DATA",gx.O.A88ENTRADA_NOTA_DATA,0)},c2v:function(){gx.O.A88ENTRADA_NOTA_DATA=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ENTRADA_NOTA_DATA")},nac:gx.falseFn};b[18]={fld:"",grid:0};b[19]={fld:"",grid:0};b[20]={fld:"",grid:0};
b[21]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADA_VALOR_TOTAL",gxz:"Z99ENTRADA_VALOR_TOTAL",gxold:"O99ENTRADA_VALOR_TOTAL",gxvar:"A99ENTRADA_VALOR_TOTAL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A99ENTRADA_VALOR_TOTAL=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z99ENTRADA_VALOR_TOTAL=gx.fn.toDecimalValue(a,".",",")},v2c:function(){gx.fn.setDecimalValue("ENTRADA_VALOR_TOTAL",gx.O.A99ENTRADA_VALOR_TOTAL,
2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A99ENTRADA_VALOR_TOTAL=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADA_VALOR_TOTAL",".",",")},nac:gx.falseFn};this.declareDomainHdlr(21,function(){});b[22]={fld:"",grid:0};b[23]={fld:"",grid:0};b[24]={fld:"",grid:0};b[25]={lvl:0,type:"svchar",len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADA_OBSERVACAO",gxz:"Z97ENTRADA_OBSERVACAO",gxold:"O97ENTRADA_OBSERVACAO",
gxvar:"A97ENTRADA_OBSERVACAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A97ENTRADA_OBSERVACAO=a},v2z:function(a){gx.O.Z97ENTRADA_OBSERVACAO=a},v2c:function(){gx.fn.setControlValue("ENTRADA_OBSERVACAO",gx.O.A97ENTRADA_OBSERVACAO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A97ENTRADA_OBSERVACAO=this.val()},val:function(){return gx.fn.getControlValue("ENTRADA_OBSERVACAO")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});b[26]={fld:"",
grid:0};b[27]={fld:"",grid:0};b[28]={fld:"TITLEPRODUTO",format:0,grid:0};b[29]={fld:"",grid:0};b[30]={fld:"",grid:0};b[32]={lvl:18,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:1,grid:31,gxgrid:this.Gridentrada_produtoContainer,fnc:this.Valid_Produto_id,isvalid:null,rgrid:[],fld:"PRODUTO_ID",gxz:"Z70PRODUTO_ID",gxold:"O70PRODUTO_ID",gxvar:"A70PRODUTO_ID",ucs:[],op:[34,33],ip:[34,33,32],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A70PRODUTO_ID=gx.num.intval(a)},v2z:function(a){gx.O.Z70PRODUTO_ID=
gx.num.intval(a)},v2c:function(a){gx.fn.setGridControlValue("PRODUTO_ID",a||gx.fn.currentGridRowImpl(31),gx.O.A70PRODUTO_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A70PRODUTO_ID=gx.num.intval(this.val())},val:function(a){return gx.fn.getGridIntegerValue("PRODUTO_ID",a||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};b[33]={lvl:18,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:1,grid:31,gxgrid:this.Gridentrada_produtoContainer,fnc:null,isvalid:null,rgrid:[],
fld:"PRODUTO_CODIGO",gxz:"Z107PRODUTO_CODIGO",gxold:"O107PRODUTO_CODIGO",gxvar:"A107PRODUTO_CODIGO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A107PRODUTO_CODIGO=a},v2z:function(a){gx.O.Z107PRODUTO_CODIGO=a},v2c:function(a){gx.fn.setGridControlValue("PRODUTO_CODIGO",a||gx.fn.currentGridRowImpl(31),gx.O.A107PRODUTO_CODIGO,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A107PRODUTO_CODIGO=this.val()},val:function(a){return gx.fn.getGridControlValue("PRODUTO_CODIGO",
a||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};b[34]={lvl:18,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:1,grid:31,gxgrid:this.Gridentrada_produtoContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTO_NOME",gxz:"Z85PRODUTO_NOME",gxold:"O85PRODUTO_NOME",gxvar:"A85PRODUTO_NOME",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A85PRODUTO_NOME=a},v2z:function(a){gx.O.Z85PRODUTO_NOME=a},v2c:function(a){gx.fn.setGridControlValue("PRODUTO_NOME",a||
gx.fn.currentGridRowImpl(31),gx.O.A85PRODUTO_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A85PRODUTO_NOME=this.val()},val:function(a){return gx.fn.getGridControlValue("PRODUTO_NOME",a||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};b[35]={lvl:18,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:31,gxgrid:this.Gridentrada_produtoContainer,fnc:this.Valid_Entradaproduto_qtde,isvalid:null,rgrid:[],fld:"ENTRADAPRODUTO_QTDE",gxz:"Z91ENTRADAPRODUTO_QTDE",
gxold:"O91ENTRADAPRODUTO_QTDE",gxvar:"A91ENTRADAPRODUTO_QTDE",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A91ENTRADAPRODUTO_QTDE=gx.num.intval(a)},v2z:function(a){gx.O.Z91ENTRADAPRODUTO_QTDE=gx.num.intval(a)},v2c:function(a){gx.fn.setGridControlValue("ENTRADAPRODUTO_QTDE",a||gx.fn.currentGridRowImpl(31),gx.O.A91ENTRADAPRODUTO_QTDE,0)},c2v:function(){gx.O.A91ENTRADAPRODUTO_QTDE=gx.num.intval(this.val())},val:function(a){return gx.fn.getGridIntegerValue("ENTRADAPRODUTO_QTDE",
a||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};b[36]={lvl:18,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,isacc:1,grid:31,gxgrid:this.Gridentrada_produtoContainer,fnc:this.Valid_Entradaproduto_valor_unitario,isvalid:null,rgrid:[],fld:"ENTRADAPRODUTO_VALOR_UNITARIO",gxz:"Z98ENTRADAPRODUTO_VALOR_UNITARIO",gxold:"O98ENTRADAPRODUTO_VALOR_UNITARIO",gxvar:"A98ENTRADAPRODUTO_VALOR_UNITARIO",ucs:[],op:[36,21,37],ip:[21,37,36,35],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A98ENTRADAPRODUTO_VALOR_UNITARIO=
gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z98ENTRADAPRODUTO_VALOR_UNITARIO=gx.fn.toDecimalValue(a,".",",")},v2c:function(a){gx.fn.setGridDecimalValue("ENTRADAPRODUTO_VALOR_UNITARIO",a||gx.fn.currentGridRowImpl(31),gx.O.A98ENTRADAPRODUTO_VALOR_UNITARIO,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A98ENTRADAPRODUTO_VALOR_UNITARIO=this.val()},val:function(a){return gx.fn.getGridDecimalValue("ENTRADAPRODUTO_VALOR_UNITARIO",a||gx.fn.currentGridRowImpl(31),
".",",")},nac:gx.falseFn};b[37]={lvl:18,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,isacc:1,grid:31,gxgrid:this.Gridentrada_produtoContainer,fnc:this.Valid_Entradaproduto_valor_total,isvalid:null,rgrid:[],fld:"ENTRADAPRODUTO_VALOR_TOTAL",gxz:"Z100ENTRADAPRODUTO_VALOR_TOTAL",gxold:"O100ENTRADAPRODUTO_VALOR_TOTAL",gxvar:"A100ENTRADAPRODUTO_VALOR_TOTAL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A100ENTRADAPRODUTO_VALOR_TOTAL=gx.fn.toDecimalValue(a,
",",".")},v2z:function(a){gx.O.Z100ENTRADAPRODUTO_VALOR_TOTAL=gx.fn.toDecimalValue(a,".",",")},v2c:function(a){gx.fn.setGridDecimalValue("ENTRADAPRODUTO_VALOR_TOTAL",a||gx.fn.currentGridRowImpl(31),gx.O.A100ENTRADAPRODUTO_VALOR_TOTAL,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A100ENTRADAPRODUTO_VALOR_TOTAL=this.val()},val:function(a){return gx.fn.getGridDecimalValue("ENTRADAPRODUTO_VALOR_TOTAL",a||gx.fn.currentGridRowImpl(31),".",",")},nac:gx.falseFn};b[38]=
{fld:"",grid:0};b[39]={fld:"",grid:0};b[40]={fld:"",grid:0};this.O87ENTRADA_NOTA_FISCAL=this.Z87ENTRADA_NOTA_FISCAL=this.A87ENTRADA_NOTA_FISCAL="";this.A88ENTRADA_NOTA_DATA=gx.date.nullDate();this.Z88ENTRADA_NOTA_DATA=gx.date.nullDate();this.O88ENTRADA_NOTA_DATA=gx.date.nullDate();this.O99ENTRADA_VALOR_TOTAL=this.Z99ENTRADA_VALOR_TOTAL=this.A99ENTRADA_VALOR_TOTAL=0;this.O97ENTRADA_OBSERVACAO=this.Z97ENTRADA_OBSERVACAO=this.A97ENTRADA_OBSERVACAO="";this.O70PRODUTO_ID=this.Z70PRODUTO_ID=0;this.O85PRODUTO_NOME=
this.Z85PRODUTO_NOME=this.O107PRODUTO_CODIGO=this.Z107PRODUTO_CODIGO="";this.A100ENTRADAPRODUTO_VALOR_TOTAL=this.A70PRODUTO_ID=this.O100ENTRADAPRODUTO_VALOR_TOTAL=this.Z100ENTRADAPRODUTO_VALOR_TOTAL=this.O98ENTRADAPRODUTO_VALOR_UNITARIO=this.Z98ENTRADAPRODUTO_VALOR_UNITARIO=this.O91ENTRADAPRODUTO_QTDE=this.Z91ENTRADAPRODUTO_QTDE=0;this.A85PRODUTO_NOME=this.A107PRODUTO_CODIGO="";this.A98ENTRADAPRODUTO_VALOR_UNITARIO=this.A91ENTRADAPRODUTO_QTDE=0;this.AV8Context={};this.AV11WebSession={};this.A86ENTRADA_ID=
0;this.A92ENTRADA_USUARIO_INCLUSAO="";this.A93ENTRADA_DATAHORA_INCLUSAO=gx.date.nullDate();this.A94ENTRADA_USUARIO_ALTERACAO="";this.A95ENTRADA_DATAHORA_ALTERACAO=gx.date.nullDate();this.A87ENTRADA_NOTA_FISCAL="";this.A88ENTRADA_NOTA_DATA=gx.date.nullDate();this.A97ENTRADA_OBSERVACAO="";this.A99ENTRADA_VALOR_TOTAL=0;this.A96ENTRADA_STATUS_REGISTRO="";this.Events={e12092_client:["AFTER TRN",true],e130917_client:["ENTER",true],e140917_client:["CANCEL",true]};this.EvtParms.ENTER=[[{postForm:true}],[]];
this.EvtParms.REFRESH=[[],[]];this.EvtParms["AFTER TRN"]=[[],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("A92ENTRADA_USUARIO_INCLUSAO","ENTRADA_USUARIO_INCLUSAO",0,"svchar");this.setVCMap("A93ENTRADA_DATAHORA_INCLUSAO","ENTRADA_DATAHORA_INCLUSAO",0,"dtime");this.setVCMap("A94ENTRADA_USUARIO_ALTERACAO","ENTRADA_USUARIO_ALTERACAO",0,"svchar");this.setVCMap("A95ENTRADA_DATAHORA_ALTERACAO","ENTRADA_DATAHORA_ALTERACAO",0,"dtime");this.setVCMap("A86ENTRADA_ID","ENTRADA_ID",0,"int");this.setVCMap("A96ENTRADA_STATUS_REGISTRO",
"ENTRADA_STATUS_REGISTRO",0,"char");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars();this.LvlOlds[17]=["O99ENTRADA_VALOR_TOTAL"];this.LvlOlds[18]=["O100ENTRADAPRODUTO_VALOR_TOTAL"]});gx.createParentObj(entrada);