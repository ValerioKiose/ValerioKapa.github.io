(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{eGC9:function(e,t,n){"use strict";n.r(t),n.d(t,"ChartsModule",(function(){return u}));var i=n("jICm"),l=n("ey9i"),s=n("fXoL"),a=n("zQsl");let r=(()=>{class e{constructor(){this.curve=i.a,this.showXAxis=!0,this.showYAxis=!0,this.gradient=!1,this.showLegend=!1,this.showXAxisLabel=!0,this.tooltipDisabled=!1,this.xAxisLabel="Country",this.showYAxisLabel=!0,this.yAxisLabel="GDP Per Capita",this.showGridLines=!0,this.innerPadding=0,this.barPadding=8,this.groupPadding=16,this.roundDomains=!1,this.maxRadius=10,this.minRadius=3,this.colorScheme={domain:l.d},this.schemeType="ordinal",Object.assign(this,{single:l.h,multi:l.g})}select(e){console.log("Item clicked",e)}onLegendLabelClick(e){console.log("Legend clicked",e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-bar"]],decls:60,vars:122,consts:[[1,"row"],[1,"col-sm-12","col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"chart-container",3,"scheme","schemeType","results","gradient","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","tooltipDisabled","xAxisLabel","yAxisLabel","showGridLines","barPadding","roundDomains","select","legendLabelClick"],[1,"chart-container",3,"scheme","schemeType","results","gradient","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","tooltipDisabled","xAxisLabel","yAxisLabel","showGridLines","barPadding","roundDomains","legendLabelClick","select"],[1,"chart-container",3,"scheme","schemeType","results","gradient","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","tooltipDisabled","xAxisLabel","yAxisLabel","showGridLines","barPadding","groupPadding","roundDomains","legendLabelClick","select"],[1,"chart-container",3,"scheme","schemeType","results","gradient","tooltipDisabled","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","showGridLines","barPadding","groupPadding","roundDomains","legendLabelClick","select"],[1,"chart-container",3,"scheme","schemeType","results","gradient","tooltipDisabled","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","showGridLines","barPadding","roundDomains","legendLabelClick","select"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"div",3),s["\u0275\u0275text"](4,"Vertical bar chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",4),s["\u0275\u0275elementStart"](6,"div"),s["\u0275\u0275elementStart"](7,"ngx-charts-bar-vertical",5),s["\u0275\u0275listener"]("select",(function(e){return t.select(e)}))("legendLabelClick",(function(e){return t.onLegendLabelClick(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"div",1),s["\u0275\u0275elementStart"](9,"div",2),s["\u0275\u0275elementStart"](10,"div",3),s["\u0275\u0275text"](11,"Horizontal bar chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"div",4),s["\u0275\u0275elementStart"](13,"div"),s["\u0275\u0275elementStart"](14,"ngx-charts-bar-horizontal",6),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"div",0),s["\u0275\u0275elementStart"](16,"div",1),s["\u0275\u0275elementStart"](17,"div",2),s["\u0275\u0275elementStart"](18,"div",3),s["\u0275\u0275text"](19,"Grouped vertical bar chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"div",4),s["\u0275\u0275elementStart"](21,"div"),s["\u0275\u0275elementStart"](22,"ngx-charts-bar-vertical-2d",7),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"div",1),s["\u0275\u0275elementStart"](24,"div",2),s["\u0275\u0275elementStart"](25,"div",3),s["\u0275\u0275text"](26,"Grouped horizontal bar chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"div",4),s["\u0275\u0275elementStart"](28,"div"),s["\u0275\u0275elementStart"](29,"ngx-charts-bar-horizontal-2d",8),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"div",0),s["\u0275\u0275elementStart"](31,"div",1),s["\u0275\u0275elementStart"](32,"div",2),s["\u0275\u0275elementStart"](33,"div",3),s["\u0275\u0275text"](34,"Stacked vertical bar chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](35,"div",4),s["\u0275\u0275elementStart"](36,"div"),s["\u0275\u0275elementStart"](37,"ngx-charts-bar-vertical-stacked",9),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](38,"div",1),s["\u0275\u0275elementStart"](39,"div",2),s["\u0275\u0275elementStart"](40,"div",3),s["\u0275\u0275text"](41,"Stacked horizontal bar chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](42,"div",4),s["\u0275\u0275elementStart"](43,"div"),s["\u0275\u0275elementStart"](44,"ngx-charts-bar-horizontal-stacked",9),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](45,"div",0),s["\u0275\u0275elementStart"](46,"div",1),s["\u0275\u0275elementStart"](47,"div",2),s["\u0275\u0275elementStart"](48,"div",3),s["\u0275\u0275text"](49,"Normalized vertical bar chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](50,"div",4),s["\u0275\u0275elementStart"](51,"div"),s["\u0275\u0275elementStart"](52,"ngx-charts-bar-vertical-normalized",9),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](53,"div",1),s["\u0275\u0275elementStart"](54,"div",2),s["\u0275\u0275elementStart"](55,"div",3),s["\u0275\u0275text"](56,"Normalized horizontal bar chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](57,"div",4),s["\u0275\u0275elementStart"](58,"div"),s["\u0275\u0275elementStart"](59,"ngx-charts-bar-horizontal-normalized",9),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.single)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("tooltipDisabled",t.tooltipDisabled)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("showGridLines",t.showGridLines)("barPadding",t.barPadding)("roundDomains",t.roundDomains),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.single)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("tooltipDisabled",t.tooltipDisabled)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("showGridLines",t.showGridLines)("barPadding",t.barPadding)("roundDomains",t.roundDomains),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.multi)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("tooltipDisabled",t.tooltipDisabled)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("showGridLines",t.showGridLines)("barPadding",t.barPadding)("groupPadding",t.groupPadding)("roundDomains",t.roundDomains),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.multi)("gradient",t.gradient)("tooltipDisabled",t.tooltipDisabled)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("showGridLines",t.showGridLines)("barPadding",t.barPadding)("groupPadding",t.groupPadding)("roundDomains",t.roundDomains),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.multi)("gradient",t.gradient)("tooltipDisabled",t.tooltipDisabled)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("showGridLines",t.showGridLines)("barPadding",t.barPadding)("roundDomains",t.roundDomains),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.multi)("gradient",t.gradient)("tooltipDisabled",t.tooltipDisabled)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("showGridLines",t.showGridLines)("barPadding",t.barPadding)("roundDomains",t.roundDomains),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.multi)("gradient",t.gradient)("tooltipDisabled",t.tooltipDisabled)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("showGridLines",t.showGridLines)("barPadding",t.barPadding)("roundDomains",t.roundDomains),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.multi)("gradient",t.gradient)("tooltipDisabled",t.tooltipDisabled)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("showGridLines",t.showGridLines)("barPadding",t.barPadding)("roundDomains",t.roundDomains))},directives:[a.j,a.f,a.i,a.e,a.l,a.h,a.k,a.g],styles:[".chart-container[_ngcontent-%COMP%]{height:300px;width:100%;display:block}"]}),e})(),d=(()=>{class e{constructor(){this.range=!1,this.showXAxis=!0,this.showYAxis=!0,this.gradient=!1,this.showLegend=!1,this.showXAxisLabel=!0,this.tooltipDisabled=!1,this.xAxisLabel="Country",this.showYAxisLabel=!0,this.yAxisLabel="GDP Per Capita",this.showGridLines=!0,this.innerPadding=0,this.barPadding=8,this.groupPadding=16,this.roundDomains=!1,this.maxRadius=10,this.minRadius=3,this.curve=i.a,this.colorScheme={domain:l.d},this.schemeType="ordinal",this.rangeFillOpacity=.15,this.autoScale=!0,this.timeline=!1,Object.assign(this,{single:l.h,multi:l.g}),this.dateData=Object(l.e)(5,!1),this.dateDataWithRange=Object(l.e)(2,!0)}get dateDataWithOrWithoutRange(){return this.range?this.dateDataWithRange:this.dateData}select(e){console.log("Item clicked",e)}onLegendLabelClick(e){console.log("Legend clicked",e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-line"]],decls:30,vars:67,consts:[[1,"row"],[1,"col-sm-12","col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"chart-container",3,"scheme","schemeType","results","legend","gradient","xAxis","yAxis","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","autoScale","timeline","showGridLines","curve","rangeFillOpacity","roundDomains","tooltipDisabled","legendLabelClick","select"],[1,"chart-container",3,"scheme","schemeType","results","legend","gradient","xAxis","yAxis","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","autoScale","timeline","showGridLines","roundDomains","curve","tooltipDisabled","legendLabelClick","select"],[1,"chart-container",3,"scheme","schemeType","results","legend","gradient","xAxis","yAxis","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","timeline","showGridLines","roundDomains","tooltipDisabled","curve","legendLabelClick","select"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"div",3),s["\u0275\u0275text"](4,"Line chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",4),s["\u0275\u0275elementStart"](6,"div"),s["\u0275\u0275elementStart"](7,"ngx-charts-line-chart",5),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"div",1),s["\u0275\u0275elementStart"](9,"div",2),s["\u0275\u0275elementStart"](10,"div",3),s["\u0275\u0275text"](11,"Area chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"div",4),s["\u0275\u0275elementStart"](13,"div"),s["\u0275\u0275elementStart"](14,"ngx-charts-area-chart",6),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"div",0),s["\u0275\u0275elementStart"](16,"div",1),s["\u0275\u0275elementStart"](17,"div",2),s["\u0275\u0275elementStart"](18,"div",3),s["\u0275\u0275text"](19,"Stacked area chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"div",4),s["\u0275\u0275elementStart"](21,"div"),s["\u0275\u0275elementStart"](22,"ngx-charts-area-chart-stacked",7),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"div",1),s["\u0275\u0275elementStart"](24,"div",2),s["\u0275\u0275elementStart"](25,"div",3),s["\u0275\u0275text"](26,"Normalized area chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"div",4),s["\u0275\u0275elementStart"](28,"div"),s["\u0275\u0275elementStart"](29,"ngx-charts-area-chart-normalized",7),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.dateDataWithOrWithoutRange)("legend",t.showLegend)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("autoScale",t.autoScale)("timeline",t.timeline)("showGridLines",t.showGridLines)("curve",t.curve)("rangeFillOpacity",t.rangeFillOpacity)("roundDomains",t.roundDomains)("tooltipDisabled",!0),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.dateData)("legend",t.showLegend)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("autoScale",t.autoScale)("timeline",t.timeline)("showGridLines",t.showGridLines)("roundDomains",t.roundDomains)("curve",t.curve)("tooltipDisabled",t.tooltipDisabled),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.dateData)("legend",t.showLegend)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("timeline",t.timeline)("showGridLines",t.showGridLines)("roundDomains",t.roundDomains)("tooltipDisabled",t.tooltipDisabled)("curve",t.curve),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("schemeType",t.schemeType)("results",t.dateData)("legend",t.showLegend)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("timeline",t.timeline)("showGridLines",t.showGridLines)("roundDomains",t.roundDomains)("tooltipDisabled",t.tooltipDisabled)("curve",t.curve))},directives:[a.p,a.b,a.d,a.c],styles:[".chart-container[_ngcontent-%COMP%]{height:300px;width:100%;display:block}"]}),e})();const o=function(e,t,n,i){return[e,t,n,i]},c=new Intl.DateTimeFormat("en-us",{month:"short"}),m=new Intl.DateTimeFormat("en-us",{weekday:"short"});let h=(()=>{class e{constructor(){this.curve=i.a,this.showXAxis=!0,this.showYAxis=!0,this.gradient=!1,this.showLegend=!0,this.showXAxisLabel=!0,this.tooltipDisabled=!1,this.xAxisLabel="Country",this.showYAxisLabel=!0,this.yAxisLabel="GDP Per Capita",this.showGridLines=!0,this.innerPadding=0,this.barPadding=8,this.groupPadding=16,this.roundDomains=!1,this.maxRadius=10,this.minRadius=3,this.colorScheme={domain:l.d},this.schemeType="ordinal",this.autoScale=!0,this.timeline=!1,this.margin=!1,this.marginTop=40,this.marginRight=40,this.marginBottom=40,this.marginLeft=40,this.gaugeMin=0,this.gaugeMax=100,this.gaugeLargeSegments=10,this.gaugeSmallSegments=5,this.gaugeTextValue="",this.gaugeUnits="alerts",this.gaugeAngleSpan=240,this.gaugeStartAngle=-120,this.gaugeShowAxis=!0,this.gaugeValue=50,this.gaugePreviousValue=70,Object.assign(this,{single:l.h,multi:l.g,graph:Object(l.f)(50),bubble:l.c}),this.view=void 0,this.calendarData=this.getCalendarData()}select(e){console.log("Item clicked",e)}onLegendLabelClick(e){console.log("Legend clicked",e)}getCalendarData(){const e=new Date,t=e.getDate(),n=new Date(e.getFullYear(),e.getMonth(),t),i=new Date(n.getFullYear(),n.getMonth(),t-n.getDay()+1),l=i.getDate(),s=i.getFullYear(),a=i.getMonth(),r=[],d=e=>new Date(s,a,e);for(let o=-52;o<=0;o++){const t=l+7*o,n=d(t),i=[];for(let l=7;l>0;l--){const n=d(t-1+l);if(n>e)continue;const s=l<6?n.getMonth()+1:0;i.push({date:n,name:m.format(n),value:s})}r.push({name:n.toString(),series:i})}return r}calendarAxisTickFormatting(e){const t=new Date(e),n=t.getMonth(),i=t.getDate(),l=t.getFullYear(),s=new Date(l,n,i-1),a=new Date(l,n,i+6);return s.getMonth()!==a.getMonth()?c.format(a):""}calendarTooltipText(e){return`\n      <span class="tooltip-label">${e.label} \u2022 ${e.cell.date.toLocaleDateString()}</span>\n      <span class="tooltip-val">${e.data.toLocaleString()}</span>\n    `}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-misc"]],decls:54,vars:71,consts:[[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"chart-container",3,"view","results","showGridLines","legend","xAxis","yAxis","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","autoScale","scheme","schemeType","roundDomains","tooltipDisabled","minRadius","maxRadius"],[1,"col-sm-12","col-md-6"],[1,"chart-container",3,"scheme","results","legend","gradient","xAxis","yAxis","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","innerPadding","tooltipDisabled","legendLabelClick","select"],[1,"chart-container",3,"scheme","results","legend","gradient","xAxis","yAxis","showXAxisLabel","showYAxisLabel","xAxisTickFormatting","tooltipText","innerPadding","tooltipDisabled","legendLabelClick","select"],[1,"chart-container",3,"scheme","results","tooltipDisabled","legendLabelClick","select"],[1,"chart-container",3,"scheme","results","legendLabelClick","select"],[1,"chart-container",3,"legend","results","textValue","scheme","min","max","units","angleSpan","startAngle","showAxis","bigSegments","smallSegments","margin","tooltipDisabled","select","legendLabelClick"],[1,"chart-container",3,"scheme","min","max","value","previousValue","units","select"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"div",3),s["\u0275\u0275text"](4,"Bubble chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",4),s["\u0275\u0275elementStart"](6,"div"),s["\u0275\u0275element"](7,"ngx-charts-bubble-chart",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"div",0),s["\u0275\u0275elementStart"](9,"div",6),s["\u0275\u0275elementStart"](10,"div",2),s["\u0275\u0275elementStart"](11,"div",3),s["\u0275\u0275text"](12,"Heat map"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"div",4),s["\u0275\u0275elementStart"](14,"div"),s["\u0275\u0275elementStart"](15,"ngx-charts-heat-map",7),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"div",0),s["\u0275\u0275elementStart"](17,"div",1),s["\u0275\u0275elementStart"](18,"div",2),s["\u0275\u0275elementStart"](19,"div",3),s["\u0275\u0275text"](20,"Heat map - Calendar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",4),s["\u0275\u0275elementStart"](22,"div"),s["\u0275\u0275elementStart"](23,"ngx-charts-heat-map",8),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"div",0),s["\u0275\u0275elementStart"](25,"div",6),s["\u0275\u0275elementStart"](26,"div",2),s["\u0275\u0275elementStart"](27,"div",3),s["\u0275\u0275text"](28,"Tree map"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"div",4),s["\u0275\u0275elementStart"](30,"div"),s["\u0275\u0275elementStart"](31,"ngx-charts-tree-map",9),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"div",6),s["\u0275\u0275elementStart"](33,"div",2),s["\u0275\u0275elementStart"](34,"div",3),s["\u0275\u0275text"](35,"Number cards"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](36,"div",4),s["\u0275\u0275elementStart"](37,"div"),s["\u0275\u0275elementStart"](38,"ngx-charts-number-card",10),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](39,"div",0),s["\u0275\u0275elementStart"](40,"div",6),s["\u0275\u0275elementStart"](41,"div",2),s["\u0275\u0275elementStart"](42,"div",3),s["\u0275\u0275text"](43,"Gauge"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](44,"div",4),s["\u0275\u0275elementStart"](45,"div"),s["\u0275\u0275elementStart"](46,"ngx-charts-gauge",11),s["\u0275\u0275listener"]("select",(function(e){return t.select(e)}))("legendLabelClick",(function(e){return t.onLegendLabelClick(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](47,"div",6),s["\u0275\u0275elementStart"](48,"div",2),s["\u0275\u0275elementStart"](49,"div",3),s["\u0275\u0275text"](50,"Linear gauge"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](51,"div",4),s["\u0275\u0275elementStart"](52,"div"),s["\u0275\u0275elementStart"](53,"ngx-charts-linear-gauge",12),s["\u0275\u0275listener"]("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("view",t.view)("results",t.bubble)("showGridLines",t.showGridLines)("legend",!1)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",!1)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("autoScale",t.autoScale)("scheme",t.colorScheme)("schemeType",t.schemeType)("roundDomains",t.roundDomains)("tooltipDisabled",t.tooltipDisabled)("minRadius",t.minRadius)("maxRadius",t.maxRadius),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("scheme",t.colorScheme)("results",t.multi)("legend",t.showLegend)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("showXAxisLabel",t.showXAxisLabel)("showYAxisLabel",t.showYAxisLabel)("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)("innerPadding",t.innerPadding)("tooltipDisabled",t.tooltipDisabled),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("scheme",t.colorScheme)("results",t.calendarData)("legend",t.showLegend)("gradient",t.gradient)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("showXAxisLabel",!1)("showYAxisLabel",!1)("xAxisTickFormatting",t.calendarAxisTickFormatting)("tooltipText",t.calendarTooltipText)("innerPadding",t.innerPadding)("tooltipDisabled",t.tooltipDisabled),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("scheme",t.colorScheme)("results",t.single)("tooltipDisabled",t.tooltipDisabled),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("results",t.single),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("legend",t.showLegend)("results",t.single)("textValue",t.gaugeTextValue)("scheme",t.colorScheme)("min",t.gaugeMin)("max",t.gaugeMax)("units",t.gaugeUnits)("angleSpan",t.gaugeAngleSpan)("startAngle",t.gaugeStartAngle)("showAxis",t.gaugeShowAxis)("bigSegments",t.gaugeLargeSegments)("smallSegments",t.gaugeSmallSegments)("margin",t.margin?s["\u0275\u0275pureFunction4"](66,o,t.marginTop,t.marginRight,t.marginBottom,t.marginLeft):null)("tooltipDisabled",t.tooltipDisabled),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("min",t.gaugeMin)("max",t.gaugeMax)("value",t.gaugeValue)("previousValue",t.gaugePreviousValue)("units",t.gaugeUnits))},directives:[a.m,a.o,a.v,a.s,a.n,a.q],styles:[".chart-container[_ngcontent-%COMP%]{height:300px;width:100%;display:block}"]}),e})();const g=[{path:"",children:[{path:"bar",component:r,data:{heading:"Bar"}},{path:"pie",component:(()=>{class e{constructor(){this.curve=i.a,this.showXAxis=!0,this.showYAxis=!0,this.gradient=!1,this.showLegend=!0,this.showXAxisLabel=!0,this.tooltipDisabled=!1,this.xAxisLabel="Country",this.showYAxisLabel=!0,this.yAxisLabel="GDP Per Capita",this.showGridLines=!0,this.innerPadding=0,this.barPadding=8,this.groupPadding=16,this.roundDomains=!1,this.maxRadius=10,this.minRadius=3,this.colorScheme={domain:l.d},this.schemeType="ordinal",this.showLabels=!0,this.explodeSlices=!1,this.doughnut=!1,this.arcWidth=.25,Object.assign(this,{single:l.h})}select(e){console.log("Item clicked",e)}onLegendLabelClick(e){console.log("Legend clicked",e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-pie"]],decls:22,vars:16,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"chart-container",3,"scheme","results","legend","explodeSlices","labels","doughnut","arcWidth","gradient","tooltipDisabled","legendLabelClick","select"],[1,"chart-container",3,"scheme","results","gradient","tooltipDisabled","legendLabelClick","select"],[1,"chart-container",3,"scheme","results","tooltipDisabled","legendLabelClick","select"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"div",3),s["\u0275\u0275text"](4,"Pie chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",4),s["\u0275\u0275elementStart"](6,"div"),s["\u0275\u0275elementStart"](7,"ngx-charts-pie-chart",5),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"div",1),s["\u0275\u0275elementStart"](9,"div",2),s["\u0275\u0275elementStart"](10,"div",3),s["\u0275\u0275text"](11,"Advanced pie chart"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"div",4),s["\u0275\u0275elementStart"](13,"div"),s["\u0275\u0275elementStart"](14,"ngx-charts-advanced-pie-chart",6),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"div",1),s["\u0275\u0275elementStart"](16,"div",2),s["\u0275\u0275elementStart"](17,"div",3),s["\u0275\u0275text"](18,"Pie grid"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"div",4),s["\u0275\u0275elementStart"](20,"div"),s["\u0275\u0275elementStart"](21,"ngx-charts-pie-grid",7),s["\u0275\u0275listener"]("legendLabelClick",(function(e){return t.onLegendLabelClick(e)}))("select",(function(e){return t.select(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("results",t.single)("legend",t.showLegend)("explodeSlices",t.explodeSlices)("labels",t.showLabels)("doughnut",t.doughnut)("arcWidth",t.arcWidth)("gradient",t.gradient)("tooltipDisabled",t.tooltipDisabled),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("results",t.single)("gradient",t.gradient)("tooltipDisabled",t.tooltipDisabled),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("scheme",t.colorScheme)("results",t.single)("tooltipDisabled",t.tooltipDisabled))},directives:[a.t,a.a,a.u],styles:[".chart-container[_ngcontent-%COMP%]{height:300px;width:100%;display:block}"]}),e})(),data:{heading:"Pie"}},{path:"line",component:d,data:{heading:"Line"}},{path:"misc",component:h,data:{heading:"Misc"}}]}];var x=n("ofXK"),b=n("tyNb");let u=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[x.c,b.i.forChild(g),a.r]]}),e})()}}]);