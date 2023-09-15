import React from 'react'
import NavbarDesign from '../Navbar/Navbar'
import Carouselimg from '../carousel/Carouselimg'


function Home() {
    return (
        <div>
            <header>
                <NavbarDesign />
            </header>

            <section className='section2'>
                <Carouselimg />
            </section>

            <section className='namskar'>
                <h1>नमस्कार मित्रों!</h1>
                <div className='hr' />
                <div className='hr1' />
                <p className='namskar-text'>
                    "ऑनलाइन फार्म आवेदन केन्द्र (साइवर कैफे) आपके घर से काफी दूर है या आपको आने जाने में परेशानी हो रही है
                    या कोई योग्य साइवर कैफे वाला आपके आस पास नहीं है या अगर आप अपनी जिंदगी में बहुत व्यस्त हैं तो आप निश्चित हो जाइए।"
                </p>
            </section>

            <section className='timeSaving'>

                <div>
                    <img className="img1" src='https://c8.alamy.com/comp/HPF5C6/save-your-time-modern-line-style-illustration-with-hand-drawn-elements-HPF5C6.jpg' alt='' />
                </div>

                <div>
                    <h2 className='namskar'>समय बचायें और घर पर रहें</h2>
                    <div className='hr3' />

                    <p className='text'>
                        अब आप घर बैठे अपना महत्वपूर्ण समय बचाकर, भीड़-भाड़ से मुक्त हो कर, किसी भी प्रकार की सरकारी
                        या प्राइवेट जॉब आवेदन की सुविधा के लिए हम से सम्पर्क करें। आप बेफिक्र हो कर 100 प्रतिशत यकीन के साथ हम से संपर्क कर सकते हैं।
                    </p>
                </div>
            </section>


            {/* 
            <section>
                <h2 className='namskar'>हमारे द्वारा दी जाने वाली सेवाएं</h2>
                <div className='hr'/>
                <div className='hr1' />
            </section>

            <section className='section3'>
                
                <div className='card'>
                    <img className='thumbnel' src='https://img.freepik.com/premium-vector/apply-now-button-with-hand-cursor-click-button-apply-action-button-flat-design_349999-291.jpg?size=626&ext=jpg&ga=GA1.2.572943234.1694457679&semt=ais' alt=''/>
                    <p className='surv'>
                    सभी प्रकार की सरकारी जॉब के लिए आवेदन करें,EXAM पेपर टाइप करवाये, घर बैठे हिन्दी में लेटर टाइप करवाये। सभी प्रकार के हिन्दी जॉब वर्क के लिए सम्पर्क करें।
                    </p>
                
                </div>

                <div className='card'>
                    <img className='thumbnel' src='https://img.freepik.com/premium-vector/apply-now-button-with-hand-cursor-click-button-apply-action-button-flat-design_349999-291.jpg?size=626&ext=jpg&ga=GA1.2.572943234.1694457679&semt=ais' alt=''/>
                </div>

                <div className='card'>
                    <img className='thumbnel' src='https://img.freepik.com/premium-vector/apply-now-button-with-hand-cursor-click-button-apply-action-button-flat-design_349999-291.jpg?size=626&ext=jpg&ga=GA1.2.572943234.1694457679&semt=ais'alt=''/>
                </div>
            </section> */}


            <section style={{ backgroundColor: 'skyblue', height: '20%', paddingTop: '40px' }} className='ram_img'>
                <div>
                    <img className='ram' src="data:image/jpeg;base64,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" alt="" />
                    <figcaption style={{backgroundColor:'red' , color:'yellow'}}>CEO</figcaption>
                </div>

                <div className='about_ram'>
                    <p>
                        Welcome to Ramesh Kushwaha's Tech Internet Cafe, Ramesh Kushwaha, a highly dedicated and hardworking individual, proudly presents a unique blend of his passion for technology and his commitment to providing an exceptional cafe experience.

                        Ramesh holds a Bachelor's degree in Computer Science and Engineering, achieving an outstanding 80% in 2023. His academic excellence reflects his deep-rooted knowledge and expertise in the tech world. His vision for this internet cafe is to create a haven for tech enthusiasts, students, and professionals alike.

                        Ramesh is not just a host; he's your tech companion, always ready to assist and engage in insightful tech discussions.

                        Whether you're here to work on projects, study, or simply indulge in your love for technology, Ramesh's cafe is the place to be. Join us in this tech-driven journey and experience innovation with a warm smile. We look forward to welcoming you to our tech-savvy haven.
                    </p>
                </div>
            </section>

            <section>
                
                <p> <span>Note*</span> 
                
                    <ul>The data that is shared by you is naver shared by any third party,
                        so can feel free to share your data that is necessary for yor application.</ul>
                        <ul>Before submitting your application form at my side your confirmation is necessary.</ul>
            
                </p>
            </section>
           
             <footer className='footer'>
                    <div>
                        <h3>About</h3>
                    </div>

                    <div>
                        <h3>Categories</h3>
                        <diV className="footer_item">
                            <ul>Income Certificate</ul>
                            <ul>Cast Certificate</ul>
                            <ul>Domicial Certificate</ul>
                            <ul>Latest Jobs</ul>
                            <ul>Admit Card</ul>
                            <ul>etc</ul>
                        </diV>
                    </div>

                    <div>
                        <h3>Contacts</h3>
                    </div>
            </footer>
        </div>
    )
}

export default Home