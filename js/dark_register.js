    let dark = document.querySelector(".moon2");
        dark.addEventListener('click', () => {
            let theme = document.querySelector(".dar");
                if (theme.getAttribute("href") == "../dark css/register.css"){
                 theme.href = "../css/register.css";
            }  else {
            theme.href = "../dark css/register.css";
        }
    })
// switchMode.onClick = function() {

   // consoloe.log('NAZAR_XYI')
       // let theme = document.getElementById("mon");
//
       // if (theme.getAttribute("href") == "../dark css/register.css"){
       //     theme.href = "../css/register.css";
       // }  else {
       //     theme.href = "../dark css/register.css";
       // }
   // }