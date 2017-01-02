class NavLayer extends Layer
  prefs =
    screenWidth: Framer.Device.screen.width 
    screenHeight: Framer.Device.screen.height
    styles: 
      fontClan:  
        fontFamily: "Clan Pro"
      h1: 
        fontSize: "48px"
      navText:
        fontSize: "36px"

  constructor: (@options={}) ->
    @labelLayer = new Layer

    super _.defaults @options,
      backgroundColor: null
      width: prefs.screenWidth
      opacity: 0
      @options.height ?= 240
      @options.labelString ?= "Default"

    # @onClick ->
    #   @setState()

    @states =
      collapsed:
        height: 144
      active:
        height: @options.height
      default:
        opacity: 0

    @init()

  init: () ->
    @labelLayer.props =
      name: "labelLayer"
      html: @options.labelString
      height: 62
      backgroundColor: null
      parent: @
      style:
        fontFamily: prefs.styles.fontClan.fontFamily,
        fontSize: prefs.styles.h1.fontSize
    @labelLayer.states =
      collapsed:
        x: 80, y: 66
        scale: 0.75
      active:
        x: 44, y: 144
        scale: 1
      default:
        x: 44, y: 344
        scale: 1

    @animateState("default")
    
  animateState: (navState) ->
    @animate(navState)
    @labelLayer.animate(navState)

  modulateState: (yValue) ->
    if yValue >= 240
      @labelLayer.y = Utils.modulate(yValue, [1184,240], [344,144])
      @opacity = Utils.modulate(yValue, [prefs.screenHeight / 2,904], [1,0])
    else
      @labelLayer.x = Utils.modulate(yValue, [240,144], [44,80])
      @labelLayer.y = Utils.modulate(yValue, [240,144], [144,66])
      @labelLayer.scale = Utils.modulate(yValue, [240,144], [1,0.75])

  module.exports = NavLayer
