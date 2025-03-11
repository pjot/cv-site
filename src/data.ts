interface Title {
    title: string;
    time: string;
}
export interface WorkItem {
    place: string;
    titles: Title[];
    tags?: string[];
    points?: string[];
}

export const workExperiences: WorkItem[] = [
    {
        place: "TriOptima / OSTTRA",
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
        place: "FEO Media",
        titles: [{title: "Software Engineer", time: "Oct 2015 - Jun 2016"}],
        tags: [
            "python", "javascript", "webapp2", "angular", "react", "google app engine", "rest", "git"],
        points: [
            "Developed the backend for the new mobile game Crozzles",
            "Maintained the existing backends, for example Quizkampen",
        ],
    },
    {
        place: "Eniro",
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
        place: "Lendo / Schibstedt",
        titles: [
            {title: "Software Engineer", time: "Oct 2011 - Dec 2011"},
        ],
        tags: ["php", "mysql", "zend framework", "macos", "mercurial"],
        points: [
            "Developed the admin interface for lendo.se and suredo.se",
        ],
    },
    {
        place: "Produktion 203",
        titles: [
            {title: "Software Engineer", time: "Nov 2010 - Oct 2011"},
        ],
        tags: ["php", "javacript", "mysql", "codeigniter", "svn", "ssh", "linux"],
        points: [
            "Developed homepages for various clients",
        ],
    }
];

export const profileText: string[] = [
    `I am a software engineer who believes in the power of simplicity and accuracy.
     Few things beat the feeling when well-designed parts fit together naturally,
     when the modelling is done correctly and the business logic code almost writes
     itself. Python is my primary language, though I am adaptable to others.
     I am a dedicated learner, frequently exploring new technologies through work and personal projects.
     I generally favor command-line interfaces and Linux environments over graphical interfaces.`,
    `Apart from tinkering with technology and spending time with my kids, in my free time
     I enjoy playing my guitar, woodworking, climbing, skiing, diving, kayaking, traveling,
     mountain biking, photography, camping - in general, being outdoors.`
];

export const education: WorkItem = {
    place: "KTH - Royal Institute of Technology",
    titles: [{title: "B. Sc. Mechanical Engineering", time: "Aug 2005 - Nov 2010"}],
    points: [
        "Studied the Mechanical Engineering Master's programme but started working during year 4"
    ],
};

export const projects: WorkItem[] = [
    {
        place: "What.CD / Gazelle",
        titles: [{title: "Software Engineer", time: "    2008 -     2014"}],
        points: [
            "Developed the website for What.CD, one of the biggest private torrent trackers in the world",
            "Mostly designed and built a wiki-like database of artists and albums",
            "At its peak it had over 100k users",
        ],
        tags: ["php", "mysql", "linux", "bittorrent", "irc"],
    },
];