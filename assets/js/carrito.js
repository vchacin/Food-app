let Cart = {
    Items: [],
    Add: function(id, cantidad, precio, nombre){
        let p = {};
        p.Id = id;
        p.Cantidad = cantidad;
        p.Precio = precio;
        p.Subtotal = precio * cantidad;
        p.Nombre = nombre;
        
        let existe = Cart.Check(id);

        if(existe){
            Cart.Update(id, cantidad);
        }
        else{
            Cart.Items.push(p);
        }

        Cart.UpdateUI();

        console.log(Cart.Items);
    },
    Clean: function(){
        Cart.Items = [];
        // document.querySelectorAll('p[id*="contador-"]').innerHTML = 0;
        Cart.UpdateUI();
    },
    GetTotalSinImpuesto: function(){
        let total = 0;
        if(Cart.Items.length > 0){
            for(var i = 0; i < Cart.Items.length; i++){
                total += Cart.Items[i].Subtotal;
            }
        }
        return total;
    },
    Check: function(id){
        let existe = false;
        for(var i = 0; i < Cart.Items.length; i++){
            if(Cart.Items[i].Id == id){
                existe = true;
            }
        }
        return existe;
    },
    Update: function(id, cantidad){
        for(var i = 0; i < Cart.Items.length; i++){
            if(Cart.Items[i].Id == id){
                Cart.Items[i].Cantidad = cantidad;
                Cart.Items[i].Subtotal = Cart.Items[i].Cantidad * Cart.Items[i].Precio;
            }
        }
    },
    GetValorImpuesto: function () {
        let totalParcial = Cart.GetTotalSinImpuesto();
        const IVA = 21/100;
        return totalParcial * IVA;
    },
    GetTotal: function () {
        let totalFinal = Cart.GetTotalSinImpuesto() + Cart.GetValorImpuesto();
        return totalFinal;
    },
    UpdateUI: function(){
        let subtotalUI = Cart.GetTotalSinImpuesto();
        let valorSinImpuesto = Cart.GetValorImpuesto();
        let valorTotal = Cart.GetTotal();
        SetValue('subtotal', subtotalUI.toFixed(2));
        SetValue('impuestos', valorSinImpuesto.toFixed(2));
        SetValue('total', valorTotal.toFixed(2));
    },
    ShowItemsUI: function(){
        let itemsHTML = "";
        if (Cart.Items.length > 0) {
            for (var i = 0; i < Cart.Items.length; i++ ){
                itemsHTML += ``
            }
        }
    }
};