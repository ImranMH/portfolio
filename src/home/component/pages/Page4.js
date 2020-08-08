import React from 'react'
import { pPhoto } from '../../../assets/images'
const serviceSection = {
    sectionTitle: 'service',
    photo: pPhoto,
    experience: 4,
    title: 'My services'
}
const serviceList = [
    { title: 'Development', link: '#' },
    { title: 'WordPress', link: "#" },
    { title: 'Design', link: '#' },
    { title: 'Marketing' },
    { title: 'user Authentication' }
]

export default function page4({ activeClassName, img }) {
    return (
        <div data-anchor="page4" className={`pp-scrollable text-white section section-4 ${activeClassName}`}>
            <div className="scroll-wrap">
                <div className="scrollable-content">
                    <div className="vertical-centred">
                        <div className="boxed boxed-inner">
                            <div className="vertical-title text-dark hidden-xs hidden-sm"><span>{serviceSection.sectionTitle}</span></div>
                            <div className="boxed">
                                <div className="container">
                                    <div className="intro">
                                        <div className="row">
                                            <div className="col-md-5 col-lg-5">
                                                <p className="subtitle-top text-dark">{serviceSection.title}</p>
                                                <h2 className="title-uppercase">I like <span className="text-primary">to
                                                      make</span> things easy and fun</h2>
                                                <ul className="service-list">
                                                    {serviceList.map((service, i) => (
                                                        <ServiceList key={i} service={service} i={i} />
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-5 col-md-offset-1 col-lg-offset-2">
                                                <div className="dots-image-2">
                                                    <img alt="" className="img-responsive" src={pPhoto} />
                                                    <div className="dots"></div>
                                                    <div className="experience-info">
                                                        <div className="number">{serviceSection.experience}</div>
                                                        <div className="text">Years<br />Experience<br />Working</div>
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



const ServiceList = ({ service, i }) => <li><a href={service.link}>0{i + 1}. {service.title}</a></li>
