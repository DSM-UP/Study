import React from 'react';

import './styleReciever.css';

function giveStyleInterecter_(props, element) {
    const class_name = props.className;
    
    let props_copied = Object.assign({},props);
    
    props_copied.className = 'style-reciever ' + (element.props.className?element.props.className:' ') + (class_name?class_name:' ');
    return React.cloneElement(element, props_copied, element.props.children);
}
// const giveStyleReciever = (that, element)=>giveStyleInterecter_.bind(that, element)();
const giveStyleReciever = giveStyleInterecter_;
export default giveStyleReciever;