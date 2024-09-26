function calculateTime() {
    const birthdayInput = document.getElementById('birthday').value;
    const birthday = new Date(birthdayInput);
    const now = new Date();

    birthday.setFullYear(now.getFullYear());

    if (now > birthday) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    const diffTime = birthday - now;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    document.getElementById('result').innerText = `Your birthday is in ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, and ${diffSeconds} seconds!`;

    showMotivationalQuestion();
}

function showMotivationalQuestion() {
    const questions = [
        "What are you most grateful for today?",
        "What is one goal you want to achieve this week?",
        "What is something you love about yourself?",
        "What is a recent accomplishment you're proud of?",
        "What positive habit do you want to develop?"
    ];

    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    document.getElementById('motivation').innerText = randomQuestion;
}
