import { TranslationWidget } from "./translation-widget";
import translate from "translate";

translate.engine = process.env.ENGINE;
translate.key = process.env.KEY;

export function App() {
    return (
        <TranslationWidget
            translate={translate}
            fromLanguage={'Russian'} 
            toLanguage={'English'}
        />
    );
}