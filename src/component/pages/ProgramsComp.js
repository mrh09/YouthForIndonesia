import React from 'react';
import healthy from '../../img/healthy.png';
import education from '../../img/education.png'
import './ProgramsComp.css';

function ProgramsComp() {
    return (
        <>
            <h1>OUR PROGRAMS</h1>
            <div className="programs">
                <div className="programs-container container">
                    <div className="program-row row">
                        <div className="program-col col">
                            <div className="card">
                                <div className="card-container">
                                    <h3><b>EDUCATION</b></h3>
                                    <img className="card-img" src={education} alt="education" />
                                    <p>Youth for Indonesia involves Indonesian volunteers
                                        to evolve education aspect for remote society
                                        based on the education standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="program-col col">
                            <div className="card">
                                <div className="card-container">
                                    <h3><b>HEALTHY</b></h3>
                                    <img className="card-img" src={healthy} alt="healthy" />
                                    <p>This organization does not limit in one aspect only,
                                        but also works on encouraging the health growth for
                                        better society specifically who lives in area
                                        that cannot be reached by the government
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgramsComp;