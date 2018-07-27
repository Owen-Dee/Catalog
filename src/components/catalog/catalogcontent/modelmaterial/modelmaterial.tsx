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

    getModelList() {
        const arrs = this.props.models ? this.props.models : [];
        let modelList;
        if (arrs.length === 0) {
            modelList = '';
            return (
                modelList
            );
        }

        modelList = this.props.models.map(model => {
            return <div className="model" key={model.id}>
                <div className="model-img">
                    <img src={model.imagesResize[0]} />
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