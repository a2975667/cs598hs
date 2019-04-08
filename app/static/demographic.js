var json_info = {
    pages: [{
            questions: [
                {
                    type: "html",
                    name: "Q1_ad attitude_info",
                    html: "<h4>We are interested in understanding how you experience things online. We will start with some questions that seek your views about online advertising. Here, 'online advertising' refers to ads that are displayed on the web pages that you visit but it excludes pop-up windows or advertising sent over email. </h4>"
                },{
                    type: "comment",
                    name: "Q1_ad attitude",
                    title: "In a sentence or two, please tell us what you think about online advertising.",
                    isRequired: true
                },
                {
                    type: "matrix",
                    name: "Q2_overall attitude",
                    title: "How much do you agree or disagree with the following statements?",
                    isRequired: true,
                    columns: [{
                            value: -2,
                            text: "Strongly Disagree"
                        },
                        {
                            value: -1,
                            text: "Disagree"
                        },
                        {
                            value: 0,
                            text: "Neutral"
                        },
                        {
                            value: 1,
                            text: "Agree"
                        },
                        {
                            value: 2,
                            text: "Strongly Agree"
                        }
                    ],
                    rows: [{
                            value: "a",
                            text: "online advertising is necessary to enjoy free services on the Internet"
                        },
                        {
                            value: "b",
                            text: "In general, I find online advertising useful"
                        },
                        {
                            value: "c",
                            text: "In general, I find online advertising distracting"
                        },
                        {
                            value: "d",
                            text: "In general, I find online advertising to be relevant to my interests"
                        },
                         {
                            value: "e",
                            text: "I usually don't look at the ads that appear on the websites that I visit"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "Q3_gender",
                    title: "What's your gender?",
                    isRequired: true,
                    colCount: 2,
                    choices: ["Male", "Female"]
                },
                {
                    type: "text",
                    name: "Q4_age",
                    title: "What's your age (e.g. 25)?",
                    isRequired: true,
                    validators: [
                        {
                            type: "numeric",
                            minValue: 18,
                            maxValue: 120
                        }
                    ]
                },
                {
                    type: "dropdown",
                    name: "Q5_occupation",
                    title: "Which of the following best describes your primary occupation?",
                    isRequired: true,
                    colCount: 0,
                    choices: ["Administrative support (e.g., secretary, assistant)"
                            ,"Art, writing, or journalism (e.g., author, reporter, sculptor)"
                            ,"Business, management, or financial (e.g., manager, accountant, banker)"
                            ,"Computer engineer or IT professional (e.g., systems administrator, programmer, IT consultant)"
                            ,"Education (e.g., teacher)"
                            ,"Engineer in other fields (e.g., civil engineer, bio-engineer)"
                            ,"Homemaker"
                            ,"Legal (e.g., lawyer, law clerk)"
                            ,"Medical (e.g., doctor, nurse, dentist)"
                            ,"Retired"
                            ,"Scientist (e.g., researcher, professor)"
                            ,"Service (e.g., retail clerks, server)"
                            ,"Skilled labor (e.g., electrician, plumber, carpenter)"
                            ,"Student"
                            ,"Unemployed"
                            ,"Decline to answer"
                            ,"Other"
                    ]
                },
                {
                    type: "dropdown",
                    name: "Q6_eduction",
                    title: "Which of the following best describes your highest achieved education level?",
                    isRequired: true,
                    colCount: 0,
                    choices: [ "No high school"
                            , "Some high school"
                            , "High school graduate"
                            , "Some college - no degree"
                            , "Associates/2 year degree"
                            , "Bachelors/4 year degree"
                            , "Graduate degree - Masters, PhD, professional, medicine, etc."
                   ]
                },
                {
                    type: "radiogroup",
                    name: "Q7_CS eduction",
                    title: "Do you have a college degree or work experience in computer science, software development, web development or similar computer-related fields?",
                    isRequired: true,
                    colCount: 2,
                    choices: ["Yes", "No"]
                },
                {
                    type: "dropdown",
                    name: "Q8_desktop use",
                    title: "Approximately how many hours do you spend on the internet each day USING ONLY DESKTOPS OR LAPTOPS, either at home or at work?",
                    isRequired: true,
                    colCount: 0,
                    choices: ["None"
                            , "Fewer than 1"
                            , "Between 1 and 5"
                            , "Between 5 and 9"
                            , "Between 9 and 13"
                            , "Between 13 and 17"
                            , "More than 17"
                    ]
                },
                {
                    type: "dropdown",
                    name: "Q9_mobile use",
                    title: "Approximately how many hours do you spend on the internet each day USING ONLY MOBILE DEVICES, either at home or at work?",
                    isRequired: true,
                    colCount: 0,
                    choices: ["None"
                            , "Fewer than 1"
                            , "Between 1 and 5"
                            , "Between 5 and 9"
                            , "Between 9 and 13"
                            , "Between 13 and 17"
                            , "More than 17"
                    ]
                },
                {
                    type: "checkbox",
                    name: "Q10_internet experience",
                    title: "Have you ever...? (Select all that apply)",
                    isRequired: true,
                    colCount: 1,
                    choices: ["...purchased a product or service online (e.g., music, books, clothing, etc.)"
                    , "...used a social networking site (e.g., Facebook, Twitter, LinkedIn, MySpace, etc.)"
                    , "...clicked on an ad that appeared on a website to get more information about the advertised product"
                    , "...accidentally clicked on an ad that appeared on a website"
                    , "...visited health, wellness, or medical information websites (e.g., MayoClinic, MyFitnessPal, Men's Health, etc.)"
                    , "...used a search engine to find information about a medical condition"
                    , "None of above"
                    ]
                }
            ]
        },
        {
            title: "",
            questions: [
                {
                    type: "html",
                    name: "info",
                    html: "<h3>Visiting a healthcare website</h3><h4>Clicking on the link below will open a new tab or window in your browser displaying a version of the WebMD website homepage with links disabled. Please look through this page at your own pace and make sure to scroll down and look at the entire page. Then, answer the following questions. Feel free to review the opened tab as many times as you want to answer these questions.<br><br> Please <b>right click and open the page in a new window or tab</b> to visit the WebMD homepage: <a href='https://www.webmd.com/' target='_blank'>https://www.webmd.com/</a></h4>"
                },
                {
                    type: "checkbox",
                    name: "Q11_website health condition",
                    title: "Please select from the list below at least three of the health conditions that appear on the bottom section of the WebMD homepage.",
                    isRequired: true,
                    colCount: 3,
                    choices: ["Acne"
                            , "Allergies"
                            , "Alzheimer's"
                            , "Asthma"
                            , "Bipolar disorder"
                            , "Cancer"
                            , "Carpal tunnel"
                            , "Conjunctivitis"
                            , "Depression"
                            , "Glaucoma"
                            , "Herpes"
                            , "Hyperactivity"
                            , "Hypertension"
                            , "Osteoporosis"
                    ]
                },
                {
                    type: "matrix",
                    name: "Q12_website impression",
                    title: "Indicate how much you agree or disagree with the following statements.",
                    isRequired: true,
                    columns: [{
                            value: -2,
                            text: "Strongly Disagree"
                        },
                        {
                            value: -1,
                            text: "Disagree"
                        },
                        {
                            value: 0,
                            text: "Neutral"
                        },
                        {
                            value: 1,
                            text: "Agree"
                        },
                        {
                            value: 2,
                            text: "Strongly Agree"
                        }
                    ],
                    rows: [{
                            value: "a",
                            text: "I have a positive impression of the WebMD website"
                        },
                        {
                            value: "b",
                            text: "I believe WebMD is a trustworthy website"
                        },
                        {
                            value: "c",
                            text: "I believe the WebMD website protects my privacy"
                        },
                        {
                            value: "d",
                            text: "I am familiar with the WebMD website"
                        },
                         {
                            value: "e",
                            text: "I believe WebMD is a well-known website"
                        },
                        {
                            value: "f",
                            text: "I believe the WebMD website has a good reputation"
                        },
                        {
                            value: "g",
                            text: "I believe the WebMD website provides useful information"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "Q13_website visited",
                    title: "Had you ever visited the WebMD website before (other than in this study)?",
                    isRequired: true,
                    colCount: 3,
                    choices: ["Yes", "No", "I don't remember"]
                },
                {
                    type: "dropdown",
                    name: "Q14_website frequency",
                    title: "How often have you visited the WebMD website in the last 12 months?",
                    isRequired: true,
                    colCount: 0,
                    choices: ["None "
                            , "Only once"
                            , "A few times"
                            , "A few times per month"
                            , "A few times per week"
                            , "A few times per day"
                   ]
                },
                {
                    type: "radiogroup",
                    name: "Q15_website account",
                    title: "Do you have a user account on the WebMD website?",
                    isRequired: true,
                    colCount: 3,
                    choices: ["Yes", "No", "I don't remember"]
                },
                {
                    type: "radiogroup",
                    name: "Q16_medical website visited",
                    title: "Have you visited other health or medical-information websites in the past?",
                    isRequired: true,
                    colCount: 3,
                    choices: ["Yes", "No", "I don't remember"]
                }
            ]
        },
        {
            title: "Please read this information carefully. Then answer the questions below.<br /><br />Many websites, including WebMD, are able to offer free services to their visitors by contracting with online advertising companies. The advertising companies pay websites for every ad they show, allowing the websites to provide free services for users like you.<br /><br />Imagine that you are experiencing a flaky scalp condition and decide to visit the WebMD website. WebMD has contracted with XYZ Advertising Company, which collects information about your interactions with only the WebMD website in order to predict your preferences and to show you ads that are most likely to be of interest to you. These ads are known as targeted ads. For example, if you search for 'flaky scalp' or read an article about scalp problems on the WebMD website, XYZ Advertising Company could show you ads for dandruff shampoo or another related product.<br /><br/>In particular, XYZ Advertising Company will:<br />1. Collect your information only from the WebMD website<br />2. Use the collected information to show you targeted ads only on the WebMD website<br />3. Retain and use collected information for a maximum period of one day",
            questions: [{
                    type: "checkbox",
                    name: "Q17_info confirm 1",
                    isRequired: true,
                    colCount: 1,
                    title: "Based on the information that you just read, which of the following are examples of the types of targeted ads that might occur as a result of your visit to WebMD? (Choose any that apply)",
                    choices: ["You see ads for bicycles on WebMD since studies have found that many visitors to WebMD are bicycle enthusiasts"
                        , "You see ads for Acme cough syrup on Facebook because you read about cough remedies on WebMD"
                        , "You see ads for Acme cough syrup on WebMD because a friend emailed you information about cough remedies"
                        , "You see ads for Acme cough syrup on WebMD because you read about cough remedies on WebMD"
                        , "You see ads for Acme cough syrup on www.WashingtonPost.com because you read about cough remedies on WebMD"
                        , "None of above"
                        ]
                },
                {
                    type: "radiogroup",
                    name: "Q18_info confirm 2",
                    title: "Based on the information that you just read, which of the following statements best explains how XYZ Advertising Company may use the information that it collects about you?",
                    isRequired: true,
                    colCount: 0,
                    choices: ["You see ads for bicycles on WebMD since studies have found that many visitors to WebMD are bicycle enthusiasts"
                        , "You see ads for Acme cough syrup on Facebook because you read about cough remedies on WebMD"
                        , "You see ads for Acme cough syrup on WebMD because a friend emailed you information about cough remedies"
                        , "You see ads for Acme cough syrup on WebMD because you read about cough remedies on WebMD"
                        , "You see ads for Acme cough syrup on www.WashingtonPost.com because you read about cough remedies on WebMD"
                    ]
                },
                {
                    type: "radiogroup",
                    name: "Q19_info confirm 3",
                    title: "Based on the information that you just read, for how long may XYZ Advertising Company use the information collected about you?",
                    isRequired: true,
                    colCount: 4,
                    choices: ["One day", "One week", "One year", "Indefinitely"]
                }
            ]
        }
    ]
};