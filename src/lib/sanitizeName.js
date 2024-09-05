const sanitizeName = (name) => {
  // Special characters regex
	const regex = /[^\w\s]/g;

	// Remove special characters and trim whitespace
	return name.replace(regex, '').trim();
};


export default sanitizeName