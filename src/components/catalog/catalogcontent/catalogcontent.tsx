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
    constructor(props) {
        super(props);
        this.state = {
            catalogType: store.getState().catalog.catalogType
        };
        store.subscribe(() => {
            this.setState({
                catalogType: store.getState().catalog.catalogType
            });
        });
    }

    componentWillMount() {
        let name = store.getState().catalog.catalogType;
        console.log('CatalogContent componentWillMount:' + name);
    }

    componentDidUpdate() {
        let name = store.getState().catalog.catalogType;
        console.log('CatalogContent componentDidUpdate:' + name);
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