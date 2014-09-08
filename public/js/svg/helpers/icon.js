function Icon(iconAttr){
  this.circleRadius = iconAttr.circleRadius;
  this.circleX = iconAttr.circleX;
  this.circleY = iconAttr.circleY;
  this.rectWidth = iconAttr.rectWidth;
  this.rectHeight = iconAttr.rectHeight;
  this.rectHeight2 = iconAttr.rectHeight2;
}
Icon.prototype = {
  constructor: Icon,
  getRectX: function(){
    return this.circleX - this.rectWidth/2;
  },
  getRectY: function(){
    return this.circleY - this.rectHeight;
  },
  setRectY2: function(offset){
    return this.rectHeight + offset;
  }
};
module.exports = Icon;