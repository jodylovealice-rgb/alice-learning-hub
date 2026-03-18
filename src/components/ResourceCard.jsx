import { categories } from '../data/resources'

function ResourceCard({ resource, isFavorite, onToggleFavorite }) {
  // 获取分类信息
  const category = categories.find(c => c.id === resource.category)
  const color = category?.color || 'from-purple-300 to-pink-300'
  const categoryEmoji = category?.icon || '📚'

  return (
    <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-3.5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-2 border-white/60 overflow-hidden">

      {/* 渐变背景 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}></div>

      {/* 左侧装饰 */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"></div>

      {/* 顶部区域 */}
      <div className="relative flex items-start justify-between mb-2">
        {/* 分类表情 */}
        <div className="text-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
          {categoryEmoji}
        </div>

        {/* 收藏按钮 */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onToggleFavorite(resource.id)
          }}
          className={`
            text-lg transition-all duration-200 hover:scale-125
            ${isFavorite
              ? 'text-pink-500 animate-pulse'
              : 'text-gray-300 hover:text-pink-400'}
          `}
          title={isFavorite ? '取消收藏' : '添加收藏'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="relative z-10">
        {/* 名称 + 精选 */}
        <div className="flex items-center gap-1.5 mb-1.5">
          {resource.star && <span className="text-xs">⭐</span>}
          <h3 className="text-sm font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 truncate flex-1">
            {resource.name}
          </h3>
        </div>

        {/* 描述 */}
        <p className="text-gray-600 text-xs leading-relaxed mb-2.5 min-h-[32px] line-clamp-2">
          {resource.desc}
        </p>

        {/* 按钮区域 */}
        <div className="flex items-center gap-2">
          {/* 访问按钮 */}
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-xl
              bg-gradient-to-r ${color}
              text-white font-semibold text-xs
              shadow-sm hover:shadow-md
              hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-200
            `}
          >
            <span>🚀</span>
            <span>访问</span>
          </a>

          {/* 收藏按钮（小） */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onToggleFavorite(resource.id)
            }}
            className={`
              p-1.5 rounded-xl transition-all duration-200 hover:scale-110
              ${isFavorite
                ? 'bg-pink-100 text-pink-500'
                : 'bg-gray-100 text-gray-400 hover:bg-pink-50 hover:text-pink-400'}
            `}
            title={isFavorite ? '取消收藏' : '添加收藏'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-50"></div>
    </div>
  )
}

export default ResourceCard
