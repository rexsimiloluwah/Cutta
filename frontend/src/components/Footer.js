import React from 'react'
import '../App.css'

const FooterDiv = () => {
    return(
        <React.Fragment>
        <div className = "footer">
            <p> &copy; {new Date().getFullYear()} CUTTA <button className="btn btn-sm btn-warning">URL Shortener</button> - Designed and Maintained by Mosimileoluwa</p>
            <hr></hr>

            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/similoluwa-okunowo-595787179/" target="blank"><i className="bx bxl-linkedin"></i></a>
                <a href="https://medium.com/@rexsimiloluwa" target="blank"><i className="bx bxl-medium"></i></a>
                <a href="https://twitter.com/Rexidic" target="blank"><i className="bx bxl-twitter"></i></a>
                <a href="https://twitter.com/Rexidic"><i className="bx bx-mail-send"></i></a>
            </div>

        </div>
        </React.Fragment>
    )
}


export default FooterDiv