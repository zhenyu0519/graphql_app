import React from 'react'

export default function MissionKey(props) {
    if (props.type === 'launch') {
        return (
            <div className="my-3">
                <p>
                    <span className="px-3 mr-2 bg-success" /> = Success
            </p>
                <p>
                    <span className="px-3 mr-2 bg-danger" /> = Fail
            </p>
            </div>
        )
    }

    if (props.type === 'rocket') {
        return (
            <div className="my-3">
                <p>
                    <span className="px-3 mr-2 bg-success" /> = Active
            </p>
                <p>
                    <span className="px-3 mr-2 bg-danger" /> = Inactive
            </p>
            </div>
        )
    }

}
