import React, { Component } from 'react';
import s from './Seaction.module.css';
import PropTypes from "prop-types";
class Section extends Component {
    render() {
        const { title , children } = this.props;
        return (
            <section>
                <h2 className={s.title}>{title}</h2>
                {children}
            </section>
        )
    }
}
Section.propTypes = {
    title : PropTypes.string ,
}
export default Section;