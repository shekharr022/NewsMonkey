import React from 'react';

const About = () => {
    return (
        <div className='container pt-5'>
            <h2 className='text-center fw-bold'>Space-Age : Connects you to the new world</h2>

            <section>
                <h3>Overview</h3>
                <p>
                    Our news app is dedicated to providing you with the latest and most relevant news
                    from all around the world. This news app has been built using the MERN stack .
                    Stay informed and explore a diverse range of topics.

                    The MERN stack is a popular choice for developing web applications due to its combination of powerful technologies. MongoDB, a NoSQL database, stores data in flexible JSON documents, making it easy to handle and manipulate data for web applications. Express, a Node.js web application framework, simplifies the creation and management of routes, middleware, and controllers, streamlining web application development. React, a JavaScript library for building user interfaces, enables the creation of dynamic and interactive user experiences. Node.js, a JavaScript runtime environment, allows JavaScript code to be executed outside of a web browser, expanding the capabilities of web applications.

                    The app will prioritize user experience by adopting an intuitive and responsive design. A clean and minimalist layout will guide users effortlessly through the app's functionalities, while intuitive navigation mechanisms will enable seamless exploration of news content.

                    Recognizing the diverse interests of its users, the app will incorporate personalized news curation features. Users can customize their news feeds by selecting preferred categories, and marking articles as relevant or irrelevant. This personalized approach ensures that users receive news tailored to their unique preferences.

                    The proposed news app, meticulously crafted using the MERN stack, will revolutionize the way users consume and manage news from around the globe. Its comprehensive features, intuitive interface, and personalized approach will empower users to stay informed, engaged, and connected in today's rapidly evolving world
                </p>
            </section>

            <section>
                <h3>Key Features</h3>
                <ul>
                    <li>Personalized news feeds</li>
                    <li>Business news feed</li>
                    <li>Entertainment News feed</li>
                    <li>Health News feed</li>
                    <li>Science News feed</li>
                    <li>Sports News feed</li>
                    <li>Technology News feed</li>
                </ul>
            </section>

            <section>
                <h3>Development Team</h3>
                <ul>
                    <li> Anand Kumar</li>
                    <li> Mayank Shekhar</li>
                    <li> Pratham Jaiswal </li>
                </ul>
            </section>
        </div>
    );
};

export default About;
