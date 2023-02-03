import React from 'react'
import classNames from 'classnames';

const Button = ({text, variant="default"}) => {
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center rounded-full" : true,
            "bg-slate-200" : variant === "default",
            "bg-green-200" : variant === "success",
            "bg-red-200" : variant === "danger",
            "bg-purple-200" : variant === "warning",
        })}>{text} - {variant}</button>
    )
}

export default Button