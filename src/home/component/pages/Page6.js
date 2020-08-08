import React from 'react'
import { partner1, partner6, partner2, partner3, partner4, partner5, partner8, partner7 } from '../../../assets/images'
const partnerSection = {
    sectionTitle: 'Partners',
    partners: [
        { name: '', img: partner1 },
        { name: '', img: partner2 },
        { name: '', img: partner3 },
        { name: '', img: partner4 },
        { name: '', img: partner5 },
        { name: '', img: partner6 },
        { name: '', img: partner7 },
        { name: '', img: partner8 },
    ]
}
export default function Page6({ activeClassName, img }) {
    return (
        <div data-anchor="page6" className={`pp-scrollable text-white section section-6 ${activeClassName}`}>
            <div className="scroll-wrap">
                <div className="scrollable-content">
                    <div className="vertical-centred">
                        <div className="boxed boxed-inner">
                            <div className="vertical-title text-dark hidden-xs hidden-sm"><span>{partnerSection.sectionTitle}</span></div>
                            <div className="boxed">
                                <div className="container">
                                    <div className="intro overflow-hidden">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row-partners">
                                                    {partnerSection.partners.map((partner, i) => (
                                                        <Partner key={i} partner={partner} />
                                                    ))}
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
const Partner = ({ partner }) => (
    <div className="col-partner">
        <div className="partner-inner"><img alt={partner.name}
            src={partner.img} /></div>
    </div>
)