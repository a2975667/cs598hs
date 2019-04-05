var json_info = {
    pages: [{
            title: "This is the last page of the survey. Please answer these last questions as accurately as possible.",
            questions: [
                {
                    type: "matrix",
                    name: "Q25_willingness",
                    title: "I would be willing to allow XYZ Advertising Company to collect the following information. This information will be retained...",
                    isRequired: true,
                    columns: [
                        {
                            value: -1,
                            text: "I would be less willing"
                        },
                        {
                            value: 0,
                            text: "I would be equally willing"
                        },
                        {
                            value: 1,
                            text: "I would be more willing"
                        }
                    ],
                    rows: [{
                            value: "a",
                            text: "...only for the duration of a single web browsing session"
                        },
                        {
                            value: "b",
                            text: "...for one week"
                        },
                        {
                            value: "c",
                            text: "...for one month"
                        },
                        {
                            value: "d",
                            text: "...for six months"
                        },
                        {
                            value: "e",
                            text: "...for one year"
                        },
                        {
                            value: "f",
                            text: "...indefinitely"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "Q27_ad attitude",
                    title: "Overall, how do you feel about receiving ads that are targeted based on your online activities?",
                    isRequired: true,
                    colCount: 5,
                    choices: ["Strongly dislike", "Dislike", "Neutral", "Like", "Strongly like"]
                },
                {
                    type: "matrix",
                    name: "Q28_privacy behavior",
                    title: "Please use ‘Yes’ and ‘No’ to indicate whether you have ever done any of the following.",
                    isRequired: true,
                    columns: [
                        {
                            value: 1,
                            text: "Yes"
                        },
                        {
                            value: 0,
                            text: "No"
                        }
                    ],
                    rows: [{
                            value: "a",
                            text: "Refused to give information to a website because you felt it was too personal or unnecessary"
                        },
                        {
                            value: "b",
                            text: "Decided not to use a website or not to purchase something online because you were not sure how your personal information would be used"
                        },
                        {
                            value: "c",
                            text: "Read a website's privacy policy"
                        },
                        {
                            value: "d",
                            text: "Deleted cookies from your web browser"
                        },
                        {
                            value: "e",
                            text: "Turned on the 'do not track' option in your web browser"
                        }
                    ]
                },
                {
                    type: "matrix",
                    name: "Q29_overall attitude",
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
                            text: "When websites ask for personal information, I usually think twice about providing it"
                        },
                        {
                            value: "b",
                            text: "Consumers have lost all control over how personal information is collected and used by companies"
                        },
                        {
                            value: "c",
                            text: "I feel that as a result of my visiting websites, others know more about me than I am comfortable with"
                        }
                    ]
                },
                {
                    type: "comment",
                    name: "Q30_further comment",
                    title: "Do you have any further comments",
                }
            ]
        }
    ]
};