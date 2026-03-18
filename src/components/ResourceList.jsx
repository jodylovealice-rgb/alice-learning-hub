import { categories } from '../data/resources'

// 紧凑列表模式 - 每条资源更紧凑，一屏可看更多
function ResourceList({ resources, favorites, onToggleFavorite }) {
  return (
    <div className="flex flex-col gap-2">
      {resources.map((resource, index) => {
        const category = categories.find(c => c.id === resource.category)
        const isFav = favorites.includes(resource.id)

        return (
          <div
            key={resource.id}
            className="group bg-white/80 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 border border-purple-50 hover:border-purple-100 animate-fade-in"
            style={{ animationDelay: `${index * 0.02}s` }}
          >
            <div className="flex items-center gap-3">
              {/* 分类图标 */}
              <div className="text-xl flex-shrink-0">{category?.icon || '📚'}</div>

              {/* 标题和简介 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  {resource.star && <span className="text-xs">⭐</span>}
                  <h3 className="font-semibold text-gray-800 text-sm truncate">
                    {resource.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 truncate">
                  {resource.desc}
                </p>
              </div>

              {/* 收藏按钮 */}
              <button
                onClick={() => onToggleFavorite(resource.id)}
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
          </div>
        )
      })}
    </div>
  )
}

export default ResourceList
