gx.evt.autoSkip=!1;
gx.define("wc_contatofornecedor",!0,function(b){this.ServerClass="wc_contatofornecedor";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.setCmpContext(b);this.ReadonlyForm=true;this.skipOnEnter=this.hasEnterEvent=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){};this.e12242_client=function(a){this.executeServerEvent("ENTER",true,a)};this.e13242_client=function(a){this.executeServerEvent("CANCEL",true,a)};
b=this.GXValidFnc=[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14];this.GXLastCtrlId=14;var c=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",10,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"wc_contatofornecedor",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);c.addSingleLineEdit(16,11,"FORNECEDOR_NOME_FANTASIA","Fornecedor","","FORNECEDOR_NOME_FANTASIA","svchar",0,"px",100,80,"left",null,[],16,"FORNECEDOR_NOME_FANTASIA",
true,0,false,false,"Attribute",1,"WWColumn WWOptionalColumn");c.addSingleLineEdit(25,12,"FORNECEDORCONTATO_NOME","Contato","","FORNECEDORCONTATO_NOME","svchar",0,"px",100,80,"left",null,[],25,"FORNECEDORCONTATO_NOME",true,0,false,false,"Attribute",1,"WWColumn");c.addComboBox(23,13,"FORNECEDORCONTATO_TIPO","Tipo de telefone","FORNECEDORCONTATO_TIPO","char",null,0,true,false,0,"px","WWColumn WWOptionalColumn");c.addSingleLineEdit(24,14,"FORNECEDORCONTATO_TELEFONE","Telefone","","FORNECEDORCONTATO_TELEFONE",
"char",0,"px",20,20,"left",null,[],24,"FORNECEDORCONTATO_TELEFONE",true,0,false,false,"Attribute",1,"WWColumn WWOptionalColumn");this.setGrid(c);b[2]={fld:"",grid:0};b[3]={fld:"MAINTABLE",grid:0};b[4]={fld:"",grid:0};b[5]={fld:"",grid:0};b[6]={fld:"",grid:0};b[7]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vFORNECEDOR_NOME_FANTASIA",gxz:"ZV5FORNECEDOR_NOME_FANTASIA",gxold:"OV5FORNECEDOR_NOME_FANTASIA",gxvar:"AV5FORNECEDOR_NOME_FANTASIA",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV5FORNECEDOR_NOME_FANTASIA=a},v2z:function(a){gx.O.ZV5FORNECEDOR_NOME_FANTASIA=a},v2c:function(){gx.fn.setControlValue("vFORNECEDOR_NOME_FANTASIA",gx.O.AV5FORNECEDOR_NOME_FANTASIA,0)},c2v:function(){gx.O.AV5FORNECEDOR_NOME_FANTASIA=this.val()},val:function(){return gx.fn.getControlValue("vFORNECEDOR_NOME_FANTASIA")},nac:gx.falseFn};b[8]={fld:"",grid:0};b[9]={fld:"",grid:0};b[11]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,
grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDOR_NOME_FANTASIA",gxz:"Z16FORNECEDOR_NOME_FANTASIA",gxold:"O16FORNECEDOR_NOME_FANTASIA",gxvar:"A16FORNECEDOR_NOME_FANTASIA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A16FORNECEDOR_NOME_FANTASIA=a},v2z:function(a){gx.O.Z16FORNECEDOR_NOME_FANTASIA=a},v2c:function(a){gx.fn.setGridControlValue("FORNECEDOR_NOME_FANTASIA",a||gx.fn.currentGridRowImpl(10),gx.O.A16FORNECEDOR_NOME_FANTASIA,
0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A16FORNECEDOR_NOME_FANTASIA=this.val()},val:function(a){return gx.fn.getGridControlValue("FORNECEDOR_NOME_FANTASIA",a||gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};b[12]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDORCONTATO_NOME",gxz:"Z25FORNECEDORCONTATO_NOME",gxold:"O25FORNECEDORCONTATO_NOME",gxvar:"A25FORNECEDORCONTATO_NOME",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A25FORNECEDORCONTATO_NOME=a},v2z:function(a){gx.O.Z25FORNECEDORCONTATO_NOME=a},v2c:function(a){gx.fn.setGridControlValue("FORNECEDORCONTATO_NOME",a||gx.fn.currentGridRowImpl(10),gx.O.A25FORNECEDORCONTATO_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A25FORNECEDORCONTATO_NOME=this.val()},val:function(a){return gx.fn.getGridControlValue("FORNECEDORCONTATO_NOME",
a||gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};b[13]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDORCONTATO_TIPO",gxz:"Z23FORNECEDORCONTATO_TIPO",gxold:"O23FORNECEDORCONTATO_TIPO",gxvar:"A23FORNECEDORCONTATO_TIPO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(a){gx.O.A23FORNECEDORCONTATO_TIPO=a},v2z:function(a){gx.O.Z23FORNECEDORCONTATO_TIPO=a},v2c:function(a){gx.fn.setGridComboBoxValue("FORNECEDORCONTATO_TIPO",
a||gx.fn.currentGridRowImpl(10),gx.O.A23FORNECEDORCONTATO_TIPO);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A23FORNECEDORCONTATO_TIPO=this.val()},val:function(a){return gx.fn.getGridControlValue("FORNECEDORCONTATO_TIPO",a||gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};b[14]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORNECEDORCONTATO_TELEFONE",gxz:"Z24FORNECEDORCONTATO_TELEFONE",
gxold:"O24FORNECEDORCONTATO_TELEFONE",gxvar:"A24FORNECEDORCONTATO_TELEFONE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"tel",v2v:function(a){gx.O.A24FORNECEDORCONTATO_TELEFONE=a},v2z:function(a){gx.O.Z24FORNECEDORCONTATO_TELEFONE=a},v2c:function(a){gx.fn.setGridControlValue("FORNECEDORCONTATO_TELEFONE",a||gx.fn.currentGridRowImpl(10),gx.O.A24FORNECEDORCONTATO_TELEFONE,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A24FORNECEDORCONTATO_TELEFONE=this.val()},
val:function(a){return gx.fn.getGridControlValue("FORNECEDORCONTATO_TELEFONE",a||gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};this.AV5FORNECEDOR_NOME_FANTASIA=this.O24FORNECEDORCONTATO_TELEFONE=this.Z24FORNECEDORCONTATO_TELEFONE=this.O23FORNECEDORCONTATO_TIPO=this.Z23FORNECEDORCONTATO_TIPO=this.O25FORNECEDORCONTATO_NOME=this.Z25FORNECEDORCONTATO_NOME=this.O16FORNECEDOR_NOME_FANTASIA=this.Z16FORNECEDOR_NOME_FANTASIA=this.OV5FORNECEDOR_NOME_FANTASIA=this.ZV5FORNECEDOR_NOME_FANTASIA=this.AV5FORNECEDOR_NOME_FANTASIA=
"";this.A13FORNECEDOR_ID=0;this.A24FORNECEDORCONTATO_TELEFONE=this.A23FORNECEDORCONTATO_TIPO=this.A25FORNECEDORCONTATO_NOME=this.A16FORNECEDOR_NOME_FANTASIA="";this.Events={e12242_client:["ENTER",true],e13242_client:["CANCEL",true]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV5FORNECEDOR_NOME_FANTASIA",fld:"vFORNECEDOR_NOME_FANTASIA"},{av:"sPrefix"}],[]];c.addRefreshingVar(this.GXValidFnc[7]);this.InitStandaloneVars()});
