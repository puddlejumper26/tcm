import { DICTIONARY_DATA_TYPE, DICTIONARY_S_DATA_TYPE } from "./dataType";

export function fitlerData(data: DICTIONARY_S_DATA_TYPE, text: any): any {
  console.log(22222, data);
  console.log(33333, text);

  const filtered = data.filter((item: DICTIONARY_DATA_TYPE) => {
    if (item.Chinese_character.toLowerCase().includes(text.toLowerCase())) {
      console.log(44444, item.English_character);
      return true;
    }
    return false;
  });

  return filtered; // 返回过滤后的数据
}
