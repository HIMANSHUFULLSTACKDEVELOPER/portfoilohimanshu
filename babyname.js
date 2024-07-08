  // JavaScript function to display boy
  function displayBoysNames() {
    displayNames('boys');
}

// JavaScript function to display girl n
function displayGirlsNames() {
    displayNames('girls');
}

// JavaScript function to display names 
function displayNames(gender) {
    const letterInput = document.getElementById('letterInput').value.toUpperCase();
    const nameContainer = document.getElementById('name-container');
    nameContainer.innerHTML = ''; // Clear previous content

    // Mapping of letters to names
    const names = {
        'A': {
            'boys': 'ayush, aryan, aman, Aadi, Aarav, Aarnav, Ananya, Aditya, Anika, Akash',
            'girls': 'Aarohi, Aadhya, Aaradhya, Aaravi, Aarna, Aanya, Aahana, Aashi, Aahana, Ananya'
        },
        'B': {
            'boys': 'Baabul, Bhavya, Bhagat, Brijesh, Barkha, Bhuvan, Bimal, Bhavana, Bhaskar, Babita',
            'girls': 'Bhoomi, Bhavna, Bhumi, Bhakti, Bhavana, Bhargavi, Bhadra, Bhagirathi, Bhanvi, Bhavana'
        },
        'C': {
            'boys': 'Chetan, Chirag, Chinmay, Charu, Chaitanya, Chandni, Chhavi, Chandra, Chandan, Charul',
            'girls': 'Chahat, Chanchal, Charulata, Charvi, Chitra, Chandni, Chhavi, Chandana, Chaitali, Chavi'
        },
        'D': {
            'boys': 'Divya, Dhruv, Danish, Disha, Dinesh, Deepak, Diksha, Devansh, Darshan, Diya',
            'girls': 'Daksha, Damini, Deepika, Devika, Dhriti, Divya, Dolly, Dipika, Disha, Diksha'
        },
        'E': {
            'boys': 'Ekta, Eshaan, Eknath, Esha, Eshan, Eshita, Eshwar, Ekansh, Eshani, Eesha',
            'girls': 'Ekta, Eshita, Esha, Eshwari, Eshika, Ekanshi, Eshani, Eshana, Eshika, Eesha'
        },
        'F': {
            'boys': 'Farhan, Firoz, Faizan, Faisal, Fariha, Farah, Fathima, Faiza, Faris, Fida',
            'girls': 'Farida, Fiza, Firdaus, Fatima, Fariha, Faiza, Fathima, Fauzia, Faria, Falak'
        },
        'G': {
            'boys': 'Gaurav, Gautam, Gopal, Garima, Gitanjali, Geeta, Gauri, Gopal, Gunjan, Ganesh',
            'girls': 'Garima, Gauri, Gayatri, Gopika, Gurleen, Ganga, Gargi, Grishma, Gulab, Gurpreet'
        },
        'H': {
            'boys': 'Harsh, Hitesh, Himanshu, Harshita, Hema, Hina, Heena, Hira, Hansika, Hanuman',
            'girls': 'Harshita, Hina, Heena, Hira, Hansika, Harleen, Himani, Hetal, Henna, Harsha'
        },
        'I': {
            'boys': 'Ishaan, Ishita, Irfan, Inder, Indra, Inayat, Ishan, Ila, Isha, Ishani',
            'girls': 'Ishani, Isha, Indira, Indrani, Ishita, Ipsita, Inaaya, Ishika, Indu, Ilika'
        },
        'J': {
            'boys': 'Jatin, Jaya, Jasleen, Jhanvi, Jyoti, Jaya, Jhanvi, Jignesh, Jheel, Jia',
            'girls': 'Jhanvi, Jaya, Jasleen, Jheel, Jiya, Jyoti, Jhansi, Jhanavi, Jui, Jigna'
        },
        'K': {
            'boys': 'Kabir, Kavya, Kriti, Karan, Kirti, Khushi, Kunal, Komal, Kirtan, Kirtika',
            'girls': 'Kavita, Kirti, Komal, Khushi, Krisha, Kamini, Kashish, Kajal, Kalpana, Kanika'
        },
        'L': {
            'boys': 'Lakshay, Lata, Lavanya, Lavleen, Lipika, Latika, Laxmi, Lekha, Luv, Lakshya',
            'girls': 'Lavanya, Lakshmi, Leela, Lalita, Latika, Lata, Lavina, Laxmi, Lekha, Lopa'
        },
        'M': {
            'boys': 'Manish, Meera, Mohan, Mohit, Mansi, Meenakshi, Mahima, Mitali, Maya, Manisha',
            'girls': 'Meera, Mohini, Mamta, Manju, Malini, Madhu, Meenakshi, Minakshi, Mohana, Megha'
        },
        'N': {
            'boys': 'Neha, Naveen, Nikita, Nisha, Nitin, Nidhi, Namita, Nehal, Niharika, Nandini',
            'girls': 'Neha, Nisha, Nidhi, Naina, Neetu, Nisha, Navya, Nandini, Nitya, Nikita'
        },
        'O': {
            'boys': 'Om, Ojas, Oishi, Ovi, Omkar, Ojaswi, Oviya, Oishi, Omprakash, Ojaswini',
            'girls': 'Ojaswini, Oviya, Oishi, Ojasvi, Oorja, Ovi, Oli, Oormila, Omisha, Opal'
        },
        'P': {
            'boys': 'Pranav, Priya, Pratik, Pooja, Pranjal, Parul, Priti, Prisha, Priyanka, Prachi',
            'girls': 'Prisha, Pooja, Priyanka, Priti, Prachi, Priya, Parul, Pragya, Pranali, Pratibha'
        },
        'Q': {
            'boys': 'Qamar, Quasar, Qasim, Qais, Qadira, Qudsiya, Quratulain, Qaiser, Qazi, Quin',
            'girls': 'Quratulain, Qadira, Qudsiya, Quratulain, Qandeel, Qamar, Quasim, Qandeel, Qubra, Qurratulain'
        }, 'R': {
            'boys': 'Rahul, Ritu, Rajesh, Rohit, Renu, Reena, Rashi, Riddhi, Riya, Rahul',
            'girls': 'Riya, Rashi, Rina, Ritu, Rhea, Rekha, Riyaan, Rani, Ritika, Radhika'
        },
        'S': {
            'boys': 'Sachin, Swati, Sneha, Sumit, Suraj, Sunita, Shivani, Shweta, Sakshi, Sonam',
            'girls': 'Swati, Sneha, Sunita, Sakshi, Sonam, Shreya, Shivani, Sushma, Simran, Sanya'
        },
        'T': {
            'boys': 'Tanmay, Tanya, Tarun, Tushar, Trisha, Tanuja, Tanishq, Taniya, Tia, Tisha',
            'girls': 'Tanya, Tanisha, Tanvi, Trisha, Tina, Tanuja, Tia, Twinkle, Trupti, Tripti'
        },
        'U': {
            'boys': 'Uday, Urvashi, Umesh, Urvi, Upasana, Udita, Utkarsh, Usha, Urmila, Uzma',
            'girls': 'Urvashi, Urvi, Usha, Upasana, Udita, Uma, Umaima, Urja, Urmila, Ujwala'
        },
        'V': {
            'boys': 'Vikram, Varun, Vidya, Vaibhav, Vinita, Veer, Vishal, Vishakha, Varsha, Vandana',
            'girls': 'Vidya, Vaishali, Varsha, Vandana, Vinita, Vibha, Veena, Vaidehi, Vani, Vishakha'
        },
        'W': {
            'boys': 'Waseem, Wafa, Waqar, Wajid, Waheeda, Wasiq, Wamiq, Wamiq, Wali, Wamiq',
            'girls': 'Wafa, Waheeda, Wajiha, Wajida, Wamika, Warisha, Warda, Wazir, Widaad, Wajiha'
        },
        'X': {
            'boys': 'Xavier, Xyla, Xander, Xenia, Xena, Xara, Xara, Xyla, Xanthus, Xzavier',
            'girls': 'Xena, Xara, Xenia, Xyla, Xyla, Xanthia, Xara, Xara, Xyla, Xina'
        },
        'Y': {
            'boys': 'Yash, Yamini, Yuvraj, Yashika, Yuvika, Yuvan, Yukta, Yusra, Yuvan, Yasmine',
            'girls': 'Yamini, Yuvika, Yashika, Yusra, Yashvi, Yashoda, Yashita, Yojana, Yashasvi, Yara'
        },
        'Z': {
            'boys': 'Zain, Zoya, Zara, Zeba, Zia, Zohaib, Zayn, Zeba, Zaina, Zayna',
            'girls': 'Zoya, Zara, Zeba, Zara, Zahra, Zainab, Zenobia, Zaynab, Zaina, Zara'
        }


    };

    // Display the corresponding names 
    const namesByGender = names[letterInput][gender] || '';
    const nameList = namesByGender.split(', ');
    nameList.forEach(name => {
        const div = document.createElement('div');
        div.textContent = name;
        div.className = 'alphabet';
        nameContainer.appendChild(div);
    });
}