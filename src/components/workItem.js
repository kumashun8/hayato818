import React from 'react';
import Styles from '../styles/components/workItem.module.scss'
import Image from "../components/image"

class WorkItem extends React.Component {
    render() {
        return (
            <div className={Styles.WorkItem}>
                <h2 className={Styles.WorkItem__title}>{this.props.data.title}</h2>
                <a href={this.props.data.link} target="_blank" className={Styles.WorkItem__image}>
                    <Image filename={this.props.data.image} />
                </a>
                <p className={Styles.WorkItem__text}>{this.props.data.text}</p>
                <a href={this.props.data.link} target="_blank" className={Styles.WorkItem__link}>{this.props.data.linkText}</a>
            </div>
        );
    }
}

export default WorkItem