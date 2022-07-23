// formats headings in English and Spanish
function TextArea(spanish: string, english: string, span_lang: boolean) {
    var main: string = english;
    var sub: string = spanish;
    if (span_lang) {
        main = spanish;
        sub = english;
    }

    return (
        <div className= "text-area">
            <h1>{main}</h1>
            <hr/>
            <h2>{sub}</h2>
        </div>
    )
}
  
export default TextArea