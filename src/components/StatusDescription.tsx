import React from 'react';
import { StatusDescriptionPropsType } from './Input/InputContainer.type';
import s from './StatusDescription.module.css'

const StatusDescription = (props: StatusDescriptionPropsType) => {
    return (
        <div className={s.descriptionBlock}>
            {props.status === 'success' && <span data-descr-success={props.message} data-testid={'success'}></span>}
            {props.status === 'error' && <span data-descr-error={props.message} data-testid={'error'}></span>}
        </div>
    );
};

export default StatusDescription;