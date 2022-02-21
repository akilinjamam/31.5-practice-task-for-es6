// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 


// one

const divideFive = (dividing = 0) => dividing / 5;

console.log('the divisible number is :', divideFive(300));

/* ------------------------------------------------------------------------------------------------- */

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো

// two

const multiply = (num1 = -2, num2 = -2) => (num1 + 2) * (num2 + 2);

console.log('the multiplication is :', multiply(11, 22))

/* ------------------------------------------------------------------------------------------------ */

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।

// three

const threeMultiplication = (num1, num2, num3) => num1 * num2 * num3;

console.log('multiplication of three numbers is ', threeMultiplication(5, 11, 20))

/* ------------------------------------------------------------------------------------------------ */

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।

// four

const multiLineArrow = (num1, num2) => {
    const addingTwo = 2;
    const totalMultiplication = (num1 + addingTwo) * (num2 + addingTwo);

    return totalMultiplication;
}

const resultOfMultiplication = multiLineArrow(12, 15);

console.log('result of multiplication is :', resultOfMultiplication);