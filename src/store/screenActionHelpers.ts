// import { PageData, BaseProperty } from "./types";

// export const changePropertyValue = <PropertiesEnum extends string>(
//   property: PropertiesEnum,
//   value: number | string
// ) => (prevState: PageData) => ({
//   ...prevState,
//   properties: {
//     ...prevState.properties,
//     [property]: {
//       ...(prevState.properties[property] as BaseProperty<any>),
//       value: {
//         ...prevState.properties[property].value,
//         // we set both original and current values
//         // (current might be changed after submitting on the server,
//         // but original stays the same)
//         original: value,
//         current: value
//       }
//     }
//   }
// });
