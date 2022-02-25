import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as PhonesStore from '../store/Phones';
import { PhoneDetail } from './PhoneDetail'
import { Button, Modal, Spinner } from 'react-bootstrap';
import { Backdrop, CircularProgress } from '@mui/material';

type PhonesProps = PhonesStore.PhonesState & typeof PhonesStore.actionCreators & RouteComponentProps<{ loadType: string }>;

class Phones extends React.PureComponent<PhonesProps, { show: boolean}> {

    public phoneDetail: any;

    constructor(props: PhonesProps) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.refreshData = this.refreshData.bind(this);
    }

    public componentDidMount() {
        this.loadPhoneList('initial');
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">Phone List</h1>
                <div>
                    {this.renderSpinning()}
                </div>
                {this.renderPhoneListTable()}
                {this.modalRender()}
            </React.Fragment>
        );
    }

    public refreshData() {
        this.loadPhoneList('refresh');
    }
    public loadPhoneList(loadType:string) {
        this.props.requestPhones(loadType);
    }

    public fetchDetails(phoneDetail?: any) {   
        if (phoneDetail) {
            this.setState({ show: true });
            this.phoneDetail = phoneDetail;
        }
    }

    private renderPhoneListTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.phones.map((phoneData: PhonesStore.Phones) =>
                        <tr key={phoneData.id} onClick={() => this.fetchDetails(phoneData)}>
                            <td>{phoneData.title}</td>
                            <td>{phoneData.color}</td>
                            <td>{phoneData.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    public renderSpinning() {
        return (
            <>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={this.props.isLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
         </>
     );
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    public modalRender(phoneDetail?: any) {
        return (
            <React.Fragment>
                <Button variant="primary" onClick={this.refreshData}>
                   Refresh
                </Button>

                <Modal show={this.state.show}
                    onHide={this.hideModal}
                    backdrop="static"
                    keyboard={false} >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.phoneDetail? this.phoneDetail.title : ''}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PhoneDetail key={this.phoneDetail} data={this.phoneDetail}></PhoneDetail>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hideModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.phones,
    PhonesStore.actionCreators 
)(Phones as any); 