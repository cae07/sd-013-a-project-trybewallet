// como a api vem com as moedas como chaves, com isso dá para usar Object.keys
// na lecture da aula de thunk o professor fez o código assim:
// export const fetchISSLocationWhitThunk = () => (dispatch) => {
//   dispatch(actionGetISSLocation());
//   return getCurrentISSLocation()
//     .then(
//       ({ iss_position }) => dispatch(actionGetISSLocationSuccess(iss_position)),
//       () => dispatch(actionGetISSLocationFail()),
//     );
// };
