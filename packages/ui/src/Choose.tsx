import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LanguageState, LanguageId } from '../../../packages/atom/code';

// Define the Language interface
interface Language {
  id: string;
  name: string;
}

// Define the props type for the Choose component
interface ChooseProps {
  languages: Language[];
}

export const Choose = ({ languages }: ChooseProps) => {
  const [visible, setVisible] = useState(false);
  const [LanguageName, setLangaugeName] = useRecoilState(LanguageState);
  const setLangaugeId = useSetRecoilState(LanguageId);

  async function handleClick() {
    setVisible(!visible);
  }

  if (!visible) {
    return (
      <div>
        <button onClick={handleClick}>{LanguageName}</button>
      </div>
    );
  } else {
    return (
      <div className="absolute z-50 bg-white">
        <button onClick={handleClick}>{LanguageName}</button>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((lang, index) => (
            <button
              key={index}
              onClick={() => {
                setLangaugeName(lang.name);
                setLangaugeId(lang.id);
                setVisible(!visible);
              }}
              className="absolute z-100 text-black cursor-pointer"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
      
    );
  }
};
