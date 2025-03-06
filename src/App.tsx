import './App.css';
import React, { useEffect, useState } from "react";
import {
    education,
    profileText,
    projects,
    workExperiences,
    WorkItem,
} from './data';

interface GridProps {
    children: React.ReactNode;
    className?: string;
}
const Grid = ({children, className}: GridProps) => (
    <div className={"grid grid-cols-14 " + className}>{children}</div>
);

const Header = ({title}: {title: string}) => (
    <div className="header">{title}</div>
);

const Tag = ({children}: {children: React.ReactNode}) => (
    <span className="tag">{children}</span>
);

const Points = ({points}: {points?: string[]}) => {
    if ( ! points) {
        return null;
    }
    const className = "point " + (points.length > 1 ? "multiple" : "");
    const prefix = points.length > 1 ? "- " : "";
    return (
        <div>
            {points.map((p) => (<div key={p} className={className}>{prefix}{p}</div>))}
        </div>
    );
};

interface TagsProps {
    place: string;
    tags?: string[];
}
const Tags = ({place, tags}: TagsProps) => {
    if ( ! tags) {
        return null;
    }
    return (
        <div className="tags">{tags.map((t) => (<Tag key={place + t}>{t}</Tag>))}</div>
    );
};

interface TitleProps {
    time: string;
    title: string;
}
const Title = ({time, title}: TitleProps) => (
    <Grid>
        <div className="time-title time col-span-2">{time}</div>
        <div className="time-title col-span-12">{title}</div>
    </Grid>
);

const Right = ({children}: {children?: React.ReactNode}) => (
    <Grid>
        <div className="col-span-12 col-start-3">{children}</div>
    </Grid>
);

const Place = ({place}: {place: string}) => (
    <Grid className="place-grid">
        <div className="workplace col-span-8 col-start-3">
            <span className="place">{place}</span>
        </div>
    </Grid>
);

const Work = ({work}: {work: WorkItem}) => (
    <div className="grid work-grid">
        <Place place={work.place} />
        <div>
            {work.titles && work.titles.map(({title, time}) => (<Title key={time + title} time={time} title={title} />))}
            <Right>
                <Tags tags={work.tags} place={work.place} />
                <Points points={work.points} />
            </Right>
        </div>
    </div>
);

interface IconProps {
    i: string;
    hidden?: boolean;
}
const Icon = ({i, hidden}: IconProps) => (
    <i className={"bi-" + i + (hidden ? " transparent" : "")} />
);

const Contact = () => (
    <div className="flex justify-between">
            <div className="side-by-side">
                <div className="contact">
                    <Icon i="envelope" /> peter@pjot.se
                    <br />
                    <Icon i="github" /> github.com/pjot
                    <br />
                    <Icon i="calendar3" /> 1986-02-25
                </div>
            </div>
            <div className="side-by-side">
                <div className="name">Peter Bergström</div>
            </div>
            <div className="side-by-side">
                <div className="contact right">
                    +46734241486 <Icon i="telephone" />
                    <br />
                    Nysätravägen 40B <Icon i="mailbox" />
                    <br />
                    131 33 Nacka <Icon i="mailbox" hidden={true} />
                </div>
            </div>
    </div>
);

const Selfie = () => (
    <div className="col-span-2 avatar">
        <img alt="selfie" src="/peter.png" />
    </div>
);

const Paragraph = ({children}: {children: React.ReactNode}) => (
    <div className="paragraph col-span-12 col-start-3">{children}</div>
)

const App = () => {
    const [print, setPrint] = useState(false);

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "b") {
                const newValue = !print;
                const bodyTag = document.querySelector("body");
                setPrint(newValue);

                if (bodyTag) {
                    bodyTag.className = newValue ? "print" : "";
                }
            }
        };
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("keydown", handleKey);
        };
    });

    return (
        <div className="grid place-items-center">
            {!print && (
                <div className="link">
                    <Icon i="download" /> <a href="/peter-cv.pdf">Download PDF</a>
                </div>
            )}

            <div className={"main" + (print ? " print" : "")}>
                {!print && (<div className="overlay" />)}
                <div className="page">
                    <Contact />

                    <Header title="About me" />
                    <Grid>
                        <Selfie />
                        <Paragraph>{profileText.map((t) => (<p key={t}>{t}</p>))}</Paragraph>
                    </Grid>

                    <Header title="Work Experience" />
                    <div>{workExperiences.map((e) => (<Work key={e.place} work={e} />))}</div>

                    <Header title="Education" />
                    <div><Work work={education} /></div>

                    <Header title="Notable personal projects" />
                    <div>{projects.map((e) => (<Work key={e.place} work={e} />))}</div>
                </div>
            </div>
        </div>
    );
}

export default App;