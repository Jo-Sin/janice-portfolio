export type WorkCategory = 'investigative-reporting' | 'news-articles' | 'content-writing' | 'research-tech'

export const WORK_DATA: Record<WorkCategory, WorkItem> = {
    'investigative-reporting': {
        title: 'Investigative reporting',
        content: [
            {
                image: '/work/investigative-truth.jpg',
                title: 'Truth and reconciliation: Inside Canada’s healthcare system',
                link: 'https://indiginews.com/features/truth-and-reconciliation-inside-canadas-healthcare-system'
            },
            {
                image: '/work/investigative-juliette.jpg',
                title: "Juliette Tapaquon's tragic story exposes health-care inequality",
                link: 'https://www.nationalobserver.com/2023/06/02/investigations/juliette-tapaquon-tragic-story-indigenous-health-care-inequality'
            },
            {
                image: '/work/investigative-advocacy.jpg',
                title: 'Advocacy, community groups track hate in Canada when law enforcement fails us',
                link: 'https://www.nationalobserver.com/2023/03/10/investigations/tracking-hate-crime-incidents-canada'
            },
            {
                image: '/work/investigative-indigenous.jpg',
                title:
                    'Analysis of anti-Indigenous racism in hospitals reveals pattern of harm, no tracking mechanism (research credit)',
                link: 'https://www.nationalobserver.com/2023/04/11/investigations/anti-indigenous-racism-health-care'
            },
            {
                image: '/work/investigative-inside.jpg',
                title:
                    'Inside the fight to reform Indigenous health education in Canadian medical and nursing schools (research credit)',
                link: 'https://www.tvo.org/article/inside-the-fight-to-reform-indigenous-health-education-in-canadian-medical-and-nursing-1'
            }
        ]
    },
    'news-articles': {
        title: 'News articles',
        content: [
            {
                image: '/work/news-ottawa.png',
                title: 'Ottawa’s funding for mental health promotion in Ontario not enough',
                link: 'https://humbernews.ca/2022/06/ottawas-funding-for-mental-health-promotion-in-ontario-not-enough/'
            },
            {
                image: '/work/news-monkeypox.jpg',
                title: 'What is Monkeypox? Causes, symptoms, and risk',
                link: 'https://humbernews.ca/2022/05/what-is-monkeypox-causes-symptoms-and-risk/'
            },
            {
                image: '/work/news-ontario.png',
                title:
                    'Ontario Green Party leader Mike Schreiner promises to double the province’s greenbelt',
                link: 'https://humbernews.ca/2022/05/ontario-green-party-leader-mike-schreiner-promises-to-double-the-provinces-greenbelt/'
            },
            {
                image: '/work/news-failed.png',
                title:
                    '‘You sir, have failed this province’: Ontario Liberal leader Steven Del Duca takes shots at Ford in heated leaders’ debate',
                link: 'https://humbernews.ca/2022/05/you-sir-have-failed-this-province-ontario-liberal-leader-steven-del-duca-takes-shots-at-ford-in-heated-leaders-debate/'
            },
            {
                image: '/work/news-inflation.jpg',
                title:
                    'Decades-high inflation has forced Canadians to change their food spending habits, poll shows',
                link: 'https://humbernews.ca/2022/05/decades-high-inflation-has-forced-canadians-to-change-their-food-spending-habits-poll-shows/'
            },
            {
                image: '/work/news-ukraine.jpg',
                title: 'Humber’s Ukrainian student club ramps up services to answer calls for help',
                link: 'https://humbernews.ca/2022/04/humbers-ukrainian-student-club-ramps-up-services-to-answer-calls-for-help/'
            },
            {
                image: '/work/news-pandemic.jpg',
                title: 'Pandemic becomes boon for local women entrepreneurs',
                link: 'https://humbernews.ca/2022/04/pandemic-becomes-boon-for-local-women-entrepreneurs/'
            },
            {
                image: '/work/news-timeline.jpg',
                title: 'TIMELINE: Russia’s invasion of Ukraine follows decades of strife',
                link: 'https://humbernews.ca/2022/04/timeline-russias-invasion-of-ukraine-follows-decades-of-strife/'
            },
            {
                image: '/work/news-gta.jpg',
                title: 'Ukrainian students in GTA rally support for international students',
                link: 'https://humbernews.ca/2022/03/ukrainian-students-clubs-in-the-gta-rally-for-support/'
            },
            {
                image: '/work/news-ignite.jpg',
                title: 'Humber voters use hybrid system electing new IGNITE Board of Directors',
                link: 'https://humbernews.ca/2022/03/humber-voters-use-hybrid-system-electing-new-ignite-board-of-directors/'
            },
            {
                image: '/work/news-huber.jpg',
                title: 'Sasha Huber uses art to advocate renaming sites named after racist scientist',
                link: 'https://humbernews.ca/2022/02/sasha-huber-uses-art-to-advocate-renaming-sites-named-after-racist-scientist/'
            },
            {
                image: '/work/news-opinion.jpeg',
                title: 'OPINION: It’s high time newsrooms address trauma among journalists',
                link: 'https://humbernews.ca/2022/02/opinion-its-high-time-newsrooms-address-trauma-among-journalists/'
            },
            {
                image: '/work/news-roller.jpg',
                title: 'Students ride roller coaster between jobs, unemployment',
                link: 'https://humbernews.ca/2022/02/students-ride-roller-coaster-between-jobs-unemployment/'
            },
            {
                image: '/work/news-mahindra.jpg',
                title: 'Australian students join hands with Tech Mahindra to combat climate change',
                link: 'https://www.thehindu.com/news/states/australian-students-join-hands-with-tech-mahindra-to-combat-climate-change/article28416799.ece'
            },
            {
                image: '/work/news-play.jpeg',
                title: 'Award-winning German play comes to Pune',
                link: 'https://www.thehindu.com/news/states/award-winning-german-play-comes-to-pune/article28364643.ece'
            },
            {
                image: '/work/news-cricket.jpeg',
                title: 'Pune’s cricket museum now on Google Art and Culture',
                link: 'https://www.thehindu.com/news/national/other-states/punes-cricket-museum-now-on-google-art-and-culture/article28120276.ece'
            },
            {
                image: '/work/news-colours.jpeg',
                title: 'Bringing colours to life',
                link: 'https://www.thehindu.com/news/national/other-states/bringing-colours-to-life/article28112347.ece'
            },
            {
                image: '/work/investigative-truth.jpg',
                title: 'IMA strike: major Pune hospitals function normally',
                link: 'https://www.thehindu.com/news/national/other-states/ima-strike-major-pune-hospitals-function-normally/article28023660.ece'
            },
            {
                image: '/work/news-pollution.jpeg',
                title: 'Pollution board seeks explanation from Dehu village on dead fish',
                link: 'https://www.thehindu.com/news/national/other-states/pollution-board-seeks-explanation-from-dehu-village-on-dead-fish/article27959156.ece'
            },
            {
                image: '/work/news-ncra.jpg',
                title: 'NCRA to host International Pulsar Timing Array meet',
                link: 'https://www.thehindu.com/sci-tech/science/ncra-to-host-international-pulsar-timing-array-meet/article27956508.ece'
            },
            {
                image: '/work/news-fish.jpeg',
                title: 'Dead fish in Indrayani river: State Pollution Control Board seeks explanation from Dehu Gram Panchayat',
                link: 'https://www.thehindu.com/news/national/other-states/dead-fish-in-indrayani-river-state-pollution-control-board-seeks-explanation-from-dehu-gram-panchayat/article27900529.ece'
            },
            {
                image: '/work/news-raid.jpeg',
                title: 'Illegal raids by Pune police rob sex workers of customers, says report',
                link: 'https://www.thehindu.com/news/cities/mumbai/illegal-raids-by-pune-police-rob-sex-workers-of-customers-says-report/article27892630.ece'
            }
        ]
    },
    'content-writing': {
        title: 'Content writing',
        content: [
            {
                image: '/work/content-glow.jpg',
                title: 'You don’t need to “glow up” this summer– here’s why',
                link: 'https://ignitestudentlife.com/you-dont-need-to-glow-up-this-summer-heres-why/'
            },
            {
                image: '/work/content-pyjamas.jpg',
                title: 'Simple tricks to turn your pyjamas into daywear',
                link: 'https://ignitestudentlife.com/simple-tricks-to-turn-your-pyjamas-into-daywear/'
            },
            {
                image: '/work/content-ignite.jpg',
                title: 'IGNITE’s 2021-2022 Impact Report',
                link: 'https://ignitestudentlife.com/ignites-2021-2022-impact-report/'
            },
            {
                image: '/work/content-shetty.jpg',
                title: 'Jay Shetty’s guide to success and finding one’s purpose',
                link: 'https://ignitestudentlife.com/jay-shettys-guide-to-success-and-finding-ones-purpose/'
            },
            {
                image: '/work/content-goals.jpg',
                title: 'How to set and achieve your goals when you don’t know what you want',
                link: 'https://ignitestudentlife.com/how-to-set-and-achieve-your-goals-when-you-dont-know-what-you-want/'
            },
            {
                image: '/work/content-o2go.jpg',
                title: 'O2GO: Humber department rethinks food containers for sustainability',
                link: 'https://ignitestudentlife.com/o2go-humber-department-rethinks-food-containers-for-sustainability/'
            },
            {
                image: '/work/content-expenses.jpg',
                title: 'Here are all the student expenses you can write off on your taxes',
                link: 'https://web.archive.org/web/20240229050042/https://ignitestudentlife.com/here-are-all-the-student-expenses-you-can-write-off-on-your-taxes/'
            },
            {
                image: '/work/content-guilty.jpg',
                title: 'Feel guilty for taking breaks? Read this.',
                link: 'https://ignitestudentlife.com/feel-guilty-for-taking-breaks-read-this/'
            },
            {
                image: '/work/news-ukraine.jpg',
                title: 'IGNITE allots $370,000 in financial aid for Ukrainian and Russian students',
                link: 'https://ignitestudentlife.com/ignite-allots-370000-in-financial-aid-for-ukrainian-and-russian-students/'
            },
            {
                image: '/work/content-events.jpg',
                title: 'How IGNITE events can help you live your best life',
                link: 'https://ignitestudentlife.com/how-ignite-events-can-help-you-live-your-best-life/'
            },
            {
                image: '/work/content-keke.jpg',
                title: '9 quotes by Keke Palmer to guide you through your career',
                link: 'https://ignitestudentlife.com/9-quotes-by-keke-palmer-to-guide-you-through-your-career/'
            },
            {
                image: '/work/content-remedies.jpg',
                title: 'Helpful remedies for handling homesickness at school',
                link: 'https://ignitestudentlife.com/helpful-remedies-for-handling-homesickness-at-school/'
            },
            {
                image: '/work/content-burnout.jpg',
                title: 'Academic burnout: What it is, what it does and how to beat it',
                link: 'https://ignitestudentlife.com/academic-burnout-what-it-is-what-it-does-and-how-to-beat-it/'
            },
            {
                image: '/work/content-quit.jpg',
                title: 'Should I quit my job? 7 reasons it might be time to move on',
                link: 'https://ignitestudentlife.com/should-i-quit-my-job-7-reasons-it-might-be-time-to-move-on/'
            },
            {
                image: '/work/content-mental.jpg',
                title: 'Side effects of poor mental health we don’t talk about enough',
                link: 'https://ignitestudentlife.com/side-effects-of-poor-mental-health-we-dont-talk-about-enough/'
            },
            {
                image: '/work/content-celeb.jpg',
                title: '7 celebs who used their education in surprising ways',
                link: 'https://ignitestudentlife.com/7-celebs-who-used-their-education-in-surprising-ways/'
            },
            {
                image: '/work/content-navigate.jpg',
                title: '6 ways to help you navigate a long distance friendship',
                link: 'https://ignitestudentlife.com/6-ways-to-help-you-navigate-a-long-distance-friendship/'
            },
            {
                image: '/work/content-classic.jpg',
                title: 'Classic movies you didn’t know were adapted from books',
                link: 'https://ignitestudentlife.com/classic-movies-you-didnt-know-were-adapted-from-books/'
            },
            {
                image: '/work/content-lessons.jpg',
                title: '6 life lessons that our parents were actually right about',
                link: 'https://ignitestudentlife.com/6-life-lessons-that-our-parents-were-actually-right-about/'
            },
            {
                image: '/work/content-world.jpg',
                title: 'Here’s what moving across the world for college taught me',
                link: 'https://web.archive.org/web/20211026221657/https://ignitestudentlife.com/heres-what-moving-across-the-world-for-college-taught-me/'
            },
            {
                image: '/work/content-mute.jpg',
                title: 'Mute, block, delete: How students can set boundaries online',
                link: 'https://web.archive.org/web/20230201162444/https://ignitestudentlife.com/mute-block-delete-how-students-can-set-boundaries-online/'
            },
            {
                image: '/work/content-gingerbread.jpg',
                title: '7 gingerbread house fails to make you laugh this holiday season',
                link: 'https://web.archive.org/web/20230205211703/https://ignitestudentlife.com/7-gingerbread-house-fails-to-make-you-laugh-this-holiday-season/'
            },
            {
                image: '/work/content-students.jpg',
                title: '9 things students do that literally no one else does',
                link: 'https://web.archive.org/web/20230607044222/https://ignitestudentlife.com/9-things-students-do-that-literally-no-one-else-does/'
            },
            {
                image: '/work/content-gourmet.jpg',
                title: 'How to make a gourmet meal on a student budget',
                link: 'https://web.archive.org/web/20230202153312/https://ignitestudentlife.com/how-to-make-a-gourmet-meal-on-a-student-budget/'
            },
            {
                image: '/work/content-shopping.jpg',
                title: 'Shopping for school supplies: Then versus now',
                link: 'https://web.archive.org/web/20230326045343/https://ignitestudentlife.com/shopping-for-school-supplies-then-vs-now/'
            },
            {
                image: '/work/content-fall.jpg',
                title: '5 comfort items to make this fall your most perfect season yet',
                link: 'https://web.archive.org/web/20230206202816/https://ignitestudentlife.com/5-comfort-items-to-make-this-fall-your-most-perfect-season-yet/'
            }
        ]
    },
    "research-tech": {
        title: "Research and Technology",
        content: [
            {
                title: 'Future Festival 2023: Embracing AI and its advances',
                image: '/work/research-future.jpg',
                link: 'https://issuu.com/humber_research/docs/spark-issue009/44'
            },
            {
                title: 'Experiences of Hope, Self-Compassion and Authentic Collaboration: Foundations for a consumer-informed compassion-based human services delivery framework in a Canadian context',
                image: '/work/research-hope.jpg',
                link: 'https://issuu.com/humber_research/docs/spark-issue008/14'
            },
            {
                title: 'Using the Metaverse to Innovate in Virtual Production and Architectural Education',
                image: '/work/research-meta.jpg',
                link: 'https://issuu.com/humber_research/docs/spark-issue008/26'
            },
            {
                title: 'Humber’s Bachelor of Industrial Design Students Create Human Machine Interface Designs for Canada’s First Zero Emissions Concept Vehicle',
                image: '/work/research-emission.jpg',
                link: 'https://issuu.com/humber_research/docs/spark-issue008/40'
            },
            {
                title: 'Social Innovation Around the World',
                image: '/work/research-social.jpg',
                link: 'https://issuu.com/humber_research/docs/spark-issue007/70'
            },
            {
                title: 'Broadcast-Broadband Convergence B2C Lab Celebrates Latest Advancements in Broadcast Technology at their Open House',
                image: '/work/research-bbc.jpg',
                link: 'https://issuu.com/humber_research/docs/spark-issue007/74'
            },
            {
                title: 'Humber’s Faculty of Media & Creative Arts Creates its First Augmented Reality Experience Featuring Howie the Hawk',
                image: '/work/research-howie.jpg',
                link: 'https://issuu.com/humber_research/docs/spark-issue006/24'
            },
            {
                title: 'Intimidated by Innovation? It’s not that complicated!',
                image: '/work/research-innovation.jpg',
                link: 'https://humber.ca/research/news/intimidated-innovation-its-not-complicated'
            },
            {
                title: 'SoTL Researcher Spotlight: Eva Ziemsen, Ph.D.',
                image: '/work/research-sotl.jpg',
                link: 'https://humberpress.com/announcements/sotl-researcher-spotlight-eva-ziemsen-phd'
            },
            {
                title: 'Meet ORI’s Graphic Designers: Inside the science of creating art',
                image: '/work/research-ori.jpg',
                link: 'https://issuu.com/humber_research/docs/spark-issue010/26'
            }
        ]
    }
};