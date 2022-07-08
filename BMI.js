function BMI() {
    const massAshok = 62;
    const heightAshok = 1.69;
    const massPushpa = 53;
    const heightPushpa = 1.5;
    const BMIAshok = massAshok / heightAshok ** 2;
    const BMIPushpa = massPushpa / (heightPushpa * heightPushpa);
    const markHigherBMI = BMIAshok > BMIPushpa;
    return markHigherBMI;
}