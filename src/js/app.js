// функция извлекающая массив со специальными полями из объекта
export default function extractSpecialFields(special) {
  return special.map(({
    id, name, description = 'Описание недоступно', icon,
  }) => ({
    id, name, description, icon,
  }));
}
