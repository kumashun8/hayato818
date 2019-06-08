import React from "react"
import posed from 'react-pose';
import Styles from '../styles/components/loadImage.module.scss';

const props = {
    visible: {
      opacity: 1,
      y: 0
    },
    hidden: {
      opacity: 1,
      y: '-100%'
    }
  }
  
const Content = posed.div(props);

class LoadImage extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: true
        }
    }

    componentDidMount() {
        this.setState({isVisible: false})
    }

    render() {
        return (
            <div className={Styles.LoadImage}>
                <Content className={Styles.LoadImage__content} pose={this.state.isVisible ? 'visible' : 'hidden'} >
                    <p className={Styles.LoadImage__content__text}>Hello, <br/>World!!</p>
                </Content>
          </div>
        );
    }
}

export default LoadImage
  
