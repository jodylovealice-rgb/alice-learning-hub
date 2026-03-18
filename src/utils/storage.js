// 本地存储工具函数

// 存储键名
const FAVORITES_KEY = 'alice_hub_favorites'
const VISITS_KEY = 'alice_hub_visits'
const VIEW_MODE_KEY = 'alice_hub_view_mode'

// ============ 视图模式 ============

// 可用的视图模式
export const VIEW_MODES = {
  CARD: 'card',     // 卡片模式
  LIST: 'list',     // 紧凑列表模式
  CATEGORY: 'category'  // 分类折叠模式
}

// 获取保存的视图模式
export function getViewMode() {
  try {
    const saved = localStorage.getItem(VIEW_MODE_KEY)
    if (saved && Object.values(VIEW_MODES).includes(saved)) {
      return saved
    }
    return VIEW_MODES.CARD  // 默认卡片模式
  } catch (error) {
    return VIEW_MODES.CARD
  }
}

// 保存视图模式
export function saveViewMode(mode) {
  try {
    localStorage.setItem(VIEW_MODE_KEY, mode)
  } catch (error) {
    console.error('Error saving view mode:', error)
  }
}

// ============ 收藏功能 ============

// 获取收藏列表
export function getFavorites() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY)
    return saved ? JSON.parse(saved) : []
  } catch (error) {
    console.error('Error loading favorites:', error)
    return []
  }
}

// 保存收藏列表
export function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  } catch (error) {
    console.error('Error saving favorites:', error)
  }
}

// 切换收藏状态
export function toggleFavorite(resourceId, currentFavorites) {
  const newFavorites = currentFavorites.includes(resourceId)
    ? currentFavorites.filter(id => id !== resourceId)  // 取消收藏
    : [...currentFavorites, resourceId]  // 添加收藏
  saveFavorites(newFavorites)
  return newFavorites
}

// 检查是否已收藏
export function isFavorite(resourceId, favorites) {
  return favorites.includes(resourceId)
}

// ============ 访问量统计 ============

// 获取访问次数（仅本地）
export function getVisitCount() {
  try {
    const saved = localStorage.getItem(VISITS_KEY)
    return saved ? parseInt(saved, 10) : 0
  } catch (error) {
    return 0
  }
}

// 增加访问次数
export function incrementVisitCount() {
  try {
    const current = getVisitCount()
    const newCount = current + 1
    localStorage.setItem(VISITS_KEY, newCount.toString())
    return newCount
  } catch (error) {
    return 0
  }
}

// 格式化访问次数（添加千位分隔符）
export function formatVisitCount(count) {
  return count.toLocaleString()
}
