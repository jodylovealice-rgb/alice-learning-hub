// 分类数据
export const categories = [
  { id: 'featured', name: '精选', icon: '⭐', color: 'from-yellow-300 to-orange-300' },
  { id: 'dictionary', name: '词典 & 语料库', icon: '📖', color: 'from-blue-300 to-cyan-300' },
  { id: 'speaking', name: '口语 & 听力', icon: '🎬', color: 'from-purple-300 to-pink-300' },
  { id: 'reading', name: '阅读 & 精读', icon: '📚', color: 'from-green-300 to-emerald-300' },
  { id: 'writing', name: '写作 & 语法', icon: '✏️', color: 'from-indigo-300 to-blue-300' },
  { id: 'kids', name: '儿童英语综合', icon: '👶', color: 'from-pink-300 to-rose-300' },
  { id: 'phonics', name: '自然拼读', icon: '🔤', color: 'from-yellow-300 to-amber-300' },
  { id: 'worksheets', name: '练习单 & 打印', icon: '📄', color: 'from-teal-300 to-cyan-300' },
  { id: 'science', name: '科学 & 思维', icon: '🧪', color: 'from-violet-300 to-purple-300' },
  { id: 'math', name: '数学', icon: '🧮', color: 'from-red-300 to-orange-300' },
  { id: 'platform', name: '综合学习平台', icon: '🎓', color: 'from-sky-300 to-blue-300' },
  { id: 'typing', name: '技能练习', icon: '💻', color: 'from-slate-300 to-gray-300' },
  { id: 'ebook', name: '电子书库', icon: '📱', color: 'from-rose-300 to-red-300' },
  { id: 'tools', name: '工具 & 其他', icon: '📌', color: 'from-lime-300 to-green-300' },
]

