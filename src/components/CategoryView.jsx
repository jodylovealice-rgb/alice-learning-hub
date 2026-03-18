import { useState } from 'react'
import { categories } from '../data/resources'

// 分类折叠模式 - 按分类分组，每组可展开/收起
function CategoryView({ allResources, favorites, onToggleFavorite, activeCategory, setActiveCategory, showFavoritesOnly }) {
  // 展开的分类列表
  const [expandedCategories, setExpandedCategories] = useState(
    categories.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {})
  )

  // 切换分类展开状态
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  // 过滤后的分类
  const displayCategories = showFavoritesOnly
    ? categories // 显示所有分类，但在视图中只显示收藏的资源
    : activeCategory === 'featured'
      ? categories.filter(c => c.id !== 'featured')
      : categories.filter(c => c.id === activeCategory)

  return (
    <div className="flex flex-col gap-4">
      {displayCategories.map((category) => {
        // 获取该分类的资源
        let categoryResources = allResources.filter(r => r.category === category.id)

        // 如果只看收藏，则过滤
        if (showFavoritesOnly) {
          categoryResources = categoryResources.filter(r => favorites.includes(r.id))
        }

        // 如果没有资源且不是只看收藏模式，则不显示
        if (categoryResources.length === 0 && !showFavoritesOnly) {
          return null
        }

        const isExpanded = expandedCategories[category.id]

        return (
          <div
            key={category.id}
            className="bg-white/80 rounded-2xl shadow-sm border border-purple-50 overflow-hidden animate-fade-in"
          >
            {/* 分类标题 - 可点击展开/收起 */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{category.icon}</span>
                <span className="font-semibold text-gray-700">{category.name}</span>
                <span className="text-xs text-gray-400 bg-white/60 px-2 py-0.5 rounded-full">
                  {categoryResources.length}
                </span>
              </div>
              <span className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {/* 分类下的资源列表 */}
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-3 flex flex-col gap-2">
                {categoryResources.length > 0 ? (
                  categoryResources.map((resource, index) => {
                    const isFav = favorites.includes(resource.id)

                    return (
                      <div
                        key={resource.id}
                        className="group flex items-center gap-3 p-2 rounded-xl hover:bg-purple-50/50 transition-colors duration-200"
                        style={{ animationDelay: `${index * 0.02}s` }}
                      >
                        {/* 资源图标 */}
                        <div className="text-lg flex-shrink-0">
                          {resource.star ? '⭐' : category.icon}
                        </div>

                        {/* 标题 */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-800 text-sm truncate">
                            {resource.name}
                          </h4>
                        </div>

                        {/* 收藏按钮 */}
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            onToggleFavorite(resource.id)
                          }}
                          className={`text-lg flex-shrink-0 p-1 rounded-lg transition-all duration-200 hover:scale-110 ${
                            isFav ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'
                          }`}
                          title={isFav ? '取消收藏' : '添加收藏'}
                        >
                          {isFav ? '❤️' : '🤍'}
                        </button>

                        {/* 访问按钮 */}
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 px-3 py-1.5 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-medium rounded-lg hover:scale-105 active:scale-95 transition-transform"
                        >
                          访问
                        </a>
                      </div>
                    )
                  })
                ) : (
                  <p className="text-center text-gray-400 text-sm py-2">
                    该分类暂无资源
                  </p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryView
