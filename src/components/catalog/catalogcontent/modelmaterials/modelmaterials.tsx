import * as React from 'react';
import ModelItem from '../modelitem/modelitem';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './modelmaterials.scss';

interface ICatalogModelProps {
    models: Array<any>
}

export default class ModelMaterial extends React.Component<ICatalogModelProps, any> {
    constructor(props: ICatalogModelProps) {
        super(props);
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
                return <ModelItem key={model.id} model={model}></ModelItem>
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