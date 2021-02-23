import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loading = () => {
    return (
        <div className="loading-spinner">
            <Spinner animation="grow" />
        </div>
    )
}
