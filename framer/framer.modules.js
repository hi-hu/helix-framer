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
    if (yValue >= 240) {
      this.labelLayer.y = Utils.modulate(yValue, [1184, 240], [344, 144]);
      return this.opacity = Utils.modulate(yValue, [prefs.screenHeight / 2, 904], [1, 0]);
    } else {
      this.labelLayer.x = Utils.modulate(yValue, [240, 144], [44, 80]);
      this.labelLayer.y = Utils.modulate(yValue, [240, 144], [144, 66]);
      return this.labelLayer.scale = Utils.modulate(yValue, [240, 144], [1, 0.75]);
    }
  };

  module.exports = NavLayer;

  return NavLayer;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbmF2TGF5ZXIuY29mZmVlIiwiLi4vbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi9tb2R1bGVzL2ZlZWRMYXllci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hdkxheWVyIGV4dGVuZHMgTGF5ZXJcbiAgcHJlZnMgPVxuICAgIHNjcmVlbldpZHRoOiBGcmFtZXIuRGV2aWNlLnNjcmVlbi53aWR0aCBcbiAgICBzY3JlZW5IZWlnaHQ6IEZyYW1lci5EZXZpY2Uuc2NyZWVuLmhlaWdodFxuICAgIHN0eWxlczogXG4gICAgICBmb250Q2xhbjogIFxuICAgICAgICBmb250RmFtaWx5OiBcIkNsYW4gUHJvXCJcbiAgICAgIGgxOiBcbiAgICAgICAgZm9udFNpemU6IFwiNDhweFwiXG4gICAgICBuYXZUZXh0OlxuICAgICAgICBmb250U2l6ZTogXCIzNnB4XCJcblxuICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgIEBsYWJlbExheWVyID0gbmV3IExheWVyXG5cbiAgICBzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICB3aWR0aDogcHJlZnMuc2NyZWVuV2lkdGhcbiAgICAgIG9wYWNpdHk6IDBcbiAgICAgIEBvcHRpb25zLmhlaWdodCA/PSAyNDBcbiAgICAgIEBvcHRpb25zLmxhYmVsU3RyaW5nID89IFwiRGVmYXVsdFwiXG5cbiAgICAjIEBvbkNsaWNrIC0+XG4gICAgIyAgIEBzZXRTdGF0ZSgpXG5cbiAgICBAc3RhdGVzID1cbiAgICAgIGNvbGxhcHNlZDpcbiAgICAgICAgaGVpZ2h0OiAxNDRcbiAgICAgIGFjdGl2ZTpcbiAgICAgICAgaGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9wYWNpdHk6IDBcblxuICAgIEBpbml0KClcblxuICBpbml0OiAoKSAtPlxuICAgIEBsYWJlbExheWVyLnByb3BzID1cbiAgICAgIG5hbWU6IFwibGFiZWxMYXllclwiXG4gICAgICBodG1sOiBAb3B0aW9ucy5sYWJlbFN0cmluZ1xuICAgICAgaGVpZ2h0OiA2MlxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICBwYXJlbnQ6IEBcbiAgICAgIHN0eWxlOlxuICAgICAgICBmb250RmFtaWx5OiBwcmVmcy5zdHlsZXMuZm9udENsYW4uZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IHByZWZzLnN0eWxlcy5oMS5mb250U2l6ZVxuICAgIEBsYWJlbExheWVyLnN0YXRlcyA9XG4gICAgICBjb2xsYXBzZWQ6XG4gICAgICAgIHg6IDgwLCB5OiA2NlxuICAgICAgICBzY2FsZTogMC43NVxuICAgICAgYWN0aXZlOlxuICAgICAgICB4OiA0NCwgeTogMTQ0XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB4OiA0NCwgeTogMzQ0XG4gICAgICAgIHNjYWxlOiAxXG5cbiAgICBAYW5pbWF0ZVN0YXRlKFwiZGVmYXVsdFwiKVxuICAgIFxuICBhbmltYXRlU3RhdGU6IChuYXZTdGF0ZSkgLT5cbiAgICBAYW5pbWF0ZShuYXZTdGF0ZSlcbiAgICBAbGFiZWxMYXllci5hbmltYXRlKG5hdlN0YXRlKVxuXG4gIG1vZHVsYXRlU3RhdGU6ICh5VmFsdWUpIC0+XG4gICAgaWYgeVZhbHVlID49IDI0MFxuICAgICAgQGxhYmVsTGF5ZXIueSA9IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzExODQsMjQwXSwgWzM0NCwxNDRdKVxuICAgICAgQG9wYWNpdHkgPSBVdGlscy5tb2R1bGF0ZSh5VmFsdWUsIFtwcmVmcy5zY3JlZW5IZWlnaHQgLyAyLDkwNF0sIFsxLDBdKVxuICAgIGVsc2VcbiAgICAgIEBsYWJlbExheWVyLnggPSBVdGlscy5tb2R1bGF0ZSh5VmFsdWUsIFsyNDAsMTQ0XSwgWzQ0LDgwXSlcbiAgICAgIEBsYWJlbExheWVyLnkgPSBVdGlscy5tb2R1bGF0ZSh5VmFsdWUsIFsyNDAsMTQ0XSwgWzE0NCw2Nl0pXG4gICAgICBAbGFiZWxMYXllci5zY2FsZSA9IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzI0MCwxNDRdLCBbMSwwLjc1XSlcblxuICBtb2R1bGUuZXhwb3J0cyA9IE5hdkxheWVyXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiY2xhc3MgZmVlZExheWVyIGV4dGVuZHMgTGF5ZXJcblxuXG4gIG1vZHVsZS5leHBvcnRzID0gRmVlZExheWVyXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUdBQTtBREFBO0FBQUE7OztBQUFNOzs7Ozs7O0FBR047Ozs7QUFIQTs7OztBRElBOztBQUVBO0FBQ0E7QUFEcUI7O0FBR3JCOzs7O0FEVEE7QUFBQTs7O0FBQU07QUFDSjs7OztBQUFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUxBO0FBSEE7OztBQVVBO0FBQ0k7QUFESjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUxBOztBQU9BO0FBckJBOztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBOztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQVJBOztBQVVBO0FBckJBOztBQXVCQTtBQUNBO0FBQ0E7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOztBQVBBOztBQVNBOzs7O0FBdkVBOzs7In0=
