import * as React from 'react';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
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

    getList() {
        debugger
        const arrs = this.state.modelsData? this.state.modelsData : [];
        const list = arrs.map(arr => {
            return <div key={arr.id}>{arr.name}</div>
        });

        return (
            list
        );
    }

    render() {
        const list = this.getList();
        return (
            <div className="catalog-model">
                <PerfectScrollbar>
                    {list}
                </PerfectScrollbar>
            </div>
        );
    }
}