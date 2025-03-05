import './App.css';
import { useEffect, useState } from "react";

const data = {
    work_experiences: [
        {
            workplace: "TriOptima / OSTTRA",
            titles: [
                {title: "Team Lead", time: "Sep 2018 -"},
                {title: "Software Engineer", time: "Jun 2016 - Sep 2018"},
            ],
            tags: [
                "python", "typescript", "golang",
                "fastapi", "flask", "react", "nextjs",
                "mysql", "cassandra", "rabbitmq", "redis", "docker", "kubernetes", "git",
                "microservices", "ci/cd", "rest",
            ],
            points: [
                "Developed and maintained a web-based application that calculates various measures on OTC derivative contracts",
                "Managed a team of 5-8 developers",
                "Migrated the application to Docker and Kubernetes to run in a private cloud environment",
                "Improved the CI/CD pipeline which moved us from 1-2 deploys to production per month to 2-3 per day",
                "Introduced new technologies such as React, Next.js, fastapi",
                "Implemented on-call rotations for the developers",
                "Organised events such as Advent of Code and IGE day"
            ],
        },
        {
            workplace: "FEO Media",
            titles: [{title: "Software Engineer", time: "Oct 2015 - Jun 2016"}],
            tags: [
                "python", "javascript", "webapp2", "angular", "react", "google app engine", "rest", "git"],
            points: [
                "Developed the backend for the new mobile game Crozzles",
                "Maintained the existing backends, for example Quizkampen",
            ],
        },
        {
            workplace: "Eniro",
            titles: [
                {title: "Tech Lead", time: "Jun 2014 - Oct 2015"},
                {title: "Software Engineer (consultant through Redpill Linpro)", time: "Dec 2011 - Jun 2014"},
            ],
            tags: [
                "php", "python", "javascript", "mysql", "activemq", "rest", "svn", "git", "ssh",
            ],
            points: [
                "Managed and developed the SugarCRM instance at Eniro",
                "Recruited and managed a team of 4 developers in Poland",
                "Responsible for the CRM system and the billing platform Aria",
                "Worked in a team spanning Sweden, Denmark, Norway and Poland",
            ],
        },
        {
            workplace: "Lendo / Schibstedt",
            titles: [
                {title: "Software Engineer", time: "Oct 2011 - Dec 2011"},
            ],
            tags: ["php", "mysql", "zend framework", "macos", "mercurial"],
            points: [
                "Developed the admin interface for lendo.se and suredo.se",
            ],
        },
        {
            workplace: "Produktion 203",
            titles: [
                {title: "Software Engineer", time: "Nov 2010 - Oct 2011"},
            ],
            tags: ["php", "javacript", "mysql", "codeigniter", "svn", "ssh", "linux"],
            points: [
                "Developed homepages for various clients",
            ],
        }
    ]
};

const Header = ({title}) => (
    <div className="header">{title}</div>
);

const Tag = ({children}) => (
    <span className="tag">{children}</span>
);

const Points = ({points}) => {
    if ( ! points) {
        return;
    }
    const className = "point " + (points.length > 1 ? "multiple" : "");
    const prefix = points.length > 1 ? "- " : "";
    return (
        <div>
            {points.map((p) => (<div key={p} className={className}>{prefix}{p}</div>))}
        </div>
    );
};

const Tags = ({place, tags}) => {
    if ( ! tags) {
        return;
    }
    return (
        <div className="tags">
            {tags.map((t) => (<Tag key={place + t}>{t}</Tag>))}
        </div>
    );
};

const Title = ({time, title}) => (
    <div className="grid grid-cols-12">
        <div className="time-title time col-span-2">{time}</div>
        <div className="time-title col-span-10">{title}</div>
    </div>
);

const Right = ({children}) => (
    <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-3">{children}</div>
    </div>
);

const Place = ({place}) => (
    <div className="grid grid-cols-12 place-grid">
        <div className="workplace col-span-8 col-start-3">
            <span className="place">{place}</span>
        </div>
    </div>
);

const Work = ({place, titles, tags, points}) => (
    <div className="grid work-grid">
        <Place place={place} />
        <div>
            {titles.map(({title, time}) => (<Title key={time + title} time={time} title={title} />))}
            <Right>
                <Tags tags={tags} place={place} />
                <Points points={points} />
            </Right>
        </div>
    </div>
)

const Contact = () => (
    <div className="grid grid-cols-12">
        <div className="col-span-9 col-start-3">
            <div className="side-by-side">
                <img alt="Peter" className="photo" src="peter.png" />
            </div>
            <div className="side-by-side">
                <div className="name">
                    Peter<br />
                    Bergström
                </div>
                <div className="contact">
                    <i className="bi-envelope" /> peter@pjot.se
                    <br />
                    <i className="bi-telephone" /> +46734241486
                    <br />
                    <i className="bi-github" /> github.com/pjot
                    <br />
                    <i className="bi-calendar3" /> 1986-02-25
                    <br />
                    <br />
                    <i className="bi-mailbox" /> Nysätravägen 40B
                    <br />
                    <i className="bi-mailbox white" /> 131 33 Nacka
                </div>
            </div>
        </div>
    </div>
);

const Paragraph = ({children}) => (
    <div className="grid grid-cols-12 paragraph">
        <div className="col-start-3 col-span-9">{children}</div>
    </div>
);
        

const App = () => {
    const [print, setPrint] = useState(false);

    useEffect(() => {
        const handleKey = (event) => {
            if (event.key === "b") {
                const newValue = !print;
                setPrint(newValue);
                if (newValue) {
                    document.querySelector("body").className = "print";
                } else {
                    document.querySelector("body").className = "";
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
                    <i className="bi-download" /> <a href="/peter-cv.pdf">Download PDF</a>
                </div>
            )}

            <div className={"main" + (print ? " print" : "")}>
                {!print && (<div className="overlay" />)}
                <div className="stuff">
                    <Contact />

                    <Header title="Profile" />
                    <Paragraph>
                        I am a software engineer who believes in the power of simplicity and accuracy.
                        Few things beat the feeling when well-designed parts fit together naturally, when the modelling is done correctly and the business logic code almost writes itself.
                        Python is my primary language, though I am adaptable to others.
                        I am a dedicated learner, frequently exploring new technologies through work and personal projects.
                        I generally favor command-line interfaces and Linux environments over graphical interfaces.
                    </Paragraph>

                    <Header title="Work Experience" /> 
                    <div>
                        {data.work_experiences.map((e) => (
                            <Work
                            key={e.workplace}
                            place={e.workplace}
                            titles={e.titles}
                            tags={e.tags}
                            points={e.points}
                            />
                        ))}
                    </div>

                    <Header title="Education" /> 
                    <div>
                        <Work
                            place="KTH - Royal Institute of Technology"
                            titles={[{title: "B. Sc. Mechanical Engineering", time: "Aug 2005 - Nov 2010"}]}
                            points={["Studied the Mechanical Engineering Master's programme but started working during year 4"]}
                        />
                    </div>

                    <Header title="Personal" />
                    <Paragraph>
                        I'm born and raised in Stockholm.
                        Apart from tinkering with technology and spending time with my kids, in my free time
                        I enjoy playing my guitar, woodworking, climbing, skiing, diving, kayaking, traveling, mountain biking,
                        camping - in general, being outdoors. I am also a big sports fan.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
}

export default App;
