var myShop = {

    availGoods: [
        {
            name: "Фен, 1г.",
            price: "$100",
            availNum: 3
        },
        {
            name: "Ширево, 1г.",
            price: "$70",
            availNum: 4
        },
        {
            name: "Колеса",
            price: "$90",
            availNum: 0
        }
    ],
    init: function () {
       this.displayItems();
    },
    displayItems: function () {
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
            $control.id = "purchase-button" + i;
            if (this.availGoods.availNum == 0) {
                $control.disabled = disabled;
            }
            $td.appendChild($control);
            $tr.appendChild($td);
            $table.appendChild($tr);
        }
    }
}
