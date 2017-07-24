// Generated by CoffeeScript 1.11.1
(function() {
  var Layer, Node, merge,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  merge = require('lodash/merge');

  Node = require('../node');

  module.exports = Layer = (function(superClass) {
    extend(Layer, superClass);

    function Layer() {
      return Layer.__super__.constructor.apply(this, arguments);
    }

    Layer.prototype.type = 'layer';

    Layer.prototype.isEmpty = function() {
      return this.width === 0 || this.height === 0;
    };

    Layer.prototype["export"] = function() {
      var ref;
      return merge(Layer.__super__["export"].call(this), {
        type: 'layer',
        mask: this.layer.mask["export"](),
        text: (ref = this.get('typeTool')) != null ? ref["export"]() : void 0,
        image: {}
      });
    };

    return Layer;

  })(Node);

}).call(this);