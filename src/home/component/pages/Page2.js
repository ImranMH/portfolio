import React from 'react'
import { useSpring, animated } from 'react-spring'
const skrillSection = {
    sectionTitle: 'what I do',
    title: 'About me',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
    dicta sit pariatur odio unde deleniti eveniet magni cum, ad iure, vel
    nisi minima vero voluptates ut ipsum amet iusto hic.`
}
const skrills = [
    {
        title: "Fronted Development",
        level: 90,
        minValue: 0,
        maxValue: 100,
        valueNow: 90
    },
    {
        title: "WordPress",
        level: 80,
        minValue: 0,
        maxValue: 100,
        valueNow: 80
    },
    {
        title: "Backend Development",
        level: 80,
        minValue: 0,
        maxValue: 100,
        valueNow: 80
    },
    {
        title: "Design",
        level: 60,
        minValue: 0,
        maxValue: 100,
        valueNow: 60
    }
]

export default function Page2({ activeClassName, img }) {
    const wp = useSpring({
        width: 100, from: { width: 0 }
    })


    const props = useSpring({ width: 500, from: { width: 19 } })

    // if (props) return (<animated.div style={wp}>I will fade in</animated.div>)
    return (
        <div data-anchor="page2" className={`pp-scrollable text-white section section-2 ${activeClassName}`}>
            <div className="scroll-wrap">
                <div className="scrollable-content">
                    <div className="vertical-centred">
                        <div className="boxed boxed-inner">
                            <div className="vertical-title text-dark hidden-xs hidden-sm"><span>{skrillSection.sectionTitle}</span></div>
                            <div className="boxed">
                                <div className="container">
                                    <div className="intro">
                                        <div className="row">
                                            <div className="col-md-5 col-lg-5">
                                                <p className="subtitle-top text-dark">{skrillSection.title}</p>
                                                <h2 className="title-uppercase">My mission is to<br />
                                                    <span className="text-primary">design &amp; develop </span>
                                                        the best Websites around</h2>
                                                {skrillSection.description}
                                            </div>
                                            <div className="col-md-6 col-lg-5 col-md-offset-1 col-lg-offset-2">
                                                <div className="progress-bars">
                                                    {skrills.map(skrill =>
                                                        <Skrill key={skrill.title} skrill={skrill} />
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
    )
}



function Skrill({ skrill }) {
    return (
        <>
            <div className="clearfix">
                <div className="number pull-left">{skrill.title}</div>
                <div className="number pull-right">{skrill.level}%</div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: skrill.level + '%' }}
                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </>
    )
}


