import React, {useEffect, useState, useRef} from 'react'
import './text.css'

export const Text = () => {

    const [ words, setWords ] = useState (['Looking for an University Lecturer? Try searching our registered DosenKu members. If they arent registered, invite them here!', 'Let your students know how to find you Register your DosenKu profile to showcase your works and contacts'])

    const wrapperRef = useRef()

    const handleAnimate = () => {
        setTimeout(() => {
            const copyWords = [ ...words ];
            const firstElem = copyWords.splice(1)
            wrapperRef.current.style.transition = 'none';
            wrapperRef.current.style.top = '0px'
            setWords([ ...firstElem.concat(copyWords) ])
        },3000)

        wrapperRef.current.style.transition = '0.5s';
    }

    useEffect(() => {
        setTimeout(() => {
          handleAnimate()
        }, 2000);
      })

  return (
    <div className="text-container">
      <div ref={wrapperRef} className='words'>
        <h1 className='text-word'>{words[0]}</h1>
        <h1 className='text-word'>{words[1]}</h1>
      </div>
    </div>
    
  )
}

export default Text