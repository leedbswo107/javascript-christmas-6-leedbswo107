class OrderMenu {
    #orderMenu;
    #dividedMenu;

    constructor(menu) {
        this.#orderMenu = menu.split(',');
    }
    async #divideOrderMenu(input) {
        let element = []
        for(let i =0; i < input.length; i++){
            element.push(input[i].split('-'));
        }
        return element;
    }
    async #stringToObject(menu) {
        const obj = {};
        const arr = await this.#divideOrderMenu(menu);
        for(let i = 0; i < arr.length; i++){
            obj[arr[i][0]] = parseInt(arr[i][1]);
        }
        return obj;
    }
    async getMenu() {
        this.#dividedMenu = await this.#stringToObject(this.#orderMenu);
        return this.#dividedMenu;
    }
}
export default OrderMenu;