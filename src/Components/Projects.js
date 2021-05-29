import React from 'react';

const Projects = (props) => {
    return (
        <div className="column javascript">
            <div className="content">
                <img src={props.src}
                    alt={props.title} style={{width: '100%'}}/>
                <h4>{props.title}</h4>

            </div>
        </div>
    );
};

export default Projects;