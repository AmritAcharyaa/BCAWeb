const sideMenu = document.getElementsByClassName("side_container")
const sideMenu_close_img = document.getElementById("closeSide_img")
const mainMenu_ham_img = document.getElementById("mainHamburger_img")
const mainMenu = document.getElementsByClassName("main_container")
const dropdown = document.getElementsByClassName("hwHeading")
const aElements = document.querySelectorAll(".txt_formatting nav ul a")
const lElements = document.querySelectorAll(".txt_phrase nav ul a")
let text_heading = document.getElementById("text_heading")
let content = document.querySelectorAll(".content p")
let imageExample = document.getElementById("image")
let imageOutput = document.getElementById("image_output")
let outputImageDiv = document.getElementsByClassName("example_img2")
const btn_output =document.getElementById("show_btn")
const actual_content = document.getElementsByClassName("actual_content")


sideMenu_close_img.addEventListener("click",()=>{
    sideMenu[0].style.display="none"
    mainMenu_ham_img.style.display="inline-block"
    // mainMenu[0].style.width="100%"

})

mainMenu_ham_img.addEventListener("click",()=>{
    sideMenu[0].style.display="inline-block"
    mainMenu_ham_img.style.display="none"
})

let countUpper = 0

dropdown[0].addEventListener("click",()=>{
    if(countUpper==0)
        {

            for(let i=0; i<aElements.length;i++){
                
                aElements[i].style.display="block"
            }
            countUpper=1
        }else{
            for(let i=0; i<aElements.length;i++){
                
                aElements[i].style.display="none"
            }
            countUpper =0
        }
})

let countLower =0
dropdown[1].addEventListener("click",()=>{
    if(countLower==0){
        for(let i=0; i<lElements.length;i++){
                
            lElements[i].style.display="block"
        }
        countLower=1
        }else{
            for(let i=0; i<lElements.length;i++){
                
                lElements[i].style.display="none"
            }
            countLower =0
        }

})


let arrFormating=["Bold Tag Makes text Bold. <b> is a presentational Tag which focus on appearance, while <strong> is a semantic tag which indicate importance",
    "Italic Tag make text Italic. It is written as <i>",
    "<U> Tag is a Underline Tag that is used to Underline a text.",
    "Super Script as <sup> is used to display text slightly above the baseline. <sup> is similar to exponents in Math",
    "Sub script as <sub> is used to display text slightly below the baseline. <sub> is similar to subscript in Math",
    "Strike Through is possible using <del> tag, which render text with a line through it, indicating deleted content",
    "Marked Text is possible using <mark> tag, which is used to highlight a text in a way that indicate its relevance"
];



for(let i=0;i<aElements.length;i++){
    aElements[i].addEventListener("click",()=>{
        text_heading.innerText=aElements[i].firstElementChild.innerText
        content[0].innerText= arrFormating[i].toString()
        imageExample.style.display="block"
        imageOutput.style.display="block"
        actual_content[0].style.display="flex"
        if(i==0){
         imageExample.src="images/bold.png"
         imageOutput.src="images/bold_output.png"
        }else if(i==1){
           
            imageExample.src="images/italic.png"
            imageOutput.src="images/italic_output.png"
        }else if(i==2){
            imageExample.src="images/underline.png"
            imageOutput.src="images/underline_output.png"
        }else if(i==3){
            imageExample.src="images/superscript.png"
            imageOutput.src="images/superscript_output.png"
        }else if(i==4){
            imageExample.src="images/subscript.png"
            imageOutput.src="images/subscript_output.png"
        }else if(i==5){
            imageExample.src="images/strike.png"
            imageOutput.src="images/strike_output.png"
        }else if(i==6){
            imageExample.src="images/mark.png"
            imageOutput.src="images/mark_output.png"
        }

        btn_output.style.display="block"
        
        outputImageDiv[0].style.display="none"

    })
}

btn_output.addEventListener("click",()=>{
    outputImageDiv[0].style.display="block"
})


//phrase

let arrPhrase=["IT indicate Emphasis",
        "Strong indicate Stronger Emphasis, it indicate importance",
        "The <cite> tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.)",
        "The <dfn> tag stands for the 'definition element', and it specifies a term that is going to be defined within the content.",
        "The <code> tag is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.",
        "The <samp> tag is used to define sample output from a computer program. The content inside is displayed in the browser's default monospace font.",
        "The <kbd> tag is used to define keyboard input. The content inside is displayed in the browser's default monospace font.",
        "The <var> tag is used to defines a variable in programming or in a mathematical expression. The content inside is typically displayed in italic.",
        "The <abbr> tag defines an abbreviation or an acronym, like 'HTML', 'CSS', 'Mr.'', 'Dr.'', 'ASAP', 'ATM'.",
        "The <acronym> tag was used in HTML 4 to define an acronym(E.g. WAC, Radar etc.)",
        "The <span> tag is an inline container used to mark up a part of a text, or a part of a document."


    ]

    for(let i=0;i<lElements.length;i++){
        lElements[i].addEventListener("click",()=>{
            text_heading.innerText=lElements[i].firstElementChild.innerText
            content[0].innerText= arrPhrase[i].toString()
            imageExample.style.display="block"
        imageOutput.style.display="block"
        actual_content[0].style.display="flex"
        if(i==0){
            imageExample.src="images/em.png"
            imageOutput.src="images/em_output.png"
           }else if(i==1){
              
               imageExample.src="images/strong.png"
               imageOutput.src="images/strong_output.png"
           }else if(i==2){
               imageExample.src="images/cite.png"
               imageOutput.src="images/cite_output.png"
           }else if(i==3){
               imageExample.src="images/dfn.png"
               imageOutput.src="images/dfn_output.png"
           }else if(i==4){
               imageExample.src="images/code.png"
               imageOutput.src="images/code_output.png"
           }else if(i==5){
               imageExample.src="images/samp.png"
               imageOutput.src="images/samp_output.png"
           }else if(i==6){
               imageExample.src="images/kbd.png"
               imageOutput.src="images/kbd_output.png"
           }else if(i==7){
            imageExample.src="images/var.png"
            imageOutput.src="images/var_output.png"
         }else if(i==8){
            imageExample.src="images/abbr.png"
            imageOutput.src="images/abbr_output.png"
        }else if(i==9){
            imageExample.src="images/acronym.png"
            imageOutput.src="images/acronym.png"
        }else if(i==10){
            imageExample.src="images/span.png"
            imageOutput.src="images/span_output.png"
        }

        btn_output.style.display="block"
        
        outputImageDiv[0].style.display="none"
        })
    }
