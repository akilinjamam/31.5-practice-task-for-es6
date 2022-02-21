// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।


const yourName = 'jhonson';
const state = 'california';
const country = 'America';
const profession = 'Data Base Software Ingineering';
const year = 7;

const paragraph = `
My name is ${yourName}. I live in ${state} of ${country}. My Profession is ${profession}. I have ${year}  year Experiance in ${profession}.  

`
console.log(paragraph);