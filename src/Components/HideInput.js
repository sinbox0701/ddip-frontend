import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
 
const Container = styled.input`
    width: 100%;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    font-weight: 600;
    background-color: ${props => props.theme.blueColor};
    text-align: center;
    padding: 7px 0px;
    font-size: 14px;
`;

const HideInput = ({ value, onClick, type="button"}) => (
<Container 
    value={value}
    onClick={onClick}
    type={type}
/>
);
 
HideInput.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
};
 
export default HideInput;