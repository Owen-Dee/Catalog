/**
 * @description: 组件CatalogSidebar对应的属性
 * @sidebarType: sidebar 类型
 * @onSidebarTypeChange: 监听sidebar 类型的改变
 */
export interface ICatalogSidebarProps {
    sidebarType: string,
    onSidebarTypeChange: (val) => void,
}
/**
 * @description: 组件CatalogSidebar对应的state
 * @sidebarType: sidebar 类型('字符串')
 */
export interface ICatalogSidebarStates {
    sidebarType: string,
}
/**
 * @description: 组件MaterialLibrary/Tenant对应的state
 * @sidebarType: sidebar 类型('字符串')
 */
export interface ICatalogModelStates {
    categories: Array<any>
}
/**
 * @description: 后台接口获取的category分类,涉及的状态
 * @activeMenuId: 按钮被点击后,记录category id
 * @activeIndex: 按钮被点击激活状态
 * @menuIndex: 鼠标放在按钮上的激活状态
 * @categories: 二级菜单对应的数据
 * @submenuOffsetTop: 二级菜单对应的top值
 */
export interface ICatalogCategoryStates {
    activeMenuId: string,
    activeIndex: number,
    menuIndex: number,
    categories: Array<any>,
    submenuOffsetTop: string
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
export interface ISidebarItemProps {
    sidebarMenuName: string,
    normalImg: string,
    activeImg: string,
    showCategories: boolean,
    isNotGlobalSearch: boolean,
    onSidebarTypeChange: () => void,
}
/**
 * @description: SidebarItem
 * @display: 是否显示每个图标右侧的提示信息
 */
export interface ISidebarItemStates {
    display: boolean
}
/**
 * @description: ICatalogSubmenuProps: catalog二级和多级菜单对应的属性
 * @menuIndex: 鼠标放在按钮上的激活状态
 * @categories: 二级菜单对应的数据
 * @submenuOffsetTop: 二级菜单对应的top值
 */
export interface ICatalogSubmenuProps {
    categories: Array<any>,
    submenuOffsetTop: string,
    activeMenuId: string,
    menuIndex: number,
    onSubmenuClick: (val1, val2) => void
}
/**
 * @description: ICatalogSubmenuStates: catalog二级和多级菜单对应的状态
 * @activeMenuId: 按钮被点击后,记录category id
 */
export interface ICatalogSubmenuStates {
    activeMenuId: string
}
/**
 * @description: catalog模型的分类属性
 * @showCategories: 是否显示下拉分类
 * @categories: 分类数据
 */
export interface ICatalogCategoryProps {
    showCategories: boolean,
    categories: Array<any>,
    onChangeCategoryId: (val) => void,
    onRef?: (val) => void
}
/**
 * @description: Catalog Sidebar的枚举类型
 * @GlobalSearch: 全局搜索
 * @FreeDesign: 自由设计
 * @MaterialLibrary: 素材库
 * @Tenant: 定制厂商
 * @UserCenter: 用户中心
 */
export enum CatalogSidebarType {
    GlobalSearch = 'GlobalSearch',
    FreeDesign = 'FreeDesign',
    MaterialLibrary = 'MaterialLibrary',
    Tenant = 'Tenant',
    UserCenter = 'UserCenter'
}
/**
 * @description: Catalog content的显示枚举类型
 * @GlobalSearchMaterial: 全局搜索材质和模型
 * @HouseDesign: 户型设计
 * @Hydropower: 水电设计
 * @CatalogModel: catalog 模型
 */
export enum CatalogContentType {
    GlobalSearchMaterial = 'GlobalSearchMaterial',
    HouseDesign = 'HouseDesign',
    Hydropower = 'Hydropower',
    CatalogModel = 'CatalogModel',
}