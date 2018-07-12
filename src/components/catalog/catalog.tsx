import * as React from 'react';
import CatalogSidebar from './catalogsidebar/catalogsidebar';
import CatalogContent from './catalogcontent/catalogcontent';
import './catalog.scss';

export default class Catalog extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="catalog-container">
                <CatalogSidebar></CatalogSidebar>
                <CatalogContent></CatalogContent>
            </div>
        );
    }
}