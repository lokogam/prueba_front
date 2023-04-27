import React, { useState } from 'react';

function Slides({dataSlides}) {
    
    // console.log(dataSlides);

    const [counter, setCounter] = useState(0)

    const handleNextClick  =()=>{
        if (counter < dataSlides.length -1) {
            setCounter(counter+1)
        }
    }

    const handleBackClick =()=>{
        if (counter != 0) {
            setCounter(counter-1)
        }
    }

    const handleRestartClick  =()=>{
        console.log('next');
        setCounter(0)
    }

    return (
        <div className='content_slides'>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={handleRestartClick }>Reiniciar</button>
                <button data-testid="button-prev" className="small" onClick={handleBackClick}>Ant.</button>
                <button data-testid="button-next" className="small"  onClick={handleNextClick}>Sig.</button>
            </div>

            <div id="slide" className="card text-center card2">
                <h1 data-testid="title">{dataSlides[counter].title}</h1>
                <p data-testid="text">{dataSlides[counter].text}</p>
            </div>
        </div>
    );

}

export default Slides;
