var icon = require("./helpers/icon"),
	d3 = require('d3');
var logo = new icon({
	"circleRadius": 8,
	"circleX": 8,
	"circleY": 8,
	"rectWidth": 3,
	"rectHeight": 7,
	"rectHeight2": 3
});
console.log(logo);
var svg = d3.select(".icon")
	.append("svg")
	.attr("width", '100%')
	.attr("height", '100%')
	.style("border", "0px solid red");
svg.append("circle")
	.attr("cx", logo.circleX)
	.attr("cy", logo.circleY)
	.attr("r", logo.circleRadius)
	.attr("fill", "red");
svg.append("rect")
	.attr("x", logo.getRectX())
	.attr("y", logo.setRectY(1))
	.attr("height", logo.rectHeight)
	.attr("width", logo.rectWidth)
	.attr("fill", "white")
svg.append("rect")
	.attr("x", logo.getRectX())
	.attr("y", logo.setRectY2(3.5))
	.attr("height", logo.rectHeight2)
	.attr("width", logo.rectWidth)
	.attr("fill", "white");