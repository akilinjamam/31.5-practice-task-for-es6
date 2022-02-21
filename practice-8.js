// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।


const fullInfo = {
    name: 'Bodruddin Babu',
    profession: 'journalist',
    homeTown: 'Rangpur',
    age: 42,
    marritualStatus: 'married',
    educationQualification: 'masters in journalism'
}


const { profession, age, educationQualification } = fullInfo;
console.log(profession, age, educationQualification);