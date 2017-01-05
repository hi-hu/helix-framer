class HelixFeed extends ScrollComponent
  prefs =
    screenWidth: Framer.Device.screen.width 
    screenHeight: Framer.Device.screen.height
    spacingUnit: 8

  helixCardGutter = 32

  constructor: (@options={}) ->
    super _.defaults @options,
      width: prefs.screenWidth - helixCardGutter * 2
      height: prefs.screenHeight - 144
      y: 144
      midX: prefs.screenWidth / 2
      scrollHorizontal: false
    
    @contentInset =
      top: prefs.screenHeight - 294

    @states =
      active:
        y: 0
      default: 
        x: 32

    @dragLayer = @content
    @dragLayer.states =
      active:
        y: 96
      default:
        y: prefs.screenHeight - 294

    @onScroll =>
      yValue = @dragLayer.y

      # Animate content to be full width of Device
      if yValue >= prefs.screenHeight * 0.67
        @width = Utils.modulate(yValue, [900,1040], [750,686])
        @midX = prefs.screenWidth / 2

    @onScrollEnd =>
      yValue = @dragLayer.y

      if yValue < prefs.screenHeight / 2
        if yValue < 56
        # bug: if dragLayer animates("max") then cannot scroll. without it won't bounce when within the threshold
        else 
          @dragLayer.animate("active")
      else
        @dragLayer.animate("default")

  module.exports = HelixFeed
