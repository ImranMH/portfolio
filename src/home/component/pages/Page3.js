import React, { useState } from 'react'
import classnames from 'classnames'
import { bg3a, bg3b, bg3c, bg3d, bg3f } from '../../../assets/images'
const projectSection = {
    sectionTitle: 'my works',
    title: 'Featured works',
    bg: {
        bg3a: bg3a,
        bg3b: bg3b,
        bg3c: bg3c,
        bg3d: bg3d,
        bg3f: bg3f
    },
    otherProject: {
        title: 'view all project',
        link: '#'
    }

}
const projects = [
    { id: 1, title: 'UCAM Minimalist Apartment', category: 'front-end Design', link: '#' },
    { id: 2, title: 'Scadinavan Living Room', category: 'Wordpress', link: '#' },
    { id: 3, title: 'Office For Fashion Brand Store', category: 'front-end Design', link: '#' },
    { id: 4, title: 'Rennovate Toilet', category: 'Nodejs', link: '#' }
]
export default function ({ activeClassName, img }) {
    const [currentId, setId] = useState(3)

    const handleMoseOver = (e) => {
        setId(e.target.id)
    }
    return (
        <div data-anchor="page3" className={`pp-scrollable text-white section section-3 ${activeClassName}`}>
            <div className="scroll-wrap">
                <div className="bg-changer">
                    <div className={classnames("section-bg", { active: currentId === '1' })} style={{ backgroundImage: `url(${projectSection.bg.bg3a})` }}></div>
                    <div className={classnames("section-bg", { active: currentId === '2' })} style={{ backgroundImage: `url(${projectSection.bg.bg3b})` }}></div>
                    <div className={classnames("section-bg", { active: currentId === '3' })} style={{ backgroundImage: `url(${projectSection.bg.bg3c})` }}></div>
                    <div className={classnames("section-bg", { active: currentId === '4' })} style={{ backgroundImage: `url(${projectSection.bg.bg3c})` }}></div>
                    <div className={classnames("section-bg", { active: currentId === '2' })} style={{ backgroundImage: `url(${projectSection.bg.bg3d})` }}></div>
                    <div className={classnames("section-bg", { active: currentId === '1' })} style={{ backgroundImage: `url(${projectSection.bg.bg3f})` }}></div>
                </div>
                <div className="scrollable-content">
                    <div className="vertical-centred">
                        <div className="boxed boxed-inner">
                            <div className="vertical-title hidden-xs hidden-sm"><span>{projectSection.sectionTitle}</span></div>
                            <div className="boxed">
                                <div className="container">
                                    <div className="intro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className="title-uppercase text-white">{projectSection.title}</h2>
                                                <div className="row-project-box row">
                                                    {projects.map(project => (
                                                        <Project key={project.id} project={project} mouseOverProject={handleMoseOver} />
                                                    ))}
                                                </div>
                                                <a href={projectSection.otherProject.link} className="h5 link-arrow text-white">{projectSection.otherProject.title}<i
                                                    className="icon fa fa-chevron-right" aria-hidden="true"></i></a>
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

const Project = ({ project, mouseOverProject }) => (
    <div className="col-project-box col-sm-6 col-md-3 col-lg-3">
        <a href={project.link} className="project-box">
            <div id={project.id} onMouseOver={mouseOverProject} className="project-box-inner">
                <h5>{project.title}</h5>
                <div className="project-category">{project.category}</div>
            </div>
        </a>
    </div>
)