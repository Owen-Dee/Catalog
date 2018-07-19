import * as React from 'react';
import { ICatalogSidebarProps, ICatalogModelStates } from '../../../../entity/catalogentity';
import './globalsearchmaterial.scss';

interface IGlobalSearchMaterialProps {

}

interface IGlobalSearchMaterialStates {

}

export default class Hydropower extends React.Component<IGlobalSearchMaterialProps, IGlobalSearchMaterialStates> {
    constructor(props: IGlobalSearchMaterialProps) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="global-search-material">
                <div>hi, global search</div>
            </div>
        );
    }
}