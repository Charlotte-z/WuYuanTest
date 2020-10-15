export const getStyle = function(ele) {
  var style = null;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(ele, null);
  } else {
    style = ele.currentStyle;
  }
  return style;
};
