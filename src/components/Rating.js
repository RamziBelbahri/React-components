import React, {useState} from 'react';
import './Rating.css';

const Rating = (props) => {
    const emptyIcon =  '/icons/stars/empty.svg';
    const filledIcon =  '/icons/stars/filled.svg';
    const halfFilledIcon =  '/icons/stars/half.svg';
    const [value, setValue] = useState(props.value ? props.value : 0);
    let steps = props.steps;

    // Utility function to calculate if the mouse event happened on the left side of the target or the right side.
    const isLessThanHalf = (event) => {
        const {target} = event;
        const boundingClientRect = target.getBoundingClientRect();
        let mouseAt = event.clientX - boundingClientRect.left;
        mouseAt = Math.round(Math.abs(mouseAt));
        console.log(mouseAt <= boundingClientRect.width / 2);
        return mouseAt <= boundingClientRect.width / 2;
    };

    const setStarValue = (starValue) => {
        setValue(starValue);
        console.log(value);
    }

    const onImageSelect = (starValue) => {

        if(starValue === value && isLessThanHalf) {
            return halfFilledIcon;
        }
        if(starValue === value && !isLessThanHalf) {
            return filledIcon;
        }
        if(starValue < value) 
        {
            return filledIcon;
        }
        if(starValue > value ) 
        {
            return emptyIcon;
        }
    }

    const renderSymbol = (starValue) => {
        return (
            <img /*src={(starValue <= value) ? filledIcon : emptyIcon}*/ src={onImageSelect(starValue)}
                 className="rating-image"
                 data-testid="rating-icon"
                 alt="Rate"/>
        )
    }

    return (
        <div className={"flex"}>
        <div
            onClick={() => setStarValue(0)}
            tabIndex="0"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol(0)
            }
        </div>
        <div
            onClick={() => setStarValue(1)}
            tabIndex="1"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol(1)
            }
        </div>
        <div
            onClick={() => setStarValue(2)}
            tabIndex="2"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol(2)
            }
        </div>
        <div
            onClick={() => setStarValue(3)}
            tabIndex="3"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol(3)
            }
        </div>
        <div
            onClick={() => setStarValue(4)}
            tabIndex="4"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol(4)
            }
        </div>
        </div>
    )
};


export default Rating;
