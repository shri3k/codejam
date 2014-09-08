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
  setRectY: function(arg){
    var offset = arg || 0;
    return (this.circleY - this.rectHeight) + offset;
  },
  setRectY2: function(arg){
    var offset = arg || 0;
    return this.rectHeight + offset;
  }
};
module.exports = Icon;