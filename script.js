
setInterval(timeset,1000);
let date = new Date();

function dayname(){
    if (date.getDay() =="0"){
        return "Sunday";
    } else if (date.getDay() =="1"){
        return "Monday";
    } else if (date.getDay() =="2"){
        return "Tuesday";
    } else if (date.getDay() =="3"){
        return "Wednesday";
    } else if (date.getDay() =="4"){
        return "Thursday";
    } else if (date.getDay() =="5"){
        return "Friday";
    } else if (date.getDay() =="6"){
        return "Saturday";
    }
}

function timeset(){
    let hour = document.getElementById("hour");
    let min = document.getElementById("minute");
    let day = document.getElementById("day");

    hour.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    day.innerHTML = dayname() + " | "+ date.getDate() +"."+ (date.getMonth()+1) + "." + date.getFullYear();
}





// Array containing the quotes
const quotes = [
"You have to believe in yourself when no one else does. —Serena Williams",
"When you have a dream, you've got to grab it and never let go. —Carol Burnett",
"The most important thing is to enjoy your life—to be happy—it's all that matters. —Steve Jobs",
"Spread love everywhere you go. Let no one ever come without leaving happier. —Mother Teresa",
"Be yourself; everyone else is already taken. —Oscar Wilde",
"The biggest adventure you can take is to live the life of your dreams. —Oprah Winfrey",
"The only thing we have to fear is fear itself. —Franklin D. Roosevelt",
"I can accept failure, everyone fails at something. But I can't accept not trying. —Michael Jordan",
"You've got to be in it to win it. —Tony Robbins",
"It does not matter how slowly you go, as long as you do not stop. —Confucius",
"Find out who you are and do it on purpose. —Dolly Parton",
"For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end. —Michelle Obama",
"Confident people have a way of carrying themselves that makes others attracted to them. —Sofia Vergara",
"If you can do what you do best and be happy, you are further along in life than most people. —Leonardo DiCaprio",
"You can be everything. You can be the infinite amount of things that people are. —Kesha",
"Always go with your passions. Never ask yourself if it's realistic or not. —Deepak Chopra",
"When you change your thoughts, remember to also change your world. —Norman Vincent Peale",
"The more you know who you are, and what you want, the less you let things upset you. —Stephanie Perkins",
"By being yourself, you put something wonderful in the world that was not there before. —Edwin Elliot",
"Do one thing every day that scares you. —Eleanor Roosevelt",
"It is never too late to be what you might have been. —George Elliot",
"Find out who you are and be that person. That's what your soul was put on this earth to be. Find the truth, live that truth, and everything else will come. —Ellen DeGeneres",
"When we are no longer able to change a situation, we are challenged to change ourselves. —Viktor E. Frankl",
"If you cannot do great things, do small things in a great way. —Napoleon Hill",
"Always do your best. What you plant now, you will harvest later. —Og Mandino",
"Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer. —Oprah Winfrey",
"If you don't like the road you're walking, start paving another one. —Dolly Parton",
"Don't let yesterday take up too much of today.—Will Rogers",
"Keep smiling, because life is a beautiful thing and there's so much to smile about. —Marilyn Monroe",
"Be persistent and never give up hope. —George Lucas",
"When we strive to become better than we are, everything around us becomes better too. —Paulo Coelho",
"Believe and act as if it were impossible to fail. —Charles Kettering",
"There are so many great things in life; why dwell on negativity? —Zendaya",
"Happiness often sneaks in through a door you didn't know you left open. —John Barrymore",
"Always remember that you are absolutely unique. Just like everyone else. —Margaret Mead",
"Keep your face towards the sunshine and shadows will fall behind you. —Walt Whitman",
"A problem is a chance for you to do your best. —Duke Ellington",
"You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens. —Mandy Hale",
"Nothing is impossible. The word itself says 'I'm possible!' —Audrey Hepburn",
"Life does not have to be perfect to be wonderful. —Annette Funicello",
"It is during our darkest moments that we must focus to see the light. —Aristotle",
"The best way out is through. —Robert Frost",
"Don't be afraid to give up the good to go for the great. —John D. Rockefeller",
"Whether you think you can or you can't, you're right. —Henry Ford",
"Don't take yourself too seriously. Know when to laugh at yourself, and find a way to laugh at obstacles that inevitably present themselves. —Halle Bailey",
"Love the life you live. Live the life you love. —Bob Marley",
"Keep your face towards the sunshine and shadows will fall behind you. —Walt Whitman",
"The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson",
"I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that. —Ava DuVernay",
"If you change the way you look at things, the things you look at change. —Wayne Dyer",
"You will face many defeats in life, but never let yourself be defeated. —Maya Angelou",
"The future belongs to those who believe in the beauty of their dreams. —Eleanor Roosevelt",
"Take the time to enjoy the little things, for one day you may look back and realize they were the big things. —Robert Brault",
"The future is not something we enter. The future is something we create. —Leonard I. Sweet",
"Life has got those twists and turns. You've got to hold on tight and off you go. —Nicole Kidman",
"The future belongs to those who prepare for it today. —Malcolm X",
"Don't wait around for other people to be happy for you. Any happiness you get you've got to make yourself. —Alice Walker",
"You miss 100% of the shots you don't take. —Wayne Gretzky",
"Life is a long lesson in humility. —James M. Barrie",
"You define your own life. Don't let other people write your script. —Oprah Winfrey",
"We must let go of the life we have planned, so as to accept the one that is waiting for us. —Joseph Campbell",
"We make a living by what we get, but we make a life by what we give. —Winston Churchill",
"Mistakes are a fact of life. It is the response to the error that counts. —Nikki Giovanni",
"When I let go of what I am, I become what I might be. —Lao Tzu",
"Ignore your mistakes. The number one thing to worry about is: Am I doing what I'm good at? —Max Levchin",
"If you are not willing to risk the usual, you will have to settle for the ordinary. —Jim Rohn",
"Life has no limitations, except the ones you make. —Les Brown",
"In the end, it's not the years in your life that count. It's life in your years. —Abraham Lincoln",
"You may not control all the events that happen to you, but you can decide not to be reduced by them. —Maya Angelou",
"Life is a succession of lessons which must be lived to be understood. —Ralph Waldo Emerson",
"Dreaming, after all, is a form of planning. —Gloria Steinem",
"We become what we think about most of the time. —Earl Nightingale",
"Life is very interesting…in the end, some of your greatest pains become your greatest strengths. —Drew Barrymore",
"Life is a daring adventure or it is nothing at all. —Helen Keller",
"Life is made of ever so many partings welded together. —Charles Dickens",
"Success is falling nine times and getting up 10. —Jon Bon Jovi",
"Develop success from failures. Discouragement and failures are two of the surest stepping stones to success. —Dale Carnegie",
"Start where you are. Use what you have. Do what you can. —Arthur Ashe",
"Before anything else, preparation is the key to success. —Alexander Graham Bell",
"Ambition is the path to success. Persistence is the vehicle you arrive in. —Bill Bradley",
"If you don't have any shadows you're not in the light. —Lady Gaga",
"There are no regrets in life. Just lessons. —Jennifer Aniston",
"Coming together is a beginning; keeping together is progress; working together is success. —Henry Ford",
"If you have knowledge, let others light their candles in it. —Margaret Fuller",
"A person who never made a mistake never tried anything new. —Albert Einstein",
"How dare you settle for less when the world made it so easy for you to be remarkable? —Seth Godin",
"Challenges are what make life interesting and overcoming them is what makes life meaningful. —Joshua J. Marine",
"We cannot solve problems with the kind of thinking we employed when we came up with them. —Albert Einstein",
"It's always better to shock people and change people's expectations than to give them exactly what they think you can do. —Jonah Hill",
"And when you want something, all the universe conspires in helping you achieve it. —Paulo Coelho",
"Don't judge each day by the harvest you reap but by the seeds that you plant. —Robert Louis Stevenson",
"It is better to fail in originality than to succeed in imitation. —Herman Melville",
"Don't worry about failure, you only have to be right once. —Drew Houston",
"Experience is a hard teacher because she gives the test first, the lesson afterwards. —Vernon Sanders Law",
"Dream big and dare to fail. —Norman Vaughan",
"Be sure you put your feet in the right place, then stand firm. —Abraham Lincoln",
"I'm not going to continue knocking on that old door that doesn't open for me. I'm going to create my own door and walk through that. —W.P. Kinsella",
"For the great doesn't happen through impulse alone, and is a succession of little things that are brought together. —Vincent Van Gogh",
"Life is a succession of lessons which must be lived to be understood. —Ralph Waldo Emerson",
"It's a good place when all you have is hope and not expectations. —Danny Boyle"
];
let r = (100*Math.random())

document.getElementById("quote").innerText = quotes[Math.round(r)];
  

