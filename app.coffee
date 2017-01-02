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
	# can we define the 100% width stuff in here
	# a helix card is generic and should be unopinionated about width as there are also cards that do not have 100% width

###	Draggable Layer 
-----------------------------------------------------------------------###
dragLayer = new Layer
	width: prefs.screenWidth
	height: prefs.screenHeight
	y: prefs.screenHeight - 150
	backgroundColor: ""

dragLayer.draggable.enabled = true
dragLayer.draggable.horizontal = false
dragLayer.draggable.constraints =
	x: 0, y: 144 
	width: prefs.screenWidth
	height: prefs.screenHeight * 2 - 150
dragLayer.draggable.overdrag = false

dragLayer.states =
	max:
		y: 144
	active:
		y: 240
	default:
		y: prefs.screenHeight - 150

###	Scroll Layer (nested inside dragLayer)
-----------------------------------------------------------------------###
scrollLayer = new ScrollComponent
	width: prefs.screenWidth - helixCardGutter * 2
	height: prefs.screenHeight - 144
	midX: prefs.screenWidth / 2
	scrollHorizontal: false
	scrollVertical: false
	parent: dragLayer
scrollLayer.contentInset =
	bottom: 100 
scrollLayer.states =
	active:
		y: 0
	default: 
		x: 32
		width: 686

###	dragLayer Listeners
-----------------------------------------------------------------------###
dragLayer.onDrag ->
	yValue = dragLayer.y
	# when scrolling up scale down search and accelerator and bring in the background
	modulatedYValue = Utils.modulate(yValue, [0,1184], [0.65,1])
	navLayer.modulateState(yValue)
	acceleratorsLayer.scale = modulatedYValue
	searchBarLayer.scale = modulatedYValue
	blackBG.opacity = Utils.modulate(yValue, [prefs.screenHeight / 2 + 200,1184], [1,0])
	# if the yValue is between the default and greater than 67% of the height, scale the cards
	if yValue >= prefs.screenHeight * 0.67
		scrollLayer.width = Utils.modulate(yValue, [900,1184], [750,686])
		scrollLayer.midX = prefs.screenWidth / 2

# onDragEnd animate to the appropriate positions
dragLayer.onDragEnd ->
	if dragLayer.y < prefs.screenHeight / 2
		if dragLayer.y < 200
			dragLayer.animate("max")
			navLayer.animateState("collapsed")
			scrollLayer.scrollVertical = true
			# do not pass event to parent (dragLayer)
			scrollLayer.propagateEvents = false
		else 
			dragLayer.animate("active")
			navLayer.animateState("active")
	else
		# animate in the reverse when the opposite is true
		dragLayer.animate("default")
		acceleratorsLayer.animate("default")
		searchBarLayer.animate("default")
		blackBG.animate("default")
		scrollLayer.animate("default")
		navLayer.animateState("default")

###	scrollLayer Listeners
-----------------------------------------------------------------------###
# scrollLayer.content.draggable.overdrag = false

scrollLayer.content.onDrag ->
# if dragging beyond constraints AND direction is down then
# 	print scrollLayer.content.draggable.offset
	if scrollLayer.content.draggable.isBeyondConstraints and
	scrollLayer.content.draggable.direction == "down"
		scrollLayer.scrollVertical = false
		scrollLayer.propagateEvents = true
		# take the delta in the Y direction and pass it to the drag layer.
# 		dragLayer.y += scrollLayer.content.draggable.offset.y

###	Playground
-----------------------------------------------------------------------###

feedCard = new HelixCard
	height: 1700
	parent: scrollLayer.content

# when inspecting the DOM the width is shorter than 100%
feedCard.style =
		"width": "100%"



###
Create functions to handle the animations/transitions
------------------------------------------------------
Remove dragLayer and only use scrollLayer's content (draggable). 
	- This would mean that the scrollLayer is set to the device view
	- the initial position of the contents would be offset like it currently is
###