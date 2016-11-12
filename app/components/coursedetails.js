import React from 'react';


export default class CourseDetails extends React.Component{
  render(){
    return(
      <div className = "container">
        <div className = "row">
          <div className = "col-md-10 col-md-offset-1">
            <div className = "panel">
              <div className = "panel-heading">
                <div className = "media">
                  <div className = "media-body">
                    <h1>
                      <strong>CS 326:</strong> Web Programming
                    </h1>
                    <h4>
                      <strong>Status:</strong> Eligible
                    </h4>
                  </div>
                  <div className = "media-right media-middle">
                    <img className = "media-object" src = "img/CS326.png" alt="CS326" />
                  </div>
                </div>
              </div>
              <hr />
              <div className = "panel-body">
                <h3>Description</h3>
                <p>The World Wide Web was proposed originally as a collection of static documents inter-connected by hyperlinks. Today, the web has grown into a rich platform, built on a variety of protocols, standards, and programming languages, that aims to replace many of the services traditionally provided by a desktop operating system. Topics will include: producing dynamic content using a server-based language, content serving databases and XML documents, session state management, multi-tier web-based architectures, web security, and core technologies including HTTP, HTML5, CSS, JavaScript, and SQL will be emphasized. This course will also study concepts and technologies including AJAX, social networking, mashups, JavaScript libraries (e.g., jQuery), and web security. This course is hands-on and project-based; students will construct a substantial dynamic web application based on the concepts, technologies, and techniques presented during lecture. This course satisfies the IE Requirement. You must be a junior or senior to take this course. 3 credits.</p>
                <h3>Textbooks</h3>
                <p>This course does not require any books. Because of the ever changing nature of the web we will instead rely upon currently material that is freely available on the web including software documentation, blog posts, tutorials, etc. Links to the reading will be providing on a weekly basis.</p>
                <h3>Prerequisits</h3>
                <p>Must be a Junior or Senior</p>
                <br />
                <hr />
                <div className = "col-md-3">
                  <h4>Similar classes...</h4>
                  <p>Here are some other classes you might be interested in taking.</p>
                </div>
                <div className = "col-md-3 suggested">
                  <button type = "button" className = "btn btn-default">
                    <img className = "center-block" src = "img/CS326.png" alt="CS326" />
                    Web Programming
                  </button>
                </div>
                <div className = "col-md-3 suggested">
                  <button type = "button" className = "btn btn-default">
                    <img className = "center-block" src = "img/CS326.png" alt="CS326" />
                    Web Programming
                  </button>
                </div>
                <div className = "col-md-3 suggested">
                  <button type = "button" className = "btn btn-default">
                    <img className = "center-block" src = "img/CS326.png" alt="CS326" />
                    Web Programming
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
