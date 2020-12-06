import * as React from "react";
import { ScrollableLayout } from "../../../components/Themed";
import { ProfileMenuWrapper } from "../../../components/profile/ProfileMenuWrapper";
import { languageList } from "../../../constants/FilterValues";

function generateLanguageOptionArray() {
  const Languages = [];
  for (let i = 0; i < languageList.length; i++) {
    Languages.push({
      optionText: languageList[i],
      checkbox: true,
    });
  }
  return Languages;
}

export default function LanguagesScreen() {
  const Languages = generateLanguageOptionArray();
  return (
    <ScrollableLayout>
      <ProfileMenuWrapper options={Languages} />
    </ScrollableLayout>
  );
}
