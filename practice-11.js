//১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const company = {

    name: 'Mitsubishi',
    product: 'car',
    ceo: {
        name: 'akil injamam',
        id: 31,
        share: '70% share',
        position: 'owner'
    },
    work: {
        web: 'networking',
        security: 'casperisky',
        depertmenthead: 'abul bashar',
        development: {
            front: 'web designing',
            back: 'programmer'
        }
    },
}


console.log(company?.ceo?.id) //what the quation mark do ? if  the quation mark finds any undefine in the property chain , it will work and you will know which property is undefined. if it doesnt find any undefine in the property chain. it will not fall any effect in the property chain.
