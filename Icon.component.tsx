import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { IconName } from "./";

library.add(fal, fab, fad, fas, far);

export type IconProps = {
  name: IconName;
  className?: string;
};

const Icon: React.FC<IconProps> = (props): JSX.Element => {
  const { name, className } = props;

  const iconName = mapNamePropToFaNames(name);

  return (
    <div className={className}>
      <FontAwesomeIcon icon={iconName} />
    </div>
  );
};

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

export default Icon;
