import React from 'react'
import { bg1 } from '../../../assets/images'
const homeSection = {
    imageBg: '',
    sectionTitle: 'Introduce',
    businessName: 'Jonny Design Studio',
    author: ' I am Imran.'
}
export default function Page1({ activeClassName, img }) {
    return (
        <div data-anchor="page1" className={`pp-scrollable text-white section section-3 ${activeClassName}`}>
            <div className="scroll-wrap">
                <div className="section-bg" style={{ backgroundImage: `url(${bg1})` }}></div>
                <div className="scrollable-content">
                    <div className="vertical-centred">
                        <div className="boxed boxed-inner">
                            <div className="vertical-title hidden-xs hidden-sm"><span>{homeSection.sectionTitle}</span></div>
                            <div className="boxed">
                                <div className="container">
                                    <div className="intro">
                                        <div className="row">
                                            <div className="col-md-8 col-lg-6">
                                                <p className="subtitle-top">Welcome To<br />{homeSection.businessName}</p>
                                                <h1 className="display-2 text-white"><span className="text-primary">Hello </span>
                                                    {homeSection.author}</h1>
                                                <div className="hr-bottom"></div>
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
