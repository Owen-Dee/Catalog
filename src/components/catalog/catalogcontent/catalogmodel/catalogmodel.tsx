import * as React from 'react';
import ReactLoading from 'react-loading';
import store from '../../../../store/index';
import HeaderSearch from '../headersearch/headersearch';
import ModelMaterial from '../modelmaterial/modelmaterial';
import Pagination from '../../common/pagination/pagination';
import { getCatalogModels } from '../../../../actions/catalog';
import './catalogmodel.scss';

interface ICatalogModelStates {
    modelsData: Array<any>,
    categoryId: string,
    isFecting: boolean
}

export default class CatalogModel extends React.Component<any, ICatalogModelStates> {
    pageIndex: number;
    constructor(props) {
        super(props);
        this.state = {
            modelsData: [],
            categoryId: '',
            isFecting: true
        };
        this.pageIndex = 0;
        store.subscribe(() => {
            this.setState({
                modelsData: store.getState().catalog.modelsData,
                categoryId: store.getState().catalog.categoryId,
                isFecting: store.getState().catalog.isFecting,
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
        let loadingStyle = this.state.isFecting ? 'loading-active' : 'loading-unActive';

        return (
            <div className="catalog-model">
                <HeaderSearch></HeaderSearch>
                <ModelMaterial models={models}></ModelMaterial>
                <Pagination pageCount={pageCount}
                    onChangePageIndex={this.handleChangePageIndex.bind(this)}>
                </Pagination>
                <ReactLoading className={['react-loading', loadingStyle].join(' ')} 
                    type={'spinningBubbles'} 
                    color={'#ffc034'} 
                    height={48} 
                    width={48}>
                </ReactLoading>
            </div>
        );
    }
}