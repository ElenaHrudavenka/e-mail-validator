import React from 'react';
import s from './StatusDescription.module.css'

type StatusDescriptionProps = {
    message: string,
    status: string,
}

const StatusDescription = (props: StatusDescriptionProps) => {
    return (
        <div className={s.descriptionBlock}>
            {props.status === 'success' && <span data-descr-success={props.message}></span>}
            {props.status === 'error' && <span data-descr-error={props.message}></span>}
        </div>
    );
};

export default StatusDescription;