import { getLanguages } from "../../actions/getLangs";

export default function Page(){
    const result=getLanguages();
    console.log(result);
    return(
        <div>
            
        </div>
    )
    
}