
skill_Setup();
setupPortfolio();
ContactBtn();

function skill_Setup()
{
    const x = document.getElementsByClassName("skill");
    
    for(let i = 0; i < x.length; i++)
    {
        const amount = x[i].getAttribute("amount");
        x[i].firstElementChild.textContent += " - "+ amount+ "%";
        x[i].querySelector(".sliderfill").style.width = amount + "%";
    }
}

async function setupPortfolio() {
    const portfolioView = document.querySelector('.Portfolio');
    const projects = document.querySelectorAll('.pjp');
    let projectopen = 0;
    let projectsData;

    try {
        const response = await fetch('projects.json');
        projectsData = await response.json();
    } catch (error) {
        console.error('Error loading projects data:', error);
        return;
    }

    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-project-id');
            const projectInfo = projectsData.projects.find(p => p.id === projectId);
            
            if (projectInfo) {
                projectopen = 1;
                const imgContainer = portfolioView.querySelector('.Pimg');
                const descContainer = portfolioView.querySelector('.Pdesc');
                
                // Clear existing images
                imgContainer.innerHTML = '';
                
                // Add new images
                projectInfo.images.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = projectInfo.title;
                    imgContainer.appendChild(img);
                });
                
                // Update description
                descContainer.querySelector('h1').textContent = projectInfo.title;
                descContainer.querySelector('p').innerHTML = projectInfo.description;
                const link = descContainer.querySelector('a');
                link.href = projectInfo.link;
                link.textContent = 'View Project';
                
                // Show portfolio view
                portfolioView.style.display = 'flex';
            }
        });
    });

    document.addEventListener('mouseup', () => {
        if (projectopen === 1) {
            projectopen = 2;
        }
    });
    // Add close functionality
    document.addEventListener('click', (e) => {
        if (!portfolioView.contains(e.target) && projectopen === 2) {
            portfolioView.style.display = 'none';
            projectopen = 0;
        }
    });
}

function ContactBtn()
{
    const contactme = document.querySelector('#ContactBtn');
    const Abtdiv = document.getElementById('IDCard');

    window.addEventListener('scroll', () => {
        if (window.scrollY > Abtdiv.offsetTop + Abtdiv.offsetHeight) {
            contactme.style.display = 'block';
            contactme.style.animation = 'fadeIn 0.75s';
        } else {
            contactme.style.animation = 'fadeOut 0.75s';
        }
    });
    
    contactme.addEventListener('animationend', () => {
        console.log('animationend');
        if (window.scrollY > Abtdiv.offsetTop + Abtdiv.offsetHeight) {
            contactme.style.display = 'block';
        } else {
            contactme.style.display = 'none';
        }
    });    
}

