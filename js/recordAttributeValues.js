/**
 * @description 根据传入的标签属性，获取相对应的值
 * @param {string} HTMLTag 
 * @param {string} attr 
 * @returns {string[]} attrValues
 */
function recordAttributeValues(HTMLTag, attr) {
  const tag = document.getElementsByTagName(HTMLTag);
  const attrValues = [];
  for (let i = 0; i < tag.length; i++) {
    const attrValue = tag[i].getAttribute(attr);
    // Filter null value
    if (attrValue) {
      attrValues.push(attrValue);
    }
    
  }
  return attrValues;
};