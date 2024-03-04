export default function message(text, type_mess)
{
    if(type_mess == 'error'){
        return {
            "text_mess": text,
            "error": true,
        }
    }
    else{
        return {
            "text_mess": text,
            "error": false,
        }
    }
}