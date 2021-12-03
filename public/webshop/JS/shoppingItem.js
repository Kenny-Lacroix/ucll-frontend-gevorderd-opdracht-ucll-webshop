export class shoppingItem {
    constructor(itemName, itemPrice, itemDescription, itemPicture, itemLabel) {
        this.ItemName = itemName;
        this.ItemPrice = itemPrice;
        this.ItemDescription = itemDescription;
        this.ItemPicture = itemPicture;
        this.ItemLabel = itemLabel;
    }

    /**
     * @param {string | any[]} value
     */
    set ItemName(value) {
        if (value.length == 0) {
            console.log("ItemName must be filled in")
            return
        }
        this._ItemName = value;
    }
    /**
     * @param {number} value
     */
    set ItemPrice(value) {
        if (value.length == 0) {
            console.log("ItemPrice must be filled in")
            return
        }
        if (!isNaN(value)) {
            console.log("ItemPrice must be a number")
            return
        }
        this._ItemPrice = value;
    }
    /**
     * @param { value: string; }
     */
    set ItemDescription(value) {
        if (value.length == 0) {
            console.log("ItemDescription must be filled in")
            return
        }
        this._ItemDescription = value;
    }
    /**
     * @param {any} value
     */
    set ItemPicture(value) {
        this._ItemPicture = value;
    }
    /**
     * @param {string} value
     */
    set ItemLabel(value) {
        if (value.length == 0) {
            console.log("ItemLabel must be filled in")
            return
        }
        this._ItemLabel = value;
    }
}