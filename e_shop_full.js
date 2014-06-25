var myShop = {

    availGoods: [
        {
            name: "Фен, 1г.",
            price: 100,
            availNum: 3
        },
        {
            name: "Ширево, 1г.",
            price: 70,
            availNum: 4
        },
        {
            name: "Колеса",
            price: 90,
            availNum: 0
        }
    ],

    shoppingCart: [],

    init: function () {
        this.displayItems();
    },
    displayItems: function () {
        var self = this;
        for (var i = 0; i < this.availGoods.length; i++) {
            var $tr = document.createElement('tr'),
                $td = document.createElement('td'),
                $control = document.createElement('input'),
                $table = document.getElementById("availGoodsTable");
            $td.innerHTML = this.availGoods[i].name;
            $tr.appendChild($td);
            $table.appendChild($tr);
            $td = document.createElement('td');
            $td.innerHTML = this.availGoods[i].price;
            $tr.appendChild($td);
            $table.appendChild($tr);
            $td = document.createElement('td');
            $td.class = "buyButt";
            $control.type = "button";
            $control.value = "Купить";
            $control.itemId = i;
            if (this.availGoods[i].availNum == 0) {
                $control.disabled = "disabled";
            }
            $control.addEventListener('click', function () {
                self.addGood(this.itemId);
            }, false);
            $td.appendChild($control);
            $tr.appendChild($td);
            $table.appendChild($tr);
        }
    },

    addGood: function (itemID) {
        var i = this.findId(itemID);
        if (i>=0) {
            this.shoppingCart[i].addedNum++;
            return;
        };
        var addedGood = {
            name: this.availGoods[itemID].name,
            price: this.availGoods[itemID].price,
            addedNum: 1,
            id: itemID
        };
        this.shoppingCart.push(addedGood);
        console.log(this.shoppingCart);
    },

    findId: function(itemID) {
        for (var i = 0; i  < this.shoppingCart.length; i++) {
            if (this.shoppingCart[i].id == itemID) {
                return i;
            }
        }
    }
}
