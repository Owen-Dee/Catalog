import * as React from 'react';
import ReactLoading from 'react-loading';
import store from '../../../../store/index';
import HeaderSearch from '../headersearch/headersearch';
import ModelMaterials from '../modelmaterials/modelmaterials';
import Pagination from '../../common/pagination/pagination';
import { getCatalogModels } from '../../../../actions/catalog';
import './catalogmodel.scss';
/**
 * @description:catalog模型材质组件对应的states
 * @modelsData:模型数据
 * @categoryId:分类id
 * @isFetching:是否向服务获取数据
 * @tenantOperator: 记录是tenant的数据,还是素材库的数据
 */
interface ICatalogModelStates {
    modelsData: Array<any>,
    categoryId: string,
    isFetching: boolean,
    tenantOperator: string
}

export default class CatalogModel extends React.Component<any, ICatalogModelStates> {
    pageIndex: number;
    constructor(props) {
        super(props);
        this.state = {
            modelsData: [],
            categoryId: '',
            isFetching: true,
            tenantOperator: 'Eq'
        };
        this.pageIndex = 0;
        store.subscribe(() => {
            this.setState({
                modelsData: store.getState().catalog.modelsData,
                categoryId: store.getState().catalog.categoryId,
                isFetching: store.getState().catalog.isFetching,
                tenantOperator: store.getState().catalog.tenantOperator
            });
        });
    }

    handleChangePageIndex(pageIndex: number) {
        this.pageIndex = pageIndex;
        this.getCatalogModels();
    }

    getCatalogModels() {
        const tenant = 'jtljia';
        let params = {
            categoryId: this.state.categoryId,
            pageIndex: this.pageIndex,
            tenant: tenant,
            tenantOperator: this.state.tenantOperator
        };

        store.dispatch(getCatalogModels(params));
    }

    render() {
        let models = this.state.modelsData['models'];
        let pageCount = this.state.modelsData['pageCount'];
        let loadingStyle = this.state.isFetching ? 'loading-active' : 'loading-unActive';

        return (
            <div className="catalog-model">
                <HeaderSearch></HeaderSearch>
                <ModelMaterials models={models}></ModelMaterials>
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