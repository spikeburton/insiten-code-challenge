const fs = require('fs');
const faker = require('faker');
faker.seed(12);

const companies = [];
const statuses = ['researching', 'pending', 'approved', 'declined'];

for (let i = 0; i < 25; i++) {
  const c = {};
  c.name = faker.company.companyName();
  c.description = faker.company.bs();
  c.location = faker.address.country();
  c.status = statuses[Math.floor(Math.random() * 4)];

  const contacts = [];
  let name, email, phone, title;
  for (let j = 0; j < 3; j++) {
    name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    email =
      name
        .split(' ')
        .join('_')
        .toLowerCase() +
      '@' +
      c.name
        .split(' ')[0]
        .toLowerCase()
        .replace(/[^a-z]/, '') +
      '.com';
    phone = faker.phone.phoneNumberFormat(1);
    title = faker.name.jobTitle();

    contacts.push({
      name,
      email,
      phone,
      title
    });
  }
  c.contacts = contacts;

  companies.push(c);
}

const data = JSON.stringify({
  companies
});
fs.writeFileSync('db.json', data);
