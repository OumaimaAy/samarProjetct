  // Données du quiz JSON
const quizData = [
    {
        "question": "Quelle balise HTML est utilisée pour créer une liste non ordonnée ?",
        "options": ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        "answer": 0
    }, 
    //bnjr
    {
        "question": "Quelle propriété CSS est utilisée pour définir la couleur de fond d'un élément ?",
        "options": ["color", "background-color", "font-color", "background"],
        "answer": 1
    },
    {
        "question": "Quel événement JavaScript est déclenché lorsqu'un utilisateur clique sur un élément HTML ?",
        "options": ["onchange", "onsubmit", "onclick", "onmouseover"],
        "answer": 2
    },
    {
        "question": "Quelle balise HTML est utilisée pour inclure du code JavaScript dans un document HTML ?",
        "options": ["&lt;js&gt;", "&lt;javascript&gt;", "&lt;code&gt;", "&lt;script&gt;"],
        "answer": 3
    },
    {
        "question": "Quelle unité de mesure CSS est relative à la taille de la police de caractères de l'élément parent ?",
        "options": ["em", "px", "%", "rem"],
        "answer": 0
    },
    {
        "question": "Quelle est la fonction JavaScript utilisée pour imprimer du texte dans la console du navigateur ?",
        "options": ["print()", "console.log()", "log()", "debug()"],
        "answer": 1
    },
    {
        "question": "Quel attribut HTML est utilisé pour spécifier l'URL d'une image ?",
        "options": ["src", "href", "link", "url"],
        "answer": 0
    },
    {
        "question": "Quelle propriété CSS est utilisée pour définir la taille de la police de caractères ?",
        "options": ["text-size", "size", "font", "font-size"],
        "answer": 3
    },
    {
        "question": "Quel opérateur JavaScript est utilisé pour concaténer des chaînes de caractères ?",
        "options": ["+", "*", "/", "-"],
        "answer": 0
    },
    {
        "question": "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
        "options": ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        "answer": 1
    },
    {
        "question": "Quelle propriété CSS est utilisée pour centrer un élément horizontalement ?",
        "options": ["text-align: center;", "align: center;", "center: horizontal;", "horizontal-align: center;"],
        "answer": 0
    },
    {
        "question": "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
        "options": ["add()", "append()", "insert()", "push()"],
        "answer": 3
    },
    {
        "question": "Quel attribut HTML est utilisé pour spécifier le texte alternatif d'une image ?",
        "options": ["title", "description", "alt", "caption"],
        "answer": 2
    },
    {
        "question": "Quelle propriété CSS est utilisée pour spécifier l'espacement entre les éléments ?",
        "options": ["margin", "padding", "space", "spacing"],
        "answer": 0
    },
    {
        "question": "Quelle fonction JavaScript est utilisée pour convertir une chaîne de caractères en entier ?",
        "options": ["parseInt()", "convertToInt()", "toInteger()", "stringToNumber()"],
        "answer": 0
    },
    {
        "question": "Quelle balise HTML est utilisée pour créer une ligne horizontale ?",
        "options": ["&lt;line&gt;", "&lt;hr&gt;", "&lt;br&gt;", "&lt;hrz&gt;"],
        "answer": 1
    },
    {
        "question": "Quelle propriété CSS est utilisée pour définir la couleur du texte ?",
        "options": ["font-color", "text-color", "font", "color"],
        "answer": 3
    },
    {
        "question": "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
        "options": ["removeLast()", "pop()", "deleteLast()", "remove()"],
        "answer":  1

    },
    {
        "question": "Quel élément HTML est utilisé pour créer un formulaire ?",
        "options": ["&lt;form&gt;", "&lt;input&gt;", "&lt;field&gt;", "&lt;submit&gt;"],
        "answer": 0
    },
    {
        "question": "Quelle propriété CSS est utilisée pour afficher un élément en ligne avec les autres éléments ?",
        "options": ["display: inline;", "position: inline;", "align: inline;", "layout: inline;"],
        "answer": 0
    }
];
// Fonction pour afficher les questions du quiz
function displayQuiz() {
    const quizContainer = document.getElementById('quiz');
    let output = '';

    // Parcourir chaque question
    quizData.forEach((questionObj, index) => {
        output += '<div class="question">';
        output += `<h2>${index + 1}. ${questionObj.question}</h2>`;
        output += '<ul>';

        // Parcourir chaque option de réponse
        questionObj.options.forEach((option, optionIndex) => {
            output += '<li>';
            output += `<input type="radio" name="question${index}" value="${optionIndex}" id="q${index}o${optionIndex}">`;
            output += `<label for="q${index}o${optionIndex}">${option}</label>`;
            output += '</li>';
        });

        output += '</ul>';
        output += '</div>';
    });

    // Ajout du bouton "Soumettre"
    output += '<div class="submit-button">';
    output += '<button onclick="submitQuiz()">Soumettre</button>';
    output += '</div>';

    // Afficher les questions dans le conteneur
    quizContainer.innerHTML = output;
}

