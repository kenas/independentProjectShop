export const firstLetterUpperCase = (category) => {
    
    const firtsLetterUpper = category.charAt(0).toUpperCase();
    
    const rest = category.slice(1);

    return firtsLetterUpper+rest;
}