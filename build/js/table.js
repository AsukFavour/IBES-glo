// Dummy data for customers
const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', address: '456 Oak Ave' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '456-789-0123', address: '789 Pine Rd' },
  { id: 4, name: 'Bob Lee', email: 'bob@example.com', phone: '321-654-9870', address: '101 Maple St' },
  { id: 5, name: 'Chris Evans', email: 'chris@example.com', phone: '555-123-4567', address: '202 Birch Ln' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', phone: '666-789-1234', address: '303 Cedar Dr' },
  { id: 7, name: 'Eve Torres', email: 'eve@example.com', phone: '777-654-0987', address: '404 Spruce St' },
  { id: 8, name: 'Frank White', email: 'frank@example.com', phone: '888-321-6543', address: '505 Elm St' },
  { id: 9, name: 'Grace Kim', email: 'grace@example.com', phone: '999-456-7890', address: '606 Willow Ln' },
  { id: 10, name: 'Hank Hill', email: 'hank@example.com', phone: '000-123-9876', address: '707 Aspen Ct' },
  { id: 11, name: 'Hank Hill', email: 'hank@example.com', phone: '000-123-9876', address: '707 Aspen Ct' },
  { id: 12, name: 'Hank Hill', email: 'hank@example.com', phone: '000-123-9876', address: '707 Aspen Ct' },
  { id: 13, name: 'Hank Hill', email: 'hank@example.com', phone: '000-123-9876', address: '707 Aspen Ct' }
];

// Populate the table with dummy data
const tableBody = document.querySelector('#customer-table-body');
customers.forEach(customer => {
  let row = `
    <tr data-id="${customer.id}">
      <td>${customer.id}</td>
      <td>${customer.name}</td>
      <td>${customer.email}</td>
      <td>${customer.phone}</td>
      <td>${customer.address}</td>
    </tr>
  `;
  tableBody.insertAdjacentHTML('beforeend', row);
});


document.querySelectorAll('#customer-table-body tr').forEach(row => {
  row.addEventListener('click', function() {
    let customerId = this.dataset.id;
    let customer = customers.find(c => c.id == customerId);

    document.querySelector('#customer-details').innerText = `
      Customer
      Name: ${customer.name}\n
      Email: ${customer.email}\n
      Phone: ${customer.phone}\n
      Address: ${customer.address}
    `;
    document.querySelector('#customerModal').style.display = 'block';
  });
});

// Close modal
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('#customerModal').style.display = 'none';
});