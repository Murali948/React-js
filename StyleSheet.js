import React from 'react'
import './myStyles.css'

function StyleSheet() {
    // let className = props.primary ? 'primary' : 'mkr'
    return (
        <div>
            <div>
                <div>
                    <h1 className='background'>background</h1>
                </div>
                <h1 className={`className background`}>StyleSheet</h1>
            </div>

        </div>


    )
}

export default StyleSheet
