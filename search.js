function search() {
    var userinput = document.getElementById('search').value.toLowerCase();
    if (userinput != "") {
        if (userinput == "pants" || userinput == "pant" || userinput == "pan") {
            console.log(userinput);
            document.getElementById('searchpage').href = "prod_pants.html";
        } else if (userinput == "shirts" || userinput == "shirt" || userinput == "shir" || userinput == "shi" || userinput == "sh") {
            console.log(userinput);
            document.getElementById('searchpage').href = "prod_shirt.html";
        } else if (userinput == "tshirts" || userinput == "tshirt" || userinput == "tshir" || userinput == "tshir" || userinput == "tshi" || userinput == "t-shirt" || userinput == "t-shirts") {
            console.log(userinput);
            document.getElementById('searchpage').href = "prod_tshirt.html";
        } else if (userinput == "wallets" || userinput == "wallet" || userinput == "walet" || userinput == "wal" || userinput == "wall") {
            console.log(userinput);
            document.getElementById('searchpage').href = "prod_wallet.html";
        } else if (userinput == "shoes" || userinput == "shoe" || userinput == "sho" || userinput == "sh") {
            console.log(userinput);
            document.getElementById('searchpage').href = "prod_shoes.html";
        } else {
            alert("seach no result");
        }
    }
}

function searched() {
    var userinput = document.getElementById('searched').value.toLowerCase();
    if (userinput != "") {
        if (userinput == "pants" || userinput == "pant" || userinput == "pan") {
            console.log(userinput);
            document.getElementById('searchedpage').href = "prod_pants.html";
        } else if (userinput == "shirts" || userinput == "shirt" || userinput == "shir" || userinput == "shi" || userinput == "sh") {
            console.log(userinput);
            document.getElementById('searchedpage').href = "prod_shirt.html";
        } else if (userinput == "tshirts" || userinput == "tshirt" || userinput == "tshir" || userinput == "tshir" || userinput == "tshi" || userinput == "t-shirt" || userinput == "t-shirts") {
            console.log(userinput);
            document.getElementById('searchedpage').href = "prod_tshirt.html";
        } else if (userinput == "wallets" || userinput == "wallet" || userinput == "walet" || userinput == "wal" || userinput == "wall") {
            console.log(userinput);
            document.getElementById('searchedpage').href = "prod_wallet.html";
        } else if (userinput == "shoes" || userinput == "shoe" || userinput == "sho" || userinput == "sh") {
            console.log(userinput);
            document.getElementById('searchedpage').href = "prod_shoes.html";
        } else {
            alert("seach no result");
        }
    }
}