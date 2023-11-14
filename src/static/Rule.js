const RULE = Object.freeze({
    menuInputRule : /^[ㄱ-ㅎ|가-힣]+[-]+\d{1,2}$/,
    thousandUnitsRule : /\B(?=(\d{3})+(?!\d))/g,
});
export default RULE;