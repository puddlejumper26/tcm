// export interface DICTIONARY_DATA_TYPE {
//   id: number;
//   Chinese_character: string;
//   English_character: string;
//   uuid: string;
// }
//
// export type DICTIONARY_S_DATA_TYPE = DICTIONARY_DATA_TYPE;

// // Define a type for the structure of each entry
// export interface DICTIONARY_DATA_TYPE {
//   id: number;
//   Chinese_character: string;
//   English_character: string;
//   uuid: string;
// }
//
// // Define a type for the overall MockData object
// export interface DICTIONARY_S_DATA_TYPE {
//   [key: string]: DICTIONARY_DATA_TYPE;
// }
// Define an interface for the structure of each entry
export interface DICTIONARY_DATA_TYPE {
  id: number;
  Chinese_character: string;
  English_character: string;
  uuid: string;
}

// Define a type for the array of entries
export type DICTIONARY_S_DATA_TYPE = DICTIONARY_DATA_TYPE[];
