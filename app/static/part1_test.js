var json_info = {
    pages: [{
            questions: [{
                    type: "comment",
                    name: "Q1_ad attitude",
                    title: "We are interested in understanding how you experience things online. We will start with some questions that seek your views about website advertising. Here, 'website advertising' refers to ads that are displayed on the web pages that you visit but it excludes pop-up windows or advertising sent over email. In a sentence or two, please tell us what you think about website advertising.",
                    isRequired: true
                },

                {
                    type: "checkbox",
                    name: "Q10_internet experience",
                    title: "Have you ever...? (Select all that apply)",
                    isRequired: true,
                    colCount: 0,
                    choices: ["...purchased a product or service online (e.g., music, books, clothing, etc.)"
                    , "...used a social networking site (e.g., Facebook, Twitter, LinkedIn, MySpace, etc.)"
                    , "...clicked on an ad that appeared on a website to get more information about the advertised product"
                    , "...accidentally clicked on an ad that appeared on a website"
                    , "...visited health, wellness, or medical information websites (e.g., MayoClinic, MyFitnessPal, Men's Health, etc.)"
                    , "...used a search engine to find information about a medical condition"
                    ]
                }
            ]
        },
        {
            title: "Visiting a healthcare website<br />Clicking on the link below will open a new tab or window in your browser displaying a version of the WebMD website homepage with links disabled. Please look through this page at your own pace and make sure to scroll down and look at the entire page. Then, answer the following questions. Feel free to review the opened tab as many times as you want to answer these questions.",
            questions: [{
                    type: "checkbox",
                    name: "Q10_internet experience",
                    title: "Have you ever...? (Select all that apply)",
                    isRequired: true,
                    colCount: 0,
                    choices: ["...purchased a product or service online (e.g., music, books, clothing, etc.)"
                    , "...used a social networking site (e.g., Facebook, Twitter, LinkedIn, MySpace, etc.)"
                    , "...clicked on an ad that appeared on a website to get more information about the advertised product"
                    , "...accidentally clicked on an ad that appeared on a website"
                    , "...visited health, wellness, or medical information websites (e.g., MayoClinic, MyFitnessPal, Men's Health, etc.)"
                    , "...used a search engine to find information about a medical condition"
                    ]
                },
                {
                    type: "radiogroup",
                    name: "price",
                    title: "Do you feel our current price is merited by our product?",
                    choices: ["correct|Yes, the price is about right",
                        "low|No, the price is too low for your product",
                        "high|No, the price is too high for your product"
                    ]
                },
                {
                    type: "multipletext",
                    name: "pricelimit",
                    title: "What is the... ",
                    items: [{
                            name: "mostamount",
                            title: "Most amount you would every pay for a product like ours"
                        },
                        {
                            name: "leastamount",
                            title: "The least amount you would feel comfortable paying"
                        }
                    ]
                }
            ]
        },
        {
            title: "Please read this information carefully. Then answer the questions below.<br /><br />Many websites, including WebMD, are able to offer free services to their visitors by contracting with online advertising companies. The advertising companies pay websites for every ad they show, allowing the websites to provide free services for users like you.<br /><br />Imagine that you are experiencing a flaky scalp condition and decide to visit the WebMD website. WebMD has contracted with XYZ Advertising Company, which collects information about your interactions with only the WebMD website in order to predict your preferences and to show you ads that are most likely to be of interest to you. These ads are known as targeted ads. For example, if you search for 'flaky scalp' or read an article about scalp problems on the WebMD website, XYZ Advertising Company could show you ads for dandruff shampoo or another related product.<br /><br/>In particular, XYZ Advertising Company will:<br />1. Collect your information only from the WebMD website<br />2. Use the collected information to show you targeted ads only on the WebMD<br />3. Retain and use collected information for a maximum period of one day",
            questions: [{
                type: "text",
                name: "email",
                title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
            }]
        },
        {
            questions: [{
                type: "text",
                name: "email",
                title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
            }]
        }
    ]
};

