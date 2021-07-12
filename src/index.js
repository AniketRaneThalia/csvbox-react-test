import React, { Component } from 'react';
import styles from './styles.module.css'

export class CsvboxButton extends Component {

  constructor(props) {
    super(props)
    this.holder = React.createRef();
    this.iframe = React.createRef();
    this.openModal = this.openModal.bind(this)
    this.isModalShown = false;
  }

  componentDidMount() {
    const { onData } = this.props;
    const {user} = this.props;
    window.addEventListener("message", (event) => {
      if (event.data === "mainModalHidden") {
          this.holder.current.style.display = 'none';
          this.holder.current.querySelector('iframe').src = this.holder.current.querySelector('iframe').src;
          this.isModalShown = false;
      }
      if(event.data === "uploadSuccessful") {
        onData(true);
      }
      if(event.data === "uploadFailed") {
        onData(false);
      }
      if(typeof event.data == "object") {
          if(event.data.type && event.data.type == "data-push-status") {
              if(event.data.data.import_status = "success"){
                onData(true, event.data.data);
              }else {
                onData(false, event.data.data);
              }

          }
      }
    }, false);
    let iframe = this.iframe.current;
    iframe.onload = function () {
      if(user){
        iframe.contentWindow.postMessage({
          "customer" : user
        }, "*");
      }
    }
  }
  openModal() {
    if(!this.isModalShown) {
      this.isModalShown = true;
      this.iframe.current.contentWindow.postMessage('openModal', '*');
      this.holder.current.style.display = 'block';
    }
  }
  render() {
    const { slug } = this.props;
    let iframeSrc = "https://staging.csvbox.io/embed/" + slug;
    return (
      <div>
        <button onClick={this.openModal}>Hello</button>
        <div ref={this.holder} className={styles.holder} style={{ display: 'none' }}>
          <iframe ref={this.iframe} className={styles.iframe} src={ iframeSrc } frameBorder="0" ></iframe>
        </div>
      </div>
    )
  }
}

export default CsvboxButton;
