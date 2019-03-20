window.onload = function () {

    var quiz = {
        title: 'My Vue.js Quiz',
        questions: [{
                text: "What colour are grapes?",
                responses: [{
                        text: 'Pink'
                    },
                    {
                        text: 'Yellow',
                        correct: true
                    },
                    {
                        text: 'Orange'
                    },
                    {
                        text: 'Purple'
                    },
                ]
            }, {
                text: "What is the colour of a ripe banana?",
                responses: [{
                        text: 'Pink'
                    },
                    {
                        text: 'Yellow',
                        correct: true
                    },
                    {
                        text: 'Orange'
                    },
                    {
                        text: 'Purple'
                    },
                ]
            }, {
                text: "What colour is the sun?",
                responses: [{
                        text: 'Pink'
                    },
                    {
                        text: 'Red/Yellow',
                        correct: true
                    },
                    {
                        text: 'Orange'
                    },
                    {
                        text: 'Purple'
                    },
                ]
            }, {
                text: "What is the colour of the ocean?",
                responses: [{
                        text: 'Pink'
                    },
                    {
                        text: 'Transparent',
                        correct: true
                    },
                    {
                        text: 'Orange'
                    },
                    {
                        text: 'Purple'
                    },
                ]
            }, {
                text: "What is the colour of a ruby?",
                responses: [{
                        text: 'Pink'
                    },
                    {
                        text: 'Brown'
                    },
                    {
                        text: 'Gold'
                    },
                    {
                        text: 'Red',
                        correct: true
                    },
                ]
            },
            {
                text: "What is the colour of a Jasper?",
                responses: [{
                        text: 'Orange'
                    },
                    {
                        text: 'Red'
                    },
                    {
                        text: 'Black'
                    },
                    {
                        text: 'Green',
                        correct: true
                    },
                ]
            }, {
                text: "What is the colour of a emereld?",
                responses: [{
                        text: 'Purple'
                    },
                    {
                        text: 'Orange'
                    },
                    {
                        text: 'Pink'
                    },
                    {
                        text: 'Light Green',
                        correct: true
                    },
                ]
            }, {
                text: "What is the colour of a amethyst?",
                responses: [{
                        text: 'Pink'
                    },
                    {
                        text: 'Green'
                    },
                    {
                        text: 'Black'
                    },
                    {
                        text: 'Light Purple',
                        correct: true
                    },
                ]
            }, {
                text: "What is the colour of the sky?",
                responses: [{
                        text: 'White'
                    },
                    {
                        text: 'Blue'
                    },
                    {
                        text: 'Black'
                    },
                    {
                        text: 'Transparent',
                        correct: true
                    },
                ]
            }, {
                text: "What is the colour of a ripe Lemon?",
                responses: [{
                        text: 'Green'
                    },
                    {
                        text: 'Orange'
                    },
                    {
                        text: 'Pink'
                    },
                    {
                        text: 'Yellow',
                        correct: true
                    },
                ]
            }, {
                text: "What colour are strawberries?",
                responses: [{
                        text: 'Yellow'
                    },
                    {
                        text: 'Green'
                    },
                    {
                        text: 'Ivory'
                    },
                    {
                        text: 'Red',
                        correct: true
                    },
                ]
            }, {
                text: "Which animal has black and white stripes?",
                responses: [{
                        text: 'Lion'
                    },
                    {
                        text: 'Kangaroo'
                    },
                    {
                        text: 'Hippo'
                    },
                    {
                        text: 'Zebra',
                        correct: true
                    },
                ]
            }, {
                text: "What does red and blue make when mixed together?",
                responses: [{
                        text: 'Orange'
                    },
                    {
                        text: 'Green'
                    },
                    {
                        text: 'Black'
                    },
                    {
                        text: 'Purple',
                        correct: true
                    },
                ]
            }, {
                text: "What colour was red riding hoods coat?",
                responses: [{
                        text: 'Pink'
                    },
                    {
                        text: 'Green'
                    },
                    {
                        text: 'Orange'
                    },
                    {
                        text: 'Red',
                        correct: true
                    },
                ]
            }, {
                text: "What colour is elsa from Frozen's hair?",
                responses: [{
                        text: 'Blonde'
                    },
                    {
                        text: 'Black'
                    },
                    {
                        text: 'White'
                    },
                    {
                        text: 'Ginger',
                        correct: true
                    },
                ]
            }, {
                text: "Green is made of which two colours?",
                responses: [{
                        text: 'Red & Blue'
                    },
                    {
                        text: 'Yellow & Red'
                    },
                    {
                        text: 'Blue & Orange'
                    },
                    {
                        text: 'Yellow & Blue',
                        correct: true
                    },
                ]
            }, {
                text: "Which colour is first in the rainbow?",
                responses: [{
                        text: 'Pink'
                    },
                    {
                        text: 'Green'
                    },
                    {
                        text: 'Blue'
                    },
                    {
                        text: 'Red',
                        correct: true
                    },
                ]
            }, {
                text: "What are flamingo's feathers?",
                responses: [{
                        text: 'Blue'
                    },
                    {
                        text: 'Black'
                    },
                    {
                        text: 'Green'
                    },
                    {
                        text: 'Pink',
                        correct: true
                    },
                ]
            }, {
                text: "What colour is often linked with love?",
                responses: [{
                        text: 'Blue'
                    },
                    {
                        text: 'Black'
                    },
                    {
                        text: 'Green'
                    },
                    {
                        text: 'Red',
                        correct: true
                    },
                ]
            }, {
                text: "What colour is the whatsapp logo?",
                responses: [{
                        text: 'Blue'
                    },
                    {
                        text: 'Yellow'
                    },
                    {
                        text: 'Red'
                    },
                    {
                        text: 'Green',
                        correct: true
                    },
                ]
            }
        ]


    };

    new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array(quiz.questions.length).fill(false)
        },
        methods: {
            // Go to next question
            next: function () {
                this.questionIndex++;
            },
            prev: function () {
                this.questionIndex--;
            },
            score: function () {
                return this.userResponses.filter(function (val) {
                    return val
                }).length;

            }
        },
        template: `
            <div id="wrapper">
                        <h1>{{ quiz.title }}</h1>
                        <div v-for="(question, index) in quiz.questions">
                        <div v-show="index == questionIndex">
                            <h3> {{ question.text }}</h3>
                            <ul>
                            <li v-for="response in question.responses">
                                <label>
                                <input type="radio"
                                        :value="response.correct"
                                        :name="index"
                                        v-model="userResponses[index]"> {{ response.text }}
                                </label>
                            </li>
                            </ul>
                            <button v-if="questionIndex > 0" @click="prev">
                            Prev Question
                            </button>
                            <button @click="next">
                            Next Question
                            </button>
                        </div>
                    </div>

                    <div v-show="questionIndex === quiz.questions.length">
                            <h2> Quiz Complete </h2>
                            <p>  Total Score: {{ score() }} / {{ quiz.questions.length }} </p>

                            <p v-if="score()  < 10">  Try Again - Try Harder - Think Carefully about each question  </p>
                            <p v-else-if="score()  >= 10 && score()  <= 15 ">  Good Job - Try a bit harder to get a better score  </p>
                            <p v-else-if="score()  > 15">  Well done - Awesome Job You should consider a job as a creche teacher </p>
                            <p v-else>  Error Calulating Score   </p>

                            <button onclick="location.reload();"> Redo Quiz</button>
                    </div>
                    </div>
                    </div>
                                
                                
                                `,


    });
}


//