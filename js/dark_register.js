    let switchMode = document.getElementById("monk");

    switchMode.onClick = function() {
        
        let theme = document.getElementById("mon");

        if (theme.getAttribute("href") == "../dark css/register.css"){
            theme.href = "../css/register.css";
        }  else {
            theme.href = "../dark css/register.css";
        }
    }