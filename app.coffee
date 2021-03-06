# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Michael Hu"
	twitter: ""
	description: ""

# Import file "helix-framer" (sizes and positions are scaled 1:2)
sketch = Framer.Importer.load("imported/helix-framer@2x")

prefs =
	screenWidth: Framer.Device.screen.width 
	screenHeight: Framer.Device.screen.height
	spacingUnit: 8
	styles: 
		fontClan:  
			fontFamily: "Clan Pro"
		h1: 
			fontSize: "48px"
		navText:
			fontSize: "36px"

helixCardGutter = prefs.spacingUnit * 4

NavLayer = require "navLayer"
HelixFeed = require "helixFeed"

# Layers
acceleratorsLayer = sketch.accelerators
searchBarLayer = sketch.searchBar
blackBG = new Layer
	backgroundColor: "#000"
	width: prefs.screenWidth
	height: prefs.screenHeight
	opacity: 0
navLayer = new NavLayer
	labelString: "Messages"
helixFeed = new HelixFeed

# Layer States
acceleratorsLayer.states = 
	default: scale: 1
searchBarLayer.states = 
	default: scale: 1
blackBG.states =
	default: opacity: 0

# Temp class for testing
class HelixCard extends Layer
	constructor: (options) ->
		super _.defaults options,
			borderRadius: 8
			backgroundColor: "#FFF"
		@style = 
			"width": "100%"

###	Listeners
-----------------------------------------------------------------------###
helixFeed.onScroll ->
	yValue = helixFeed.content.y
	modulatedYValue = Utils.modulate(yValue, [0,1040], [0.65,1])
	navLayer.modulateState(yValue)
	acceleratorsLayer.scale = modulatedYValue
	searchBarLayer.scale = modulatedYValue
	blackBG.opacity = Utils.modulate(yValue, [prefs.screenHeight / 2 + 200,1040], [1,0])

helixFeed.onScrollEnd ->
	yValue = helixFeed.content.y
	if yValue < prefs.screenHeight / 2
		if yValue < 56
		# bug: if dragLayer animates("max") then cannot scroll. without it won't bounce when within the threshold
			navLayer.animateState("collapsed")
		else 
			navLayer.animateState("active")
	else
		acceleratorsLayer.animate("default")
		searchBarLayer.animate("default")
		blackBG.animate("default")
		navLayer.animateState("default")

###	Playground
-----------------------------------------------------------------------###
bgColors = ["white","pink","orange"]

for n in [0...3]
	@layer = new HelixCard
	@layer.props =
		height: 600
		y: 620 * n
		backgroundColor: bgColors[n]
		parent: helixFeed.content

###
Create functions to handle the animations/transitions
###
