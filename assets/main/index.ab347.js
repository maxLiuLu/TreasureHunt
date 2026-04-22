System.register("chunks:///_virtual/main",["./Start.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Start.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResMgr.ts"],(function(r){var e,t,n,i,o,a,s,u,c,l,f,p,h,d,g;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.inheritsLoose,n=r.initializerDefineProperty,i=r.assertThisInitialized,o=r.asyncToGenerator,a=r.regeneratorRuntime},function(r){s=r.cclegacy,u=r._decorator,c=r.DynamicAtlasManager,l=r.Sprite,f=r.Label,p=r.Slider,h=r.Component,d=r.director},function(r){g=r.ResMgr}],execute:function(){var m,P,v,y,S,b,w,D,R;s._RF.push({},"57d33RA2FxF7Im4KAsq7tD0","Start",void 0);var x=u.ccclass,M=u.property;c.instance.enabled=!1;r("Start",(m=x("Start"),P=M(l),v=M(f),y=M(p),m((w=e((b=function(r){function e(){for(var e,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return e=r.call.apply(r,[this].concat(o))||this,n(e,"mProgress",w,i(e)),n(e,"mPercent",D,i(e)),n(e,"mSlider",R,i(e)),e}t(e,r);var s=e.prototype;return s.start=function(){var r=o(a().mark((function r(){var e,t,n,i=this;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=0,t=function(){e=Math.min(e+.015,.3),i.SetProgrees(e)},this.schedule(t,.1),r.next=5,this.loadBundle("treasure");case 5:return n=r.sent,this.unschedule(t),r.next=9,this.loadDirWithProgress(n,"prefabs");case 9:this.SetProgrees(1),d.loadScene("Default");case 11:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}(),s.loadBundle=function(){var r=o(a().mark((function r(e){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r){g.LoadBundle(e,r)})));case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),s.loadDirWithProgress=function(r,e){var t=this;return new Promise((function(n){r.loadDir(e,(function(r,e){var n=e>0?r/e:0;t.SetProgrees(.3+.7*n)}),(function(r){r&&console.error("loadDir error:",r),n()}))}))},s.SetProgrees=function(r){this.mProgress.fillRange=r;var e=Math.floor(100*r);this.mPercent.string=e+"%",this.mSlider.progress=r},e}(h)).prototype,"mProgress",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(b.prototype,"mPercent",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(b.prototype,"mSlider",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=b))||S));s._RF.pop()}}}));

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