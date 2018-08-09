import * as React from 'react';
import store from '../../../store/index';
import CatalogAbstractFactory from '../utils/catalogabstractfactory';
import './catalogcontent.scss';
/**
 * @description:CatalogContent对应的states
 * @catalogType: 需要显示的catalog内容
 */
interface CatalogContentStates {
    catalogType: string
}

export default class CatalogContent extends React.Component<any, CatalogContentStates> {
    unsubscribe: any;
    constructor(props) {
        super(props);
        this.state = {
            catalogType: store.getState().catalog.catalogType
        };
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                catalogType: store.getState().catalog.catalogType
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribe(); // 解除监听。
    }

    render() {
        let contentType = this.state.catalogType;
        let ContentComponent = CatalogAbstractFactory.getModule(contentType);
        return (
            <div className="catalog-content">
                <ContentComponent />
            </div>
        );
    }
}