System.register("chunks:///_virtual/main",["./Start.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Start.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResMgr.ts"],(function(e){var r,t,n,i,a,o,s,u,c,l,p,f,h,d,m;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.asyncToGenerator,o=e.regeneratorRuntime},function(e){s=e.cclegacy,u=e._decorator,c=e.DynamicAtlasManager,l=e.Sprite,p=e.Label,f=e.Slider,h=e.Component,d=e.director},function(e){m=e.ResMgr}],execute:function(){var g,y,S,b,v,P,w,R,D;s._RF.push({},"57d33RA2FxF7Im4KAsq7tD0","Start",void 0);var M=u.ccclass,x=u.property;c.instance.enabled=!1;e("Start",(g=M("Start"),y=x(l),S=x(p),b=x(f),g((w=r((P=function(e){function r(){for(var r,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a))||this,n(r,"mProgress",w,i(r)),n(r,"mPercent",R,i(r)),n(r,"mSlider",D,i(r)),r}t(r,e);var s=r.prototype;return s.start=function(){var e=a(o().mark((function e(){var r,t,n=this;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,t=function(){r=Math.min(r+.015,.9),n.SetProgrees(r)},this.schedule(t,.1),e.next=5,this.loadBundle("treasure");case 5:e.sent,this.unschedule(t),this.SetProgrees(1),d.loadScene("Default");case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),s.loadBundle=function(){var e=a(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){m.LoadBundle(r,e)})));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),s.SetProgrees=function(e){this.mProgress.fillRange=e;var r=Math.floor(100*e);this.mPercent.string=r+"%",this.mSlider.progress=e},r}(h)).prototype,"mProgress",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=r(P.prototype,"mPercent",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=r(P.prototype,"mSlider",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=P))||v));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});