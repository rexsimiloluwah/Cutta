import React from 'react'
import '../App.css'
import  {Row} from 'reactstrap'

const Output = (props) => {

    const {
        longUrl,
        response, 
        showOutput,
        error
    } = props

    const copyLink = () => {
        const textField = document.createElement('textarea');
        textField.innerText = document.querySelector('.short').innerText;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();

        document.querySelector("#copy").innerText = "Copied ✓"
    }

    if(longUrl.length === 0){
        return(
            <div>
            </div>
        )
    }

    if(error){
        return(
            <div>
                <center style={{color:"crimson", fontWeight:"bold"}}>Invalid URL, Please enter a Valid long URL <span role="img" aria-label="error">😷</span>.</center>
            </div>
        )
    }

    return(

        <>
        
        { showOutput && 

            <div className="shortened shadow">
                        
            <Row>
            <div className="col-md-6 float-left long-link">
                <span>Long URL: -<a href={longUrl} target="blank">{`${longUrl.substr(0,35)}...`}</a></span>
            </div><hr/>

            <div className="col-md-4 float-right short-link">
            <span>Short URL: -<a href= {response.replace("/", "//")} target="blank" className="short">{response}</a></span>
            </div><hr/>

            <div className="col-md-2 float-right copy-link">
                <span><button onClick={copyLink} id = "copy" data-toggle="tooltip" data-placement="left" title="Copy to Clipboard !" className="btn btn-sm btn-success text-white action-btn">Copy <i className="bx bx-copy"></i></button></span>
            </div>

            </Row>
            </div>
        }
        

    </>
    )

}

export default Output;