!function(a){a.widget("ui.dateSliderDemo",a.ui.sliderDemo,{options:{},_title:"Date values",_name:"dateRangeSlider",_createInputs:function(){a.ui.sliderDemo.prototype._createInputs.apply(this,[]),this._addPicker(this._elements.minInput),this._addPicker(this._elements.maxInput),function(b){b._elements.minInput.change(function(){b._valueChanged(a(this).datepicker("getDate"),"min")}),b._elements.maxInput.change(function(){b._valueChanged(a(this).datepicker("getDate"),"max")})}(this),this._elements.minInput.change(a.proxy(this._minChanged,this))},_createBoundsOptions:function(){this._createDT("Bounds");var b=this._createSelect("min","Bound"),c=this._createSelect("max","Bound");this._addDateOption(b,new Date(2010,0,1)),this._addDateOption(b,new Date(2010,2,1)),this._addDateOption(b,new Date(2010,5,1)),this._addDateOption(c,new Date(2011,11,31,11,59,59)),this._addDateOption(c,new Date(2011,8,31,11,59,59)),this._addDateOption(c,new Date(2011,5,30,11,59,59)),b.bind("change","min",a.proxy(this._changeBound,this)),c.bind("change","max",a.proxy(this._changeBound,this))},_addDateOption:function(a,b){this._addOption(a,this._format(b),b.valueOf())},_changeBound:function(b){var c=a(b.target).val(),d=this._getOption("bounds");d[b.data]=new Date(parseFloat(c)),this._setOption("bounds",d)},_createStepOption:function(){this._createDT("Step");var b=a("<select name='step' />");this._createDD(b),b.bind("change",a.proxy(this._stepOptionChange,this)),this._addOption(b,"false"),this._addOption(b,"2 days",'{"days":2}'),this._addOption(b,"7 days",'{"days":7}'),this._addOption(b,"1 month",'{"months":1}')},_stepOptionChange:function(b){var c=a(b.target),d=c.val();this._setOption("step",a.parseJSON(d))},_valueChanged:function(a,b){this._elements.slider[this._name](b,a)},_addPicker:function(a){a.datepicker({maxDate:new Date(2012,0,1),minDate:new Date(2010,0,1),dateFormat:"yy-mm-dd",buttonImage:"img/calendar.png",buttonImageOnly:!0,buttonText:"Choose a date",showOn:"both"})},_format:function(b){return a.datepicker.formatDate("yy-mm-dd",b)},_fillMinSelect:function(a){this._addOption(a,"false"),this._addOption(a,"4 weeks",'{"days": 28}'),this._addOption(a,"8 weeks",'{"days": 54}'),this._addOption(a,"16 weeks",'{"days": 108}')},_fillMaxSelect:function(a){this._addOption(a,"false"),this._addOption(a,"365 days",'{"days": 365}'),this._addOption(a,"400 days",'{"days": 400}'),this._addOption(a,"500 days",'{"days": 500}')},_minSelectChange:function(b){var c=a(b.target).val();this._setRangeOption(a.parseJSON(c),"min")},_maxSelectChange:function(b){var c=a(b.target).val();this._setRangeOption(a.parseJSON(c),"max")},_setRangeOption:function(a,b){var c={};c[b]=""==a?!1:a,this._setOption("range",c)},_returnValues:function(a){try{return"min:"+this._format(a.values.min)+" max:"+this._format(a.values.max)}catch(b){return b}}})}(jQuery);