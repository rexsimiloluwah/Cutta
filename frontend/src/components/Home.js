import React, {useState} from 'react'
import '../App.css'
import {Container, Col, Row} from 'reactstrap'
import NavComponent from './Navbar'
import Footer from './Footer'
import axios from '../utilities/axios'
import Loading from './Loading'
import Output from './Output'

const Home = (props) => {

    const [longUrl, setLongUrl] = useState("")
    const [response, setResponse] = useState("")
    const [showOutput, setShowOutput] = useState(false)
    const [customSlug, setCustomSlug] = useState("")
    const [isCustom, setIsCustom] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const onChangeInput = (e) => {
        setShowOutput(false)
        setLongUrl(e.target.value)
    }

    const onChangeCustomInput = (e) => {
        setCustomSlug(e.target.value)
        setIsCustom(true)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setLoading(true)
        const data = isCustom ? {longUrl : longUrl, customUrl : customSlug} : {longUrl : longUrl}

        axios.post('/api/url/shorten', data)
        .then( (result) => {
            // console.log(result)
            setError(false)
            setResponse(result.data.shortUrl)
            setShowOutput(true)
            setLoading(false)

            // console.log(longUrl)
        })
        .catch( (err) => {
            console.error(err)
            setError(true)
            setLoading(false)
        })

    }
    
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
    <React.Fragment>
       <NavComponent />

       <div id="hero" className="">
        <Container>
        <Row className="">
            <Col md="12">
                <div className="hero-text">
                    <h1 className="text-center">Shorten your URLs in one click <span role="img" aria-label="wink">😉</span> </h1>
                    <svg className="underline" width="8.5625em" height="1.4375em" viewBox="0 0 137 23"><path fill="none" fill-rule="evenodd" stroke="#FFAD0D" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7.842 9.327C51.628.37 93.864-.375 134.548 7.094 71.485 6.547 26.976 2.864 2 20.745c18.198-5.87 67.32-23.752 131.677-3.208"></path></svg>
                    <h2 className="text-center">A powerful link shortener to help foster and simplify your brand !</h2>
                </div>

                <input type="text" name="customslug" placeholder="♡ Enter a Custom URL slug (Optional)" onChange={onChangeCustomInput}/>
                <form action="" method="post" onSubmit = {onSubmit}>
                    <input type="text" name="url" placeholder="Paste long URL here" onChange={onChangeInput} required/>
                    <input type="submit" className="action-btn" value="Shorten →"/>
                </form>

                <p className="hero-terms text-center">*By Clicking Shorten, you agree to Cutta's <a href="/">Terms and Conditions</a></p>
            </Col>
        </Row>
        
        { loading ? <div className = "spinner"><Loading></Loading></div> : 
           <Output longUrl = {longUrl} response = {response} showOutput ={showOutput} error={error}></Output>  
        }
            

        <Row className="icon-boxes">
            <Col md="12" className="col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
                <div class="icon"><i class="bx bx-link bx-lg"></i></div>
                <h4 class="title"><a href="/">Shortened</a></h4>
                <p class="description">Cutta easily shortens long links hence making them easier to remember, share, and track.</p>
            </div>
            </Col>

            <Col md="12" className="col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
                <div class="icon"><i class="bx bx-check-shield bx-lg"></i></div>
                <h4 class="title"><a href="/">Secure and Fast</a></h4>
                <p class="description">Our services are fast and secure with HTTPs protocol, and data encryption. Shortened links are created in one click.</p>
            </div>
            </Col>

            <Col md="12" className="col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
                <div class="icon"><i class="bx bxs-user-check"></i></div>
                <h4 class="title"><a href="/">Reliable and User-friendly</a></h4>
                <p class="description">Our services are very reliable, your links are forever available and are monitored for performance.</p>
            </div>
            </Col>

        </Row>
        </Container>

        <Footer />
        
       <button title="Back to top" className="scroll" onClick={scrollToTop}>
        <i class='arrow-up bx bxs-chevron-up'></i>
        </button> 
       </div>
  

    </React.Fragment>

    )
}


export default Home;