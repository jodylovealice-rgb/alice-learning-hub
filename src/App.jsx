import { useState, useEffect, useMemo } from 'react'
import { resources, categories } from './data/resources'
import { getFavorites, toggleFavorite, getVisitCount, incrementVisitCount, formatVisitCount, getViewMode, saveViewMode, VIEW_MODES } from './utils/storage'
import ResourceCard from './components/ResourceCard'
import ResourceList from './components/ResourceList'
import CategoryView from './components/CategoryView'

function App() {
  // 分类筛选状态
  const [activeCategory, setActiveCategory] = useState('featured')

  // 搜索关键词
  const [searchQuery, setSearchQuery] = useState('')

  // 收藏列表
  const [favorites, setFavorites] = useState([])

  // 是否只看收藏
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  // 访问量
  const [visitCount, setVisitCount] = useState(0)

  // 视图模式
  const [viewMode, setViewMode] = useState(() => getViewMode())

  // 页面加载时初始化数据
  useEffect(() => {
    // 加载收藏列表
    setFavorites(getFavorites())

    // 增加访问次数
    const newCount = incrementVisitCount()
    setVisitCount(newCount)
  }, [])

  // 切换收藏
  const handleToggleFavorite = (resourceId) => {
    const newFavorites = toggleFavorite(resourceId, favorites)
    setFavorites(newFavorites)
  }

  // 切换视图模式并保存
  const handleViewModeChange = (mode) => {
    setViewMode(mode)
    saveViewMode(mode)
  }

  // 筛选资源
  const filteredResources = useMemo(() => {
    let result

    // 1. 按分类筛选
    if (activeCategory === 'featured') {
      result = resources.filter(r => r.star)
    } else if (activeCategory === 'favorites') {
      result = resources.filter(r => favorites.includes(r.id))
    } else {
      result = resources.filter(r => r.category === activeCategory)
    }

    // 2. 按收藏筛选
    if (showFavoritesOnly) {
      result = result.filter(r => favorites.includes(r.id))
    }

    // 3. 按搜索关键词筛选
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      result = result.filter(r =>
        r.name.toLowerCase().includes(query) ||
        r.desc.toLowerCase().includes(query)
      )
    }

    return result
  }, [activeCategory, favorites, showFavoritesOnly, searchQuery])

  // 获取当前分类信息
  const currentCategory = categories.find(c => c.id === activeCategory)

  // 收藏数量
  const favoriteCount = favorites.length

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 relative overflow-x-hidden">

      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-8 text-2xl animate-pulse">✨</div>
        <div className="absolute top-32 right-12 text-xl animate-pulse delay-100">⭐</div>
        <div className="absolute top-56 left-1/4 text-lg animate-pulse delay-200">🌟</div>
        <div className="absolute top-72 right-1/3 text-2xl animate-pulse delay-300">💫</div>
        <div className="absolute top-24 left-1/3 text-xl animate-pulse delay-500">✨</div>
        <div className="absolute top-80 left-16 text-lg animate-pulse delay-700">⭐</div>
        <div className="absolute top-96 right-20 text-xl animate-pulse delay-400">🌟</div>
        <div className="absolute top-40 left-6 text-3xl opacity-40 animate-pulse delay-600">💖</div>
        <div className="absolute top-64 right-8 text-2xl opacity-30 animate-pulse delay-800">🫧</div>
        <div className="absolute top-[500px] left-10 text-3xl opacity-30">☁️</div>
        <div className="absolute top-[600px] right-16 text-4xl opacity-20">☁️</div>
        <div className="absolute top-8 right-1/4 text-5xl opacity-20 rotate-12">🌈</div>
        <div className="absolute top-[450px] left-1/3 text-4xl opacity-15 -rotate-6">🌈</div>
      </div>

      {/* 顶部欢迎区 */}
      <header className="relative pt-10 pb-6 px-4 text-center">
        <div className="mb-2">
          <span className="text-5xl md:text-6xl inline-block animate-bounce">🦄</span>
        </div>

        <div className="relative inline-block mb-2">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
            ✨ 学习魔法站 ✨
          </h1>
        </div>

        <p className="text-base md:text-xl text-purple-600 mb-2 max-w-xl mx-auto px-4">
          Alice Learning Hub
        </p>
        <p className="text-xs md:text-sm text-gray-500">
          精选优质学习网站和工具，让学习变得更简单！
        </p>

        {/* 装饰线 */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-purple-300 rounded-full"></div>
          <span className="text-purple-300 text-sm">★</span>
          <div className="w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-300 rounded-full"></div>
        </div>
      </header>

      {/* 搜索框区域 */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索资源名称或描述..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-4 pr-10 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-purple-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 transition-all duration-300 shadow-sm"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
            >
              ✕
            </button>
          ) : (
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">🔍</span>
          )}
        </div>
      </div>

      {/* 视图切换 + 分类标签 */}
      <div className="relative z-10 max-w-6xl mx-auto px-3 pb-3">
        {/* 视图切换控件 - 手机端更明显 */}
        <div className="flex items-center justify-between mb-3 bg-white/60 rounded-2xl p-1.5 shadow-sm">
          {/* 视图模式按钮组 */}
          <div className="flex gap-1">
            <button
              onClick={() => handleViewModeChange(VIEW_MODES.CARD)}
              className={`flex-1 md:flex-none px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                viewMode === VIEW_MODES.CARD
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <span>🪄</span>
              <span className="hidden sm:inline">卡片</span>
            </button>
            <button
              onClick={() => handleViewModeChange(VIEW_MODES.LIST)}
              className={`flex-1 md:flex-none px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                viewMode === VIEW_MODES.LIST
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <span>📋</span>
              <span className="hidden sm:inline">列表</span>
            </button>
            <button
              onClick={() => handleViewModeChange(VIEW_MODES.CATEGORY)}
              className={`flex-1 md:flex-none px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                viewMode === VIEW_MODES.CATEGORY
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <span>🗂️</span>
              <span className="hidden sm:inline">分类</span>
            </button>
          </div>

          {/* 资源数量 - 手机端自适应 */}
          <span className="text-xs text-gray-400 pr-2">
            {filteredResources.length}个
          </span>
        </div>

        {/* 分类标签 */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 px-1 scrollbar-hide">
          {/* 只看收藏按钮 */}
          <button
            onClick={() => {
              setShowFavoritesOnly(!showFavoritesOnly)
              setActiveCategory('featured')
            }}
            className={`
              flex-shrink-0 px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 flex items-center gap-1 whitespace-nowrap
              ${showFavoritesOnly
                ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg scale-105 ring-2 ring-white/50'
                : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md border border-pink-100'}
            `}
          >
            <span>❤️</span>
            <span>收藏</span>
            {favoriteCount > 0 && (
              <span className="ml-0.5 text-[10px] bg-white/30 px-1 rounded-full">
                {favoriteCount}
              </span>
            )}
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setShowFavoritesOnly(false)
              }}
              className={`
                flex-shrink-0 px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 flex items-center gap-1 whitespace-nowrap
                ${activeCategory === category.id && !showFavoritesOnly
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105 ring-2 ring-white/50`
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md border border-purple-100'}
              `}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              {category.id === 'featured' && !showFavoritesOnly && (
                <span className="ml-0.5 text-[10px] bg-white/30 px-1 rounded-full">
                  {resources.filter(r => r.star).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 资源展示区 */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pb-12">
        {/* 当前筛选标题 */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-5 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-300 rounded-full"></div>
          <span className="text-lg md:text-xl">
            {showFavoritesOnly ? '❤️' : currentCategory?.icon}
          </span>
          <h2 className="text-lg md:text-xl font-bold text-gray-700">
            {showFavoritesOnly ? '我的收藏' : currentCategory?.name}
          </h2>
          <span className="text-lg md:text-xl">
            {showFavoritesOnly ? '❤️' : currentCategory?.icon}
          </span>
          <div className="w-5 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-300 rounded-full"></div>
        </div>

        {/* 根据视图模式渲染不同内容 */}
        {filteredResources.length > 0 ? (
          <>
            {/* 卡片模式 */}
            {viewMode === VIEW_MODES.CARD && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {filteredResources.map((resource, index) => (
                  <div
                    key={resource.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <ResourceCard
                      resource={resource}
                      isFavorite={favorites.includes(resource.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* 列表模式 */}
            {viewMode === VIEW_MODES.LIST && (
              <ResourceList
                resources={filteredResources}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            )}

            {/* 分类模式 */}
            {viewMode === VIEW_MODES.CATEGORY && (
              <CategoryView
                allResources={resources}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                showFavoritesOnly={showFavoritesOnly}
              />
            )}
          </>
        ) : (
          /* 空状态 */
          <div className="text-center py-12">
            <p className="text-4xl mb-2">✨</p>
            <p className="text-gray-500 text-sm">
              {searchQuery ? '没有找到相关资源' : '该分类暂无资源'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-purple-500 hover:text-purple-600 text-xs underline"
              >
                清除搜索
              </button>
            )}
          </div>
        )}

        {/* 资源数量 */}
        {filteredResources.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-gray-400 text-xs bg-white/50 inline-block px-3 py-1 rounded-full">
              📚 共 {filteredResources.length} 个资源
              {searchQuery && ` (搜索结果)`}
            </p>
          </div>
        )}
      </main>

      {/* 底部页脚 */}
      <footer className="relative z-10 bg-white/70 backdrop-blur-sm py-6 px-4 border-t border-purple-100">
        <div className="max-w-6xl mx-auto text-center">
          {/* 访问量统计 */}
          <div className="mb-2 flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <span>👀</span>
            <span>浏览</span>
            <span className="font-medium text-purple-500">{formatVisitCount(visitCount)}</span>
            <span>次</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-lg">💜</span>
            <span className="text-gray-600 font-medium text-sm">感谢访问魔法站</span>
            <span className="text-lg">💜</span>
          </div>

          <p className="text-xs text-amber-500 mb-2">
            ⚠️ 大部分需要科学上网
          </p>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-200 rounded-full"></div>
            <div className="flex gap-1.5 md:gap-2 text-lg md:text-xl">
              <span className="hover:scale-125 transition-transform">🦄</span>
              <span className="hover:scale-125 transition-transform">🌸</span>
              <span className="hover:scale-125 transition-transform">⭐</span>
              <span className="hover:scale-125 transition-transform">🌈</span>
              <span className="hover:scale-125 transition-transform">💖</span>
            </div>
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-200 rounded-full"></div>
          </div>

          <p className="text-gray-400 text-xs">
            © 2026 学习魔法站 · Made with 💕 for learners
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
