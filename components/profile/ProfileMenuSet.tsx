import * as React from "react";
import { ScrollableLayout } from "../../components/Themed";
import { SubMenu } from "../../types";
import { ProfileMenuWrapper } from "../../components/profile/ProfileMenuWrapper";

type Prop = {
  subMenus: Array<SubMenu>;
  checked?: boolean;
};

export default function ProfileMenuSet(prop: Prop) {
  const { subMenus } = prop;
  return (
    <ScrollableLayout>
      {subMenus.map((subMenu, i) => (
        <ProfileMenuWrapper
          options={subMenu.optionList}
          title={subMenu.title}
          key={i}
          firstItem={i === 0}
        />
      ))}
    </ScrollableLayout>
  );
}
