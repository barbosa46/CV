function submitEvent(event){
    event.preventDefault();

    var input = document.getElementById("input");
    var command = input.value;
    
    execute(command);

    document.getElementById("inputForm").reset();

    input.focus();
}

function scrollDownResults(){
    var terminalResultsDiv = document.getElementById('terminalResultsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}

function clearResults(){
    document.getElementById("terminalResultsCont").innerHTML= "" 
}

function addResult(result){
    document.getElementById("terminalResultsCont").innerHTML += result;
    scrollDownResults();
}

function execute(command){
    switch(command){
        case "clear": 
            clearResults();
            break;

        case "hi": 
            addResult(hi);
            break;

        case "help": 
            addResult(help);
            break;

        case "basics": 
            addResult(basics);
            break;

        case "education": 
            addResult(education);
            break;

        case "courses": 
            addResult(courses);
            break;

        case "experience": 
            addResult(experience);
            break;

        case "soft": 
            addResult(soft);
            break;
            
        case "tech": 
            addResult(tech);
            break;

        case "interests": 
            addResult(interests);
            break;
        case "all":
            addResult(hi);
            addResult(help);
            addResult(basics);
            addResult(education);
            addResult(courses);
            addResult(experience);
            addResult(soft);
            addResult(tech);
            addResult(interests);
            break;
        addResult(unknownCommand);
    }
}
