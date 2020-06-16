export default function ImgUIState(
  state = {
    queue: []
  },
  action
) {
  console.log(action);
  return Object.assign([], state, action.payload);
}
