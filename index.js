
skill_Setup();

function skill_Setup()
{
    const x = document.getElementsByClassName("skill");
    
    for(let i = 0; i < x.length; i++)
    {
        const amount = x[i].getAttribute("amount");
        x[i].firstChild. += " - "+ amount+ "%";
        x[i].querySelector(".sliderfill").style.width = amount + "%";
        console.log(amount);
    }
}