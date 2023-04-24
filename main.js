var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        let formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		} else {
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {
        productCode: $('#productCode').val(),
        product: $('#product').val(),
        qty: $('#qty').val(),
        perCost: $('#perCost').val(),
        msrp: $('#msrp').val()
    };
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td>' + data.productCode + '</td>';
    cols += '<td>' + data.product + '</td>';
    cols += '<td>' + data.qty + '</td>';
    cols += '<td>' + data.perCost + '</td>';
    cols += '<td>' + data.msrp + '</td>';
    cols += '<td><button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button></td>';
    newRow.append(cols);
    $("#itemList").append(newRow);
  }
  

//Edit the data
function onEdit(td) {
    selectedRow = $(td).parent().parent();
    $("#productCode").val(selectedRow.find("td:eq(0)").html());
    $("#product").val(selectedRow.find("td:eq(1)").html());
    $("#qty").val(selectedRow.find("td:eq(2)").html());
    $("#perCost").val(selectedRow.find("td:eq(3)").html());
    $("#msrp").val(selectedRow.find("td:eq(4)").html());
  }
  
  function updateRecord(formData) {
    $(selectedRow).find("td:eq(0)").html(formData.productCode);
    $(selectedRow).find("td:eq(1)").html(formData.product);
    $(selectedRow).find("td:eq(2)").html(formData.qty);
    $(selectedRow).find("td:eq(3)").html(formData.perCost);
    $(selectedRow).find("td:eq(4)").html(formData.msrp);
  }  

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('itemList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    $("#productCode, #product, #qty, #perCost, #msrp").val('');
    selectedRow = null;
  }
  

