import React from 'react';
import Loader from 'react-loader-spinner';
import '../App.css';

const Loading = (props) => {

    return(
        <div className ="loading-spinner">
            <Loader type="ThreeDots" color="#006a4e"></Loader>
        </div>
        
    )

}

export default Loading;