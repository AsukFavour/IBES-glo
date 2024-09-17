// Dummy data for customers
const customers = [
  { id: 1, name: 'kendrick lamar adsddc',country:'nigeria', state:'lagos', postalcode:'10001', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', stausaction:'view', tin:'wderggbfb', businesscategory:'efgrg', businessindustry:'efjnf',requeststage:'dfnfjnfd',requesttype:'fgfgnj', mainproduct:'dfnjg', producttype:'dndff', totalamonut:'djnf', accountmanager:'sddf', salescontact:'effd', saleszone:'sdfdf',salessubunit:'sddfdf'},
  { id: 2, name: 'John Doe',country:'nigeria', state:'lagos', postalcode:'10001', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', tin:'wderggbfb', businesscategory:'efgrg', businessindustry:'efjnf',requeststage:'dfnfjnfd',requesttype:'fgfgnj', mainproduct:'dfnjg', producttype:'dndff', totalamonut:'djnf', accountmanager:'sddf', salescontact:'effd', saleszone:'sdfdf',salessubunit:'sddfdf', stausaction:'dfdf' },
  { id: 3, name: 'John Doe',country:'nigeria', state:'lagos', postalcode:'10001', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', tin:'wderggbfb', businesscategory:'efgrg', businessindustry:'efjnf',requeststage:'dfnfjnfd',requesttype:'fgfgnj', mainproduct:'dfnjg', producttype:'dndff', totalamonut:'djnf', accountmanager:'sddf', salescontact:'effd', saleszone:'sdfdf',salessubunit:'sddfdf', stausaction:'dfdf' },
  { id: 4, name: 'John Doe',country:'nigeria', state:'lagos', postalcode:'10001', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', tin:'wderggbfb', businesscategory:'efgrg', businessindustry:'efjnf',requeststage:'dfnfjnfd',requesttype:'fgfgnj', mainproduct:'dfnjg', producttype:'dndff', totalamonut:'djnf', accountmanager:'sddf', salescontact:'effd', saleszone:'sdfdf',salessubunit:'sddfdf', stausaction:'dfdf' },
  { id: 5, name: 'John Doe',country:'nigeria', state:'lagos', postalcode:'10001', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', tin:'wderggbfb', businesscategory:'efgrg', businessindustry:'efjnf',requeststage:'dfnfjnfd',requesttype:'fgfgnj', mainproduct:'dfnjg', producttype:'dndff', totalamonut:'djnf', accountmanager:'sddf', salescontact:'effd', saleszone:'sdfdf',salessubunit:'sddfdf', stausaction:'dfdf' },
  { id: 6, name: 'John Doe',country:'nigeria', state:'lagos', postalcode:'10001', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', tin:'wderggbfb', businesscategory:'efgrg', businessindustry:'efjnf',requeststage:'dfnfjnfd',requesttype:'fgfgnj', mainproduct:'dfnjg', producttype:'dndff', totalamonut:'djnf', accountmanager:'sddf', salescontact:'effd', saleszone:'sdfdf',salessubunit:'sddfdf', stausaction:'dfdf' },
  { id: 7, name: 'John Doe',country:'nigeria', state:'lagos', postalcode:'10001', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', tin:'wderggbfb', businesscategory:'efgrg', businessindustry:'efjnf',requeststage:'dfnfjnfd',requesttype:'fgfgnj', mainproduct:'dfnjg', producttype:'dndff', totalamonut:'djnf', accountmanager:'sddf', salescontact:'effd', saleszone:'sdfdf',salessubunit:'sddfdf', stausaction:'dfdf' },

];

// Populate the table with dummy data
const tableBody = document.querySelector('#jcc-id');
customers.forEach(customer => {
let row = `
  <tr data-id="${customer.id}">
    <td>${customer.name}</td>
    <td>${customer.country}</td>
    <td>${customer.state}</td>
    <td>${customer.address}</td>
    <td>${customer.postalcode}</td>
    <td>${customer.email}</td>
    <td>${customer.phone}</td>
    <td>${customer.producttype}</td>
    <td>
        <a href="#" class="view-link" data-id="${customer.id}">View</a> | 
        <a href="#" class="edit-link" data-id="${customer.id}">Edit</a>
      </td>
    <td>${customer.tin}</td>
    <td>${customer.businesscategory}</td>
    <td>${customer.businessindustry}</td>
    <td>${customer.requeststage}</td>
    <td>${customer.requesttype}</td>
    <td>${customer.mainproduct}</td>
    <td>${customer.totalamonut}</td>
    <td>${customer.accountmanager}</td>
    <td>${customer.salescontact}</td>
    <td>${customer.saleszone}</td>
    <td>${customer.salessubunit}</td>
    
  </tr>
`;
tableBody.insertAdjacentHTML('beforeend', row);
});

// Add click event to rows to open modal and display details
document.querySelectorAll('.view-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    let customerId = this.dataset.id;
    let customer = customers.find(c => c.id == customerId);

    // Populate the existing modal with customer details for viewing
    document.getElementById('modalId').textContent = customer.id;
    document.getElementById('modalName').textContent = customer.name;
    document.getElementById('modalEmail').textContent = customer.email;
    document.getElementById('modalPhone').textContent = customer.phone;
    document.getElementById('modalAddress').textContent = customer.address;
    document.getElementById('modalCountry').textContent = customer.country;
    document.getElementById('modalState').textContent = customer.state;
    document.getElementById('modalPostalCode').textContent = customer.postalcode;
    document.getElementById('modalTIN').textContent = customer.tin;
    document.getElementById('modalBusinessCategory').textContent = customer.businesscategory;
    document.getElementById('modalBusinessIndustry').textContent = customer.businessindustry;
    document.getElementById('modalRequestStage').textContent = customer.requeststage;
    document.getElementById('modalRequestType').textContent = customer.requesttype;
    document.getElementById('modalMainProduct').textContent = customer.mainproduct;
    document.getElementById('modalProductType').textContent = customer.producttype;
    document.getElementById('modalTotalAmount').textContent = customer.totalamonut;
    document.getElementById('modalAccountManager').textContent = customer.accountmanager;
    document.getElementById('modalSalesContact').textContent = customer.salescontact;
    document.getElementById('modalSalesZone').textContent = customer.saleszone;
    document.getElementById('modalSalesSubUnit').textContent = customer.salessubunit;

    // Show the "View" modal
    $('#customerModal').modal('show');
  });
});

document.querySelectorAll('.edit-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    let customerId = this.dataset.id;
    let customer = customers.find(c => c.id == customerId);

    // Populate another modal (Edit modal) with customer details for editing
    document.getElementById('editModalId').value = customer.id;
    document.getElementById('editModalName').value = customer.name;
    document.getElementById('editModalEmail').value = customer.email;
    document.getElementById('editModalPhone').value = customer.phone;
    document.getElementById('editModalAddress').value = customer.address;
    document.getElementById('editModalCountry').value = customer.country;
    document.getElementById('editModalState').value = customer.state;
    document.getElementById('editModalPostalCode').value = customer.postalcode;
    document.getElementById('editModalTIN').value = customer.tin;
    document.getElementById('editModalBusinessCategory').value = customer.businesscategory;
    document.getElementById('editModalBusinessIndustry').value = customer.businessindustry;
    document.getElementById('editModalRequestStage').value = customer.requeststage;
    document.getElementById('editModalRequestType').value = customer.requesttype;
    document.getElementById('editModalMainProduct').value = customer.mainproduct;
    document.getElementById('editModalProductType').value = customer.producttype;
    document.getElementById('editModalTotalAmount').value = customer.totalamonut;
    document.getElementById('editModalAccountManager').value = customer.accountmanager;
    document.getElementById('editModalSalesContact').value = customer.salescontact;
    document.getElementById('editModalSalesZone').value = customer.saleszone;
    document.getElementById('editModalSalesSubUnit').value = customer.salessubunit;

    // Show the "Edit" modal
    $('#editCustomerModal').modal('show');
  });
});

document.getElementById('saveEditBtn').addEventListener('click', function() {
  let customerId = document.getElementById('editModalId').value;
  let customer = customers.find(c => c.id == customerId);

  // Update the customer object with the new values
  customer.name = document.getElementById('editModalName').value;
  customer.email = document.getElementById('editModalEmail').value;
  customer.phone = document.getElementById('editModalPhone').value;
  customer.address = document.getElementById('editModalAddress').value;
  customer.country = document.getElementById('editModalCountry').value;
  customer.state = document.getElementById('editModalState').value;
  customer.postalcode = document.getElementById('editModalPostalCode').value;
  customer.tin = document.getElementById('editModalTIN').value;
  customer.businesscategory = document.getElementById('editModalBusinessCategory').value;
  customer.businessindustry = document.getElementById('editModalBusinessIndustry').value;

  // Refresh the table or apply necessary updates
  alert("Customer details updated successfully!");

  // Hide the edit modal
  $('#editCustomerModal').modal('hide');
});


