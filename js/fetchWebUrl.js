/**
 * 
 * @param {string} matchAttribute 匹配对象的属性
 * @param {string} matchContent 匹配对象的内容
 * @param {string} targetAttribute 目标属性
 */
async function test(matchAttribute = 'initiatorType', matchContent, targetAttribute) {
  const resList = [];
  const errList = [];

  const entries = window.performance.getEntries();
  
  for (const item of entries) {
    if (item[matchAttribute] === matchContent) {
      try {
        const response = await fetch(item[targetAttribute]);
        const res = await response.json();
        resList.push(res);
        console.log(res);
      } catch (error) {
        errList.push({ item, url: item[targetAttribute] });
        console.error('请求错误:', error);
      }
    }
  }

  console.log('成功结果:', resList);
  console.log('失败结果:', errList);
  customBookObj(resList)
}

/**
 * 
 * @param {Array} arrayList book数组集合
 */
function customBookObj(arrayList) {
  const book_obj = {}
  // 取出第一项
  const baseInfo = arrayList.shift()
  const { sections, introduction, booklet } = baseInfo.data
  const { title, summary, cover_img } = booklet.base_info
  Object.assign(book_obj, {
      book_name: title,
      book_desc: summary,
      book_bg: cover_img,
      book_lab: sections,
      book_content: introduction.content
  })

  // 接下去使用剩余的数据构造文章列表
  const articleList = []
  arrayList.map(item => {
      const article = {}
      const { ctime, title, section_id, content } = item.data.section
      Object.assign(article, { ctime, title, section_id, content })
      articleList.push(article)
  })
  // 把文章放入
  const sortArticle = articleList.sort((a, b) => a.ctime - b.ctime)
  book_obj['book_article'] = sortArticle
  console.log(book_obj)
}
