import React from 'react';
import './Rating.css';

const Rating = (props) => {
    const emptyIcon =  '/icons/stars/empty.svg';
    const filledIcon =  '/icons/stars/filled.svg';
    const halfFilledIcon =  '/icons/stars/half.svg';

    // Utility function to calculate if the mouse event happened on the left side of the target or the right side.
    const isLessThanHalf = (event) => {
        const {target} = event;
        const boundingClientRect = target.getBoundingClientRect();
        let mouseAt = event.clientX - boundingClientRect.left;
        mouseAt = Math.round(Math.abs(mouseAt));
        return mouseAt <= boundingClientRect.width / 2;
    };

    const setValue = (value) => {
        for(let i = 0 ; i < value; i++) {
            console.log(i);
        }
    }

    const renderSymbol = () => {
        return (
            <img src={emptyIcon}
                 className="rating-image"
                 data-testid="rating-icon"
                 alt="Rate"/>
        )
    }

    return (
        <div className={"flex"}>
        <div
            onClick={setValue(0)}
            tabIndex="0"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol()
            }
        </div>
        <div
            onClick={setValue(1)}
            tabIndex="1"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol()
            }
        </div>
        <div
            onClick={setValue(2)}
            tabIndex="2"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol()
            }
        </div>
        <div
            onClick={setValue(3)}
            tabIndex="3"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol()
            }
        </div>
        <div
            onClick={setValue(4)}
            tabIndex="4"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol()
            }
        </div>
        </div>
    )
};


export default Rating;
