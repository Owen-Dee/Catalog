/**
 * @description: 组件CatalogSidebar对应的属性
 * @sidebarType: sidebar 类型
 * @onSidebarTypeChange: 监听sidebar 类型的改变
 */
export interface CatalogSidebarProps {
    sidebarType: string,
    onSidebarTypeChange: (val) => void
}
/**
 * @description: 组件CatalogSidebar对应的state
 * @display: 是否显示相关的样式
 */
export interface CatalogSidebarStates {
    display: boolean,
}
/**
 * @description: CatalogSidebarCategoryStates:后台接口获取的category分类,涉及的状态
 * @activeIndex: 按钮被点击激活状态
 * @menuIndex: 鼠标放在按钮上的激活状态
 * @categories: 二级菜单对应的数据
 * @submenuOfftop: 二级菜单对应的top值
 */
export interface CatalogSidebarCategoryStates {
    activeIndex: number,
    menuIndex: number,
    categories: Array<any>,
    submenuOfftop: string
}
/**
 * @description: SidebarItem
 * @sidebarMenuName: sidebar 菜单按钮名称
 * @sidebarType: sidebar 类型
 * @normalImg: 普通状态下显示的图片
 * @activeImg: 激活状态下显示的图片
 * @showCategories: 是否显示对应的下拉菜单
 * @isNotGlobalSearch: 不是全局搜索
 * @onSidebarTypeChange: 监听sidebar 类型的改变
 */
export interface SidebarItemProps {
    sidebarMenuName: string,
    sidebarType: string,
    normalImg: string,
    activeImg: string,
    showCategories: boolean,
    isNotGlobalSearch: boolean,
    onSidebarTypeChange: (val) => void
}
/**
 * @description: CatalogSubmenuProps: catalog二级和多级菜单对应的属性
 * @menuIndex: 鼠标放在按钮上的激活状态
 * @categories: 二级菜单对应的数据
 * @submenuOfftop: 二级菜单对应的top值
 */
export interface CatalogSubmenuProps {
    categories: Array<any>,
    submenuOfftop: string,
    menuIndex: number,
    onSubmenuClick: (val) => void
}
/**
 * @description: CatalogSubmenuStates: catalog二级和多级菜单对应的状态
 * @activeMenuId: 按钮被点击后,记录category id
 */
export interface CatalogSubmenuStates {
    activeMenuId: string
}

export enum CatalogSidebarType {
    GlobalSearch = 'GlobalSearch',
    FreeDesign = 'FreeDesign',
    MaterialLibrary = 'MaterialLibrary',
    Tenant = 'Tenant',
    UserCenter = 'UserCenter'
}