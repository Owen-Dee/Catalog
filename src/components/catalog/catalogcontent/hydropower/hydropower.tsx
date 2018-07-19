import * as React from 'react';
import { ICatalogSidebarProps, ICatalogModelStates} from '../../../../entity/catalogentity';
import './hydropower.scss';

interface IHydropowerProps {

}

interface IHydropowerStates {

}

export default class Hydropower extends React.Component<IHydropowerProps, IHydropowerStates> {
    constructor(props: IHydropowerProps) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="hydropower">
                <div>hi, hydropower</div>
            </div>
        );
    }
}