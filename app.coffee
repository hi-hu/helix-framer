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

# Layer States
acceleratorsLayer.states = 
	default: scale: 1
searchBarLayer.states = 
	default: scale: 1
blackBG.states =
	default: opacity: 0

# need to create a card within the context of feed, so will ask for a feed object in the constructor. Without it, will just display in the middle and no ability to scroll
class HelixCard extends Layer
	constructor: (options) ->
		super _.defaults options,
			borderRadius: 8
			backgroundColor: "#FFF"
		@style = 
			"width": "100%"
	# can we define the 100% width stuff in here
	# a helix card is generic and should be unopinionated about width as there are also cards that do not have 100% width

###	Scroll Layer (nested inside dragLayer)
-----------------------------------------------------------------------###
scrollLayer = new ScrollComponent
	width: prefs.screenWidth - helixCardGutter * 2
	height: prefs.screenHeight - 144
	y: 144
	midX: prefs.screenWidth / 2
	scrollHorizontal: false
scrollLayer.contentInset =
	# default position
	top: prefs.screenHeight - 294
scrollLayer.states =
	active:
		y: 0
	default: 
		x: 32

# set content layer to be referenced by dragLayer 
dragLayer = scrollLayer.content
dragLayer.states =
	active:
		y: 96
	default:
		y: prefs.screenHeight - 294

###	Listeners
-----------------------------------------------------------------------###
scrollLayer.onScroll ->
	yValue = dragLayer.y
	modulatedYValue = Utils.modulate(yValue, [0,1040], [0.65,1])
	navLayer.modulateState(yValue)
	acceleratorsLayer.scale = modulatedYValue
	searchBarLayer.scale = modulatedYValue
	blackBG.opacity = Utils.modulate(yValue, [prefs.screenHeight / 2 + 200,1040], [1,0])
	# Animate content to be full width of Device
	if yValue >= prefs.screenHeight * 0.67
		scrollLayer.width = Utils.modulate(yValue, [900,1040], [750,686])
		scrollLayer.midX = prefs.screenWidth / 2

# onDragEnd animate to the appropriate positions
scrollLayer.onScrollEnd ->
	yValue = dragLayer.y
	if yValue < prefs.screenHeight / 2
		if yValue < 56
		# bug: if dragLayer animates("max") then cannot scroll. without it won't bounce when within the threshold
			navLayer.animateState("collapsed")
		else 
			dragLayer.animate("active")
			navLayer.animateState("active")
	else
		dragLayer.animate("default")
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
		parent: scrollLayer.content

###
Create functions to handle the animations/transitions
###
