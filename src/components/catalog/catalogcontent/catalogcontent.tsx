import * as React from 'react';
import store from '../../../store/index';
import './catalogcontent.scss';

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
        let name = store.getState().demo.languageName;
        console.log(name);
    }

    render() {
        return (
            <div className="catalog-content">
                {this.state.catalogType}
            </div>
        );
    }
}