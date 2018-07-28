import * as React from 'react';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import HeaderSearch from '../headersearch/headersearch';
import ModelMaterial from '../modelmaterial/modelmaterial';
import Pagination from '../../common/pagination/pagination';
import { getCatalogModels } from '../../../../actions/catalog';
import './catalogmodel.scss';

interface ICatalogModelStates {
    modelsData: Array<any>,
    categoryId: string
}

export default class CatalogModel extends React.Component<any, ICatalogModelStates> {
    pageIndex: number;
    constructor(props) {
        super(props);
        this.state = {
            modelsData: [],
            categoryId: ''
        };
        this.pageIndex = 0;
        store.subscribe(() => {
            this.setState({
                modelsData: store.getState().catalog.modelsData,
                categoryId: store.getState().catalog.categoryId
            });
        });
    }

    handleChangePageIndex(pageIndex: number) {
        this.pageIndex = pageIndex;
        this.getCatalogModels();
    }

    getCatalogModels() {
        let params = {
            categoryId: this.state.categoryId,
            pageIndex: this.pageIndex
        };

        store.dispatch(getCatalogModels(params));
    }

    render() {
        let models = this.state.modelsData['models'];
        let pageCount = this.state.modelsData['pageCount'];
        if (!models || !pageCount) {
            models = [];
            pageCount = 0;
        }

        return (
            <div className="catalog-model">
                <HeaderSearch></HeaderSearch>
                <ModelMaterial models={models}></ModelMaterial>
                <Pagination pageCount={pageCount}
                    onChangePageIndex={this.handleChangePageIndex.bind(this)}>
                </Pagination>
            </div>
        );
    }
}