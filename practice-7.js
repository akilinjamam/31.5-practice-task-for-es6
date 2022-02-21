// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 


const products = [
    { name: 'T-shirt', color: 'green', price: 800, delivery: 'online' },
    { name: 'watch', color: 'black', price: 1000, delivery: 'cash' },
    { name: 'trimmer', color: 'deep gray', price: 5000, delivery: 'online' },
    { name: 'bag', color: 'gray', price: 3000, delivery: 'cash on delivery' },
    { name: 'graphices pad', color: 'chocolate', price: 3000, delivery: 'cash on delivery' },
]

const findProducts = products.find(product => product.price == 5000);
console.log(findProducts);


// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 