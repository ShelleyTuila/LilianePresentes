gx.num.dec={bigDecimal:function(k,m,q){this.div=function(b,a){return(b-b%a)/a};this.arraycopy=function(b,a,c,d,e){var h;if(d>a)for(h=e-1;0<=h;--h)c[h+d]=b[h+a];else for(h=0;h<e;++h)c[h+d]=b[h+a]};this.createArrayWithZeros=function(b){var a=Array(b),c;for(c=0;c<b;++c)a[c]=0;return a};this.abs=function(b){"undefined"==typeof b&&(b=this.plainMC);return this.ind==this.isneg?this.negate(b):this.plus(b)};this.add=function(b,a){"undefined"==typeof a&&(a=this.plainMC);var c,d,e,h,f,g,i,j=0,k=0,x=0,l=0,n=
0,o=0;a.lostDigits&&this.checkdigits(b,a.digits);c=this;if(0==c.ind&&a.form!=gx.num.dec.PLAIN)return b.plus(a);if(0==b.ind&&a.form!=gx.num.dec.PLAIN)return c.plus(a);d=a.digits;0<d&&(c.mant.length>d&&(c=this.clone(c).round(a)),b.mant.length>d&&(b=this.clone(b).round(a)));e=new gx.num.dec.bigDecimal;h=c.mant;f=c.mant.length;g=b.mant;i=b.mant.length;if(c.exp==b.exp)e.exp=c.exp;else if(c.exp>b.exp){j=f+c.exp-b.exp;if(j>=i+d+1&&0<d)return e.mant=h,e.exp=c.exp,e.ind=c.ind,f<d&&(e.mant=this.extend(c.mant,
d),e.exp-=d-f),e.finish(a,!1);e.exp=b.exp;j>d+1&&0<d&&(j=j-d-1,i-=j,e.exp+=j,j=d+1);j>f&&(f=j)}else{j=i+b.exp-c.exp;if(j>=f+d+1&&0<d)return e.mant=g,e.exp=b.exp,e.ind=b.ind,i<d&&(e.mant=this.extend(b.mant,d),e.exp-=d-i),e.finish(a,!1);e.exp=c.exp;j>d+1&&0<d&&(j=j-d-1,f-=j,e.exp+=j,j=d+1);j>i&&(i=j)}e.ind=c.ind==this.iszero?this.ispos:c.ind;if((c.ind==this.isneg?1:0)==(b.ind==this.isneg?1:0))d=1;else{do{d=-1;do if(b.ind!=this.iszero)if(f<i||c.ind==this.iszero)j=h,h=g,g=j,j=f,f=i,i=j,e.ind=-e.ind;else if(!(f>
i)){k=j=0;x=h.length-1;l=g.length-1;a:for(;;){if(j<=x)n=h[j];else{if(k>l){if(a.form!=gx.num.dec.PLAIN)return new gx.num.dec.bigDecimal("0");break a}n=0}o=k<=l?g[k]:0;if(n!=o){n<o&&(j=h,h=g,g=j,j=f,f=i,i=j,e.ind=-e.ind);break a}j++;k++}}while(0)}while(0)}e.mant=this.byteaddsub(h,f,g,i,d,!1);return e.finish(a,!1)};this.compareTo=function(b,a){"undefined"==typeof a&&(a=this.plainMC);var c=0;a.lostDigits&&this.checkdigits(b,a.digits);if(this.ind==b.ind&&this.exp==b.exp){c=this.mant.length;if(c<b.mant.length)return-this.ind;
if(c>b.mant.length)return this.ind;if(c<=a.digits||0==a.digits){for(var d=c,c=0;0<d;d--,c++){if(this.mant[c]<b.mant[c])return-this.ind;if(this.mant[c]>b.mant[c])return this.ind}return 0}}else{if(this.ind<b.ind)return-1;if(this.ind>b.ind)return 1}c=this.clone(b);c.ind=-c.ind;return this.add(c,a).ind};this.divide=function(b,a,c){var d=-1;if("undefined"!=typeof a)"number"==typeof a&&(a=new gx.num.dec.mthctx(0,gx.num.dec.PLAIN,!1,a));else if("undefined"!=typeof c){d=a;if(0>d)throw"divide(): Negative scale: "+
d;a=new gx.num.dec.mthctx(0,gx.num.dec.PLAIN,!1,c)}else"undefined"==typeof a&&(a=this.plainMC);return this.dodivide("D",b,a,d)};this.divideInteger=function(b,a){"undefined"==typeof a&&(a=this.plainMC);return this.dodivide("I",b,a,0)};this.max=function(b,a){"undefined"==typeof a&&(a=this.plainMC);return 0<=this.compareTo(b,a)?this.plus(a):b.plus(a)};this.min=function(b,a){"undefined"==typeof a&&(a=this.plainMC);return 0>=this.compareTo(b,a)?this.plus(a):b.plus(a)};this.multiply=function(b,a){"undefined"==
typeof a&&(a=this.plainMC);var c,d,e,h=null,f,g=0,i,j=0,k=0;a.lostDigits&&this.checkdigits(b,a.digits);c=this;d=0;e=a.digits;0<e?(c.mant.length>e&&(c=this.clone(c).round(a)),b.mant.length>e&&(b=this.clone(b).round(a))):(0<c.exp&&(d+=c.exp),0<b.exp&&(d+=b.exp));c.mant.length<b.mant.length?(e=c.mant,h=b.mant):(e=b.mant,h=c.mant);f=e.length+h.length-1;g=9<e[0]*h[0]?f+1:f;i=new gx.num.dec.bigDecimal;for(var g=this.createArrayWithZeros(g),l=e.length,j=0;0<l;l--,j++)k=e[j],0!=k&&(g=this.byteaddsub(g,g.length,
h,f,k,!0)),f--;i.ind=c.ind*b.ind;i.exp=c.exp+b.exp-d;i.mant=0==d?g:this.extend(g,g.length+d);return i.finish(a,!1)};this.negate=function(b){"undefined"==typeof b&&(b=this.plainMC);var a;b.lostDigits&&this.checkdigits(null,b.digits);a=this.clone(this);a.ind=-a.ind;return a.finish(b,!1)};this.plus=function(b){"undefined"==typeof b&&(b=this.plainMC);b.lostDigits&&this.checkdigits(null,b.digits);return b.form==gx.num.dec.PLAIN&&this.form==gx.num.dec.PLAIN&&(this.mant.length<=b.digits||0==b.digits)?this:
this.clone(this).finish(b,!1)};this.pow=function(b,a){"undefined"==typeof a&&(a=this.plainMC);var c,d,e,h=0,f,g=0;a.lostDigits&&this.checkdigits(b,a.digits);c=b.intcheck(this.MinArg,this.MaxArg);d=this;e=a.digits;if(0==e){if(b.ind==this.isneg)throw"pow(): Negative power: "+b.toString();e=0}else{if(b.mant.length+b.exp>e)throw"pow(): Too many digits: "+b.toString();d.mant.length>e&&(d=this.clone(d).round(a));h=b.mant.length+b.exp;e=e+h+1}e=new gx.num.dec.mthctx(e,a.form,!1,a.roundingMode);h=new gx.num.dec.bigDecimal("1");
if(0==c)return h;0>c&&(c=-c);f=!1;g=1;a:for(;;g++){c+=c;0>c&&(f=!0,h=h.multiply(d,e));if(31==g)break a;if(!f)continue a;h=h.multiply(h,e)}0>b.ind&&(h=(new gx.num.dec.bigDecimal("1")).divide(h,e));return h.finish(a,!0)};this.remainder=function(b,a){"undefined"==typeof a&&(a=this.plainMC);return this.dodivide("R",b,a,-1)};this.substract=function(b,a){"undefined"==typeof a&&(a=this.plainMC);var c;a.lostDigits&&this.checkdigits(b,a.digits);c=this.clone(b);c.ind=-c.ind;return this.add(c,a)};this.equals=
function(b){var a=0,c=null,d=null;if(null==b||!(b instanceof gx.num.dec.bigDecimal)||this.ind!=b.ind)return!1;if(this.mant.length==b.mant.length&&this.exp==b.exp&&this.form==b.form){c=this.mant.length;for(a=0;0<c;c--,a++)if(this.mant[a]!=b.mant[a])return!1}else{c=this.layout();d=b.layout();if(c.length!=d.length)return!1;b=c.length;for(a=0;0<b;b--,a++)if(c[a]!=d[a])return!1}return!0};this.format=function(b,a,c,d,e,h){"undefined"==typeof c&&(d=c=-1,e=gx.num.dec.SCIENTIFIC,h=gx.num.dec.ROUND_HALF_UP);
var f,g=0,i=null,j=0,g=null,j=0;(-1>b||0==b)&&this.badarg("format",1,b);-1>a&&this.badarg("format",2,a);(-1>c||0==c)&&this.badarg("format",3,c);-1>d&&this.badarg("format",4,d);e!=gx.num.dec.SCIENTIFIC&&e!=gx.num.dec.ENGINEERING&&(-1==e?e=gx.num.dec.SCIENTIFIC:this.badarg("format",5,e));if(h!=gx.num.dec.ROUND_HALF_UP)try{-1==h?h=gx.num.dec.ROUND_HALF_UP:new gx.num.dec.mthctx(9,gx.num.dec.SCIENTIFIC,!1,h)}catch(k){this.badarg("format",6,h)}f=this.clone(this);-1==d?f.form=gx.num.dec.PLAIN:f.ind==this.iszero?
f.form=gx.num.dec.PLAIN:(g=f.exp+f.mant.length,f.form=g>d?e:-5>g?e:gx.num.dec.PLAIN);if(0<=a)a:for(;;){f.form==gx.num.dec.PLAIN?g=-f.exp:f.form==gx.num.dec.SCIENTIFIC?g=f.mant.length-1:(g=(f.exp+f.mant.length-1)%3,0>g&&(g=3+g),g++,g=g>=f.mant.length?0:f.mant.length-g);if(g==a)break a;if(g<a){i=this.extend(f.mant,f.mant.length+a-g);f.mant=i;f.exp-=a-g;if(f.exp<this.MinExp)throw"format(): Exponent Overflow: "+f.exp;break a}g-=a;if(g>f.mant.length){f.mant=(new gx.num.dec.bigDecimal("0")).mant;f.ind=
this.iszero;f.exp=0;continue a}i=f.mant.length-g;j=f.exp;f.round(i,h);if(f.exp-j==g)break a}a=f.layout();if(0<b){d=a.length;f=0;a:for(;0<d;d--,f++){if("."==a[f])break a;if("E"==a[f])break a}f>b&&this.badarg("format",1,b);if(f<b){g=Array(a.length+b-f);b-=f;for(i=0;0<b;b--,i++)g[i]=" ";this.arraycopy(a,0,g,i,a.length);a=g}}if(0<c){b=a.length-1;f=a.length-1;a:for(;0<b;b--,f--)if("E"==a[f])break a;if(0==f){g=Array(a.length+c+2);this.arraycopy(a,0,g,0,a.length);c+=2;for(i=a.length;0<c;c--,i++)g[i]=" ";
a=g}else if(j=a.length-f-2,j>c&&this.badarg("format",3,c),j<c){g=Array(a.length+c-j);this.arraycopy(a,0,g,0,f+2);c-=j;for(i=f+2;0<c;c--,i++)g[i]="0";this.arraycopy(a,f+2,g,i,j);a=g}}return a.join("")};this.intValueExact=function(){var b,a=0,c,d=0;if(this.ind==this.iszero)return 0;b=this.mant.length-1;if(0>this.exp){b+=this.exp;if(!this.allzero(this.mant,b+1))throw"intValueExact(): Decimal part non-zero: "+this.toString();if(0>b)return 0;a=0}else{if(9<this.exp+b)throw"intValueExact(): Conversion overflow: "+
this.toString();a=this.exp}c=0;for(var e=b+a,d=0;d<=e;d++)c*=10,d<=b&&(c+=this.mant[d]);if(9==b+a&&(b=div(c,1E9),b!=this.mant[0])){if(-2147483648==c&&this.ind==this.isneg&&2==this.mant[0])return c;throw"intValueExact(): Conversion overflow: "+this.toString();}return this.ind==this.ispos?c:-c};this.movePointLeft=function(b){var a;a=this.clone(this);a.exp-=b;return a.finish(this.plainMC,!1)};this.movePointRight=function(b){var a;a=this.clone(this);a.exp+=b;return a.finish(this.plainMC,!1)};this.scale=
function(){return 0<=this.exp?0:-this.exp};this.setScale=function(b,a){"undefined"==typeof a&&(a=gx.num.dec.ROUND_UNNECESSARY);var c,d;c=this.scale();if(c==b&&this.form==gx.num.dec.PLAIN)return this;d=this.clone(this);if(c<=b)c=0==c?d.exp+b:b-c,d.mant=this.extend(d.mant,d.mant.length+c),d.exp=-b;else{if(0>b)throw"setScale(): Negative scale: "+b;c=d.mant.length-(c-b);d=d.round(c,a);d.exp!=-b&&(d.mant=this.extend(d.mant,d.mant.length+1),d.exp-=1)}d.form=gx.num.dec.PLAIN;return d};this.signum=function(){return this.ind};
this.toString=function(){return this.layout().join("")};this.toFixed=function(b){return this.setScale(b,gx.num.dec.ROUND_UP).toString()};this.layout=function(){var b,a=0,c=0,d=0,d=null,e;b=Array(this.mant.length);c=this.mant.length;for(a=0;0<c;c--,a++)b[a]=this.mant[a]+"";if(this.form!=gx.num.dec.PLAIN){a="";this.ind==this.isneg&&(a+="-");c=this.exp+b.length-1;if(this.form==gx.num.dec.SCIENTIFIC)a+=b[0],1<b.length&&(a+="."),a+=b.slice(1).join("");else if(d=c%3,0>d&&(d=3+d),c-=d,d++,d>=b.length){a+=
b.join("");for(b=d-b.length;0<b;b--)a+="0"}else a+=b.slice(0,d).join(""),a=a+"."+b.slice(d).join("");0!=c&&(0>c?(b="-",c=-c):b="+",a=a+"E"+b+c);return a.split("")}if(0==this.exp){if(0<=this.ind)return b;d=Array(b.length+1);d[0]="-";this.arraycopy(b,0,d,1,b.length);return d}c=this.ind==this.isneg?1:0;e=this.exp+b.length;if(1>e){a=c+2-this.exp;d=Array(a);0!=c&&(d[0]="-");d[c]="0";d[c+1]=".";for(var h=-e,a=c+2;0<h;h--,a++)d[a]="0";this.arraycopy(b,0,d,c+2-e,b.length);return d}if(e>b.length){d=Array(c+
e);0!=c&&(d[0]="-");this.arraycopy(b,0,d,c,b.length);e-=b.length;for(a=c+b.length;0<e;e--,a++)d[a]="0";return d}a=c+1+b.length;d=Array(a);0!=c&&(d[0]="-");this.arraycopy(b,0,d,c,e);d[c+e]=".";this.arraycopy(b,e,d,c+e+1,b.length-e);return d};this.intcheck=function(b,a){var c;c=this.intValueExact();if(c<b||c>a)throw"intcheck(): Conversion overflow: "+c;return c};this.dodivide=function(b,a,c,d){var e,h,f,g,i,j,k,l,n,m=0,o=0,p=0;c.lostDigits&&this.checkdigits(a,c.digits);e=this;if(0==a.ind)throw"dodivide(): Divide by 0";
if(0==e.ind)return c.form!=gx.num.dec.PLAIN?new gx.num.dec.bigDecimal("0"):-1==d?e:e.setScale(d);h=c.digits;if(0<h)e.mant.length>h&&(e=this.clone(e).round(c)),a.mant.length>h&&(a=this.clone(a).round(c));else if(-1==d&&(d=e.scale()),h=e.mant.length,d!=-e.exp&&(h=h+d+e.exp),h=h-(a.mant.length-1)-a.exp,h<e.mant.length&&(h=e.mant.length),h<a.mant.length)h=a.mant.length;f=e.exp-a.exp+e.mant.length-a.mant.length;if(0>f&&"D"!=b)return"I"==b?new gx.num.dec.bigDecimal("0"):this.clone(e).finish(c,!1);g=new gx.num.dec.bigDecimal;
g.ind=e.ind*a.ind;g.exp=f;g.mant=this.createArrayWithZeros(h+1);i=h+h+1;f=this.extend(e.mant,i);j=i;k=a.mant;l=i;n=10*k[0]+1;1<k.length&&(n+=k[1]);i=0;a:for(;;){m=0;b:for(;;){if(j<l)break b;if(j==l){c:{for(var r=j,o=0;0<r;r--,o++){p=o<k.length?k[o]:0;if(f[o]<p)break b;if(f[o]>p)break c}m++;g.mant[i]=m;i++;f[0]=0;break a}o=f[0]}else o=10*f[0],1<j&&(o+=f[1]);o=div(10*o,n);0==o&&(o=1);m+=o;f=this.byteaddsub(f,j,k,l,-o,!0);if(0!=f[0])continue b;p=j-2;o=0;c:for(;o<=p;o++){if(0!=f[o])break c;j--}if(0==
o)continue b;this.arraycopy(f,o,f,0,j)}if(0!=i||0!=m){g.mant[i]=m;i++;if(i==h+1)break a;if(0==f[0])break a}if(0<=d&&-g.exp>d)break a;if("D"!=b&&0>=g.exp)break a;g.exp-=1;l--}0==i&&(i=1);if("I"==b||"R"==b){if(i+g.exp>h)throw"dodivide(): Integer overflow";if("R"==b){if(0==g.mant[0])return this.clone(e).finish(c,!1);if(0==f[0])return new gx.num.dec.bigDecimal("0");g.ind=e.ind;h=h+h+1-e.mant.length;g.exp=g.exp-h+e.exp;h=j;o=h-1;a:for(;1<=o&&g.exp<e.exp&&g.exp<a.exp;o--){if(0!=f[o])break a;h--;g.exp+=
1}h<f.length&&(e=Array(h),this.arraycopy(f,0,e,0,h),f=e);g.mant=f;return g.finish(c,!1)}}else 0!=f[0]&&(e=g.mant[i-1],0==e%5&&(g.mant[i-1]=e+1));if(0<=d)return i!=g.mant.length&&(g.exp-=g.mant.length-i),e=g.mant.length-(-g.exp-d),g.round(e,c.roundingMode),g.exp!=-d&&(g.mant=this.extend(g.mant,g.mant.length+1),g.exp-=1),g.finish(c,!0);if(i==g.mant.length)g.round(c);else{if(0==g.mant[0])return new gx.num.dec.bigDecimal("0");e=Array(i);this.arraycopy(g.mant,0,e,0,i);g.mant=e}return g.finish(c,!0)};this.bad=
function(b,a){throw b+"Not a number: "+a;};this.badarg=function(b,a,c){throw"Bad argument "+a+" to "+b+": "+c;};this.extend=function(b,a){var c;if(b.length==a)return b;c=createArrayWithZeros(a);this.arraycopy(b,0,c,0,b.length);return c};this.byteaddsub=function(b,a,c,d,e,h){var f,g,i,j,k,l,n=0;f=b.length;g=c.length;a-=1;j=i=d-1;j<a&&(j=a);d=null;h&&j+1==f&&(d=b);null==d&&(d=this.createArrayWithZeros(j+1));k=!1;1==e?k=!0:-1==e&&(k=!0);l=0;n=j;a:for(;0<=n;n--){0<=a&&(a<f&&(l+=b[a]),a--);0<=i&&(i<g&&
(l=k?0<e?l+c[i]:l-c[i]:l+c[i]*e),i--);if(10>l&&0<=l){d[n]=l;l=0;continue a}l+=90;d[n]=this.diginit()[l];l=this.bytecar[l]}if(0==l)return d;c=null;h&&j+2==b.length&&(c=b);null==c&&(c=Array(j+2));c[0]=l;b=j+1;for(f=0;0<b;b--,f++)c[f+1]=d[f];return c};this.diginit=function(){var b,a=0,c=0;b=Array(190);a=0;a:for(;189>=a;a++){c=a-90;if(0<=c){b[a]=c%10;this.bytecar[a]=this.div(c,10);continue a}c+=100;b[a]=c%10;this.bytecar[a]=this.div(c,10)-10}return b};this.clone=function(b){var a;a=new gx.num.dec.bigDecimal;
a.ind=b.ind;a.exp=b.exp;a.form=b.form;a.mant=b.mant;return a};this.checkdigits=function(b,a){if(0!=a){if(this.mant.length>a&&!this.allzero(this.mant,a))throw"Too many digits: "+this.toString();if(null!=b&&b.mant.length>a&&!this.allzero(b.mant,a))throw"Too many digits: "+b.toString();}};this.round=function(b,a){if("undefined"==typeof a)var c=b,b=c.digits,a=c.roundingMode;var d,e=!1,h=0,f,c=this.mant.length-b;if(0>=c)return this;this.exp+=c;c=this.ind;d=this.mant;0<b?(this.mant=Array(b),this.arraycopy(d,
0,this.mant,0,b),e=!0,h=d[b]):(this.mant=(new gx.num.dec.bigDecimal("0")).mant,this.ind=this.iszero,e=!1,h=0==b?d[0]:0);f=0;if(a==gx.num.dec.ROUND_HALF_UP)5<=h&&(f=c);else if(a==gx.num.dec.ROUND_UNNECESSARY){if(!this.allzero(d,b))throw"round(): Rounding necessary";}else if(a==gx.num.dec.ROUND_HALF_DOWN)5<h?f=c:5==h&&(this.allzero(d,b+1)||(f=c));else if(a==gx.num.dec.ROUND_HALF_EVEN)5<h?f=c:5==h&&(this.allzero(d,b+1)?1==this.mant[this.mant.length-1]%2&&(f=c):f=c);else if(a!=gx.num.dec.ROUND_DOWN)if(a==
gx.num.dec.ROUND_UP)this.allzero(d,b)||(f=c);else if(a==gx.num.dec.ROUND_CEILING)0<c&&(this.allzero(d,b)||(f=c));else if(a==gx.num.dec.ROUND_FLOOR)0>c&&(this.allzero(d,b)||(f=c));else throw"round(): Bad round value: "+a;0!=f&&(this.ind==this.iszero?(this.mant=(new gx.num.dec.bigDecimal("1")).mant,this.ind=f):(this.ind==this.isneg&&(f=-f),c=this.byteaddsub(this.mant,this.mant.length,(new gx.num.dec.bigDecimal("1")).mant,1,f,e),c.length>this.mant.length?(this.exp++,this.arraycopy(c,0,this.mant,0,this.mant.length)):
this.mant=c));if(this.exp>this.MaxExp)throw"round(): Exponent Overflow: "+this.exp;return this};this.allzero=function(b,a){var c=0;0>a&&(a=0);for(var d=b.length-1,c=a;c<=d;c++)if(0!=b[c])return!1;return!0};this.finish=function(b,a){var c=0,d=0,e=null;0!=b.digits&&this.mant.length>b.digits&&this.round(b);if(a&&b.form!=gx.num.dec.PLAIN){c=this.mant.length;d=c-1;a:for(;1<=d;d--){if(0!=this.mant[d])break a;c--;this.exp++}c<this.mant.length&&(e=Array(c),this.arraycopy(this.mant,0,e,0,c),this.mant=e)}this.form=
gx.num.dec.PLAIN;c=this.mant.length;for(d=0;0<c;c--,d++)if(0!=this.mant[d]){0<d&&(e=Array(this.mant.length-d),this.arraycopy(this.mant,d,e,0,this.mant.length-d),this.mant=e);d=this.exp+this.mant.length;if(0<d){if(d>b.digits&&0!=b.digits&&(this.form=b.form),d-1<=this.MaxExp)return this}else-5>d&&(this.form=b.form);d--;if(d<this.MinExp||d>this.MaxExp)if(!(this.form==gx.num.dec.ENGINEERING&&(c=d%3,0>c&&(c=3+c),d-=c,d>=this.MinExp&&d<=this.MaxExp)))throw"finish(): Exponent Overflow: "+d;return this}this.ind=
this.iszero;if(b.form!=gx.num.dec.PLAIN)this.exp=0;else if(0<this.exp)this.exp=0;else if(this.exp<this.MinExp)throw"finish(): Exponent Overflow: "+this.exp;this.mant=(new gx.num.dec.bigDecimal("0")).mant;return this};this.ispos=1;this.iszero=0;this.isneg=-1;this.MinExp=-999999999;this.MaxExp=999999999;this.MinArg=-999999999;this.MaxArg=999999999;this.plainMC=new gx.num.dec.mthctx(0,gx.num.dec.PLAIN);this.bytecar=Array(190);this.ind=0;this.form=gx.num.dec.PLAIN;this.mant=null;this.exp=0;if("undefined"!=
typeof k){"undefined"==typeof m&&(m=0);"undefined"==typeof q&&(q=k.length);"string"==typeof k&&(k=gx.text.trim(k),k=k.split(""));var t,u,r,p,v,l=0,n=0;u=!1;var s=n=n=l=0,w=0;p=0;0>=q&&this.bad("bigDecimal(): ",k);this.ind=this.ispos;"-"==k[0]?(q--,0==q&&this.bad("bigDecimal(): ",k),this.ind=this.isneg,m++):"+"==k[0]&&(q--,0==q&&this.bad("bigDecimal(): ",k),m++);u=t=!1;r=0;v=p=-1;s=q;l=m;a:for(;0<s;s--,l++){n=k[l];if("0"<=n&&"9">=n){v=l;r++;continue a}if("."==n){0<=p&&this.bad("bigDecimal(): ",k);
p=l-m;continue a}if("e"!=n&&"E"!=n){("0">n||"9"<n)&&this.bad("bigDecimal(): ",k);t=!0;v=l;r++;continue a}l-m>q-2&&this.bad("bigDecimal(): ",k);u=!1;"-"==k[l+1]?(u=!0,l+=2):l="+"==k[l+1]?l+2:l+1;n=q-(l-m);(0==n||9<n)&&this.bad("bigDecimal(): ",k);q=n;for(n=l;0<q;q--,n++)s=k[n],"0">s&&this.bad("bigDecimal(): ",k),"9"<s?this.bad("bigDecimal(): ",k):w=s-0,this.exp=10*this.exp+w;u&&(this.exp=-this.exp);u=!0;break a}0==r&&this.bad("bigDecimal(): ",k);0<=p&&(this.exp=this.exp+p-r);w=v-1;l=m;a:for(;l<=w;l++)if(n=
k[l],"0"==n)m++,p--,r--;else if("."==n)m++,p--;else break a;this.mant=Array(r);n=m;if(t){m=r;for(l=0;0<m;m--,l++)l==p&&n++,s=k[n],"9">=s?this.mant[l]=s-0:this.bad("bigDecimal(): ",k),n++}else{m=r;for(l=0;0<m;m--,l++)l==p&&n++,this.mant[l]=k[n]-0,n++}if(0==this.mant[0]){if(this.ind=this.iszero,0<this.exp&&(this.exp=0),u)this.mant=(new gx.num.dec.bigDecimal("0")).mant,this.exp=0}else u&&(this.form=gx.num.dec.SCIENTIFIC,p=this.exp+this.mant.length-1,(p<this.MinExp||p>this.MaxExp)&&this.bad("bigDecimal(): ",
k))}},mthctx:function(k,m,q,t){this.getDigits=function(){return this.digits};this.getForm=function(){return this.form};this.getLostDigits=function(){return this.lostDigits};this.getRoundingMode=function(){return this.roundingMode};this.toString=function(){var k=null,m=0,p=null,k=this.form==gx.num.dec.SCIENTIFIC?"SCIENTIFIC":this.form==gx.num.dec.ENGINEERING?"ENGINEERING":"PLAIN",q=gx.num.dec.ROUNDS.length,m=0;a:for(;0<q;q--,m++)if(this.roundingMode==gx.num.dec.ROUNDS[m]){p=gx.num.dec.ROUNDWORDS[m];
break a}return"digits="+this.digits+" form="+k+" lostDigits="+(this.lostDigits?"1":"0")+" roundingMode="+p};this.isValidRound=function(k){for(var m=0,p=gx.num.dec.ROUNDS.length,m=0;0<p;p--,m++)if(k==gx.num.dec.ROUNDS[m])return!0;return!1};this.form=this.digits=0;this.lostDigits=!1;this.roundingMode=0;"undefined"==typeof t&&(t=gx.num.dec.DEFAULT_ROUNDINGMODE);"undefined"==typeof q&&(q=gx.num.dec.DEFAULT_LOSTDIGITS);"undefined"==typeof m&&(m=gx.num.dec.DEFAULT_FORM);if(k!=gx.num.dec.DEFAULT_DIGITS){if(k<
gx.num.dec.MIN_DIGITS)throw"mthctx(): Digits too small: "+k;if(k>gx.num.dec.MAX_DIGITS)throw"mthctx(): Digits too large: "+k;}if(m!=gx.num.dec.SCIENTIFIC&&m!=gx.num.dec.ENGINEERING&&m!=gx.num.dec.PLAIN)throw"mthctx() Bad form value: "+m;if(!this.isValidRound(t))throw"mthctx(): Bad roundingMode value: "+t;this.digits=k;this.form=m;this.lostDigits=q;this.roundingMode=t},PLAIN:0,SCIENTIFIC:1,ENGINEERING:2,ROUND_DOWN:1,ROUND_CEILING:2,ROUND_FLOOR:3,ROUND_HALF_DOWN:5,ROUND_HALF_EVEN:6,ROUND_HALF_UP:4,
ROUND_UNNECESSARY:7,ROUND_UP:0,DEFAULT_FORM:1,DEFAULT_DIGITS:9,DEFAULT_LOSTDIGITS:!1,DEFAULT_ROUNDINGMODE:4,MIN_DIGITS:0,MAX_DIGITS:999999999,ROUNDS:[4,7,2,1,3,5,6,0],ROUNDWORDS:"ROUND_HALF_UP ROUND_UNNECESSARY ROUND_CEILING ROUND_DOWN ROUND_FLOOR ROUND_HALF_DOWN ROUND_HALF_EVEN ROUND_UP".split(" ")};
