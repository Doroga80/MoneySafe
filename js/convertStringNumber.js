export const convertStringNumber = (str) => {
    const noSpaceStr = str.replace(/\s+/);
    const num = parseFloat(noSpaceStr);

    if(!isNaN(num) && isFinite(num)) {
        return num;
    }else {
        return false;
    }
};