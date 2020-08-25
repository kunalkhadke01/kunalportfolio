import React from 'react'

export const CheckBox = props => {
    return (<div>
        <li>
            <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
        </li>
    </div>
    )
}

export default CheckBox