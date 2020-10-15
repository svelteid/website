export const filterByTags = (data, tags) => {
  if (!tags || !tags.size) return data;
  return data.filter(item => {
    for (const tag of item.tags.split(',').map(item => item.trim())) {
      if (tags.has(tag)) return true;
    }
    return false;
  });
};
