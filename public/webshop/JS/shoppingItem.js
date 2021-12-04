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
    get ItemName() {
        return this._ItemName
    }
    /**
     * @param {number} value
     */
    set ItemPrice(value) {
        if (value.length == 0) {
            console.log("ItemPrice must be filled in")
            return
        }
        if (isNaN(value)) {
            console.log("ItemPrice must be a number")
            return
        }
        this._ItemPrice = value;
    }
    get ItemPrice() {
        return this._ItemPrice
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
    get ItemDescription() {
        return this._ItemDescription
    }
    /**
     * @param {any} value
     */
    set ItemPicture(value) {
        this._ItemPicture = value;
    }
    get ItemPicture() {
        return this._ItemPicture
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
    get ItemLabel() {
        return this._ItemLabel
    }

    createHTML() {
        let niceName = this.ItemName.replace(/ /g, "_");
        let htmlString = /*html*/`
            <div class="card" style="width: 18rem">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <h5 class="card-title">${this.ItemName}</h5>
                        <h5 class="card-title">€${this.ItemPrice}</h5>
                    </div>
                    <img
                        src="images/${this.ItemPicture}"
                        class="card-img-top"
                        alt="${this.ItemName}"
                    />
                    <p class="card-text">${this.ItemDescription}</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="badge rounded-pill bg-danger">${this.ItemLabel}</span>
                        <a  class="btn btn-primary d-flex buttongroup justify-content-between">
                            <input type="number" id="inp${niceName}" class="form-control quantityPicker" min="1" value="1"/>
                            <i id="btn${niceName}" class="bi bi-cart-plus-fill"></i>
                        </a>
                    </div>
                </div>
            </div>`
        return htmlString
    }
}