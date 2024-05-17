document.addEventListener('DOMContentLoaded', () => {
    fetch('faq.json')
      .then(response => response.json())
      .then(data => displayFAQ(data.faq))
      .catch(error => console.error('Error fetching data:', error));
  });
  
  function displayFAQ(faqs) {
    const faqList = document.getElementById('faq-list');
  
    faqs.forEach(faq => {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';
  
      const question = document.createElement('h2');
      question.textContent = faq.question;
      question.addEventListener('click', () => {
        const answer = faqItem.querySelector('p');
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
      });
  
      const answer = document.createElement('p');
      answer.textContent = faq.answer;
  
      faqItem.appendChild(question);
      faqItem.appendChild(answer);
      faqList.appendChild(faqItem);
    });
  }
  