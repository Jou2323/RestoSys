import React from "react";
import 'antd/dist/antd.css';
import {Modal, Button} from 'antd';
class ProfilePic {

constructor(props){
    super(props);
    this.state = {
        visiable: false
     
    };
}
showModal = () => {
    this.setState({
        visiable: true
    });
};
handleOk = e =>{
    console.log(e);
    this.setState({
        visiable: false
    });
};
handleCancel = e =>{
    console.log(e);
    this.setState({
        visiable:false
    });
};

    render(){
   return(
    
    <div className="ProfilePic">
    <Button type="primary" onClick={this.showModal}>
        Change Photo
    </Button>
    <Modal
     title = "Select Avatar"
     visiable={this.state.visiable}
     onOk= {this.handleOk}
     onCancel = {this.handleCancel}
    >
        <p>text</p>
    </Modal>
    </div>
   );
}
}
export default ProfilePic;
