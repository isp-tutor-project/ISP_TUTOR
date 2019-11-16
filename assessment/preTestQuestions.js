const quiz = {
    testName: "preTest",
    questions: [{
        id: 1,
        img: {
            src: "img/Question1Pre.png",
            width: 638,
            height: 262
        },
        text: "Which of these diagrams best represents the structure of matter, with the most complex particle at the top and the most basic particles at the bottom?",
        questionType: "radios",
        options: {
            a: "A",
            b: "B",
            c: "C",
            d: "D"
        }
    }, {
        id: 2,
        img: null,
        text: "Which is true of an electron?",
        questionType: "radios",
        options: {
            a: "It has a positive charge.",
            b: "It has a negative charge.",
            c: "It doesn't have a charge."
        }
    }, {
        id: 3,
        img: null,
        text: "Which is true of a neutron?",
        questionType: "radios",
        options: {
            a: "It has a positive charge.",
            b: "It has a negative charge.",
            c: "It doesn't have a charge."
        }
    },{
        id: 4,
        img: null,
        text: "Which is true of a proton?",
        questionType: "radios",
        options: {
            a: "It has a positive charge.",
            b: "It has a negative charge.",
            c: "It doesn't have a charge."
        }        
    }, {
        id: 5,
        img: null,
        text: "Which of the following is true?",
        questionType: "radios",
        options: {
            a: "Particles with opposite charges attract each other (or pull on each other).",
            b: "Particles with opposite charges repel each other (or push each other away).",
            c: "Particles with opposite charges have no effect on each other."
        }
    }, {
        id: 6,
        img: null,
        text: "Which of the following is true?",
        questionType: "radios",
        options: {
            a: "Particles with same charges attract each other (or pull on each other).",
            b: "Particles with same charges repel each other (or push each other away).",
            c: "Particles with same charges have no effect on each other."
        }
    }, {
        id: 7,
        img: null,
        text: "Which atoms combine to make up a molecule of water?",
        questionType: "radios",
        options: {
            a: "1 hydrogen, 1 oxygen",
            b: "1 hydrogen, 2 oxygen",
            c: "2 hydrogen, 1 oxygen",
            d: "2 hydrogen, 2 oxygen"
        }
    }, {
        id: 8,
        img: {
            src: "img/PRETESTQUESTIONCOMBINED.png",
            width: 857,
            height: 121,
        },
        text: "In the diagrams below, oxygen atoms are represented by larger circles labeled 'O', and hydrogen atoms are represented by smaller circles labeled 'H'. Which of the diagrams best represents water?",
        questionType: "radios",
        options: {
            a: "A",
            b: "B",
            c: "C",
            d: "D",
            e: "E"
        }
    }, {
        id: 9,
        img: null,
        text: "What is the chemical formula for carbon dioxide?",
        questionType: "radios",
        options: {
            a: "CO",
            b: "CO<sub>2</sub>",
            c: "C",
            d: "O<sub>2</sub>"
        }
    }, {
        id: 10,
        img: null,
        text: "Which of the following defines a compound (like NaCl)?",
        questionType: "radios",
        options: {
            a: "different substances mixed together",
            b: "atoms and molecules mixed together",
            c: "atoms of different elements combined together",
            d: "atoms of the same element combined together"
        }
    }, {
        id: 11,
        img: null,
        text: "What happens to the molecules of a gas when temperature increases?",
        questionType: "radios",
        options: {
            a: "They get bigger.",
            b: "They get smaller.",
            c: "They move slower.",
            d: "They move faster.",
            e: "They increase in number."
        }
    }, {
        id: 12,
        img: null,
        text: "What happens to the molecules of a liquid when the liquid cools?",
        questionType: "radios",
        options: {
            a: "They slow down.",
            b: "They speed up.",
            c: "They decrease in number.",
            d: "They decrease in size.",
            e: "They increase in size."
        }
    }, {
        id: 13,
        img: {
            src: "img/cupsdiagram.jpg",
            width: 320,
            height: 240
        },
        text: "<span>A student poured the same amount of water into each of two identical cups. He put one cup in a refrigerator and left one cup out in a warm room. Neither cup was touched for two days.</span><p>The diagram below shows how much water was left in the cups two days later.</p><p>Which cup was left out in the warm room?</p>",
        questionType: "radios",
        options: {
            a: "Cup A",
            b: "Cup B"
        }
    }, {
        id: 14,
        img: {
            src: "img/cupsdiagram.jpg",
            width: 320,
            height: 240
        },
        text: "<span>A student poured the same amount of water into each of two identical cups. He put one cup in a refrigerator and left one cup out in a warm room. Neither cup was touched for two days.</span><p> The diagram below shows how much water was left in the cups two days later.</p><p>Explain your answer for Q13.</p>",
        questionType: "radios",
        options: {
            a: "The water molecules became smaller",
            b: "The water molecules became larger",
            c: "The water molecules went into the air",
            d: "The water molecules were absorbed by the cup"
        }
    }, {
        id: 15,
        img: {
            src: "img/Twopositivelychargedparticles.png"
        },
        text: "<span>As shown below, two positively charged particles are close to each other.</span><p>What will happen?</p>",
        questionType: "radios",
        options: {
            a: "Nothing",
            b: "They will move toward each other.",
            c: "They will move away from each other.",
            d: "They will move perpendicular to each other."
        }
    }, {
        id: 16,
        img: {
            src: "img/Twopositivelychargedparticles.png"
        },
        text: "<span>As shown below, two positively charged particles are close to each other.</span><p>Explain your answer for Q15.</p>",
        questionType: "radios",
        options: {
            a: "There are no forces acting on the particles.",
            b: "There is an attractive electric force between the particles.",
            c: "There is a repelling electric force between the particles.",
            d: "There is a magnetic force acting on both particles."
        }
    }, {
        id: 17,
        img: {
            src: "img/salt.jpg",
            width: 320,
            height: 240
        },
        text: "<span>Coarse salt and fine salt are added to water and then stirred as shown in the picture.</span><p>Which statement is true?</p>",
        questionType: "radios",
        options: {
            a: "Coarse salt will dissolve faster.",
            b: "Fine salt will dissolve faster.",
            c: "They both will dissolve in the same amount of time."
        }
    }, {
        id: 18,
        img: {
            src: "img/salt.jpg",
            width: 320,
            height: 240
        },
        text: "<span>Coarse salt and fine salt are added to water and then stirred as shown in the picture.</span><p>Explain your answer for Q17.</p>",
        questionType: "radios",
        options: {
            a: "The fine salt weighs less than the coarse salt.",
            b: "The fine salt is made of smaller particles.",
            c: "The coarse salt has more energy.",
            d: "The coarse salt has more molecules."
        }
    }, {
        id: 19,
        img: null,
        text: "What is the main reason that water can dissolve many different substances?",
        questionType: "radios",
        options: {
            a: "Water molecules have a lower molecular mass than many other substances.",
            b: "Water molecules have charged parts that attract charged parts of other molecules.",
            c: "Water molecules are larger in volume than the particles they dissolve.",
            d: "Water is more dense when it is in a liquid state than when it is in a solid state (ice)."
        }
    }, {
        id: 20,
        img: null,
        text: "What is a gas?",
        questionType: "radios",
        options: {
            a: "Gasoline (used to power cars)",
            b: "Water vapor that has evaporated.",
            c: "Any matter in a gas state.",
            d: "I’m really not sure."
        }
    }]
}