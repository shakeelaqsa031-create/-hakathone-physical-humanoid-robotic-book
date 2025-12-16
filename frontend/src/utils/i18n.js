const dictionary = {
    "Module 1: Modern AI Engineering": {
        ur: "ماڈیول 1: جدید مصنوعی ذہانت انجینئرنگ"
    },
    "Introduction to Physical AI": {
        ur: "جسمانی مصنوعی ذہانت کا تعارف"
    },
    // Add more translations as needed
};

export function translate(text, lang) {
    if (lang === 'en') return text;
    if (dictionary[text] && dictionary[text][lang]) {
        return dictionary[text][lang];
    }
    return text; // Fallback
}
