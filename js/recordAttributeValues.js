/**
 * @description 根据传入的标签属性，获取相对应的值
 * @param {string} htmlTag 
 * @param {string} attributes 
 * @returns Array<string></string>
 */
function recordAttributeValues(htmlTag, attributes) {
  const imgTags = document.getElementsByTagName(htmlTag);
  const fileValues = [];
  for (let i = 0; i < imgTags.length; i++) {
    const fileValue = imgTags[i].getAttribute(attributes);
    // May get
    if (fileValue) {
        fileValues.push(fileValue);
    }
    
  }
  return fileValues;
};