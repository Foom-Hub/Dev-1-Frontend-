
    function myFunction() {
    var txtVal = document.getElementById("txtVal").value,
        listNode = document.getElementById("List"),
        liNode = document.createElement("Li"),
        txtNode = document.createTextNode(txtVal);

        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
    }
