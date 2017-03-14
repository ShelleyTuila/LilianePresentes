function jqGridCtrlInfo()
{
	this.Width;
	this.Height;
	this.Theme;
	this.Attribute;
	this.CurrentPage;
	this.RowId;
	this.IsRedrawSelection;
	this.m_GroupHeaders;
	this.HasKey;
	this.IdxKey;
	this.CstButtons;
	this.myCstButtons;
	this.HasEditable=false;
	this.LastSel;
	
	this.myColNames;
	this.myColModel;
	this.Contador=0;
	
	var XcontrolName;
	var Xtheme;
	
	var controlTypes = gx.html.controls.types;
	var dataTypes = gx.types;
	
	// Databinding for property Attribute
	this.SetGroupHeaders = function(data)
	{
		///UserCodeRegionStart:[SetAttribute] (do not remove this comment.)
		alert('SetGroupHeaders');
		this.m_GroupHeaders = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Attribute
	this.GetGroupHeaders = function()
	{
		///UserCodeRegionStart:[GetAttribute] (do not remove this comment.)
		return this.m_GroupHeaders;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function(force)
	{
		var pathtojsfiles = gx.basePath + gx.staticDirectory+'jQueryUI/';
		var pathtoshared  = gx.basePath + gx.staticDirectory+'Shared/';
		var pathtolangfile = pathtojsfiles+"jqgrid/js/i18n/grid.locale-"+getLangCode()+'.js';
		var pathtolangpick = pathtoshared+"jqueryui/i18n/jquery-ui-i18n.js";
		var jslangcode = pathtolangfile;//gx.util.resourceUrl(pathtolangfile,true);
		var jslangpick = pathtolangpick;//gx.util.resourceUrl(pathtolangfile,true);
		var mthis = this;
		var list = [
				gx.util.resourceUrl(pathtoshared+'jquery/jquery-1.4.2.min.js',true),
				gx.util.resourceUrl(pathtoshared+'jqueryui/jquery-ui.min-1.8.js',true),
				gx.util.resourceUrl(jslangpick,true),
				gx.util.resourceUrl(jslangcode,true),
				gx.util.resourceUrl(pathtojsfiles+'jqgrid/plugins/ui.multiselect.js',true),
				gx.util.resourceUrl(pathtojsfiles+'jqgrid/js/jquery.jqGrid.min.js',true),
				gx.util.resourceUrl(pathtojsfiles+'jqgrid/plugins/jquery.tablednd.js',true),
				gx.util.resourceUrl(pathtojsfiles+'jqgrid/plugins/jquery.contextmenu.js',true)
			];
 		if (force||!this.IsPostBack) {
			if (this.Contador>=list.length){
				this.postShow();
			} else {
				loadJS(document,list[this.Contador],function() { mthis.Contador++; mthis.show(true) })
			}
		} else {
			this.postShow();
		}
	}
		
	this.postShow = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		var mthis = this;
		var buffer = '';
		var controlName = 'jqGrid' + this.ContainerName;
		var controlPagr = 'jqPagr' + this.ContainerName;
		var myData = new Array();
		//Pass the varname trhu methods
		XcontrolName = controlName;
		
		this.myCstButtons = new Array();
		this.myColNames = new Array();
		this.myColModel = new Array();
		
		if (!this.CurrentPage) this.CurrentPage = 1;
		
		//Monta estrutura das colunas
		this.HasKey=false;
		this.IdxKey=0;
		for (var i = 0; i < this.columns.length; i++) {
			this.myColNames[i] = this.columns[i].title;
			this.myColModel[i] = {
					name: (this.columns[i].gxAttName!='')?this.columns[i].gxAttName:this.columns[i].htmlName,
					index: (this.columns[i].gxAttName!='')?this.columns[i].gxAttName:this.columns[i].htmlName,
					key: (this.columns[i].Key==0)?false:true,
					width: this.columns[i].width,
					resizable: (this.columns[i].Resizable==0)?false:true,
					align: this.columns[i].align,
					sortable: (this.columns[i].Sortable==0)?false:true,
					sorttype: this.GetSortType(this.columns[i].gxControl.dataType),
					frozen: (this.columns[i].Frozen==0)?false:true,
					hidden: !this.columns[i].visible,
					classes: this.columns[i].gxControl.cssClass
				}
			if (this.columns[i].SummaryType!='none') {
				this.myColModel[i].summaryType = this.columns[i].SummaryType;
				this.myColModel[i].summaryTpl =  this.columns[i].summaryTemplate;
			}
			if (this.columns[i].Formatter!='none') {
				this.myColModel[i].formatter = this.columns[i].Formatter;
				switch (this.columns[i].Formatter) {
					case ('integer'):
						this.myColModel[i].formatoptions = {
							thousandsSeparator: thousandsSeparator(),
							defaulValue: '0'
						};
						break;
					case ('number'):
						this.myColModel[i].formatoptions = {
							decimalSeparator: decimalSeparator(),
							thousandsSeparator: thousandsSeparator(),
							decimalPlaces: this.columns[i].DecimalPlaces,
							defaulValue: '0'
						};
						break;
					case ('currency'):
						this.myColModel[i].formatoptions = {
							decimalSeparator: decimalSeparator(),
							thousandsSeparator: thousandsSeparator(),
							decimalPlaces: this.columns[i].DecimalPlaces,
							defaulValue: '0',
							prefix: this.columns[i].Prefix,
							sufix: this.columns[i].Sufix
						};
						break;
					case ('link'):
						this.myColModel[i].formatoptions = {
							target: this.columns[i].Target
						};
						break;
				}
			}
			//Habilitar edição no jqGrid
 			if (
				(this.columns[i].gxControl.enabled===true || this.columns[i].gxControl.enabled==="1") &&
				(this.columns[i].gxControl.type!=controlTypes.image && this.columns[i].gxControl.type!=controlTypes.userControl)
				)
				{
				this.myColModel[i].editable=true;
				switch(this.columns[i].gxControl.type){
					case(controlTypes.checkBox):
						this.myColModel[i].edittype='checkbox';
						if (!this.myColModel[i].editoptions)
							this.myColModel[i].editoptions = new Object()
						this.myColModel[i].editoptions.value = this.columns[i].gxChecked + ':' + this.columns[i].gxUnChecked;
						break;
					case(controlTypes.comboBox):
						this.myColModel[i].edittype='select';
						if (!this.myColModel[i].editoptions)
							this.myColModel[i].editoptions = new Object()
						if (!this.myColModel[i].editoptions.value)
							this.myColModel[i].editoptions.value = new String();
						for (var j=0; this.columns[i].gxControl.possibleValues[j]!=undefined; j++) {
							this.myColModel[i].editoptions.value += this.columns[i].gxControl.possibleValues[j][0]
								+':'+this.columns[i].gxControl.possibleValues[j][1]+';';
						}
						this.myColModel[i].editoptions.value = this.myColModel[i].editoptions.value.substring(0,this.myColModel[i].editoptions.value.length-1);
						this.myColModel[i].editoptions.dataEvents = [
								{
									type: 'change',
									fn: function(e) {
										//
									}
								}
							];
						break;
					default:
						this.myColModel[i].edittype='text';
						switch(this.columns[i].type) {
							case (dataTypes.numeric):
								var myCustomNumber = function(value, colname) {
										console.log(value);
										return [true,''];
									};
								this.myColModel[i].editrules = { custom: true, custom_func: myCustomNumber };
								break;
							case (dataTypes.dateTime):
								this.myColModel[i].editrules = { time: true };
							case (dataTypes.date):
								this.myColModel[i].editrules = { date: true };
								break;
						}
				}
				this.HasEditable=true;
			}
 			switch (this.columns[i].gxControl.type) {
				case (gx.html.controls.types.checkBox):
					this.myColModel[i].formatter = 'checkbox';
					break;
			}
			if (this.columns[i].Key!=0) {
				this.HasKey=true;
				this.IdxKey=i;
			}
		}
		
		myData = this.GetRowsData();

		if (this.CstButtons) {
			try {
				this.myCstButtons = eval(this.CstButtons);
			} catch(e) {}
		}
		if (this.GroupHeaders) {
			try {
				this.m_GroupHeaders = eval(this.GroupHeaders);
			} catch(e) {}
		}
			
		var fileName = '';
		if (this.Theme!='base') {
			fileName = gx.util.resourceUrl(gx.basePath + gx.staticDirectory + '/jQueryUI/css/base/jquery-ui-1.8.16.custom.css',true);
			this.loadjscssfile(fileName,'css');
		}
		if (this.Theme=='custom') { //CustomTheme
			fileName = gx.util.resourceUrl(gx.basePath + gx.staticDirectory + '/jQueryUI/css/' + this.CustomTheme + '/jquery-ui.custom.css',true);
			Xtheme = this.CustomTheme;
		} else {
			if (this.Theme!='inherit') {
				fileName = gx.util.resourceUrl(gx.basePath + gx.staticDirectory + '/jQueryUI/css/' + this.Theme + '/jquery-ui-1.8.16.custom.css',true);
				Xtheme = this.Theme;
			}
		}
		this.loadjscssfile(fileName,'css');

		if (this.Theme!='inherit')
			buffer += "<div class='" + Xtheme + "'>";
		
		buffer += "<table id='" + controlName + "'></table>";
		buffer += "<div id='" + controlPagr + "'></div>";
		
		if (this.Theme!='inherit')
			buffer += "</div>";
		this.setHtml(buffer);
				
		//Executa o Grid
		$(document).ready(function() {			
			var myJqGridOption = {
				datatype: 'local',
				data: myData,
				localReader: {
						root: function (obj) { 
							console.log('Root................');
							//mthis.FixPage(); 
							return myData;
						},
						page: function (obj) { 
							console.log('Page.................');
							//mthis.FixPage(); 
							return mthis.CurrentPage ;
						},
						total: function (obj) { 
							console.log('Total................');
							//mthis.FixPage(); 
							return (mthis.isLastPage())?mthis.CurrentPage:(mthis.CurrentPage+1) ;
						},
						records: function (obj) { 
							console.log('Records..................');
							//mthis.FixPage(); 
							return (mthis.CurrentPage+1)*mthis.pageSize;
						}
					},
				pager: '#'+controlPagr,
				colNames: mthis.myColNames,
				colModel: mthis.myColModel,
				caption: mthis.Caption,
				hidegrid: mthis.gxAllowCollapsing,
				hoverrows: mthis.gxAllowHovering && mthis.gxAllowSelection,
				forceFit: mthis.ForceFit,
				shrinkToFit: mthis.shrinkToFit,
				pginput: false,
				pgbuttons: mthis.usePaging,
				rowNum: mthis.rows.length,
				viewsortcols: [mthis.ViewSortCols,'vertical',true],
				beforeSelectRow: function(rowid, e) {
					return mthis.gxAllowSelection;
				},
				onPaging: function(pgButton) {
					var myAcction = '';
					myAcction = pgButton.split('_')[0].toUpperCase();
					console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Paging:'+myAcction);
					switch(myAcction){
						case 'FIRST': mthis.CurrentPage = 1; break;
						case 'PREV':  mthis.CurrentPage--; break;
						case 'NEXT':  mthis.CurrentPage++; break;
						case 'LAST':  mthis.CurrentPage = 999999999; break;
					}
					try {
						eval(mthis.getPaginEvent(myAcction));
						//mthis.FixPage();
					} catch(e) {}
				},
				beforeRequest: function(evt) {
					//return false;
				},
				beforeProcessing: function (data, status, xhr) {
					//return false;
				},
				loadComplete: function(data) {
					jQuery('#'+controlName).trigger("reloadGrid"); // Call to fix client-side sorting
				},
				loadError: function(xhr, status, error) {
					//alert(status);
				},
				onSortCol: function(index,iCol,sortorder){
					console.log('index:'+index);
					console.log('iCol:'+iCol);
					console.log('sortorder:'+sortorder);
					myData.sort(mthis.SortData(index,sortorder));
				},
				onSelectRow: function(rowid,status) {
					var mySaveFnc = function(rowId) {
						var xRow = jQuery('#'+controlName).jqGrid('getRowData',rowId);
						for (var i=0; mthis.myColModel[i]!=undefined; i++) {
							mthis.properties[mthis.GetRowId(rowId)][i].value = xRow[mthis.myColModel[i].name];
						}
						return true;
					};
					mthis.RowId = rowid;
					mthis.selectRow(mthis.GetRowId(rowid));
					if (mthis.LastSel)
						jQuery('#'+controlName).jqGrid('restoreRow',mthis.LastSel);
					if(mthis.HasEditable && rowid && rowid!=mthis.LastSel){
						jQuery('#'+controlName).jqGrid('editRow',rowid,true,null,null,'clientArray',null,mySaveFnc);
						mthis.LastSel=rowid;
					}
				}
			};
			if (!mthis.gxWidth)
				myJqGridOption.autowidth = true;
			else
				myJqGridOption.width = mthis.gxWidth;
			if (!mthis.gxHeight)
				myJqGridOption.height = 'auto';
			else
				myJqGridOption.height = mthis.gxHeight;
			
			
			if (mthis.Grouping) {
				myJqGridOption.grouping = mthis.Grouping;
				myJqGridOption.groupingView = {
					groupField: [mthis.GroupField],
					groupText: [mthis.GroupText],
					groupColumnShow: [mthis.GroupColumnShow],
					groupSummary: [mthis.GroupSummary],
					showSummaryOnHide: mthis.ShowSummaryOnHide,
					groupCollapse: false
				};
			}
			
			$.jgrid.formatter.integer.thousandsSeparator = thousandsSeparator();
			$.jgrid.formatter.number.thousandsSeparator = thousandsSeparator();
			$.jgrid.formatter.number.decimalSeparator = decimalSeparator();
			$('#'+controlName).jqGrid(myJqGridOption);
			
			//Sets the Title Class
			$('#'+mthis.ContainerName).find('th').each(function(index, domHtml){
				$(domHtml).addClass(mthis.gxTitleClass);
			});

		
			//Defines NavBar
			$('#'+controlName).navGrid('#' + controlPagr,{
					edit: mthis.UpdButton, 
					add: mthis.AddButton,
					view: false,
					del: mthis.DltButton,
					refresh: mthis.RfsButton,
					search: false,
					addfunc: function() {
						if (mthis.OnInsert) mthis.OnInsert();
					},
					editfunc: function() {
						if (mthis.OnEdit) mthis.OnEdit();
					},
					delfunc: function() {
						if (mthis.OnDelete) mthis.OnDelete();
					}
				});
			if (mthis.DspButton) {
				jQuery('#'+controlName).navButtonAdd('#' + controlPagr,{
					caption: '',
					buttonicon: 'ui-icon-document',
					onClickButton: function() {
						if (mthis.OnDisplay) mthis.OnDisplay();
					},
					position:"last"
				});
			}
			//Defining Custom Buttons
			if (mthis.myCstButtons) {
				for (var i=0; mthis.myCstButtons[i]!=undefined; i++) {
					jQuery('#'+controlName).navButtonAdd('#' + controlPagr,{
						caption: mthis.myCstButtons[i].caption,
						buttonicon: mthis.myCstButtons[i].buttonicon,
						title: mthis.myCstButtons[i].title,
						id: mthis.myCstButtons[i].id,
						onClickButton: function(evt) {
							var btnClk = evt.currentTarget.cellIndex;
							if (mthis.AddButton || mthis.UpdButton || mthis.DltButton) {
								//When one of the above buttons was set, the "separator" was count too
								//but it does not have an Index in the Matrix.
								btnClk -= 1;
							}
							btnClk -= (mthis.AddButton)?1:0;
							btnClk -= (mthis.UpdButton)?1:0;
							btnClk -= (mthis.DltButton)?1:0;
							btnClk -= (mthis.DspButton)?1:0;
							btnClk -= (mthis.RfsButton)?1:0;
							mthis.CstButtonId = mthis.myCstButtons[btnClk].id;
							if (mthis.OnCustomButton) mthis.OnCustomButton();
						},
						position:"last"
					});
				}
			}
			//EndNavBar definitions
			
			if (mthis.m_GroupHeaders) {
				jQuery('#'+controlName).jqGrid('setGroupHeaders', {
					useColSpanStyle: mthis.useColSpanStyle, 
					groupHeaders: mthis.m_GroupHeaders
					});
			}
			
			jQuery('#'+controlName).jqGrid('setFrozenColumns');
			jQuery('#'+controlName).trigger('reloadGrid');
		});
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	this.FixPage = function() {
		console.log('Current Page:' + this.CurrentPage);
		console.log('Fisrt Page:' + this.isFirstPage());
		console.log('Last Page:' + this.isLastPage());
		
		if (this.isFirstPage()) {
			this.CurrentPage = 1;
		}
		if (this.isLastPage()) {
			this.CurrentPage = 999999999;
		}
	}
	
	this.GetRowId = function(rowId) {
		if (this.HasKey) {
			for (var i=0; i<this.properties.length; i++)
				if (this.properties[i][this.IdxKey].value==rowId)
					return i;
		} else {
			return this.rows[Number(rowId)-1].id;
		}
	}
	
	//Retorna tipo de dados
	this.GetSortType = function(myDataType) {
		switch (myDataType) {
			case (gx.types.numeric):
				return 'number';
				break;
			case (gx.types.date):
			case (gx.types.dateTime):
				return 'date';
				break;
			default:
				return 'text';
		}
	}
	
	//Monta vetor com dados
	this.GetRowsData = function() {
		var myQuot = "\\\'", myDblQ = '\\\"';
		var mySep = '';
		var myJson = '';
		var myTmpJson = '';
		for (var i = 0; i < this.properties.length; i++) {
			var myRow = this.properties[i];
			myTmpJson = '';
			for (var j = 0; j < myRow.length; j++) {
				var myCel = myRow[j];
				var myCtrl = myCel.type;
				var myType = myCel.dataType;
				var myValue = '';
				switch (myCtrl)
				{
					case controlTypes.image:
						try {
							if (myCel.innerImage) {
								myValue = myCel.innerImage.getHtml();
								break;
							}
						} catch(e) {}
					case controlTypes.userControl:
						myValue = myCel.getHtml();
						break;
					case controlTypes.comboBox:
						for (var k=0; k<myCel.possibleValues.length; k++) {
							if (myCel.possibleValues[k][0]==$.trim(myCel.value))
								myValue = myCel.possibleValues[k][1];
						}
						break;
					case controlTypes.checkBox:
						myValue = (myCel.value==myCel.checkedValue)?'true':'false';
						break;
					default:
						switch (myType)
						{
							case (dataTypes.numeric):
								myValue = myCel.value.replace(decimalSeparator(),'.');
								break;
							case (dataTypes.date):
							case (dataTypes.dateTime):
								myValue = $.trim(myCel.formattedValue);
								break;
							default:
								myValue = $.trim(myCel.value);
						}
				}
				myValue = myValue.replace(/\n/g,'<br/>');
				myValue = myValue.replace(/"/g,myDblQ);
				myValue = myValue.replace(/'/g,myQuot);
				mySep = (myTmpJson=='')?'{':',';
				myTmpJson += mySep + '"' + this.myColModel[j].name + '":"' + myValue + '"';
			}
			myTmpJson += '}';
			
			mySep = (myJson=='')?'[':',';
			myJson += mySep + myTmpJson;
		}
		myJson += ']';
		if (myJson!=']')
			try {
				return eval(myJson);
			} catch(e) {}
	}
	
	this.SortData = function(property,dir) {
		return function(a,b) {
			if (dir=='asc')
				return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			if (dir=='desc')
				return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
		}
	}
	
	this.loadjscssfile = function (filename, filetype){
 		if (filetype=="js"){ //if filename is a external JavaScript file
			var fileref=document.createElement('script');
			fileref.setAttribute("type","text/javascript");
			fileref.setAttribute("src", filename);
		}
		else if (filetype=="css"){ //if filename is an external CSS file
			var fileref=document.createElement("link");
			fileref.setAttribute("rel", "stylesheet");
			fileref.setAttribute("type", "text/css");
			fileref.setAttribute("href", filename);
		}
		document.getElementsByTagName("head")[0].appendChild(fileref);
 	}
		
	///UserCodeRegionEnd: (do not remove this comment.):
}

function getLangCode() {
	var langCode = 'en';
	switch (gx.languageCode) {
		case 'eng':
			langCode = 'en';
			break;
		case 'por':
			langCode = 'pt-br';
			break;
		case 'spa':
			langCode = 'es';
			break;
		case 'ita':
			langCode = 'it';
			break;
	}
	return langCode;
};

function loadJS(a,b,c){
	var d=a.getElementsByTagName("head")[0]||a.documentElement;
	var s=d.getElementsByTagName("script");
	for (var i=0;s.length>i; i++) {
		if (s[i].src==b) {
			//Não carregar de novo!
			//Chama função seguinte...
			return c();
		}
	}
	var e=a.createElement("script");
	e.type="text/javascript";
	e.src=b;
	e.onload=c;
	e.onerror=onerror;
	e.onreadystatechange=function(){
		var a=this.readyState;
		if(a==="loaded"||a==="complete"){
			e.onreadystatechange=null;c()
		}
	};
	d.insertBefore(e,d.firstChild);
}

function decimalSeparator() {
	return gx.decimalPoint;
}

function thousandsSeparator() {
	return (gx.decimalPoint=='.')?',':'.';
}
