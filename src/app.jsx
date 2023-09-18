import { TranslationWidget } from "./translation-widget";
import translate from "translate";

translate.engine = 'yandex';
translate.key = 'trnsl.1.1.20230915T061310Z.63215d51d2ea0df6.503729cff78b765092a210ff2d4f5425c6613152';

export function App() {
    return (
        <TranslationWidget
            translate={translate}
            fromLanguage={'Russian'} 
            toLanguage={'English'}
        />
    );
}