// 资源数据
export const resources = [
  // 精选 - Featured
  { id: 1, name: "YouGlish", link: "https://youglish.com/", desc: "通过真实视频语境学习英语发音和表达", category: "featured", star: true },
  { id: 2, name: "LearnEnglish Kids", link: "https://learnenglishkids.britishcouncil.org/", desc: "英国文化协会主办，雅思官方少儿英语学习网站", category: "featured", star: true },
  { id: 3, name: "UFLI Toolbox", link: "https://ufli.education.ufl.edu/foundations/toolbox/", desc: "系统自然拼读教学工具资源", category: "featured", star: true },
  { id: 4, name: "Khan Academy", link: "https://www.khanacademy.org/", desc: "超级牛的学习网站，7到13岁适用，涵盖多学科", category: "featured", star: true },
  { id: 5, name: "Khanmigo", link: "https://www.khanmigo.ai/", desc: "可汗学院推出的 AI 辅导工具", category: "featured", star: true },
  { id: 6, name: "Oak National Academy", link: "https://www.thenational.academy/", desc: "提供免费、系统化的教学资源", category: "featured", star: true },
  { id: 7, name: "Typing Club", link: "https://www.typingclub.com/", desc: "练习打字盲打的网站", category: "featured", star: true },
  { id: 8, name: "Anna's Archive", link: "https://zh.annas-archive.li/", desc: "聚合型电子书与学术资源检索网站", category: "featured", star: true },
  { id: 9, name: "E-Learning for Kids", link: "https://www.e-learningforkids.org/", desc: "IB 国际文凭课程免费线上学习，包含数学和科学", category: "featured", star: true },

  // 词典 & 语料库
  { id: 9, name: "COCA", link: "https://www.english-corpora.org/coca/", desc: "英语语料库，适合查词频、搭配和真实用法", category: "dictionary" },
  { id: 10, name: "LDOCE", link: "https://www.ldoceonline.com/dictionary/cue", desc: "朗文在线词典词条页面，可用于查单词释义和例句", category: "dictionary" },
  { id: 11, name: "Membean", link: "http://www.membean.com/", desc: "单词学习网站，可淘宝购买账号", category: "dictionary" },

  // 口语 & 听力
  { id: 12, name: "YouGlish", link: "https://youglish.com/", desc: "通过真实视频语境学习英语发音和表达", category: "speaking" },
  { id: 13, name: "Subzin", link: "https://www.subzin.com/", desc: "电影台词与名人资料检索网站", category: "speaking" },

  // 阅读 & 精读
  { id: 14, name: "《小王子》双语精读课", link: "https://www.bilibili.com/cheese/play/ss62743?fromspmid=sxgoumai", desc: "适合进行双语阅读和精读训练", category: "reading" },
  { id: 15, name: "Engoo Daily News", link: "https://engoo.com/app/daily-news", desc: "很棒的分类阅读资料库", category: "reading" },
  { id: 16, name: "News-O-Matic", link: "https://www.newsomatic.org/", desc: "适合 K-8 学生的英语新闻阅读资源", category: "reading" },

  // 写作 & 语法
  { id: 17, name: "NoRedInk", link: "https://www.noredink.com/", desc: "英语写作与语法训练平台", category: "writing" },
  { id: 18, name: "Test-English", link: "https://test-english.com/", desc: "涵盖语法、听力、阅读的分级英语练习", category: "writing" },

  // 儿童英语综合
  { id: 19, name: "LearnEnglish Kids", link: "https://learnenglishkids.britishcouncil.org/", desc: "英国文化协会主办，雅思官方少儿英语学习网站", category: "kids" },
  { id: 20, name: "YouTube Kids", link: "https://www.youtubekids.com/?hl=zh-CN", desc: "儿童友好的英语视频学习平台", category: "kids" },
  { id: 21, name: "Baby Shark Craft", link: "https://www.youtube.com/watch?v=GE7LjtK8KeM&list=PLdkj6XH8GYPRVD6lBRgCsM9xGilfEN_-e&index=1&t=30s", desc: "儿童英语手工与视频学习资源", category: "kids" },
  { id: 22, name: "Starfall", link: "https://www.starfall.com/h/index-grades123.php?mg=g", desc: "适合儿童进行自然拼读和基础阅读训练", category: "kids" },
  { id: 23, name: "Khan Kids Summer Camp", link: "https://khankids.zendesk.com/hc/en-us", desc: "Khan Academy 儿童版夏令营活动", category: "kids" },

  // 自然拼读
  { id: 24, name: "UFLI Toolbox", link: "https://ufli.education.ufl.edu/foundations/toolbox/", desc: "系统自然拼读教学工具资源", category: "phonics" },
  { id: 25, name: "Blending Board", link: "https://research.dwi.ufl.edu/op.n/file/bca9ju45kvvrvoan/?embed&fbclid=IwAR0xziIDWq8RDOkOG-P8G4EQ0d3dpamYRD2XzKqSjZ0aBQTAbDriYTZtpBs", desc: "适合自然拼读和拼读训练", category: "phonics" },
  { id: 26, name: "Mr. Holland's UFLI Lesson", link: "https://www.youtube.com/watch?v=VhuK8az3hgk&list=PLiTyaETH_Wy9SXilJItfJh058SpDl2O5g&index=14", desc: "UFLI 拼读教学视频资源", category: "phonics" },
  { id: 27, name: "Games to Learn English", link: "https://www.gamestolearnenglish.com/", desc: "通过游戏学习英语词汇和句型", category: "phonics" },

  // 练习单 & 打印
  { id: 28, name: "Kiddoworksheets", link: "https://www.kiddoworksheets.com/", desc: "提供儿童练习单和可打印学习资源", category: "worksheets" },
  { id: 29, name: "WorksheetWorks.com", link: "https://worksheetworks.com/", desc: "可生成各种学习练习单", category: "worksheets" },
  { id: 30, name: "K12 Reader", link: "https://www.k12reader.com/", desc: "Vocabulary worksheet，包含 Words 3000 词", category: "worksheets" },
  { id: 31, name: "Diffit", link: "https://web.diffit.me/", desc: "可生成阅读材料和练习题", category: "worksheets" },

  // 科学 & 思维
  { id: 32, name: "Howtosmile", link: "https://www.howtosmile.org/", desc: "儿童科学与学习活动资源网站", category: "science" },
  { id: 33, name: "To The Network", link: "https://tothenetwork.com/", desc: "未来导向主题：量子物理、数据驱动决策、批判性思维与伦理决策", category: "science" },
  { id: 34, name: "Brilliant", link: "https://brilliant.org/", desc: "数学和科学学习网站，培养批判性思维", category: "science" },

  // 数学
  { id: 35, name: "Math Playground", link: "https://www.mathplayground.com/tb_addition/index.html", desc: "适合儿童练习加减法与数学思维", category: "math" },
  { id: 36, name: "MrNussbaum.com", link: "https://mrnussbaum.com/", desc: "面向 K-8 的教育游戏与学习活动网站", category: "math" },
  { id: 37, name: "E-Learning for Kids", link: "https://www.e-learningforkids.org/", desc: "IB 国际文凭课程免费线上学习，包含数学和科学", category: "math" },

  // 综合学习平台
  { id: 38, name: "Khan Academy", link: "https://www.khanacademy.org/", desc: "超级牛的学习网站，7到13岁适用，涵盖多学科", category: "platform" },
  { id: 39, name: "Khanmigo", link: "https://www.khanmigo.ai/", desc: "可汗学院推出的 AI 辅导工具", category: "platform" },
  { id: 40, name: "IXL", link: "https://www.ixl.com/math", desc: "付费刷题网站，适合年龄较大孩子，幼儿园到12年级 STEAM 课程", category: "platform" },
  { id: 41, name: "Oak National Academy", link: "https://www.thenational.academy/", desc: "提供免费、系统化的教学资源", category: "platform" },
  { id: 42, name: "The National Academy", link: "https://www.thenational.academy/#teachers", desc: "英国教育部推出的中小学生线上基础课程，包含英国公校课程", category: "platform" },
  { id: 43, name: "MIT Full STEAM Ahead", link: "https://fullsteam.mit.edu/packages/", desc: "MIT 提供的 K-12 学习资源包", category: "platform" },
  { id: 44, name: "Schoolhouse.world", link: "https://schoolhouse.world/", desc: "主攻数学科学，Homeschool 超过13岁使用", category: "platform" },

  // 技能练习
  { id: 45, name: "Typing Club", link: "https://www.typingclub.com/", desc: "练习打字盲打的网站", category: "typing" },

  // 电子书库
  { id: 46, name: "Z-Library", link: "https://zh.zlib.li/", desc: "电子图书资源网站（网站不稳定）", category: "ebook" },
  { id: 47, name: "Anna's Archive", link: "https://zh.annas-archive.li/", desc: "聚合型电子书与学术资源检索网站", category: "ebook" },
  { id: 48, name: "OpenDelta 电子书库", link: "https://zh.opendelta.org/", desc: "全球最大的电子书库", category: "ebook" },

  // 工具 & 其他
  { id: 49, name: "OER Project", link: "https://www.oerproject.com/", desc: "免费在线历史课程资源", category: "tools" },
  { id: 50, name: "Plex Animation", link: "https://watch.plex.tv/zh/on-demand/category/animation", desc: "可观看免费动画影视资源", category: "tools" },
  { id: 51, name: "LIBVIO", link: "https://www.libvio.site/?ref=www.jizhihezi.com", desc: "影视资源网站", category: "tools" },
  { id: 52, name: "Brain Bee", link: "https://www.chinabrainbee.com/", desc: "脑科学学习与比赛相关网站", category: "tools" },
]
