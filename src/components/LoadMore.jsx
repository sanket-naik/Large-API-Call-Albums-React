import React from 'react'

export default function LoadMore(props) {
    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-info " onClick={props.nextClick}>Load More...</button>
        </div>
    )
}
