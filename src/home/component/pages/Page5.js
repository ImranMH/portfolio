import React from 'react'
import { bg3 } from '../../../assets/images'
const resumeSection = {
  sectionTitle: 'Resume',
  imageBg: bg3,
  Education: [
    {
      rTitle: 'Education',
      rType: 'SPECIALIZATION COURSE',
      rStudy: 'University of studies, Poland',
      rDate: 'Jan 2004 - Dec 2006',
      rText: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. 
      assumenda recusandae! `,
    },
    {
      rTitle: 'Education',
      rType: 'SPECIALIZATION COURSE',
      rStudy: 'University of studies, Poland',
      rDate: 'Jan 2004 - Dec 2006',
      rText: `Lorem ipsum dolor sit amet,
      consectetur. assumenda sint recusandae! `,
    }
  ],
  Experience: [
    {
      rTitle: 'Experience',
      rType: 'SPECIALIZATION COURSE',
      rStudy: 'University of studies, Poland',
      rDate: 'Jan 2004 - Dec 2006',
      rText: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Minus sint recusandae! `,
    },
    {
      rTitle: 'Experience',
      rType: 'SPECIALIZATION COURSE',
      rStudy: 'University of studies, Poland',
      rDate: 'Jan 2004 - Dec 2006',
      rText: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.  animi as`
    }
  ]
}
export default function Page5({ activeClassName, img }) {
  return (
    <div data-anchor="page5" className={`pp-scrollable text-white section section-5 ${activeClassName}`}>
      <div className="scroll-wrap">
        <div className="section-bg" style={{ backgroundImage: `url(${resumeSection.imageBg})` }}></div>
        <div className="scrollable-content">
          <div className="vertical-centred">
            <div className="boxed boxed-inner">
              <div className="vertical-title hidden-xs hidden-sm"><span>{resumeSection.sectionTitle}</span></div>
              <div className="boxed">
                <div className="container">
                  <div className="intro">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="col-resume">
                          <h6 className="resume-title"> Education </h6>
                          <div className="resume-content">
                            <div className="resume-inner">
                              {resumeSection.Education.map((data, i) =>
                                <ResumeItem key={i} data={data} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-resume">
                          <h6 className="resume-title">Experience</h6>
                          <div className="resume-content">
                            <div className="resume-inner">
                              {resumeSection.Experience.map((data, i) =>
                                <ResumeItem key={i} data={data} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



function ResumeItem({ data }) {
  return (
    <div className="resume-row">
      <h6 className="resume-type">{data.rType}</h6>
      <p className="resume-study">{data.rStudy}</p>
      <p className="resume-date text-primary">{data.rDate}</p>
      <p className="resume-text">{data.rText}</p>
    </div>
  )
}


