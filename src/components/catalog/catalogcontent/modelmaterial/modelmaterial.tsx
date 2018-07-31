import * as React from 'react';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './modelmaterial.scss';

interface ICatalogModelProps {
    models: Array<any>
}

export default class CatalogModel extends React.Component<ICatalogModelProps, any> {
    constructor(props: ICatalogModelProps) {
        super(props);
    }

    handleImageErrored(e) {
        e.target.src = require('./img/error_img.svg');
    }

    handleModels() {
        let models = [...this.props.models];
        models.forEach((item) => {
            if (item.imagesResize && item.imagesResize instanceof Array) {
                item.imageUrl = item.imagesResize[0] ? item.imagesResize[0] : '';
            } else {
                item.imageUrl = '';
            }
            // 色板的情况下,后台不返回图片
            if (item.hasOwnProperty('model') && item.model.color) {
                item.background = item.model.color;
                item.imageUrl = require('./img/transparent.svg');
            } else {
                item.background = '';
            }
        });

        return models;
    }

    getModelList() {
        let modelList;
        if (!this.props.models) {
            modelList = '';
        } else if (this.props.models.length === 0) {
            modelList = <div className="no-models-info">
                            <span>抱歉,查询数据为空!</span>
                        </div>
        } else {
            let models = this.handleModels();
            modelList = models.map(model => {
                return <div className="model" key={model.id}>
                    <div className="model-img" style={{ background: model.background }}>
                        <img src={model.imageUrl}
                            onError={this.handleImageErrored.bind(this)} />
                        <div className="favorite-controls">
                            <img className="add" src={require('./img/favorite_normal.svg')} title="收藏" />
                            <img className="added" src={require('./img/favorite_light.svg')} title="取消收藏" />
                        </div>
                    </div>
                    <div className="description">
                        <span className="name">{model.name}</span>
                    </div>
                </div>
            });
        }

        return (
            modelList
        );
    }

    render() {
        const modelList = this.getModelList();
        return (
            <div className="models-materials">
                <PerfectScrollbar>
                    {modelList}
                </PerfectScrollbar>
            </div>
        );
    }
}