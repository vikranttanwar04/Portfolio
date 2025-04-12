// import { useState } from 'react';
import Footer from '../Footer/Footer';
import './contact.css';
import vikrantResume from "/src/assets/Vikrant Tanwar Resume.pdf"


export default function Contact(){

    // const [alert, setAlert] = useState(false);
    // const [formData, setFormData] = useState({
    //     user: "",
    //     email: "",
    //     msg: ""
    // })

    // let [store, setStore] = useState([]);

    // function inputController(event){
    //     let fieldName = event.target.name;
    //     let fieldValue = event.target.value;
    //     setFormData((prevState) =>{
    //         return {...prevState, [fieldName] : fieldValue};
    //     })
    // }
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setStore((prevState) =>{
    //         return [...prevState, formData]
    //     })
    //     setFormData({
    //         user: "",
    //         email: "",
    //         msg: ""
    //     })
    //     setAlert(true);
    // }

    // setTimeout(() => {
    //     setAlert(false);
    // }, "5000");

    return(
        <div id='contact-body'>
            <header className='mb-4'>
                <h3 className='text-light'>Contact</h3>
                <a className='text-light' href="https://www.linkedin.com/in/vikranttanwarrajput">Connect on Linkedin</a>
            </header>

            {/* {(() =>{
                if(alert) {
                    return(
                        <div className='alert-box mb-2'>
                            <p className="m-0">Message has been sent.</p>
                        </div>
                    )
                }
            })()} */}

            <div>
                <h2 className='text-light text-center'>Get in touch.</h2>
                <form method="POST" action='https://formsubmit.co/vikranttanwar124108@gmail.com' >
                    <div className='row input-boxes'>
                        <input className="p-2 me-1 mb-2 col-2 offset-4" type="text" placeholder="Name" name="user" required/>
                        <input className="p-2 mb-2 col-2" type="email" placeholder="Email" name="email" required/>
                    </div>

                    <div className='msg-box row'>
                        <textarea className="p-2 mb-2 col-4 offset-4" rows="5" cols="44" placeholder="Message" name="msg" required/><br />
                    </div>
                    <div className='row'>
                        <input type="hidden" name="_next" value="https://portfolio-q79b.onrender.com/contact" />
                        <button type="Submit" className='send-btn p-2 col-4 offset-4' name='_captcha' value="false" >Send</button>
                    </div>
                </form>
            </div>

{/*             <Footer title="Resume" about="Read about my full story in the resume." btnText="Dowload Resume" link={vikrantResume} /> */}
            <footer className="mt-4">
                <div className="content">
                    <h2>Resume</h2>
                    <p className="text-secondary">Read aout my full story in the resume.</p>
                    <a className="resume-button" href={vikrantResume}> Dowload Resume </a>
                </div>
              </footer>
        </div>
    )
}
