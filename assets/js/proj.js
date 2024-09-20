const projects = [
    {title:"Deep Learning Handwritten Math Scanner", 
        description:"A handwritten math scanner using a transformer model", 
        img:"/assets/img/Deep-learning-for-computer-vision2.png",
        date:"2023-04-01", 
        tools:"PyTorch", 
        details:["Researched on Convolutional Recurrent Neural Networks (CRNN) architecture and the Connectionist Temporal Classification (CTC) loss function to investigate potential deep learning models for the project",
            "Developed the primary deep learning model architecture featuring Convolutional Neural Network (CNN) layers followed by Transformers resulting in 98% accuracy",
            "Enhanced model performance by integrating state-of-the-art image recognition models for initial data processing, resulting in improved efficiency and accuracy",
            "Trained and fine-tuned both models extensively to achieve peak performance tailored to their respective arwchitectures, ensuring optimal results for the project’s objectives"]
    },
    {title:"Animation Game: Moving Out", 
        description:"Program DE1-SoC board to drive an animation game", 
        img:"/assets/img/Deep-learning-for-computer-vision2.png",
        date:"2023-03-01", 
        tools:"C, DE1-SoC board", 
        details:["Programmed the DE1-SoC board to respond to interrupts generated by a PS2 keyboard and display corresponding animations on a VGA display",
            "Incorporated data structures enabling player interaction with movable objects and barriers within the game environment",
            "Developed algorithms to efficiently manage animation loops and facilitate game restarts, enhancing the overall gaming experience"]
    },
    {title:"Web City Mapping and Path Finding System", 
        description:"Online map with navigation interface", 
        img:"/assets/img/Deep-learning-for-computer-vision2.png",
        date:"2022-04-01", 
        tools:"C++", 
        details:["Took initiative as the project manager to distribute works and set internal deadlines to monitor the progress of the project",
            "Implemented functions from StreetsDatabaseAPI and OSMDatabaseAPI to display different geographical elements of cities",
            "Used heuristic methods, for example, A* algorithm, 2-op algorithm, and local permutation method to find solution for traveling salesman problem"]
    },
];

let cur_idx = 0;

function displayProject(idx){
    if (idx >= projects.length) return;
    const projectContainer = document.getElementById('most_recent_project');

    const project = projects[idx];

//    const projectDiv = document.createElement('div');
//    projectDiv.classList.add("col s12 m6 l4");
//    projectDiv.classList.add("col", "s12", "m6", "l4");

//    const projectCard = document.createElement('div');
//    projectCard.classList.add("card");
//    projectCard.classList.add("card", "medium");
/*
    const cardImg = document.createElement('div');
    cardImg.classList.add("card-image", "waves-effect", "waves-block", "waves-light");
    const Img = document.createElement('img');
    Img.setAttribute('alt', 'django web app');
    Img.setAttribute('src', project.img);
    Img.setAttribute('style', "height: 100%; width: 100%");
    Img.setAttribute('class', "activator");
    cardImg.appendChild(Img);

    const cardContent = document.createElement('div');
    cardContent.classList.add("card-content");
    const cardContentSpan = document.createElement('span');
    cardContentSpan.classList.add("card-title","activator","teal-text","hoverline");
    cardContentSpan.appendChild(document.createTextNode(project.title));
    const cardContentSpanI = document.createElement('i');
    cardContentSpanI.classList.add("mdi-navigation-more-vert","right");
    cardContentSpan.appendChild(cardContentSpanI);
    const cardContentP = document.createElement('p');
    cardContentP.appendChild(document.createTextNode(project.description));
    cardContent.appendChild(cardContentSpan);
    cardContent.appendChild(cardContentP);

    const cardReveal = document.createElement('div');
    cardReveal.classList.add("card-reveal");
    const cardRevealSpan = document.createElement('span');
    cardRevealSpan.classList.add("card-title","brown-text");
    const cardRevealSpanSmall = document.createElement('small');
    cardRevealSpanSmall.appendChild(document.createTextNode("Accomplishments"));
    const cardRevealSpanI = document.createElement('i');
    cardRevealSpanI.classList.add("mdi-navigation-close","right");
    cardRevealSpan.appendChild(cardRevealSpanSmall);
    cardRevealSpan.appendChild(cardRevealSpanI);
    const cardRevealUl = document.createElement('ul');
    const cardRevealUlTool = document.createElement('li');
    const cardRevealUlToolB = document.createElement('b');
    cardRevealUlToolB.appendChild(document.createTextNode("Tools: "));
    cardRevealUlTool.appendChild(cardRevealUlToolB);
    cardRevealUlTool.appendChild(document.createTextNode(project.tools));
    cardRevealUl.appendChild(cardRevealUlTool);
    project.details.forEach(detail => {
        const cardRevealUlLi = document.createElement('li');
        cardRevealUlLi.appendChild(document.createTextNode(detail));
        cardRevealUl.appendChild(cardRevealUlLi);
    });
    cardReveal.appendChild(cardRevealSpan);
    cardReveal.appendChild(cardRevealUl);

*/
//    projectCard.appendChild(cardImg);
//    projectCard.appendChild(cardContent);
//    projectCard.appendChild(cardReveal);

//    projectDiv.appendChild(projectCard);
//    projectContainer.appendChild(projectDiv);

}

function pressLoadMore() {

    if (cur_idx < projects.length) {
        displayProject(cur_idx);
        cur_idx++;

        // Hide the "Load More" button if all projects are loaded
        if (cur_idx >= projects.length) {
            document.getElementById('load-more').style.display = 'none';
        }
    }
}

document.getElementById('load-more').addEventListener('click', pressLoadMore);
pressLoadMore();