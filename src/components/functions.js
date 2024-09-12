const statMod = (stat) => {
    if (stat < 1 || stat > 30) {
        return "Invalid Score"
    } else if (stat < 2) {
        return -5;
    } else if (stat < 4) {
        return -4;
    } else if (stat < 6) {
        return -3;
    } else if (stat < 8) {
        return -2;
    } else if (stat < 10) {
        return -1;
    } else if (stat < 12) {
        return 0;
    } else if (stat < 14) {
        return 1;
    } else if (stat < 16) {
        return 2;
    } else if (stat < 18) {
        return 3;
    } else if (stat < 20) {
        return 4;
    } else {
        return 5;
    }
}

const profBonus = (level) => {
    if(level < 1 || level > 20) {
        return "invalid level"
    } else if(level < 5) {
        return 2
    } else if(level < 9) {
        return 3
    } else if(level < 13) {
        return 4
    } else if(level < 17) {
        return 5
    } else {
        return 6
    }
}

const profCalc = (pB, stat, prof) => {
    // pB is proficiency bonus from the character data (int)
    // stat is the value of the stat for the saving throw/ skill in question (int)
    // prof is whether the character is proficient in skill or not (bool)
    let skillScore = statMod(stat)
    if(prof) {
        skillScore += pB
    }
    return skillScore

}


export { statMod, profBonus, profCalc }