gx.evt.autoSkip=!1;
gx.define("wc_contatocliente",!0,function(b){this.ServerClass="wc_contatocliente";this.PackageName="com.lilianepresentes";this.setObjectType("web");this.setCmpContext(b);this.ReadonlyForm=true;this.skipOnEnter=this.hasEnterEvent=false;this.ajaxSecurityToken=this.supportAjaxEvents=this.fullAjax=this.autoRefresh=true;this.SetStandaloneVars=function(){};this.e12232_client=function(a){this.executeServerEvent("ENTER",true,a)};this.e13232_client=function(a){this.executeServerEvent("CANCEL",true,a)};b=this.GXValidFnc=
[];this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14];this.GXLastCtrlId=14;var c=this.GridclienteContainer=new gx.grid.grid(this,2,"WbpLvl2",10,"Gridcliente","Gridcliente","GridclienteContainer",this.CmpContext,this.IsMasterPage,"wc_contatocliente",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);c.addSingleLineEdit(117,11,"CLIENTE_NOME","Cliente","","CLIENTE_NOME","svchar",0,"px",100,80,"left",null,[],117,"CLIENTE_NOME",true,0,false,
false,"Attribute",1,"WWColumn WWOptionalColumn");c.addSingleLineEdit(125,12,"CLIENTECONTATO_NOME","Contato","","CLIENTECONTATO_NOME","svchar",0,"px",100,80,"left",null,[],125,"CLIENTECONTATO_NOME",true,0,false,false,"Attribute",1,"WWColumn");c.addComboBox(126,13,"CLIENTECONTATO_TIPO","Tipo de telefone","CLIENTECONTATO_TIPO","char",null,0,true,false,0,"px","WWColumn WWOptionalColumn");c.addSingleLineEdit(127,14,"CLIENTECONTATO_TELEFONE","Telefone","","CLIENTECONTATO_TELEFONE","char",0,"px",20,20,"left",
null,[],127,"CLIENTECONTATO_TELEFONE",true,0,false,false,"Attribute",1,"WWColumn WWOptionalColumn");this.setGrid(c);b[2]={fld:"",grid:0};b[3]={fld:"MAINTABLE",grid:0};b[4]={fld:"",grid:0};b[5]={fld:"",grid:0};b[6]={fld:"",grid:0};b[7]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridclienteContainer],fld:"vCLIENTE_NOME",gxz:"ZV6CLIENTE_NOME",gxold:"OV6CLIENTE_NOME",gxvar:"AV6CLIENTE_NOME",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6CLIENTE_NOME=
a},v2z:function(a){gx.O.ZV6CLIENTE_NOME=a},v2c:function(){gx.fn.setControlValue("vCLIENTE_NOME",gx.O.AV6CLIENTE_NOME,0)},c2v:function(){gx.O.AV6CLIENTE_NOME=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTE_NOME")},nac:gx.falseFn};b[8]={fld:"",grid:0};b[9]={fld:"",grid:0};b[11]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:10,gxgrid:this.GridclienteContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLIENTE_NOME",gxz:"Z117CLIENTE_NOME",gxold:"O117CLIENTE_NOME",gxvar:"A117CLIENTE_NOME",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A117CLIENTE_NOME=a},v2z:function(a){gx.O.Z117CLIENTE_NOME=a},v2c:function(a){gx.fn.setGridControlValue("CLIENTE_NOME",a||gx.fn.currentGridRowImpl(10),gx.O.A117CLIENTE_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A117CLIENTE_NOME=this.val()},val:function(a){return gx.fn.getGridControlValue("CLIENTE_NOME",a||gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};b[12]=
{lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:10,gxgrid:this.GridclienteContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLIENTECONTATO_NOME",gxz:"Z125CLIENTECONTATO_NOME",gxold:"O125CLIENTECONTATO_NOME",gxvar:"A125CLIENTECONTATO_NOME",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A125CLIENTECONTATO_NOME=a},v2z:function(a){gx.O.Z125CLIENTECONTATO_NOME=a},v2c:function(a){gx.fn.setGridControlValue("CLIENTECONTATO_NOME",a||gx.fn.currentGridRowImpl(10),
gx.O.A125CLIENTECONTATO_NOME,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A125CLIENTECONTATO_NOME=this.val()},val:function(a){return gx.fn.getGridControlValue("CLIENTECONTATO_NOME",a||gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};b[13]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:10,gxgrid:this.GridclienteContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLIENTECONTATO_TIPO",gxz:"Z126CLIENTECONTATO_TIPO",gxold:"O126CLIENTECONTATO_TIPO",gxvar:"A126CLIENTECONTATO_TIPO",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(a){gx.O.A126CLIENTECONTATO_TIPO=a},v2z:function(a){gx.O.Z126CLIENTECONTATO_TIPO=a},v2c:function(a){gx.fn.setGridComboBoxValue("CLIENTECONTATO_TIPO",a||gx.fn.currentGridRowImpl(10),gx.O.A126CLIENTECONTATO_TIPO);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A126CLIENTECONTATO_TIPO=this.val()},val:function(a){return gx.fn.getGridControlValue("CLIENTECONTATO_TIPO",a||gx.fn.currentGridRowImpl(10))},
nac:gx.falseFn};b[14]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:10,gxgrid:this.GridclienteContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLIENTECONTATO_TELEFONE",gxz:"Z127CLIENTECONTATO_TELEFONE",gxold:"O127CLIENTECONTATO_TELEFONE",gxvar:"A127CLIENTECONTATO_TELEFONE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"tel",v2v:function(a){gx.O.A127CLIENTECONTATO_TELEFONE=a},v2z:function(a){gx.O.Z127CLIENTECONTATO_TELEFONE=a},v2c:function(a){gx.fn.setGridControlValue("CLIENTECONTATO_TELEFONE",
a||gx.fn.currentGridRowImpl(10),gx.O.A127CLIENTECONTATO_TELEFONE,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A127CLIENTECONTATO_TELEFONE=this.val()},val:function(a){return gx.fn.getGridControlValue("CLIENTECONTATO_TELEFONE",a||gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};this.AV6CLIENTE_NOME=this.O127CLIENTECONTATO_TELEFONE=this.Z127CLIENTECONTATO_TELEFONE=this.O126CLIENTECONTATO_TIPO=this.Z126CLIENTECONTATO_TIPO=this.O125CLIENTECONTATO_NOME=this.Z125CLIENTECONTATO_NOME=
this.O117CLIENTE_NOME=this.Z117CLIENTE_NOME=this.OV6CLIENTE_NOME=this.ZV6CLIENTE_NOME=this.AV6CLIENTE_NOME="";this.A115CLIENTE_ID=0;this.A127CLIENTECONTATO_TELEFONE=this.A126CLIENTECONTATO_TIPO=this.A125CLIENTECONTATO_NOME=this.A117CLIENTE_NOME="";this.Events={e12232_client:["ENTER",true],e13232_client:["CANCEL",true]};this.EvtParms.REFRESH=[[{av:"GRIDCLIENTE_nFirstRecordOnPage"},{av:"GRIDCLIENTE_nEOF"},{av:"AV6CLIENTE_NOME",fld:"vCLIENTE_NOME"},{av:"sPrefix"}],[]];c.addRefreshingVar(this.GXValidFnc[7]);
this.InitStandaloneVars()});