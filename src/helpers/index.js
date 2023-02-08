export const randomValue = (data) => {
    const index = Math.floor((Math.random() * data.length));
    return data[index];
};

export const removeSpaces = text => text.replace(/\s/g, '');
