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

export enum CatalogSidebarType {
    GlobalSearch = 'GlobalSearch',
    FreeDesign = 'FreeDesign',
    MaterialLibrary = 'MaterialLibrary',
    Tenant = 'Tenant',
    UserCenter = 'UserCenter'
}