function formatDate(date) {
  if (typeof date === 'string' && Date.parse(date)) {
    date = new Date(date);
  }

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  return date.toLocaleDateString('id-ID', options);
}

export default formatDate;
