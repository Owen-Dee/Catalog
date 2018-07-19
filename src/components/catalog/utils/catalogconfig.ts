export default class CatalogConfig {
    constructor() {}

    /**
     * [getHouseTool: 户型绘制->户型配置工具]
     * @return {[type]} [description]
     */
    static getDesignHouseTools() {
        const houseToolImgPath = require['context']('../catalogcontent/housedesign/img/', false, /\.(png|jpe?g|gif|svg)$/);

        let houseToolConfigs = [{
            id: 'wall',
            title: '自由绘制墙体',
            children: [{
                id: 'InnerLine',
                title: '内线画墙',
                img: houseToolImgPath('./create_innerline.svg')
            }, {
                id: 'CenterLine',
                title: '中线画墙',
                img: houseToolImgPath('./create_centerline.svg')
            }]
        }, {
            id: 'room',
            title: '快捷创建房间',
            children: [{
                id: 'RectRoom',
                title: '矩形',
                img: houseToolImgPath('./temproom1.svg')
            }, {
                id: 'LShapeRoom2',
                title: 'L 型1',
                img: houseToolImgPath('./temproom3.svg')
            }, {
                id: 'LShapeRoom3',
                title: 'L 型2',
                img: houseToolImgPath('./temproom4.svg')
            }]
        }, {
            id: 'doorAndWindow',
            title: '门窗类型',
            children: [{
                id: '1e4c2b7c-a13f-42f0-b695-3f33e208506f',
                title: '单开门',
                img: houseToolImgPath('./singledoor.svg')
            }, {
                id: '73934dd2-15f4-4c34-86cb-8c1c34d08860',
                title: '子母门',
                img: houseToolImgPath('./sonMotherdoor.svg')
            }, {
                id: '7f657168-5829-4369-a93f-8c17117d3151',
                title: '移门',
                img: houseToolImgPath('./movedoor.svg')
            }, {
                id: 'd29a146f-dad1-cba8-2c41-027ee799f873',
                title: '矩形窗',
                img: houseToolImgPath('./squarewindow.svg')
            }, {
                id: 'ceb38dd6-2185-04fd-337b-33d2da49c31b',
                title: '飘窗',
                img: houseToolImgPath('./piaowindow.svg')
            }, {
                id: 'ed7dd5a7-5672-e90f-23d5-50c4b4b4cb2a',
                title: '落地窗',
                img: houseToolImgPath('./groundwindow.svg')
            }, {
                id: 'b7008559-3dc0-42a4-ad80-6cab70c9feec',
                title: 'L型窗',
                img: houseToolImgPath('./lxingchuang.svg')
            }, {
                id: '3cd30aa0-9483-4e9a-87fb-ba3a9c4fe8f4',
                title: 'L型飘窗',
                img: houseToolImgPath('./lxingpiaochuang.svg')
            }, {
                id: '5b6c340a-cf32-4694-a6b7-03c73802cda0',
                title: 'U型窗',
                img: houseToolImgPath('./uxingchuang.svg')
            }]
        }, {
            id: 'parts',
            title: '结构部件',
            children: [{
                id: 'pillar',
                title: '柱子',
                img: houseToolImgPath('./zhuzi.svg')
            }, {
                id: 'beam',
                title: '横梁',
                img: houseToolImgPath('./hengliang.svg')
            }, {
                id: 'platform',
                title: '地台',
                img: houseToolImgPath('./ditai.svg')
            }, {
                id: 'flue',
                title: '烟道',
                img: houseToolImgPath('./yandao.svg')
            }, {
                id: 'enclosurepipe',
                title: '包管',
                img: houseToolImgPath('./baoguan.svg')
            }, {
                id: 'qiangdong',
                title: '墙洞',
                img: houseToolImgPath('./qiangdong.svg')
            }, {
                id: 'f0a9c1fb-e83c-e79c-56f0-7c2b7f5482fc',
                title: '蹲坑点位',
                img: houseToolImgPath('./dunkengdianwei.svg')
            }, {
                id: 'c3effc47-905d-45a8-1754-37ff64405b7c',
                title: '下水管道',
                img: houseToolImgPath('./guandao.svg')
            }, {
                id: 'floorheating',
                title: '地暖开关',
                img: houseToolImgPath('./floorHeating.svg')
            }, {
                id: 'a19e57d2-b990-4350-9746-0f0b697ef489',
                title: '空调孔',
                img: houseToolImgPath('./kongtiaokong.svg')
            }, {
                id: '3d61be78-4504-453e-af8b-e646f6d7d2ac',
                title: '新风出口',
                img: houseToolImgPath('./xinfengchukou.svg')
            }, {
                id: '63521ad4-4d60-4741-b02a-4f08690d6a36',
                title: '检修口',
                img: houseToolImgPath('./jianxiukou.svg')
            }, {
                id: 'threshold',
                title: '门槛石',
                img: houseToolImgPath('./menkanshi.svg')
            }, {
                id: 'guanjing',
                title: '管井',
                img: houseToolImgPath('./guanjing.svg')
            }, {
                id: 'paiqidao',
                title: '排气道',
                img: houseToolImgPath('./paiqidao.svg')
            }, {
                id: '5e0b08df-2e02-43c6-8092-62ecdcce93c8',
                title: '水管',
                img: houseToolImgPath('./shuiguan.svg')
            }, {
                id: '030843f3-fb83-4018-a508-4aa090fbdc8a',
                title: '弯道水管',
                img: houseToolImgPath('./wandaoshuiguan.svg')
            }]
        }];

        return houseToolConfigs;
    } 
} 