import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import * as Styled from "./Icon.styles";

library.add(fal, fab, fad, fas, far);

export type IconName = "question-circle" | "copyright" | "twitter";

export interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
}

function mapNamePropToFaNames(iconName: IconName): IconProp {
  switch (iconName) {
    case "question-circle":
      return ["fal", "question-circle"];

    case "twitter":
      return ["fab", "twitter"];

    case "copyright":
      return ["fal", "copyright"];

    default:
      return ["fal", "question-circle"];
  }
}

function Icon(props: IconProps): JSX.Element {
  const { size, color, name } = props;

  const iconName = mapNamePropToFaNames(name);

  return (
    <Styled.Container size={size}>
      <FontAwesomeIcon color={color} size={"lg"} icon={iconName} />
    </Styled.Container>
  );
}

export function IconSet(props: {size: string}) {
  return (
    <Styled.IconSet>
      <Icon name="twitter" size={props.size} /> 
      <Icon name="copyright" size={props.size} /> 
      <Icon name="question-circle" size={props.size} /> 
    </Styled.IconSet>
  )
}

export default Icon as React.FC;
