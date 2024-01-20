export default function message(text, type_mess)
{
    if(type_mess == 'error'){
        return {
            "error": true,
            "text_mess": text,
        }
    }
    else{
        return {
            "error": false,
            "text_mess": text,
        }
    }
}