let quiz = {
    title: 'My quiz',
    questions: [{
            text: "What colour are grapes?",
            value: "a",
            responses: ["Pink", "yellow", "Orange", "purple"],
            correctAnswer: "Purple"
        }, {
            text: "What is the colour of a ripe banana?",
            value: "b",
            responses: ["Orange", "Pink", "Green", "Yellow"],
            correctAnswer: "Yellow"
        }, {
            text: "What colour is the sun?",
            value: "c",
            responses: ["Orange", "Red", "Yellow", "White"],
            correctAnswer: "White"
        },
        {
            text: "What is the colour of the ocean?",
            value: "d",
            responses: ["Blue", "Turquious", "Green", "Transparent"],
            correctAnswer: "Transparent"
        }, {
            text: "What is the colour of a ruby?",
            value: "e",
            responses: [" Pink", "Brown", "Gold", "Red"],
            correctAnswer: "Red"
        }, {
            text: "What is the colour of a jasper?",
            value: "f",
            responses: ["Orange", "Red", "Black", "Green"],
            correctAnswer: "Green"
        }, {
            text: "What is the colur of an emereld?",
            value: "g",
            responses: ["Purple", "Orange", "Pink", "Light Green"],
            correctAnswer: "Light Green"
        }, {
            text: "What is the colour of an amethyst?",
            value: "h",
            responses: ["Pink", "Green", "Black", "Light Purple"],
            correctAnswer: "Light Purple"
        }, {
            text: "What colour is the sky?",
            value: "c",
            responses: ["white", "Blue", "Black", "Transparent"],
            correctAnswer: "Transparent"
        }, {
            text: "What is the colour of a ripe lemon?",
            value: "c",
            responses: ["Green", "Orange", "Pink", "Yellow"],
            correctAnswer: "Yellow"
        }, {
            text: "What colour are strawberries?",
            value: "c",
            responses: ["", "Yellow", "Green", "Red"],
            correctAnswer: "Red"
        }, {
            text: "Which animal has black and white stripes?",
            value: "c",
            responses: ["Lion", "Kangaroo", "Hippo", "Zebra"],
            correctAnswer: "Zebra"
        }, {
            text: "What does red and blue make when mixed together?",
            value: "c",
            responses: ["Orange", "Green", "Black", "Purple"],
            correctAnswer: "Purple"

        }, {
            text: "What colour was Red Riding Hoods coat?",
            value: "c",
            responses: ["Pink", "Green", "Orange", "Red"],
            correctAnswer: "Red"
        }, {
            text: "What colour is elsa from Frozens hair?",
            value: "c",
            responses: ["Blonde", "Black", "White", "Orange"],
            correctAnswer: "Orange"
        }, {
            text: "Green is made of which two colours?",
            value: "c",
            responses: ["Red & blue", "Yellow & Red", "Blue & Orange", "Yellow & Blue"],
            correctAnswer: "Yellow & Blue"
        }, {
            text: "Which colour is the first in the rainbow?",
            value: "c",
            responses: ["Pink", "Green", "blue", "Red"],
            correctAnswer: "Red"
        }, {
            text: "What colour are flamingo's feathers?",
            value: "c",
            responses: ["Blue", "Red", "Purple", "Pink"],
            correctAnswer: "Pink"
        }, {
            text: "What colour is often linked to love?",
            value: "c",
            responses: ["Blue", "Black", "Green", "Red"],
            correctAnswer: "Red"
        }, {
            text: "What colour is the whatsapp logo?",
            value: "c",
            responses: ["Blue", "Yellow", "Red", "Green"],
            correctAnswer: "Green"
        }
    ]

};




new Vue({
    el: '#app',
    data: {
        selected: 0,
        quiz: quiz,
        // Store current question index
        questionIndex: 0,
    },
    // The view will trigger these methods on click
    methods: {
        // Go to next question
        next: function () {
            this.questionIndex++;
        },

    }
});