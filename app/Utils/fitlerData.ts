import { DICTIONARY_DATA_TYPE, DICTIONARY_S_DATA_TYPE } from "./dataType";

export function fitlerDataEN2CN(data: DICTIONARY_S_DATA_TYPE, text: any): any {
  const filtered = data.filter((item: DICTIONARY_DATA_TYPE) => {
    if (item.Chinese_character.toLowerCase().includes(text.toLowerCase())) {
      return true;
    }
    return false;
  });

  return filtered; // 返回过滤后的数据
}
