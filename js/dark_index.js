    let dark = document.querySelector(".moon2");
        dark.addEventListener('click', () => {
            let theme = document.querySelector(".dar");
                if (theme.getAttribute("href") == "../dark css/style.css"){
                 theme.href = "../css/style.css";
            }  else {
            theme.href = "../dark css/style.css";
        }
    })
