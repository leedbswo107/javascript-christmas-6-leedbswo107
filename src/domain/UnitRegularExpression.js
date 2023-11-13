class UnitRegularExpression{
    uniRegularExpression(input) {
        const commaInput = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return commaInput;
    }
}
export default UnitRegularExpression;