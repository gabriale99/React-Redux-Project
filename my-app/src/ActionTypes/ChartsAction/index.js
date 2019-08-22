import Action from "../ActionIDs";

const switchBars = () => {
  return{
    type: Action.SWITCHING_BARS,
  };
}

export default { switchBars };