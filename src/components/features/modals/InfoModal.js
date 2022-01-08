import { React, Component } from 'react';

class InfoModal extends Component {

  componentDidMount() {
    this.infoModal = document.getElementById('infoModal');
    this.infoMessage = document.getElementById('infoMessage');

    if (this.props.position === 'left') this.infoModal.style.left = '2vh';
    if (this.props.position === 'right') this.infoModal.style.right = '2vh';
    this.handleCheckActive();
  }
  componentDidUpdate() {
    this.infoMessage.textContent = this.props.message;
    this.handleCheckActive();
  }
  handleCheckActive = () => {
    if (this.props.visible) this.infoModal.classList.add('active-modal');
    else this.infoModal.classList.remove('active-modal');
  }
  render() {
    return (
      <div className="info-modal" id="infoModal">
        <i className="fa fa-info-circle"></i> <span id="infoMessage">{this.props.vissible ? this.infoMessage : null} </span>
      </div>
    );
  }
}

export default InfoModal;