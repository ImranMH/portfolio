import React from 'react'
import { bg3 } from '../../../assets/images'
const resumeSection = {
  sectionTitle: 'Resume',
  imageBg: bg3,
  Education: [
    {
      rTitle: 'Education',
      rType: 'Masters Degree in Accounting',
      rStudy: 'National University of Bangladesh',
      rDate: ' Mar 20110 - Jan 2012',
      rText: `IsDB-BISEW IT Scholarship Programme`,
    },
    {
      rTitle: 'Education',
      rType: 'SPECIALIZATION COURSE',
      rStudy: 'IsDB-BISEW -12',
      rDate: 'Apr 2012 - Nov 2013',
      rText: `IsDB-BISEW IT Scholarship Programme`,
    },
  ],
  Experience: [
    {
      rTitle: 'Experience',
      rType: 'Web Developer',
      rStudy: 'learnerslab.org',
      rDate: 'Jan 2020 - Currently',
      rText: `Learnslab is a online learning platfrom i working as a web developer  `,
    },
    {
      rTitle: 'Experience',
      rType: 'web hosting company',
      rStudy: 'twilighthost',
      rDate: 'Jan 2004 - Dec 2006',
      rText: `reseller web hosting company`
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
                      <div className="col-md-6 mdn">
                        <div className="col-resume">
                          <h6 className="resume-title"> Education </h6>
                          <div className="resume-content">
                            <div className="resume-inner ">
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


