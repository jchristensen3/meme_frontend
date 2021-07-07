import React, {Component} from 'react';
import { Modal, Button } from 'antd';


class ProfilePicChanger extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false,
            imagesArray: [props.pic1, props.pic2, props.pic3, props.pic4, props.pic5, props.pic6]
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
      });
    };
  
    handleOk = () => {
        this.setState({
            visible: false,
        });
      };
  
    handleCancel = () => {
        this.setState({
            visible: false,
        });
      };
    render(){
        const imageMapper = this.state.imagesArray.map((image, index) => {
            return (
                <img src={image}
                    onClick={() => this.props.handleImageChange(image)}
                    height="60px"
                    />
              
            )
          
        })
        return (
            <div className="ProfilePicChanger">
                 <Button type="primary" onClick={this.showModal}>
            Select Image
                </Button>
                    <Modal title="Profile Pic Changer" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                   {imageMapper}
                 </Modal>{" "}
            </div>
        )
    }
}

export default ProfilePicChanger;