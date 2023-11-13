class MenuToArray{
    #arrayMenu

    constructor(menu) {
        this.#arrayMenu = menu.split(",");
    }

    getMenuToArray() { 
        this.validator.validateMenuPattern(this.#arrayMenu);
        return this.#arrayMenu;
    }
}
export default MenuToArray;