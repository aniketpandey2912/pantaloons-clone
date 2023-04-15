import React from "react";

type optionProp = {
  title: string;
  list: string[];
  newArrivals: string[];
  shopByOccasion: string[];
};

type Props = {
  options: optionProp[];
};

function HoverDropdown({ options }: Props) {
  return <div>HoverDropdown</div>;
}

export default HoverDropdown;
