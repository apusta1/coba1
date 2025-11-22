const json = {
  "title": "Simple Math",
  "description": "Testing SurveyJS for Assessment",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "title": "1 + 1 = ",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "0"
            },
            {
              "value": "Item 2",
              "text": "1"
            },
            {
              "value": "Item 3",
              "text": "2"
            },
            {
              "value": "Item 4",
              "text": "3"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question2",
          "title": "2 + 2 =",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "1"
            },
            {
              "value": "Item 2",
              "text": "2"
            },
            {
              "value": "Item 3",
              "text": "3"
            },
            {
              "value": "Item 4",
              "text": "4"
            }
          ]
        }
      ]
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question3",
          "title": "4 + 4 =",
          "choices": [
            {
              "value": "Item 1",
              "text": "2"
            },
            {
              "value": "Item 2",
              "text": "4"
            },
            {
              "value": "Item 3",
              "text": "8"
            },
            {
              "value": "Item 4",
              "text": "16"
            }
          ]
        }
      ]
    }
  ],
  "widthMode": "responsive",
  "headerView": "advanced"
}
