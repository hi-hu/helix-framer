require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"helixFeed":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbmF2TGF5ZXIuY29mZmVlIiwiLi4vbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi9tb2R1bGVzL2hlbGl4RmVlZC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hdkxheWVyIGV4dGVuZHMgTGF5ZXJcbiAgcHJlZnMgPVxuICAgIHNjcmVlbldpZHRoOiBGcmFtZXIuRGV2aWNlLnNjcmVlbi53aWR0aCBcbiAgICBzY3JlZW5IZWlnaHQ6IEZyYW1lci5EZXZpY2Uuc2NyZWVuLmhlaWdodFxuICAgIHN0eWxlczogXG4gICAgICBmb250Q2xhbjogIFxuICAgICAgICBmb250RmFtaWx5OiBcIkNsYW4gUHJvXCJcbiAgICAgIGgxOiBcbiAgICAgICAgZm9udFNpemU6IFwiNDhweFwiXG4gICAgICBuYXZUZXh0OlxuICAgICAgICBmb250U2l6ZTogXCIzNnB4XCJcblxuICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgIEBsYWJlbExheWVyID0gbmV3IExheWVyXG5cbiAgICBzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICB3aWR0aDogcHJlZnMuc2NyZWVuV2lkdGhcbiAgICAgIG9wYWNpdHk6IDBcbiAgICAgIEBvcHRpb25zLmhlaWdodCA/PSAyNDBcbiAgICAgIEBvcHRpb25zLmxhYmVsU3RyaW5nID89IFwiRGVmYXVsdFwiXG5cbiAgICBAc3RhdGVzID1cbiAgICAgIGNvbGxhcHNlZDpcbiAgICAgICAgaGVpZ2h0OiAxNDRcbiAgICAgIGFjdGl2ZTpcbiAgICAgICAgaGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9wYWNpdHk6IDBcblxuICAgIEBpbml0KClcblxuICBpbml0OiAoKSAtPlxuICAgIEBsYWJlbExheWVyLnByb3BzID1cbiAgICAgIG5hbWU6IFwibGFiZWxMYXllclwiXG4gICAgICBodG1sOiBAb3B0aW9ucy5sYWJlbFN0cmluZ1xuICAgICAgaGVpZ2h0OiA2MlxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICBwYXJlbnQ6IEBcbiAgICAgIHN0eWxlOlxuICAgICAgICBmb250RmFtaWx5OiBwcmVmcy5zdHlsZXMuZm9udENsYW4uZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IHByZWZzLnN0eWxlcy5oMS5mb250U2l6ZVxuICAgIEBsYWJlbExheWVyLnN0YXRlcyA9XG4gICAgICBjb2xsYXBzZWQ6XG4gICAgICAgIHg6IDgwLCB5OiA2NlxuICAgICAgICBzY2FsZTogMC43NVxuICAgICAgYWN0aXZlOlxuICAgICAgICB4OiA0NCwgeTogMTQ0XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB4OiA0NCwgeTogMzQ0XG4gICAgICAgIHNjYWxlOiAxXG5cbiAgICBAYW5pbWF0ZVN0YXRlKFwiZGVmYXVsdFwiKVxuICAgIFxuICAjIGFuaW1hdGVTdGF0ZSBtdXN0IGJlIHBhc3NlZCBhIHN0cmluZyB2YWx1ZSB0aGF0IG1hdGNoZXMgb25lIG9mIHRoZSBjbGFzcycgc3RhdGVzXG4gIGFuaW1hdGVTdGF0ZTogKG5hdlN0YXRlKSAtPlxuICAgIEBhbmltYXRlKG5hdlN0YXRlKVxuICAgIEBsYWJlbExheWVyLmFuaW1hdGUobmF2U3RhdGUpXG5cbiAgbW9kdWxhdGVTdGF0ZTogKHlWYWx1ZSkgLT5cbiAgICBpZiB5VmFsdWUgPj0gOTZcbiAgICAgIEBsYWJlbExheWVyLnkgPSBVdGlscy5tb2R1bGF0ZSh5VmFsdWUsIFsxMDQwLDBdLCBbMzQ0LDE0NF0pXG4gICAgICBAb3BhY2l0eSA9IFV0aWxzLm1vZHVsYXRlKHlWYWx1ZSwgWzcwMCwyMDBdLCBbMCwxXSlcbiAgICBlbHNlIGlmIHlWYWx1ZSA+PSAwXG4gICAgICBAbGFiZWxMYXllci5wcm9wcyA9IFxuICAgICAgICB4OiBVdGlscy5tb2R1bGF0ZSh5VmFsdWUsIFs5NiwwXSwgWzQ0LDgwXSlcbiAgICAgICAgeTogVXRpbHMubW9kdWxhdGUoeVZhbHVlLCBbOTYsMF0sIFsxNDQsNjZdKVxuICAgICAgICBzY2FsZTogVXRpbHMubW9kdWxhdGUoeVZhbHVlLCBbOTYsMF0sIFsxLDAuNzVdKVxuICAgIGVsc2VcbiAgICAgIEBsYWJlbExheWVyLnByb3BzID1cbiAgICAgICAgeDogODAsIHk6IDY2LCBzY2FsZTogMC43NVxuXG4gIG1vZHVsZS5leHBvcnRzID0gTmF2TGF5ZXJcbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJjbGFzcyBIZWxpeEZlZWQgZXh0ZW5kcyBTY3JvbGxDb21wb25lbnRcbiAgcHJlZnMgPVxuICAgIHNjcmVlbldpZHRoOiBGcmFtZXIuRGV2aWNlLnNjcmVlbi53aWR0aCBcbiAgICBzY3JlZW5IZWlnaHQ6IEZyYW1lci5EZXZpY2Uuc2NyZWVuLmhlaWdodFxuICAgIHNwYWNpbmdVbml0OiA4XG5cbiAgaGVsaXhDYXJkR3V0dGVyID0gMzJcblxuICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgQG9wdGlvbnMsXG4gICAgICB3aWR0aDogcHJlZnMuc2NyZWVuV2lkdGggLSBoZWxpeENhcmRHdXR0ZXIgKiAyXG4gICAgICBoZWlnaHQ6IHByZWZzLnNjcmVlbkhlaWdodCAtIDE0NFxuICAgICAgeTogMTQ0XG4gICAgICBtaWRYOiBwcmVmcy5zY3JlZW5XaWR0aCAvIDJcbiAgICAgIHNjcm9sbEhvcml6b250YWw6IGZhbHNlXG4gICAgXG4gICAgQGNvbnRlbnRJbnNldCA9XG4gICAgICB0b3A6IHByZWZzLnNjcmVlbkhlaWdodCAtIDI5NFxuXG4gICAgQHN0YXRlcyA9XG4gICAgICBhY3RpdmU6XG4gICAgICAgIHk6IDBcbiAgICAgIGRlZmF1bHQ6IFxuICAgICAgICB4OiAzMlxuXG4gICAgQGRyYWdMYXllciA9IEBjb250ZW50XG4gICAgQGRyYWdMYXllci5zdGF0ZXMgPVxuICAgICAgYWN0aXZlOlxuICAgICAgICB5OiA5NlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgeTogcHJlZnMuc2NyZWVuSGVpZ2h0IC0gMjk0XG5cbiAgICBAb25TY3JvbGwgPT5cbiAgICAgIHlWYWx1ZSA9IEBkcmFnTGF5ZXIueVxuXG4gICAgICAjIEFuaW1hdGUgY29udGVudCB0byBiZSBmdWxsIHdpZHRoIG9mIERldmljZVxuICAgICAgaWYgeVZhbHVlID49IHByZWZzLnNjcmVlbkhlaWdodCAqIDAuNjdcbiAgICAgICAgQHdpZHRoID0gVXRpbHMubW9kdWxhdGUoeVZhbHVlLCBbOTAwLDEwNDBdLCBbNzUwLDY4Nl0pXG4gICAgICAgIEBtaWRYID0gcHJlZnMuc2NyZWVuV2lkdGggLyAyXG5cbiAgICBAb25TY3JvbGxFbmQgPT5cbiAgICAgIHlWYWx1ZSA9IEBkcmFnTGF5ZXIueVxuXG4gICAgICBpZiB5VmFsdWUgPCBwcmVmcy5zY3JlZW5IZWlnaHQgLyAyXG4gICAgICAgIGlmIHlWYWx1ZSA8IDU2XG4gICAgICAgICMgYnVnOiBpZiBkcmFnTGF5ZXIgYW5pbWF0ZXMoXCJtYXhcIikgdGhlbiBjYW5ub3Qgc2Nyb2xsLiB3aXRob3V0IGl0IHdvbid0IGJvdW5jZSB3aGVuIHdpdGhpbiB0aGUgdGhyZXNob2xkXG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgQGRyYWdMYXllci5hbmltYXRlKFwiYWN0aXZlXCIpXG4gICAgICBlbHNlXG4gICAgICAgIEBkcmFnTGF5ZXIuYW5pbWF0ZShcImRlZmF1bHRcIilcblxuICBtb2R1bGUuZXhwb3J0cyA9IEhlbGl4RmVlZFxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFHQUE7QURBQTtBQUFBOzs7QUFBTTtBQUNKOzs7O0FBQUY7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTs7QUFLQTtBQUFBO0FBQ007QUFBTjtBQUdBO0FBQ0E7QUFDQTs7QUFOQTtBQUFBO0FBUUE7QUFBQTtBQUNNO0FBQU47QUFFQTtBQUNBO0FBQVE7QUFBUjtBQUdBO0FBSkE7QUFBQTtBQU1BOztBQVRBO0FBQUE7QUFoQ0E7O0FBMkNBOzs7O0FBbkRBOzs7O0FESUE7O0FBRUE7QUFDQTtBQURxQjs7QUFHckI7Ozs7QURUQTtBQUFBOzs7QUFBTTtBQUNKOzs7O0FBQUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBTEE7QUFIQTs7O0FBVUE7QUFDSTtBQURKO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBTEE7O0FBT0E7QUFsQkE7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7O0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBUkE7O0FBVUE7QUFyQkE7O0FBd0JBO0FBQ0E7QUFDQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQVBBOztBQUpBOztBQWFBOzs7O0FBekVBOzs7In0=
