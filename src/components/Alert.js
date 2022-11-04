import React from 'react'

export default function Alert(props) {
    const capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
        <strong>{capatalize(props.alert.alertType)}</strong> {props.alert.alertMessage}
    </div>
  )
}
