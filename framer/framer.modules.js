require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"feedLayer":[function(require,module,exports){
var feedLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

feedLayer = (function(superClass) {
  extend(feedLayer, superClass);

  function feedLayer() {
    return feedLayer.__super__.constructor.apply(this, arguments);
  }

  module.exports = FeedLayer;

  return feedLayer;

})(Layer);


},{}],"helixFeed":[function(require,module,exports){
var helixFeed,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

helixFeed = (function(superClass) {
  extend(helixFeed, superClass);

  function helixFeed() {
    return helixFeed.__super__.constructor.apply(this, arguments);
  }

  module.exports = FeedLayer;

  return helixFeed;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"navLayer":[function(require,module,exports){
var NavLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

NavLayer = (function(superClass) {
  var prefs;

  extend(NavLayer, superClass);

  prefs = {
    screenWidth: Framer.Device.screen.width,
    screenHeight: Framer.Device.screen.height,
    styles: {
      fontClan: {
        fontFamily: "Clan Pro"
      },
      h1: {
        fontSize: "48px"
      },
      navText: {
        fontSize: "36px"
      }
    }
  };

  function NavLayer(options) {
    var base, base1;
    this.options = options != null ? options : {};
    this.labelLayer = new Layer;
    NavLayer.__super__.constructor.call(this, _.defaults(this.options, {
      backgroundColor: null,
      width: prefs.screenWidth,
      opacity: 0
    }, (base = this.options).height != null ? base.height : base.height = 240, (base1 = this.options).labelString != null ? base1.labelString : base1.labelString = "Default"));
    this.states = {
      collapsed: {
        height: 144
      },
      active: {
        height: this.options.height
      },
      "default": {
        opacity: 0
      }
    };
    this.init();
  }

  NavLayer.prototype.init = function() {
    this.labelLayer.props = {
      name: "labelLayer",
      html: this.options.labelString,
      height: 62,
      backgroundColor: null,
      parent: this,
      style: {
        fontFamily: prefs.styles.fontClan.fontFamily,
        fontSize: prefs.styles.h1.fontSize
      }
    };
    this.labelLayer.states = {
      collapsed: {
        x: 80,
        y: 66,
        scale: 0.75
      },
      active: {
        x: 44,
        y: 144,
        scale: 1
      },
      "default": {
        x: 44,
        y: 344,
        scale: 1
      }
    };
    return this.animateState("default");
  };

  NavLayer.prototype.animateState = function(navState) {
    this.animate(navState);
    return this.labelLayer.animate(navState);
  };

  NavLayer.prototype.modulateState = function(yValue) {
    if (yValue >= 96) {
      this.labelLayer.y = Utils.modulate(yValue, [1040, 0], [344, 144]);
      return this.opacity = Utils.modulate(yValue, [700, 200], [0, 1]);
    } else if (yValue >= 0) {
      return this.labelLayer.props = {
        x: Utils.modulate(yValue, [96, 0], [44, 80]),
        y: Utils.modulate(yValue, [96, 0], [144, 66]),
        scale: Utils.modulate(yValue, [96, 0], [1, 0.75])
      };
    } else {
      return this.labelLayer.props = {
        x: 80,
        y: 66,
        scale: 0.75
      };
    }
  };

  module.exports = NavLayer;

  return NavLayer;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbmF2TGF5ZXIuY29mZmVlIiwiLi4vbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi9tb2R1bGVzL2hlbGl4RmVlZC5jb2ZmZWUiLCIuLi9tb2R1bGVzL2ZlZWRMYXllci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hdkxheWVyIGV4dGVuZHMgTGF5ZXJcbiAgcHJlZnMgPVxuICAgIHNjcmVlbldpZHRoOiBGcmFtZXIuRGV2aWNlLnNjcmVlbi53aWR0aCBcbiAgICBzY3JlZW5IZWlnaHQ6IEZyYW1lci5EZXZpY2Uuc2NyZWVuLmhlaWdodFxuICAgIHN0eWxlczogXG4gICAgICBmb250Q2xhbjogIFxuICAgICAgICBmb250RmFtaWx5OiBcIkNsYW4gUHJvXCJcbiAgICAgIGgxOiBcbiAgICAgICAgZm9udFNpemU6IFwiNDhweFwiXG4gICAgICBuYXZUZXh0OlxuICAgICAgICBmb250U2l6ZTogXCIzNnB4XCJcblxuICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgIEBsYWJlbExheWVyID0gbmV3IExheWVyXG5cbiAgICBzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICB3aWR0aDogcHJlZnMuc2NyZWVuV2lkdGhcbiAgICAgIG9wYWNpdHk6IDBcbiAgICAgIEBvcHRpb25zLmhlaWdodCA/PSAyNDBcbiAgICAgIEBvcHRpb25zLmxhYmVsU3RyaW5nID89IFwiRGVmYXVsdFwiXG5cbiAgICAjIEBvbkNsaWNrIC0+XG4gICAgIyAgIEBzZXRTdGF0ZSgpXG5cbiAgICBAc3RhdGVzID1cbiAgICAgIGNvbGxhcHNlZDpcbiAgICAgICAgaGVpZ2h0OiAxNDRcbiAgICAgIGFjdGl2ZTpcbiAgICAgICAgaGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9wYWNpdHk6IDBcblxuICAgIEBpbml0KClcblxuICBpbml0OiAoKSAtPlxuICAgIEBsYWJlbExheWVyLnByb3BzID1cbiAgICAgIG5hbWU6IFwibGFiZWxMYXllclwiXG4gICAgICBodG1sOiBAb3B0aW9ucy5sYWJlbFN0cmluZ1xuICAgICAgaGVpZ2h0OiA2MlxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICBwYXJlbnQ6IEBcbiAgICAgIHN0eWxlOlxuICAgICAgICBmb250RmFtaWx5OiBwcmVmcy5zdHlsZXMuZm9udENsYW4uZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IHByZWZzLnN0eWxlcy5oMS5mb250U2l6ZVxuICAgIEBsYWJlbExheWVyLnN0YXRlcyA9XG4gICAgICBjb2xsYXBzZWQ6XG4gICAgICAgIHg6IDgwLCB5OiA2NlxuICAgICAgICBzY2FsZTogMC43NVxuICAgICAgYWN0aXZlOlxuICAgICAgICB4OiA0NCwgeTogMTQ0XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB4OiA0NCwgeTogMzQ0XG4gICAgICAgIHNjYWxlOiAxXG5cbiAgICBAYW5pbWF0ZVN0YXRlKFwiZGVmYXVsdFwiKVxuICAgIFxuICBhbmltYXRlU3RhdGU6IChuYXZTdGF0ZSkgLT5cbiAgICBAYW5pbWF0ZShuYXZTdGF0ZSlcbiAgICBAbGFiZWxMYXllci5hbmltYXRlKG5hdlN0YXRlKVxuXG4gIG1vZHVsYXRlU3RhdGU6ICh5VmFsdWUpIC0+XG4gICAgaWYgeVZhbHVlID49IDk2XG4gICAgICBAbGFiZWxMYXllci55ID0gVXRpbHMubW9kdWxhdGUoeVZhbHVlLCBbMTA0MCwwXSwgWzM0NCwxNDRdKVxuICAgICAgQG9wYWNpdHkgPSBVdGlscy5tb2R1bGF0ZSh5VmFsdWUsIFs3MDAsMjAwXSwgWzAsMV0pXG4gICAgZWxzZSBpZiB5VmFsdWUgPj0gMFxuICAgICAgQGxhYmVsTGF5ZXIucHJvcHMgPSBcbiAgICAgICAgeDogVXRpbHMubW9kdWxhdGUoeVZhbHVlLCBbOTYsMF0sIFs0NCw4MF0pXG4gICAgICAgIHk6IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzk2LDBdLCBbMTQ0LDY2XSlcbiAgICAgICAgc2NhbGU6IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzk2LDBdLCBbMSwwLjc1XSlcbiAgICBlbHNlXG4gICAgICBAbGFiZWxMYXllci5wcm9wcyA9XG4gICAgICAgIHg6IDgwLCB5OiA2Niwgc2NhbGU6IDAuNzVcblxuICBtb2R1bGUuZXhwb3J0cyA9IE5hdkxheWVyXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiY2xhc3MgaGVsaXhGZWVkIGV4dGVuZHMgTGF5ZXJcbiMgICBwcmVmcyA9XG4jICAgICBzY3JlZW5XaWR0aDogRnJhbWVyLkRldmljZS5zY3JlZW4ud2lkdGggXG4jICAgICBzY3JlZW5IZWlnaHQ6IEZyYW1lci5EZXZpY2Uuc2NyZWVuLmhlaWdodFxuIyAgICAgc3R5bGVzOiBcbiMgICAgICAgZm9udENsYW46ICBcbiMgICAgICAgICBmb250RmFtaWx5OiBcIkNsYW4gUHJvXCJcbiMgICAgICAgaDE6IFxuIyAgICAgICAgIGZvbnRTaXplOiBcIjQ4cHhcIlxuIyAgICAgICBuYXZUZXh0OlxuIyAgICAgICAgIGZvbnRTaXplOiBcIjM2cHhcIlxuXG4jICMjIyBEcmFnZ2FibGUgTGF5ZXIgXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIyMjXG4jICAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuIyAgICAgQGRyYWdMYXllciA9IG5ldyBMYXllclxuIyAgICAgICB3aWR0aDogcHJlZnMuc2NyZWVuV2lkdGhcbiMgICAgICAgaGVpZ2h0OiBwcmVmcy5zY3JlZW5IZWlnaHRcbiMgICAgICAgeTogcHJlZnMuc2NyZWVuSGVpZ2h0IC0gMTUwXG4jICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJcIlxuXG4jICAgICBAZHJhZ0xheWVyLmRyYWdnYWJsZS5lbmFibGVkID0gdHJ1ZVxuIyAgICAgQGRyYWdMYXllci5kcmFnZ2FibGUuaG9yaXpvbnRhbCA9IGZhbHNlXG4jICAgICBAZHJhZ0xheWVyLmRyYWdnYWJsZS5jb25zdHJhaW50cyA9XG4jICAgICAgIHg6IDAsIHk6IDE0NCBcbiMgICAgICAgd2lkdGg6IHByZWZzLnNjcmVlbldpZHRoXG4jICAgICAgIGhlaWdodDogcHJlZnMuc2NyZWVuSGVpZ2h0ICogMiAtIDE1MFxuIyAgICAgQGRyYWdMYXllci5kcmFnZ2FibGUub3ZlcmRyYWcgPSBmYWxzZVxuXG4jICAgICBAZHJhZ0xheWVyLnN0YXRlcyA9XG4jICAgICAgIG1heDpcbiMgICAgICAgICB5OiAxNDRcbiMgICAgICAgYWN0aXZlOlxuIyAgICAgICAgIHk6IDI0MFxuIyAgICAgICBkZWZhdWx0OlxuIyAgICAgICAgIHk6IHByZWZzLnNjcmVlbkhlaWdodCAtIDE1MFxuXG4jICMjIyBTY3JvbGwgTGF5ZXIgKG5lc3RlZCBpbnNpZGUgZHJhZ0xheWVyKVxuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSMjI1xuIyAgICAgc2Nyb2xsTGF5ZXIgPSBuZXcgU2Nyb2xsQ29tcG9uZW50XG4jICAgICAgIHdpZHRoOiBwcmVmcy5zY3JlZW5XaWR0aCAtIGhlbGl4Q2FyZEd1dHRlciAqIDJcbiMgICAgICAgaGVpZ2h0OiBwcmVmcy5zY3JlZW5IZWlnaHQgLSAxNDRcbiMgICAgICAgbWlkWDogcHJlZnMuc2NyZWVuV2lkdGggLyAyXG4jICAgICAgIHNjcm9sbEhvcml6b250YWw6IGZhbHNlXG4jICAgICAgIHNjcm9sbFZlcnRpY2FsOiBmYWxzZVxuIyAgICAgICBwYXJlbnQ6IGRyYWdMYXllclxuIyAgICAgc2Nyb2xsTGF5ZXIuY29udGVudEluc2V0ID1cbiMgICAgICAgYm90dG9tOiAxMDAgXG4jICAgICBzY3JvbGxMYXllci5zdGF0ZXMgPVxuIyAgICAgICBhY3RpdmU6XG4jICAgICAgICAgeTogMFxuIyAgICAgICBkZWZhdWx0OiBcbiMgICAgICAgICB4OiAzMlxuIyAgICAgICAgIHdpZHRoOiA2ODZcblxuIyAjIyMgZHJhZ0xheWVyIExpc3RlbmVyc1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSMjI1xuIyAgIGRyYWdMYXllci5vbkRyYWcgLT5cbiMgICAgIHlWYWx1ZSA9IGRyYWdMYXllci55XG4jICAgICAjIHdoZW4gc2Nyb2xsaW5nIHVwIHNjYWxlIGRvd24gc2VhcmNoIGFuZCBhY2NlbGVyYXRvciBhbmQgYnJpbmcgaW4gdGhlIGJhY2tncm91bmRcbiMgICAgIG1vZHVsYXRlZFlWYWx1ZSA9IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzAsMTE4NF0sIFswLjY1LDFdKVxuIyAgICAgbmF2TGF5ZXIubW9kdWxhdGVTdGF0ZSh5VmFsdWUpXG4jICAgICBhY2NlbGVyYXRvcnNMYXllci5zY2FsZSA9IG1vZHVsYXRlZFlWYWx1ZVxuIyAgICAgc2VhcmNoQmFyTGF5ZXIuc2NhbGUgPSBtb2R1bGF0ZWRZVmFsdWVcbiMgICAgIGJsYWNrQkcub3BhY2l0eSA9IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgW3ByZWZzLnNjcmVlbkhlaWdodCAvIDIgKyAyMDAsMTE4NF0sIFsxLDBdKVxuIyAgICAgIyBpZiB0aGUgeVZhbHVlIGlzIGJldHdlZW4gdGhlIGRlZmF1bHQgYW5kIGdyZWF0ZXIgdGhhbiA2NyUgb2YgdGhlIGhlaWdodCwgc2NhbGUgdGhlIGNhcmRzXG4jICAgICBpZiB5VmFsdWUgPj0gcHJlZnMuc2NyZWVuSGVpZ2h0ICogMC42N1xuIyAgICAgICBzY3JvbGxMYXllci53aWR0aCA9IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzkwMCwxMTg0XSwgWzc1MCw2ODZdKVxuIyAgICAgICBzY3JvbGxMYXllci5taWRYID0gcHJlZnMuc2NyZWVuV2lkdGggLyAyXG5cbiMgICAjIG9uRHJhZ0VuZCBhbmltYXRlIHRvIHRoZSBhcHByb3ByaWF0ZSBwb3NpdGlvbnNcbiMgICBkcmFnTGF5ZXIub25EcmFnRW5kIC0+XG4jICAgICBpZiBkcmFnTGF5ZXIueSA8IHByZWZzLnNjcmVlbkhlaWdodCAvIDJcbiMgICAgICAgaWYgZHJhZ0xheWVyLnkgPCAyMDBcbiMgICAgICAgICBkcmFnTGF5ZXIuYW5pbWF0ZShcIm1heFwiKVxuIyAgICAgICAgIG5hdkxheWVyLmFuaW1hdGVTdGF0ZShcImNvbGxhcHNlZFwiKVxuIyAgICAgICAgIHNjcm9sbExheWVyLnNjcm9sbFZlcnRpY2FsID0gdHJ1ZVxuIyAgICAgICAgICMgZG8gbm90IHBhc3MgZXZlbnQgdG8gcGFyZW50IChkcmFnTGF5ZXIpXG4jICAgICAgICAgc2Nyb2xsTGF5ZXIucHJvcGFnYXRlRXZlbnRzID0gZmFsc2VcbiMgICAgICAgZWxzZSBcbiMgICAgICAgICBkcmFnTGF5ZXIuYW5pbWF0ZShcImFjdGl2ZVwiKVxuIyAgICAgICAgIG5hdkxheWVyLmFuaW1hdGVTdGF0ZShcImFjdGl2ZVwiKVxuIyAgICAgZWxzZVxuIyAgICAgICAjIHJldmVyc2UgYW5pbWF0ZSB3aGVuIHRoZSBvcHBvc2l0ZSBpcyB0cnVlXG4jICAgICAgIGRyYWdMYXllci5hbmltYXRlKFwiZGVmYXVsdFwiKVxuIyAgICAgICBhY2NlbGVyYXRvcnNMYXllci5hbmltYXRlKFwiZGVmYXVsdFwiKVxuIyAgICAgICBzZWFyY2hCYXJMYXllci5hbmltYXRlKFwiZGVmYXVsdFwiKVxuIyAgICAgICBibGFja0JHLmFuaW1hdGUoXCJkZWZhdWx0XCIpXG4jICAgICAgIHNjcm9sbExheWVyLmFuaW1hdGUoXCJkZWZhdWx0XCIpXG4jICAgICAgIG5hdkxheWVyLmFuaW1hdGVTdGF0ZShcImRlZmF1bHRcIilcblxuIyAjIyMgc2Nyb2xsTGF5ZXIgTGlzdGVuZXJzXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIyMjXG4jICAgIyBzY3JvbGxMYXllci5jb250ZW50LmRyYWdnYWJsZS5vdmVyZHJhZyA9IGZhbHNlXG4jICAgc2Nyb2xsTGF5ZXIuY29udGVudC5vbkRyYWcgLT5cbiMgICAjIGlmIGRyYWdnaW5nIGJleW9uZCBjb25zdHJhaW50cyBBTkQgZGlyZWN0aW9uIGlzIGRvd24gdGhlblxuIyAgICMgICBwcmludCBzY3JvbGxMYXllci5jb250ZW50LmRyYWdnYWJsZS5vZmZzZXRcbiMgICAgIGlmIHNjcm9sbExheWVyLmNvbnRlbnQuZHJhZ2dhYmxlLmlzQmV5b25kQ29uc3RyYWludHMgYW5kXG4jICAgICBzY3JvbGxMYXllci5jb250ZW50LmRyYWdnYWJsZS5kaXJlY3Rpb24gPT0gXCJkb3duXCJcbiMgICAgICAgc2Nyb2xsTGF5ZXIuc2Nyb2xsVmVydGljYWwgPSBmYWxzZVxuIyAgICAgICBzY3JvbGxMYXllci5wcm9wYWdhdGVFdmVudHMgPSB0cnVlXG4jICAgICAgICMgdGFrZSB0aGUgZGVsdGEgaW4gdGhlIFkgZGlyZWN0aW9uIGFuZCBwYXNzIGl0IHRvIHRoZSBkcmFnIGxheWVyLlxuIyAgICMgICAgIGRyYWdMYXllci55ICs9IHNjcm9sbExheWVyLmNvbnRlbnQuZHJhZ2dhYmxlLm9mZnNldC55XG4gIG1vZHVsZS5leHBvcnRzID0gRmVlZExheWVyXG4iLCJjbGFzcyBmZWVkTGF5ZXIgZXh0ZW5kcyBMYXllclxuXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBGZWVkTGF5ZXJcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBSUFBO0FEQUE7QUFBQTs7O0FBQU07Ozs7Ozs7QUFHTjs7OztBQUhBOzs7O0FEQUE7QUFBQTs7O0FBQU07Ozs7Ozs7QUF1R047Ozs7QUF2R0E7Ozs7QURJQTs7QUFFQTtBQUNBO0FBRHFCOztBQUdyQjs7OztBRFRBO0FBQUE7OztBQUFNO0FBQ0o7Ozs7QUFBRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFMQTtBQUhBOzs7QUFVQTtBQUNJO0FBREo7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFMQTs7QUFPQTtBQXJCQTs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTs7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFSQTs7QUFVQTtBQXJCQTs7QUF1QkE7QUFDQTtBQUNBO0FBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBUEE7O0FBSkE7O0FBYUE7Ozs7QUEzRUE7OzsifQ==
