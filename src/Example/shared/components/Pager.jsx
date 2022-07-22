import React from "react"
import { useSelector, useDispatch  } from "react-redux"

export default function Pager({ area, listAction }) {
    const dispatch = useDispatch();
    const { previous, next } = useSelector(state => state[area].list)

    const handlePrevious = () => {
        dispatch(listAction(previous))
    }

    const handleNext = () => {
        dispatch(listAction(next))
    }

    return (
        <div>
            { previous && <a className="page-button" onClick={handlePrevious}>{'<<<'}</a> }
            { next && <a className="page-button" onClick={handleNext}>{'>>>'}</a> }
        </div>
    )
}