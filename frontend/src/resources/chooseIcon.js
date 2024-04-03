import React from "react";
import CatIcon from "./catIcon";
import DogIcon from "./dogIcon";
import PandaIcon from "./pandaIcon";
import RabbitIcon from "./rabbitIcon";
import FoxIcon from "./foxIcon";
import SquirtleIcon from "./squirtleIcon";
import JigglypuffIcon from "./jigglyIcon";

const iconComponents = [
  CatIcon,
  DogIcon,
  PandaIcon,
  RabbitIcon,
  FoxIcon,
  SquirtleIcon,
  JigglypuffIcon,
];

function getRandomIconComponent() {
  const randomIndex = Math.floor(Math.random() * iconComponents.length);

  return iconComponents[randomIndex];
}

function RandomIcon() {
  const IconComponent = getRandomIconComponent();

  return <IconComponent />;
}

export default RandomIcon;
