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
var HelixFeed,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

HelixFeed = (function(superClass) {
  var helixCardGutter, prefs;

  extend(HelixFeed, superClass);

  prefs = {
    screenWidth: Framer.Device.screen.width,
    screenHeight: Framer.Device.screen.height,
    spacingUnit: 8
  };

  helixCardGutter = 32;

  function HelixFeed(options) {
    this.options = options != null ? options : {};
    HelixFeed.__super__.constructor.call(this, _.defaults(this.options, {
      width: prefs.screenWidth - helixCardGutter * 2,
      height: prefs.screenHeight - 144,
      y: 144,
      midX: prefs.screenWidth / 2,
      scrollHorizontal: false
    }));
    this.contentInset = {
      top: prefs.screenHeight - 294
    };
    this.states = {
      active: {
        y: 0
      },
      "default": {
        x: 32
      }
    };
    this.dragLayer = this.content;
    this.dragLayer.states = {
      active: {
        y: 96
      },
      "default": {
        y: prefs.screenHeight - 294
      }
    };
    this.onScroll((function(_this) {
      return function() {
        var yValue;
        yValue = _this.dragLayer.y;
        if (yValue >= prefs.screenHeight * 0.67) {
          _this.width = Utils.modulate(yValue, [900, 1040], [750, 686]);
          return _this.midX = prefs.screenWidth / 2;
        }
      };
    })(this));
    this.onScrollEnd((function(_this) {
      return function() {
        var yValue;
        yValue = _this.dragLayer.y;
        if (yValue < prefs.screenHeight / 2) {
          if (yValue < 56) {

          } else {
            return _this.dragLayer.animate("active");
          }
        } else {
          return _this.dragLayer.animate("default");
        }
      };
    })(this));
  }

  module.exports = HelixFeed;

  return HelixFeed;

})(ScrollComponent);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbmF2TGF5ZXIuY29mZmVlIiwiLi4vbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi9tb2R1bGVzL2hlbGl4RmVlZC5jb2ZmZWUiLCIuLi9tb2R1bGVzL2ZlZWRMYXllci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hdkxheWVyIGV4dGVuZHMgTGF5ZXJcbiAgcHJlZnMgPVxuICAgIHNjcmVlbldpZHRoOiBGcmFtZXIuRGV2aWNlLnNjcmVlbi53aWR0aCBcbiAgICBzY3JlZW5IZWlnaHQ6IEZyYW1lci5EZXZpY2Uuc2NyZWVuLmhlaWdodFxuICAgIHN0eWxlczogXG4gICAgICBmb250Q2xhbjogIFxuICAgICAgICBmb250RmFtaWx5OiBcIkNsYW4gUHJvXCJcbiAgICAgIGgxOiBcbiAgICAgICAgZm9udFNpemU6IFwiNDhweFwiXG4gICAgICBuYXZUZXh0OlxuICAgICAgICBmb250U2l6ZTogXCIzNnB4XCJcblxuICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgIEBsYWJlbExheWVyID0gbmV3IExheWVyXG5cbiAgICBzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICB3aWR0aDogcHJlZnMuc2NyZWVuV2lkdGhcbiAgICAgIG9wYWNpdHk6IDBcbiAgICAgIEBvcHRpb25zLmhlaWdodCA/PSAyNDBcbiAgICAgIEBvcHRpb25zLmxhYmVsU3RyaW5nID89IFwiRGVmYXVsdFwiXG5cbiAgICAjIEBvbkNsaWNrIC0+XG4gICAgIyAgIEBzZXRTdGF0ZSgpXG5cbiAgICBAc3RhdGVzID1cbiAgICAgIGNvbGxhcHNlZDpcbiAgICAgICAgaGVpZ2h0OiAxNDRcbiAgICAgIGFjdGl2ZTpcbiAgICAgICAgaGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9wYWNpdHk6IDBcblxuICAgIEBpbml0KClcblxuICBpbml0OiAoKSAtPlxuICAgIEBsYWJlbExheWVyLnByb3BzID1cbiAgICAgIG5hbWU6IFwibGFiZWxMYXllclwiXG4gICAgICBodG1sOiBAb3B0aW9ucy5sYWJlbFN0cmluZ1xuICAgICAgaGVpZ2h0OiA2MlxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICBwYXJlbnQ6IEBcbiAgICAgIHN0eWxlOlxuICAgICAgICBmb250RmFtaWx5OiBwcmVmcy5zdHlsZXMuZm9udENsYW4uZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IHByZWZzLnN0eWxlcy5oMS5mb250U2l6ZVxuICAgIEBsYWJlbExheWVyLnN0YXRlcyA9XG4gICAgICBjb2xsYXBzZWQ6XG4gICAgICAgIHg6IDgwLCB5OiA2NlxuICAgICAgICBzY2FsZTogMC43NVxuICAgICAgYWN0aXZlOlxuICAgICAgICB4OiA0NCwgeTogMTQ0XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB4OiA0NCwgeTogMzQ0XG4gICAgICAgIHNjYWxlOiAxXG5cbiAgICBAYW5pbWF0ZVN0YXRlKFwiZGVmYXVsdFwiKVxuICAgIFxuICBhbmltYXRlU3RhdGU6IChuYXZTdGF0ZSkgLT5cbiAgICBAYW5pbWF0ZShuYXZTdGF0ZSlcbiAgICBAbGFiZWxMYXllci5hbmltYXRlKG5hdlN0YXRlKVxuXG4gIG1vZHVsYXRlU3RhdGU6ICh5VmFsdWUpIC0+XG4gICAgaWYgeVZhbHVlID49IDk2XG4gICAgICBAbGFiZWxMYXllci55ID0gVXRpbHMubW9kdWxhdGUoeVZhbHVlLCBbMTA0MCwwXSwgWzM0NCwxNDRdKVxuICAgICAgQG9wYWNpdHkgPSBVdGlscy5tb2R1bGF0ZSh5VmFsdWUsIFs3MDAsMjAwXSwgWzAsMV0pXG4gICAgZWxzZSBpZiB5VmFsdWUgPj0gMFxuICAgICAgQGxhYmVsTGF5ZXIucHJvcHMgPSBcbiAgICAgICAgeDogVXRpbHMubW9kdWxhdGUoeVZhbHVlLCBbOTYsMF0sIFs0NCw4MF0pXG4gICAgICAgIHk6IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzk2LDBdLCBbMTQ0LDY2XSlcbiAgICAgICAgc2NhbGU6IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzk2LDBdLCBbMSwwLjc1XSlcbiAgICBlbHNlXG4gICAgICBAbGFiZWxMYXllci5wcm9wcyA9XG4gICAgICAgIHg6IDgwLCB5OiA2Niwgc2NhbGU6IDAuNzVcblxuICBtb2R1bGUuZXhwb3J0cyA9IE5hdkxheWVyXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiY2xhc3MgSGVsaXhGZWVkIGV4dGVuZHMgU2Nyb2xsQ29tcG9uZW50XG4gIHByZWZzID1cbiAgICBzY3JlZW5XaWR0aDogRnJhbWVyLkRldmljZS5zY3JlZW4ud2lkdGggXG4gICAgc2NyZWVuSGVpZ2h0OiBGcmFtZXIuRGV2aWNlLnNjcmVlbi5oZWlnaHRcbiAgICBzcGFjaW5nVW5pdDogOFxuXG4gIGhlbGl4Q2FyZEd1dHRlciA9IDMyXG5cbiAgY29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuICAgICAgd2lkdGg6IHByZWZzLnNjcmVlbldpZHRoIC0gaGVsaXhDYXJkR3V0dGVyICogMlxuICAgICAgaGVpZ2h0OiBwcmVmcy5zY3JlZW5IZWlnaHQgLSAxNDRcbiAgICAgIHk6IDE0NFxuICAgICAgbWlkWDogcHJlZnMuc2NyZWVuV2lkdGggLyAyXG4gICAgICBzY3JvbGxIb3Jpem9udGFsOiBmYWxzZVxuICAgIFxuICAgIEBjb250ZW50SW5zZXQgPVxuICAgICAgdG9wOiBwcmVmcy5zY3JlZW5IZWlnaHQgLSAyOTRcblxuICAgIEBzdGF0ZXMgPVxuICAgICAgYWN0aXZlOlxuICAgICAgICB5OiAwXG4gICAgICBkZWZhdWx0OiBcbiAgICAgICAgeDogMzJcblxuICAgIEBkcmFnTGF5ZXIgPSBAY29udGVudFxuICAgIEBkcmFnTGF5ZXIuc3RhdGVzID1cbiAgICAgIGFjdGl2ZTpcbiAgICAgICAgeTogOTZcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHk6IHByZWZzLnNjcmVlbkhlaWdodCAtIDI5NFxuXG4gICAgQG9uU2Nyb2xsID0+XG4gICAgICB5VmFsdWUgPSBAZHJhZ0xheWVyLnlcblxuICAgICAgIyBBbmltYXRlIGNvbnRlbnQgdG8gYmUgZnVsbCB3aWR0aCBvZiBEZXZpY2VcbiAgICAgIGlmIHlWYWx1ZSA+PSBwcmVmcy5zY3JlZW5IZWlnaHQgKiAwLjY3XG4gICAgICAgIEB3aWR0aCA9IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzkwMCwxMDQwXSwgWzc1MCw2ODZdKVxuICAgICAgICBAbWlkWCA9IHByZWZzLnNjcmVlbldpZHRoIC8gMlxuXG4gICAgQG9uU2Nyb2xsRW5kID0+XG4gICAgICB5VmFsdWUgPSBAZHJhZ0xheWVyLnlcblxuICAgICAgaWYgeVZhbHVlIDwgcHJlZnMuc2NyZWVuSGVpZ2h0IC8gMlxuICAgICAgICBpZiB5VmFsdWUgPCA1NlxuICAgICAgICAjIGJ1ZzogaWYgZHJhZ0xheWVyIGFuaW1hdGVzKFwibWF4XCIpIHRoZW4gY2Fubm90IHNjcm9sbC4gd2l0aG91dCBpdCB3b24ndCBib3VuY2Ugd2hlbiB3aXRoaW4gdGhlIHRocmVzaG9sZFxuICAgICAgICBlbHNlIFxuICAgICAgICAgIEBkcmFnTGF5ZXIuYW5pbWF0ZShcImFjdGl2ZVwiKVxuICAgICAgZWxzZVxuICAgICAgICBAZHJhZ0xheWVyLmFuaW1hdGUoXCJkZWZhdWx0XCIpXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBIZWxpeEZlZWRcbiIsImNsYXNzIGZlZWRMYXllciBleHRlbmRzIExheWVyXG5cblxuICBtb2R1bGUuZXhwb3J0cyA9IEZlZWRMYXllclxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFJQUE7QURBQTtBQUFBOzs7QUFBTTs7Ozs7OztBQUdOOzs7O0FBSEE7Ozs7QURBQTtBQUFBOzs7QUFBTTtBQUNKOzs7O0FBQUY7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTs7QUFLQTtBQUFBO0FBQ007QUFBTjtBQUdBO0FBQ0E7QUFDQTs7QUFOQTtBQUFBO0FBUUE7QUFBQTtBQUNNO0FBQU47QUFFQTtBQUNBO0FBQVE7QUFBUjtBQUdBO0FBSkE7QUFBQTtBQU1BOztBQVRBO0FBQUE7QUFoQ0E7O0FBMkNBOzs7O0FBbkRBOzs7O0FESUE7O0FBRUE7QUFDQTtBQURxQjs7QUFHckI7Ozs7QURUQTtBQUFBOzs7QUFBTTtBQUNKOzs7O0FBQUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBTEE7QUFIQTs7O0FBVUE7QUFDSTtBQURKO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBTEE7O0FBT0E7QUFyQkE7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7O0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBUkE7O0FBVUE7QUFyQkE7O0FBdUJBO0FBQ0E7QUFDQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQVBBOztBQUpBOztBQWFBOzs7O0FBM0VBOzs7In0=
