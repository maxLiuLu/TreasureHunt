System.register("chunks:///_virtual/main",["./Start.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Start.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResMgr.ts"],(function(t){var r,n,e,a,o,u,c,s,i;return{setters:[function(t){r=t.inheritsLoose,n=t.asyncToGenerator,e=t.regeneratorRuntime},function(t){a=t.cclegacy,o=t._decorator,u=t.DynamicAtlasManager,c=t.Component,s=t.director},function(t){i=t.ResMgr}],execute:function(){var p;a._RF.push({},"57d33RA2FxF7Im4KAsq7tD0","Start",void 0);var l=o.ccclass;o.property;u.instance.enabled=!1;t("Start",l("Start")(p=function(t){function a(){return t.apply(this,arguments)||this}r(a,t);var o=a.prototype;return o.start=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadBundle("treasure");case 2:t.sent,s.loadScene("Default");case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),o.loadBundle=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){i.LoadBundle(r,t)})));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),a}(c))||p);a._RF.pop()}}}));

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