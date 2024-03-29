/**
 * @description 获取浏览器 HTML 节点相对应属性值
 * @param {string} HTMLTag 打算获取 HTML 上的标签
 * @param {string} attr HTML 标签上的属性名
 * @returns {string[]} attrValues 将标签上属性名的值以数组返回
 */
function recordAttributeValues({ HTMLTag, attr }) {
  const tag = document.getElementsByTagName(HTMLTag);
  const attrValues = [];
  for (let i = 0; i < tag.length; i++) {
    const attrValue = tag[i].getAttribute(attr);
    // 过滤空值
    if (attrValue) {
      attrValues.push(attrValue);
    }
    
  }
  return attrValues;
};

// e.g.
const option = { ele: 'a', HTMLTag: 'img', attr: 'file', user_name: 'aaa' };
const res = recordAttributeValues(option);
console.log(res); // 返回结果集只针对 HTMLTag 和 attr 两个属性传入处理，其他不影响