// Fonction pour démarrer le quiz
function startQuiz() {
    // Masquer la section d'introduction
    const intro = document.querySelector('.introduction');
    intro.style.display = 'none';

    // Afficher la section du quiz
    const app = document.querySelector('.app');
    app.style.display = 'block';

    // Afficher les questions
    displayQuiz();
}

// Fonction pour soumettre le quiz
function submitQuiz() {
    // Calculer le score
    let score = 0;
    let incorrectAnswers = []; // Tableau pour stocker les réponses fausses de l'utilisateur

    quizData.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const selectedOptionIndex = parseInt(selectedOption.value);
            if (selectedOptionIndex === questionObj.answer) {
                score++;
            } else {
                // Stocker les questions avec les réponses fausses
                incorrectAnswers.push({
                    question: questionObj.question,
                    correctAnswer: questionObj.options[questionObj.answer],
                    userAnswer: questionObj.options[selectedOptionIndex],
                    optionIndex: selectedOptionIndex
                });
            }
        }
    });

    // Afficher le score
    const message = document.createElement('div');
    const percentageScore = Math.round((score / quizData.length) * 100);
    if (percentageScore === 100) {
        message.textContent = `Wow ! Vous avez obtenu un score parfait !`;
    } else {
        message.textContent = `Quiz terminé`;
        const scoreDetails = document.createElement('div');
        scoreDetails.innerHTML = `
            <p>Nombre total de questions : ${quizData.length}</p>
            <p>Note totale : ${quizData.length}</p>
            <p>Votre score : ${score}</p>
            <p>Score : ${percentageScore}%</p>
        `;
        message.appendChild(scoreDetails);
    
}

    // Appliquer la classe CSS aux réponses fausses de l'utilisateur et afficher le score
    incorrectAnswers.forEach(incorrectAnswer => {
        const questionIndex = quizData.findIndex(question => question.question === incorrectAnswer.question);
        const optionIndex = incorrectAnswer.optionIndex;
        const optionElement = document.querySelector(`#q${questionIndex}o${optionIndex} + label`);
        optionElement.classList.add('incorrect');
    });

    // Afficher les réponses incorrectes (optionnel)
    if (incorrectAnswers.length > 0) {
        const incorrectList = document.createElement('ul');
        incorrectAnswers.forEach(incorrectAnswer => {
            const listItem = document.createElement('li');
            listItem.textContent = `${incorrectAnswer.question} - Vous avez répondu: ${incorrectAnswer.userAnswer}. La réponse correcte était: ${incorrectAnswer.correctAnswer}`;
            listItem.classList.add('incorrect');
            incorrectList.appendChild(listItem);
        });
        message.appendChild(incorrectList);
    } else {
        message.classList.add('correct');
    }

    // Ajouter le message de score à la page
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    quizContainer.appendChild(message);

    // Ajouter le bouton "Rejouer"
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Rejouer';
    replayButton.onclick = startQuiz; // Réinitialiser le quiz lorsque le bouton "Rejouer" est cliqué
    quizContainer.appendChild(replayButton);
}
