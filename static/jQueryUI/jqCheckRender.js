function jqCheck()
{
	this.Theme;
	this.PrimaryCheckedIcon;
	this.SecondaryCheckedIcon;
	this.PrimaryUncheckedIcon;
	this.SecondaryUncheckedIcon;
	this.Attribute;
	this.LabelChecked;
	this.LabelUnchecked;
	this.ValueChecked;
	this.ValueUnchecked;
	this.ReadOnly;
	this.Visible;

	// Databinding for property Attribute
	this.SetAttribute = function(data)
	{
		///UserCodeRegionStart:[SetAttribute] (do not remove this comment.)
		if (data==this.ValueChecked) {
		this.Attribute = this.ValueChecked;
		} else {
		this.Attribute = this.ValueUnchecked;
		}
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Attribute
	this.GetAttribute = function()
	{
		///UserCodeRegionStart:[GetAttribute] (do not remove this comment.)
		return (this.Attribute==this.ValueChecked)?this.ValueChecked:this.ValueUnchecked;

		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		if (this.Attribute==this.ValueChecked) {
		this.Attribute = this.ValueChecked;
		} else {
		this.Attribute = this.ValueUnchecked;
		}

		var mthis = this;
		var buffer = "";
		var controlName = 'jqCheck'+this.ContainerName;
		var isChecked = (this.Attribute==this.ValueChecked)?true:false;
		var lbChecked = (isChecked)?"checked":"";
		var txtCheck = this.LabelChecked;
		var txtUncheck = this.LabelUnchecked;
		var vlCheck = this.ValueChecked;
		var vlUncheck = this.ValueUnchecked;
		var isDisabled = (this.ReadOnly)?true:false;
		
		var iconCheck = {
				primary: (this.PrimaryCheckedIcon=="null")?null:this.PrimaryCheckedIcon ,
				secondary: (this.SecondaryCheckedIcon=="null")?null:this.SecondaryCheckedIcon
				};
		var iconUncheck = {
				primary: (this.PrimaryUncheckedIcon=="null")?null:this.PrimaryUncheckedIcon ,
				secondary: (this.SecondaryUncheckedIcon=="null")?null:this.SecondaryUncheckedIcon
				};
		
		var fileName = gx.util.resourceUrl(gx.basePath + gx.staticDirectory + '/jQueryUI/css/' + this.Theme + '/jquery-ui-1.8.16.custom.css',true);
		this.loadjscssfile(fileName,'css');
				
		var isVisible = (this.Visible)?" style='display: box;'":"style='display:none;'"
		buffer += "<div class='" + this.Theme + "'" + isVisible + ">";
		buffer += "<input type='checkbox' name='" + controlName + "' id='" + controlName + "' " + lbChecked + " />";		
		buffer += "<label for='" + controlName + "'>";
		buffer += (isChecked)?txtCheck:txtUncheck;
		buffer += "</label>";
		this.setHtml(buffer);
		
		$(document).ready(function() {
		var ft = function() {
					isChecked = !isChecked;
					$( "#"+controlName ).button("option", "icons", (isChecked)?iconCheck:iconUncheck );
					$( "#"+controlName ).button("option", "label", (isChecked)?txtCheck:txtUncheck );
					mthis.Attribute = (isChecked)?vlCheck:vlUncheck;
					if (mthis.Click) {
						mthis.Click();
					}
		};
		$( "#"+controlName )
			.button({
					icons: (isChecked)?iconCheck:iconUncheck,
					label: (isChecked)?txtCheck:txtUncheck,
					disabled: isDisabled
				}).toggle(ft,ft);
			});
					
		
		
		if (!this.Visible) {
			$( "#"+controlName ).hide();
		}		
		
		
		
		
		
		
		
		
		
		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

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
