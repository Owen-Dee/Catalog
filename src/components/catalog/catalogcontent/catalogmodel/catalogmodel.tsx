import * as React from 'react';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import HeaderSearch from '../headersearch/headersearch';
import Pagination from '../../common/pagination/pagination';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './catalogmodel.scss';

interface ICatalogModelStates {
    modelsData: Array<any>
}

export default class CatalogModel extends React.Component<any, ICatalogModelStates> {
    constructor(props) {
        super(props);
        this.state = {
            modelsData: []
        };
        store.subscribe(() => {
            this.setState({
                modelsData: store.getState().catalog.modelsData
            });
        });
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    getModelList() {
        const models = this.state.modelsData['models'];
        const arrs = models ? models : [];
        let modelList = '';
        if (arrs.length === 0) {
            return (
                modelList
            );
        }
        
        modelList = models.map(model => {
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
            <div className="catalog-model">
                <HeaderSearch></HeaderSearch>
                <div className="models-materials">
                    <PerfectScrollbar>
                        {modelList}
                    </PerfectScrollbar>
                </div>
                <Pagination></Pagination>
            </div>
        );
    }
}